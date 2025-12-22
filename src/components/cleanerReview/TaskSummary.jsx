"use client";

import { HiOutlineClipboardList, HiOutlineChatAlt2 } from "react-icons/hi";

export default function TaskSummary() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* TASK DETAILS CARD */}
            <div className="rounded-[var(--radius)] bg-[hsl(var(--card))] border border-[hsl(var(--border))] shadow-sm p-6 transition-all hover:shadow-md">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#E0F7FA] rounded-lg">
                        <HiOutlineClipboardList className="text-[hsl(var(--primary))] text-xl" />
                    </div>
                    <h3 className="font-extrabold tracking-tight text-[hsl(var(--foreground))]">
                        Task Details
                    </h3>
                </div>

                <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--muted-foreground))]">
                        Started:
                    </p>
                    <p className="text-sm font-semibold text-[hsl(var(--foreground))]">
                        13/12/2025, 11:13 am
                    </p>
                </div>
            </div>

            {/* FINAL COMMENT CARD */}
            <div className="rounded-[var(--radius)] bg-[#F4FBFC] border border-[hsl(var(--primary)/0.2)] p-6 transition-all hover:shadow-md">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                        <HiOutlineChatAlt2 className="text-[hsl(var(--primary-dark))] text-xl" />
                    </div>
                    <h3 className="font-extrabold tracking-tight text-[hsl(var(--primary-dark))]">
                        Final Comment
                    </h3>
                </div>

                <div className="bg-white/60 rounded-xl p-3 border border-white/40">
                    <p className="text-sm font-medium text-[hsl(var(--primary-dark))] italic">
                        "mostly clean"
                    </p>
                </div>
            </div>

        </div>
    );
}