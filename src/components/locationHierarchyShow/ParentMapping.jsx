"use client";

import { Layers, ChevronDown } from "lucide-react";

const locations = [
    "Nagpur Urban",
    "Dharampeth Zone",
    "Nehru Nagar Zone",
    "Dhantoli",
];

export default function ParentMapping() {
    return (
        <div className="rounded-[24px] bg-[#E6F7F9] border border-[#D1F0F2] p-6 shadow-sm">
            {/* Header with Icon */}
            <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                    <Layers size={16} className="text-[#58BECF]" strokeWidth={2.5} />
                </div>
                <div className="text-left">
                    <h2 className="text-[11px] font-black text-[#007C85] uppercase tracking-widest leading-none">
                        Parent Mapping
                    </h2>
                    <p className="text-[9px] font-bold text-[#2D8E97] uppercase tracking-widest opacity-70 mt-1">
                        Assign node relationships
                    </p>
                </div>
            </div>

            {/* Mapping Selectors */}
            <div className="space-y-4">
                {locations.map((loc) => (
                    <div key={loc} className="space-y-1.5">
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                            Parent for {loc}
                        </label>
                        <div className="relative group">
                            <select
                                defaultValue="Nagpur Urban"
                                className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 outline-none transition-all focus:ring-4 focus:ring-cyan-50 focus:border-[#58BECF] cursor-pointer shadow-sm"
                            >
                                <option value="No Parent">No Parent Node</option>
                                <option value="Nagpur Urban">Nagpur Urban</option>
                                <option value="Dharampeth Zone">Dharampeth Zone</option>
                                <option value="Nehru Nagar Zone">Nehru Nagar Zone</option>
                            </select>
                            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#58BECF] transition-colors">
                                <ChevronDown size={14} strokeWidth={3} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Decorative Sync Label */}
            <p className="mt-6 text-center text-[8px] font-black text-[#2D8E97] uppercase tracking-[0.3em] opacity-40">
                Live Hierarchy Synchronization
            </p>
        </div>
    );
}