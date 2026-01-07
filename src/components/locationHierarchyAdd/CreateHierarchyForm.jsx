"use client";

import { useRouter } from "next/navigation";
import { FolderPlus, X, Check, Info, Layers, ChevronDown } from "lucide-react";

export default function CreateHierarchyForm() {
    const router = useRouter();

    return (
        /* UI UPDATE: Removed max-width and internal header to let the 
           page-level container handle the card structure. 
        */
        <div className="p-8 space-y-8">

            {/* Form Title Section */}
            <div className="flex items-center justify-between border-b border-slate-50 pb-6">
                <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-[hsl(var(--lavender-200))] flex items-center justify-center border border-[hsl(var(--lavender-200))]">
                        <Layers size={20} className="text-black" strokeWidth={2.5} />
                    </div>
                    <div className="text-left">
                        <h2 className="text-[12px] font-black text-black uppercase tracking-widest leading-none">
                            Type Configuration
                        </h2>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">
                            Define a new zone classification
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                {/* Zone Type Name */}
                <div className="space-y-2.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black ml-1">
                        Zone Type Name *
                    </label>
                    <div className="relative group">
                        <input
                            placeholder="e.g., Ward, Floor, Platform"
                            className="w-full rounded-2xl border border-slate-200 bg-[hsl(var(--bg-light-gray))] px-5 py-4 text-sm font-bold text-slate-700 placeholder:text-slate-300 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[hsl(var(--lavender-200))/0.3] focus:border-[hsl(var(--primary)/0.15)] transition-all shadow-inner"
                        />
                    </div>
                </div>

                {/* Parent Type */}
                <div className="space-y-2.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black ml-1">
                        Parent Type (Optional)
                    </label>
                    <div className="relative group">
                        <select
                            defaultValue="No Parent"
                            className="w-full appearance-none rounded-2xl border border-slate-200 bg-[hsl(var(--bg-light-gray))] px-5 py-4 text-sm font-bold text-slate-700 outline-none transition-all focus:bg-white focus:ring-4 focus:ring-[hsl(var(--lavender-200))/0.3] focus:border-[hsl(var(--primary)/0.15)] cursor-pointer"
                        >
                            <option>No Parent (Top Level)</option>
                            <option>Nagpur Urban</option>
                            <option>Dharampeth Zone</option>
                            <option>Nehru Nagar Zone</option>
                        </select>
                        <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[hsl(var(--primary))] transition-colors">
                            <ChevronDown size={20} strokeWidth={3} />
                        </div>
                    </div>

                    {/* Branded Info Box */}
                    <div className="flex items-center gap-3 mt-3 px-4 py-3 bg-[hsl(var(--lavender-100))] rounded-xl border border-[hsl(var(--lavender-200))/0.5]">
                        <Info size={14} className="text-black" />
                        <p className="text-[9px] font-black text-black uppercase tracking-widest opacity-80">
                            Assigning a parent establishes a functional relationship in the architecture
                        </p>
                    </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 mt-4 border-t border-slate-50">
                    {/* Discard */}
                    <button
                        onClick={() => router.back()}
                        className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-2.5 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95"
                    >
                        <X size={14} strokeWidth={2.5} className="-ml-1" />
                        Discard Changes
                    </button>

                    {/* Submit - Branded Gradient */}
                    <button
                        className="btn-gradient flex-[1.5] flex items-center justify-center gap-2 rounded-xl px-6 py-2.5 text-xs font-medium text-white hover:opacity-90 transition-all active:scale-95"
                    >
                        <Check size={14} strokeWidth={2.5} className="-ml-1" />
                        Create Zone
                    </button>
                </div>
            </div>
        </div>
    );
}