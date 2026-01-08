"use client";

import { FaPerson, FaPersonDress } from "react-icons/fa6";
import { MdShower } from "react-icons/md";

export default function UsageCategory() {
    return (
        <div className="space-y-6">
            {/* Section Header - Synchronized with Page Header Tokens */}
            <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-xl bg-cyan-400/10 flex items-center justify-center border border-cyan-500/10 shadow-sm">
                    <MdShower className="text-cyan-600 dark:text-cyan-400 text-xl" />
                </div>
                <div>
                    <h2 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-[0.2em] leading-none">
                        Usage Category
                    </h2>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 opacity-70">
                        Facility Capacity Metrics
                    </p>
                </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* MEN'S SECTION - Using faint transparent Oceanic Blue */}
                <div className="bg-slate-50/50 dark:bg-slate-800/20 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 transition-all hover:shadow-md">
                    <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                        <div className="h-8 w-8 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-center">
                            <FaPerson className="text-cyan-600 dark:text-cyan-400 text-lg" />
                        </div>
                        <h3 className="text-xs font-black text-slate-700 dark:text-slate-200 uppercase tracking-widest">
                            Men's Facilities
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                        <InputField label="WC" />
                        <InputField label="Indian" />
                        <InputField label="Urinals" />
                        <InputField label="Shower" />
                        <InputField label="Basin" />
                    </div>
                </div>

                {/* WOMEN'S SECTION - Using faint transparent Rose Red for differentiation */}
                <div className="bg-rose-50/30 dark:bg-rose-900/5 border border-rose-100/50 dark:border-rose-900/20 rounded-2xl p-6 transition-all hover:shadow-md">
                    <div className="flex items-center gap-3 mb-6 border-b border-rose-100 dark:border-rose-900/20 pb-4">
                        <div className="h-8 w-8 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-rose-100 flex items-center justify-center">
                            <FaPersonDress className="text-rose-500 text-lg" />
                        </div>
                        <h3 className="text-xs font-black text-rose-700 dark:text-rose-400 uppercase tracking-widest">
                            Women's Facilities
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                        <InputField label="WC" colorScheme="rose" />
                        <InputField label="Indian" colorScheme="rose" />
                        <InputField label="Urinals" colorScheme="rose" />
                        <InputField label="Shower" colorScheme="rose" />
                        <InputField label="Basin" colorScheme="rose" />
                    </div>
                </div>

            </div>
        </div>
    );
}

function InputField({ label, colorScheme = "cyan" }) {
    const isCyan = colorScheme === "cyan";

    return (
        <div className="form-group mb-0">
            <label className="form-label mb-1.5 ml-1">
                {label}
            </label>
            <input
                className={`form-input pl-4 ${isCyan
                    ? 'focus:ring-cyan-500/10 focus:border-cyan-500'
                    : 'focus:ring-rose-500/10 focus:border-rose-500'}`}
                type="number"
                min="0"
                placeholder="0"
            />
        </div>
    );
}