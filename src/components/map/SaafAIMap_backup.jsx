"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { Loader2, Search, X } from "lucide-react";
import locationsApi from "@/features/locations/locations.api";
import { useRouter } from "next/navigation";
import { useCompanyId } from "@/providers/CompanyProvider";
import { useGoogleMaps } from "@/providers/GoogleMapsProvider";

const mapContainerStyle = {
    width: "100%",
    height: "80vh",
};

const defaultCenter = {
    lat: 21.1458,
    lng: 79.0882,
};

const MapView = ({ selectedLocation, onSelectLocation, searchText, zoneIdFilter }) => {
    const { isLoaded, loadError } = useGoogleMaps();

    const router = useRouter();
    const [locations, setLocations] = useState([]);
    const [selected, setSelected] = useState(selectedLocation || null);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState(searchText || "");
    const [filtered, setFiltered] = useState([]);
    const [center, setCenter] = useState(defaultCenter);
    const [showDropdown, setShowDropdown] = useState(false);
    const mapRef = useRef(null);
    const searchRef = useRef(null);

    const { companyId, hasCompanyContext } = useCompanyId();

    const fetchLocations = useCallback(async () => {
        setLoading(true);

        try {
            const res = await locationsApi.getAllLocations(companyId || 26);
            console.log('Map API Response:', res);
            if (res.success) {
                console.log('Raw locations data:', res.data);
                // Filter out any invalid locations (where lat/lng are 0)
                const validLocations = res.data.filter(
                    loc => loc.latitude !== 0 && loc.longitude !== 0
                );
                console.log('Valid locations:', validLocations);

                setLocations(validLocations);
                setFiltered(validLocations);

                // Update the map center if we have locations
                if (validLocations.length > 0 && mapRef.current) {
                    const firstLocation = validLocations[0];
                    const newCenter = {
                        lat: parseFloat(firstLocation.latitude),
                        lng: parseFloat(firstLocation.longitude)
                    };
                    setCenter(newCenter);
                    mapRef.current.panTo(newCenter);
                }
            } else {
                console.error('Failed to fetch locations:', res.error);
            }
        } catch (error) {
            console.error('Error fetching locations:', error);
        } finally {
            setLoading(false);
        }
    }, [companyId]);

    // Initial data fetch
    useEffect(() => {
        fetchLocations();
    }, [fetchLocations]);

    // Handle search input changes
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearch(value);

        if (value.trim() === "") {
            setFiltered(locations);
            setShowDropdown(false);
        } else {
            const matches = locations.filter((loc) =>
                loc.name.toLowerCase().includes(value.toLowerCase())
            );
            setFiltered(matches);
            setShowDropdown(matches.length > 0);
        }
    };

    // Handle location selection from dropdown
    const handleLocationSelect = (loc) => {
        const lat = parseFloat(loc.latitude);
        const lng = parseFloat(loc.longitude);

        setCenter({ lat, lng });
        setSelected(loc);
        setSearch(loc.name);
        setShowDropdown(false);

        // Call the parent's onSelectLocation if provided
        if (onSelectLocation) {
            onSelectLocation(loc);
        }

        // Pan and zoom to selected location
        if (mapRef.current) {
            mapRef.current.panTo({ lat, lng });
            mapRef.current.setZoom(15);
        }
    };

    // Clear search
    const handleClearSearch = () => {
        setSearch("");
        setFiltered(locations);
        setShowDropdown(false);
        setSelected(null);
        if (onSelectLocation) {
            onSelectLocation(null);
        }
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Update search when searchText prop changes
    useEffect(() => {
        if (searchText !== undefined) {
            setSearch(searchText);
            if (searchText) {
                const matches = locations.filter((loc) =>
                    loc.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFiltered(matches);
            } else {
                setFiltered(locations);
            }
        }
    }, [searchText, locations]);

    // Update selected location when selectedLocation prop changes
    useEffect(() => {
        if (selectedLocation) {
            setSelected(selectedLocation);
            const lat = parseFloat(selectedLocation.latitude);
            const lng = parseFloat(selectedLocation.longitude);
            setCenter({ lat, lng });

            if (mapRef.current) {
                mapRef.current.panTo({ lat, lng });
                mapRef.current.setZoom(15);
            }
        }
    }, [selectedLocation]);

    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded)
        return (
            <div className="flex justify-center items-center h-96">
                <Loader2 className="animate-spin" />
            </div>
        );

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Washroom Map</h2>

            {/* Local Search Input with Dropdown */}
            <div className="mb-4 relative" ref={searchRef}>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search toilets by name..."
                        value={search}
                        onChange={handleInputChange}
                        onFocus={() => {
                            if (search && filtered.length > 0) {
                                setShowDropdown(true);
                            }
                        }}
                        className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {search && (
                        <button
                            onClick={handleClearSearch}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    )}
                </div>

                {/* Search Results Dropdown */}
                {showDropdown && filtered.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {filtered.map((loc) => (
                            <div
                                key={loc.id}
                                onClick={() => handleLocationSelect(loc)}
                                className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <p className="font-medium text-gray-900">{loc.name}</p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            📍 {parseFloat(loc.latitude).toFixed(4)},{" "}
                                            {parseFloat(loc.longitude).toFixed(4)}
                                        </p>
                                    </div>
                                    {loc.averageRating !== null && loc.averageRating > 0 && (
                                        <div className="flex items-center gap-1 ml-2">
                                            <span className="text-yellow-500">⭐</span>
                                            <span className="text-sm font-medium">
                                                {loc.averageRating.toFixed(1)}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* No Results Message */}
                {showDropdown && filtered.length === 0 && search && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-4 text-center text-gray-500">
                        No toilets found matching "{search}"
                    </div>
                )}
            </div>

            {/* Results Count */}
            <div className="mb-2 text-sm text-gray-600">
                Showing {filtered.length} of {locations.length} locations
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-96">
                    <Loader2 className="animate-spin" />
                </div>
            ) : (
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={13}
                    center={center}
                    onLoad={(map) => {
                        mapRef.current = map;
                    }}
                >
                    {filtered.map((loc) => (
                        <Marker
                            key={loc.id}
                            position={{
                                lat: parseFloat(loc.latitude),
                                lng: parseFloat(loc.longitude),
                            }}
                            onClick={() => {
                                setSelected(loc);
                                setCenter({
                                    lat: parseFloat(loc.latitude),
                                    lng: parseFloat(loc.longitude),
                                });
                                if (onSelectLocation) {
                                    onSelectLocation(loc);
                                }
                            }}
                            title={loc.name}
                        />
                    ))}

                    {selected && (
                        <InfoWindow
                            position={{
                                lat: parseFloat(selected.latitude),
                                lng: parseFloat(selected.longitude),
                            }}
                            onCloseClick={() => {
                                setSelected(null);
                                if (onSelectLocation) {
                                    onSelectLocation(null);
                                }
                            }}
                        >
                            <div className="w-80 bg-white rounded-lg shadow-lg overflow-hidden">
                                {/* Header with Status */}
                                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-bold leading-tight">
                                            {selected.name || "Unnamed Location"}
                                        </h3>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${selected.status === 'active' ? 'bg-green-100 text-green-800' :
                                                selected.status === 'inactive' ? 'bg-red-100 text-red-800' :
                                                    'bg-gray-100 text-gray-800'
                                            }`}>
                                            {selected.status || 'UNKNOWN'}
                                        </span>
                                    </div>
                                    <p className="text-blue-100 text-sm flex items-center gap-1">
                                        <span>📍</span>
                                        {parseFloat(selected.latitude).toFixed(6)}, {parseFloat(selected.longitude).toFixed(6)}
                                    </p>
                                </div>

                                {/* Content Section */}
                                <div className="p-4">
                                    {/* Basic Info */}
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        <div className="bg-gray-50 p-3 rounded-lg">
                                            <p className="text-xs text-gray-500 mb-1">Type</p>
                                            <p className="text-sm font-semibold text-gray-900">
                                                {selected.type || 'WASHROOM'}
                                            </p>
                                        </div>
                                        <div className="bg-gray-50 p-3 rounded-lg">
                                            <p className="text-xs text-gray-500 mb-1">Company ID</p>
                                            <p className="text-sm font-semibold text-gray-900">
                                                {selected.company_id || 'N/A'}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Rating Section */}
                                    <div className="mb-4 p-3 bg-yellow-50 rounded-lg">
                                        {selected.averageRating !== null && selected.averageRating > 0 ? (
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-yellow-500 text-lg">⭐</span>
                                                    <span className="font-bold text-gray-900 text-lg">
                                                        {selected.averageRating.toFixed(1)}
                                                    </span>
                                                </div>
                                                <span className="text-gray-600 text-sm">
                                                    {selected.ratingCount || 0} {selected.ratingCount === 1 ? 'review' : 'reviews'}
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                <span className="text-gray-400">⭐</span>
                                                <span className="text-gray-500 text-sm">No ratings yet</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Cleaning Score */}
                                    {selected.average_cleaning_score !== null && (
                                        <div className="mb-4 p-3 bg-green-50 rounded-lg">
                                            <p className="text-xs text-gray-500 mb-1">Cleaning Score</p>
                                            <div className="flex items-center gap-2">
                                                <span className="text-green-500">🧼</span>
                                                <span className="font-bold text-green-700">
                                                    {selected.average_cleaning_score}/10
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Address/Location Details */}
                                    {(selected.address || selected.city || selected.state || selected.pincode) && (
                                        <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                                            <p className="text-xs text-gray-500 mb-2">Location Details</p>
                                            {selected.address && (
                                                <p className="text-sm text-gray-700 mb-1">📍 {selected.address}</p>
                                            )}
                                            <div className="text-sm text-gray-600">
                                                {selected.city && selected.state && (
                                                    <p>{selected.city}, {selected.state}</p>
                                                )}
                                                {selected.pincode && <p>PIN: {selected.pincode}</p>}
                                            </div>
                                        </div>
                                    )}

                                    {/* Operating Hours */}
                                    {(selected.open_time || selected.close_time) && (
                                        <div className="mb-4 p-3 bg-purple-50 rounded-lg">
                                            <p className="text-xs text-gray-500 mb-1">Operating Hours</p>
                                            <p className="text-sm text-gray-700">
                                                🕐 {selected.open_time || 'N/A'} - {selected.close_time || 'N/A'}
                                            </p>
                                        </div>
                                    )}

                                    {/* Public Access */}
                                    <div className="mb-4 p-3 bg-indigo-50 rounded-lg">
                                        <p className="text-xs text-gray-500 mb-1">Access</p>
                                        <p className="text-sm font-medium text-indigo-700">
                                            {selected.is_public ? '🌐 Public Access' : '🔒 Private Access'}
                                        </p>
                                    </div>

                                    {/* Cleaner Assignment */}
                                    {selected.cleaner_assignments && selected.cleaner_assignments.length > 0 && (
                                        <div className="mb-4 p-3 bg-orange-50 rounded-lg">
                                            <p className="text-xs text-gray-500 mb-2">Assigned Cleaner</p>
                                            {selected.cleaner_assignments.map((assignment) => (
                                                <div key={assignment.id} className="text-sm text-gray-700">
                                                    <p className="font-medium">{assignment.cleaner_user?.name || 'Unknown'}</p>
                                                    <p className="text-xs text-gray-500">{assignment.cleaner_user?.email || 'No email'}</p>
                                                    <p className="text-xs text-gray-500">📞 {assignment.cleaner_user?.phone || 'No phone'}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Footer */}
                                    <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                                        <div className="text-xs text-gray-500">
                                            Added {new Date(selected.created_at).toLocaleDateString()}
                                        </div>
                                        <button
                                            onClick={() => {
                                                router.push(
                                                    `/washrooms/item/${selected.id}?companyId=${companyId || 26}`,
                                                );
                                            }}
                                            className="cursor-pointer text-blue-600 hover:text-blue-800 text-xs font-medium underline"
                                        >
                                            View Details →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            )}
        </div>
    );
};

// Export the component with the same name and props as before
export default function SaafAIMap({ selectedLocation, onSelectLocation, searchText, zoneIdFilter }) {
    return (
        <MapView
            selectedLocation={selectedLocation}
            onSelectLocation={onSelectLocation}
            searchText={searchText}
            zoneIdFilter={zoneIdFilter}
        />
    );
}
