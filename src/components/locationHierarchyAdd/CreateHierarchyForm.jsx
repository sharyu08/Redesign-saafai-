"use client";

import { useRouter } from "next/navigation";
import { X, Check, Info, Layers, ChevronDown, Save, RotateCcw } from "lucide-react";

export default function CreateHierarchyForm() {
    const router = useRouter();

    return (
        <div className="p-8 space-y-8">

            {/* Enhanced Form Header using global classes */}
            <div className="page-header-content border-b border-slate-100 dark:border-slate-800 pb-6">
                <div className="flex items-center gap-4">
                    <div className="page-header-icon h-12 w-12">
                        <Layers size={22} className="text-[hsl(var(--primary-light))]" strokeWidth={2.5} />
                    </div>
                    <div className="text-left">
                        <h2 className="page-header-title text-[13px]">
                            Zone Configuration
                        </h2>
                        <p className="page-header-subtitle text-[10px]">
                            Define a new zone classification in hierarchy
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-7">
                {/* Enhanced Zone Type Name Input */}
                <div className="space-y-3 text-left">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-[hsl(var(--primary))] ml-1 flex items-center gap-2">
                        Zone Type Name
                        <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 transition-opacity">
                            <Layers size={16} className="text-[hsl(var(--primary-light))]" />
                        </div>
                        <input
                            placeholder="e.g., Ward, Floor, Platform"
                            className="w-full rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--bg-light-gray))] pl-12 pr-5 py-4 text-sm font-bold text-[hsl(var(--text-body))] placeholder:text-[hsl(var(--text-hint))] focus:bg-white dark:focus:bg-[hsl(var(--card))] focus:outline-none focus:ring-4 focus:ring-[hsl(var(--primary-light))]/20 focus:border-[hsl(var(--primary))] transition-all shadow-lg"
                        />
                    </div>
                </div>

                {/* Enhanced Parent Type Selection */}
                <div className="space-y-3 text-left">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-[hsl(var(--primary))] ml-1 flex items-center gap-2">
                        Parent Type
                        <span className="text-[hsl(var(--text-muted))] text-[10px]">(Optional)</span>
                    </label>
                    <div className="relative group">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 transition-opacity">
                            <ChevronDown size={16} className="text-[hsl(var(--text-muted))]" />
                        </div>
                        <select
                            defaultValue="No Parent"
                            className="w-full appearance-none rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--bg-light-gray))] pl-12 pr-10 py-4 text-sm font-bold text-[hsl(var(--text-body))] outline-none transition-all focus:bg-white dark:focus:bg-[hsl(var(--card))] focus:ring-4 focus:ring-[hsl(var(--primary-light))]/20 focus:border-[hsl(var(--primary))] cursor-pointer shadow-lg"
                        >
                            <option>No Parent (Top Level)</option>
                            <option>Nagpur Urban</option>
                            <option>Dharampeth Zone</option>
                            <option>Nehru Nagar Zone</option>
                        </select>
                    </div>

                    {/* Enhanced Info Box with global colors */}
                    <div className="flex items-start gap-3 mt-4 p-4 bg-[hsl(var(--lavender-100))] rounded-xl border border-[hsl(var(--border-light-cyan))] shadow-sm">
                        <div className="h-8 w-8 rounded-lg bg-[hsl(var(--primary-light))]/10 flex items-center justify-center flex-shrink-0">
                            <Info size={16} className="text-[hsl(var(--primary))]" />
                        </div>
                        <div className="text-left">
                            <p className="text-[10px] font-black text-[hsl(var(--text-body))] uppercase tracking-[0.2em] leading-relaxed">
                                Assigning a parent establishes a functional relationship in the architectural hierarchy
                            </p>
                            <p className="text-[9px] font-medium text-[hsl(var(--text-muted))] mt-1">
                                This helps organize zones logically and enables better management
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Action Buttons using global classes */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 mt-6 border-t border-[hsl(var(--border-light-cyan))]">
                {/* Enhanced Discard Button */}
                <button
                    onClick={() => router.back()}
                    className="btn-action flex-1 flex items-center justify-center gap-3 rounded-xl px-6 py-3.5 text-[11px] font-black uppercase tracking-widest"
                >
                    <RotateCcw size={16} strokeWidth={2.5} />
                    <span>Discard Changes</span>
                </button>

                {/* Enhanced Submit Button using global gradient class */}
                <button
                    type="submit"
                    className="btn-gradient flex-[1.5] flex items-center justify-center gap-3 rounded-xl px-8 py-3.5 text-[13px] font-black uppercase tracking-[0.15em]"
                >
                    <Save size={18} strokeWidth={2.5} />
                    <span>Create Zone</span>
                </button>
            </div>
        </div>
    );
}