"use client";

import { Eye, Trash2, Phone, User, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CleanerCard({ cleaner }) {
    const router = useRouter();

    const handleView = () => {
        router.push("/dashboard/cleaner-activity");
    };

    return (
        <div className="
            bg-white 
            border border-[hsl(var(--border))] 
            rounded-[var(--radius)] 
            p-5 
            shadow-sm 
            hover:shadow-md 
            hover:border-[hsl(var(--primary)/0.3)]
            transition-all duration-300 
            flex justify-between items-center
            group
        ">
            {/* Left Section: Avatar and Info */}
            <div className="flex items-center gap-4">
                {/* Themed Avatar */}
                <div className="w-14 h-14 rounded-full bg-[hsl(var(--lavender-100))] border border-[hsl(var(--primary)/0.2)] flex items-center justify-center transition-transform group-hover:scale-105">
                    <User className="text-[hsl(var(--primary))] w-7 h-7" />
                </div>

                <div className="space-y-1">
                    <h3 className="text-lg font-extrabold tracking-tight text-[hsl(var(--primary-dark))]">
                        {cleaner.name}
                    </h3>
                    <p className="text-xs font-bold text-[hsl(var(--muted-foreground))] flex items-center gap-1.5">
                        <Phone size={14} className="text-[hsl(var(--primary))]" />
                        <span className="tracking-wider">{cleaner.phone}</span>
                    </p>
                </div>
            </div>

            {/* Right Section: Date and Actions */}
            <div className="text-right space-y-3">
                <div className="flex items-center justify-end gap-1.5 text-[10px] font-black uppercase tracking-widest text-[hsl(var(--muted-foreground))] opacity-70">
                    <Calendar size={12} />
                    {cleaner.date}
                </div>

                <div className="flex gap-2 justify-end">
                    {/* View Details Button */}
                    <button
                        type="button"
                        onClick={handleView}
                        className="
                            flex items-center gap-2 px-4 py-1.5 
                            rounded-xl bg-[hsl(var(--primary))] 
                            text-white text-xs font-bold 
                            shadow-[0_4px_12px_rgba(45,183,196,0.3)] 
                            hover:brightness-110 transition-all 
                            active:scale-95
                        "
                    >
                        <Eye size={14} /> View Activity
                    </button>

                    {/* Delete Button */}
                    <button
                        type="button"
                        className="
                            p-2 rounded-xl 
                            bg-white border border-rose-100 
                            text-rose-500 
                            hover:bg-rose-50 hover:text-rose-600 
                            transition-all active:scale-95
                        "
                        title="Remove Cleaner"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}