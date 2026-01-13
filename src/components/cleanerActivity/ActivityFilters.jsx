"use client";

import { HiOutlineCalendar, HiOutlineRefresh } from "react-icons/hi";

export default function ActivityFilters() {
    return (
        <div className="
            rounded-[var(--radius)] 
            bg-[hsl(var(--card))] 
            border border-[hsl(var(--border))] 
            shadow-sm 
            px-4 py-3 sm:px-6 sm:py-4 
            flex flex-col gap-4
        ">
            {/* Left Side: Date Filter */}
            <div className="flex flex-col gap-4 text-xs sm:text-sm">
                {/* Icon and Label Row */}
                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <div className="p-1.5 bg-[#E0F7FA] dark:bg-[hsl(224,48%,16%)] rounded-md flex-shrink-0">
                        <HiOutlineCalendar className="text-[hsl(var(--primary))] dark:text-[hsl(var(--primary-light))] text-sm sm:text-lg" />
                    </div>
                    <span className="font-bold text-[hsl(var(--muted-foreground))] dark:text-slate-300 uppercase tracking-wider text-[9px] sm:text-[10px] whitespace-nowrap">
                        Filter by Date
                    </span>
                </div>

                {/* Date Input and Reset Button - Horizontal Layout */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
                    <input
                        type="date"
                        className="
                            rounded-lg border border-[hsl(var(--border))] 
                            bg-[hsl(var(--input))] dark:bg-[hsl(224,48%,12%)]
                            px-3 py-2 sm:px-4 sm:py-2 
                            text-xs sm:text-sm font-semibold text-[hsl(var(--foreground))] dark:text-slate-200
                            focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent 
                            outline-none transition-all flex-1 sm:flex-none
                        "
                    />

                    <button className="
                        flex items-center justify-center gap-1.5 
                        text-[hsl(var(--primary-dark))] dark:text-[hsl(var(--primary-light))] 
                        text-[9px] sm:text-xs font-bold uppercase tracking-wider 
                        hover:text-[hsl(var(--primary))] dark:hover:text-[hsl(var(--primary))] 
                        transition-colors group whitespace-nowrap px-3 py-2 sm:px-4 sm:py-2
                        rounded-lg border border-[hsl(var(--primary))]/20 hover:border-[hsl(var(--primary))]/40
                        bg-[hsl(var(--primary))]/5 hover:bg-[hsl(var(--primary))]/10
                        flex-1 sm:flex-none
                    ">
                        <HiOutlineRefresh className="text-xs sm:text-sm group-hover:rotate-180 transition-transform duration-500 flex-shrink-0" />
                        Reset
                    </button>
                </div>
            </div>

            {/* Right Side: Toggle/Checkbox */}

        </div>
    );
}