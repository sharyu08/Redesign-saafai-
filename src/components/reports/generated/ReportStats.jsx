import React from 'react';
import { FileText, CheckCircle2, Clock } from 'lucide-react';

export default function ReportStats({ data }) {
    const reportData = Array.isArray(data) ? data : [];

    const stats = [
        {
            label: "Total Entries",
            val: reportData.length,
            theme: "amber",
            Icon: FileText
        },
        {
            label: "Validated Tasks",
            val: reportData.filter(d => d.status === 'Completed').length,
            theme: "emerald",
            Icon: CheckCircle2
        },
        {
            label: "Pending Queue",
            val: reportData.filter(d => d.status !== 'Completed').length,
            theme: "indigo",
            Icon: Clock
        },
    ];

    const themeMap = {
        amber: "bg-amber-50 dark:bg-amber-900/10 border-amber-100 dark:border-amber-800/50 text-amber-600 dark:text-amber-400",
        emerald: "bg-emerald-50 dark:bg-emerald-900/10 border-emerald-100 dark:border-emerald-800/50 text-emerald-600 dark:text-emerald-400",
        indigo: "bg-indigo-50 dark:bg-indigo-900/10 border-indigo-100 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400",
    };

    return (
        /* Changed to grid-cols-3 to force three cards per row on all screen sizes */
        <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            {stats.map((s, i) => (
                <div
                    key={i}
                    className={`p-3 md:p-5 rounded-[12px] md:rounded-[20px] border flex flex-col md:flex-row items-center md:items-start lg:items-center gap-2 md:gap-4 transition-all shadow-sm ${themeMap[s.theme]}`}
                >
                    {/* Icon Container: Centered on mobile, start-aligned on desktop */}
                    <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-inherit shrink-0">
                        <s.Icon className="w-3.5 h-3.5 md:w-5 md:h-5" strokeWidth={2.5} />
                    </div>

                    <div className="text-center md:text-left min-w-0">
                        <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.05em] md:tracking-[0.15em] opacity-70 mb-0.5 md:mb-1 truncate">
                            {s.label}
                        </p>
                        <h3 className="text-sm md:text-2xl font-black text-slate-800 dark:text-white leading-none">
                            {s.val}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    );
}