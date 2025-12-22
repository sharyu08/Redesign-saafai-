"use client";

import { ArrowLeft, UserPlus, ShieldCheck, MapPin } from "lucide-react";
import Link from "next/link";

export default function AssignedSupervisorHeader() {
    return (
        <div className="bg-[#E0F7FA] border border-[hsl(var(--primary)/0.2)] rounded-[var(--radius)] px-6 py-5 flex justify-between items-center shadow-sm">

            {/* Left Section: Navigation & Title */}
            <div className="flex items-center gap-4">
                <Link href="/dashboard/washrooms">
                    <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[hsl(var(--primary)/0.2)] bg-white text-[hsl(var(--primary-dark))] hover:bg-teal-50 transition-all shadow-sm active:scale-95">
                        <ArrowLeft className="h-5 w-5" />
                    </button>
                </Link>

                <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-[hsl(var(--primary-dark))]" />
                        <h1 className="text-xl font-extrabold tracking-tight text-[hsl(var(--primary-dark))]">
                            Assigned Supervisors
                        </h1>
                    </div>
                    <p className="text-sm font-medium text-[hsl(var(--primary)/0.7)] flex items-center gap-1.5 ml-7">
                        <MapPin className="h-3.5 w-3.5" />
                        Abhyankar Nagar Garden
                    </p>
                </div>
            </div>

            {/* Right Section: Capacity Stats & Action */}
            <div className="flex items-center gap-4">
                <div className="hidden sm:flex flex-col items-end">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[hsl(var(--muted-foreground))] opacity-70">
                        Quota Utilization
                    </span>
                    <div className="flex items-center gap-2 bg-white/60 px-3 py-1 rounded-lg border border-[hsl(var(--primary)/0.1)]">
                        <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                        <span className="text-xs font-black text-[hsl(var(--primary-dark))]">
                            0 / 0 Assigned
                        </span>
                    </div>
                </div>

                <Link href="/dashboard/washrooms/1/supervisors/add">
                    <button className="
                        flex items-center gap-2 
                        px-6 py-2.5 
                        rounded-xl bg-[#0D4D4D] 
                        text-white text-sm font-bold 
                        shadow-[0_4px_12px_rgba(13,77,77,0.25)] 
                        hover:brightness-110 transition-all 
                        active:scale-95
                    ">
                        <UserPlus size={18} />
                        Add Supervisor
                    </button>
                </Link>
            </div>
        </div>
    );
}