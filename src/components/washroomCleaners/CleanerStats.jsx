"use client";

import { Users, UserCheck, UserMinus, TrendingUp, TrendingDown } from "lucide-react";

export default function CleanerStats() {
    const stats = { total: 24, assigned: 22, unassigned: 2 };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
                title="Total Cleaners"
                value={stats.total}
                trend="+12%"
                isUp={true}
                percentage={100}
                icon={<Users className="w-6 h-6" />}
                type="slate"
            />
            <StatCard
                title="Assigned Staff"
                value={stats.assigned}
                trend="+5%"
                isUp={true}
                percentage={(stats.assigned / stats.total) * 100}
                icon={<UserCheck className="w-6 h-6" />}
                type="teal"
            />
            <StatCard
                title="Unassigned"
                value={stats.unassigned}
                trend="-2%"
                isUp={false}
                percentage={(stats.unassigned / stats.total) * 100}
                icon={<UserMinus className="w-6 h-6" />}
                type="indigo"
            />
        </div>
    );
}

function StatCard({ title, value, trend, isUp, percentage, icon, type }) {
    const styles = {
        slate: {
            bg: "bg-gradient-to-br from-slate-50 to-slate-100",
            text: "text-slate-900",
            label: "text-slate-500",
            border: "border-slate-200",
            iconBg: "bg-slate-900 text-white",
            bar: "bg-slate-900",
            trend: "bg-slate-200 text-slate-700"
        },
        teal: {
            bg: `bg-gradient-to-br from-white to-[hsl(var(--lavender-200))]`,
            text: "text-[hsl(var(--text-body))]",
            label: "text-[hsl(var(--text-muted))]",
            border: "border-[hsl(var(--border))]",
            iconBg: "bg-[hsl(var(--primary-deep))] text-white",
            bar: "bg-[hsl(var(--primary))]",
            trend: "bg-[hsl(var(--lavender-100))]/50 text-[hsl(var(--text-body))]"
        },
        indigo: {
            bg: `bg-gradient-to-br from-white to-[hsl(var(--lavender-100))]`,
            text: "text-[hsl(var(--text-body))]",
            label: "text-[hsl(var(--text-muted))]",
            border: "border-[hsl(var(--border))]",
            iconBg: "bg-[hsl(var(--primary-dark))] text-white",
            bar: "bg-[hsl(var(--primary-dark))]",
            trend: "bg-[hsl(var(--lavender-100))]/50 text-[hsl(var(--text-body))]"
        }
    };

    const style = styles[type];

    return (
        <div className={`
            relative overflow-hidden p-6 h-full
            ${style.bg} ${style.border} border
            rounded-[24px] shadow-sm 
            transition-all duration-300 hover:shadow-lg hover:-translate-y-1
        `}>
            {/* Glossy Overlay Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 blur-3xl -mr-16 -mt-16 rounded-full pointer-events-none" />

            <div className="flex flex-col justify-between h-full relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-2xl ${style.iconBg} shadow-lg shadow-current/10`}>
                        {icon}
                    </div>

                    <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold ${style.trend}`}>
                        {isUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                        {trend}
                    </div>
                </div>

                <div className="space-y-1">
                    <p className={`text-[11px] font-bold uppercase tracking-[0.1em] ${style.label}`}>
                        {title}
                    </p>
                    <h3 className={`text-4xl font-black tracking-tight ${style.text}`}>
                        {value}
                    </h3>
                </div>

                <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                        <span className={`text-[10px] font-bold uppercase ${style.label}`}>Efficiency</span>
                        <span className={`text-[10px] font-bold ${style.text}`}>{Math.round(percentage)}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/60 rounded-full overflow-hidden border border-black/[0.03]">
                        <div
                            className={`h-full rounded-full transition-all duration-1000 ease-out ${style.bar}`}
                            style={{ width: `${percentage}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}