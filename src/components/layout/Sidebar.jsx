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
} from "lucide-react";

/* ---------------- NAV DATA (UNCHANGED) ---------------- */
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

  const isActive = (href) => {
    // For top-level items, only match exact path
    if (href === '/dashboard') {
      return pathname === href;
    }
    // For other items, allow subpaths
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <aside
      className={`fixed inset-y-4 left-4 z-50 flex
        ${collapsed ? "w-20" : "w-72"}
        flex-col
        bg-[#e0f2f1]                         /* light teal sidebar */
        rounded-[28px]
        border border-[#e0f2f1]
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        transition-transform duration-200
        md:static md:ml-4 md:mt-2
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
    >
      {/* HEADER */}
      <div className="flex h-16 items-center gap-3 px-4 border-b border-[#d0e8e6] bg-white/80">
        {!collapsed && (
          <>
            <div className="h-10 w-10 rounded-xl bg-[#FFFFFF] flex items-center justify-center shadow-sm">
              <Image
                src="/image/dashboard img.png"
                alt="Safai Logo"
                width={32}
                height={32}
                unoptimized
              />
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500">Admin Console</p>
              <p className="text-sm font-medium text-slate-800">Safai</p>
            </div>
          </>
        )}
        <button
          onClick={onToggleCollapse}
          className="ml-auto h-8 w-8 rounded-lg hover:bg-white/60"
        >
          <ChevronDown
            className={`h-4 w-4 text-slate-600 transition ${
              collapsed ? "-rotate-90" : "rotate-90"
            }`}
          />
        </button>
      </div>

      {/* NAV */}
      <div className="flex-1 overflow-y-auto px-2 py-4">
        {navSections.map((section, sectionIndex) => (
          <div key={section.heading}>
            {!collapsed && (
              <p className="px-3 mb-3 text-xs font-bold uppercase tracking-wide text-slate-400">
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
                      className={`nav-item ${isActive(item.href) ? 'nav-item-active' : ''}`}
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
                            className={`h-4 w-4 transition ${
                              openGroups[item.label] ? "rotate-180" : ""
                            }`}
                          />
                        </>
                      )}
                    </button>

                    {!collapsed && openGroups[item.label] && (
                      <div className="mt-1 ml-8 space-y-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={onClose}
                            className={`block rounded-lg px-3 py-2 text-sm transition
                              ${isActive(child.href)
                                ? "nav-item-active"
                                : "nav-item"}`}
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
              <div className="h-px bg-[#d0e8e6] my-4 mx-3"></div>
            )}
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="p-4 border-t border-[#d0e8e6] bg-white/80">
        <button className="flex items-center gap-3 w-full px-3 py-2 rounded-xl hover:bg-white/60 text-sm font-medium text-slate-700">
          <LogOut className="h-4 w-4 text-slate-600" />
          {!collapsed && "Logout"}
        </button>
      </div>

      {/* ACTIVE STATE STYLES */}
      <style jsx>{`
        .nav-item {
          color: #475569;
        }

        .nav-item:hover {
          background-color: rgba(224, 242, 241, 0.5); /* soft teal hover */
        }

        .nav-item-active {
          background: linear-gradient(135deg, #ffffff, #e8f5f4);
          color: #000000;
          border-left: 4px solid #2EC4B6;
          border-right: 1px solid #d0e8e6;
          border-top: 1px solid #d0e8e6;
          border-bottom: 1px solid #d0e8e6;
          box-shadow: 2px 2px 8px rgba(46, 196, 182, 0.15);
          font-weight: 600;
          padding-left: 12px;
        }

        .nav-item-active svg {
          color: #000000;
        }
      `}</style>
    </aside>
  );
}
