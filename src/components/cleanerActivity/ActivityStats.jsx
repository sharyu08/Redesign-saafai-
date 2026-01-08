"use client";

import { HiOutlineChartBar } from "react-icons/hi";

export default function ActivityStats() {
    return (
        <div className="
            rounded-[var(--radius)] 
            bg-[hsl(var(--card))] 
            p-6 
            shadow-sm 
            border border-[hsl(var(--border))] 
            space-y-6
        ">
            {/* Header */}
            <div className="flex items-center gap-3">
                <div className="p-1.5 bg-[#E0F7FA] rounded-lg">
                    <HiOutlineChartBar className="text-[hsl(var(--primary))] text-lg" />
                </div>
                <h3 className="text-lg font-normal tracking-tight text-[hsl(var(--foreground))]">
                    Activity Overview
                </h3>
            </div>

            {/* Completion Rate with Ring Design */}
            <div className="flex items-center gap-5 p-4 bg-[#F4FBFC] rounded-2xl border border-[hsl(var(--primary)/0.1)]">
                <div className="relative h-16 w-16 shrink-0">
                    {/* SVG Progress Ring */}
                    <svg className="h-full w-full" viewBox="0 0 36 36">
                        <path
                            className="stroke-[hsl(var(--primary)/0.1)] fill-none"
                            strokeWidth="3.5"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                            className="stroke-[hsl(var(--primary))] fill-none transition-all duration-1000"
                            strokeWidth="3.5"
                            strokeDasharray="75, 100"
                            strokeLinecap="round"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-[hsl(var(--primary-dark))]">
                        75%
                    </div>
                </div>
                <div>
                    <p className="text-sm font-bold text-[hsl(var(--foreground))]">
                        Completion Rate
                    </p>
                    <p className="text-xs font-medium text-[hsl(var(--muted-foreground))]">
                        Target: <span className="text-[hsl(var(--primary))]">90%</span>
                    </p>
                </div>
            </div>

            {/* Score Bar Section */}
            <div className="space-y-3">
                <div className="flex justify-between items-end">
                    <p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--muted-foreground))]">
                        Performance Score
                    </p>
                    <span className="text-sm font-black text-[hsl(var(--primary-dark))]">
                        8.2 <span className="text-[hsl(var(--muted-foreground))] font-medium">/ 10</span>
                    </span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-[hsl(var(--muted))] overflow-hidden">
                    <div
                        className="progress-bar rounded-full bg-[hsl(var(--primary))] shadow-[0_0_8px_rgba(45,183,196,0.4)] transition-all duration-700"
                        style={{ width: "82%" }}
                    />
                </div>
            </div>

            {/* Footer / Location */}
            <div className="pt-4 border-t border-[hsl(var(--border))] flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="text-[11px] font-bold text-[hsl(var(--muted-foreground))] uppercase tracking-tighter">
                        Budhawar Bazzar Facility
                    </p>
                </div>
                <button className="text-[11px] font-bold text-[hsl(var(--primary))] hover:underline underline-offset-4">
                    View Logs
                </button>
            </div>
        </div>
    );
}