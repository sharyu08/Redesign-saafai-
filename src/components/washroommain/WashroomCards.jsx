"use client";

import { Star, MapPin, User, Building2, Activity } from "lucide-react";
import StatusBadge from "./StatusBadge";
import ActionMenu from "./ActionMenu";
import Link from "next/link";

export default function WashroomCards({ items }) {
    const rows = items ?? [];

    if (rows.length === 0) {
        return (
            <div className="text-center py-20 bg-card rounded-xl border border-border">
                <div className="flex flex-col items-center gap-2">
                    <div className="p-3 bg-card rounded-full shadow-sm">
                        <Activity className="w-8 h-8 text-muted-foreground opacity-20" />
                    </div>
                    <p className="text-sm-standard font-medium text-muted-foreground">No washroom records found.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {rows.map((washroom, index) => {
                const assignments = washroom.cleaner_assignments || [];
                const primaryCleaner = assignments.length > 0 ? assignments[0].cleaner_user?.name : "Unassigned";
                const extraCount = assignments.length > 1 ? assignments.length - 1 : 0;

                return (
                    <div key={washroom.id} className="bg-card dark:bg-card border border-border rounded-xl p-4 shadow-sm">
                        <div className="space-y-3">
                            {/* Header: SR NO + Name */}
                            <div className="flex items-start justify-between gap-2">
                                <div className="flex items-center gap-2 flex-1 min-w-0">
                                    <span className="px-2 py-1 rounded-lg bg-cyan-400/10 text-cyan-600 dark:text-cyan-400 text-xs font-black border border-cyan-500/10 flex-shrink-0">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                <Link
                                        href={`/dashboard/washrooms/${washroom.id}`}
                                        className="font-medium text-gray-900 dark:text-gray-100 hover:text-primary-dark dark:hover:text-primary-light transition-colors text-wrap-safe flex-1 min-w-0 washroom-card-name"
                                    >
                                        {washroom.name}
                                    </Link>
                                </div>
                                {washroom.location_types?.name && (
                                    <span className="chip chip-zone text-xs flex-shrink-0">
                                        {washroom.location_types.name}
                                    </span>
                                )}
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div>
                                    <p className="text-xs text-muted-foreground mb-1">Current Score</p>
                                    <div className="px-3 py-1 rounded-lg bg-sky-400/10 border border-sky-500/20 text-sky-700 dark:text-sky-300 font-black text-xs w-fit">
                                        {washroom.current_cleaning_score ?? washroom.average_cleaning_score ?? "-"}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground mb-1">Avg Rating</p>
                                    <div className="rating-display">
                                        <Star className="star w-4 h-4" />
                                        <span className="rating-value">
                                            {washroom.averageRating ? washroom.averageRating.toFixed(1) : "0.0"}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground mb-1">Cleaner</p>
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${assignments.length > 0 ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200 text-wrap-safe">
                                            {primaryCleaner}
                                            {extraCount > 0 && (
                                                <span className="text-blue-600 dark:text-blue-400 ml-1">+{extraCount}</span>
                                            )}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground mb-1">Status</p>
                                    <StatusBadge status={washroom.status ? "active" : "inactive"} />
                                </div>
                                <div className="col-span-2">
                                    <p className="text-xs text-muted-foreground mb-1">Facility</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 text-wrap-safe">
                                        {washroom.facility_companies?.name || "N/A"}
                                    </p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center justify-end gap-2 pt-2 border-t border-border">
                                <ActionMenu washroomId={washroom.id} />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
