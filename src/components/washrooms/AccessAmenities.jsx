"use client";

import React from "react";
import { Users, User, User2, VenusAndMars, Baby } from "lucide-react";

export default function AccessAmenities() {
    const genderOptions = [
        { label: "Male", category: "Access", icon: <User size={14} /> },
        { label: "Female", category: "Access", icon: <User2 size={14} /> },
        { label: "Unisex / All Genders", category: "Access", icon: <VenusAndMars size={14} /> },
        { label: "Family Room", category: "Family Features", icon: <Baby size={14} /> },
        { label: "Children Only", category: "Access", icon: <Baby size={14} /> },
    ];

    return (
        <div className="w-full">
            {/* Header - Removed font-black, used font-semibold and lighter text */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="h-10 w-10 rounded-xl bg-cyan-400/5 flex items-center justify-center border border-cyan-500/10">
                    <Users className="text-cyan-500/70 dark:text-cyan-400/70 text-xl" />
                </div>
                <div className="text-left">
                    <h2 className="text-sm font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-widest leading-none">
                        Available for Gender*
                    </h2>
                    <p className="text-[10px] font-normal text-slate-400 uppercase tracking-widest mt-1.5">
                        Operational Access Mapping
                    </p>
                </div>
            </div>

            {/* Checkbox List */}
            <div className="space-y-2">
                {genderOptions.map((item) => (
                    <label
                        key={item.label}
                        className="flex items-center gap-4 group cursor-pointer p-2 rounded-xl hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                    >
                        <div className="relative flex items-center">
                            <input
                                type="checkbox"
                                className="w-4 h-4 rounded border border-slate-200 dark:border-slate-700 text-cyan-500/50 focus:ring-0 transition-all cursor-pointer accent-cyan-500/50"
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <span className="text-slate-400 group-hover:text-cyan-500/70 transition-colors">
                                    {item.icon}
                                </span>
                                {/* Changed from font-bold text-slate-700 to font-medium text-slate-500 */}
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-600 transition-colors tracking-tight">
                                    {item.label}
                                </span>
                            </div>
                            <span className="text-[10px] font-normal text-slate-400 lowercase tracking-tight mt-0.5">
                                {item.category}
                            </span>
                        </div>
                    </label>
                ))}
            </div>
        </div>
    );
}