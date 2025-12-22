"use client";

import { UserPlus, ShieldAlert } from "lucide-react";

export default function EmptySupervisorState() {
    return (
        <div className="flex justify-center pt-16 pb-20">
            <div className="bg-white border border-[hsl(var(--border))] rounded-[32px] p-12 max-w-md w-full text-center shadow-sm relative overflow-hidden group">

                {/* Decorative background tint */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#F4FBFC] to-transparent opacity-50 pointer-events-none" />

                <div className="relative z-10">
                    {/* Themed Icon with Glow */}
                    <div className="relative w-20 h-20 mx-auto mb-6">
                        <div className="absolute inset-0 bg-[hsl(var(--primary))] opacity-20 blur-2xl rounded-full animate-pulse" />
                        <div className="relative w-20 h-20 rounded-3xl bg-[#E0F7FA] border border-[hsl(var(--primary)/0.2)] flex items-center justify-center shadow-inner">
                            <ShieldAlert className="text-[hsl(var(--primary-dark))]" size={32} />
                        </div>
                    </div>

                    <h3 className="text-xl font-extrabold tracking-tight text-[hsl(var(--primary-dark))] mb-2">
                        No Supervisors Assigned
                    </h3>

                    <p className="text-sm font-medium text-[hsl(var(--muted-foreground))] mb-8 leading-relaxed px-4">
                        This location currently lacks administrative oversight. Assign a supervisor to manage staff activity and audits.
                    </p>

                    <button className="
                        group/btn relative inline-flex items-center justify-center gap-2 
                        px-8 py-3.5 rounded-2xl 
                        bg-[#0D4D4D] text-white text-sm font-bold
                        shadow-[0_10px_20px_rgba(13,77,77,0.2)] 
                        hover:brightness-110 hover:-translate-y-0.5 
                        transition-all duration-300 active:scale-95
                    ">
                        <UserPlus size={18} className="group-hover/btn:scale-110 transition-transform" />
                        Add First Supervisor
                    </button>
                </div>
            </div>
        </div>
    );
}