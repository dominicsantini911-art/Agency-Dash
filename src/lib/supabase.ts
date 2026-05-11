import { TableName, TableRow } from "@/lib/database.types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function authHeaders() {
  return {
    apikey: supabaseAnonKey ?? "",
    Authorization: `Bearer ${supabaseAnonKey ?? ""}`,
    "Content-Type": "application/json",
  };
}

export function hasSupabaseEnv() {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

export function getSupabaseEnvStatus() {
  if (hasSupabaseEnv()) return "configured";
  return "missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY";
}

export async function selectTable<T extends TableName>(table: T): Promise<TableRow<T>[]> {
  if (!hasSupabaseEnv()) return [];

  const url = `${supabaseUrl}/rest/v1/${table}?select=*`;
  const response = await fetch(url, {
    headers: authHeaders(),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Supabase query failed for ${table}: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as TableRow<T>[];
}
