insert into public.clients (name, industry, status, mrr_cents)
values
  ('Northpoint Homes', 'Real Estate', 'Active', 1800000),
  ('Cascade Dental', 'Healthcare', 'Active', 1150000),
  ('RainCity Legal', 'Legal', 'Onboarding', 820000)
on conflict do nothing;

with c as (select id, name from public.clients)
insert into public.campaigns (client_id, name, channel, budget_cents, cpl_cents, roas, spend_cents, month)
values
  ((select id from c where name='Northpoint Homes'), 'Spring Buyer Blitz', 'Meta', 2400000, 4200, 4.30, 5200000, 'May'),
  ((select id from c where name='Cascade Dental'), 'Implant Awareness', 'Google', 1700000, 5800, 3.80, 4100000, 'Mar'),
  ((select id from c where name='RainCity Legal'), 'Estate Leads Q2', 'LinkedIn', 1150000, 9100, 3.70, 3600000, 'Feb')
on conflict do nothing;

insert into public.leads (client_id, source, quality, count)
values
  ((select id from public.clients where name='Northpoint Homes'), 'Meta', 'High', 72),
  ((select id from public.clients where name='Cascade Dental'), 'Google', 'Medium', 59),
  ((select id from public.clients where name='RainCity Legal'), 'Referral', 'High', 21)
on conflict do nothing;

insert into public.invoices (client_id, amount_cents, due_date, status)
values
  ((select id from public.clients where name='Northpoint Homes'), 1800000, '2026-05-20', 'Sent'),
  ((select id from public.clients where name='Cascade Dental'), 1150000, '2026-05-16', 'Paid'),
  ((select id from public.clients where name='RainCity Legal'), 820000, '2026-05-14', 'Overdue')
on conflict do nothing;

insert into public.tasks (client_id, task, owner, priority, done)
values
  (null, 'Approve Q2 media plan', 'Alyssa', 'High', false),
  (null, 'Launch retargeting creative', 'Jordan', 'Medium', false),
  (null, 'Client KPI review deck', 'Marcus', 'High', false)
on conflict do nothing;
