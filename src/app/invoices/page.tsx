import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { invoices } from "@/lib/data";

export default function InvoicesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Invoices</h2>
        <p className="text-sm text-muted-foreground">Mock data view (Supabase-ready structure).</p>
      </div>
      <Card>
        <CardHeader><CardTitle>Invoices Table</CardTitle></CardHeader>
        <CardContent>
          <pre className="overflow-auto rounded-md bg-muted p-4 text-xs">{JSON.stringify(invoices, null, 2)}</pre>
        </CardContent>
      </Card>
    </div>
  );
}
