"use client";

import { useMemo, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useResponsive } from "@/hooks/useResponsive";
import WashroomHeader from "../../../../components/washroommain/WashroomHeader";
import WashroomFilters from "../../../../components/washroommain/WashroomFilters";
import WashroomCards from "../../../../components/washroommain/WashroomCards";
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
    const [washrooms, setWashrooms] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch washroom data from API
    useEffect(() => {
        const fetchWashrooms = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://dash-backend-five.vercel.app/api/locations/saafai_locations?companyId=26');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                if (Array.isArray(data)) {
                    // Transform API data to match the expected structure for the cards
                    const transformedWashrooms = data.map(washroom => ({
                        id: washroom.id,
                        name: washroom.name || 'Unnamed Washroom',
                        address: washroom.address || 'No address',
                        latitude: washroom.latitude,
                        longitude: washroom.longitude,
                        status: washroom.status || 'active',
                        type: washroom.type || 'WASHROOM',
                        averageRating: washroom.averageRating || 0,
                        ratingCount: washroom.ratingCount || 0,
                        is_public: washroom.is_public !== false,
                        created_at: washroom.created_at,
                        location_types: {
                            name: washroom.type || 'WASHROOM'
                        },
                        facility_companies: {
                            name: washroom.company_id ? `Company ${washroom.company_id}` : 'Default Company'
                        },
                        cleaner_assignments: washroom.cleaner_assignments || [],
                        options: washroom.options || {},
                        images: washroom.images || []
                    }));

                    setWashrooms(transformedWashrooms);
                } else {
                    console.error('Invalid API response structure:', data);
                    setWashrooms([]);
                }
            } catch (error) {
                console.error('Error fetching washrooms:', error);
                setWashrooms([]);
            } finally {
                setLoading(false);
            }
        };

        fetchWashrooms();
    }, []);

    // Redirect desktop users to desktop page
    useEffect(() => {
        if (!isMobile && pathname === "/dashboard/washrooms/mobile") {
            router.replace("/dashboard/washrooms");
        }
    }, [isMobile, pathname, router]);

    const filtered = useMemo(() => {
        return washrooms.filter((w) => {
            const q = search.trim().toLowerCase();
            if (q && !w.name.toLowerCase().includes(q) && !w.location_types.name.toLowerCase().includes(q)) return false;
            if (typeFilter !== "all" && w.location_types.name !== typeFilter) return false;
            if (companyFilter !== "all" && w.facility_companies?.name !== companyFilter) return false;
            if (ratingFilter === "8plus" && w.averageRating < 8) return false;
            if (ratingFilter === "9plus" && w.averageRating < 9) return false;

            const isAssigned = w.cleaner_assignments && w.cleaner_assignments.some && w.cleaner_assignments.some(a => a.status === "assigned");
            if (assignmentFilter === "assigned" && !isAssigned) return false;
            if (assignmentFilter === "unassigned" && isAssigned) return false;

            return true;
        });
    }, [washrooms, search, typeFilter, companyFilter, ratingFilter, assignmentFilter]);

    const handleClearFilters = () => {
        setSearch("");
        setTypeFilter("all");
        setCompanyFilter("all");
        setRatingFilter("all");
        setAssignmentFilter("all");
    };

    return (
        <div className="min-h-screen bg-white dark:bg-background pb-12 transition-colors duration-300">
            <div className="max-w-full mx-auto px-3 sm:px-4 lg:px-6 space-y-3 sm:space-y-4 lg:space-y-6">
                {/* Header Section */}
                <div className="z-20">
                    <WashroomHeader />
                </div>

                {/* Filter Card */}
                <div className="bg-white dark:bg-card border border-slate-100 dark:border-border rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-3 sm:p-4 lg:p-5 shadow-sm">
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

                {/* Cards Container - Loading State */}
                {loading ? (
                    <div className="flex items-center justify-center py-12">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                            <p className="mt-2 text-gray-600">Loading washrooms...</p>
                        </div>
                    </div>
                ) : (
                    <div className="relative group">
                        <div className="relative bg-white dark:bg-card rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-slate-100 dark:border-border">
                            <div className="p-3 sm:p-4 lg:p-5">
                                <WashroomCards items={filtered} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
