"use client";

import { useState } from "react";
import StatusBadge from "./StatusBadge";
import ActionMenu from "./ActionMenu";
import Link from "next/link";
import { MapPin, Star, User } from "lucide-react";
import AssignedCleanersModal from "./AssignedCleanersModal"; // You'll create this component below

export default function WashroomRow({ washroom, index }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!washroom) return null;

    const mapUrl = washroom.latitude && washroom.longitude
        ? `https://www.google.com/maps?q=${washroom.latitude},${washroom.longitude}`
        : "#";

    // Data Mapping logic for Cleaners
    const assignments = washroom.cleaner_assignments || [];
    const primaryCleaner = assignments.length > 0 ? assignments[0].cleaner_user?.name : "Unassigned";
    const extraCount = assignments.length > 1 ? assignments.length - 1 : 0;

    return (
        <>
            <tr className="table-row group">
                <td className="table-cell table-cell-center">
                    {String(index + 1).padStart(2, '0')}
                </td>

                <td className="table-cell">
                    <Link
                        href={`/dashboard/washrooms/${washroom.id}`}
                        className="font-medium text-gray-900 dark:text-gray-100 hover:text-primary-dark dark:hover:text-primary-light transition-colors"
                    >
                        {washroom.name}
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

                <td className="table-cell">
                    <span className="badge-score">
                        {washroom.current_cleaning_score ?? washroom.average_cleaning_score ?? "-"}
                    </span>
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
                                onClick={() => setIsModalOpen(true)}
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors ml-1 text-sm font-medium"
                            >
                                +{extraCount} more
                            </button>
                        )}
                    </div>
                </td>

                <td className="table-cell">
                    <span className="text-gray-600 dark:text-gray-400">
                        {washroom.facility_companies?.name || "N/A"}
                    </span>
                </td>

                <td className="table-cell">
                    <StatusBadge status={washroom.status ? "active" : "inactive"} />
                </td>

                <td className="table-cell table-cell-right">
                    <div className="flex items-center justify-end gap-2">
                        <a
                            href={mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-icon active:scale-95"
                        >
                            <MapPin className="w-4 h-4" />
                        </a>
                        <ActionMenu washroomId={washroom.id} />
                    </div>
                </td>
            </tr>

            {/* Modal for viewing all cleaners */}
            {isModalOpen && (
                <AssignedCleanersModal
                    cleaners={assignments}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </>
    );
}