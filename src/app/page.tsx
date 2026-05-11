import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { kpis, performance, tasks } from "@/lib/data";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function DashboardPage() {
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
        <CardContent className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Line yAxisId="left" type="monotone" dataKey="spend" stroke="#2563eb" strokeWidth={2} />
              <Line yAxisId="right" type="monotone" dataKey="roas" stroke="#16a34a" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
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
