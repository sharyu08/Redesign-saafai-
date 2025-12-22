"use client";

import { ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

export default function SupervisorStats() {
    return (
        <div className="flex gap-4 flex-wrap pb-2">
            <Stat
                label="Total Supervisors"
                value="0"
                icon={<ShieldCheck size={14} />}
                type="teal"
            />
            <Stat
                label="Pending Assignments"
                value="0"
                icon={<Clock size={14} />}
                type="amber"
            />
        </div>
    );
}

function Stat({ label, value, icon, type }) {
    const styles = {
        teal: {
            bg: "bg-[#E0F7FA]",
            text: "text-[#0D4D4D]",
            border: "border-teal-100",
            iconBg: "bg-white",
            iconColor: "text-teal-600"
        },
        amber: {
            bg: "bg-amber-50",
            text: "text-amber-700",
            border: "border-amber-100",
            iconBg: "bg-white",
            iconColor: "text-amber-500"
        },
    };

    const style = styles[type];

    return (
        <div className={`
            ${style.bg} ${style.border} border 
            rounded-2xl px-4 py-2.5 
            shadow-sm flex items-center gap-3 
            transition-all hover:shadow-md
        `}>
            {/* Branded Value Pill */}
            <div className={`
                flex items-center gap-2 px-3 py-1 rounded-xl 
                ${style.iconBg} border border-black/[0.03] shadow-sm
            `}>
                <span className={`${style.iconColor}`}>{icon}</span>
                <span className={`text-sm font-black ${style.text}`}>
                    {value}
                </span>
            </div>

            {/* Label */}
            <span className={`text-xs font-bold uppercase tracking-wider opacity-80 ${style.text}`}>
                {label}
            </span>
        </div>
    );
}