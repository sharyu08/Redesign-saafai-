"use client";

import { Network, Building2, Map, Hash, ChevronRight } from "lucide-react";

export default function HierarchyTreePreview() {
    return (
        <div className="rounded-[24px] bg-white border border-slate-100 shadow-sm overflow-hidden">
            {/* Header: Branded Teal */}
            <div className="bg-[#E6F7F9] px-6 py-4 border-b border-[#D1F0F2] flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Network className="h-5 w-5 text-[#007C85]" />
                    <h2 className="text-[#007C85] font-extrabold text-sm uppercase tracking-wider">
                        Live Hierarchy Preview
                    </h2>
                </div>
                <span className="text-[10px] font-black text-[#2D8E97] bg-white/50 px-2 py-0.5 rounded-md border border-[#D1F0F2]">
                    Visual Tree
                </span>
            </div>

            <div className="p-10 relative">
                {/* Visual Connector: Root to Children */}
                {/* This SVG creates the 'L' shaped bracket connecting the nodes */}
                <svg className="absolute left-[45px] top-[110px] w-8 h-40 pointer-events-none" fill="none">
                    <path
                        d="M 2 0 V 135 H 30"
                        stroke="#2D8E97"
                        strokeWidth="2"
                        strokeOpacity="0.2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M 2 0 V 45 H 30"
                        stroke="#2D8E97"
                        strokeWidth="2"
                        strokeOpacity="0.2"
                        strokeLinecap="round"
                    />
                </svg>

                <div className="space-y-12 relative">

                    {/* ROOT NODE: The Primary Parent */}
                    <div className="flex items-center gap-5 group">
                        <div className="relative z-10 h-8 w-8 rounded-full bg-[#007C85] border-4 border-[#E6F7F9] shadow-md flex-shrink-0 flex items-center justify-center">
                            <Building2 size={14} className="text-white" />
                        </div>
                        <div className="flex-1 bg-[#F8FAFB] border border-[#E6F7F9] rounded-2xl p-4 transition-all group-hover:shadow-md group-hover:border-[#D1F0F2]">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-black text-[#007C85] uppercase tracking-tight">Nagpur Urban</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Primary Root Node</p>
                                </div>
                                <span className="flex items-center gap-1 text-[10px] font-black text-[#2D8E97] bg-white px-2 py-1 rounded-lg border border-slate-100">
                                    <Hash size={10} /> 113
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* CHILD NODES CONTAINER */}
                    <div className="space-y-6 ml-12">

                        {/* LEFT CHILD */}
                        <div className="flex items-center gap-4 group">
                            <div className="relative z-10 h-5 w-5 rounded-full bg-[#28C76F] border-2 border-white shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <div className="flex-1 bg-white border border-slate-100 rounded-2xl p-4 transition-all group-hover:border-[#D1F0F2] group-hover:bg-[#F0FAFB]/30">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-extrabold text-slate-700 flex items-center gap-2">
                                            <Map size={14} className="text-[#2D8E97]" /> Dharampeth Zone
                                        </p>
                                        <p className="text-[10px] font-bold text-slate-400 mt-0.5 uppercase tracking-tighter">ID: 159 • Active</p>
                                    </div>
                                    <ChevronRight size={16} className="text-slate-300 group-hover:text-[#007C85] transition-colors" />
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CHILD */}
                        <div className="flex items-center gap-4 group">
                            <div className="relative z-10 h-5 w-5 rounded-full bg-[#2D8E97] border-2 border-white shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <div className="flex-1 bg-white border border-slate-100 rounded-2xl p-4 transition-all group-hover:border-[#D1F0F2] group-hover:bg-[#F0FAFB]/30">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-extrabold text-slate-700 flex items-center gap-2">
                                            <Map size={14} className="text-[#2D8E97]" /> Nagpur East
                                        </p>
                                        <p className="text-[10px] font-bold text-slate-400 mt-0.5 uppercase tracking-tighter">ID: 129 • Pending</p>
                                    </div>
                                    <ChevronRight size={16} className="text-slate-300 group-hover:text-[#007C85] transition-colors" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Footer Summary */}
            <div className="bg-[#F8FAFB] px-8 py-4 border-t border-slate-50">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">
                    Structure updated: Just Now
                </p>
            </div>
        </div>
    );
}