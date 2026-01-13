"use client";

import {
  CleanerActivityHeader,
  ActivityFilters,
  ActivityStats,
  ActivityGrid,
} from "@/components/cleanerActivity";
import "./index.css";
import { 
  Send,
  MapPin,
  PlusCircle,
  Info,
  ChevronDown
} from "lucide-react";

export default function CleanerActivityPage() {
  return (
    <div className="min-h-screen bg-[hsl(var(--muted))]">

      <div className="p-4 md:p-6 lg:p-8">
        <div className="max-w-[1600px] mx-auto space-y-6">

          {/* Page Header */}
          <div className="relative z-10">
            <CleanerActivityHeader />
          </div>

          {/* Filters */}
          <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[var(--radius)] p-4 shadow-sm relative z-20">
            <ActivityFilters />
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Sidebar */}
            <div className="lg:col-span-4 xl:col-span-3 space-y-6 lg:sticky lg:top-28 z-0">

              {/* Stats */}
              <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[var(--radius)] shadow-md">
                <ActivityStats />
              </div>

              {/* Quick Action Log */}
              <div className="bg-white border border-[#CBF3F0] rounded-[24px] overflow-hidden shadow-md">

                {/* Header */}
                <div className="bg-[#CBF3F0] px-5 py-4 border-b border-[#CBF3F0] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PlusCircle size={16} className="text-[#FF9F1C]" />
                    <h3 className="text-[11px] font-black text-[#FF9F1C] uppercase tracking-widest">
                      Quick Action Log
                    </h3>
                  </div>
                  <Info size={14} className="text-[#8A84FF] opacity-50" />
                </div>

                <div className="p-5 space-y-4">

                  {/* Location Node */}
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-tighter ml-1">
                      Location Node
                    </label>
                    <div className="relative">
                      <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-9 py-3 text-[12px] font-bold text-slate-700 outline-none focus:border-[#CBF3F0] appearance-none cursor-pointer">
                        <option>Select Washroom</option>
                        <option>Public Toilet - Zone 1</option>
                      </select>
                      <MapPin
                        size={14}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF9F1C]"
                      />
                      <ChevronDown
                        size={14}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300"
                      />
                    </div>
                  </div>

                  {/* Activity Note */}
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-tighter ml-1">
                      Activity Note
                    </label>
                    <textarea 
                      placeholder="Briefly describe the update..."
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-[12px] font-bold text-slate-700 outline-none focus:border-[#CBF3F0] min-h-[100px] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button className="w-full bg-gradient-to-r from-[#CBF3F0] to-[#CBF3F0] hover:opacity-90 text-white py-3.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95">
                    <Send size={14} />
                    Submit Log
                  </button>

                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-8 xl:col-span-9 relative z-0">
              <ActivityGrid />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
