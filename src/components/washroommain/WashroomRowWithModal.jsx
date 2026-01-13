"use client";

import { useState } from "react";
import StatusBadge from "./StatusBadge";
import ActionMenu from "./ActionMenu";
import Link from "next/link";
import { MapPin, Star, ChevronRight } from "lucide-react";
import AssignedCleanersModal from "./AssignedCleanersModal";

export default function WashroomRowWithModal({ washroom, index, onModalOpen }) {
    if (!washroom) return null;

    const mapUrl = washroom.latitude && washroom.longitude
        ? `https://www.google.com/maps?q=${washroom.latitude},${washroom.longitude}`
        : "#";

    const assignments = washroom.cleaner_assignments || [];
    const primaryCleaner = assignments.length > 0 ? assignments[0].cleaner_user?.name : "Unassigned";
    const extraCount = assignments.length > 1 ? assignments.length - 1 : 0;

    return (
        <tr className="group border-b border-slate-50 dark:border-slate-800/30 hover:bg-cyan-400/5 transition-all duration-300">
            {/* SR NO - Faint Light Cyan */}
            <td className="py-4 px-4 font-mono">
                <span className="px-2 py-1 rounded-lg bg-cyan-400/10 text-cyan-600 text-xs font-black border border-cyan-500/10">
                    {String(index + 1).padStart(2, '0')}
                </span>
            </td>

            {/* NAME - Clean & Subtle */}
            <td className="py-4 px-4">
                <Link
                    href={`/dashboard/washrooms/${washroom.id}`}
                    className="font-medium text-gray-900 dark:text-gray-100 hover:text-primary-dark dark:hover:text-primary-light transition-colors"
                >
                    {washroom.name}
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-cyan-500" />
                </Link>
            </td>

            <td className="table-cell">
                {washroom.location_types?.name ? (
                    <span className="chip chip-zone">
                        {washroom.location_types.name}
                    </span>
                ) : (
                    <span className="text-muted-foreground">N/A</span>
                )}
            </td>

            {/* CURRENT SCORE - Light Transparent Sky Blue */}
            <td className="py-4 px-4">
                <div className="px-4 py-1.5 rounded-2xl bg-sky-400/10 border border-sky-500/20 text-sky-700 dark:text-sky-300 font-black text-xs w-fit shadow-sm backdrop-blur-sm">
                    {washroom.current_cleaning_score ?? washroom.average_cleaning_score ?? "-"}
                </div>
            </td>

            <td className="table-cell">
                <div className="rating-display">
                    <Star className="star w-4 h-4" />
                    <span className="rating-value">
                        {washroom.averageRating ? washroom.averageRating.toFixed(1) : "0.0"}
                    </span>
                </div>
            </td>

            {/* UPDATED CLEANER COLUMN */}
            <td className="table-cell">
                <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${assignments.length > 0 ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{primaryCleaner}</span>

                    {extraCount > 0 && (
                        <button
                            onClick={onModalOpen}
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors ml-1 text-sm font-medium"
                        >
                            +{extraCount}
                        </button>
                    )}
                </div>
            </td>

            <td className="table-cell">
                <span className="text-gray-600 dark:text-gray-400">
                    {washroom.facility_companies?.name || "N/A"}
                </span>
            </td>

            {/* STATUS - Green/Red Logic inside StatusBadge */}
            <td className="py-4 px-4">
                <StatusBadge status={washroom.status ? "active" : "inactive"} />
            </td>

            {/* ACTIONS - Light Glass Style */}
            <td className="py-4 px-4 text-right">
                <div className="flex items-center justify-end gap-2">
                    <a
                        href={mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-400/5 hover:bg-cyan-400/10 text-slate-400 hover:text-cyan-500 transition-all border border-slate-500/5"
                    >
                        <MapPin className="w-4 h-4" />
                    </a>
                    <ActionMenu washroomId={washroom.id} />
                </div>
            </td>
        </tr>
    );
}

// Modal component to be rendered outside table
export function WashroomRowModal({ washroom, isModalOpen, setIsModalOpen }) {
    if (!washroom) return null;

    const assignments = washroom.cleaner_assignments || [];

    return (
        <>
            {isModalOpen && (
                <AssignedCleanersModal
                    cleaners={assignments}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </>
    );
}
