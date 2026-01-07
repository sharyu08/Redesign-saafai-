"use client";
import Link from "next/link";
import {
  Activity,
  CheckCircle2,
  ClipboardList,
  MapPin,
  MessageSquare,
  Sparkles,
  Wrench,
  Users,
} from "lucide-react";
import { WashroomCleanlinessChart, CleanerPerformanceChart } from "@/components/dashboard/Charts";

/* ------------------ CARD SHELL ------------------ */
const CardShell = ({ title, subtitle, icon, headerRight, children }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 transition-all duration-300 hover:shadow-md">
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-3">
        {icon}
        <div>
          {subtitle && (
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{subtitle}</p>
          )}
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
      </div>
      {headerRight}
    </div>
    {children}
  </div>
);

/* ------------------ COMPACT SUMMARY CARDS (UPDATED COLORS ONLY) ------------------ */
const SummaryCards = () => {
  const cards = [
    { label: "Total Tolites", value: "18", icon: Users },
    { label: "Ongoing Tasks", value: "5", icon: MessageSquare },
    { label: "Completed Tasks", value: "4 / 18", icon: CheckCircle2 },
    { label: "Total Repairs", value: "4", icon: Wrench },
  ];

  const ICON_STYLES = [
    { bg: "#CBF3F0", color: "#FF9F1C" }, // teal/orange
    { bg: "#E9F8F0", color: "#22C55E" }, // green
    { bg: "#FFF4E5", color: "#F59E0B" }, // orange
    { bg: "#FFECEF", color: "#EF4444" }, // red
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {cards.map((card, index) => {
        const Icon = card.icon;
        const iconStyle = ICON_STYLES[index];

        return (
          <div
            key={card.label}
            className="
              bg-white
              rounded-xl
              p-4
              border border-[#CBF3F0]
              transform transition-all duration-300
              group hover:bg-[#2D1A69] hover:shadow-[0_12px_30px_rgba(107,99,255,0.18)]
              cursor-pointer relative overflow-hidden
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF9F1C] to-[#4B3B9D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex items-center gap-3">
              <div
                className="p-2.5 rounded-lg flex items-center justify-center group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-all duration-300"
                style={{ backgroundColor: iconStyle.bg }}
              >
                <Icon className="h-4 w-4 group-hover:text-white transition-colors duration-300" style={{ color: iconStyle.color }} />
              </div>

              <div>
                <p className="text-lg font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
                  {card.value}
                </p>
                <p className="text-xs font-medium text-gray-600 group-hover:text-white/80 transition-colors duration-300">
                  {card.label}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* ------------------ HIGHLIGHTS ------------------ */
const HighlightsCard = ({ locations }) => {
    const rankStyles = [
    { 
      bg: "bg-gradient-to-r from-amber-100 to-amber-50", 
      border: "border-amber-200",
      text: "text-amber-700",
      rankBg: "bg-gradient(135deg, #F59E0B, #FCD34D)",
      rankShadow: "shadow-[0_4px_12px_rgba(245,158,11,0.3)]"
    },
    { 
      bg: "bg-gradient-to-r from-blue-50 to-indigo-50", 
      border: "border-blue-100",
      text: "text-blue-700",
      rankBg: "bg-gradient(135deg, #3B82F6, #6366F1)",
      rankShadow: "shadow-[0_4px_12px_rgba(99,102,241,0.3)]"
    },
    { 
      bg: "bg-gradient-to-r from-[#CBF3F0] to-[#FFBF69]", 
      border: "border-[#CBF3F0]",
      text: "text-slate-800",
      rankBg: "bg-gradient(135deg, #8B5CF6, #A855F7)",
      rankShadow: "shadow-[0_4px_12px_rgba(168,85,247,0.3)]"
    },
  ];

  return (
    <CardShell
      title="Today's Top Rated"
      icon={
        <div className="p-2 rounded-lg bg-gradient-to-r from-[#FF9F1C] to-[#2EC4B6]">
          <Sparkles className="h-4 w-4 text-white" />
        </div>
      }
      headerRight={
        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors flex items-center">
          View all
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      }
    >
      <div className="space-y-3">
        {locations.slice(0, 3).map((loc, i) => (
          <div
            key={loc.name}
            className={`group flex items-center justify-between p-4 rounded-xl ${rankStyles[i].border} ${rankStyles[i].bg} transition-all duration-300 hover:shadow-md hover:-translate-y-0.5`}
          >
            <div className="flex items-center gap-4">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center text-black text-lg font-extrabold ${rankStyles[i].rankBg} ${rankStyles[i].rankShadow}`} style={{ textShadow: '0 1px 2px rgba(255,255,255,0.5)' }}>
                {i + 1}
              </div>
              <div>
                <p className={`text-sm font-semibold ${rankStyles[i].text}`}>{loc.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{loc.location || 'Location'}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-white/80 rounded-full px-2.5 py-1 border border-white">
              <div className="flex">
                {[...Array(5)].map((_, starIndex) => (
                  <svg 
                    key={starIndex} 
                    className={`w-3.5 h-3.5 ${starIndex < Math.floor(loc.score) ? 'text-yellow-400' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className={`text-sm font-bold ${rankStyles[i].text} ml-1`}>
                {loc.score}
              </span>
            </div>
          </div>
        ))}
      </div>
    </CardShell>
  );
};

/* ------------------ ACTIVITY ------------------ */
const ActivityCard = ({ items }) => (
  <div className="bg-white p-5 rounded-xl shadow-sm border border-[#EEEAFE]">
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-[#CBF3F0] rounded-lg">
          <Activity className="h-4 w-4 text-[#FF9F1C]" />
        </div>
        <h3 className="text-base font-semibold text-gray-800">Cleaner Activity</h3>
      </div>
      <button className="text-sm text-[#FF9F1C] font-medium hover:underline">
        View all
      </button>
    </div>
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-3 bg-white p-3 rounded-lg border border-[#EEEAFE]"
        >
          <span className="w-2 h-2 mt-2 rounded-full bg-[#FF9F1C]" />
          <div>
            <p className="text-sm text-gray-800">{item.text}</p>
            <p className="text-xs text-gray-500">
              {item.time}
              {item.rating && ` • ⭐ ${item.rating}`}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ------------------ DATA ------------------ */
const locations = [
  { name: "Budhawar Bazaar", score: 9.6 },
  { name: "Narendra Nagar", score: 9.2 },
  { name: "Sakkardara Bridge", score: 6.2 },
];

const activities = [
  { text: "Anil Safai completed cleaning at Mehadiya Chowk", time: "3h ago", rating: 8.7 },
  { text: "Raj Ram started cleaning at Mehadiya Chowk", time: "3h ago" },
  { text: "Anil Safai completed cleaning at Civil Lines", time: "2h ago", rating: 8.8 },
];

/* ------------------ PAGE ------------------ */
export default function DashboardPage() {
  return (
    <div className="min-h-screen p-6 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm font-semibold text-[#FF9F1C]">Overview</p>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-sm text-gray-500">
            Snapshot of toilets, cleaners and field updates
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-full border border-[#CBF3F0] text-sm">
          <Sparkles className="h-4 w-4 text-[#FF9F1C]" />
          Fresh insights ready
        </div>
      </div>

      {/* Summary cards */}
      <SummaryCards />

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-[#EEEAFE]">
          <div className="mb-4">
            <h3 className="text-base font-semibold text-gray-800">
              Washroom Cleanliness
            </h3>
            <p className="text-xs text-gray-500">Last 7 days performance</p>
          </div>
          <div className="h-[300px]">
            <WashroomCleanlinessChart />
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-[#EEEAFE]">
          <div className="mb-4">
            <h3 className="text-base font-semibold text-gray-800">
              Cleaner Performance
            </h3>
            <p className="text-xs text-gray-500">Top 5 cleaners by rating</p>
          </div>
          <div className="h-[300px]">
            <CleanerPerformanceChart />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <HighlightsCard locations={locations} />
        <ActivityCard items={activities} />
      </div>
    </div>
  );
}
