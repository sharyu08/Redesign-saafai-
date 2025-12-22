"use client";

import { Search, Filter, RotateCcw } from "lucide-react";

export default function SupervisorFilters() {
    return (
        <div className="bg-white border border-[hsl(var(--border))] rounded-[var(--radius)] p-3 shadow-sm flex items-center gap-4">

            {/* Search Input with Themed Icon */}
            <div className="relative group flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-teal-600 transition-colors" />
                <input
                    className="w-full pl-10 pr-4 py-2 bg-[hsl(var(--input))] border border-[hsl(var(--border))] rounded-xl text-sm font-medium focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition-all"
                    placeholder="Search by name, email, or phone..."
                />
            </div>

            {/* Themed Select Dropdown */}
            <div className="relative">
                <select className="appearance-none w-[160px] bg-[hsl(var(--input))] border border-[hsl(var(--border))] rounded-xl pl-4 pr-10 py-2 text-xs font-bold text-slate-700 focus:ring-2 focus:ring-teal-600 outline-none cursor-pointer transition-all">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>On Leave</option>
                </select>
                <Filter className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-slate-200 hidden sm:block" />

            {/* Reset Action */}
            <button
                type="button"
                title="Reset Filters"
                className="p-2 rounded-xl border border-[hsl(var(--border))] text-slate-400 hover:bg-[#F4FBFC] hover:text-teal-600 transition-all active:scale-95"
            >
                <RotateCcw size={18} />
            </button>
        </div>
    );
}