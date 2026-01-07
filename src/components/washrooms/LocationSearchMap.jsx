"use client";

import { useState, useCallback, useEffect } from "react";
import {
    GoogleMap,
    Marker,
    Autocomplete,
    useJsApiLoader,
} from "@react-google-maps/api";

const libraries = ["places"];

export default function LocationSearchMap({ onLocationChange }) {
    const [autocomplete, setAutocomplete] = useState(null);
    const [lat, setLat] = useState(21.1458);
    const [lng, setLng] = useState(79.0882);

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: apiKey || '',
        libraries,
        id: 'google-map-script-places',
    });

    // Notify parent component whenever lat/lng changes
    useEffect(() => {
        if (onLocationChange) {
            onLocationChange({ lat, lng });
        }
    }, [lat, lng, onLocationChange]);

    const onLoad = useCallback((auto) => {
        setAutocomplete(auto);
    }, []);

    const handlePlaceChanged = () => {
        if (!autocomplete) return;
        const place = autocomplete.getPlace();
        if (!place.geometry) return;

        const newLat = place.geometry.location.lat();
        const newLng = place.geometry.location.lng();

        setLat(newLat);
        setLng(newLng);
    };

    // Handle missing API key
    if (!apiKey) {
        return (
            <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[var(--radius)] p-6">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                    <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                        Google Maps API key is required. Please add <code className="bg-yellow-100 dark:bg-yellow-900 px-2 py-1 rounded">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> to your <code className="bg-yellow-100 dark:bg-yellow-900 px-2 py-1 rounded">.env.local</code> file.
                    </p>
                </div>
            </div>
        );
    }

    // Handle API load errors
    if (loadError) {
        return (
            <div className="bg-[hsl(var(--card))] border border-red-200 dark:border-red-800 rounded-[var(--radius)] p-6">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <p className="text-sm font-medium text-red-800 dark:text-red-200 mb-2">
                        Failed to load Google Maps API
                    </p>
                    <p className="text-xs text-red-600 dark:text-red-300">
                        {loadError.message || 'Please check your API key configuration and ensure Maps JavaScript API is enabled.'}
                    </p>
                </div>
            </div>
        );
    }

    // Loading state
    if (!isLoaded) {
        return (
            <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[var(--radius)] p-6 space-y-4">
                <div className="h-6 w-32 animate-pulse rounded bg-[hsl(var(--muted))]" />
                <div className="h-64 w-full animate-pulse rounded-xl bg-[hsl(var(--muted))] flex items-center justify-center">
                    <div className="text-center">
                        <div className="h-8 w-8 border-4 border-primary-light/20 border-t-primary-dark dark:border-t-primary-light rounded-full animate-spin mx-auto mb-2"></div>
                        <p className="text-xs font-medium text-muted-foreground">Loading map...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[var(--radius)] p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-[hsl(var(--lavender-100))] rounded-lg shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(var(--primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <h2 className="text-xl font-extrabold tracking-tight text-[hsl(var(--foreground))]">
                    Pin Location
                </h2>
            </div>

            <div className="relative group mb-4">
                <Autocomplete onLoad={onLoad} onPlaceChanged={handlePlaceChanged}>
                    <input
                        className="w-full px-4 py-3 bg-[hsl(var(--input))] border border-[hsl(var(--border))] rounded-xl text-sm font-medium focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent outline-none transition-all"
                        placeholder="Search for building, area or street..."
                        type="text"
                    />
                </Autocomplete>
                <div className="absolute right-4 top-3.5 text-[hsl(var(--muted-foreground))]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            <div className="w-full h-72 rounded-2xl overflow-hidden border border-[hsl(var(--border))] shadow-inner mb-6">
                <GoogleMap
                    center={{ lat, lng }}
                    zoom={15}
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                >
                    <Marker
                        position={{ lat, lng }}
                        draggable={true}
                        onDragEnd={(e) => {
                            setLat(e.latLng.lat());
                            setLng(e.latLng.lng());
                        }}
                    />
                </GoogleMap>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[hsl(var(--muted-foreground))] uppercase tracking-widest ml-1">Latitude</label>
                    <div className="px-4 py-2.5 bg-[hsl(var(--lavender-200))] border border-[hsl(var(--primary)/0.2)] rounded-xl text-sm font-mono font-bold text-[hsl(var(--primary-dark))]">
                        {lat.toFixed(6)}
                    </div>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[hsl(var(--muted-foreground))] uppercase tracking-widest ml-1">Longitude</label>
                    <div className="px-4 py-2.5 bg-[hsl(var(--lavender-200))] border border-[hsl(var(--primary)/0.2)] rounded-xl text-sm font-mono font-bold text-[hsl(var(--primary-dark))]">
                        {lng.toFixed(6)}
                    </div>
                </div>
            </div>

            <div className="mt-4 flex items-start gap-2 text-[11px] text-[hsl(var(--muted-foreground))] italic leading-relaxed">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 shrink-0 mt-0.5 text-[hsl(var(--primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Search an address above or drag the red marker to pin the exact facility entrance. Coordinates are automatically captured.</span>
            </div>
        </div>
    );
}