"use client";

import { Search, Filter, Building2, Star, XCircle, CheckCircle2, UserMinus, ChevronDown } from "lucide-react";

export default function WashroomFilters({
    search,
    onSearchChange,
    typeFilter,
    onTypeFilterChange,
    companyFilter,
    onCompanyFilterChange,
    ratingFilter,
    onRatingFilterChange,
    assignmentFilter,
    onAssignmentFilterChange,
    onClear,
}) {
    return (
        /* Using .card-global for standard dashboard panel styling */
        <div className="card-global p-3 sm:p-4 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">

                {/* 1. COMPACT SEARCH - Using .form-input-wrapper logic */}
                <div className="relative group w-full sm:min-w-[240px] sm:flex-1">
                    <div className="form-input-wrapper">
                        <Search className="form-input-icon h-4 w-4" />
                        <input
                            className="form-input py-2.5 sm:py-2 pl-10 text-sm sm:text-xs w-full"
                            placeholder="Search facility name or ID..."
                            value={search}
                            onChange={(e) => onSearchChange(e.target.value)}
                        />
                    </div>
                </div>

                {/* 2. COMPACT SELECTS - Using standardized .form-select and Roboto weights */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                    <div className="relative group w-full sm:w-auto">
                        <select
                            className="appearance-none bg-[hsl(var(--input))] border border-[hsl(var(--border))] rounded-xl pl-3 pr-8 py-2.5 sm:py-2 text-sm sm:text-xs font-bold text-[hsl(var(--foreground))] focus:ring-2 focus:ring-[hsl(var(--primary))] hover:ring-2 hover:ring-[hsl(var(--primary))]/30 hover:border-[hsl(var(--primary))]/50 outline-none cursor-pointer transition-all w-full"
                            value={typeFilter}
                            onChange={(e) => onTypeFilterChange(e.target.value)}
                        >
                            <option value="all">Types: All</option>
                            <option value="Nagpur Urban">Nagpur Urban</option>
                            <option value="Dharampeth Zone">Dharampeth Zone</option>
                            <option value="Nagpur East">Nagpur East</option>
                        </select>
                        <Filter className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3 w-3 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))] pointer-events-none transition-colors" />
                    </div>

                    <div className="relative group w-full sm:w-auto">
                        <select
                            className="appearance-none bg-[hsl(var(--input))] border border-[hsl(var(--border))] rounded-xl pl-3 pr-8 py-2.5 sm:py-2 text-sm sm:text-xs font-bold text-[hsl(var(--foreground))] focus:ring-2 focus:ring-[hsl(var(--primary))] hover:ring-2 hover:ring-[hsl(var(--primary))]/30 hover:border-[hsl(var(--primary))]/50 outline-none cursor-pointer transition-all w-full"
                            value={companyFilter}
                            onChange={(e) => onCompanyFilterChange(e.target.value)}
                        >
                            <option value="all">Company: All</option>
                            <option value="N/A">Unassigned</option>
                        </select>
                        <Building2 className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3 w-3 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))] pointer-events-none transition-colors" />
                    </div>

                    {/* RATING SELECT - Values match the logic below */}
                    <div className="relative group w-full sm:w-auto">
                        <select
                            className="appearance-none bg-[hsl(var(--input))] border border-[hsl(var(--border))] rounded-xl pl-3 pr-8 py-2.5 sm:py-2 text-sm sm:text-xs font-bold text-[hsl(var(--foreground))] focus:ring-2 focus:ring-[hsl(var(--primary))] hover:ring-2 hover:ring-[hsl(var(--primary))]/30 hover:border-[hsl(var(--primary))]/50 outline-none cursor-pointer transition-all w-full"
                            value={ratingFilter}
                            onChange={(e) => onRatingFilterChange(e.target.value)}
                        >
                            <option value="all">Rating: All</option>
                            <option value="9plus">9.0+ Stars</option>
                            <option value="8plus">8.0+ Stars</option>
                            <option value="below5">Below 5.0</option>
                        </select>
                        <Star className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3 w-3 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))] pointer-events-none transition-colors" />
                    </div>
                </div>

                {/* 3. SEGMENTED ASSIGNMENT CONTROL - Using .muted and hover tokens */}
                <div className="flex bg-slate-50 dark:bg-slate-800 p-1 rounded-xl border border-slate-100 dark:border-slate-700 shadow-inner w-full sm:w-auto">
                    {[
                        { id: "all", label: "All", icon: null },
                        { id: "assigned", label: "Assigned", icon: <CheckCircle2 size={10} /> },
                        { id: "unassigned", label: "None", icon: <UserMinus size={10} /> }
                    ].map((btn) => (
                        <button
                            key={btn.id}
                            type="button"
                            onClick={() => onAssignmentFilterChange(btn.id)}
                            className={`
                                px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.15em] transition-all flex items-center gap-1.5
                                ${assignmentFilter === btn.id
                                    ? "bg-white dark:bg-slate-700 text-cyan-600 dark:text-cyan-400 shadow-sm border border-slate-100 dark:border-slate-600"
                                    : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                                }
                            `}
                        >
                            {btn.icon}
                            {btn.label}
                        </button>
                    ))}
                </div>

                {/* 4. CLEAR ACTION - Using recorded .btn-icon logic */}
                <button
                    type="button"
                    onClick={onClear}
                    className="p-2.5 sm:p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-xl transition-all self-start sm:self-center"
                    title="Clear All Filters"
                >
                    <XCircle className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
}