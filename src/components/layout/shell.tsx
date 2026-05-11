import Link from "next/link";
import { BarChart3, Briefcase, ClipboardList, FileText, LayoutDashboard, Users } from "lucide-react";

const nav = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/clients", label: "Clients", icon: Users },
  { href: "/campaigns", label: "Campaigns", icon: BarChart3 },
  { href: "/leads", label: "Leads", icon: Briefcase },
  { href: "/invoices", label: "Invoices", icon: FileText },
  { href: "/tasks", label: "Tasks", icon: ClipboardList },
];

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[240px_1fr]">
      <aside className="border-r bg-white/70 p-4 backdrop-blur">
        <h1 className="mb-6 text-lg font-semibold">Seattle Advertising Command Center</h1>
        <nav className="space-y-1">
          {nav.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-muted">
              <Icon className="h-4 w-4" /> {label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="p-6 md:p-8">{children}</main>
    </div>
  );
}
