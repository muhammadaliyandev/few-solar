// FEW Solar API — Hono + PostgreSQL
// Runs locally with plain Node, and on Wasmer Edge (Edge.js / Node 24).
// If DATABASE_URL is not set, leads are kept in memory (local dev only).
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import pg from 'pg';

const { Pool } = pg;
const PORT = Number(process.env.PORT || 3000);
const ADMIN_KEY = process.env.ADMIN_KEY || '';

let pool = null;
let memoryLeads = [];
let memorySeq = 1;

if (process.env.DATABASE_URL) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
  });
  await pool.query(`CREATE TABLE IF NOT EXISTS leads (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    city TEXT,
    monthly_bill INTEGER,
    source TEXT NOT NULL DEFAULT 'contact',
    message TEXT,
    status TEXT NOT NULL DEFAULT 'new',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
  )`);
  console.log('[few-solar-api] PostgreSQL connected, leads table ready');
} else {
  console.warn('[few-solar-api] DATABASE_URL not set — in-memory leads store (dev only, data resets on restart)');
}

async function insertLead(lead) {
  if (pool) {
    const r = await pool.query(
      `INSERT INTO leads (name, phone, email, city, monthly_bill, source, message)
       VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id, created_at`,
      [lead.name, lead.phone, lead.email, lead.city, lead.monthlyBill, lead.source, lead.message]
    );
    return r.rows[0];
  }
  const row = { id: memorySeq++, ...lead, monthly_bill: lead.monthlyBill, status: 'new', created_at: new Date().toISOString() };
  memoryLeads.unshift(row);
  return row;
}

async function listLeads() {
  if (pool) {
    const r = await pool.query('SELECT * FROM leads ORDER BY id DESC LIMIT 100');
    return r.rows;
  }
  return memoryLeads.slice(0, 100);
}

async function updateLeadStatus(id, status) {
  if (pool) {
    const r = await pool.query('UPDATE leads SET status=$1 WHERE id=$2 RETURNING *', [status, id]);
    return r.rows[0] || null;
  }
  const row = memoryLeads.find((l) => l.id === Number(id));
  if (row) row.status = status;
  return row || null;
}

function requireAdmin(c) {
  if (!ADMIN_KEY) return c.json({ error: 'Admin is not configured (ADMIN_KEY missing)' }, 503);
  if (c.req.header('x-admin-key') !== ADMIN_KEY) return c.json({ error: 'Unauthorized' }, 401);
  return null;
}

const app = new Hono();
app.use('/api/*', cors());

app.get('/api/health', (c) => c.json({ ok: true, service: 'few-solar-api', db: pool ? 'postgres' : 'memory' }));

app.post('/api/leads', async (c) => {
  let body;
  try { body = await c.req.json(); } catch { return c.json({ error: 'Invalid JSON' }, 400); }
  const name = String(body.name || '').trim();
  const phone = String(body.phone || '').replace(/[^0-9+]/g, '');
  const email = body.email ? String(body.email).trim() : null;
  if (name.length < 2) return c.json({ error: 'Name is required' }, 400);
  if (phone.replace(/\D/g, '').length < 7 || phone.replace(/\D/g, '').length > 15)
    return c.json({ error: 'A valid phone number is required' }, 400);
  if (email && !email.includes('@')) return c.json({ error: 'Invalid email' }, 400);
  const bill = Number(body.monthlyBill);
  const lead = {
    name,
    phone,
    email,
    city: body.city ? String(body.city).trim() : null,
    monthlyBill: Number.isFinite(bill) && bill >= 0 ? Math.round(bill) : null,
    source: ['contact', 'calculator'].includes(body.source) ? body.source : 'contact',
    message: body.message ? String(body.message).slice(0, 1000) : null,
  };
  const row = await insertLead(lead);
  return c.json({ ok: true, id: row.id }, 201);
});

app.get('/api/leads', async (c) => {
  const denied = requireAdmin(c);
  if (denied) return denied;
  return c.json({ leads: await listLeads() });
});

app.patch('/api/leads/:id', async (c) => {
  const denied = requireAdmin(c);
  if (denied) return denied;
  const body = await c.req.json().catch(() => ({}));
  if (!['new', 'contacted', 'done'].includes(body.status))
    return c.json({ error: 'Status must be new, contacted or done' }, 400);
  const row = await updateLeadStatus(c.req.param('id'), body.status);
  if (!row) return c.json({ error: 'Lead not found' }, 404);
  return c.json({ ok: true, lead: row });
});

serve({ fetch: app.fetch, port: PORT });
console.log(`[few-solar-api] listening on http://localhost:${PORT}`);
