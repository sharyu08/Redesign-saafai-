"use client";

import { Network, Building2, Map, Hash, ChevronRight, Activity } from "lucide-react";

export default function HierarchyTreePreview() {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden h-full">

            {/* Header: Faint Slate Grey Glassmorphism */}
            <div className="bg-slate-50 dark:bg-slate-800/50 px-8 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-600">
                        <Network className="h-5 w-5 text-cyan-600 dark:text-cyan-400" strokeWidth={2.5} />
                    </div>
                    <div className="text-left">
                        {/* font-black text-[11px] uppercase tracking-[0.2em] refers to the architectural header style */}
                        <h2 className="text-slate-800 dark:text-slate-100 font-black text-[11px] uppercase tracking-[0.2em] leading-none">
                            Architecture Preview
                        </h2>
                        {/* font-bold tracking-widest refers to secondary label tokens */}
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1 opacity-70">
                            Real-time Mapping Logic
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-white/50 dark:bg-slate-800/50 rounded-full border border-white dark:border-slate-700 backdrop-blur-sm">
                    <Activity size={10} className="text-emerald-500 animate-pulse" />
                    <span className="text-[8px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tighter">Live Preview</span>
                </div>
            </div>

            <div className="p-10 relative bg-slate-50/30 dark:bg-[#0B0E14]/30">

                {/* Visual Connector: Professional Slate Grey Path */}
                <svg className="absolute left-[54px] top-[115px] w-10 h-48 pointer-events-none" fill="none">
                    <path
                        d="M 2 0 V 160 H 35"
                        stroke="currentColor"
                        className="text-slate-200 dark:text-slate-700"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                    <path
                        d="M 2 0 V 65 H 35"
                        stroke="currentColor"
                        className="text-slate-200 dark:text-slate-700"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                </svg>

                <div className="space-y-16 relative">

                    {/* ROOT NODE: Master Zone (Oceanic Blue) */}
                    <div className="flex items-center gap-6 group">
                        <div className="relative z-10 h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 border-4 border-white dark:border-slate-900 shadow-lg shadow-cyan-500/20 flex-shrink-0 flex items-center justify-center transition-transform group-hover:scale-110">
                            <Building2 size={18} className="text-white" />
                        </div>
                        <div className="flex-1 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[22px] p-5 shadow-sm transition-all group-hover:shadow-md group-hover:border-cyan-500/30">
                            <div className="flex items-center justify-between">
                                <div className="text-left">
                                    <p className="text-xs font-black text-slate-800 dark:text-slate-100 uppercase tracking-[0.1em]">Nagpur Urban</p>
                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Master Root Zone</p>
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-700">
                                    <Hash size={10} className="text-cyan-600 dark:text-cyan-400" />
                                    <span className="text-[10px] font-black text-slate-700 dark:text-slate-300 tracking-normal">113</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CHILD NODES CONTAINER */}
                    <div className="space-y-8 ml-14">

                        {/* CHILD 01 */}
                        <div className="flex items-center gap-5 group">
                            <div className="relative z-10 h-6 w-6 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 shadow-sm flex-shrink-0 flex items-center justify-center transition-all group-hover:bg-slate-50">
                                <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                            </div>
                            <div className="flex-1 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[18px] p-4 transition-all group-hover:shadow-sm group-hover:border-slate-300 dark:group-hover:border-slate-600">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-lg">
                                            <Map size={14} className="text-cyan-600 dark:text-cyan-400" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-[11px] font-black text-slate-700 dark:text-slate-200 uppercase tracking-tight">Dharampeth Zone</p>
                                            <p className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 uppercase tracking-tighter">Status: Active Architecture</p>
                                        </div>
                                    </div>
                                    <ChevronRight size={16} className="text-slate-200 dark:text-slate-600 group-hover:text-cyan-500 transition-colors" />
                                </div>
                            </div>
                        </div>

                        {/* CHILD 02 */}
                        <div className="flex items-center gap-5 group">
                            <div className="relative z-10 h-6 w-6 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 shadow-sm flex-shrink-0 flex items-center justify-center transition-all group-hover:bg-slate-50">
                                <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                            </div>
                            <div className="flex-1 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[18px] p-4 transition-all group-hover:shadow-sm group-hover:border-slate-300 dark:group-hover:border-slate-600">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-lg">
                                            <Map size={14} className="text-cyan-600 dark:text-cyan-400" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-[11px] font-black text-slate-700 dark:text-slate-200 uppercase tracking-tight">Nagpur East</p>
                                            <p className="text-[9px] font-bold text-slate-400 mt-0.5 uppercase tracking-tighter">Status: Pending Sync</p>
                                        </div>
                                    </div>
                                    <ChevronRight size={16} className="text-slate-200 dark:text-slate-600 group-hover:text-cyan-500 transition-colors" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}