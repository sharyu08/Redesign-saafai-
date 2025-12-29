"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
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
          { label: "Add Washroom", href: "/dashboard/washrooms/add", icon: Plus },
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

/* ---------------- SIDEBAR ---------------- */
export default function Sidebar({ open, onClose, collapsed, onToggleCollapse }) {
  const pathname = usePathname();

  const initialOpen = useMemo(() => {
    const state = {};
    navSections.forEach((section) => {
      section.items.forEach((item) => {
        if (item.children) {
          state[item.label] = item.children.some((child) =>
            pathname.startsWith(child.href)
          );
        }
      });
    });
    return state;
  }, [pathname]);

  const [openGroups, setOpenGroups] = useState(initialOpen);

  useEffect(() => {
    setOpenGroups(initialOpen);
  }, [initialOpen]);

  const isActive = (href) => pathname.startsWith(href);

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 flex ${collapsed ? "w-20" : "w-72"
        } flex-col sidebar-bg border-r sidebar-border transition-transform duration-200 md:static ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
    >
      {/* HEADER */}
      <div className="flex h-16 items-center gap-3 px-4 border-b sidebar-border bg-white dark:bg-gray-900">
        {!collapsed && (
          <>
            <div className="h-10 w-10 rounded-xl icon-container-light dark:bg-gray-800 flex items-center justify-center">
              <Image
                src="/image/dashboard img.png"
                alt="Safai Logo"
                width={32}
                height={32}
                unoptimized
              />
            </div>
            <div className="flex-1">
              <p className="text-xs text-medium-gray dark:text-gray-400">Admin Console</p>
              <p className="text-sm font-semibold text-dark-gray dark:text-white">Safai</p>
            </div>
          </>
        )}
        <button
          onClick={onToggleCollapse}
          className="ml-auto h-8 w-8 rounded-lg border sidebar-border dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-center"
        >
          <ChevronDown className={`h-4 w-4 text-primary-medium dark:text-cyan-400 ${collapsed ? "-rotate-90" : "rotate-90"}`} />
        </button>
      </div>

      {/* NAV */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {navSections.map((section) => (
          <div key={section.heading}>
            {!collapsed && (
              <p className="px-3 mb-2 text-xs font-semibold uppercase tracking-wide text-light-gray dark:text-gray-500">
                {section.heading}
              </p>
            )}
            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);

                if (!item.children) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition ${active
                        ? "nav-item-active"
                        : "nav-item"
                        }`}
                    >
                      <Icon className="h-5 w-5" />
                      {!collapsed && item.label}
                    </Link>
                  );
                }

                return (
                  <div key={item.label}>
                    <button
                      onClick={() =>
                        setOpenGroups((p) => ({
                          ...p,
                          [item.label]: !p[item.label],
                        }))
                      }
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium nav-item"
                    >
                      <Icon className="h-5 w-5" />
                      {!collapsed && (
                        <>
                          <span className="flex-1 text-left">{item.label}</span>
                          <ChevronDown
                            className={`h-4 w-4 transition ${openGroups[item.label] ? "rotate-180" : ""
                              }`}
                          />
                        </>
                      )}
                    </button>

                    {!collapsed && openGroups[item.label] && (
                      <div className="mt-1 ml-8 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block rounded-lg px-3 py-2 text-sm ${isActive(child.href)
                              ? "nav-item-active"
                              : "nav-item"
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
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="border-t sidebar-border dark:border-gray-800 p-4 bg-white dark:bg-gray-900">
        <Link
          href="/dashboard/profile"
          onClick={onClose}
          className="flex items-center gap-3 mb-3 p-1.5 rounded-xl hover:bg-slate-50 dark:hover:bg-gray-800 transition-all group cursor-pointer"
        >
          <div className="h-9 w-9 rounded-full icon-container-light dark:bg-gray-800 flex items-center justify-center font-black text-primary-medium dark:text-cyan-400 group-hover:scale-110 transition-transform">
            TI
          </div>
          {!collapsed && (
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-bold text-dark-gray dark:text-gray-200 truncate group-hover:text-primary-medium dark:group-hover:text-cyan-400 transition-colors">Test Intern</p>
              <p className="text-[10px] font-bold text-light-gray dark:text-gray-500 uppercase tracking-tighter">Admin Account</p>
            </div>
          )}
        </Link>

        <button className="flex w-full items-center justify-center gap-2 rounded-xl border sidebar-border dark:border-gray-700 px-3 py-2 text-sm font-semibold text-dark-gray dark:text-gray-300 hover:bg-rose-50 dark:hover:bg-rose-900/30 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-100 dark:hover:border-rose-900/50 transition-all group">
          <LogOut className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
          {!collapsed && "Logout"}
        </button>
      </div>
    </aside>
  );
}