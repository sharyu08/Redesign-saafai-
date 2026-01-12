"use client";

import React from "react";
import { Users, UserPlus, Info } from "lucide-react";

export default function AssignCleaners() {
    return (
        /* Removed card-global and shadow utility classes to prevent the double-border look */
        <div className="w-full">

            {/* Section Header - Synchronized with Page Header tokens */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="h-10 w-10 rounded-xl bg-cyan-400/10 flex items-center justify-center border border-cyan-500/10 shadow-sm">
                    <Users className="text-cyan-600 dark:text-cyan-400 text-xl" />
                </div>
                <div className="text-left">
                    <h2 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-[0.2em] leading-none">
                        Assign Cleaners <span className="text-[10px] opacity-50 ml-1">(Optional)</span>
                    </h2>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 opacity-70">
                        Personnel Mapping Architecture
                    </p>
                </div>
            </div>

            {/* Selection Area using standardized .form-group and .form-select */}
            <div className="form-group mb-6">
                <label className="form-label mb-1.5 ml-1">Staff Selection</label>
                <div className="relative group">
                    <select className="form-select pl-4 focus:ring-cyan-500/10 focus:border-cyan-500">
                        <option>Select available cleaners from registry</option>
                        <option>Rajesh Sahani (ID: NMC-042)</option>
                        <option>Anil Safai (ID: NMC-089)</option>
                        <option>Sunita Rao (ID: NMC-012)</option>
                    </select>
                </div>
            </div>

            {/* Personnel Slots - Using faint transparent gray logic from theme tokens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="h-36 bg-slate-50/50 dark:bg-slate-800/10 border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-2xl flex flex-col items-center justify-center group hover:bg-cyan-400/5 hover:border-cyan-500/30 transition-all cursor-pointer">
                    <UserPlus className="h-6 w-6 text-slate-300 dark:text-slate-600 mb-2 group-hover:text-cyan-500 transition-colors" />
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-cyan-600 transition-colors">Assign Slot 01</p>
                </div>

                <div className="h-36 bg-slate-50/50 dark:bg-slate-800/10 border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-2xl flex flex-col items-center justify-center group hover:bg-cyan-400/5 hover:border-cyan-500/30 transition-all cursor-pointer">
                    <UserPlus className="h-6 w-6 text-slate-300 dark:text-slate-600 mb-2 group-hover:text-cyan-500 transition-colors" />
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-cyan-600 transition-colors">Assign Slot 02</p>
                </div>
            </div>

            {/* Branded Info Hint */}
            <div className="mt-6 flex items-start gap-2 px-1">
                <Info size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                <p className="text-[10px] text-slate-500 dark:text-slate-400 italic leading-relaxed text-left">
                    Cleaners assigned here will receive real-time notifications for tasks at this facility.
                    <span className="font-black text-cyan-600 dark:text-cyan-400 uppercase ml-1">This can be updated later in Operations.</span>
                </p>
            </div>
        </div>
    );
}