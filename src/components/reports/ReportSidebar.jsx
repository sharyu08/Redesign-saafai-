"use client";
import React from 'react';
import { Filter, Check, ChevronRight } from 'lucide-react';

export default function ReportSidebar({ reportConfigs, selectedReport, setSelectedReport }) {
    return (
        <div className="card-global bg-white dark:bg-card border-slate-200">
            <div className="flex items-center gap-2 mb-4 px-2">
                <Filter size={16} className="text-slate-400" />
                <h2 className="text-[11px] font-black text-slate-400 dark:text-muted-foreground uppercase tracking-widest">
                    Report Modules
                </h2>
            </div>
            <div className="space-y-1.5">
                {Object.keys(reportConfigs).map((report) => (
                    <button
                        key={report}
                        onClick={() => setSelectedReport(report)}
                        className={`w-full group px-4 py-4 rounded-xl border transition-all flex items-center justify-between outline-none active:scale-[0.98] ${selectedReport === report
                                ? "bg-emerald-100 dark:bg-emerald-900/40 border-emerald-500/40 text-emerald-700 dark:text-emerald-400 shadow-sm"
                                : "bg-transparent border-transparent text-slate-500 dark:text-muted-foreground hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-100 dark:hover:bg-emerald-900/20"
                            }`}
                    >
                        <span className="text-[12px] font-bold tracking-tight">{report}</span>
                        <div className={`transition-colors ${selectedReport === report ? "text-emerald-600" : "text-slate-300 group-hover:text-emerald-400"}`}>
                            {selectedReport === report ? <Check size={16} strokeWidth={3} /> : <ChevronRight size={14} strokeWidth={2.5} />}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}