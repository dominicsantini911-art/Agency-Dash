export const kpis = [
  { label: "Monthly Revenue", value: "$128,400", delta: "+12.4%" },
  { label: "Active Campaigns", value: "24", delta: "+3" },
  { label: "New Leads", value: "186", delta: "+22%" },
  { label: "Open Invoices", value: "$39,200", delta: "5 overdue" },
];

export const performance = [
  { month: "Jan", spend: 32000, roas: 3.4 },
  { month: "Feb", spend: 36000, roas: 3.7 },
  { month: "Mar", spend: 41000, roas: 3.8 },
  { month: "Apr", spend: 47000, roas: 4.1 },
  { month: "May", spend: 52000, roas: 4.3 },
];

export const clients = [
  { name: "Northpoint Homes", industry: "Real Estate", status: "Active", mrr: "$18,000" },
  { name: "Cascade Dental", industry: "Healthcare", status: "Active", mrr: "$11,500" },
  { name: "RainCity Legal", industry: "Legal", status: "Onboarding", mrr: "$8,200" },
];

export const campaigns = [
  { name: "Spring Buyer Blitz", channel: "Meta", budget: "$24,000", cpl: "$42" },
  { name: "Implant Awareness", channel: "Google", budget: "$17,000", cpl: "$58" },
  { name: "Estate Leads Q2", channel: "LinkedIn", budget: "$11,500", cpl: "$91" },
];

export const leads = [
  { source: "Meta", count: 72, quality: "High" },
  { source: "Google", count: 59, quality: "Medium" },
  { source: "Referral", count: 21, quality: "High" },
];

export const invoices = [
  { client: "Northpoint Homes", amount: "$18,000", due: "2026-05-20", status: "Sent" },
  { client: "Cascade Dental", amount: "$11,500", due: "2026-05-16", status: "Paid" },
  { client: "RainCity Legal", amount: "$8,200", due: "2026-05-14", status: "Overdue" },
];

export const tasks = [
  { task: "Approve Q2 media plan", owner: "Alyssa", priority: "High" },
  { task: "Launch retargeting creative", owner: "Jordan", priority: "Medium" },
  { task: "Client KPI review deck", owner: "Marcus", priority: "High" },
];
