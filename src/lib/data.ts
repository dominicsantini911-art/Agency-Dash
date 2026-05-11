import { TableName, TableRow } from "@/lib/database.types";

const now = "2026-05-11T08:00:00.000Z";

export const mockData: { [K in TableName]: TableRow<K>[] } = {
  clients: [
    { id: "cl_1", name: "Northpoint Homes", industry: "Real Estate", status: "Active", mrr_cents: 1800000, created_at: now },
    { id: "cl_2", name: "Cascade Dental", industry: "Healthcare", status: "Active", mrr_cents: 1150000, created_at: now },
    { id: "cl_3", name: "RainCity Legal", industry: "Legal Services", status: "Onboarding", mrr_cents: 820000, created_at: now },
    { id: "cl_4", name: "Puget Sound Fitness", industry: "Fitness", status: "Active", mrr_cents: 960000, created_at: now },
  ],
  campaigns: [
    { id: "ca_1", client_id: "cl_1", name: "Spring Buyer Blitz", channel: "Meta", budget_cents: 2400000, cpl_cents: 4200, roas: 4.2, spend_cents: 1980000, month: "2026-03", created_at: now },
    { id: "ca_2", client_id: "cl_2", name: "Implant Awareness", channel: "Google", budget_cents: 1700000, cpl_cents: 5800, roas: 3.9, spend_cents: 1510000, month: "2026-04", created_at: now },
    { id: "ca_3", client_id: "cl_3", name: "Estate Leads Q2", channel: "LinkedIn", budget_cents: 1150000, cpl_cents: 9100, roas: 3.3, spend_cents: 1010000, month: "2026-04", created_at: now },
    { id: "ca_4", client_id: "cl_4", name: "Summer Membership Push", channel: "TikTok", budget_cents: 960000, cpl_cents: 3900, roas: 4.5, spend_cents: 820000, month: "2026-05", created_at: now },
  ],
  leads: [
    { id: "le_1", client_id: "cl_1", source: "Meta", quality: "High", count: 72, created_at: now },
    { id: "le_2", client_id: "cl_2", source: "Google", quality: "Medium", count: 59, created_at: now },
    { id: "le_3", client_id: "cl_3", source: "Referral", quality: "High", count: 21, created_at: now },
    { id: "le_4", client_id: "cl_4", source: "TikTok", quality: "High", count: 34, created_at: now },
  ],
  invoices: [
    { id: "in_1", client_id: "cl_1", amount_cents: 1800000, due_date: "2026-05-20", status: "Sent", created_at: now },
    { id: "in_2", client_id: "cl_2", amount_cents: 1150000, due_date: "2026-05-16", status: "Paid", created_at: now },
    { id: "in_3", client_id: "cl_3", amount_cents: 820000, due_date: "2026-05-14", status: "Overdue", created_at: now },
    { id: "in_4", client_id: "cl_4", amount_cents: 960000, due_date: "2026-05-22", status: "Sent", created_at: now },
  ],
  tasks: [
    { id: "ta_1", client_id: "cl_1", task: "Approve Queen Anne neighborhood ad set", owner: "Alyssa", priority: "High", done: false, created_at: now },
    { id: "ta_2", client_id: "cl_2", task: "Launch Ballard clinic retargeting creative", owner: "Jordan", priority: "Medium", done: false, created_at: now },
    { id: "ta_3", client_id: "cl_3", task: "Prepare monthly KPI review deck", owner: "Marcus", priority: "High", done: false, created_at: now },
    { id: "ta_4", client_id: null, task: "Finalize Fremont photo shoot schedule", owner: "Nia", priority: "Low", done: false, created_at: now },
  ],
  monthly_kpis: [
    { id: "kp_1", month: "2026-01", revenue_cents: 11890000, active_campaigns: 19, new_leads: 141, open_invoices_cents: 2730000, created_at: now },
    { id: "kp_2", month: "2026-02", revenue_cents: 12350000, active_campaigns: 21, new_leads: 159, open_invoices_cents: 3010000, created_at: now },
    { id: "kp_3", month: "2026-03", revenue_cents: 12840000, active_campaigns: 24, new_leads: 186, open_invoices_cents: 3920000, created_at: now },
    { id: "kp_4", month: "2026-04", revenue_cents: 13120000, active_campaigns: 25, new_leads: 194, open_invoices_cents: 3880000, created_at: now },
  ],
};
