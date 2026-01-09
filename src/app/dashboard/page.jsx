"use client";

import Link from "next/link";
import {
  Activity,
  CheckCircle2,
  MapPin,
  MessageSquare,
  Sparkles,
  Wrench,
  Users,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { WashroomCleanlinessChart, CleanerPerformanceChart } from "@/components/dashboard/Charts";

/* ------------------ 3D GLASS CARD SHELL ------------------ */
const CardShell = ({ title, subtitle, icon, headerRight, children }) => (
  <div className="bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-cyan-600">
          {icon}
        </div>
        <div>
          {subtitle && (
            <p className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.2em] mb-0.5">{subtitle}</p>
          )}
          <h3 className="text-xl font-black text-slate-800 dark:text-white tracking-tight">{title}</h3>
        </div>
      </div>
      {headerRight}
    </div>
    {children}
  </div>
);

/* ------------------ OCEANIC SUMMARY CARDS ------------------ */
const SummaryCards = () => {
  const cards = [
    { label: "Total Toilets", value: "18", icon: Users, color: "from-blue-500 to-cyan-400" },
    { label: "Ongoing Tasks", value: "5", icon: MessageSquare, color: "from-cyan-400 to-teal-400" },
    { label: "Completed Tasks", value: "4 / 18", icon: CheckCircle2, color: "from-emerald-400 to-teal-500" },
    { label: "Total Repairs", value: "4", icon: Wrench, color: "from-rose-400 to-orange-400" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.label}
            className="group relative bg-white dark:bg-slate-900 rounded-[28px] p-5 border border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
          >
            {/* Faint Background Glow */}
            <div className={`absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br ${card.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />

            <div className="relative z-10 flex items-center gap-4">
              <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white shadow-lg`}>
                <Icon size={20} strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">{card.value}</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{card.label}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* ------------------ HIGHLIGHTS (Top Rated) ------------------ */
const HighlightsCard = ({ locations }) => {
  const rankStyles = [
    { rankBg: 'bg-gradient-to-br from-amber-400 to-amber-500', rankShadow: 'shadow-amber-400/30' },
    { rankBg: 'bg-gradient-to-br from-slate-300 to-slate-400', rankShadow: 'shadow-slate-300/30' },
    { rankBg: 'bg-gradient-to-br from-orange-300 to-orange-400', rankShadow: 'shadow-orange-300/30' },
  ];

  return (
    <CardShell
      title="Top Rated Facilities"
      subtitle="Today's Performance"
      icon={<Sparkles size={20} />}
      headerRight={
        <button className="p-2 rounded-xl bg-slate-50 text-cyan-600 hover:bg-cyan-500 hover:text-white transition-all">
          <ChevronRight size={18} />
        </button>
      }
    >
      <div className="space-y-4">
        {locations.map((loc, i) => (
          <div
            key={loc.name}
            className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 hover:border-cyan-400/30 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center text-black text-lg font-extrabold ${rankStyles[i].rankBg} ${rankStyles[i].rankShadow} text-shadow-white`}>
                {i + 1}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{loc.name}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <MapPin size={10} className="text-slate-400" />
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Nagpur Zone</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100">
              <span className="text-sm font-black text-cyan-600">{loc.score}</span>
              <div className="flex text-amber-400">
                <TrendingUp size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardShell>
  );
};

/* ------------------ ACTIVITY CARD ------------------ */
const ActivityCard = ({ items }) => (
  <CardShell
    title="Cleaner Activity"
    subtitle="Field Updates"
    icon={<Activity size={20} />}
  >
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={i} className="flex gap-4 group cursor-default">
          <div className="relative flex flex-col items-center">
            <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            {i !== items.length - 1 && <div className="w-[2px] h-full bg-slate-100 dark:bg-slate-800 my-1" />}
          </div>
          <div className="pb-4">
            <p className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 transition-colors">
              {item.text}
            </p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
              {item.time} {item.rating && `• Rating: ${item.rating}`}
            </p>
          </div>
        </div>
      ))}
    </div>
  </CardShell>
);

/* ------------------ MAIN PAGE ------------------ */
export default function DashboardPage() {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-slate-50 dark:bg-[#0B0E14] transition-colors duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-800 dark:text-black tracking-tight">Dashboard</h1>
          <p className="text-sm font-bold text-slate-400">Municipal washroom & cleaner fleet overview</p>
        </div>
        <div className="flex items-center gap-3 px-5 py-2.5 bg-white dark:bg-slate-900 rounded-2xl border border-cyan-500/10 shadow-sm backdrop-blur-md">
          <Sparkles className="h-4 w-4 text-cyan-500" />
          <span className="text-xs font-black text-slate-600 dark:text-slate-300 uppercase tracking-widest">Fresh Insights Ready</span>
        </div>
      </div>
      {/* Summary Cards */}
      <SummaryCards />
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-black text-slate-800 dark:text-white tracking-tight">Cleanliness Trends</h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Last 7 Days Performance</p>
            </div>
            <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-blue-600">
              <TrendingUp size={18} />
            </div>
          </div>
          <div className="h-[320px] w-full">
            <WashroomCleanlinessChart />
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-black text-slate-800 dark:text-white tracking-tight">Top Cleaners</h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Efficiency Metrics</p>
            </div>
            <div className="p-2 bg-teal-50 dark:bg-teal-900/30 rounded-xl text-teal-600">
              <Users size={18} />
            </div>
          </div>
          <div className="h-[320px] w-full">
            <CleanerPerformanceChart />
          </div>
        </div>
      </div>
      {/* Bottom Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <HighlightsCard
          locations={[
            { name: "Budhawar Bazaar", score: 9.6 },
            { name: "Narendra Nagar", score: 9.2 },
            { name: "Sakkardara Bridge", score: 6.2 }
          ]}
        />
        <ActivityCard
          items={[
            { text: "Anil Safai completed cleaning at Mehadiya Chowk", time: "3h ago", rating: 8.7 },
            { text: "Raj Ram started cleaning at Mehadiya Chowk", time: "3h ago" },
            { text: "Anil Safai completed cleaning at Civil Lines", time: "2h ago", rating: 8.8 }
          ]}
        />
      </div>
    </div>
  );
}