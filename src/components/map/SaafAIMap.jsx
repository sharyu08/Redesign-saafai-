"use client";

import { useState, useCallback, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import locations from "@/data/locations"; // Ensure this contains your full washroom list
import MapLegend from "./MapLegend";
import LocationInfoPanel from "./LocationInfoPanel";

const containerStyle = {
    width: "100%",
    height: "100%",
};

const defaultCenter = { lat: 21.1458, lng: 79.0882 };

const statusIcon = {
    TOP: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
    ATTENTION: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
    UNASSIGNED: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
};

export default function SaafAIMap({
    selectedLocation,
    onSelectLocation,
    searchText,
    zoneIdFilter, // Prop passed from LocateOnMapPage
}) {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: apiKey,
        id: 'google-maps-script',
        libraries: ['places'],
    });

    const [map, setMap] = useState(null);

    const onLoad = useCallback((mapInstance) => {
        setMap(mapInstance);
    }, []);

    // 1. FILTER LOGIC: Combine Zone ID and Search Text
    const filteredLocations = locations.filter((loc) => {
        const matchesSearch = loc.name.toLowerCase().includes(searchText.toLowerCase());

        // Match loc.type_id or loc.location_types.id with the zoneIdFilter from URL
        const matchesZone = zoneIdFilter ? String(loc.type_id) === String(zoneIdFilter) : true;

        return matchesSearch && matchesZone;
    });

    // 2. AUTO-ZOOM LOGIC: Focus map on filtered results
    useEffect(() => {
        if (map && filteredLocations.length > 0 && window.google) {
            const bounds = new window.google.maps.LatLngBounds();
            filteredLocations.forEach((loc) => bounds.extend(loc.position));

            // Adjust map to fit all markers in the zone
            map.fitBounds(bounds);

            // Prevent excessive zoom if there is only one marker
            if (filteredLocations.length === 1) {
                map.setZoom(16);
            }
        }
    }, [map, filteredLocations]);

    // Only show error if there's an actual load error from Google Maps
    if (loadError) {
        console.error('Google Maps API Error:', loadError);
        return (
            <div className="h-full w-full flex items-center justify-center bg-slate-50 dark:bg-slate-800 p-4">
                <div className="bg-white dark:bg-slate-700 rounded-xl border border-red-200 dark:border-red-800 p-6 max-w-md text-center">
                    <p className="text-sm font-medium text-red-600 dark:text-red-400 mb-2">
                        Map failed to load
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Please check your Google Maps API key configuration
                    </p>
                </div>
            </div>
        );
    }

    // Loading state - show map container with loading indicator
    if (!isLoaded) {
        return (
            <div className="relative w-full map-container-full">
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800">
                    <div className="text-center">
                        <div className="h-10 w-10 border-4 border-primary-light/20 border-t-primary-dark dark:border-t-primary-light rounded-full animate-spin mx-auto mb-3"></div>
                        <p className="text-xs font-medium text-muted-foreground">
                            Loading map...
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full map-container-full">
            {/* GOOGLE MAP */}
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%', minHeight: '600px' }}
                center={defaultCenter}
                zoom={13}
                onLoad={onLoad}
                options={{
                    fullscreenControl: false,
                    mapTypeControl: true,
                    streetViewControl: false,
                    styles: mapStyles, // Optional: Apply custom clean UI styles
                }}
            >
                {filteredLocations.map((loc) => (
                    <Marker
                        key={loc.id}
                        position={loc.position}
                        icon={statusIcon[loc.status]}
                        onClick={() => onSelectLocation(loc)}
                        animation={window.google?.maps?.Animation?.DROP}
                    />
                ))}
            </GoogleMap>

            {/* 🔥 INFO PANEL – INSIDE MAP */}
            <LocationInfoPanel
                location={selectedLocation}
                onClose={() => onSelectLocation(null)}
            />

            <MapLegend />

            {/* NO RESULTS OVERLAY */}
            {filteredLocations.length === 0 && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl border border-slate-100 shadow-xl z-20 text-center">
                    <p className="text-xs font-black text-[hsl(var(--primary-dark))] uppercase tracking-widest">No Washrooms Found</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Try adjusting your zone or search filters</p>
                </div>
            )}
        </div>
    );
}

// Custom Map Styles for a cleaner administrative look
const mapStyles = [
    { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] },
    { featureType: "transit", elementType: "labels.icon", stylers: [{ visibility: "off" }] }
];