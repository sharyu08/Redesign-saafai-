"use client";

import {
    Droplets,
    Zap,
    Info,
    Sparkles,
    Trash2,
    Users,
    Wind,
    Fan,
    Navigation,
    Baby,
    Waves
} from "lucide-react";
import {
    MdOutlineDryCleaning, // Fixed casing: C is now capital
    MdOutlineImage // Using Image as an alternative for Mirror
} from "react-icons/md";

/**
 * Mapping amenity strings to Icon components.
 * Standardized primarily on Lucide-React for build stability.
 */
const amenityMap = {
    "Water": Droplets,
    "Toilet": Info,
    "Light": Zap,
    "Basin": Waves, // Replaced MdOutlineWash with Lucide Waves for stability
    "Soap": Sparkles,
    "Dustbin": Trash2,
    "Sanitary Pad Vending Machine": Users,
    "Air Freshener": Wind,
    "Hand Dryer": MdOutlineDryCleaning, // Corrected casing
    "Shower": Droplets,
    "AC": Zap,
    "Sanitizer": Sparkles,
    "Soap Dispenser": Waves,
    "Baby Changing Station": Baby,
    "Mirror": MdOutlineImage,
    "Exhaust Fan": Fan,
    "Urinals": Info,
};

export default function AmenitiesList({ amenities = [] }) {
    return (
        <section className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--muted-foreground))] flex items-center gap-2">
                <Navigation className="w-3 h-3 text-[hsl(var(--primary))]" />
                Facility Amenities
            </h3>

            <div className="grid grid-cols-2 gap-3">
                {amenities.map((a, index) => {
                    // Fallback to Info icon if the mapping name is not found
                    const Icon = amenityMap[a] || Info;

                    return (
                        <div
                            key={index}
                            className="flex items-center gap-3 bg-[hsl(var(--muted))] p-3 rounded-xl border border-[hsl(var(--border))] transition-all hover:bg-[#F4FBFC] group"
                        >
                            <div className="p-1.5 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                                <Icon className="w-4 h-4 text-[hsl(var(--primary))]" />
                            </div>
                            <span className="text-xs font-semibold text-[hsl(var(--foreground))]">
                                {a}
                            </span>
                        </div>
                    );
                })}
            </div>

            {amenities.length === 0 && (
                <p className="text-xs italic text-[hsl(var(--muted-foreground))] text-center py-2">
                    No amenities listed for this location.
                </p>
            )}
        </section>
    );
}