"use client";

import { useRouter } from "next/navigation";
import { X, Check, Info, Layers, ChevronDown } from "lucide-react";

export default function CreateHierarchyForm() {
    const router = useRouter();

    return (
        <div className="p-8 space-y-8">

            {/* Form Title Section - Synchronized with Global Header Tokens */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-6">
                <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-cyan-400/10 flex items-center justify-center border border-cyan-500/10">
                        <Layers size={20} className="text-cyan-600 dark:text-cyan-400" strokeWidth={2.5} />
                    </div>
                    <div className="text-left">
                        {/* Applied font-black and tracking-[0.2em] as per global configuration */}
                        <h2 className="text-[12px] font-black text-slate-800 dark:text-slate-100 uppercase tracking-[0.2em] leading-none">
                            Type Configuration
                        </h2>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 opacity-70">
                            Define a new zone classification
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                {/* Zone Type Name - Form Label Tokens */}
                <div className="space-y-2.5 text-left">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 ml-1">
                        Zone Type Name *
                    </label>
                    <div className="relative group">
                        <input
                            placeholder="e.g., Ward, Floor, Platform"
                            className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 px-5 py-4 text-sm font-bold text-slate-700 dark:text-slate-200 placeholder:text-slate-300 focus:bg-white dark:focus:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-cyan-500/10 focus:border-cyan-500 transition-all shadow-inner"
                        />
                    </div>
                </div>

                {/* Parent Type */}
                <div className="space-y-2.5 text-left">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 ml-1">
                        Parent Type (Optional)
                    </label>
                    <div className="relative group">
                        <select
                            defaultValue="No Parent"
                            className="w-full appearance-none rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 px-5 py-4 text-sm font-bold text-slate-700 dark:text-slate-200 outline-none transition-all focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-cyan-500/10 focus:border-cyan-500 cursor-pointer"
                        >
                            <option>No Parent (Top Level)</option>
                            <option>Nagpur Urban</option>
                            <option>Dharampeth Zone</option>
                            <option>Nehru Nagar Zone</option>
                        </select>
                        <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-500 transition-colors">
                            <ChevronDown size={20} strokeWidth={3} />
                        </div>
                    </div>

                    {/* Branded Info Box - Using Faint Transparent Cyan with Roboto Bold */}
                    <div className="flex items-center gap-3 mt-3 px-4 py-3 bg-cyan-400/5 rounded-xl border border-cyan-500/10">
                        <Info size={14} className="text-cyan-600 dark:text-cyan-400" />
                        <p className="text-[9px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-widest text-left">
                            Assigning a parent establishes a functional relationship in the architecture
                        </p>
                    </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 mt-4 border-t border-slate-100 dark:border-slate-800">
                    {/* Discard - Thin Border Slate Style with Roboto Black text */}
                    <button
                        onClick={() => router.back()}
                        className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 py-3 text-[11px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95 shadow-sm"
                    >
                        <X size={14} strokeWidth={3} className="-ml-1" />
                        Discard Changes
                    </button>

                    {/* Submit - Branded Orange with Increased text-[13px] and tracking-[0.15em] */}
                    <button
                        className="flex-[1.5] flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-[13px] font-black uppercase tracking-[0.15em] text-white bg-gradient-to-r from-[#FFB347] to-[#FF8C00] shadow-lg shadow-orange-500/20 active:scale-95 transition-transform"
                    >
                        <Check size={18} strokeWidth={3} className="-ml-1" />
                        Create Zone classification
                    </button>
                </div>
            </div>
        </div>
    );
}