"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import locations from "@/data/locations";
import MapLegend from "./MapLegend";
import LocationInfoPanel from "./LocationInfoPanel";

const containerStyle = {
    width: "100%",
    height: "100%",
};

const center = { lat: 21.1458, lng: 79.0882 };

const statusIcon = {
    TOP: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
    ATTENTION: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
    UNASSIGNED: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
};

export default function SaafAIMap({
    selectedLocation,
    onSelectLocation,
    searchText,
}) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return null;

    const filteredLocations = locations.filter((loc) =>
        loc.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="relative h-full w-full">

            {/* GOOGLE MAP */}
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={13}
                options={{
                    fullscreenControl: false,
                    mapTypeControl: true,
                }}
            >
                {filteredLocations.map((loc) => (
                    <Marker
                        key={loc.id}
                        position={loc.position}
                        icon={statusIcon[loc.status]}
                        onClick={() => onSelectLocation(loc)}
                    />
                ))}
            </GoogleMap>

            {/* 🔥 INFO PANEL – INSIDE MAP */}
            <LocationInfoPanel
                location={selectedLocation}
                onClose={() => onSelectLocation(null)}
            />

            <MapLegend />
        </div>
    );
}
