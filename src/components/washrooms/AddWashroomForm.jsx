"use client";

import { useState } from "react";
import WashroomDetailsForm from "./WashroomDetailsForm";
import LocationInfoSection from "./LocationInfoSection";
import UsageCategory from "./UsageCategory";
import AccessAmenities from "./AccessAmenities";
import AdditionalFeatures from "./AdditionalFeatures";
import LocationImagesUpload from "./LocationImagesUpload";
import AssignCleaners from "./AssignCleaners";
import LocationSearchMap from "./LocationSearchMap";
import { Plus, X, Building2, ClipboardList } from "lucide-react";

export default function AddWashroomForm() {
    const [location, setLocation] = useState({ lat: 21.1458, lng: 79.0882 });

    const handleSubmit = () => {
        const formData = {
            latitude: location.lat,
            longitude: location.lng,
        };
        console.log("Saving Washroom Data:", formData);
        alert(`Location submitted with coordinates: ${location.lat}, ${location.lng}`);
    };

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-10">
            {/* Title Section */}
            <div className="w-full">
                <h1 className="text-2xl font-extrabold tracking-tight text-black">
                    Add New Washroom
                </h1>
            </div>

            {/* 2. Form Layout Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                {/* Left Column: Categories & Features */}
                <div className="space-y-8">
                    {/* Facility Details (Formerly WashroomDetailsForm) */}
                    <WashroomDetailsForm />

                    <div className="card-global">
                        <UsageCategory />
                    </div>

                    {/* Availability Details Card - Using .form-group and standard label tokens */}
                    <div className="card-global">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                            <div className="h-8 w-8 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                                <ClipboardList size={16} className="text-cyan-600 dark:text-cyan-400" />
                            </div>
                            <h3 className="text-xs font-black text-slate-800 dark:text-slate-100 uppercase tracking-widest">
                                Availability Details
                            </h3>
                        </div>

                        <div className="space-y-4 mb-6">
                            <label className="flex items-center gap-3 group cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500/20" />
                                <span className="text-sm font-bold text-slate-600 dark:text-slate-300 group-hover:text-cyan-600 transition-colors">Men's Section Available</span>
                            </label>
                            <label className="flex items-center gap-3 group cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500/20" />
                                <span className="text-sm font-bold text-slate-600 dark:text-slate-300 group-hover:text-cyan-600 transition-colors">Family Room / Gender Neutral</span>
                            </label>
                        </div>

                        <div className="form-group mb-0 text-left">
                            <label className="form-label mb-1.5 ml-1">Additional Metadata</label>
                            <textarea
                                className="form-input min-h-[120px] py-3 pl-4 resize-none"
                                placeholder="Describe specific details about the facility entrance or conditions..."
                            />
                        </div>
                    </div>

                    <div className="card-global">
                        <AccessAmenities />
                    </div>

                    <div className="card-global">
                        <AdditionalFeatures />
                    </div>
                </div>

                {/* Right Column: Map & Personnel */}
                <div className="space-y-8">
                    <LocationSearchMap onLocationChange={setLocation} />

                    <div className="card-global">
                        <LocationInfoSection />
                    </div>

                    <div className="card-global">
                        <LocationImagesUpload />
                    </div>

                    <div className="card-global">
                        <AssignCleaners />
                    </div>
                </div>
            </div>

            {/* 3. Footer Actions - Synchronized with .form-actions and primary CTA tokens */}
            <div className="flex flex-wrap justify-end items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                <button
                    type="button"
                    className="flex items-center gap-2 px-8 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-xs font-black uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95 shadow-sm"
                >
                    <X size={14} strokeWidth={3} />
                    Cancel Creation
                </button>

                <button
                    onClick={handleSubmit}
                    className="btn-gradient-primary px-10 py-3 rounded-xl text-sm font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all uppercase tracking-wider"
                >
                    <Plus size={18} strokeWidth={3} />
                    Initialise Location
                </button>
            </div>
        </div>
    );
}