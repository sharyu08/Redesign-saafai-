"use client";

import { Users, MapPin, Shield, Activity, LayoutList, Trash2 } from "lucide-react";

export default function AssignmentCards({ items, onDelete }) {
    if (!items || items.length === 0) {
        return (
            <div className="text-center py-20 bg-card rounded-xl border border-border">
                <p className="text-sm font-medium text-muted-foreground">No assignments found for current filters.</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {items.map((item) => (
                <div key={item.id} className="bg-card dark:bg-card border border-border rounded-xl p-4 shadow-sm">
                    <div className="space-y-3">
                        {/* Header: Avatar + Name + Email */}
                        <div className="flex items-start gap-3">
                            <div className="h-10 w-10 rounded-full bg-white dark:bg-card border border-cyan-100 dark:border-border text-[#00838F] dark:text-primary-light flex items-center justify-center font-bold text-xs shadow-sm flex-shrink-0">
                                {item.cleanerName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-medium text-foreground text-wrap-safe mb-1">{item.cleanerName}</p>
                                <p className="text-xs text-muted-foreground text-wrap-safe break-all">{item.cleanerEmail}</p>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="space-y-2 pt-2 border-t border-border">
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                    <MapPin className="w-3 h-3" /> Location
                                </span>
                                <p className="text-sm text-primary-dark dark:text-primary-light font-medium text-right text-wrap-safe">{item.locationName}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                    <Shield className="w-3 h-3" /> Role
                                </span>
                                <span className={`badge-role ${item.role.toLowerCase()}`}>
                                    {item.role}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                    <Activity className="w-3 h-3" /> Status
                                </span>
                                <span className={`badge-status ${item.status === 'Assigned' ? 'assigned' : 'unassigned'}`}>
                                    {item.status}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                    <LayoutList className="w-3 h-3" /> Assigned On
                                </span>
                                <span className="text-sm text-muted-foreground">{item.assignedOn}</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-end pt-2 border-t border-border">
                            <button
                                onClick={() => onDelete(item.id)}
                                className="btn-icon btn-icon-delete"
                                title="Delete Assignment"
                            >
                                <Trash2 size={18} strokeWidth={2} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
