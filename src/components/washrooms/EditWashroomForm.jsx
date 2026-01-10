"use client";

import { useState } from "react";
import LocationSearchMap from "./LocationSearchMap";
// Import refined modular components
import UsageCategory from "./UsageCategory";
import LocationInfoSection from "./LocationInfoSection";
import LocationImagesUpload from "./LocationImagesUpload";
import WashroomDetailsForm from "./WashroomDetailsForm";
import AccessAmenities from "./AccessAmenities"; // This is the Gender selection
import AdditionalFeatures from "./AdditionalFeatures";

import {
  Building2,
  Map as MapIcon,
  MapPin,
  Home,
  Image as ImageIcon,
  ExternalLink,
  Save,
  X,
  Settings2,
  Users
} from "lucide-react";

export default function EditWashroomForm() {
  const [location, setLocation] = useState({ lat: 21.1458, lng: 79.0882 });

  const handleSave = () => {
    const payload = {
      ...location,
    };
    console.log("Save washroom payload:", payload);
    alert("Washroom changes saved successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      {/* 1. Main Form Container */}
      <div className="card-global p-0 overflow-hidden bg-white dark:bg-slate-900 shadow-xl border-slate-100">

        {/* Themed Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 px-8 py-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-800">
              <MapPin className="h-6 w-6 text-cyan-600 dark:text-cyan-400" strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <h1 className="text-sm md:text-base font-black text-slate-800 dark:text-white uppercase tracking-[0.2em] leading-none">
                Edit Washroom Facility
              </h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 opacity-70">
                Update location details, amenities, and facility metadata
              </p>
            </div>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 transition-all hover:bg-slate-50 active:scale-95 shadow-sm">
            <ExternalLink className="h-3.5 w-3.5 text-cyan-500" />
            View Live
          </button>
        </div>

        <div className="p-8 space-y-12">

          {/* Section: Facility Architecture (Naked Component) */}
          <div className="space-y-6">
            <WashroomDetailsForm />
          </div>

          {/* Section: Gender Availability & Usage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <AccessAmenities /> {/* Gender Selection */}
            </div>
            <div className="space-y-4">
              <UsageCategory />
            </div>
          </div>

          {/* Section: Additional Features (Checklist) */}
          <div className="space-y-6">
            <AdditionalFeatures />
          </div>

          {/* Section: Location coordinates + map */}
          <div className="space-y-6">
            <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2 ml-1">
              <MapPin className="h-4 w-4 text-cyan-500" />
              Geographical Placement
            </label>
            <div className="rounded-[32px] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-inner bg-slate-50/30 dark:bg-slate-900/50 p-1">
              <LocationSearchMap onLocationChange={setLocation} />
            </div>
          </div>

          {/* Section: Address details */}
          <div className="space-y-6">
            <LocationInfoSection />
          </div>

          {/* Section: Images */}
          <div className="space-y-6">
            <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2 ml-1">
              <ImageIcon className="h-4 w-4 text-cyan-500" />
              Facility Media & Photos
            </label>
            <LocationImagesUpload />
          </div>
        </div>
      </div>

      {/* Footer actions */}
      <div className="flex flex-wrap justify-end items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
        <button className="flex items-center gap-2 px-8 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-xs font-black uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95 shadow-sm">
          <X size={14} strokeWidth={3} />
          Discard Changes
        </button>

        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-10 py-4 rounded-xl bg-cyan-500 text-white text-[13px] font-black uppercase tracking-[0.15em] shadow-lg shadow-cyan-500/20 hover:bg-cyan-600 hover:scale-[1.02] active:scale-95 transition-all"
        >
          <Save size={18} strokeWidth={3} />
          Save Facility Update
        </button>
      </div>
    </div>
  );
}