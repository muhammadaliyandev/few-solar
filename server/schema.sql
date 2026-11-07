-- FEW Solar — leads table (PostgreSQL)
-- The API also creates this automatically on boot; this file is for manual setup / reference.
CREATE TABLE IF NOT EXISTS leads (
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
);
