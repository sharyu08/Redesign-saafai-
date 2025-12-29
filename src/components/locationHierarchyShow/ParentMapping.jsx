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
        /* Container: Refined rounded card with consistent brand tinting */
        <div className="rounded-[24px] bg-white dark:bg-card border border-slate-100 dark:border-border p-8 shadow-sm relative overflow-hidden">
            
            {/* Branded decorative background glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light/50 blur-3xl rounded-full -mr-10 -mt-10 pointer-events-none" />

            {/* Header Section */}
            <div className="flex items-center justify-between mb-10 relative z-10">
                <div className="flex items-center gap-5">
                    <div className="h-12 w-12 rounded-2xl bg-primary-light dark:bg-muted flex items-center justify-center shadow-inner border border-primary/10">
                        <Network size={22} className="text-primary" strokeWidth={2.5} />
                    </div>
                    <div>
                        <h2 className="text-sm font-black text-primary uppercase tracking-widest leading-none">
                            Relational Hierarchy
                        </h2>
                        <p className="text-[10px] font-bold text-slate-400 dark:text-muted-foreground uppercase tracking-widest mt-2">
                            Define Parent-Child Logic
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-muted/50 rounded-xl border border-slate-100 dark:border-border">
                    <LayoutGrid size={14} className="text-primary" />
                    <span className="text-[10px] font-black text-slate-500 dark:text-foreground uppercase tracking-wider">Structural View</span>
                </div>
            </div>

            {/* Hierarchical Mapping List */}
            <div className="relative space-y-4">
                {/* Vertical Connector Line - Visual Tree Logic */}
                <div className="absolute left-6 top-2 bottom-6 w-0.5 bg-gradient-to-b from-primary/30 via-slate-100 dark:via-border to-transparent" />

                {locations.map((loc, index) => (
                    <div key={loc} className="relative pl-12 group">
                        
                        {/* Horizontal Connector Branch */}
                        <div className="absolute left-6 top-7 w-6 h-0.5 bg-slate-100 dark:bg-border group-hover:bg-primary/30 transition-colors" />
                        
                        {/* Node Indicator */}
                        <div className="absolute left-4.5 top-5.5 h-3 w-3 rounded-full border-2 border-white dark:border-card bg-slate-200 dark:bg-muted group-hover:bg-primary transition-all z-10" />

                        <div className="p-5 bg-white dark:bg-muted/20 rounded-2xl border border-slate-100 dark:border-border shadow-sm group-hover:shadow-md group-hover:border-primary/20 transition-all">
                            <div className="flex justify-between items-center mb-3">
                                <div className="flex items-center gap-2">
                                    <GitBranch size={12} className="text-primary/60" />
                                    <label className="block text-[10px] font-black text-slate-400 dark:text-muted-foreground uppercase tracking-widest">
                                        Assign Parent for <span className="text-slate-700 dark:text-foreground">{loc}</span>
                                    </label>
                                </div>
                                <Info size={14} className="text-slate-200 dark:text-muted-foreground/30 group-hover:text-primary transition-colors cursor-help" />
                            </div>

                            <div className="relative">
                                <select
                                    defaultValue="Nagpur Urban"
                                    className="w-full appearance-none rounded-xl border border-slate-100 dark:border-border bg-slate-50 dark:bg-background px-4 py-3.5 text-[11px] font-bold text-slate-600 dark:text-foreground outline-none transition-all focus:bg-white dark:focus:bg-card focus:ring-4 focus:ring-primary/5 focus:border-primary cursor-pointer"
                                >
                                    <option value="No Parent">Root Level (Top Level)</option>
                                    <option value="Nagpur Urban">Nagpur Urban</option>
                                    <option value="Dharampeth Zone">Dharampeth Zone</option>
                                    <option value="Nehru Nagar Zone">Nehru Nagar Zone</option>
                                </select>

                                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 dark:text-muted-foreground/50 group-hover:text-primary transition-colors">
                                    <ChevronDown size={16} strokeWidth={3} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Branded System Footer */}
            <div className="mt-10 flex flex-col items-center gap-3">
                <div className="flex gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/20" />
                    <div className="h-1.5 w-6 rounded-full bg-primary/40" />
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/20" />
                </div>
                <p className="text-[9px] font-black text-primary uppercase tracking-[0.4em] opacity-40">
                    System Architecture Registry
                </p>
            </div>
        </div>
    );
}