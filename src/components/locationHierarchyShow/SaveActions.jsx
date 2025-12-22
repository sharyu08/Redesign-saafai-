"use client";

import { useRouter } from "next/navigation";
import { Save, Edit3, CheckCircle2 } from "lucide-react";

const locations = [
    { id: "114", name: "Nagpur Urban" },
    { id: "118", name: "Dharampeth Zone" },
    { id: "119", name: "Nehru Nagar Zone" },
];

export default function SaveActions() {
    const router = useRouter();

    return (
        <div className="rounded-[24px] bg-[#E6F7F9] border border-[#D1F0F2] p-6 shadow-sm">
            {/* Header Section */}
            <div className="flex items-center gap-3 mb-5">
                <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                    <Save size={16} className="text-[#58BECF]" strokeWidth={2.5} />
                </div>
                <div className="text-left">
                    <h2 className="text-[11px] font-black text-[#007C85] uppercase tracking-widest leading-none">
                        Save Hierarchy
                    </h2>
                    <p className="text-[9px] font-bold text-[#2D8E97] uppercase tracking-widest opacity-70 mt-1">
                        Commit structural updates to registry
                    </p>
                </div>
            </div>

            {/* Actions List */}
            <div className="space-y-3">
                {locations.map((loc) => (
                    <div
                        key={loc.id}
                        className="flex items-center justify-between rounded-xl border border-white bg-white/50 p-3 shadow-sm transition-all hover:bg-white"
                    >
                        <div className="text-left">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter leading-none mb-1">
                                Node ID: #{loc.id}
                            </p>
                            <p className="text-xs font-bold text-slate-700">{loc.name}</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() =>
                                    router.push(`/dashboard/locationHierarchy/edit/${loc.id}`)
                                }
                                className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-[#58BECF] hover:border-[#58BECF]/30 transition-all"
                            >
                                <Edit3 size={12} />
                                Edit
                            </button>

                            <button
                                style={{ background: 'linear-gradient(to right, #58BECF, #6D9CDC)' }}
                                className="flex items-center gap-1 px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest text-white shadow-md shadow-cyan-500/10 hover:brightness-105 active:scale-95 transition-all"
                            >
                                <CheckCircle2 size={12} />
                                Save
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Label */}
            <div className="mt-6 flex items-center justify-center gap-2 opacity-40">
                <div className="h-1 w-1 rounded-full bg-[#007C85]" />
                <p className="text-[8px] font-black text-[#2D8E97] uppercase tracking-[0.4em]">
                    Finalize Node Mapping
                </p>
                <div className="h-1 w-1 rounded-full bg-[#007C85]" />
            </div>
        </div>
    );
}