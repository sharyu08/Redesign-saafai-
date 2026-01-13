"use client";

import { Network, Building2, Map, Hash, ChevronRight, Activity, Users, CheckCircle, AlertCircle, Plus, MoreHorizontal } from "lucide-react";

export default function HierarchyTreePreview() {
    return (
        <div className="bg-[hsl(var(--card))] dark:bg-[hsl(var(--card))] rounded-[32px] border border-[hsl(var(--border))] shadow-lg overflow-hidden h-full">

            {/* Header using global classes */}
            <div className="page-header-content px-8 py-5 border-b border-[hsl(var(--border))] flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="page-header-icon h-8 w-8">
                        <Network className="h-5 w-5 text-[hsl(var(--primary-light))]" strokeWidth={2.5} />
                    </div>
                    <div className="text-left">
                        <h2 className="page-header-title text-[11px]">
                            Architecture Preview
                        </h2>
                        <p className="page-header-subtitle text-[9px]">
                            Real-time Mapping Logic
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-[hsl(var(--muted))]/60 rounded-full border border-[hsl(var(--border))] backdrop-blur-sm">
                    <Activity size={10} className="text-[hsl(var(--chart-success))] animate-pulse" />
                    <span className="text-[8px] font-black text-[hsl(var(--text-muted))] uppercase tracking-[0.2em]">Live Preview</span>
                </div>
            </div>

            <div className="p-10 relative bg-gradient-to-br from-[hsl(var(--bg-light-gray))]/30 to-[hsl(var(--lavender-100))]/20 dark:from-[hsl(var(--card))]/30 dark:to-[hsl(var(--primary-light))]/20 max-h-[600px] overflow-y-auto">

                {/* Enhanced Visual Connector System */}
                <svg className="absolute left-[54px] top-[115px] w-10 h-96 pointer-events-none" fill="none">
                    <defs>
                        <linearGradient id="connectorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" className="text-[hsl(var(--primary-light))]" stopOpacity="0.6" />
                            <stop offset="100%" className="text-[hsl(var(--primary))]" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                    {/* Main vertical line */}
                    <path d="M 2 0 V 380" stroke="url(#connectorGradient)" strokeWidth="3" strokeLinecap="round" />
                    {/* Horizontal lines to children */}
                    <path d="M 2 65 H 35" stroke="url(#connectorGradient)" strokeWidth="3" strokeLinecap="round" />
                    <path d="M 2 130 H 35" stroke="url(#connectorGradient)" strokeWidth="3" strokeLinecap="round" />
                    <path d="M 2 195 H 35" stroke="url(#connectorGradient)" strokeWidth="3" strokeLinecap="round" />
                    <path d="M 2 260 H 35" stroke="url(#connectorGradient)" strokeWidth="3" strokeLinecap="round" />
                    <path d="M 2 325 H 35" stroke="url(#connectorGradient)" strokeWidth="3" strokeLinecap="round" />
                </svg>

                <div className="space-y-12 relative">

                    {/* ROOT NODE: Enhanced Master Zone */}
                    <div className="flex items-center gap-6 group">
                        <div className="relative z-10 h-12 w-12 rounded-2xl bg-gradient-to-br from-[hsl(var(--primary-dark))] via-[hsl(var(--primary-light))] to-[hsl(var(--chart-accent))] border-4 border-[hsl(var(--card))] dark:border-[hsl(var(--background))] shadow-xl shadow-[hsl(var(--primary-light))]/30 flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                            <Building2 size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1 bg-[hsl(var(--card))] dark:bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[22px] p-5 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:border-[hsl(var(--primary-light))]/30">
                            <div className="flex items-center justify-between">
                                <div className="text-left">
                                    <p className="text-xs font-black text-[hsl(var(--text-heading))] dark:text-[hsl(var(--foreground))] uppercase tracking-[0.2em]">Nagpur Urban</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <Hash size={10} className="text-[hsl(var(--primary-light))]" />
                                        <span className="text-[10px] font-black text-[hsl(var(--text-body))] dark:text-[hsl(var(--card-foreground))] tracking-normal">113</span>
                                    </div>
                                    <p className="text-[9px] font-bold text-[hsl(var(--chart-success))] dark:text-[hsl(var(--chart-success))] uppercase tracking-tighter mt-1">Master Root Zone</p>
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1 bg-[hsl(var(--chart-success))]/10 dark:bg-[hsl(var(--chart-success))]/20 rounded-lg border border-[hsl(var(--chart-success))]/30">
                                    <CheckCircle size={12} className="text-[hsl(var(--chart-success))]" />
                                    <span className="text-[10px] font-black text-[hsl(var(--chart-success))] dark:text-[hsl(var(--chart-success))] tracking-normal">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CHILD NODES CONTAINER */}
                    <div className="space-y-8 ml-14">

                        {/* CHILD 01: Dharampeth Zone */}
                        <div className="flex items-center gap-5 group">
                            <div className="relative z-10 h-8 w-8 rounded-xl bg-[hsl(var(--card))] dark:bg-[hsl(var(--card))] border-2 border-[hsl(var(--border))] shadow-md flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:bg-[hsl(var(--muted))] group-hover:scale-105">
                                <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-success))] shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
                            </div>
                            <div className="flex-1 bg-[hsl(var(--card))] dark:bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[18px] p-4 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-[hsl(var(--primary-light))]/30">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-[hsl(var(--chart-success))]/10 dark:bg-[hsl(var(--chart-success))]/20 rounded-lg border border-[hsl(var(--chart-success))]/30">
                                            <Map size={14} className="text-[hsl(var(--chart-success))]" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-[11px] font-black text-[hsl(var(--text-body))] dark:text-[hsl(var(--card-foreground))] uppercase tracking-tight">Dharampeth Zone</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <Users size={10} className="text-[hsl(var(--text-muted))]" />
                                                <span className="text-[9px] font-black text-[hsl(var(--text-muted))] dark:text-[hsl(var(--text-muted))] uppercase tracking-tighter">12 Facilities</span>
                                            </div>
                                        </div>
                                    </div>
                                    <ChevronRight size={16} className="text-[hsl(var(--text-muted))] dark:text-[hsl(var(--text-muted))] group-hover:text-[hsl(var(--primary-light))] transition-colors" />
                                </div>
                            </div>
                        </div>

                        {/* CHILD 02: Nagpur East */}
                        <div className="flex items-center gap-5 group">
                            <div className="relative z-10 h-8 w-8 rounded-xl bg-[hsl(var(--card))] dark:bg-[hsl(var(--card))] border-2 border-[hsl(var(--border))] shadow-md flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:bg-[hsl(var(--muted))] group-hover:scale-105">
                                <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-warning))] shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                            </div>
                            <div className="flex-1 bg-[hsl(var(--card))] dark:bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[18px] p-4 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-[hsl(var(--primary-light))]/30">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-[hsl(var(--chart-warning))]/10 dark:bg-[hsl(var(--chart-warning))]/20 rounded-lg border border-[hsl(var(--chart-warning))]/30">
                                            <Map size={14} className="text-[hsl(var(--chart-warning))]" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-[11px] font-black text-[hsl(var(--text-body))] dark:text-[hsl(var(--card-foreground))] uppercase tracking-tight">Nagpur East</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <AlertCircle size={10} className="text-[hsl(var(--chart-warning))]" />
                                                <span className="text-[9px] font-black text-[hsl(var(--text-muted))] dark:text-[hsl(var(--text-muted))] uppercase tracking-tighter">Sync Required</span>
                                            </div>
                                        </div>
                                    </div>
                                    <ChevronRight size={16} className="text-[hsl(var(--text-muted))] dark:text-[hsl(var(--text-muted))] group-hover:text-[hsl(var(--primary-light))] transition-colors" />
                                </div>
                            </div>
                        </div>

                        {/* CHILD 03: Nagpur West */}
                        <div className="flex items-center gap-5 group">
                            <div className="relative z-10 h-8 w-8 rounded-xl bg-[hsl(var(--card))] dark:bg-[hsl(var(--card))] border-2 border-[hsl(var(--border))] shadow-md flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:bg-[hsl(var(--muted))] group-hover:scale-105">
                                <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-success))] shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
                            </div>
                            <div className="flex-1 bg-[hsl(var(--card))] dark:bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[18px] p-4 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-[hsl(var(--primary-light))]/30">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-[hsl(var(--chart-success))]/10 dark:bg-[hsl(var(--chart-success))]/20 rounded-lg border border-[hsl(var(--chart-success))]/30">
                                            <Map size={14} className="text-[hsl(var(--chart-success))]" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-[11px] font-black text-[hsl(var(--text-body))] dark:text-[hsl(var(--card-foreground))] uppercase tracking-tight">Nagpur West</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <Users size={10} className="text-[hsl(var(--text-muted))]" />
                                                <span className="text-[9px] font-black text-[hsl(var(--text-muted))] dark:text-[hsl(var(--text-muted))] uppercase tracking-tighter">8 Facilities</span>
                                            </div>
                                        </div>
                                    </div>
                                    <ChevronRight size={16} className="text-[hsl(var(--text-muted))] dark:text-[hsl(var(--text-muted))] group-hover:text-[hsl(var(--primary-light))] transition-colors" />
                                </div>
                            </div>
                        </div>

                        {/* CHILD 04: Nagpur North */}
                        <div className="flex items-center gap-5 group">
                            <div className="relative z-10 h-8 w-8 rounded-xl bg-[hsl(var(--card))] dark:bg-[hsl(var(--card))] border-2 border-[hsl(var(--border))] shadow-md flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:bg-[hsl(var(--muted))] group-hover:scale-105">
                                <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-success))] shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
                            </div>
                            <div className="flex-1 bg-[hsl(var(--card))] dark:bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[18px] p-4 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-[hsl(var(--primary-light))]/30">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-[hsl(var(--chart-success))]/10 dark:bg-[hsl(var(--chart-success))]/20 rounded-lg border border-[hsl(var(--chart-success))]/30">
                                            <Map size={14} className="text-[hsl(var(--chart-success))]" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-[11px] font-black text-[hsl(var(--text-body))] dark:text-[hsl(var(--card-foreground))] uppercase tracking-tight">Nagpur North</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <Users size={10} className="text-[hsl(var(--text-muted))]" />
                                                <span className="text-[9px] font-black text-[hsl(var(--text-muted))] dark:text-[hsl(var(--text-muted))] uppercase tracking-tighter">15 Facilities</span>
                                            </div>
                                        </div>
                                    </div>
                                    <ChevronRight size={16} className="text-[hsl(var(--text-muted))] dark:text-[hsl(var(--text-muted))] group-hover:text-[hsl(var(--primary-light))] transition-colors" />
                                </div>
                            </div>
                        </div>

                        {/* CHILD 05: Nagpur South */}
                        <div className="flex items-center gap-5 group">
                            <div className="relative z-10 h-8 w-8 rounded-xl bg-[hsl(var(--card))] dark:bg-[hsl(var(--card))] border-2 border-[hsl(var(--border))] shadow-md flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:bg-[hsl(var(--muted))] group-hover:scale-105">
                                <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-error))] shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                            </div>
                            <div className="flex-1 bg-[hsl(var(--card))] dark:bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[18px] p-4 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-[hsl(var(--primary-light))]/30">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-[hsl(var(--chart-error))]/10 dark:bg-[hsl(var(--chart-error))]/20 rounded-lg border border-[hsl(var(--chart-error))]/30">
                                            <Map size={14} className="text-[hsl(var(--chart-error))]" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-[11px] font-black text-[hsl(var(--text-body))] dark:text-[hsl(var(--card-foreground))] uppercase tracking-tight">Nagpur South</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <AlertCircle size={10} className="text-[hsl(var(--chart-error))]" />
                                                <span className="text-[9px] font-black text-[hsl(var(--text-muted))] dark:text-[hsl(var(--text-muted))] uppercase tracking-tighter">Offline</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <ChevronRight size={16} className="text-[hsl(var(--text-muted))] dark:text-[hsl(var(--text-muted))] group-hover:text-[hsl(var(--primary-light))] transition-colors" />
                                        <Plus size={12} className="text-[hsl(var(--primary-light))]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CHILD 06: More Zones */}
                        <div className="flex items-center gap-5 group">
                            <div className="relative z-10 h-8 w-8 rounded-xl bg-[hsl(var(--card))] dark:bg-[hsl(var(--card))] border-2 border-[hsl(var(--border))] border-dashed shadow-md flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:bg-[hsl(var(--muted))] group-hover:scale-105">
                                <MoreHorizontal size={14} className="text-[hsl(var(--text-muted))]" />
                            </div>
                            <div className="flex-1 bg-[hsl(var(--muted))]/30 dark:bg-[hsl(var(--muted))]/20 border border-[hsl(var(--border))]/50 rounded-[18px] p-4 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-[hsl(var(--primary-light))]/30">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-[hsl(var(--muted))]/50 rounded-lg">
                                            <Plus size={14} className="text-[hsl(var(--text-muted))]" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-[11px] font-black text-[hsl(var(--text-muted))] uppercase tracking-tight">More Zones</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <Hash size={10} className="text-[hsl(var(--text-muted))]" />
                                                <span className="text-[9px] font-black text-[hsl(var(--text-muted))] uppercase tracking-tighter">24+ Available</span>
                                            </div>
                                        </div>
                                    </div>
                                    <ChevronRight size={16} className="text-[hsl(var(--text-muted))] dark:text-[hsl(var(--text-muted))] group-hover:text-[hsl(var(--primary-light))] transition-colors" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}