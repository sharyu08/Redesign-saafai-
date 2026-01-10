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
                        <LocationInfoSection />
                    </div>



                    <div className="card-global">
                        <UsageCategory />
                    </div>

                    {/* Availability Details Card - Using .form-group and standard label tokens */}


                    <div className="card-global">
                        <AccessAmenities />
                    </div>


                </div>

                {/* Right Column: Map & Personnel */}
                <div className="space-y-8">
                    <LocationSearchMap onLocationChange={setLocation} />



                    <div className="card-global">
                        <LocationImagesUpload />
                    </div>

                    <div className="card-global">
                        <AssignCleaners />
                    </div>

                    <div className="card-global">
                        <AdditionalFeatures />
                    </div>
                </div>
            </div>

            {/* 3. Footer Actions - Synchronized with .form-actions and primary CTA tokens */}
            <div className="flex flex-wrap justify-end items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                <button
                    type="button"
                    className="flex items-center gap-2 px-8 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-xs font-black uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95 shadow-sm"
                >
                    Cancel
                </button>

                <button
                    onClick={handleSubmit}
                    className="btn-gradient-primary px-10 py-3 rounded-xl text-sm font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all uppercase tracking-wider"
                >

                    Add Washroom
                </button>
            </div>
        </div>
    );
}