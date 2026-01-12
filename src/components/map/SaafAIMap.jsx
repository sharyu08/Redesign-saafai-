"use client";

import { useState, useCallback, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import locations from "@/data/locations";
import MapLegend from "./MapLegend";
import LocationInfoPanel from "./LocationInfoPanel";

const defaultCenter = { lat: 21.1458, lng: 79.0882 };

const statusIcon = {
    TOP: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
    ATTENTION: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
    UNASSIGNED: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
};

const SaafAIMapBase = ({ selectedLocation, onSelectLocation, searchText, zoneIdFilter }) => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: apiKey,
        id: 'google-maps-script-main',
        libraries: ['places'],
    });

    const [map, setMap] = useState(null);

    const onLoad = useCallback((mapInstance) => {
        setMap(mapInstance);
    }, []);

    const filteredLocations = locations.filter((loc) => {
        const matchesSearch = loc.name.toLowerCase().includes(searchText.toLowerCase());
        const matchesZone = zoneIdFilter ? String(loc.type_id) === String(zoneIdFilter) : true;
        return matchesSearch && matchesZone;
    });

    useEffect(() => {
        if (map && filteredLocations.length > 0 && window.google) {
            const bounds = new window.google.maps.LatLngBounds();
            filteredLocations.forEach((loc) => bounds.extend(loc.position));
            map.fitBounds(bounds);
            if (filteredLocations.length === 1) map.setZoom(16);
        }
    }, [map, filteredLocations]);

    if (loadError) return <div className="h-[700px] flex items-center justify-center bg-slate-50 uppercase font-black text-xs tracking-widest text-red-500">Map Load Error</div>;
    if (!isLoaded) return <div className="h-[700px] bg-slate-100 flex items-center justify-center uppercase font-black text-xs tracking-widest text-slate-400 animate-pulse">SaafAI Map Loading...</div>;

    return (
        <div className="relative w-full h-[700px] min-h-[600px] overflow-hidden rounded-[32px] border border-slate-200 shadow-sm bg-white">

            {/* GOOGLE MAP COMPONENT */}
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={defaultCenter}
                zoom={13}
                onLoad={onLoad}
                options={{
                    fullscreenControl: false,
                    mapTypeControl: false,
                    streetViewControl: false,
                    zoomControl: false,
                    styles: mapStyles,
                }}
            >
                {filteredLocations.map((loc) => (
                    <Marker
                        key={loc.id}
                        position={loc.position}
                        icon={statusIcon[loc.status] || statusIcon.UNASSIGNED}
                        onClick={() => onSelectLocation(loc)}
                    />
                ))}
            </GoogleMap>

            {/* ✅ MAP LEGEND: FIXED BOTTOM LEFT WITH INCREASED PADDING & HIGHEST Z-INDEX */}
            <div
                className="
          absolute bottom-10 left-10 
          z-[70] 
          bg-white/95 
          backdrop-blur-md 
          p-5
          rounded-2xl 
          border border-slate-200
          shadow-[0_12px_40px_rgba(0,0,0,0.15)]
          pointer-events-auto
          min-w-[180px]
        "
            >
                <MapLegend />
            </div>

            {/* RIGHT SIDE INFO DRAWER (Positioned absolute to this container) */}
            {selectedLocation && (
                <LocationInfoPanel
                    location={selectedLocation}
                    onClose={() => onSelectLocation(null)}
                />
            )}

            {/* NO RESULTS OVERLAY */}
            {filteredLocations.length === 0 && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md px-8 py-5 rounded-[24px] border border-slate-100 shadow-2xl z-[80] text-center">
                    <p className="text-xs font-black text-slate-800 uppercase tracking-widest">No Washrooms Found</p>
                </div>
            )}
        </div>
    );
};

export default function SaafAIMap({ selectedLocation, onSelectLocation, searchText, zoneIdFilter }) {
    return (
        <SaafAIMapBase
            selectedLocation={selectedLocation}
            onSelectLocation={onSelectLocation}
            searchText={searchText}
            zoneIdFilter={zoneIdFilter}
        />
    );
}

const mapStyles = [
    { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] },
    { featureType: "transit", elementType: "labels.icon", stylers: [{ visibility: "off" }] },
];