"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Map,
  Pencil,
  Trash2,
  Users,
  CheckCircle,
  Sparkles,
  Venus,
  Mars,
  VenusAndMars,
  Clock,
  CreditCard,
  UserCheck,
  Phone,
  MessageSquare,
  ShieldCheck,
  Star
} from "lucide-react";

const MOCK_WASHROOM = {
  id: 1,
  name: "Ambazari Dahan Ghat",
  subtitle: "Ambazari Dahan Ghat, Near Main Gate",
  zone: "Dharampeth Zone",
  city: "Nagpur",
  state: "Maharashtra",
  pincode: "440022",
  createdOn: "Nov 8, 2025",
  lat: 21.1458,
  lng: 79.0882,
  amenities: ["Female", "Male", "Unisex", "Paid Entry", "24/7 Open"],
  facilities: {
    men: [
      { label: "Western Toilet (WC)", count: 1 },
      { label: "Indian Toilet", count: 1 },
      { label: "Urinals", count: 4 },
      { label: "Basin", count: 2 },
    ],
    women: [
      { label: "Western Toilet (WC)", count: 1 },
      { label: "Indian Toilet", count: 1 },
      { label: "Basin", count: 1 },
    ]
  },
  assignedUsers: [
    { name: "Raju Choudhary", role: "Cleaner", phone: "+91 82103 70052", assignedDate: "Nov 26, 2025" },
    { name: "Anil Saafai User", role: "Supervisor", phone: "+91 88888 88810", assignedDate: "Nov 13, 2025" }
  ]
};

const getAmenityIcon = (label) => {
  const iconMap = {
    "Female": <Venus size={16} />,
    "Male": <Mars size={16} />,
    "Unisex": <VenusAndMars size={16} />,
    "Paid Entry": <CreditCard size={16} />,
    "24/7 Open": <Clock size={16} />,
  };
  return iconMap[label] || <CheckCircle size={16} />;
};

