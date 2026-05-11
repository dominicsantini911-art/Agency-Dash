import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { leads } from "@/lib/data";

export default function LeadsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Leads</h2>
        <p className="text-sm text-muted-foreground">Mock data view (Supabase-ready structure).</p>
      </div>
      <Card>
        <CardHeader><CardTitle>Leads Table</CardTitle></CardHeader>
        <CardContent>
          <pre className="overflow-auto rounded-md bg-muted p-4 text-xs">{JSON.stringify(leads, null, 2)}</pre>
        </CardContent>
      </Card>
    </div>
  );
}
