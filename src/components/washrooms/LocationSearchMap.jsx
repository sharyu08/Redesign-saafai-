"use client";

import { useState, useCallback, useEffect } from "react";
import {
    GoogleMap,
    Marker,
    Autocomplete,
    useLoadScript,
} from "@react-google-maps/api";
import { Search, MapPin, Info, Navigation } from "lucide-react";

const libraries = ["places"];

export default function LocationSearchMap({ onLocationChange }) {
    const [autocomplete, setAutocomplete] = useState(null);
    const [lat, setLat] = useState(21.1458);
    const [lng, setLng] = useState(79.0882);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
        libraries,
    });

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

    if (loadError) {
        return (
            <div className="card-global">
                <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-100 rounded-xl p-4">
                    <p className="text-xs font-black text-rose-600 uppercase tracking-widest mb-1">
                        Map Load Failed
                    </p>
                    <p className="text-[10px] font-medium text-rose-400">
                        {loadError.message || 'Check API key permissions for Maps JavaScript API.'}
                    </p>
                </div>
            </div>
        );
    }

    if (!isLoaded) {
        return (
            <div className="card-global space-y-4">
                <div className="h-6 w-32 animate-pulse rounded bg-slate-50 dark:bg-slate-800" />
                <div className="h-72 w-full animate-pulse rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                    <div className="text-center">
                        <div className="h-8 w-8 border-4 border-cyan-500/10 border-t-cyan-500 rounded-full animate-spin mx-auto mb-2"></div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Initialising Grid...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        /* Using .card-global for standard dashboard panel styling */
        <div className="card-global">

            {/* Standard Header Section */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="h-10 w-10 rounded-xl bg-cyan-400/10 flex items-center justify-center border border-cyan-500/10 shadow-sm">
                    <MapPin className="text-cyan-600 dark:text-cyan-400" size={20} strokeWidth={2.5} />
                </div>
                <div className="text-left">
                    <h2 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-[0.2em] leading-none">
                        Pin Location
                    </h2>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 opacity-70">
                        Spatial Geo-Point Capture
                    </p>
                </div>
            </div>

            {/* Search Input using .form-input-wrapper logic */}
            <div className="form-group mb-4">
                <Autocomplete onLoad={onLoad} onPlaceChanged={handlePlaceChanged}>
                    <div className="form-input-wrapper">
                        <Search className="form-input-icon" size={16} />
                        <input
                            className="form-input"
                            placeholder="Search for building, area or street..."
                            type="text"
                        />
                    </div>
                </Autocomplete>
            </div>

            {/* Map Container */}
            <div className="w-full h-72 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-inner mb-6 relative">
                <GoogleMap
                    center={{ lat, lng }}
                    zoom={15}
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                    options={{
                        disableDefaultUI: true,
                        zoomControl: true,
                    }}
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

            {/* Coordinate Display using faint Oceanic tokens */}
            <div className="grid grid-cols-2 gap-4">
                <div className="form-group mb-0 text-left">
                    <label className="form-label mb-1.5 ml-1">Latitude</label>
                    <div className="px-4 py-3 bg-cyan-400/5 dark:bg-cyan-900/10 border border-cyan-500/10 rounded-xl text-sm font-mono font-bold text-cyan-700 dark:text-cyan-400 shadow-sm">
                        {lat.toFixed(6)}
                    </div>
                </div>

                <div className="form-group mb-0 text-left">
                    <label className="form-label mb-1.5 ml-1">Longitude</label>
                    <div className="px-4 py-3 bg-cyan-400/5 dark:bg-cyan-900/10 border border-cyan-500/10 rounded-xl text-sm font-mono font-bold text-cyan-700 dark:text-cyan-400 shadow-sm">
                        {lng.toFixed(6)}
                    </div>
                </div>
            </div>

            {/* Branded Info Box using project tokens */}
            <div className="mt-6 flex items-start gap-3 p-4 bg-slate-50/50 dark:bg-slate-800/20 border border-slate-100 dark:border-slate-800 rounded-xl">
                <Info size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 italic leading-relaxed text-left">
                    Search an address above or drag the red marker to pin the exact facility entrance.
                    <span className="font-black text-cyan-600 dark:text-cyan-400 uppercase ml-1">Coordinates are automatically captured.</span>
                </p>
            </div>
        </div>
    );
}