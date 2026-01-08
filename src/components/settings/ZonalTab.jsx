"use client";

import { useState } from "react";
import { SaveButton } from "./SharedUI";
import { Map, Info, Globe } from "lucide-react";

export default function ZonalTab({ onNotify }) {
    const [loading, setLoading] = useState(false);

    const zones = [
        "Nagpur Urban",
        "Dharampeth Zone",
        "Sadar Zone",
        "Nehru Nagar Zone",
        "Manish Nagar Zone",
        "Nagpur East"
    ];

    const handleSave = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            onNotify("Zonal configuration saved!");
        }, 1000);
    };

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Header Section - Synchronized with .page-header logic */}
            <div className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
                <div className="h-12 w-12 rounded-2xl bg-cyan-400/10 flex items-center justify-center border border-cyan-500/10 shadow-sm">
                    <Map className="text-cyan-600 dark:text-cyan-400" size={24} strokeWidth={2.5} />
                </div>
                <div className="text-left">
                    <h2 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-[0.2em] leading-none">
                        Hierarchy Visibility
                    </h2>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 opacity-70">
                        Operational Grid Configuration
                    </p>
                </div>
            </div>

            {/* Grid using .card-global logic for light/faint transparency */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {zones.map((zone) => (
                    <label
                        key={zone}
                        className="p-5 border border-slate-100 dark:border-slate-800 rounded-[22px] flex items-center justify-between transition-all bg-slate-50/50 dark:bg-slate-800/20 hover:bg-white dark:hover:bg-slate-800 hover:border-cyan-500/30 group cursor-pointer shadow-sm hover:shadow-md"
                    >
                        <div className="flex items-center gap-3 text-left">
                            <div className="h-8 w-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 flex items-center justify-center">
                                <Globe size={14} className="text-slate-300 group-hover:text-cyan-500 transition-colors" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[11px] font-black text-slate-700 dark:text-slate-200 uppercase tracking-tight group-hover:text-cyan-600 transition-colors">
                                    {zone}
                                </span>
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
                                    Active Coverage
                                </span>
                            </div>
                        </div>
                        <input
                            type="checkbox"
                            className="h-5 w-5 rounded-lg border-slate-200 text-cyan-600 focus:ring-cyan-500/20 transition-all cursor-pointer accent-cyan-500"
                            defaultChecked
                        />
                    </label>
                ))}
            </div>

            {/* Info Box using standard muted tokens */}
            <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 rounded-2xl flex gap-3 items-start">
                <Info size={16} className="text-cyan-500 shrink-0 mt-0.5" />
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase leading-relaxed tracking-wide text-left">
                    Note: Disabling a zone here only hides it from your personal view.
                    <span className="font-black text-cyan-600 dark:text-cyan-400 ml-1">It will still be tracked in the master inspection registry.</span>
                </p>
            </div>

            {/* Save Action - Using standard footer logic */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <SaveButton
                    onClick={handleSave}
                    loading={loading}
                    className="btn-primary px-10 py-3 rounded-xl text-xs font-black uppercase tracking-[0.15em]"
                />
            </div>
        </div>
    );
}