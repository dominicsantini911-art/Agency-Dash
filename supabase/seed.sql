truncate table public.monthly_kpis, public.tasks, public.invoices, public.leads, public.campaigns, public.clients restart identity cascade;

insert into public.clients (name, industry, status, mrr_cents)
values
  ('Northpoint Homes', 'Real Estate', 'Active', 1800000),
  ('Cascade Dental', 'Healthcare', 'Active', 1150000),
  ('RainCity Legal', 'Legal', 'Onboarding', 820000),
  ('Evergreen Auto Group', 'Automotive', 'Paused', 960000);

insert into public.campaigns (client_id, name, channel, budget_cents, cpl_cents, roas, spend_cents, month)
values
  ((select id from public.clients where name='Northpoint Homes'), 'Spring Buyer Blitz', 'Meta', 2400000, 4200, 4.30, 5200000, '2026-05'),
  ((select id from public.clients where name='Cascade Dental'), 'Implant Awareness', 'Google', 1700000, 5800, 3.80, 4100000, '2026-04'),
  ((select id from public.clients where name='RainCity Legal'), 'Estate Leads Q2', 'LinkedIn', 1150000, 9100, 3.70, 3600000, '2026-03'),
  ((select id from public.clients where name='Evergreen Auto Group'), 'Service Drive Reactivation', 'YouTube', 900000, 5100, 2.90, 2400000, '2026-05');

insert into public.leads (client_id, source, quality, count)
values
  ((select id from public.clients where name='Northpoint Homes'), 'Meta', 'High', 72),
  ((select id from public.clients where name='Cascade Dental'), 'Google', 'Medium', 59),
  ((select id from public.clients where name='RainCity Legal'), 'Referral', 'High', 21),
  ((select id from public.clients where name='Evergreen Auto Group'), 'YouTube', 'Medium', 34);

insert into public.invoices (client_id, amount_cents, due_date, status)
values
  ((select id from public.clients where name='Northpoint Homes'), 1800000, '2026-05-20', 'Sent'),
  ((select id from public.clients where name='Cascade Dental'), 1150000, '2026-05-16', 'Paid'),
  ((select id from public.clients where name='RainCity Legal'), 820000, '2026-05-14', 'Overdue'),
  ((select id from public.clients where name='Evergreen Auto Group'), 960000, '2026-05-28', 'Sent');

insert into public.tasks (client_id, task, owner, priority, done)
values
  (null, 'Approve Q2 media plan', 'Alyssa', 'High', false),
  (null, 'Launch retargeting creative', 'Jordan', 'Medium', false),
  ((select id from public.clients where name='Cascade Dental'), 'Finalize landing page HIPAA review', 'Marcus', 'High', false),
  ((select id from public.clients where name='Northpoint Homes'), 'Review CRM lead routing audit', 'Priya', 'Low', true);

insert into public.monthly_kpis (month, revenue_cents, active_campaigns, new_leads, open_invoices_cents)
values
  ('2026-01', 9940000, 18, 121, 2310000),
  ('2026-02', 10820000, 20, 142, 2640000),
  ('2026-03', 11670000, 22, 153, 3180000),
  ('2026-04', 12190000, 23, 171, 2890000),
  ('2026-05', 12840000, 24, 186, 3920000);
