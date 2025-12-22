"use client";

import { Star, User, ShieldCheck } from "lucide-react";

export default function LocationStats({ location }) {
    return (
        <div className="space-y-4">
            {/* Header label for the stats section */}
            <h3 className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--muted-foreground))] flex items-center gap-2 mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
                Key Performance
            </h3>

            <div className="grid grid-cols-2 gap-4">
                {/* 1. RATING CARD */}
                <div className="bg-[#F4FBFC] border border-[hsl(var(--primary)/0.15)] p-4 rounded-xl shadow-sm transition-all hover:shadow-md group">
                    <div className="flex items-center gap-2 mb-1">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <p className="text-[10px] font-bold text-[hsl(var(--muted-foreground))] uppercase tracking-tight">Rating</p>
                    </div>
                    <p className="text-2xl font-extrabold text-[hsl(var(--primary-dark))] tracking-tight">
                        {location.rating || "N/A"}
                        <span className="text-xs font-medium text-[hsl(var(--muted-foreground))] ml-1">/ 5.0</span>
                    </p>
                </div>

                {/* 2. CLEANER CARD */}
                <div className="bg-white border border-[hsl(var(--border))] p-4 rounded-xl shadow-sm transition-all hover:shadow-md group">
                    <div className="flex items-center gap-2 mb-1">
                        <User className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
                        <p className="text-[10px] font-bold text-[hsl(var(--muted-foreground))] uppercase tracking-tight">Main Cleaner</p>
                    </div>
                    <p className={`text-sm font-bold truncate ${location.cleaner ? 'text-[hsl(var(--foreground))]' : 'text-rose-500'}`}>
                        {location.cleaner || "Unassigned"}
                    </p>
                    {location.cleaner && (
                        <div className="mt-1 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            <span className="text-[9px] font-bold text-emerald-600 uppercase">On Duty</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}