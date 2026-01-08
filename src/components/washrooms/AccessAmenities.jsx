"use client";

import { CheckCircle2, Clock, Wind, Baby } from "lucide-react";

export default function AccessAmenities() {
    const amenities = [
        { label: "24/7 Availability", icon: <Clock size={14} /> },
        { label: "Hand Dryer Available", icon: <Wind size={14} /> },
        { label: "Family Room", icon: <Baby size={14} /> },
    ];

    return (
        /* Standard card with hover shadow from global.css */
        <div className="card-global transition-all hover:shadow-lg">

            {/* Header synced with Page Header tokens */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="h-10 w-10 rounded-xl bg-cyan-400/10 flex items-center justify-center border border-cyan-500/10 shadow-sm">
                    <CheckCircle2 className="text-cyan-600 dark:text-cyan-400 text-xl" />
                </div>
                <div className="text-left">
                    <h2 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-[0.2em] leading-none">
                        Access & Amenities
                    </h2>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 opacity-70">
                        Operational Feature Mapping
                    </p>
                </div>
            </div>

            {/* Checkbox List */}
            <div className="space-y-4">
                {amenities.map((item) => (
                    <label key={item.label} className="flex items-center gap-4 group cursor-pointer">
                        <div className="relative flex items-center">
                            <input
                                type="checkbox"
                                className="w-5 h-5 rounded-lg border-2 border-slate-200 dark:border-slate-700 text-cyan-500 focus:ring-cyan-500/20 transition-all cursor-pointer accent-cyan-500"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-cyan-600/50 dark:text-cyan-400/50 group-hover:text-cyan-500 transition-colors">
                                {item.icon}
                            </span>
                            <span className="text-sm font-bold text-slate-600 dark:text-slate-300 group-hover:text-cyan-600 transition-colors uppercase tracking-tight">
                                {item.label}
                            </span>
                        </div>
                    </label>
                ))}
            </div>

            {/* Faint metadata footer */}
            <div className="mt-8 flex items-center justify-between opacity-50">
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">
                    Entry Level: Public
                </p>
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">
                    Status: Verified
                </p>
            </div>
        </div>
    );
}