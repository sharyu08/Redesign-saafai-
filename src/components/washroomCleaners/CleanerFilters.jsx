"use client";

import { Search, Filter, UserMinus, RotateCcw } from "lucide-react";

export default function CleanerFilters() {
    return (
        <div className="bg-white border border-[hsl(var(--border))] rounded-[var(--radius)] p-3 flex flex-wrap gap-4 items-center shadow-sm">

            {/* 1. PRIMARY SEARCH */}
            <div className="relative group min-w-[260px] flex-1 lg:flex-none">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--muted-foreground))] group-focus-within:text-[hsl(var(--primary))]" />
                <input
                    className="w-full pl-10 pr-4 py-2 bg-[hsl(var(--input))] border border-[hsl(var(--border))] rounded-xl text-sm font-medium focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent outline-none transition-all"
                    placeholder="Search by name or phone..."
                />
            </div>

            {/* 2. STATUS TOGGLE BUTTON */}
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider hover:bg-amber-100 transition-all active:scale-95 shadow-sm">
                <UserMinus size={14} />
                Unassigned Staff
            </button>

            {/* 3. ADDITIONAL FILTERS (Right Aligned) */}
            <div className="lg:ml-auto flex items-center gap-3 w-full lg:w-auto">
                <div className="relative flex-1 lg:w-[160px]">
                    <select className="appearance-none w-full bg-[hsl(var(--input))] border border-[hsl(var(--border))] rounded-xl pl-4 pr-10 py-2 text-xs font-bold text-[hsl(var(--foreground))] focus:ring-2 focus:ring-[hsl(var(--primary))] outline-none cursor-pointer">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>On Leave</option>
                        <option>Inactive</option>
                    </select>
                    <Filter className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[hsl(var(--muted-foreground))] pointer-events-none" />
                </div>

                <button
                    title="Reset Filters"
                    className="p-2.5 rounded-xl border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:bg-[#F4FBFC] hover:text-[hsl(var(--primary))] transition-all"
                >
                    <RotateCcw size={16} />
                </button>
            </div>
        </div>
    );
}