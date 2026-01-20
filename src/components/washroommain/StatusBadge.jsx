"use client";

import { CheckCircle2, XCircle } from "lucide-react";

export default function StatusBadge({ status }) {
    const normalizedStatus = status?.toLowerCase();
    const isActive = normalizedStatus === "active" || status === true;

    return (
        <span
            className={`
                flex items-center gap-1 sm:gap-1.5 w-fit px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[9px] sm:text-[11px] font-black uppercase tracking-widest border transition-all duration-300
                ${isActive
                    ? "bg-emerald-400/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400 backdrop-blur-sm shadow-[0_2px_10px_rgba(16,185,129,0.1)]"
                    : "bg-rose-400/10 border-rose-500/20 text-rose-600 dark:text-rose-400 backdrop-blur-sm shadow-[0_2px_10px_rgba(244,63,94,0.1)]"
                }
            `}
        >
            {/* 3D-effect Glowing Dot */}
            <div className={`
                h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full 
                ${isActive
                    ? "bg-emerald-500 shadow-[0_0_6px_#10b981] animate-pulse"
                    : "bg-rose-500 shadow-[0_0_6px_#f43f5e]"
                }
            `} />

            {isActive ? (
                <div>
                    <CheckCircle2 size={10} strokeWidth={2.5} />
                    <span className="hidden sm:inline">Active</span>
                    <span className="sm:hidden">On</span>
                </div>
            ) : (
                <div>
                    <XCircle size={10} strokeWidth={2.5} />
                    <span className="hidden sm:inline">Inactive</span>
                    <span className="sm:hidden">Off</span>
                </div>
            )}
        </span>
    );
}