# FEW Solar API

Leads backend for the FEW Solar website — **Hono + PostgreSQL**, runs on plain Node locally
and on **Wasmer Edge** (Edge.js) in production.

## Endpoints

| Method | Path | Auth | Purpose |
|---|---|---|---|
| GET | `/api/health` | — | Service + DB status |
| POST | `/api/leads` | — | New lead from contact form / calculator |
| GET | `/api/leads` | `x-admin-key` | List latest 100 leads |
| PATCH | `/api/leads/:id` | `x-admin-key` | Change lead status (`new` / `contacted` / `done`) |

## Local run

```bash
cd server
cp .env.example .env   # DATABASE_URL + ADMIN_KEY bharo (ya DATABASE_URL khali = in-memory dev mode)
npm install
npm start              # http://localhost:3000
```

## Deploy (Wasmer Edge)

1. wasmer.io/new → GitHub repo connect → root directory `server`
2. Managed PostgreSQL add karo — `DATABASE_URL` inject hoga, saath `DATABASE_SSL=true` set karo
3. `ADMIN_KEY` env me aik lambi random key rakho — admin panel isi se khulta hai
