"use client";

import { Sparkles, CheckCircle2 } from "lucide-react";

export default function AdditionalFeatures() {
    const features = [
        "All Gender Only",
        "Baby Changing Station Available",
        "Sanitary Products Available",
    ];

    return (
        /* Using .card-global for standard dashboard panel styling and hover effects */
        <div className="card-global transition-all hover:shadow-lg">

            {/* Section Header - Synchronized with Page Header tokens */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="h-10 w-10 rounded-xl bg-cyan-400/10 flex items-center justify-center border border-cyan-500/10 shadow-sm">
                    <Sparkles className="text-cyan-600 dark:text-cyan-400 text-xl" />
                </div>
                <div className="text-left">
                    <h2 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-[0.2em] leading-none">
                        Additional Features
                    </h2>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 opacity-70">
                        Extended Amenity Mapping
                    </p>
                </div>
            </div>

            {/* Checkbox List using theme-standardized typography */}
            <div className="space-y-4">
                {features.map((item) => (
                    <label key={item} className="flex items-center gap-4 group cursor-pointer">
                        <div className="relative flex items-center">
                            <input
                                type="checkbox"
                                className="w-5 h-5 rounded-lg border-2 border-slate-200 dark:border-slate-700 text-cyan-500 focus:ring-cyan-500/20 transition-all cursor-pointer accent-cyan-500"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-slate-600 dark:text-slate-300 group-hover:text-cyan-600 transition-colors uppercase tracking-tight">
                                {item}
                            </span>
                        </div>
                    </label>
                ))}
            </div>

            {/* Faint Decorative Footer */}
            <div className="mt-8 pt-4 border-t border-slate-50 dark:border-slate-800/50">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50/50 dark:bg-slate-800/20 rounded-full w-fit">
                    <CheckCircle2 size={10} className="text-cyan-500" />
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Verified Feature List</span>
                </div>
            </div>
        </div>
    );
}