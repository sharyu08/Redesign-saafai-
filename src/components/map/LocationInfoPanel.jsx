"use client";

import {
  X,
  History,
  Accessibility,
  Star,
  User,
  Clock,
  MapPin,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import LocationStats from "./LocationStats";
import AmenitiesList from "./AmenitiesList";
import ReviewsList from "./ReviewsList";

export default function LocationInfoPanel({ location, onClose }) {
  if (!location) return null;

  return (
    <>
      {/* OVERLAY - Dims map when drawer is open */}
      <div
        className="absolute inset-0 bg-slate-900/20 backdrop-blur-[2px] z-40 transition-opacity"
        onClick={onClose}
      />

      {/* RIGHT-SIDE DRAWER CONTAINER */}
      <div
        className="
          absolute top-0 right-0 h-full w-full sm:w-[400px]
          bg-white dark:bg-slate-900 shadow-2xl
          z-50 flex flex-col border-l border-slate-100 dark:border-slate-800
          animate-in slide-in-from-right duration-300
        "
      >
        {/* COMPACT HEADER */}
        <div className="px-5 py-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm">
                <MapPin className="w-4 h-4 text-orange-500" />
              </div>
              <div>
                <h2 className="text-base font-black text-slate-800 dark:text-white leading-none uppercase tracking-tight">
                  {location.name}
                </h2>
                <p className="text-[10px] font-bold text-slate-400 mt-1 line-clamp-1 uppercase tracking-wider">
                  {location.address}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-red-500 transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Micro Stat Pills */}
          <div className="flex flex-wrap gap-2">
            <StatPill>
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span>{location.rating || "4.8"}</span>
            </StatPill>
            <StatPill>
              <Clock className="w-3 h-3 text-cyan-500" />
              <span>5 MIN AWAY</span>
            </StatPill>
          </div>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar bg-white dark:bg-slate-900">

          {/* 1. Availability Section */}
          <section className="space-y-4">
            <SectionTitle icon={<Accessibility className="w-4 h-4 text-cyan-500" />}>
              FACILITY AVAILABILITY
            </SectionTitle>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Men", available: location.availability?.mens },
                { label: "Women", available: location.availability?.womens },
                { label: "Disabled", available: location.availability?.disabled },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`
                    p-3 rounded-2xl text-center border transition-all
                    ${item.available
                      ? "bg-cyan-50/50 border-cyan-100 dark:bg-cyan-500/5 dark:border-cyan-500/20"
                      : "bg-slate-50 border-slate-100 dark:bg-slate-800/50 dark:border-slate-700 opacity-40"}
                  `}
                >
                  <User className={`w-5 h-5 mx-auto mb-1.5 ${item.available ? "text-cyan-600" : "text-slate-400"}`} />
                  <p className={`text-[10px] font-black uppercase tracking-tighter ${item.available ? "text-cyan-900 dark:text-cyan-100" : "text-slate-400"}`}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Stats Section */}
          <div className="card-global p-4 bg-slate-50/50 dark:bg-slate-800/30 border-slate-100 dark:border-slate-800">
            <LocationStats location={location} />
          </div>

          {/* 3. Recent Activity Section */}
          {location.cleaningHistory?.length > 0 && (
            <section className="space-y-4">
              <SectionTitle icon={<History className="w-4 h-4 text-cyan-500" />}>
                CLEANING LOGS
              </SectionTitle>
              <div className="space-y-2">
                {location.cleaningHistory.map((log, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="h-8 w-8 rounded-full bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center">
                      <User className="w-4 h-4 text-cyan-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">{log.cleanerName}</p>
                      <p className="text-[10px] text-slate-400 font-medium">{log.timestamp}</p>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border border-emerald-100 dark:border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3" />
                      <span className="text-[9px] font-black uppercase tracking-widest">Done</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 4. Amenities Section */}
          <div className="pt-2">
            <AmenitiesList amenities={location.amenities} />
          </div>

          {/* 5. Reviews Section */}
          <div className="pt-2">
            <ReviewsList reviews={location.reviews} />
          </div>
        </div>

        {/* FOOTER */}
        <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
          <button className="btn-primary w-full py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-orange-500/20 transition-all hover:scale-[1.01] active:scale-95">
            <span className="text-sm font-black uppercase tracking-[0.2em]">Start Navigation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </>
  );
}

/* ================= REUSABLE STYLED COMPONENTS ================= */

const StatPill = ({ children }) => (
  <div className="flex items-center gap-1.5 bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-[10px] font-black text-slate-600 dark:text-slate-300 shadow-sm uppercase tracking-tight">
    {children}
  </div>
);

const SectionTitle = ({ icon, children }) => (
  <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500 flex items-center gap-2">
    {icon} {children}
  </h3>
);