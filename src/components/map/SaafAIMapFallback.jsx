"use client";

import { useState, useCallback, useEffect } from "react";
import locations from "@/data/locations";
import MapLegend from "./MapLegend";
import LocationInfoPanel from "./LocationInfoPanel";
import { MapPin, AlertCircle } from "lucide-react";

const defaultCenter = { lat: 21.1458, lng: 79.0882 };

const statusIcon = {
    TOP: "🟢",
    ATTENTION: "🟡",
    UNASSIGNED: "🔴",
    ACTIVE: "🟢",
    BUSY: "🟡",
    AVERAGE: "🟠",
};

export default function SaafAIMapFallback({ selectedLocation, onSelectLocation, searchText, zoneIdFilter }) {
    const [mapCenter, setMapCenter] = useState(defaultCenter);
    const [zoom, setZoom] = useState(13);

    const filteredLocations = locations.filter((loc) => {
        const matchesSearch = loc.name.toLowerCase().includes(searchText.toLowerCase());
        const matchesZone = zoneIdFilter ? String(loc.type_id) === String(zoneIdFilter) : true;
        return matchesSearch && matchesZone;
    });

    useEffect(() => {
        if (filteredLocations.length > 0) {
            // Calculate bounds from filtered locations
            const lats = filteredLocations.map(loc => loc.position.lat);
            const lngs = filteredLocations.map(loc => loc.position.lng);

            const minLat = Math.min(...lats);
            const maxLat = Math.max(...lats);
            const minLng = Math.min(...lngs);
            const maxLng = Math.max(...lngs);

            const centerLat = (minLat + maxLat) / 2;
            const centerLng = (minLng + maxLng) / 2;

            setMapCenter({ lat: centerLat, lng: centerLng });
            setZoom(filteredLocations.length === 1 ? 16 : 12);
        }
    }, [filteredLocations.length]); // Only depend on length, not the entire array

    const handleLocationClick = (location) => {
        onSelectLocation(location);
        setMapCenter(location.position);
        setZoom(16);
    };

    return (
        <div className="relative w-full h-[700px] min-h-[600px] overflow-hidden rounded-[32px] border border-slate-200 shadow-sm bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900">

            {/* Fallback Map Header */}
            <div className="absolute top-4 left-4 z-[60] bg-white/95 dark:bg-slate-800/95 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 shadow-lg">
                <div className="flex items-center gap-2">
                    <MapPin className="text-blue-500 dark:text-blue-400" size={16} />
                    <span className="text-xs font-black text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                        Interactive Map View
                    </span>
                </div>
            </div>

            {/* Simple Grid Layout for Locations */}
            <div className="absolute inset-4 overflow-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
                    {filteredLocations.map((loc) => (
                        <div
                            key={loc.id}
                            onClick={() => handleLocationClick(loc)}
                            className={`p-4 rounded-xl border cursor-pointer transition-all hover:shadow-lg hover:scale-105 ${selectedLocation?.id === loc.id
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg'
                                : 'border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800'
                                }`}
                        >
                            <div className="flex items-start gap-3">
                                <div className="text-2xl">
                                    {statusIcon[loc.status] || statusIcon.UNASSIGNED}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 truncate">
                                        {loc.name}
                                    </h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                                        {loc.address}
                                    </p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                                            {loc.cleaner}
                                        </span>
                                        {loc.rating > 0 && (
                                            <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full">
                                                ⭐ {loc.rating}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* MAP LEGEND */}
            <div className="absolute bottom-10 left-10 z-[70] bg-white/95 dark:bg-slate-800/95 backdrop-blur-md p-5 rounded-2xl border border-slate-200 dark:border-slate-600 shadow-[0_12px_40px_rgba(0,0,0,0.15)] pointer-events-auto min-w-[180px]">
                <MapLegend />
            </div>

            {/* RIGHT SIDE INFO DRAWER */}
            {selectedLocation && (
                <LocationInfoPanel
                    location={selectedLocation}
                    onClose={() => onSelectLocation(null)}
                />
            )}

            {/* NO RESULTS OVERLAY */}
            {filteredLocations.length === 0 && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md px-8 py-5 rounded-[24px] border border-slate-200 dark:border-slate-600 shadow-2xl z-[80] text-center">
                    <AlertCircle className="mx-auto mb-3 text-slate-400" size={24} />
                    <p className="text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-widest">
                        No Washrooms Found
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                        Try adjusting your search or filter criteria
                    </p>
                </div>
            )}
        </div>
    );
}
