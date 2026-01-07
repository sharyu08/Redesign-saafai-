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

export default function AddWashroomForm() {
    // State to store coordinates from the Map component
    const [location, setLocation] = useState({ lat: 21.1458, lng: 79.0882 });

    const handleSubmit = () => {
        const formData = {
            latitude: location.lat,
            longitude: location.lng,
        };

        console.log("Saving Washroom Data:", formData);
        alert(`Location submitted with coordinates: ${location.lat}, ${location.lng}`);
    };

    // Shared gradient using primary palette
    const gradientButtonStyle = {
        background: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary-accent)))',
        color: '#FFFFFF'
    };

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-10">
            {/* Title Section */}
            <div className="w-full rounded-[var(--radius)] bg-[hsl(var(--lavender-100))] border border-[hsl(var(--primary)/0.2)] px-8 py-6 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-extrabold tracking-tight text-[hsl(var(--primary-dark))]">
                            Add New Washroom
                        </h1>
                        <p className="mt-1 text-sm font-medium text-[hsl(var(--muted-foreground))]">
                            Enter the facility details, category, and precise coordinates
                        </p>
                    </div>
                </div>
            </div>

            {/* Form Layout Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                {/* Left Column: Categories & Features */}
                <div className="space-y-8">
                    <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[var(--radius)] p-6 shadow-sm">
                        <UsageCategory />
                    </div>

                    {/* Men's Availability Card */}
                    <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[var(--radius)] p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-[hsl(var(--foreground))] mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))]"></span>
                            Availability Details
                        </h3>
                        <div className="space-y-3">
                            <label className="flex items-center gap-3 text-sm font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] cursor-pointer transition-colors">
                                <input type="checkbox" className="w-4 h-4 rounded border-[hsl(var(--border))] text-[hsl(var(--primary))] focus:ring-[hsl(var(--primary))]" />
                                <span>Men's Section Available</span>
                            </label>
                            <label className="flex items-center gap-3 text-sm font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] cursor-pointer transition-colors">
                                <input type="checkbox" className="w-4 h-4 rounded border-[hsl(var(--border))] text-[hsl(var(--primary))] focus:ring-[hsl(var(--primary))]" />
                                <span>Family Room / Gender Neutral</span>
                            </label>
                        </div>
                        <div className="mt-6">
                            <label className="block text-xs font-bold text-[hsl(var(--muted-foreground))] uppercase tracking-wider mb-2 ml-1">
                                Additional Notes
                            </label>
                            <textarea
                                className="w-full px-4 py-3 bg-[hsl(var(--input))] border border-[hsl(var(--border))] rounded-xl text-sm focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent outline-none transition-all min-h-[100px]"
                                placeholder="Describe specific details about the facility entrance or conditions..."
                            />
                        </div>
                    </div>

                    <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[var(--radius)] p-6 shadow-sm">
                        <AccessAmenities />
                    </div>

                    <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[var(--radius)] p-6 shadow-sm">
                        <AdditionalFeatures />
                    </div>
                </div>

                {/* Right Column: Map & Info */}
                <div className="space-y-8">
                    <LocationSearchMap onLocationChange={setLocation} />

                    <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[var(--radius)] p-6 shadow-sm">
                        <LocationInfoSection />
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[var(--radius)] p-6 shadow-sm">
                            <LocationImagesUpload />
                        </div>
                        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[var(--radius)] p-6 shadow-sm">
                            <AssignCleaners />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end items-center gap-4 pt-4 border-t border-[hsl(var(--border))]">
                <button
                    type="button"
                    className="px-8 py-3 rounded-xl border border-[hsl(var(--border))] bg-white text-[hsl(var(--foreground))] text-sm font-bold hover:bg-[hsl(var(--muted))] transition-all active:scale-95"
                >
                    Cancel
                </button>
                <button
                    onClick={handleSubmit}
                    style={gradientButtonStyle}
                    className="px-10 py-3 rounded-xl text-sm font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all uppercase tracking-wider"
                >
                    + Create Location
                </button>
            </div>
        </div>
    );
}