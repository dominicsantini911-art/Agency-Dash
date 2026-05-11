export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      clients: {
        Row: {
          id: string;
          name: string;
          industry: string;
          status: "Active" | "Onboarding" | "Paused";
          mrr_cents: number;
          created_at: string;
        };
      };
      campaigns: {
        Row: {
          id: string;
          client_id: string;
          name: string;
          channel: string;
          budget_cents: number;
          cpl_cents: number;
          roas: number;
          spend_cents: number;
          month: string;
          created_at: string;
        };
      };
      leads: {
        Row: {
          id: string;
          client_id: string;
          source: string;
          quality: "High" | "Medium" | "Low";
          count: number;
          created_at: string;
        };
      };
      invoices: {
        Row: {
          id: string;
          client_id: string;
          amount_cents: number;
          due_date: string;
          status: "Sent" | "Paid" | "Overdue";
          created_at: string;
        };
      };
      tasks: {
        Row: {
          id: string;
          client_id: string | null;
          task: string;
          owner: string;
          priority: "High" | "Medium" | "Low";
          done: boolean;
          created_at: string;
        };
      };
      monthly_kpis: {
        Row: {
          id: string;
          month: string;
          revenue_cents: number;
          active_campaigns: number;
          new_leads: number;
          open_invoices_cents: number;
          created_at: string;
        };
      };
    };
  };
}

export type TableName = keyof Database["public"]["Tables"];
export type TableRow<T extends TableName> = Database["public"]["Tables"][T]["Row"];
