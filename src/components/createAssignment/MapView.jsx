"use client";
import { useEffect, useRef } from "react";
import "./MapView.css";

export default function MapView({ locations = [], selected = [], onToggle }) {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const markersRef = useRef({});

  useEffect(() => {
    // load leaflet css & script if not loaded
    const L_CSS = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    const L_JS = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";

    if (!document.querySelector(`link[href="${L_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = L_CSS;
      document.head.appendChild(link);
    }
    if (!window.L) {
      const script = document.createElement("script");
      script.src = L_JS;
      script.async = true;
      script.onload = initMap;
      document.body.appendChild(script);
    } else {
      initMap();
    }

    function initMap() {
      if (mapRef.current || !mapContainerRef.current) return;
      const L = window.L;
      mapRef.current = L.map(mapContainerRef.current, {
        center: [21.1458, 79.0882],
        zoom: 14,
        scrollWheelZoom: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(mapRef.current);
    }

    return () => {
      // optional cleanup
    };
  }, []);

  useEffect(() => {
    if (!window.L || !mapRef.current) return;
    const L = window.L;

    // remove previous markers
    Object.values(markersRef.current).forEach((m) => m.remove());
    markersRef.current = {};

    locations.forEach((loc) => {
      const lat = loc.lat || 21.1458;
      const lng = loc.lng || 79.0882;
      const isSelected = !!selected.find((s) => s.id === loc.id);
      const color = isSelected ? "green" : "blue";
      const icon = L.divIcon({
        className: "custom-pin",
        html: `<div class="${isSelected ? 'map-marker-selected' : 'map-marker-unselected'}""></div>`,
        iconSize: [18, 18],
        iconAnchor: [9, 9],
      });

      const marker = L.marker([lat, lng], { icon }).addTo(mapRef.current);
      marker.on("click", () => onToggle(loc));
      marker.bindPopup(`<strong>${loc.name}</strong><div class="text-xs">${loc.ward || ""}</div>`);
      markersRef.current[loc.id] = marker;
    });
  }, [locations, selected, onToggle]);

  return <div ref={mapContainerRef} className="map-container-full-size" />;
}
