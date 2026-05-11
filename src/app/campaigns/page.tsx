import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { hasSupabaseEnv, selectTable } from "@/lib/supabase";

export default async function CampaignsPage() {
  const campaigns = await selectTable("campaigns");
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Campaigns</h2>
        <p className="text-sm text-muted-foreground">Live data from Supabase{!hasSupabaseEnv() ? " (configure env vars to enable)." : "."}</p>
      </div>
      <Card>
        <CardHeader><CardTitle>Campaigns Table</CardTitle></CardHeader>
        <CardContent>
          <pre className="overflow-auto rounded-md bg-muted p-4 text-xs">{JSON.stringify(campaigns, null, 2)}</pre>
        </CardContent>
      </Card>
    </div>
  );
}
