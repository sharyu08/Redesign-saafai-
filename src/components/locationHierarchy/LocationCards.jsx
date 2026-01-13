"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Navigation2, MapPin, Edit3, Trash2 } from "lucide-react";

export default function LocationCards({ items, onDelete }) {
    const router = useRouter();

    if (!items || items.length === 0) {
        return (
            <div className="text-center py-20 bg-card rounded-xl border border-border">
                <p className="text-sm-standard font-medium text-muted-foreground">No locations found.</p>
            </div>
        );
    }

    const getParentName = (parentId, allItems) => {
        if (!parentId) return "—";
        const parent = allItems.find(loc => loc.id === parentId);
        return parent ? parent.name : "Unknown";
    };

    return (
        <div className="space-y-4">
            {items.map((loc, index) => (
                <div key={loc.id} className="bg-card dark:bg-card border border-border rounded-xl p-4 shadow-sm">
                    <div className="space-y-3">
                        {/* Header: SR NO + Zone Name */}
                        <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2 flex-1 min-w-0">
                                <span className="px-2 py-1 rounded-lg bg-cyan-400/10 text-cyan-600 dark:text-cyan-400 text-xs font-black border border-cyan-500/10 flex-shrink-0">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <h3 className="font-medium text-gray-900 dark:text-gray-100 text-wrap-safe flex-1 min-w-0">
                                    {loc.name}
                                </h3>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="space-y-2 pt-2 border-t border-border">
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-muted-foreground">Parent Hierarchy</span>
                                <div className="inline-flex items-center px-3 py-1 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg text-sm font-medium text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/50 text-wrap-safe">
                                    {getParentName(loc.parent_id, items)}
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between gap-2 pt-2 border-t border-border">
                            <button
                                onClick={() => router.push(`/dashboard/locate?zoneId=${loc.id}`)}
                                title={`Show all locations in ${loc.name}`}
                                className="btn-icon flex items-center gap-2"
                            >
                                <MapPin size={16} strokeWidth={2.5} />
                                <span className="text-xs">Map View</span>
                            </button>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => router.push(`/dashboard/locationHierarchy/edit/${loc.id}`)}
                                    title="Edit Zone Information"
                                    className="btn-icon btn-icon-edit"
                                >
                                    <Edit3 size={16} strokeWidth={2.5} />
                                </button>
                                <button
                                    onClick={() => onDelete(loc.id)}
                                    title="Permanently Delete Zone"
                                    className="btn-icon btn-icon-delete"
                                >
                                    <Trash2 size={16} strokeWidth={2.5} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
