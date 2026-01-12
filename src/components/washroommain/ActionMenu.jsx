"use client";

import { useState, useRef, useEffect } from "react";
import { MoreVertical, User, ShieldCheck, Edit3, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import "./ActionMenu.css";

export default function ActionMenu({ washroomId }) {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const menuRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const actions = [
        { label: "View Cleaner", icon: <User size={14} />, action: "cleaners" },
        { label: "View Supervisor", icon: <ShieldCheck size={14} />, action: "supervisors" },
        { label: "Edit", icon: <Edit3 size={14} />, action: "edit" },
        { label: "Delete", icon: <Trash2 size={14} />, action: "delete", isDanger: true },
    ];

    const handleAction = (item) => {
        setOpen(false);
        if (item.action === "delete") {
            const ok = window.confirm("Are you sure you want to delete this record?");
            if (ok) alert("Record deleted successfully.");
            return;
        }
        router.push(`/dashboard/washrooms/${washroomId}/${item.action}`);
    };

    return (
        <div className="relative" ref={menuRef}>
            {/* Trigger Button using .btn-icon logic */}
            <button
                onClick={() => setOpen(!open)}
                className={`btn-icon h-9 w-9 flex items-center justify-center transition-all ${open ? "bg-slate-100 dark:bg-slate-800 border-cyan-500/30 shadow-inner" : ""
                    }`}
                aria-label="Actions"
            >
                <MoreVertical className={open ? "text-cyan-600" : "text-slate-600"} size={18} />
            </button>

            {/* Dropdown Menu Container - Synced with --z-dropdown and --radius-xl */}
            {open && (
                <div
                    className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[var(--radius-xl)] shadow-xl animate-fade-in action-menu-dropdown"
                >
                    <div className="p-1.5 space-y-0.5">
                        {actions.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => handleAction(item)}
                                className={`
                                    w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all
                                    ${item.isDanger
                                        ? "text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20"
                                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-cyan-600 dark:hover:text-cyan-400"
                                    }
                                `}
                            >
                                <span className={item.isDanger ? "text-rose-500" : "text-cyan-600/60 dark:text-cyan-400/60"}>
                                    {item.icon}
                                </span>
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Faint Decorative Indicator */}
                    <div className="h-1 bg-gradient-to-r from-transparent via-slate-100 dark:via-slate-800 to-transparent mx-4 mb-1" />
                </div>
            )}
        </div>
    );
}