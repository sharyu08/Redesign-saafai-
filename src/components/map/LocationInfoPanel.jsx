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
} from "lucide-react";
import LocationStats from "./LocationStats";
import AmenitiesList from "./AmenitiesList";
import ReviewsList from "./ReviewsList";

export default function LocationInfoPanel({ location, onClose }) {
  if (!location) return null;

  return (
    <div
      className="
        absolute top-4 left-4 w-[400px]
        rounded-3xl
        bg-white/90
        border border-[#CBF3F0]
        shadow-[0_24px_60px_rgba(107,99,255,0.22)]
        backdrop-blur-md
        z-20 overflow-hidden
      "
    >
      {/* ================= HEADER ================= */}
      <div className="p-6 bg-gradient-to-r from-[#FDF9F2] to-[#FDF9F2] border-b border-[#CBF3F0]">
        <div className="flex justify-between items-start">
          <div className="space-y-1.5">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#CBF3F0]">
                <MapPin className="w-5 h-5 text-[#FF9F1C]" />
              </div>
              <h2 className="text-xl font-bold text-slate-800">
                {location.name}
              </h2>
            </div>
            <p className="text-sm text-slate-600 pl-11">
              {location.address}
            </p>
          </div>

          <button
            onClick={onClose}
            className="
              p-2 rounded-xl
              text-slate-500
              hover:bg-[#FDF9F2]
              hover:text-[#FF9F1C]
              transition-colors
            "
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Stats */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <StatPill>
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>{location.rating || "4.8"}</span>
          </StatPill>

          {location.cleaner && (
            <StatPill>
              <User className="w-4 h-4 text-[#FF9F1C]" />
              <span>{location.cleaner.split(" ")[0]}</span>
            </StatPill>
          )}

          <StatPill>
            <Clock className="w-4 h-4 text-[#FF9F1C]" />
            <span>5 min</span>
          </StatPill>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className="
          p-6 space-y-6
          max-h-[calc(100vh-260px)]
          overflow-y-auto
          bg-gradient-to-b from-white to-[#FAFAFF]
        "
      >
        {/* Availability */}
        <SectionTitle
          icon={<Accessibility className="w-4 h-4 text-[#FF9F1C]" />}
        >
          Availability
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
                p-4 rounded-2xl text-center
                bg-white
                border border-[#CBF3F0]
                transition-all
                ${item.available ? "hover:shadow-md" : "opacity-60"}
              `}
            >
              <div className="w-9 h-9 mx-auto mb-2 rounded-xl bg-[#FDF9F2] flex items-center justify-center">
                <User className="w-4 h-4 text-[#FF9F1C]" />
              </div>
              <p className="text-sm font-semibold text-slate-700">
                {item.label}
              </p>
              <p className="text-xs mt-1 text-slate-500">
                {item.available ? "Available" : "N/A"}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <LocationStats location={location} />

        {/* Cleaning History */}
        {location.cleaningHistory?.length > 0 && (
          <div className="space-y-3">
            <SectionTitle
              icon={<History className="w-4 h-4 text-[#FF9F1C]" />}
            >
              Cleaning History
            </SectionTitle>

            <div className="space-y-2">
              {location.cleaningHistory.map((log, idx) => (
                <div
                  key={idx}
                  className="
                    flex items-center gap-3
                    p-3 rounded-2xl
                    bg-white
                    border border-[#CBF3F0]
                  "
                >
                  <div className="w-9 h-9 rounded-full bg-[#CBF3F0] flex items-center justify-center">
                    <User className="w-4 h-4 text-[#FF9F1C]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-800">
                      {log.cleanerName}
                    </p>
                    <p className="text-xs text-slate-500">
                      {log.timestamp}
                    </p>
                  </div>
                  <span className="text-xs font-medium bg-[#FDF9F2] text-[#FF9F1C] px-3 py-1 rounded-full">
                    Completed
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Amenities */}
        <AmenitiesList amenities={location.amenities} />

        {/* Reviews */}
        {location.reviews?.length > 0 && (
          <ReviewsList reviews={location.reviews} />
        )}
      </div>

      {/* ================= FOOTER ================= */}
      <div className="p-4 border-t border-[#CBF3F0] bg-white">
        {/* ✅ UPDATED BUTTON COLOR (TEAL / ORANGE THEME) */}
        <button
          className="
            w-full py-3.5
            rounded-2xl
            font-semibold
            text-white
            bg-gradient-to-r from-[#FFBF69] to-[#FF9F1C]
            hover:shadow-[0_12px_30px_rgba(107,78,255,0.35)]
            transition-all
            flex items-center justify-center gap-2
            group
          "
        >
          <span>Get Directions</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

/* ================= SMALL REUSABLE UI ================= */

const StatPill = ({ children }) => (
  <div
    className="
      flex items-center gap-1.5
      bg-white
      px-3 py-1.5
      rounded-full
      border border-[#CBF3F0]
      text-sm font-medium text-slate-700
      shadow-sm
    "
  >
    {children}
  </div>
);

const SectionTitle = ({ icon, children }) => (
  <h3
    className="
      text-xs font-semibold uppercase tracking-wider
      text-slate-500
      flex items-center gap-2
    "
  >
    {icon}
    {children}
  </h3>
);
