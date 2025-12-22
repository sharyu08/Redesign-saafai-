"use client";

import {
  CleanerActivityHeader,
  ActivityFilters,
  ActivityStats,
  ActivityGrid,
} from "@/components/cleanerActivity";

export default function CleanerActivityPage() {
  return (
    // Uses your global --muted color for the page background
    <div className="min-h-screen bg-[hsl(var(--muted))] p-6 space-y-8">

      {/* Header section wrapped in the themed container if not already styled */}
      <div className="max-w-full mx-auto space-y-6">

        <CleanerActivityHeader />

        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[var(--radius)] p-4 shadow-sm">
          <ActivityFilters />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* LEFT: Stats card utilizing theme radius and card colors */}
          <div className="w-full lg:w-[340px] shrink-0 lg:sticky lg:top-8">
            <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[var(--radius)] shadow-md overflow-hidden">
              <ActivityStats />
            </div>
          </div>

          {/* RIGHT: Main Activity List */}
          <div className="flex-1 w-full">
            <div className="bg-transparent rounded-[var(--radius)]">
              <ActivityGrid />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}