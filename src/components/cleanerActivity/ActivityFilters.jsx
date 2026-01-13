"use client";

import { HiOutlineCalendar, HiOutlineRefresh } from "react-icons/hi";

export default function ActivityFilters() {
    return (
        <div className="
            rounded-[var(--radius)] 
            bg-[hsl(var(--card))] 
            border border-[hsl(var(--border))] 
            shadow-sm 
            px-3 sm:px-4 md:px-6 py-3 sm:py-4 
            flex flex-col sm:flex-row justify-between items-stretch sm:items-center 
            gap-3 sm:gap-4
            overflow-hidden
        ">
            {/* Left Side: Date Filter */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 text-sm w-full sm:w-auto min-w-0">
                <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="p-1.5 bg-[#E0F7FA] dark:bg-[hsl(224,48%,16%)] rounded-md flex-shrink-0">
                        <HiOutlineCalendar className="text-[hsl(var(--primary))] dark:text-[hsl(var(--primary-light))] text-lg" />
                    </div>
                    <span className="font-bold text-[hsl(var(--muted-foreground))] dark:text-slate-300 uppercase tracking-widest text-[10px] whitespace-nowrap">
                        Filter by Date
                    </span>
                </div>

                <input
                    type="date"
                    className="
                        rounded-xl border border-[hsl(var(--border))] 
                        bg-[hsl(var(--input))] dark:bg-[hsl(224,48%,12%)]
                        px-3 sm:px-4 py-2 
                        text-xs sm:text-sm font-semibold text-[hsl(var(--foreground))] dark:text-slate-200
                        focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent 
                        outline-none transition-all
                        flex-1 sm:flex-none min-w-0
                    "
                />

                <button className="
                    flex items-center justify-center sm:justify-start gap-1.5 
                    text-[hsl(var(--primary-dark))] dark:text-[hsl(var(--primary-light))] 
                    text-xs font-bold uppercase tracking-wider 
                    hover:text-[hsl(var(--primary))] dark:hover:text-[hsl(var(--primary))] 
                    transition-colors group
                    whitespace-nowrap flex-shrink-0
                    px-2 sm:px-0
                ">
                    <HiOutlineRefresh className="text-sm group-hover:rotate-180 transition-transform duration-500" />
                    Reset
                </button>
            </div>

            {/* Right Side: Toggle/Checkbox */}

        </div>
    );
}