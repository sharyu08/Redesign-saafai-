"use client";

import { HiOutlinePhotograph } from "react-icons/hi";

export default function VisualEvidence() {
    return (
        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[var(--radius)] p-6 shadow-sm space-y-5">
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-[#E0F7FA] rounded-lg shadow-sm">
                    <HiOutlinePhotograph className="text-[hsl(var(--primary))] text-xl" />
                </div>
                <h3 className="text-lg font-extrabold tracking-tight text-[hsl(var(--foreground))]">
                    Visual Evidence (8 Photos)
                </h3>
            </div>

            {/* Status Labels */}
            <div className="flex items-center justify-between px-1">
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--primary-dark))] opacity-80">
                        Status
                    </p>
                    <p className="text-sm font-bold text-[hsl(var(--primary))]">
                        Inspected & Completed
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-[10px] font-black uppercase tracking-tighter px-2 py-0.5 rounded bg-[#FFF5F7] text-rose-500 border border-rose-100">
                        Before / After Comparison
                    </p>
                </div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div
                        key={i}
                        className="group relative h-32 rounded-xl bg-[hsl(var(--muted))] border border-[hsl(var(--primary)/0.15)] overflow-hidden hover:border-[hsl(var(--primary))] transition-all duration-300 shadow-inner"
                    >
                        {/* Placeholder Icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                            <HiOutlinePhotograph className="text-3xl text-[hsl(var(--primary-dark))]" />
                        </div>

                        {/* After Tag */}
                        <span className="absolute top-2 left-2 rounded-lg bg-white/90 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--primary-dark))] shadow-sm border border-[hsl(var(--primary)/0.1)]">
                            After
                        </span>

                        {/* Gradient Overlay for modern look */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary)/0.05)] to-transparent pointer-events-none" />
                    </div>
                ))}
            </div>

            <p className="text-[11px] text-[hsl(var(--muted-foreground))] italic text-center pt-2">
                * Click on any image to expand and view high-resolution evidence.
            </p>
        </div>
    );
}