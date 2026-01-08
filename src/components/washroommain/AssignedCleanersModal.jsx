"use client";

import { X, User, Phone, ShieldCheck } from "lucide-react";

export default function AssignedCleanersModal({ cleaners, onClose }) {
    if (!cleaners) return null;

    return (
        <div className="form-overlay z-index-100">
            <div className="form-container">
                {/* Header */}
                <div className="form-header">
                    <div className="flex items-center gap-3">
                        <div className="form-icon-button">
                            <ShieldCheck size={18} />
                        </div>
                        <h3 className="form-header-title">
                            Assigned Cleaners
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="form-header-close"
                    >
                        <X size={20} strokeWidth={3} />
                    </button>
                </div>

                {/* Cleaners List */}
                <div className="form-body space-y-3 max-h-[400px] overflow-y-auto">
                    {cleaners.length > 0 ? (
                        cleaners.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-muted border border-border group transition-all">
                                <div className="text-left space-y-1">
                                    <div className="flex items-center gap-2">
                                        <User size={12} className="text-primary-medium" />
                                        <p className="text-sm font-bold text-foreground">
                                            {item.cleaner_user?.name || "Unknown User"}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone size={10} className="text-muted-foreground" />
                                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-tighter">
                                            {item.cleaner_user?.phone || "No Phone"}
                                        </p>
                                    </div>
                                </div>

                                <span className={`badge ${item.status === 'assigned' ? 'badge-status active' : 'badge-status inactive'}`}>
                                    {item.status}
                                </span>
                            </div>
                        ))
                    ) : (
                        <p className="text-center py-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                            No cleaners assigned
                        </p>
                    )}
                </div>

                {/* Footer */}
                <div className="px-6 py-3 bg-muted border-t border-border">
                    <p className="text-[8px] font-black text-muted-foreground uppercase tracking-[0.3em] text-center">
                        Safai Portal Registry
                    </p>
                </div>
            </div>
        </div>
    );
}