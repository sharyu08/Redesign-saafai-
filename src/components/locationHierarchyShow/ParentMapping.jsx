"use client";

import { Network, ChevronDown, Info, GitBranch, LayoutGrid } from "lucide-react";

const locations = [
    "Nagpur Urban",
    "Dharampeth Zone",
    "Nehru Nagar Zone",
    "Dhantoli",
];

export default function ParentMapping() {
    return (
        /* Using .card-global for standardized shadows, borders, and dark mode transitions */
        <div className="card-global bg-white dark:bg-card border-slate-200 relative overflow-hidden p-8 h-full">

            {/* Branded decorative background glow using primary orange variable */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[hsl(var(--primary-light))/0.3] blur-3xl rounded-full -mr-10 -mt-10 pointer-events-none" />

            {/* Header Section - Utilizing .page-header-content patterns */}
            <div className="flex items-center justify-between mb-10 relative z-10">
                <div className="flex items-center gap-4">
                    <div className="h-11 w-11 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 flex items-center justify-center shadow-sm">
                        <Network size={20} className="text-indigo-600 dark:text-indigo-400" strokeWidth={2.5} />
                    </div>
                    <div>
                        <h2 className="text-[11px] font-black text-slate-800 dark:text-white uppercase tracking-[0.2em] leading-none">
                            Relational Hierarchy
                        </h2>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">
                            Define Parent-Child Logic
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800">
                    <LayoutGrid size={12} className="text-slate-500" />
                    <span className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">Structural View</span>
                </div>
            </div>

            {/* Hierarchical Mapping List */}
            <div className="relative space-y-4">
                {/* Vertical Connector Line - Using .tree-trunk logic for thickness/color */}
                <div className="absolute left-6 top-2 bottom-6 w-0.5 bg-indigo-100 dark:bg-indigo-900/50" />

                {locations.map((loc, index) => (
                    <div key={loc} className="relative pl-12 group">

                        {/* Horizontal Connector Branch - Using .tree-branch-arm logic */}
                        <div className="absolute left-6 top-7 w-6 h-0.5 bg-indigo-100 dark:bg-indigo-900/50 group-hover:bg-indigo-400 transition-colors" />

                        {/* Node Indicator */}
                        <div className="absolute left-[20px] top-[24px] h-2.5 w-2.5 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 group-hover:bg-indigo-500 transition-all z-10" />

                        {/* Standardized inner card for each row */}
                        <div className="p-4 bg-white dark:bg-slate-900/40 rounded-xl border border-slate-100 dark:border-slate-800 group-hover:border-indigo-200 dark:group-hover:border-indigo-800 transition-all">
                            <div className="flex justify-between items-center mb-3 px-1">
                                <div className="flex items-center gap-2">
                                    <GitBranch size={12} className="text-indigo-500 opacity-60" />
                                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                                        Assign Parent for <span className="text-slate-700 dark:text-slate-200">{loc}</span>
                                    </label>
                                </div>
                                <Info size={12} className="text-slate-200 dark:text-slate-700 group-hover:text-indigo-400 transition-colors cursor-help" />
                            </div>

                            <div className="relative">
                                {/* Using your .form-select class from global.css */}
                                <select
                                    defaultValue="Nagpur Urban"
                                    className="form-select w-full !py-2.5 !text-[10px] !font-bold uppercase tracking-tight"
                                >
                                    <option value="No Parent">Root Level (Top Level)</option>
                                    <option value="Nagpur Urban">Nagpur Urban</option>
                                    <option value="Dharampeth Zone">Dharampeth Zone</option>
                                    <option value="Nehru Nagar Zone">Nehru Nagar Zone</option>
                                </select>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
}