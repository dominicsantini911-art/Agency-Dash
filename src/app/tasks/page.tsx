import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { hasSupabaseEnv, selectTable } from "@/lib/supabase";

export default async function TasksPage() {
  const tasks = await selectTable("tasks");
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Tasks</h2>
        <p className="text-sm text-muted-foreground">Live data from Supabase{!hasSupabaseEnv() ? " (configure env vars to enable)." : "."}</p>
      </div>
      <Card>
        <CardHeader><CardTitle>Tasks Table</CardTitle></CardHeader>
        <CardContent>
          <pre className="overflow-auto rounded-md bg-muted p-4 text-xs">{JSON.stringify(tasks, null, 2)}</pre>
        </CardContent>
      </Card>
    </div>
  );
}
