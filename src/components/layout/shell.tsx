"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Briefcase,
  Building2,
  ClipboardList,
  FileText,
  LayoutDashboard,
  Menu,
  Settings,
  Users,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

const nav = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/clients", label: "Clients", icon: Users },
  { href: "/campaigns", label: "Campaigns", icon: BarChart3 },
  { href: "/leads", label: "Leads", icon: Briefcase },
  { href: "/invoices", label: "Invoices", icon: FileText },
  { href: "/tasks", label: "Tasks", icon: ClipboardList },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const pageTitle = useMemo(() => {
    const current = nav.find((item) => item.href === pathname);
    return current?.label ?? "Dashboard";
  }, [pathname]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50/60">
      {isOpen ? (
        <button
          aria-label="Close navigation"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-slate-900/40 lg:hidden"
        />
      ) : null}

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 border-r border-white/70 bg-white/85 p-5 shadow-2xl shadow-slate-300/30 backdrop-blur-xl transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">Agency Ops</p>
            <h1 className="mt-1 text-lg font-semibold leading-tight text-slate-900">Seattle Advertising Command Center</h1>
          </div>
          <button
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100 lg:hidden"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="space-y-1.5">
          {nav.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  active
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-300"
                    : "text-slate-600 hover:bg-white hover:text-slate-900"
                }`}
              >
                <Icon className={`h-4 w-4 ${active ? "text-blue-300" : "text-slate-400 group-hover:text-blue-500"}`} />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-100 to-white p-4">
          <p className="text-xs font-medium text-slate-500">Workspace</p>
          <p className="mt-1 text-sm font-semibold text-slate-800">Seattle HQ</p>
          <p className="mt-2 text-xs text-slate-500">Performance snapshot updates every 15 minutes.</p>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 border-b border-white/70 bg-white/70 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <button
                aria-label="Open menu"
                onClick={() => setIsOpen(true)}
                className="rounded-md border border-slate-200 bg-white p-2 text-slate-600 shadow-sm hover:bg-slate-50 lg:hidden"
              >
                <Menu className="h-4 w-4" />
              </button>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Command Center</p>
                <p className="text-sm font-semibold text-slate-900">{pageTitle}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 shadow-sm sm:flex">
                <Building2 className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium text-slate-700">Seattle Advertising</span>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">SA</div>
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-[1600px] p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
