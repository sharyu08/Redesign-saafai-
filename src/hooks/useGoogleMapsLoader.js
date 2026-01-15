"use client";

import { useMemo } from 'react';

// Hook for @react-google-maps/api compatibility
export function useJsApiLoader({ googleMapsApiKey, libraries = [], id }) {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || googleMapsApiKey || '';

    return {
        isLoaded: !!apiKey, // Simple check for now
        loadError: !apiKey ? new Error('Google Maps API key is required') : null
    };
}

export function useGoogleMapsLoader() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

    const loadGoogleMaps = useMemo(() => {
        return () => {
            if (!apiKey) {
                return Promise.reject(new Error('Google Maps API key is required'));
            }

            // Return a promise that resolves when Google Maps is available
            return new Promise((resolve) => {
                if (window.google && window.google.maps) {
                    resolve(window.google);
                } else {
                    // Wait for Google Maps to load
                    const checkGoogle = () => {
                        if (window.google && window.google.maps) {
                            resolve(window.google);
                        } else {
                            setTimeout(checkGoogle, 100);
                        }
                    };
                    checkGoogle();
                }
            });
        };
    }, [apiKey]);

    return {
        loadGoogleMaps,
        isLoaded: false, // This will be managed by the library
        apiKey
    };
}
