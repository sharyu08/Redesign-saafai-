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
        /* Using .card-global for consistent radius, shadow, and theme transitions */
        <div className="card-global bg-white dark:bg-card border-slate-200 p-7 h-full">

            {/* Header: Following the .page-header-content icon + text pattern */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 flex items-center justify-center shadow-sm">
                        <Save size={20} className="text-indigo-600 dark:text-indigo-400" strokeWidth={2.5} />
                    </div>
                    <div className="text-left">
                        <h2 className="text-[11px] font-black text-slate-800 dark:text-white uppercase tracking-[0.2em] leading-none">
                            Save Hierarchy
                        </h2>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">
                            Commit structural updates
                        </p>
                    </div>
                </div>
            </div>

            {/* List of actions */}
            <div className="space-y-3">
                {locations.map((loc) => (
                    <div key={loc.id} className="flex items-center justify-between rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-4 shadow-sm group hover:border-indigo-100 dark:hover:border-indigo-900 transition-all">
                        <div className="text-left">
                            <p className="text-[9px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest leading-none mb-1.5 group-hover:text-indigo-500 transition-colors">
                                Zone ID: #{loc.id}
                            </p>
                            <p className="text-[11px] font-bold text-slate-700 dark:text-slate-200 uppercase tracking-tight">
                                {loc.name}
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            {/* Using your .btn-icon for secondary actions */}
                            <button
                                onClick={() => router.push(`/dashboard/locationHierarchy/edit/${loc.id}`)}
                                className="btn-icon h-9 px-4 !rounded-xl border-slate-200 dark:border-slate-700 text-[9px] font-black uppercase tracking-widest"
                                title="Edit Node"
                            >
                                <Edit3 size={12} strokeWidth={2.5} className="mr-1.5" />
                                Edit
                            </button>

                            {/* USING YOUR .btn-gradient CLASS FROM CSS */}
                            <button className="btn btn-gradient h-9 px-5 !rounded-xl text-[9px] uppercase tracking-widest shadow-md active:scale-95">
                                <CheckCircle2 size={12} strokeWidth={2.5} className="mr-1.5" />
                                Save
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}