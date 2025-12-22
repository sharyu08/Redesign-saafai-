"use client";

import { HiOutlineCalendar, HiOutlineRefresh } from "react-icons/hi";

export default function ActivityFilters() {
    return (
        <div className="
            rounded-[var(--radius)] 
            bg-[hsl(var(--card))] 
            border border-[hsl(var(--border))] 
            shadow-sm 
            px-6 py-4 
            flex flex-col md:flex-row justify-between items-center 
            gap-4
        ">
            {/* Left Side: Date Filter */}
            <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-[#E0F7FA] rounded-md">
                        <HiOutlineCalendar className="text-[hsl(var(--primary))] text-lg" />
                    </div>
                    <span className="font-bold text-[hsl(var(--muted-foreground))] uppercase tracking-widest text-[10px]">
                        Filter by Date
                    </span>
                </div>

                <input
                    type="date"
                    className="
                        rounded-xl border border-[hsl(var(--border))] 
                        bg-[hsl(var(--input))] 
                        px-4 py-2 
                        text-sm font-semibold text-[hsl(var(--foreground))]
                        focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent 
                        outline-none transition-all
                    "
                />

                <button className="
                    flex items-center gap-1.5 
                    text-[hsl(var(--primary-dark))] 
                    text-xs font-bold uppercase tracking-wider 
                    hover:text-[hsl(var(--primary))] 
                    transition-colors group
                ">
                    <HiOutlineRefresh className="text-sm group-hover:rotate-180 transition-transform duration-500" />
                    Reset
                </button>
            </div>

            {/* Right Side: Toggle/Checkbox */}

        </div>
    );
}