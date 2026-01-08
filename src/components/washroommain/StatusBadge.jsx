"use client";

import { CheckCircle2, XCircle } from "lucide-react";

export default function StatusBadge({ status }) {
    const normalizedStatus = status?.toLowerCase();
    const isActive = normalizedStatus === "active" || status === true;

    return (
        <span
            className={`
                flex items-center gap-1.5 w-fit px-3 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-widest border transition-all duration-300
                ${isActive
                    ? "bg-emerald-400/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400 backdrop-blur-sm shadow-[0_2px_10px_rgba(16,185,129,0.1)]"
                    : "bg-rose-400/10 border-rose-500/20 text-rose-600 dark:text-rose-400 backdrop-blur-sm shadow-[0_2px_10px_rgba(244,63,94,0.1)]"
                }
            `}
        >
            {/* 3D-effect Glowing Dot */}
            <div className={`
                h-2 w-2 rounded-full 
                ${isActive
                    ? "bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse"
                    : "bg-rose-500 shadow-[0_0_8px_#f43f5e]"
                }
            `} />

            {isActive ? (
                <>
                    <CheckCircle2 size={12} strokeWidth={3} />
                    <span>Active</span>
                </>
            ) : (
                <>
                    <XCircle size={12} strokeWidth={3} />
                    <span>Inactive</span>
                </>
            )}
        </span>
    );
}