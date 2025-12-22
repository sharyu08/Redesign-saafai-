"use client";

import { ArrowLeft, UserPlus, Users } from "lucide-react";
import Link from "next/link";

export default function CleanerHeader() {
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
                    <h1 className="text-xl font-extrabold tracking-tight text-[hsl(var(--primary-dark))]">
                        Assigned Cleaners
                    </h1>
                    <p className="text-sm font-medium text-[hsl(var(--primary)/0.7)] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))]"></span>
                        Abhyankar Nagar Garden
                    </p>
                </div>
            </div>

            {/* Right Section: Stats & Action */}
            <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-2 bg-white/50 px-4 py-2 rounded-xl border border-[hsl(var(--primary)/0.1)]">
                    <Users className="h-4 w-4 text-[hsl(var(--primary))]" />
                    <span className="text-xs font-black text-[hsl(var(--primary-dark))] uppercase tracking-widest">
                        Staffing: 2 / 2
                    </span>
                </div>

                <Link href="/dashboard/washrooms/1/cleaners/add">
                    <button className="
                        flex items-center gap-2 
                        px-6 py-2.5 
                        rounded-xl bg-[hsl(var(--primary))] 
                        text-white text-sm font-bold 
                        shadow-[0_4px_12px_rgba(45,183,196,0.3)] 
                        hover:brightness-110 transition-all 
                        active:scale-95
                    ">
                        <UserPlus size={18} />
                        Add Cleaner
                    </button>
                </Link>
            </div>
        </div>
    );
}