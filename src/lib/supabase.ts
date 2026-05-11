import { TableRow } from "@/lib/database.types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function headers() {
  return {
    apikey: supabaseAnonKey ?? "",
    Authorization: `Bearer ${supabaseAnonKey ?? ""}`,
    "Content-Type": "application/json",
  };
}

export function hasSupabaseEnv() {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

export async function selectTable<T extends Parameters<typeof tableMap>[0]>(table: T): Promise<TableRow<T>[]> {
  if (!hasSupabaseEnv()) return [];

  const url = `${supabaseUrl}/rest/v1/${table}?select=*`;
  const response = await fetch(url, { headers: headers(), cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Supabase query failed for ${table}: ${response.statusText}`);
  }

  return (await response.json()) as TableRow<T>[];
}

function tableMap(table: "clients" | "campaigns" | "leads" | "invoices" | "tasks") {
  return table;
}
