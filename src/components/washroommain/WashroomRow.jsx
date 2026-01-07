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
                        className="text-primary-dark hover:text-primary transition-colors"
                    >
                        {washroom.name}
                    </Link>
                </td>

                <td className="table-cell">
                    {washroom.location_types?.name || "N/A"}
                </td>

                <td className="table-cell">
                    <span className="badge-score">
                        {washroom.current_cleaning_score ?? washroom.average_cleaning_score ?? "-"}
                    </span>
                </td>

                <td className="table-cell">
                    <div className="flex items-center gap-1.5 text-accent-gold">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{washroom.averageRating ? washroom.averageRating.toFixed(1) : "0.0"}</span>
                    </div>
                </td>

                {/* UPDATED CLEANER COLUMN */}
                <td className="table-cell">
                    <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${assignments.length > 0 ? 'bg-accent-green' : 'bg-muted-foreground'}`}></div>
                        <span className="text-primary-dark">{primaryCleaner}</span>

                        {extraCount > 0 && (
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="text-accent-blue hover:text-primary-dark transition-colors ml-1"
                            >
                                +{extraCount} more
                            </button>
                        )}
                    </div>
                </td>

                <td className="table-cell text-muted-foreground">
                    {washroom.facility_companies?.name || "N/A"}
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