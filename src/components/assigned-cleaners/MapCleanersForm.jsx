"use client";

import Link from "next/link";
import { CheckCircle2, MapPin, Users, ArrowLeft, ShieldCheck, Search, UserPlus } from "lucide-react";
import { useMemo, useState } from "react";
import { useParams } from "next/navigation"; // Import useParams

export default function MapCleanersForm({ washroomName = "Abhyankar Nagar Garden" }) {
  // 1. Grab the washroomId from the URL parameters
  const params = useParams();
  const washroomId = params?.washroomId || "1"; // Fallback to "1" if not found

  const cleaners = useMemo(() => [
    { id: 1, name: "Ramesh Kumar", email: "ramesh@saaf.ai", status: "Available" },
    { id: 2, name: "Suresh Mane", email: "suresh@saaf.ai", status: "Available" },
    { id: 3, name: "Nikhil Tupkar", email: "nikhil@saaf.ai", status: "On Leave" },
    { id: 4, name: "Ankit Choudhary", email: "ankit@saaf.ai", status: "Available" },
  ], []);

  const [selectedIds, setSelectedIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleCleaner = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const filteredCleaners = cleaners.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreate = () => {
    if (!selectedIds.length) return;
    alert(`Assignment Successful for ${selectedIds.length} staff members.`);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* HEADER */}
      <div className="rounded-[24px] border border-slate-200 bg-white shadow-xl overflow-hidden">
        <div className="bg-slate-100 border-b border-slate-200 px-8 py-6 flex items-center justify-between relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-slate-200/50 rounded-full -mr-32 -mt-32 blur-3xl" />

          <div className="flex items-center gap-5 relative z-10">
            <div className="h-12 w-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
              <UserPlus className="h-6 w-6 text-slate-600" />
            </div>
            <div>
              <h1 className="text-xl font-black uppercase tracking-tight text-slate-800">Staff Mapping</h1>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                <MapPin size={12} className="text-cyan-600" /> {washroomName}
              </p>
            </div>
          </div>


        </div>

        {/* SEARCH & FILTERS BAR */}
        <div className="px-8 py-4 bg-slate-50/50 border-b border-slate-200 flex items-center justify-between gap-4">
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-cyan-600 transition-colors" />
            <input
              type="text"
              placeholder="Search staff by name..."
              className="w-full h-11 pl-11 pr-4 rounded-xl border border-slate-200 bg-white text-sm outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/5 transition-all font-medium text-slate-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest whitespace-nowrap bg-white border border-slate-200 px-3 py-2 rounded-lg">
            {selectedIds.length} Staff Selected
          </div>
        </div>

        {/* SELECTION AREA */}
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredCleaners.map((c) => {
              const isSelected = selectedIds.includes(c.id);
              return (
                <button
                  key={c.id}
                  onClick={() => toggleCleaner(c.id)}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 group ${isSelected
                    ? "bg-cyan-50 border-cyan-200 shadow-md ring-1 ring-cyan-500/20"
                    : "bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50/50"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold transition-colors ${isSelected ? "bg-cyan-500 text-white" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600"
                      }`}>
                      {c.name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <div className={`text-sm font-bold ${isSelected ? "text-cyan-900" : "text-slate-700"}`}>{c.name}</div>
                      <div className="text-[10px] font-medium text-slate-400">{c.email}</div>
                    </div>
                  </div>

                  <div className={`h-6 w-6 rounded-full border flex items-center justify-center transition-all ${isSelected ? "bg-cyan-500 border-cyan-500 scale-110" : "border-slate-200"
                    }`}>
                    {isSelected && <CheckCircle2 size={14} className="text-white" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* FOOTER INFO CARD */}
          <div className="bg-slate-50 border border-slate-200 rounded-[20px] p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                <ShieldCheck className="text-cyan-600 h-6 w-6" />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Target Assignment</p>
                <h4 className="text-base font-black text-slate-800 leading-none mt-1">{washroomName}</h4>
                <p className="text-[11px] font-medium text-slate-500/60 mt-1 italic">Mapping updates personnel permissions instantly.</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Queue</p>
              <div className="text-xl font-black text-slate-700 tracking-tighter">
                {selectedIds.length} <span className="text-[10px] text-slate-400">USERS</span>
              </div>
            </div>
          </div>

          {/* SAVE BUTTON */}
          <button
            disabled={selectedIds.length === 0}
            onClick={handleCreate}
            className={`btn w-full py-4 text-sm font-black uppercase tracking-widest flex items-center justify-center gap-3 rounded-2xl shadow-lg transition-all ${selectedIds.length > 0
              ? "btn-primary shadow-orange-500/20"
              : "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
              }`}
          >
            <Users size={18} />
            Initialize Assignment
          </button>
        </div>
      </div>
    </div>
  );
}