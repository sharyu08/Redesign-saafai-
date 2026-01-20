"use client";

import { Star, MapPin, User, Building2, Activity } from "lucide-react";
import StatusBadge from "./StatusBadge";
import ActionMenu from "./ActionMenu";
import Link from "next/link";

export default function WashroomCards({ items }) {
    const rows = items ?? [];

    if (rows.length === 0) {
        return (
            <div className="text-center py-8 sm:py-12 lg:py-16 bg-card rounded-xl border border-border">
                <div className="flex flex-col items-center gap-2">
                    <div className="p-1.5 sm:p-2 lg:p-3 bg-card rounded-full shadow-sm">
                        <Activity className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-muted-foreground opacity-20" />
                    </div>
                    <p className="text-[10px] sm:text-xs lg:text-sm-standard font-medium text-muted-foreground">No washroom records found.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-2 sm:space-y-3 lg:space-y-4">
            {rows.map((washroom, index) => {
                const assignments = washroom.cleaner_assignments || [];
                const primaryCleaner = assignments.length > 0 ? assignments[0].cleaner_user?.name : "Unassigned";
                const extraCount = assignments.length > 1 ? assignments.length - 1 : 0;

                return (
                    <div key={washroom.id} className="bg-card dark:bg-card border border-border rounded-md sm:rounded-lg lg:rounded-xl p-2 sm:p-3 lg:p-4 shadow-sm">
                        <div className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                            {/* Header: SR NO + Name */}
                            <div className="flex items-start justify-between gap-1.5 sm:gap-2">
                                <div className="flex items-center gap-1.5 sm:gap-2 flex-1 min-w-0">
                                    <span className="px-1 sm:px-1.5 lg:px-2 py-0.5 sm:py-1 rounded-lg bg-cyan-400/10 text-cyan-600 dark:text-cyan-400 text-[8px] sm:text-[10px] font-black border border-cyan-500/10 flex-shrink-0">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <Link
                                        href={`/dashboard/washrooms/${washroom.id}`}
                                        className="font-medium text-xs sm:text-sm lg:text-base text-gray-900 dark:text-gray-100 hover:text-primary-dark dark:hover:text-primary-light transition-colors text-wrap-safe flex-1 min-w-0 washroom-card-name"
                                    >
                                        {washroom.name}
                                    </Link>
                                </div>
                                {washroom.location_types?.name && (
                                    <span className="chip chip-zone text-[8px] sm:text-[10px] flex-shrink-0">
                                        {washroom.location_types.name}
                                    </span>
                                )}
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-2 sm:gap-2 lg:gap-3 text-[10px] sm:text-xs lg:text-sm">
                                <div>
                                    <p className="text-[8px] sm:text-[10px] text-muted-foreground mb-0.5 sm:mb-1">Current Score</p>
                                    <div className="px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1 rounded-lg bg-sky-400/10 border border-sky-500/20 text-sky-700 dark:text-sky-300 font-black text-[8px] sm:text-[10px] w-fit">
                                        {washroom.current_cleaning_score ?? washroom.average_cleaning_score ?? "-"}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[8px] sm:text-[10px] text-muted-foreground mb-0.5 sm:mb-1">Avg Rating</p>
                                    <div className="rating-display">
                                        <Star className="star w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4" />
                                        <span className="rating-value text-[10px] sm:text-xs lg:text-sm">
                                            {washroom.averageRating ? washroom.averageRating.toFixed(1) : "0.0"}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[8px] sm:text-[10px] text-muted-foreground mb-0.5 sm:mb-1">Cleaner</p>
                                    <div className="flex items-center gap-1 sm:gap-1.5 lg:gap-2">
                                        <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 rounded-full ${assignments.length > 0 ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                                        <p className="text-[10px] sm:text-xs lg:text-sm font-medium text-gray-800 dark:text-gray-200 text-wrap-safe">
                                            {primaryCleaner}
                                            {extraCount > 0 && (
                                                <span className="text-blue-600 dark:text-blue-400 ml-0.5 sm:ml-1">+{extraCount}</span>
                                            )}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[8px] sm:text-[10px] text-muted-foreground mb-0.5 sm:mb-1">Status</p>
                                    <StatusBadge status={washroom.status ? "active" : "inactive"} />
                                </div>
                                <div className="col-span-2">
                                    <p className="text-[8px] sm:text-[10px] text-muted-foreground mb-0.5 sm:mb-1">Facility</p>
                                    <p className="text-[10px] sm:text-xs lg:text-sm text-gray-600 dark:text-gray-400 text-wrap-safe">
                                        {washroom.facility_companies?.name || "N/A"}
                                    </p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center justify-end gap-1 sm:gap-1.5 lg:gap-2 pt-1.5 sm:pt-2 border-t border-border">
                                <ActionMenu washroomId={washroom.id} />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
