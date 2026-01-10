"use client";

import React from "react";
import {
    CheckCircle2,
    Clock,
    Wind,
    Baby,
    Users,
    Shield,
    Package,
    UserCheck,
    CreditCard
} from "lucide-react";

export default function AccessAmenities() {
    const features = [
        { label: "Paid Entry Required", category: "access", icon: <CreditCard size={14} /> },
        { label: "Wheelchair Accessible", category: "accessibility", icon: <Users size={14} /> },
        { label: "Strictly for Disabled Users Only", category: "accessibility", icon: <Shield size={14} /> },
        { label: "Baby Changing Station Available", category: "family features", icon: <Baby size={14} /> },
        { label: "Sanitary Products Available", category: "amenities", icon: <Package size={14} /> },
        { label: "Attendant Present", category: "service", icon: <UserCheck size={14} /> },
        { label: "24/7 Availability", category: "access", icon: <Clock size={14} /> },
        { label: "Hand Dryer Available", category: "amenities", icon: <Wind size={14} /> },
    ];

    return (
        <div className="w-full">
            {/* Header - Kept font-black/bold for hierarchy */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="h-10 w-10 rounded-xl bg-cyan-400/5 flex items-center justify-center border border-cyan-500/10">
                    <CheckCircle2 className="text-cyan-500/70 dark:text-cyan-400/70 text-xl" />
                </div>
                <div className="text-left">
                    <h2 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-[0.2em] leading-none">
                        Additional Features
                    </h2>
                    <p className="text-[10px] font-normal text-slate-400 uppercase tracking-widest mt-1.5">
                        Operational Feature Mapping
                    </p>
                </div>
            </div>

            {/* Feature Grid - Text lightened and bold removed */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                {features.map((item) => (
                    <label
                        key={item.label}
                        className="flex items-start gap-4 group cursor-pointer p-2 rounded-xl hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                    >
                        <div className="relative flex items-center mt-0.5">
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
                            {/* Changed to lowercase and font-normal for a lighter feel */}
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