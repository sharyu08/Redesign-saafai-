"use client";

import LocationHeader from "@/components/locationHierarchy/LocationHeader";
import LocationTable from "@/components/locationHierarchy/LocationTable";

export default function LocationHierarchyPage() {
    return (
        <div className="theme-saas min-h-screen p-6 space-y-6">
            <LocationHeader />
            <LocationTable />
        </div>
    );
}
