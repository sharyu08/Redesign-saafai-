"use client";

import { useState } from "react";
import LocationSearchMap from "./LocationSearchMap";
import UsageCategory from "./UsageCategory";
import LocationInfoSection from "./LocationInfoSection";
import LocationImagesUpload from "./LocationImagesUpload";
import { Building2, Map as MapIcon, Info, MapPin, Home, Image as ImageIcon, ExternalLink } from "lucide-react";

export default function EditWashroomForm() {
  const [location, setLocation] = useState({ lat: 21.1458, lng: 79.0882 });

  const handleSave = () => {
    const payload = {
      ...location,
      // other form fields would be gathered here
    };
    console.log("Save washroom payload:", payload);
    alert("Washroom changes saved successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      {/* Main Form Container */}
      <div className="rounded-[var(--radius)] border border-[hsl(var(--border))] bg-white shadow-sm overflow-hidden">

        {/* Themed Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-[hsl(var(--lavender-100))] border-b border-[hsl(var(--primary)/0.2)] px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <MapPin className="h-5 w-5 text-[hsl(var(--primary))]" />
            </div>
            <div>
              <h1 className="text-lg font-extrabold tracking-tight text-[hsl(var(--primary-dark))] uppercase">
                Edit Washroom Facility
              </h1>
              <p className="text-xs font-medium text-[hsl(var(--muted-foreground))]">
                Update location details, amenities, and facility metadata
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-white border border-[hsl(var(--primary)/0.2)] px-4 py-2 text-xs font-bold text-[hsl(var(--primary-dark))] hover:bg-[hsl(var(--lavender-200))] transition shadow-sm active:scale-95">
            <ExternalLink className="h-3.5 w-3.5" />
            View Live
          </button>
        </div>

        <div className="p-6 space-y-10">

          {/* Section: Facility assignment */}
          <div className="space-y-4">
            <label className="text-xs font-black uppercase tracking-widest text-[hsl(var(--muted-foreground))] flex items-center gap-2 ml-1">
              <Building2 className="h-4 w-4 text-[hsl(var(--primary))]" />
              Facility Company Assignment
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="w-full px-4 py-2.5 bg-[hsl(var(--input))] border border-[hsl(var(--border))] rounded-xl text-sm focus:ring-2 focus:ring-[hsl(var(--primary))] outline-none" placeholder="Assigned Company Name" />
              <select className="w-full px-4 py-2.5 bg-[hsl(var(--input))] border border-[hsl(var(--border))] rounded-xl text-sm focus:ring-2 focus:ring-[hsl(var(--primary))] outline-none appearance-none cursor-pointer">
                <option>Change Facility Company</option>
                <option>Cleaning Pros Ltd</option>
                <option>Urban Hygiene Co</option>
              </select>
            </div>
          </div>

          {/* Section: Location hierarchy */}
          <div className="space-y-4">
            <label className="text-xs font-black uppercase tracking-widest text-[hsl(var(--muted-foreground))] flex items-center gap-2 ml-1">
              <MapIcon className="h-4 w-4 text-[hsl(var(--primary))]" />
              Location Hierarchy
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="w-full px-4 py-2.5 bg-[hsl(var(--input))] border border-[hsl(var(--border))] rounded-xl text-sm focus:ring-2 focus:ring-[hsl(var(--primary))] outline-none" placeholder="Inspection Area Name" />
              <select className="w-full px-4 py-2.5 bg-[hsl(var(--input))] border border-[hsl(var(--border))] rounded-xl text-sm focus:ring-2 focus:ring-[hsl(var(--primary))] outline-none appearance-none cursor-pointer">
                <option>Select Location Type</option>
                <option>Public Park</option>
                <option>Metro Station</option>
                <option>Market Area</option>
              </select>
            </div>
          </div>

          {/* Section: Basic info */}
          <div className="space-y-4">
            <label className="text-xs font-black uppercase tracking-widest text-[hsl(var(--muted-foreground))] flex items-center gap-2 ml-1">
              <Info className="h-4 w-4 text-[hsl(var(--primary))]" />
              Basic Information
            </label>
            <input className="w-full px-4 py-2.5 bg-[hsl(var(--input))] border border-[hsl(var(--border))] rounded-xl text-sm focus:ring-2 focus:ring-[hsl(var(--primary))] outline-none font-semibold" placeholder="Display Name of Washroom" />
          </div>

          {/* Section: Location coordinates + map */}
          <div className="space-y-4">
            <label className="text-xs font-black uppercase tracking-widest text-[hsl(var(--muted-foreground))] flex items-center gap-2 ml-1">
              <MapPin className="h-4 w-4 text-[hsl(var(--primary))]" />
              Geographical Placement
            </label>
            <div className="rounded-2xl border border-[hsl(var(--border))] overflow-hidden shadow-inner">
              <LocationSearchMap onLocationChange={setLocation} />
            </div>
          </div>

          <UsageCategory />

          {/* Section: Address details */}
          <div className="space-y-4">
            <label className="text-xs font-black uppercase tracking-widest text-[hsl(var(--muted-foreground))] flex items-center gap-2 ml-1">
              <Home className="h-4 w-4 text-[hsl(var(--primary))]" />
              Physical Address Details
            </label>
            <div className="bg-[hsl(var(--lavender-200))] p-4 rounded-2xl border border-[hsl(var(--primary)/0.1)]">
              <LocationInfoSection />
            </div>
          </div>

          {/* Section: Images */}
          <div className="space-y-4">
            <label className="text-xs font-black uppercase tracking-widest text-[hsl(var(--muted-foreground))] flex items-center gap-2 ml-1">
              <ImageIcon className="h-4 w-4 text-[hsl(var(--primary))]" />
              Facility Media & Photos
            </label>
            <LocationImagesUpload />
          </div>
        </div>
      </div>

      {/* Footer actions */}
      <div className="flex justify-end items-center gap-4 pt-4 border-t border-[hsl(var(--border))]">
        <button className="px-8 py-3 rounded-xl border border-[hsl(var(--border))] bg-white text-[hsl(var(--foreground))] text-sm font-bold hover:bg-[hsl(var(--muted))] transition-all active:scale-95">
          Discard Changes
        </button>
        <button
          onClick={handleSave}
          className="px-10 py-3 rounded-xl bg-[hsl(var(--primary))] text-white text-sm font-bold shadow-[0_4px_14px_0_rgba(45,183,196,0.39)] hover:brightness-110 active:scale-95 transition-all"
        >
          Save All Changes
        </button>
      </div>
    </div>
  );
}