create extension if not exists "pgcrypto";

create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  industry text not null,
  status text not null check (status in ('Active', 'Onboarding', 'Paused')),
  mrr_cents integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.campaigns (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients(id) on delete cascade,
  name text not null,
  channel text not null,
  budget_cents integer not null default 0,
  cpl_cents integer not null default 0,
  roas numeric(4,2) not null default 0,
  spend_cents integer not null default 0,
  month text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients(id) on delete cascade,
  source text not null,
  quality text not null check (quality in ('High', 'Medium', 'Low')),
  count integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.invoices (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients(id) on delete cascade,
  amount_cents integer not null default 0,
  due_date date not null,
  status text not null check (status in ('Sent', 'Paid', 'Overdue')),
  created_at timestamptz not null default now()
);

create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references public.clients(id) on delete set null,
  task text not null,
  owner text not null,
  priority text not null check (priority in ('High', 'Medium', 'Low')),
  done boolean not null default false,
  created_at timestamptz not null default now()
);
