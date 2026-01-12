"use client";

import { Users, UserCheck, UserMinus, TrendingUp, TrendingDown } from "lucide-react";

export default function CleanerStats() {
    const stats = { total: 24, assigned: 22, unassigned: 2 };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard
                title="Total Cleaners"
                value={stats.total}
                trend="+12%"
                isUp={true}
                percentage={100}
                icon={<Users className="w-4 h-4" />}
                type="slate"
            />
            <StatCard
                title="Assigned Staff"
                value={stats.assigned}
                trend="+5%"
                isUp={true}
                percentage={(stats.assigned / stats.total) * 100}
                icon={<UserCheck className="w-4 h-4" />}
                type="teal"
            />
            <StatCard
                title="Unassigned"
                value={stats.unassigned}
                trend="-2%"
                isUp={false}
                percentage={(stats.unassigned / stats.total) * 100}
                icon={<UserMinus className="w-4 h-4" />}
                type="indigo"
            />
        </div>
    );
}

function StatCard({ title, value, trend, isUp, percentage, icon, type }) {
    const styles = {
        slate: {
            bg: "bg-white dark:bg-slate-900",
            text: "text-slate-900 dark:text-white",
            label: "text-slate-400",
            border: "border-slate-100 dark:border-slate-800",
            iconBg: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300",
            bar: "bg-slate-600",
            trend: "bg-slate-50 text-slate-600"
        },
        teal: {
            bg: "bg-white dark:bg-slate-900",
            text: "text-slate-900 dark:text-white",
            label: "text-slate-400",
            border: "border-slate-100 dark:border-slate-800",
            iconBg: "bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
            bar: "bg-cyan-500",
            trend: "bg-emerald-50 text-emerald-600"
        },
        indigo: {
            bg: "bg-white dark:bg-slate-900",
            text: "text-slate-900 dark:text-white",
            label: "text-slate-400",
            border: "border-slate-100 dark:border-slate-800",
            iconBg: "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
            bar: "bg-indigo-500",
            trend: "bg-rose-50 text-rose-600"
        }
    };

    const style = styles[type];

    return (
        <div className={`
            relative overflow-hidden p-4 h-full
            ${style.bg} ${style.border} border
            rounded-2xl shadow-sm 
            transition-all duration-300 hover:shadow-md
        `}>
            <div className="flex flex-col justify-between h-full relative z-10">
                <div className="flex justify-between items-center mb-3">
                    {/* Smaller Icon Container */}
                    <div className={`p-2 rounded-xl ${style.iconBg}`}>
                        {icon}
                    </div>

                    {/* Compact Trend Badge */}
                    <div className={`flex items-center gap-1 px-2 py-0.5 rounded-lg text-[9px] font-bold uppercase tracking-tight ${style.trend}`}>
                        {isUp ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                        {trend}
                    </div>
                </div>

                <div className="space-y-0.5">
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                        {title}
                    </p>
                    {/* Reduced value size from 4xl to 2xl */}
                    <h3 className={`text-2xl font-black tracking-tight ${style.text}`}>
                        {value}
                    </h3>
                </div>

                <div className="mt-4">
                    <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Cap. Utilization</span>
                        <span className={`text-[9px] font-black ${style.text}`}>{Math.round(percentage)}%</span>
                    </div>
                    {/* Thinner progress bar */}
                    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
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