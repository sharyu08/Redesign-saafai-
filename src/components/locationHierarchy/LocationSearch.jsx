"use client";

import { Search, Plus, Filter, SlidersHorizontal } from "lucide-react";

export default function LocationSearch({ onSearch }) {
    return (
        <div className="w-full flex flex-col md:flex-row items-center gap-4 mb-6 pb-4">

            {/* 1. Responsive Search Input */}
            <div className="relative w-full md:flex-1 group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search
                        size={18}
                        className="text-[hsl(var(--text-muted))] group-focus-within:text-[hsl(var(--primary))] transition-colors"
                    />
                </div>
                <input
                    type="text"
                    placeholder="Search zones, IDs, or parent types..."
                    onChange={(e) => onSearch?.(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3.5 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl text-sm font-bold text-[hsl(var(--text-body))] placeholder:text-[hsl(var(--text-hint))] focus:outline-none focus:ring-4 focus:ring-[hsl(var(--primary))]/8 focus:border-[hsl(var(--primary))]/15 transition-all shadow-sm"
                />
            </div>

            {/* 2. Responsive Action Buttons */}
            <div className="flex items-center gap-3 w-full md:w-auto">

                {/* Filter Button - Using global secondary button */}
                <button
                    title="Advanced Filters"
                    className="btn-action flex items-center justify-center gap-2 px-4 md:px-5 py-3.5 text-[10px] font-black uppercase tracking-widest active:scale-95"
                >
                    <SlidersHorizontal size={14} strokeWidth={3} />
                    <span className="hidden sm:inline">Filters</span>
                </button>

                {/* Primary Action - Using global gradient button */}
                <button
                    className="btn-gradient flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3.5 text-[10px] font-black uppercase tracking-widest active:scale-95"
                >
                    <Plus size={16} strokeWidth={3} />
                    <span>Add New Zone</span>
                </button>
            </div>
        </div>
    );
}