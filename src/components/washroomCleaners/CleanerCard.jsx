"use client";

import { Eye, Trash2, Phone, User, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CleanerCard({ cleaner }) {
    const router = useRouter();

    // Guard clause to prevent crash if cleaner object is missing
    if (!cleaner) return null;

    const handleView = () => {
        router.push("/dashboard/cleaner-activity");
    };

    return (
        /* Using .card-global for standard dashboard panel styling.
           This automatically handles hover shadow and dark mode border colors.
        */
        <div className="card-global flex justify-between items-center group p-5 border border-slate-100 hover:border-cyan-500/30 transition-all duration-300">

            {/* Left Section: Avatar and Info */}
            <div className="flex items-center gap-4">
                {/* Themed Avatar: Uses --lavender-100 (soft teal) and --lavender-300 (primary teal) */}
                <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--lavender-100))] border border-[hsl(var(--lavender-200))] flex items-center justify-center transition-transform group-hover:scale-105">
                    <User className="text-[hsl(var(--lavender-300))] w-7 h-7" />
                </div>

                <div className="space-y-1">
                    {/* Standardized header using dashboard font weight */}
                    <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-tight">
                        {cleaner.name}
                    </h3>
                    {/* Secondary info using muted body text tokens */}
                    <p className="text-[11px] font-medium text-slate-400 flex items-center gap-1.5">
                        <Phone size={12} className="text-[hsl(var(--lavender-300))]" />
                        <span className="tracking-wider">{cleaner.phone || "No Phone Provided"}</span>
                    </p>
                </div>
            </div>

            {/* Right Section: Date and Actions */}
            <div className="text-right space-y-3">
                <div className="flex items-center justify-end gap-1.5 text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 opacity-80">
                    <Calendar size={11} className="text-slate-300" />
                    {cleaner.date || "Not Assigned"}
                </div>

                <div className="flex gap-2 justify-end">
                    {/* View Details Button: Uses .btn-primary gradient and increased text size */}
                    <button
                        type="button"
                        onClick={handleView}
                        className="btn btn-primary px-5 py-2 text-sm font-bold shadow-lg shadow-orange-500/20 rounded-xl"
                    >
                        <Eye size={16} />
                    </button>

                    {/* Delete Button: High visibility red variant */}
                    <button
                        type="button"
                        className="p-2.5 rounded-xl bg-red-50 border border-red-100 text-red-600 hover:bg-red-600 hover:text-white transition-all active:scale-95 shadow-sm"
                        title="Remove Cleaner"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}