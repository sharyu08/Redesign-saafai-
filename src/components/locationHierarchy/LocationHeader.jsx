"use client";

import Link from "next/link";
import { Network, TreePine, Plus, LayoutGrid } from "lucide-react";

export default function LocationHeader() {
    return (
        <div className="rounded-[24px] bg-[#E6F7F9] px-8 py-6 shadow-sm border border-[#D1F0F2] overflow-hidden relative group">

            {/* Subtle background decorative tint - Updated to match new theme */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/40 blur-3xl rounded-full -mr-20 -mt-20 pointer-events-none transition-all group-hover:bg-white/60" />

            <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                {/* Title Section */}
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-white">
                        <Network className="h-6 w-6 text-[#58BECF]" strokeWidth={2.5} />
                    </div>
                    <div className="text-left">
                        <h1 className="text-lg font-black text-[#007C85] tracking-tight uppercase leading-none">
                            Location Hierarchy
                        </h1>
                        <p className="flex items-center gap-1.5 mt-1.5 text-[10px] font-bold uppercase tracking-widest text-[#2D8E97] opacity-70">
                            <TreePine size={12} />
                            Organization Structure & Zones
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                    <Link href="/dashboard/locationHierarchy/show">
                        <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 transition-all active:scale-95 shadow-sm">
                            <LayoutGrid size={16} />
                            Show Hierarchy
                        </button>
                    </Link>

                    <Link href="/dashboard/locationHierarchy/add">
                        {/* Primary Button updated with the branded gradient */}
                        <button
                            style={{ background: 'linear-gradient(to right, #58BECF, #6D9CDC)' }}
                            className="flex items-center gap-2 rounded-xl px-6 py-2.5 text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-cyan-500/20 hover:brightness-105 transition-all active:scale-95"
                        >
                            <Plus size={18} strokeWidth={3} />
                            Add Tree Hierarchy
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}