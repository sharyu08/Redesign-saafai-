"use client";

import { Map as MapIcon, Users, UserRound, UserRoundPlus } from "lucide-react";

export default function MapsCategory() {
    return (
        /* Using .card-global for consistent rounding and theme shadow */
        <div className="card-global transition-all hover:shadow-lg">

            {/* Section Header synchronized with Page Header tokens */}
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="h-10 w-10 rounded-xl bg-cyan-400/10 flex items-center justify-center border border-cyan-500/10 shadow-sm">
                    <MapIcon className="text-cyan-600 dark:text-cyan-400 text-xl" />
                </div>
                <div>
                    <h2 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-[0.2em] leading-none">
                        Maps & Category
                    </h2>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 opacity-70">
                        Spatial Facility Allocation
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Men's Facilities - Using faint transparent Oceanic Blue */}
                <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 transition-all hover:shadow-md">
                    <div className="flex items-center gap-2 mb-5 border-b border-slate-100 dark:border-slate-800 pb-3">
                        <div className="p-1.5 bg-white dark:bg-slate-900 rounded-md shadow-sm border border-slate-100 dark:border-slate-800">
                            <UserRound className="text-cyan-600 dark:text-cyan-400" size={16} />
                        </div>
                        <h3 className="text-xs font-black text-slate-700 dark:text-slate-200 uppercase tracking-widest">
                            Men’s Facilities
                        </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <InputField placeholder="WC" />
                        <InputField placeholder="Urinals" />
                        <InputField placeholder="Latrines" />
                        <InputField placeholder="Showers" />
                    </div>
                </div>

                {/* Women Facilities - Using faint transparent Gray variant */}
                <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/40 transition-all hover:shadow-md">
                    <div className="flex items-center gap-2 mb-5 border-b border-slate-100 dark:border-slate-800 pb-3">
                        <div className="p-1.5 bg-white dark:bg-slate-900 rounded-md shadow-sm border border-slate-100 dark:border-slate-800">
                            <UserRoundPlus className="text-slate-600 dark:text-slate-400" size={16} />
                        </div>
                        <h3 className="text-xs font-black text-slate-700 dark:text-slate-200 uppercase tracking-widest">
                            Women & All Gender
                        </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <InputField placeholder="WC" />
                        <InputField placeholder="Urinals" />
                        <InputField placeholder="Latrines" />
                        <InputField placeholder="Showers" />
                    </div>
                </div>

            </div>
        </div>
    );
}

/**
 * Reusable Input Field adhering to global form overrides
 */
function InputField({ placeholder }) {
    return (
        <div className="form-group mb-0">
            <label className="form-label mb-1.5 ml-1">{placeholder}</label>
            <input
                className="form-input pl-4 focus:ring-cyan-500/10 focus:border-cyan-500"
                type="number"
                min="0"
                placeholder="0"
            />
        </div>
    );
}