"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SaafAIMap from "@/components/map/SaafAIMap";
import { Search, MapPin, Info, ArrowLeft } from "lucide-react";
import Link from "next/link";

function MapContent() {
  const searchParams = useSearchParams();
  const zoneIdFilter = searchParams.get("zoneId");

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 px-6 py-4 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-700 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 max-w-[1800px] mx-auto">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard/locationHierarchy"
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-slate-600 dark:text-slate-300 transition-colors"
            >
              <ArrowLeft size={20} strokeWidth={2.5} />
            </Link>
            <div>
              <h1 className="text-xl font-black text-[hsl(var(--primary-dark))] dark:text-[hsl(var(--primary))] uppercase tracking-tight flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-[#CBF3F0] to-[#FFBF69] dark:from-[#0f172a] dark:to-[#1e293b] rounded-lg">
                  <MapPin className="text-[#FF9F1C] dark:text-blue-400" size={20} strokeWidth={2.5} />
                </div>
                <span>Locate on Map</span>
              </h1>
            </div>
          </div>

          {/* Right Side: Search and Zone Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            {zoneIdFilter && (
              <div className="mt-2 flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-full w-fit">
                <Info size={14} className="text-blue-500 dark:text-blue-400" />
                <span className="text-xs font-bold text-blue-600 dark:text-blue-300 uppercase tracking-wider">
                  Viewing Zone ID: {zoneIdFilter}
                </span>
              </div>
            )}

            {/* Search Input */}
            <div className="relative w-full max-w-xl group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={18} className="text-slate-400 group-focus-within:text-[#FF9F1C] transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search specific washrooms in this view..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:ring-2 focus:ring-[#FF9F1C]/20 focus:border-[#FF9F1C] transition-all shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-1 relative bg-slate-50 dark:bg-slate-900 map-container-height">
        <SaafAIMap
          selectedLocation={selectedLocation}
          onSelectLocation={setSelectedLocation}
          searchText={searchText}
          zoneIdFilter={zoneIdFilter}
        />
      </div>
    </div>
  );
}

export default function LocatePage() {
  return (
    <Suspense fallback={
      <div className="h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-900">
        <div className="h-12 w-12 border-4 border-blue-100 dark:border-slate-700 border-t-[#FF9F1C] rounded-full animate-spin mb-4" />
        <p className="font-black text-[#FF9F1C] dark:text-blue-400 uppercase tracking-[0.3em] text-xs">
          Loading Map...
        </p>
      </div>
    }>
      <MapContent />
    </Suspense>
  );
}