import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSupabaseEnvStatus, hasSupabaseEnv, selectTable } from "@/lib/supabase";


export default async function Page() {
  const rows = await selectTable("invoices");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Invoices</h2>
        <p className="text-sm text-muted-foreground">Live data from Supabase{!hasSupabaseEnv() ? ` (${getSupabaseEnvStatus()}).` : "."}</p>
      </div>
      <Card>
        <CardHeader><CardTitle>Invoices Table</CardTitle></CardHeader>
        <CardContent>
          {rows.length === 0 ? <p className="text-sm text-muted-foreground">No records yet.</p> : <pre className="overflow-auto rounded-md bg-muted p-4 text-xs">{JSON.stringify(rows, null, 2)}</pre>}
        </CardContent>
      </Card>
    </div>
  );
}
