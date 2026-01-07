"use client";

import { useState } from "react";
import LocationHeader from "@/components/locationHierarchy/LocationHeader";
import LocationTable from "@/components/locationHierarchy/LocationTable";
import { Search, Plus, SlidersHorizontal } from "lucide-react";

export default function LocationHierarchyPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-white dark:bg-background pb-12 transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto p-4 md:p-8 flex flex-col gap-6">

        {/* Header */}
        <div className="z-20">
          <LocationHeader />
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

          {/* Search */}
          <div className="relative w-full lg:max-w-md group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search size={18} className="text-slate-400 group-focus-within:text-[#FF9F1C]" />
            </div>
            <input
              type="text"
              placeholder="Search zones or locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-[#FF9F1C]/10 focus:border-[#FF9F1C] shadow-sm"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-row items-center gap-3 w-full lg:w-auto">

            {/* Filter */}
            <button className="flex flex-1 lg:flex-none items-center justify-center gap-2 px-5 py-3.5 bg-white border border-slate-200 rounded-2xl text-[#FF9F1C] text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 shadow-sm active:scale-95">
              <SlidersHorizontal size={14} strokeWidth={3} />
              <span className="hidden sm:inline">Filter</span>
            </button>

            {/* Add New Zone */}
            <button className="btn btn-primary flex-[2] lg:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg active:scale-95 transition-all text-white">
              <Plus size={16} strokeWidth={3} className="text-white" />
              <span className="whitespace-nowrap text-white">Add New Zone</span>
            </button>

          </div>
        </div>

        {/* Table */}
        <div className="relative group">

          <div className="relative bg-white rounded-[24px] md:rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden">
            <div className="p-1 overflow-x-auto">
              <LocationTable searchTerm={searchQuery} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 gap-2 mt-2">
          <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
            Data Integrity Verified
          </p>
          <div className="flex items-center gap-2 text-[10px] font-black text-[#FF9F1C] uppercase tracking-widest opacity-80">
            <span>System Stable</span>
            <div className="h-1.5 w-1.5 rounded-full bg-[#28C76F]" />
          </div>
        </div>

      </div>
    </div>
  );
}
