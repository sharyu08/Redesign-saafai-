"use client";

import Link from "next/link";
import { MapPin, Clock, ArrowRight, User } from "lucide-react";

export default function ActivityCard({ activity }) {
    return (
        <div className="
            flex flex-col justify-between 
            rounded-[24px] bg-white 
            border border-[hsl(var(--border))] 
            shadow-sm hover:shadow-md hover:-translate-y-1
            p-5 h-[360px] transition-all duration-300 group
        ">
            {/* Header: Cleaner Info & Status */}
            <div className="space-y-3">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-[#E0F7FA] border border-[hsl(var(--primary)/0.2)] flex items-center justify-center">
                            <User className="h-5 w-5 text-[hsl(var(--primary))]" />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-[hsl(var(--primary-dark))] leading-none mb-1">
                                {activity.cleanerName}
                            </h3>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[hsl(var(--muted-foreground))] opacity-70">
                                Staff Member
                            </span>
                        </div>
                    </div>
                    <span className="rounded-lg bg-emerald-50 border border-emerald-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-600">
                        Completed
                    </span>
                </div>

                {/* Proof Images Stack */}
                <div className="py-2">
                    <p className="text-[10px] font-bold text-[hsl(var(--muted-foreground))] uppercase tracking-tight mb-3">
                        Evidence Logs ({activity.images.length})
                    </p>
                    <div className="flex items-center -space-x-3">
                        {activity.images.slice(0, 4).map((img, i) => (
                            <div
                                key={i}
                                className="h-12 w-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm"
                            >
                                {/* In production replace with <img src={img} /> */}
                                <div className="w-full h-full bg-slate-300 animate-pulse" />
                            </div>
                        ))}

                        {activity.images.length > 4 && (
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-[hsl(var(--primary-dark))] text-[11px] font-bold text-white shadow-sm z-10">
                                +{activity.images.length - 4}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Location & Metadata Section */}
            <div className="bg-[#F4FBFC] rounded-2xl p-4 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[hsl(var(--primary-dark))]">
                    <MapPin className="h-3.5 w-3.5 text-[hsl(var(--primary))]" />
                    <span className="truncate">{activity.location}</span>
                </div>

                <div className="flex flex-col gap-1.5 pl-5 border-l-2 border-[hsl(var(--primary)/0.1)]">
                    <div className="flex items-center gap-2 text-[11px] text-[hsl(var(--muted-foreground))]">
                        <Clock className="h-3 w-3" />
                        <span>Finished: {activity.finishedAt}</span>
                    </div>
                    <p className="text-[11px] font-bold text-emerald-600 uppercase tracking-tight">
                        Duration: 1m
                    </p>
                </div>
            </div>

            {/* Footer Action */}
            <div className="pt-2">
                <Link
                    href={`/dashboard/cleaner-activity/${activity.id}`}
                    className="
                        flex items-center justify-center gap-2 
                        w-full py-2.5 rounded-xl
                        bg-white border border-[hsl(var(--border))]
                        text-xs font-bold text-[hsl(var(--primary-dark))]
                        hover:bg-[hsl(var(--primary))] hover:text-white hover:border-[hsl(var(--primary))]
                        transition-all duration-200 group-hover:shadow-indigo-100
                    "
                >
                    Detailed Report
                    <ArrowRight className="h-3.5 w-3.5" />
                </Link>
            </div>
        </div>
    );
}