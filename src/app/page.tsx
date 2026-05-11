import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSupabaseEnvStatus, hasSupabaseEnv, selectTable } from "@/lib/supabase";

const money = (cents: number) => `$${(cents / 100).toLocaleString()}`;

export default async function DashboardPage() {
  const [monthlyKpis, campaigns, tasks] = await Promise.all([
    selectTable("monthly_kpis"),
    selectTable("campaigns"),
    selectTable("tasks"),
  ]);

  const latest = [...monthlyKpis].sort((a, b) => a.month.localeCompare(b.month)).at(-1);
  const kpis = latest
    ? [
        { label: "Monthly Revenue", value: money(latest.revenue_cents), delta: latest.month },
        { label: "Active Campaigns", value: String(latest.active_campaigns), delta: "Running" },
        { label: "New Leads", value: String(latest.new_leads), delta: "This month" },
        { label: "Open Invoices", value: money(latest.open_invoices_cents), delta: "Outstanding" },
      ]
    : [];

  const performance = campaigns.map((c) => ({ month: c.month, spend: c.spend_cents / 100, roas: c.roas }));
  const maxSpend = Math.max(...performance.map((item) => item.spend), 1);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <p className="text-sm text-muted-foreground">
          Executive overview of revenue, performance, and operations
          {!hasSupabaseEnv() ? ` (${getSupabaseEnvStatus()}).` : "."}
        </p>
      </div>

      {kpis.length === 0 ? (
        <Card><CardContent className="pt-6 text-sm text-muted-foreground">No KPI data available yet.</CardContent></Card>
      ) : (
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {kpis.map((kpi) => (
            <Card key={kpi.label}><CardHeader><CardTitle className="text-sm text-muted-foreground">{kpi.label}</CardTitle></CardHeader><CardContent><p className="text-2xl font-semibold">{kpi.value}</p><p className="text-xs text-muted-foreground">{kpi.delta}</p></CardContent></Card>
          ))}
        </section>
      )}

      <Card>
        <CardHeader><CardTitle>Ad Spend vs ROAS</CardTitle></CardHeader>
        <CardContent>
          {performance.length === 0 ? <p className="text-sm text-muted-foreground">No campaign performance data yet.</p> : <div className="space-y-3">{performance.map((item) => <div key={`${item.month}-${item.spend}`} className="space-y-1"><div className="flex items-center justify-between text-sm"><span className="font-medium">{item.month}</span><span className="text-muted-foreground">${item.spend.toLocaleString()} · ROAS {Number(item.roas).toFixed(1)}x</span></div><div className="h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-blue-600" style={{ width: `${(item.spend / maxSpend) * 100}%` }} /></div></div>)}</div>}
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Priority Tasks</CardTitle></CardHeader>
        <CardContent>
          {tasks.length === 0 ? <p className="text-sm text-muted-foreground">No tasks available.</p> : <ul className="space-y-2 text-sm">{tasks.map((t) => <li key={t.id} className="flex justify-between rounded-md border p-2"><span>{t.task}</span><span className="text-muted-foreground">{t.owner}</span></li>)}</ul>}
        </CardContent>
      </Card>
    </div>
  );
}
