"use client";

import { useMemo, useState } from "react";
import WashroomHeader from "../../../components/washroommain/WashroomHeader";
import WashroomFilters from "../../../components/washroommain/WashroomFilters";
import WashroomTable from "../../../components/washroommain/WashroomTable";

const WASHROOMS = [
  { id: 1, name: "Abhyankar Nagar Garden", zone: "Dharampeth Zone", type: "Public Toilet", score: 7, rating: 8.7, cleaner: "Nikhil Tupkar", facility: "N/A", status: "Inactive", assigned: false, lat: 21.1458, lng: 79.0882 },
  { id: 2, name: "Ambazari Dahan Ghat", zone: "Dharampeth Zone", type: "Public Toilet", score: 8.9, rating: 8.7, cleaner: "Raju Choudhary", facility: "N/A", status: "Active", assigned: true, lat: 21.152, lng: 79.094 },
  { id: 3, name: "Budhwar Bazaar", zone: "Nehru Nagar Zone", type: "Community Toilet", score: 8.5, rating: 8.9, cleaner: "Ankit Choudhary", facility: "N/A", status: "Active", assigned: true, lat: 21.16, lng: 79.086 },
  { id: 4, name: "Central Park", zone: "Nehru Nagar Zone", type: "Public Toilet", score: 9.1, rating: 9.0, cleaner: "Suresh Mane", facility: "N/A", status: "Inactive", assigned: false, lat: 21.147, lng: 79.09 },
  { id: 5, name: "Hanuman Tekdi", zone: "Dharampeth Zone", type: "Community Toilet", score: 7.8, rating: 8.2, cleaner: "Ramesh Jadhav", facility: "N/A", status: "Active", assigned: true, lat: 21.143, lng: 79.0855 },
];

export default function WashroomsPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [companyFilter, setCompanyFilter] = useState("all");
  const [ratingFilter, setRatingFilter] = useState("all");
  const [assignmentFilter, setAssignmentFilter] = useState("all");

  const filtered = useMemo(() => {
    return WASHROOMS.filter((w) => {
      const q = search.trim().toLowerCase();
      if (q && !w.name.toLowerCase().includes(q) && !w.zone.toLowerCase().includes(q)) return false;
      if (typeFilter !== "all" && w.type !== typeFilter) return false;
      if (companyFilter !== "all" && w.facility !== companyFilter) return false;
      if (ratingFilter === "8plus" && w.rating < 8) return false;
      if (ratingFilter === "9plus" && w.rating < 9) return false;
      if (assignmentFilter === "assigned" && !w.assigned) return false;
      if (assignmentFilter === "unassigned" && w.assigned) return false;
      return true;
    });
  }, [search, typeFilter, companyFilter, ratingFilter, assignmentFilter]);

  const handleClearFilters = () => {
    setSearch(""); setTypeFilter("all"); setCompanyFilter("all"); setRatingFilter("all"); setAssignmentFilter("all");
  };

  return (
    // Background uses your global CSS muted color
    <div className="min-h-screen bg-[hsl(var(--muted))] p-6">
      {/* Container expanded to full width */}
      <div className="max-w-full mx-auto space-y-6">

        <WashroomHeader />

        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[var(--radius)] p-4 shadow-sm">
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

        {/* Table container takes full horizontal space */}
        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[var(--radius)] shadow-md overflow-hidden">
          <WashroomTable items={filtered} />
        </div>

      </div>
    </div>
  );
}