export default function WashroomOverview({ washroom = MOCK_WASHROOM }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("user");

  const handleLocateOnGoogleMaps = () => {
    // Open Google Maps with the washroom coordinates
    const { lat, lng } = washroom;
    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleDelete = () => {
    const ok = window.confirm(
      `Are you sure you want to delete "${washroom.name}"? This action cannot be undone.`
    );
    if (!ok) return;
    alert(`Washroom "${washroom.name}" deleted.`);
  };

  return (
    <div className="space-y-8 pb-12 max-w-7xl mx-auto px-4">

      {/* 1. HERO CARD */}
      <div className="bg-white dark:bg-slate-900 rounded-[32px] shadow-md border border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-0">
          <div className="relative h-48 sm:h-60 lg:h-72 lg:h-full min-h-[250px]">
            <Image src="/image/washroomImg/washroomImg1.webp" alt={washroom.name} fill className="object-cover" priority />
          </div>
          <div className="p-4 sm:p-6 lg:p-10 space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-4">
              <div className="space-y-2">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-800 dark:text-white tracking-tight">{washroom.name}</h1>
                <div className="flex items-center gap-2 text-sm sm:text-base text-slate-400">
                  <MapPin size={16} className="text-cyan-500" />
                  <span className="text-sm sm:text-base">{washroom.subtitle}</span>
                </div>
              </div>
              <div className="bg-emerald-50 text-emerald-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-emerald-100">
                <Sparkles size={12} /> Operational
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-100 dark:border-slate-800">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Zone / Hierarchy</p>
                <p className="text-lg font-bold text-slate-700 dark:text-slate-200">{washroom.zone}</p>
              </div>
              <div className="flex flex-col justify-center space-y-2 px-2">
                <p className="text-sm text-slate-500 font-medium">City: <span className="text-slate-800 dark:text-slate-200 font-bold">{washroom.city}</span></p>
                <p className="text-sm text-slate-500 font-medium">State: <span className="text-slate-800 dark:text-slate-200 font-bold">{washroom.state}</span></p>
                <p className="text-sm text-slate-500 font-medium">Pincode: <span className="text-slate-800 dark:text-slate-200 font-bold">{washroom.pincode}</span></p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {/* LOCATE BUTTON - Functionally Active */}
              <button
                onClick={handleLocateOnGoogleMaps}
                className="flex-1 py-3.5 rounded-2xl bg-cyan-500 text-white text-sm font-bold uppercase tracking-widest hover:bg-cyan-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <Map size={18} /> Locate
              </button>


              <Link href={`/dashboard/washrooms/${washroom.id}/edit`} className="flex-1">
                <button className="w-full py-3.5 rounded-2xl border-2 border-slate-100 text-slate-600 text-sm font-bold uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                  <Pencil size={18} /> Edit
                </button>
              </Link>

              {/* DELETE BUTTON - Functionally Active */}
              <button
                onClick={handleDelete}
                className="flex-1 py-3.5 rounded-2xl bg-rose-50 text-rose-600 text-sm font-bold uppercase tracking-widest hover:bg-rose-600 hover:text-white transition-all flex items-center justify-center gap-2 border border-rose-100"
              >
                <Trash2 size={18} /> Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 2. AMENITIES */}
        <div className="lg:col-span-1 space-y-8">
          <div className="card-global h-full">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-8 flex items-center gap-2">
              <CheckCircle size={16} className="text-cyan-500" /> Amenities
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {washroom.amenities.map((a) => (
                <div key={a} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 group transition-all hover:border-cyan-500/30">
                  <span className="text-cyan-500">{getAmenityIcon(a)}</span>
                  <span className="text-sm font-bold text-slate-600 dark:text-slate-300">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. FACILITIES & ASSIGNED USERS */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50/30 border border-blue-100 rounded-3xl overflow-hidden shadow-sm">
              <div className="p-5 bg-blue-100/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center text-white"><Mars size={22} /></div>
                  <div>
                    <p className="text-sm font-black text-blue-900">Men's Wing</p>
                    <p className="text-[11px] font-bold text-blue-500 uppercase">9 Total Facilities</p>
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-2">
                {washroom.facilities.men.map((f, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-white rounded-2xl text-[13px] font-bold text-slate-600 shadow-sm">
                    <span>{f.label}</span>
                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg">{f.count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-pink-50/30 border border-pink-100 rounded-3xl overflow-hidden shadow-sm">
              <div className="p-5 bg-pink-100/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-pink-600 rounded-xl flex items-center justify-center text-white"><Venus size={22} /></div>
                  <div>
                    <p className="text-sm font-black text-pink-900">Women's Wing</p>
                    <p className="text-[11px] font-bold text-pink-500 uppercase">4 Total Facilities</p>
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-2">
                {washroom.facilities.women.map((f, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-white rounded-2xl text-[13px] font-bold text-slate-600 shadow-sm">
                    <span>{f.label}</span>
                    <span className="bg-pink-50 text-pink-600 px-3 py-1 rounded-lg">{f.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card-global">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                <Users size={16} className="text-cyan-500" /> Personnel Mapping (2)
              </h2>
              <button className="text-xs font-bold text-cyan-600 hover:underline">Manage All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {washroom.assignedUsers.map((user, i) => (
                <div key={i} className="p-5 border border-slate-100 dark:border-slate-800 rounded-3xl flex items-center gap-5 hover:bg-slate-50 transition-colors">
                  <div className="h-14 w-14 bg-indigo-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-indigo-500">
                    <UserCheck size={28} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-black text-slate-700 dark:text-white">{user.name}</p>
                    <p className="text-[11px] text-cyan-600 font-bold uppercase tracking-wider">{user.role}</p>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-2">
                      <Phone size={12} /> {user.phone}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. STATISTICS & REVIEWS TABS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          {/* UPDATED: Lighter User Satisfaction Card */}
          <div className="bg-cyan-50 dark:bg-slate-800/80 rounded-[32px] p-8 border border-cyan-100 dark:border-slate-700 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400 mb-1">User Satisfaction</p>
            <h3 className="text-4xl font-black text-slate-800 dark:text-white mb-4">N/A</h3>
            <div className="h-2 bg-cyan-200/50 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-500 w-[10%]" />
            </div>
            <p className="text-[11px] mt-4 font-medium text-slate-400 uppercase">Based on 0 feedback</p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-[32px] shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">Staff Performance</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-4xl font-black text-slate-800 dark:text-white">8.1</h3>
              <span className="text-slate-400 font-bold text-lg">/ 10</span>
            </div>
            <div className="flex gap-1 mt-4 text-yellow-400">
              {[...Array(4)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              <Star size={16} className="text-slate-200" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] overflow-hidden flex flex-col min-h-[400px]">
          <div className="flex border-b border-slate-100 dark:border-slate-800">
            <button
              onClick={() => setActiveTab("user")}
              className={`flex-1 py-6 text-xs font-black uppercase tracking-widest transition-all ${activeTab === "user" ? "text-cyan-600 bg-cyan-50/50 border-b-2 border-cyan-600" : "text-slate-400 hover:text-slate-600"}`}
            >
              User Reviews (0)
            </button>
            <button
              onClick={() => setActiveTab("cleaner")}
              className={`flex-1 py-6 text-xs font-black uppercase tracking-widest transition-all ${activeTab === "cleaner" ? "text-cyan-600 bg-cyan-50/50 border-b-2 border-cyan-600" : "text-slate-400 hover:text-slate-600"}`}
            >
              Staff Reports (10)
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
            {activeTab === "user" ? (
              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-full inline-block text-slate-300">
                  <MessageSquare size={40} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-800 dark:text-white uppercase tracking-tight">No user reviews yet</h4>
                  <p className="text-sm text-slate-400 mt-2">Feedback from citizens will appear here once submitted.</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4 w-full">
                <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800 text-left">
                  <div className="h-10 w-10 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center text-cyan-600 shadow-sm"><ShieldCheck size={20} /></div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-200">Daily Maintenance Log #402</p>
                    <p className="text-[10px] text-slate-400">Completed by Anil Saafai • 2 hours ago</p>
                  </div>
                  <span className="text-[10px] font-bold bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 px-2 py-1 rounded">CLEAN</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}