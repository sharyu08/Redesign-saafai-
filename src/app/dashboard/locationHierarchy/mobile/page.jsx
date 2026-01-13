"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useResponsive } from "@/hooks/useResponsive";
import LocationHeader from "@/components/locationHierarchy/LocationHeader";
import LocationCards from "@/components/locationHierarchy/LocationCards";
import { LOCATION_DATA } from "@/components/locationHierarchy/data";
import { Search } from "lucide-react";
import "./index.css";

export default function LocationHierarchyMobilePage() {
    const router = useRouter();
    const pathname = usePathname();
    const { isMobile } = useResponsive();
    const [searchQuery, setSearchQuery] = useState("");
    const [locationData, setLocationData] = useState(LOCATION_DATA);

    // Redirect desktop users to desktop page
    useEffect(() => {
        if (!isMobile && pathname === "/dashboard/locationHierarchy/mobile") {
            router.replace("/dashboard/locationHierarchy");
        }
    }, [isMobile, pathname, router]);

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this zone?")) {
            const updatedData = locationData.filter((item) => item.id !== id);
            setLocationData(updatedData);
        }
    };

    const filtered = locationData.filter((loc) => {
        if (!searchQuery.trim()) return true;
        const query = searchQuery.toLowerCase();
        return loc.name.toLowerCase().includes(query);
    });

    return (
        <div className="min-h-screen bg-white dark:bg-background pb-12 transition-colors duration-300">
            <div className="max-w-full mx-auto p-4 flex flex-col gap-4">
                {/* Header */}
                <div className="z-20">
                    <LocationHeader />
                </div>

                {/* Search */}
                <div className="relative w-full group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search size={18} className="text-slate-400 group-focus-within:text-[#FF9F1C]" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search zones or locations..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="block w-full pl-11 pr-4 py-3.5 bg-white dark:bg-card border border-slate-200 dark:border-border rounded-2xl text-sm font-bold text-slate-700 dark:text-foreground placeholder:text-slate-300 dark:placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-[#FF9F1C]/10 focus:border-[#FF9F1C] shadow-sm"
                    />
                </div>

                {/* Cards */}
                <div className="relative group">
                    <div className="relative bg-white dark:bg-card rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 dark:border-border overflow-hidden">
                        <div className="p-4">
                            <LocationCards items={filtered} onDelete={handleDelete} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
