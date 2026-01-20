"use client";

import { useRouter } from "next/navigation";
import { Layers, ChevronDown, Info, Save, RotateCcw } from "lucide-react";

export default function CreateHierarchyForm() {
    const router = useRouter();

    return (
        /* Standardized padding and vertical spacing using global card patterns */
        <div className="p-8 space-y-8 bg-white dark:bg-card">

            {/* 1. Header Section - Using .page-header-content patterns */}
            <div className="page-header-content border-b border-slate-100 dark:border-slate-800 pb-6">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 flex items-center justify-center shadow-sm">
                        <Layers size={22} className="text-indigo-600 dark:text-indigo-400" strokeWidth={2.5} />
                    </div>
                    <div className="text-left">
                        <h2 className="text-[13px] font-black text-slate-800 dark:text-white uppercase tracking-widest leading-none">
                            Zone Configuration
                        </h2>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">
                            Define a new zone classification
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-7">
                {/* 2. Zone Type Name Input - Using .form-group and .form-input from global.css */}
                <div className="form-group text-left">
                    <label className="form-label !text-indigo-600 dark:!text-indigo-400">
                        Zone Type Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors pointer-events-none">
                            <Layers size={16} />
                        </div>
                        <input
                            type="text"
                            placeholder="e.g., Ward, Floor, Platform"
                            className="form-input w-full !pl-12 shadow-sm"
                        />
                    </div>
                </div>

                {/* 3. Parent Type Selection - Using .form-select from global.css */}
                <div className="form-group text-left">
                    <label className="form-label !text-indigo-600 dark:!text-indigo-400">
                        Parent Type <span className="opacity-50 text-[9px]">(Optional)</span>
                    </label>
                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors pointer-events-none z-10">
                            <ChevronDown size={16} />
                        </div>
                        <select
                            defaultValue="No Parent"
                            className="form-select w-full !pl-12 shadow-sm font-medium"
                        >
                            <option value="No Parent">No Parent (Top Level Root)</option>
                            <option value="Nagpur Urban">Nagpur Urban</option>
                            <option value="Dharampeth Zone">Dharampeth Zone</option>
                            <option value="Nehru Nagar Zone">Nehru Nagar Zone</option>
                        </select>
                    </div>

                    {/* 4. Enhanced Info Box - Using .lavender-100 token from global.css */}
                    <div className="flex items-start gap-3 mt-6 p-4 bg-[hsl(var(--lavender-100))] dark:bg-slate-900/40 rounded-xl border border-[hsl(var(--border))] shadow-sm transition-all hover:shadow-md">
                        <div className="h-8 w-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center flex-shrink-0">
                            <Info size={16} className="text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div className="text-left">
                            <p className="text-[10px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-widest leading-relaxed">
                                Functional Relationship Architecture
                            </p>
                            <p className="text-[9px] font-medium text-slate-500 dark:text-slate-400 mt-1">
                                Establishing a parent organizes zones logically and enables better resource management across the registry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Action Buttons - Using .btn-action and .btn-gradient from global.css */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 mt-6 border-t border-slate-100 dark:border-slate-800">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="btn btn-action flex-1 h-12 !rounded-xl text-[11px] font-black uppercase tracking-widest transition-all active:scale-95"
                >
                    <RotateCcw size={16} strokeWidth={2.5} />
                    Discard
                </button>

                <button
                    type="submit"
                    className="btn btn-gradient flex-[1.5] h-12 !rounded-xl text-[12px] font-black uppercase tracking-widest shadow-lg shadow-orange-200 dark:shadow-none active:scale-95"
                >
                    <Save size={18} strokeWidth={2.5} />
                    Create Zone
                </button>
            </div>
        </div>
    );
}