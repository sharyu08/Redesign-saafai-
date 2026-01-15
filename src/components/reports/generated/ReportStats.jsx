import React from 'react';
import { FileText, CheckCircle2, Clock } from 'lucide-react';

export default function ReportStats({ data }) {
    // Ensure data is an array, fallback to empty array if undefined
    const reportData = Array.isArray(data) ? data : [];

    const stats = [
        { label: "Total Entries", val: reportData.length, color: "#FEF3EB", border: "#FDE0CF", iconColor: "#8E6C1F", Icon: FileText },
        { label: "Validated Tasks", val: reportData.filter(d => d.status === 'Completed').length, color: "#F0FDF4", border: "#DCFCE7", iconColor: "#15803D", Icon: CheckCircle2 },
        { label: "Pending Queue", val: reportData.filter(d => d.status !== 'Completed').length, color: "#F0F9FF", border: "#D1E9FF", iconColor: "#0070AD", Icon: Clock },
    ];

    return (
        <div className="grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
                <div key={i} style={{ backgroundColor: s.color, borderColor: s.border }} className="p-4 rounded-xl border flex items-center gap-4 shadow-sm">
                    <div style={{ color: s.iconColor }} className="p-2 rounded-lg bg-white/50">
                        <s.Icon size={18} />
                    </div>
                    <div>
                        <p style={{ color: s.iconColor }} className="text-[11px] font-semibold uppercase tracking-wider leading-none">{s.label}</p>
                        <h3 className="text-2xl font-bold text-slate-800">{s.val}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}