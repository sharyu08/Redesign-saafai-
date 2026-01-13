"use client";

import { HiOutlineChartBar } from "react-icons/hi";
import { useRef, useEffect } from "react";
import "./ActivityStats.css";

export default function ActivityStats() {
    const progressRef = useRef(null);

    useEffect(() => {
        if (progressRef.current) {
            progressRef.current.style.setProperty('--progress-width', '82%');
        }
    }, []);

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
                <div className="p-1.5 bg-[#E0F7FA] dark:bg-[hsl(224,48%,16%)] rounded-lg">
                    <HiOutlineChartBar className="text-[hsl(var(--primary))] dark:text-[hsl(var(--primary-light))] text-lg" />
                </div>
                <h3 className="text-lg font-normal tracking-tight text-[hsl(var(--foreground))] dark:text-slate-100">
                    Activity Overview
                </h3>
            </div>

            {/* Completion Rate with Ring Design */}
            <div className="flex items-center gap-5 p-4 bg-[#F4FBFC] dark:bg-[hsl(224,48%,14%)] rounded-2xl border border-[hsl(var(--primary)/0.1)] dark:border-[hsl(var(--primary)/0.2)]">
                <div className="relative h-16 w-16 shrink-0">
                    {/* SVG Progress Ring */}
                    <svg className="h-full w-full" viewBox="0 0 36 36">
                        <path
                            className="stroke-[hsl(var(--primary)/0.1)] dark:stroke-[hsl(var(--primary)/0.2)] fill-none"
                            strokeWidth="3.5"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                            className="stroke-[hsl(var(--primary))] dark:stroke-[hsl(var(--primary-light))] fill-none transition-all duration-1000"
                            strokeWidth="3.5"
                            strokeDasharray="75, 100"
                            strokeLinecap="round"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-[hsl(var(--primary-dark))] dark:text-[hsl(var(--primary-light))]">
                        75%
                    </div>
                </div>
                <div>
                    <p className="text-sm font-bold text-[hsl(var(--foreground))] dark:text-slate-200">
                        Completion Rate
                    </p>
                    <p className="text-xs font-medium text-[hsl(var(--muted-foreground))] dark:text-slate-300">
                        Target: <span className="text-[hsl(var(--primary))] dark:text-[hsl(var(--primary-light))]">90%</span>
                    </p>
                </div>
            </div>

            {/* Score Bar Section */}
            <div className="space-y-3">
                <div className="flex justify-between items-end">
                    <p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--muted-foreground))]">
                        Performance Score
                    </p>
                    <span className="text-sm font-black text-[hsl(var(--primary-dark))] dark:text-[hsl(var(--primary-light))]">
                        8.2 <span className="text-[hsl(var(--muted-foreground))] dark:text-slate-400 font-medium">/ 10</span>
                    </span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-[hsl(var(--muted))] dark:bg-[hsl(224,48%,16%)] overflow-hidden">
                    <div
                        ref={progressRef}
                        className="progress-bar rounded-full bg-[hsl(var(--primary))] dark:bg-[hsl(var(--primary-light))] shadow-[0_0_8px_rgba(45,183,196,0.4)] dark:shadow-[0_0_8px_rgba(255,159,28,0.4)] transition-all duration-700 activity-stats-progress-bar"
                    />
                </div>
            </div>

            {/* Footer / Location */}
            <div className="pt-4 border-t border-[hsl(var(--border))] dark:border-[hsl(224,48%,20%)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                    <p className="text-[11px] font-bold text-[hsl(var(--muted-foreground))] dark:text-slate-300 uppercase tracking-tighter">
                        Budhawar Bazzar Facility
                    </p>
                </div>
                <button className="text-[11px] font-bold text-[hsl(var(--primary))] dark:text-[hsl(var(--primary-light))] hover:underline underline-offset-4">
                    View Logs
                </button>
            </div>
        </div>
    );
}