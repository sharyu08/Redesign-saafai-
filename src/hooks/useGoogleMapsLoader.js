"use client";

import { useMemo } from 'react';

// Global Google Maps loader to prevent multiple API loads
let googleMapsPromise = null;
let isGoogleMapsLoaded = false;

export function useGoogleMapsLoader() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

    const loadGoogleMaps = useMemo(() => {
        return () => {
            if (isGoogleMapsLoaded) {
                return Promise.resolve(window.google);
            }

            if (!googleMapsPromise) {
                googleMapsPromise = new Promise((resolve, reject) => {
                    if (!apiKey) {
                        reject(new Error('Google Maps API key is required'));
                        return;
                    }

                    // Check if Google Maps is already loaded
                    if (window.google && window.google.maps) {
                        isGoogleMapsLoaded = true;
                        resolve(window.google);
                        return;
                    }

                    // Create script element
                    const script = document.createElement('script');
                    script.async = true;
                    script.defer = true;
                    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;

                    script.onload = () => {
                        isGoogleMapsLoaded = true;
                        resolve(window.google);
                    };

                    script.onerror = () => {
                        reject(new Error('Failed to load Google Maps API'));
                    };

                    document.head.appendChild(script);
                });
            }

            return googleMapsPromise;
        };
    }, [apiKey]);

    return {
        loadGoogleMaps,
        isLoaded: isGoogleMapsLoaded,
        apiKey
    };
}

// Hook for @react-google-maps/api compatibility
export function useJsApiLoader({ googleMapsApiKey, libraries = [], id }) {
    const { loadGoogleMaps, isLoaded, apiKey } = useGoogleMapsLoader();

    return {
        isLoaded,
        loadError: !apiKey ? new Error('Google Maps API key is required') : null
    };
}
