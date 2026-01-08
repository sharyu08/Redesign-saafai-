"use client";

import { X, User, Phone, ShieldCheck } from "lucide-react";

export default function AssignedCleanersModal({ cleaners, onClose }) {
    if (!cleaners) return null;

    return (
        <div className="form-overlay z-index-100">
            <div className="form-container">

                {/* Header synced with .form-header tokens */}
                <div className="form-header">
                    <div className="flex items-center gap-3">
                        <div className="form-icon-button">
                            <ShieldCheck size={18} className="text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <div className="text-left">
                            <h3 className="form-header-title">
                                Assigned Cleaners
                            </h3>
                            <p className="form-header-subtitle">
                                Personnel Registry
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="form-header-close"
                        aria-label="Close modal"
                    >
                        <X size={20} strokeWidth={3} />
                    </button>
                </div>

                {/* Body Content using .form-body and standardized text styles */}
                <div className="form-body space-y-3 max-h-[400px] overflow-y-auto scrollbar-hide">
                    {cleaners.length > 0 ? (
                        cleaners.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-800/20 border border-slate-100 dark:border-slate-800 group transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm"
                            >
                                <div className="text-left space-y-1">
                                    <div className="flex items-center gap-2">
                                        <User size={14} className="text-cyan-600 dark:text-cyan-400" />
                                        <p className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-tight">
                                            {item.cleaner_user?.name || "Unknown User"}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone size={10} className="text-slate-400" />
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                            {item.cleaner_user?.phone || "No Phone Registry"}
                                        </p>
                                    </div>
                                </div>

                                {/* Standard badge components from global.css */}
                                <span className={`badge-status uppercase text-[9px] font-black tracking-widest ${item.status === 'assigned' ? 'active' : 'inactive'
                                    }`}>
                                    {item.status}
                                </span>
                            </div>
                        ))
                    ) : (
                        <div className="py-10 text-center">
                            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
                                No Personnel Assigned
                            </p>
                        </div>
                    )}
                </div>

                {/* Footer synchronized with faint metadata styles */}
                <div className="px-6 py-4 bg-slate-50/50 dark:bg-slate-800/10 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-[8px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em] text-center">
                        NMC Municipal Safai Portal • v1.0
                    </p>
                </div>
            </div>
        </div>
    );
}