"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

export default function MapPanel({ locations }) {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
    
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: apiKey,
        libraries: ["places"],
    });

    const center = locations?.[0]
        ? { lat: locations[0].lat, lng: locations[0].lng }
        : { lat: 21.1458, lng: 79.0882 };

    const colors = {
        Active: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
        Inactive: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
        default: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    };

    // Handle missing API key
    if (!apiKey) {
        return (
            <div className="bg-white rounded-2xl shadow-lg p-4 h-[720px] border border-[var(--border-subtle)] flex flex-col">
                <div className="mb-3 flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-[var(--navy)]">Washroom Locations</h3>
                        <p className="text-xs text-slate-500">
                            View active, inactive and review locations on the city map
                        </p>
                    </div>
                </div>
                <div className="flex-1 rounded-xl overflow-hidden border border-[var(--border-subtle)] shadow-inner bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <div className="text-center p-4">
                        <p className="text-sm font-medium text-muted-foreground">
                            Google Maps API key required
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                            Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your .env.local file
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // Handle API load errors
    if (loadError) {
        return (
            <div className="bg-white rounded-2xl shadow-lg p-4 h-[720px] border border-[var(--border-subtle)] flex flex-col">
                <div className="mb-3 flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-[var(--navy)]">Washroom Locations</h3>
                        <p className="text-xs text-slate-500">
                            View active, inactive and review locations on the city map
                        </p>
                    </div>
                </div>
                <div className="flex-1 rounded-xl overflow-hidden border border-red-200 dark:border-red-800 shadow-inner bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
                    <div className="text-center p-4">
                        <p className="text-sm font-medium text-red-600 dark:text-red-400">
                            Failed to load map
                        </p>
                        <p className="text-xs text-red-500 dark:text-red-500 mt-1">
                            Check API key configuration
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // Loading state
    if (!isLoaded) {
        return (
            <div className="bg-white rounded-2xl shadow-lg p-4 h-[720px] border border-[var(--border-subtle)] flex flex-col">
                <div className="mb-3 flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-[var(--navy)]">Washroom Locations</h3>
                        <p className="text-xs text-slate-500">
                            View active, inactive and review locations on the city map
                        </p>
                    </div>
                </div>
                <div className="flex-1 rounded-xl overflow-hidden border border-[var(--border-subtle)] shadow-inner bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
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
        <div className="bg-white rounded-2xl shadow-lg p-4 h-[720px] border border-[var(--border-subtle)] flex flex-col">
            <div className="mb-3 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-[var(--navy)]">Washroom Locations</h3>
                    <p className="text-xs text-slate-500">
                        View active, inactive and review locations on the city map
                    </p>
                </div>
            </div>

            <div className="flex-1 rounded-xl overflow-hidden border border-[var(--border-subtle)] shadow-inner">
                <GoogleMap
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                    center={center}
                    zoom={12}
                    options={{
                        disableDefaultUI: true,
                        zoomControl: true,
                    }}
                >
                    {(locations || []).map((loc) => (
                        <Marker
                            key={loc.id}
                            position={{ lat: loc.lat, lng: loc.lng }}
                            icon={colors[loc.status] || colors.default}
                        />
                    ))}
                </GoogleMap>
            </div>
        </div>
    );
}
