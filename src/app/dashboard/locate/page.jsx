"use client";

import { useState } from "react";
import SaafAIMap from "@/components/map/SaafAIMap";

export default function LocateOnMapPage() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-white">

      {/* HEADER */}
      <div className="px-6 py-4 border-b">
        <h1 className="text-xl font-semibold">Washroom Map</h1>

        <input
          type="text"
          placeholder="Search toilets by name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="
            mt-3 w-full max-w-xl
            border border-gray-300
            px-4 py-2 rounded-md
            focus:ring-2 focus:ring-primary
            outline-none
          "
        />
      </div>

      {/* MAP (info panel lives INSIDE this) */}
      <div className="relative flex-1">
        <SaafAIMap
          selectedLocation={selectedLocation}
          onSelectLocation={setSelectedLocation}
          searchText={searchText}
        />
      </div>
    </div>
  );
}
