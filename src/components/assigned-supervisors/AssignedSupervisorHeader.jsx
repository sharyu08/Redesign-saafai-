"use client";

import { ArrowLeft, UserPlus, ShieldCheck, MapPin } from "lucide-react";
import Link from "next/link";

export default function AssignedSupervisorHeader() {
    return (
        <div className="page-header">
            <div className="page-header-content">
                {/* Left Section: Navigation & Title */}
                <div className="page-header-title-section">
                    <Link href="/dashboard/washrooms">
                        <button className="btn btn-icon inline-flex h-10 w-10 items-center justify-center active:scale-95">
                            <ArrowLeft className="h-5 w-5" />
                        </button>
                    </Link>

                    <div className="page-header-icon">
                        <ShieldCheck className="h-5 w-5 text-primary-light" />
                    </div>

                    <div className="space-y-0.5">
                        <h1 className="page-header-title text-xl">
                            Assigned Supervisors
                        </h1>
                        <p className="page-header-subtitle ml-0">
                            <MapPin className="h-3.5 w-3.5" />
                            Abhyankar Nagar Garden
                        </p>
                    </div>
                </div>

                {/* Right Section: Capacity Stats & Action */}
                <div className="page-header-actions">
                    <div className="hidden sm:flex flex-col items-end">
                        <span className="text-xs-standard font-black uppercase tracking-widest text-muted-foreground opacity-70">
                            Quota Utilization
                        </span>
                        <div className="flex items-center gap-2 bg-white/60 dark:bg-card/60 px-3 py-1 rounded-lg border border-primary-light/10">
                            <div className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
                            <span className="text-xs-standard font-black text-primary-dark">
                                0 / 0 Assigned
                            </span>
                        </div>
                    </div>

                    <Link href="/dashboard/washrooms/1/supervisors/add">
                        <button className="btn btn-primary flex items-center gap-2 px-6 py-2.5 text-sm-standard font-bold active:scale-95">
                            <UserPlus size={18} />
                            Add Supervisor
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}