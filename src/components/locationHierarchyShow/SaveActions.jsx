"use client";

import { useRouter } from "next/navigation";
import { Save, Edit3, CheckCircle2, ShieldCheck } from "lucide-react";

const locations = [
    { id: "114", name: <span className="text-black">Nagpur Urban</span> },
    { id: "118", name: "Dharampeth Zone" },
    { id: "119", name: "Nehru Nagar Zone" },
];

export default function SaveActions() {
    const router = useRouter();

    return (
        <div className="rounded-[32px] bg-[hsl(var(--lavender-100))] border border-[hsl(var(--lavender-200))] p-7 shadow-sm">

            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                        <Save size={20} className="text-black" strokeWidth={2.5} />
                    </div>
                    <div className="text-left">
                        <h2 className="text-[12px] font-black text-black uppercase tracking-widest leading-none">
                            Save Hierarchy
                        </h2>
                        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1.5 opacity-70">
                            Commit structural updates
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                {locations.map((loc) => (
                    <div key={loc.id} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white p-4 shadow-sm group">
                        <div className="text-left">
                            <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1.5 group-hover:text-black transition-colors">
                                Zone ID: #{loc.id}
                            </p>
                            <p className="text-[11px] font-bold text-slate-600 uppercase tracking-tight">
                                {loc.name}
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => router.push(`/dashboard/locationHierarchy/edit/${loc.id}`)}
                                className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-100 bg-[hsl(var(--bg-light-gray))] text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-black hover:bg-[hsl(var(--lavender-100))] transition-all"
                            >
                                <Edit3 size={12} strokeWidth={2.5} />
                                Edit
                            </button>

                            {/* USING YOUR .btn-gradient CLASS FROM CSS */}
                            <button className="btn btn-gradient flex items-center gap-1.5 px-5 py-2 text-[9px] font-black uppercase tracking-widest shadow-md active:scale-95">
                                <CheckCircle2 size={12} strokeWidth={2.5} />
                                Save
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}