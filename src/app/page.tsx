import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { kpis, performance, tasks } from "@/lib/data";

export default function DashboardPage() {
  const maxSpend = Math.max(...performance.map((item) => item.spend));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <p className="text-sm text-muted-foreground">Executive overview of revenue, performance, and operations.</p>
      </div>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <Card key={kpi.label}><CardHeader><CardTitle className="text-sm text-muted-foreground">{kpi.label}</CardTitle></CardHeader><CardContent><p className="text-2xl font-semibold">{kpi.value}</p><p className="text-xs text-muted-foreground">{kpi.delta}</p></CardContent></Card>
        ))}
      </section>
      <Card>
        <CardHeader><CardTitle>Ad Spend vs ROAS</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-3">
            {performance.map((item) => (
              <div key={item.month} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.month}</span>
                  <span className="text-muted-foreground">${item.spend.toLocaleString()} · ROAS {item.roas.toFixed(1)}x</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-blue-600" style={{ width: `${(item.spend / maxSpend) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Priority Tasks</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">{tasks.map((t) => <li key={t.task} className="flex justify-between rounded-md border p-2"><span>{t.task}</span><span className="text-muted-foreground">{t.owner}</span></li>)}</ul>
        </CardContent>
      </Card>
    </div>
  );
}
