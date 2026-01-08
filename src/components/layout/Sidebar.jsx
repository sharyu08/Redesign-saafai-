"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Activity,
  BarChart3,
  ChevronDown,
  Layers3,
  ListChecks,
  LogOut,
  Map,
  MapPin,
  MenuSquare,
  MessageSquare,
  Plus,
  Settings,
  Users,
  Wrench,
  ChevronRight,
} from "lucide-react";

/* ---------------- NAV DATA ---------------- */
const navSections = [
  {
    heading: "Overview",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: BarChart3 },
      {
        label: "Location Hierarchy",
        icon: Layers3,
        children: [
          { label: "View Hierarchy", href: "/dashboard/locationHierarchy" },
          { label: "Add Hierarchy", href: "/dashboard/locationHierarchy/add", icon: Plus },
        ],
      },
      {
        label: "Washrooms",
        icon: Wrench,
        children: [
          { label: "Washrooms List", href: "/dashboard/washrooms" },
          { label: "Add Washroom", href: "/dashboard/washrooms/add-washroom", icon: Plus },
        ],
      },
    ],
  },
  {
    heading: "Operations",
    items: [
      {
        label: "User Management",
        icon: Users,
        children: [
          { label: "User List", href: "/dashboard/user-management" },
          { label: "Add User", href: "/dashboard/user-management/add-user", icon: Plus },
        ],
      },
      {
        label: "Cleaner Mapping",
        icon: Map,
        children: [
          { label: "Mapped List", href: "/dashboard/cleaner-assignments" },
          { label: "Add Mapping", href: "/dashboard/cleaner-assignments/add", icon: ListChecks },
        ],
      },
      { label: "Locate On Map", href: "/dashboard/locate", icon: MapPin },
      { label: "Cleaner Activity", href: "/dashboard/cleaner-activity", icon: Activity },
      { label: "User Review", href: "/dashboard/user-reviews", icon: MessageSquare },
      { label: "Reports", href: "/dashboard/reports", icon: MenuSquare },
    ],
  },
];

