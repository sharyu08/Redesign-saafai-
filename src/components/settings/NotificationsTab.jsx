"use client";

import { useState } from "react";
import { Bell, ShieldCheck, Mail, Smartphone, AlertTriangle } from "lucide-react";

// Standardized Toggle Option Component for the Tab
const ToggleOption = ({ label, description, active, icon: Icon }) => (
    <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-800/20 border border-slate-100 dark:border-slate-800 transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm group">
        <div className="flex gap-4">
            <div className="h-10 w-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-sm group-hover:scale-110 transition-transform">
                <Icon size={18} strokeWidth={2.5} />
            </div>
            <div className="text-left">
                <h3 className="text-[13px] font-black text-slate-800 dark:text-slate-100 uppercase tracking-tight">
                    {label}
                </h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 opacity-70">
                    {description}
                </p>
            </div>
        </div>

        {/* Standardized Toggle Switch using theme colors */}
        <button className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${active ? 'bg-cyan-500' : 'bg-slate-200 dark:bg-slate-700'}`}>
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${active ? 'translate-x-6' : 'translate-x-1'}`} />
        </button>
    </div>
);

export default function NotificationsTab({ onNotify }) {
    const [loading, setLoading] = useState(false);

    const handleSave = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            onNotify("Notification preferences updated!");
        }, 1000);
    };

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Header Section synced with page architecture */}
            <div className="flex items-center gap-3 mb-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="h-10 w-10 rounded-xl bg-cyan-400/10 flex items-center justify-center border border-cyan-500/10 shadow-sm">
                    <Bell className="text-cyan-600 dark:text-cyan-400" size={20} strokeWidth={2.5} />
                </div>
                <div className="text-left">
                    <h2 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-[0.2em] leading-none">
                        Alert Preferences
                    </h2>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 opacity-70">
                        Operational Intelligence Feed Configuration
                    </p>
                </div>
            </div>

            {/* Notification Options Grid */}
            <div className="grid gap-4">
                <ToggleOption
                    icon={Mail}
                    label="Email Activity Summaries"
                    description="Daily reports of zone-specific cleaning analytics"
                    active
                />
                <ToggleOption
                    icon={Smartphone}
                    label="Real-time Push Alerts"
                    description="Instant mobile notification upon task finalization"
                />
                <ToggleOption
                    icon={AlertTriangle}
                    label="High-Priority Reminders"
                    description="Critical alerts for unmaintained facility zones"
                    active
                />
                <ToggleOption
                    icon={ShieldCheck}
                    label="System Maintenance Data"
                    description="Portal updates and registry maintenance schedules"
                />
            </div>

            {/* Action Footer using .btn-primary orange gradient */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <button
                    onClick={handleSave}
                    disabled={loading}
                    className="btn-primary flex items-center justify-center gap-3 px-10 py-3.5 rounded-xl text-sm font-black uppercase tracking-[0.15em] shadow-xl shadow-orange-500/20 active:scale-95 transition-all w-full md:w-auto"
                >
                    {loading ? (
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Updating Prefs...</span>
                        </div>
                    ) : (
                        "Commit Notification Settings"
                    )}
                </button>
            </div>
        </div>
    );
}