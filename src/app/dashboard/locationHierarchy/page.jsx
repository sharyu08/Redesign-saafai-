"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useResponsive } from "@/hooks/useResponsive";
import "./index.css";
import LocationHeader from "@/components/locationHierarchy/LocationHeader";
import LocationTable from "@/components/locationHierarchy/LocationTable";
import { Search, Plus, SlidersHorizontal } from "lucide-react";

export default function LocationHierarchyPage() {
  const router = useRouter();
  const pathname = usePathname();
  const { isMobile } = useResponsive();
  const [searchQuery, setSearchQuery] = useState("");

  // Redirect mobile users to mobile page
  useEffect(() => {
    if (isMobile && pathname === "/dashboard/locationHierarchy") {
      router.replace("/dashboard/locationHierarchy/mobile");
    }
  }, [isMobile, pathname, router]);

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


        </div>

        {/* Table */}
        <div className="relative group">

          <div className="relative bg-white dark:bg-card rounded-[24px] md:rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 dark:border-border overflow-hidden">
            <div className="p-1 table-wrapper-responsive">
              <LocationTable searchTerm={searchQuery} />
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
