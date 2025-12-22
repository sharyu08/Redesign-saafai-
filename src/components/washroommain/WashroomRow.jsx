"use client";

import StatusBadge from "./StatusBadge";
import ActionMenu from "./ActionMenu";
import RatingPopover from "./RatingPopover";
import Link from "next/link";
import { MapPin } from "lucide-react";

export default function WashroomRow({ washroom, index }) {
    if (!washroom) return null;

    // Construct the Google Maps URL or your internal dashboard map link
    // Assuming washroom object has lat and lng properties
    const mapUrl = washroom.lat && washroom.lng
        ? `https://www.google.com/maps?q=${washroom.lat},${washroom.lng}`
        : "#";

    return (
        <tr className="border-b border-[hsl(var(--border))] hover:bg-[#F4FBFC] transition-colors group">
            {/* Index with subtle styling */}
            <td className="p-4 text-center text-xs font-bold text-[hsl(var(--muted-foreground))]">
                {String(index + 1).padStart(2, '0')}
            </td>

            {/* Name with Teal Primary Dark color */}
            <td className="p-4 font-bold">
                <Link
                    href={`/dashboard/washrooms/${washroom.id}`}
                    className="text-[hsl(var(--primary-dark))] hover:text-[hsl(var(--primary))] transition-colors"
                >
                    {washroom.name}
                </Link>
            </td>

            {/* Zone Information */}
            <td className="p-4 text-sm font-medium text-[hsl(var(--foreground))]">
                {washroom.zone}
            </td>

            {/* Score with Light Cyan Background */}
            <td className="p-4">
                <span className="px-3 py-1 bg-[#E0F7FA] text-[hsl(var(--primary-dark))] rounded-lg text-xs font-extrabold border border-[hsl(var(--primary)/0.1)] shadow-sm">
                    {washroom.score ?? "-"}
                </span>
            </td>

            {/* Rating Popover */}
            <td className="p-4">
                <RatingPopover rating={washroom.rating} />
            </td>

            {/* Cleaner Info */}
            <td className="p-4 text-sm font-semibold text-[hsl(var(--foreground))]">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    {washroom.cleaner}
                </div>
            </td>

            {/* Facility Company */}
            <td className="p-4 text-sm text-[hsl(var(--muted-foreground))]">
                {washroom.facility}
            </td>

            {/* Status Badge */}
            <td className="p-4">
                <StatusBadge status={washroom.status} />
            </td>

            {/* Actions: Locate on Map + Action Menu */}
            <td className="p-4 text-right">
                <div className="flex items-center justify-end gap-2">
                    {/* LOCATE ON MAP ICON */}
                    <a
                        href={mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white border border-[hsl(var(--border))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white transition-all shadow-sm active:scale-95 group-hover:border-[hsl(var(--primary)/0.3)]"
                        title="Locate on Map"
                    >
                        <MapPin className="w-4 h-4" />
                    </a>

                    {/* VERTICAL TREE DOTS (Action Menu) */}
                    <ActionMenu washroomId={washroom.id} />
                </div>
            </td>
        </tr>
    );
}