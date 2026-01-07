"use client";

import { useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

export default function WashroomMap() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: apiKey || '',
        id: 'google-map-script-washroom',
    });

    const locations = [
        { lat: 21.1458, lng: 79.0882 },
        { lat: 21.155, lng: 79.095 },
        { lat: 21.16, lng: 79.082 },
    ];

    // Handle missing API key
    if (!apiKey) {
        return (
            <div className="h-[320px] w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                <div className="text-center p-4">
                    <p className="text-sm font-medium text-muted-foreground">
                        Google Maps API key required
                    </p>
                </div>
            </div>
        );
    }

    // Handle API load errors
    if (loadError) {
        return (
            <div className="h-[320px] w-full rounded-xl overflow-hidden bg-red-50 dark:bg-red-900/20 flex items-center justify-center border border-red-200 dark:border-red-800">
                <div className="text-center p-4">
                    <p className="text-sm font-medium text-red-600 dark:text-red-400">
                        Failed to load map
                    </p>
                    <p className="text-xs text-red-500 dark:text-red-500 mt-1">
                        Check API key configuration
                    </p>
                </div>
            </div>
        );
    }

    // Loading state
    if (!isLoaded) {
        return (
            <div className="h-[320px] w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                <div className="text-center">
                    <div className="h-8 w-8 border-4 border-primary-light/20 border-t-primary-dark dark:border-t-primary-light rounded-full animate-spin mx-auto mb-2"></div>
                    <p className="text-xs text-muted-foreground">Loading map...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="h-[320px] w-full rounded-xl overflow-hidden">
            <GoogleMap
                center={{ lat: 21.1458, lng: 79.0882 }}
                zoom={12}
                options={{
                    disableDefaultUI: true,
                    zoomControl: true,
                }}
                mapContainerStyle={{ width: "100%", height: "100%" }}
            >
                {locations.map((l, i) => (
                    <Marker key={i} position={l} />
                ))}
            </GoogleMap>
        </div>
    );
}

