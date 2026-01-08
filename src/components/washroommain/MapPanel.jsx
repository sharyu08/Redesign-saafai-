"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { Map as MapIcon, Info, ShieldAlert } from "lucide-react";

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

    // UI Helper for Errors/Loading states
    const StatusPlaceholder = ({ title, subtitle, isError }) => (
        <div className="card-global h-[720px] flex flex-col">
            <div className="flex items-center gap-3 mb-5 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="h-10 w-10 rounded-xl bg-cyan-400/10 flex items-center justify-center border border-cyan-500/10 shadow-sm">
                    {isError ? <ShieldAlert className="text-rose-500" /> : <MapIcon className="text-cyan-600 animate-pulse" />}
                </div>
                <div className="text-left">
                    <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-[0.2em] leading-none">{title}</h3>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 opacity-70">{subtitle}</p>
                </div>
            </div>
            <div className={`flex-1 rounded-[24px] overflow-hidden border border-slate-100 dark:border-slate-800 flex items-center justify-center ${isError ? 'bg-rose-50/30' : 'bg-slate-50/50'}`}>
                <div className="text-center p-6">
                    {!isError && <div className="h-10 w-10 border-4 border-cyan-500/10 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>}
                    <p className={`text-xs font-black uppercase tracking-widest ${isError ? 'text-rose-600' : 'text-slate-500'}`}>{title}</p>
                    <p className="text-[10px] text-slate-400 italic mt-2 max-w-[200px] mx-auto">{subtitle}</p>
                </div>
            </div>
        </div>
    );

    if (!apiKey) return <StatusPlaceholder title="API Key Required" subtitle="Please update your .env.local with NEXT_PUBLIC_GOOGLE_MAPS_API_KEY" isError />;
    if (loadError) return <StatusPlaceholder title="Map Load Failed" subtitle={loadError.message || "Check API configuration in your dashboard"} isError />;
    if (!isLoaded) return <StatusPlaceholder title="Initialising Grid" subtitle="Retrieving spatial data coordinates..." />;

    return (
        /* Using .card-global for consistent rounding and Oceanic Blue shadow */
        <div className="card-global h-[720px] flex flex-col">

            {/* Header synced with Page Header tokens */}
            <div className="flex items-center gap-3 mb-5 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="h-10 w-10 rounded-xl bg-cyan-400/10 flex items-center justify-center border border-cyan-500/10 shadow-sm">
                    <MapIcon className="text-cyan-600 dark:text-cyan-400" size={20} strokeWidth={2.5} />
                </div>
                <div className="text-left">
                    <h3 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-[0.2em] leading-none">
                        Washroom Locations
                    </h3>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 opacity-70">
                        Spatial Live Intelligence Feed
                    </p>
                </div>
            </div>

            {/* Map Container utilizing the faint border logic */}
            <div className="flex-1 rounded-[24px] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-inner relative">
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

                {/* Branded Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-white dark:border-slate-700 p-3 rounded-xl flex items-center gap-3 shadow-lg">
                        <Info size={14} className="text-cyan-500" />
                        <p className="text-[9px] font-black text-slate-600 dark:text-slate-300 uppercase tracking-widest leading-tight">
                            Showing {(locations || []).length} facilities in current radius
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}