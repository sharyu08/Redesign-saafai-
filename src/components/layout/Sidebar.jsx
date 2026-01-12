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
  Users,
  Wrench,
  Settings,
  ChevronRight,
} from "lucide-react";

/* ---------------- NAV DATA ---------------- */
const navSections = [
  {
    heading: "Overview",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: BarChart3 },
      {
        label: "Location Hierarchy", icon: Layers3, isBold: true,
        children: [
          { label: "View Hierarchy", href: "/dashboard/locationHierarchy" },
          { label: "Add Hierarchy", href: "/dashboard/locationHierarchy/add", icon: Plus },
        ],
      },
      {
        label: "Washrooms", icon: Wrench, isBold: true,
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
        label: "User Management", icon: Users, isBold: true,
        children: [
          { label: "User List", href: "/dashboard/user-management" },
          { label: "Add User", href: "/dashboard/user-management/add-user", icon: Plus },
        ],
      },
      {
        label: "Cleaner Mapping", icon: Map, isBold: true,
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

  // Determine initial open state for dropdowns based on URL
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

  useEffect(() => {
    setOpenGroups(initialOpenState);
  }, [initialOpenState, pathname]);

  const isActive = (href) => {
    if (href === '/dashboard') return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex flex-col
        ${collapsed ? "w-20" : "w-72"}
        bg-[#e0f2f1] dark:bg-slate-800 border-r border-[#d0e8e6] dark:border-slate-700
        shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.3)]
        transition-all duration-200
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
    >
      {/* HEADER */}
      <div className="sticky top-0 z-10 flex h-20 items-center gap-3 px-4 border-b border-[#d0e8e6] dark:border-slate-700 bg-[#e0f2f1]/90 dark:bg-slate-800/90 backdrop-blur-md">
        {!collapsed && (
          <>
            <div className="h-10 w-10 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center shadow-sm border border-[#d0e8e6] dark:border-slate-600">
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
          className={`ml-auto h-8 w-8 rounded-lg hover:bg-white/60 flex items-center justify-center transition-transform duration-300 ${collapsed ? "" : "rotate-180"} border border-[#d0e8e6]`}
        >
          <ChevronRight className="h-4 w-4 text-slate-600" />
        </button>
      </div>

      {/* NAV SECTION */}
      <div className="flex-1 px-3 py-4 space-y-4 overflow-y-auto scrollbar-hide dark:scrollbar-hide">
        {navSections.map((section, sectionIndex) => (
          <div key={section.heading}>
            {!collapsed && (
              <p className="px-4 mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                {section.heading}
              </p>
            )}
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon;
                if (!item.children) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center gap-3 rounded-2xl px-4 py-2.5 text-sm font-bold transition-all nav-item ${isActive(item.href) ? 'nav-item-active' : ''}`}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span className={`truncate ${item.isBold ? 'font-black' : ''}`}>{item.label}</span>}
                    </Link>
                  );
                }
                return (
                  <div key={item.label} className="space-y-1">
                    <button
                      onClick={() => setOpenGroups((p) => ({ ...p, [item.label]: !p[item.label] }))}
                      className={`flex w-full items-center gap-3 rounded-2xl px-4 py-2.5 text-sm font-bold transition-all nav-item ${isActive(item.href) ? 'text-cyan-600' : ''}`}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && (
                        <>
                          <span className={`flex-1 text-left truncate ${item.isBold ? 'font-black' : ''}`}>{item.label}</span>
                          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openGroups[item.label] ? "rotate-180" : ""}`} />
                        </>
                      )}
                    </button>
                    {!collapsed && openGroups[item.label] && (
                      <div className="ml-9 space-y-1 border-l-2 border-[#d0e8e6] dark:border-slate-700 pl-4 animate-in slide-in-from-top-1 duration-200">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={onClose}
                            className={`block rounded-xl px-4 py-2 text-xs font-bold transition-all ${isActive(child.href) ? 'nav-item-active' : 'text-slate-500 hover:text-cyan-600 hover:translate-x-1'}`}
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
              <div className="h-px bg-[#d0e8e6] dark:bg-slate-700 my-6 mx-4" />
            )}
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="sticky bottom-0 p-4 border-t border-[#d0e8e6] dark:border-slate-700 bg-[#e0f2f1]/90 dark:bg-slate-800/90 backdrop-blur-md space-y-3">
        <div className="rounded-[20px] p-3 bg-white/40 dark:bg-slate-700/60 border border-white/60 dark:border-slate-600 hover:bg-white/60 dark:hover:bg-slate-600/80 transition-colors">
          <Link href="/dashboard/settings" onClick={onClose} className="flex items-center gap-3 group">
            <div className="h-9 w-9 flex-shrink-0 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-black text-xs shadow-sm">
              TI
            </div>
            {!collapsed && (
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-black text-slate-800 dark:text-slate-100">Test Intern</p>
                <p className="text-[10px] font-bold text-cyan-600 dark:text-cyan-400 uppercase">Admin</p>
              </div>
            )}
            {!collapsed && <Settings className="h-4 w-4 text-slate-400 group-hover:rotate-90 transition-transform" />}
          </Link>
        </div>
        <button
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-rose-50 dark:bg-rose-900 px-4 py-3 text-sm font-black text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-700 hover:bg-rose-600 dark:hover:bg-rose-400 hover:text-white transition-all group"
          onClick={() => {/* Handle Logout */ }}
        >
          <LogOut className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .nav-item {
          color: #475569;
        }
        .nav-item:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }
        .nav-item-active {
          background: linear-gradient(135deg, #ffffff, #e8f5f4) !important;
          color: #000000 !important;
          border-left: 4px solid #06b6d4;
          border-right: 1px solid #d0e8e6;
          border-top: 1px solid #d0e8e6;
          border-bottom: 1px solid #d0e8e6;
          box-shadow: 2px 2px 8px rgba(6, 182, 212, 0.15);
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </aside>
  );
}