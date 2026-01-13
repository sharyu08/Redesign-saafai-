"use client";

import { useMemo, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useResponsive } from "@/hooks/useResponsive";
import WashroomHeader from "../../../../components/washroommain/WashroomHeader";
import WashroomFilters from "../../../../components/washroommain/WashroomFilters";
import WashroomCards from "../../../../components/washroommain/WashroomCards";
import { WASHROOMS } from "../../../../components/washroommain/data";
import "./index.css";

export default function WashroomsMobilePage() {
    const router = useRouter();
    const pathname = usePathname();
    const { isMobile } = useResponsive();
    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("all");
    const [companyFilter, setCompanyFilter] = useState("all");
    const [ratingFilter, setRatingFilter] = useState("all");
    const [assignmentFilter, setAssignmentFilter] = useState("all");

    // Redirect desktop users to desktop page
    useEffect(() => {
        if (!isMobile && pathname === "/dashboard/washrooms/mobile") {
            router.replace("/dashboard/washrooms");
        }
    }, [isMobile, pathname, router]);

    const filtered = useMemo(() => {
        return WASHROOMS.filter((w) => {
            const q = search.trim().toLowerCase();
            if (q && !w.name.toLowerCase().includes(q) && !w.location_types.name.toLowerCase().includes(q)) return false;
            if (typeFilter !== "all" && w.location_types.name !== typeFilter) return false;
            if (companyFilter !== "all" && w.facility_companies?.name !== companyFilter) return false;
            if (ratingFilter === "8plus" && w.averageRating < 8) return false;
            if (ratingFilter === "9plus" && w.averageRating < 9) return false;

            const isAssigned = w.cleaner_assignments.some(a => a.status === "assigned");
            if (assignmentFilter === "assigned" && !isAssigned) return false;
            if (assignmentFilter === "unassigned" && isAssigned) return false;

            return true;
        });
    }, [search, typeFilter, companyFilter, ratingFilter, assignmentFilter]);

    const handleClearFilters = () => {
        setSearch("");
        setTypeFilter("all");
        setCompanyFilter("all");
        setRatingFilter("all");
        setAssignmentFilter("all");
    };

    return (
        <div className="min-h-screen bg-white dark:bg-background pb-12 transition-colors duration-300">
            <div className="max-w-full mx-auto p-4 space-y-4">
                {/* Header Section */}
                <div className="z-20">
                    <WashroomHeader />
                </div>

                {/* Filter Card */}
                <div className="bg-white dark:bg-card border border-slate-100 dark:border-border rounded-[24px] p-4 shadow-sm">
                    <WashroomFilters
                        search={search}
                        onSearchChange={setSearch}
                        typeFilter={typeFilter}
                        onTypeFilterChange={setTypeFilter}
                        companyFilter={companyFilter}
                        onCompanyFilterChange={setCompanyFilter}
                        ratingFilter={ratingFilter}
                        onRatingFilterChange={setRatingFilter}
                        assignmentFilter={assignmentFilter}
                        onAssignmentFilterChange={setAssignmentFilter}
                        onClear={handleClearFilters}
                    />
                </div>

                {/* Cards Container */}
                <div className="relative group">
                    <div className="relative bg-white dark:bg-card rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-slate-100 dark:border-border">
                        <div className="p-4">
                            <WashroomCards items={filtered} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
