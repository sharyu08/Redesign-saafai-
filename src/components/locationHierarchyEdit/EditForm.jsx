"use client";

import { Save, X, ChevronDown, Info } from "lucide-react";

export default function EditForm() {
    return (
        <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden relative">

            <div className="p-8 space-y-8">
                {/* Form Field: Type Name */}
                <div className="space-y-2.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[hsl(var(--primary))] ml-1">
                        Zone Type Name *
                    </label>
                    <input
                        defaultValue="Nagpur Urban"
                        className="w-full rounded-2xl border border-slate-200 px-5 py-4 bg-[hsl(var(--bg-light-gray))] text-slate-700 placeholder:text-slate-300 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[hsl(var(--lavender-200))/0.3] focus:border-[hsl(var(--primary)/0.15)] transition-all font-bold text-sm shadow-inner"
                    />
                </div>

                {/* Form Field: Parent Type */}
                <div className="space-y-2.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[hsl(var(--primary))] ml-1">
                        Parent Type (Optional)
                    </label>
                    <div className="relative group">
                        <select className="w-full appearance-none rounded-2xl border border-slate-200 bg-[hsl(var(--bg-light-gray))] px-5 py-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:ring-4 focus:ring-[hsl(var(--lavender-200))/0.3] focus:border-[hsl(var(--primary)/0.15)] transition-all cursor-pointer">
                            <option>No Parent (Top Level)</option>
                            <option>Nagpur Urban</option>
                        </select>
                        <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[hsl(var(--primary))] transition-colors">
                            <ChevronDown size={20} strokeWidth={3} />
                        </div>
                    </div>
                </div>

                {/* Action Footer */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 mt-4 border-t border-slate-50">
                    <button
                        type="button"
                        className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-2.5 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95"
                    >
                        <X size={14} strokeWidth={2.5} className="-ml-1" />
                        Discard Changes
                    </button>

                    <button
                        type="submit"
                        className="btn-gradient flex-[1.5] flex items-center justify-center gap-2 rounded-xl px-6 py-2.5 text-xs font-medium text-white hover:opacity-90 transition-all active:scale-95"
                    >
                        <Save size={14} strokeWidth={2.5} className="-ml-1" />
                        Update Zone Details
                    </button>
                </div>
            </div>
        </div>
    );
}