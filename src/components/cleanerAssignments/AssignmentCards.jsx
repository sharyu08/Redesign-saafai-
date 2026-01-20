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
                            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-lg flex-shrink-0 border-2 border-white dark:border-card">
                                {item.cleanerName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-bold text-lg bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent text-wrap-safe mb-1">{item.cleanerName}</p>
                                <p className="text-sm text-muted-foreground text-wrap-safe break-all">{item.cleanerEmail}</p>
                            </div>
                        </div>

                        {/* Location - Highlighted */}
                        <div className="flex items-center justify-end gap-2">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-full px-3 py-1.5 border border-red-200 dark:border-red-800">
                                <p className="font-bold text-sm text-red-900 dark:text-red-100 text-wrap-safe">{item.locationName}</p>
                                <div className="h-6 w-6 rounded-full bg-red-500 dark:bg-red-600 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-3 h-3 text-white" strokeWidth={2.5} />
                                </div>
                            </div>
                        </div>

                        {/* Other Details */}
                        <div className="space-y-2 pt-2 border-t border-border">
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
