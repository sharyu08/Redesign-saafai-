"use client";

import React from "react";
import { Building2, MapPin, Factory, Camera } from "lucide-react";

export default function WashroomDetailsForm() {
    return (
        /* Standard card-global for consistent UI */
        <div className="card-global transition-all">
            {/* Header section with balanced sizing */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="h-10 w-10 rounded-xl bg-cyan-400/10 flex items-center justify-center border border-cyan-500/10 shadow-sm">
                    <Building2 size={20} className="text-cyan-600 dark:text-cyan-400" strokeWidth={2.5} />
                </div>
                <div>
                    {/* Balanced Size: text-sm (14px) instead of 12px or 16px */}
                    <h2 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-[0.15em] leading-none">
                        Washroom Architecture
                    </h2>
                    {/* Balanced Size: 10px for metadata */}
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 opacity-80">
                        Primary Facility Configuration
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">

                {/* Washroom Name */}
                <div className="form-group">
                    <label className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block ml-1">
                        Washroom Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative flex items-center h-11"> {/* Balanced height */}
                        <Building2 className="absolute left-4 text-slate-400" size={16} />
                        <input
                            className="w-full h-full pl-11 pr-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/30 dark:bg-slate-800/20 text-sm focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/5 transition-all outline-none"
                            placeholder="Enter facility name"
                        />
                    </div>
                </div>

                {/* Location */}
                <div className="form-group">
                    <label className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block ml-1">
                        Location (Landmark)
                    </label>
                    <div className="relative flex items-center h-11">
                        <MapPin className="absolute left-4 text-slate-400" size={16} />
                        <input
                            className="w-full h-full pl-11 pr-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/30 dark:bg-slate-800/20 text-sm focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/5 transition-all outline-none"
                            placeholder="e.g. Near West Gate"
                        />
                    </div>
                </div>

                {/* Company */}
                <div className="form-group">
                    <label className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block ml-1">
                        Maintenance Company
                    </label>
                    <div className="relative flex items-center h-11">
                        <Factory className="absolute left-4 text-slate-400" size={16} />
                        <input
                            className="w-full h-full pl-11 pr-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/30 dark:bg-slate-800/20 text-sm focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/5 transition-all outline-none"
                            placeholder="Enter provider name"
                        />
                    </div>
                </div>

                {/* Image Count */}
                <div className="form-group">
                    <label className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block ml-1">
                        Archive Image Count
                    </label>
                    <div className="relative flex items-center h-11">
                        <Camera className="absolute left-4 text-slate-400" size={16} />
                        <input
                            className="w-full h-full pl-11 pr-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/30 dark:bg-slate-800/20 text-sm focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/5 transition-all outline-none"
                            type="number"
                            placeholder="0"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}