export default function Sidebar({ open, onClose, collapsed, onToggleCollapse }) {
  const pathname = usePathname();

  // Logic to determine which dropdowns should be open based on current URL
  const initialOpenState = useMemo(() => {
    const state = {};
    navSections.forEach((section) => {
      section.items.forEach((item) => {
        if (item.children) {
          state[item.label] = item.children.some((child) => pathname.startsWith(child.href));
        }
      });
    });
    return state;
  }, [pathname]);

  const [openGroups, setOpenGroups] = useState(initialOpenState);

  // Sync open groups if the URL changes externally
  useEffect(() => {
    setOpenGroups(initialOpenState);
  }, [initialOpenState, pathname]);

  const isActive = (href) => pathname === href || pathname.startsWith(href + "/");

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex
        ${collapsed ? "w-20" : "w-72"}
        flex-col
        bg-[#e0f2f1]                         /* light teal sidebar */
        border-r border-[#d0e8e6]
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        transition-all duration-200
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
    >
      {/* HEADER - Sticky within sidebar */}
      <div className="sticky top-0 z-10 flex h-20 items-center gap-3 px-4 border-b border-[#d0e8e6] dark:border-[hsl(var(--sidebar-border))] bg-[#e0f2f1]/90 dark:bg-[hsl(var(--sidebar-bg))]/90 backdrop-blur-md">
        {!collapsed && (
          <>
            <div className="h-10 w-10 rounded-xl bg-white dark:bg-[hsl(var(--sidebar-bg))] flex items-center justify-center shadow-sm border border-[#d0e8e6] dark:border-[hsl(var(--sidebar-border))]">
              <Image src="/image/dashboard img.png" alt="Logo" width={28} height={28} unoptimized />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-black uppercase tracking-widest text-cyan-600 dark:text-cyan-400">Admin Console</p>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-100">Safai</p>
            </div>
          </>
        )}
        <button
          onClick={onToggleCollapse}
          className={`ml-auto h-8 w-8 rounded-lg hover:bg-white/60 dark:hover-[hsl(var(--sidebar-bg))]/80 flex items-center justify-center transition-transform duration-300 ${collapsed ? "" : "rotate-180"} border border-[#d0e8e6] dark:border-[hsl(var(--sidebar-border))]`}
        >
          <ChevronRight className="h-4 w-4 text-slate-600 dark:text-slate-300" />
        </button>
      </div>

      {/* NAV SECTION */}
      <div className="flex-1 px-3 py-6 space-y-6 overflow-y-auto scrollbar-hide">
        {navSections.map((section, sectionIndex) => (
          <div key={section.heading}>
            {!collapsed && (
              <p className="px-4 mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                {section.heading}
              </p>
            )}
            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                if (!item.children) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition-all group ${isActive(item.href)
                        ? "nav-item-active"
                        : "text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover-[hsl(var(--sidebar-bg))]/80"
                        }`}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span className="truncate">{item.label}</span>}
                    </Link>
                  );
                }
                return (
                  <div key={item.label} className="space-y-1">
                    <button
                      onClick={() => setOpenGroups((p) => ({ ...p, [item.label]: !p[item.label] }))}
                      className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition-all ${isActive(item.href)
                        ? "text-cyan-400 dark:text-cyan-400"
                        : "text-slate-300 dark:text-slate-300 hover:bg-white/50 dark:hover-[hsl(var(--sidebar-bg))]/80"
                        }`}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && (
                        <>
                          <span className="flex-1 text-left truncate">{item.label}</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 text-slate-400 ${openGroups[item.label] ? "rotate-180" : ""
                              }`}
                          />
                        </>
                      )}
                    </button>
                    {!collapsed && openGroups[item.label] && (
                      <div className="ml-9 space-y-1 border-l-2 border-slate-200 dark:border-[hsl(var(--sidebar-border))] pl-4 animate-in slide-in-from-top-1 duration-200">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={onClose}
                            className={`block rounded-xl px-4 py-2 text-xs font-bold transition-all ${isActive(child.href)
                              ? "text-white dark:text-white bg-[hsl(var(--sidebar-bg))] dark:bg-[hsl(var(--sidebar-bg))] shadow-sm border border-[hsl(var(--sidebar-border))]"
                              : "text-slate-400 dark:text-slate-400 hover:text-cyan-400 dark:hover:text-cyan-400 hover:translate-x-1"
                              }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {!collapsed && sectionIndex < navSections.length - 1 && (
              <div className="h-px bg-slate-200 dark:bg-[hsl(var(--sidebar-border))] my-6 mx-4" />
            )}
          </div>
        ))}
      </div>

      {/* FOOTER - Fixed at bottom of sidebar */}
      <div className="sticky bottom-0 p-4 border-t border-[#d0e8e6] dark:border-[hsl(var(--sidebar-border))] bg-[#e0f2f1]/90 dark:bg-[hsl(var(--sidebar-bg))] backdrop-blur-md space-y-3">
        <div className="rounded-[20px] p-3 bg-white/40 dark:bg-[hsl(var(--sidebar-bg))]/80 border border-white/60 dark:border-[hsl(var(--sidebar-border))] hover:bg-white/60 dark:hover-[hsl(var(--sidebar-bg))]/90 transition-colors">
          <Link
            href="/dashboard/settings"
            onClick={onClose}
            className="flex items-center gap-3 group"
          >
            <div className="h-9 w-9 flex-shrink-0 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-black text-xs shadow-sm">
              TI
            </div>
            {!collapsed && (
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-black text-slate-800 dark:text-slate-100 truncate">Test Intern</p>
                <p className="text-[10px] font-bold text-cyan-600 dark:text-cyan-400 uppercase">Admin</p>
              </div>
            )}
            {!collapsed && (
              <Settings className="h-4 w-4 text-slate-400 dark:text-slate-500 group-hover:rotate-90 transition-transform group-hover:text-slate-600 dark:group-hover:text-slate-300" />
            )}
          </Link>
        </div>
        <button
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-rose-50 px-4 py-3 text-sm font-black text-rose-600 border border-rose-100 hover:bg-rose-600 hover:text-white transition-all group"
          onClick={() => {
            // Handle Logout
          }}
        >
          <LogOut className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>

      {/* CUSTOM STYLES */}
      <style jsx>{`
        .nav-item-active {
          background: #ffffff !important;
          color: #000000 !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          position: relative;
        }
        .dark .nav-item-active {
          background: hsl(var(--sidebar-bg)) !important;
          color: #ffffff !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          border: 1px solid hsl(var(--sidebar-border));
        }
        .nav-item-active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 20%;
          bottom: 20%;
          width: 4px;
          background: #06b6d4;
          border-radius: 0 4px 4px 0;
        }
        .scrollbar-hide::-webkit-scrollbar { 
          display: none; 
        }
      `}</style>
    </aside>
  );
}