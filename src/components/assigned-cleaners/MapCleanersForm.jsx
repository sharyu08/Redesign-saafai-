"use client";

import Link from "next/link";
import { CheckCircle2, MapPin, Users, ArrowLeft, UserPlus, ShieldCheck, Search } from "lucide-react";
import { useMemo, useState } from "react";

export default function MapCleanersForm({ washroomName = "Abhyankar Nagar Garden" }) {
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
      {/* HEADER: Updated to Deep Forest Teal */}
      <div className="rounded-[24px] border border-slate-200 bg-white shadow-xl overflow-hidden">
        <div className="bg-primary-dark text-white px-8 py-6 flex items-center justify-between relative overflow-hidden">
          {/* Decorative Background Element */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-teal-400/10 rounded-full -mr-32 -mt-32 blur-3xl" />

          <div className="flex items-center gap-5 relative z-10">
            <div className="h-12 w-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md">
              <UserPlus className="h-6 w-6 text-teal-200" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-white">Staff Mapping</h1>
              <p className="text-teal-100/60 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                <MapPin size={12} className="text-teal-300" /> {washroomName}
              </p>
            </div>
          </div>

          <Link href="/dashboard/washrooms/1/cleaners">
            <button className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-all flex items-center gap-2">
              <ArrowLeft size={14} /> Back
            </button>
          </Link>
        </div>

        {/* SEARCH & FILTERS BAR */}
        <div className="px-8 py-4 bg-muted border-b border-border flex items-center justify-between gap-4 dark:bg-muted">
          <div className="form-input-wrapper flex-1">
            <Search className="form-input-icon h-4 w-4" />
            <input
              type="text"
              placeholder="Search staff by name..."
              className="form-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="text-[10px] font-black uppercase text-muted-foreground tracking-widest whitespace-nowrap">
            {selectedIds.length} Staff Selected
          </div>
        </div>

        {/* SELECTION AREA - Kept as is */}
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredCleaners.map((c) => {
              const isSelected = selectedIds.includes(c.id);
              return (
                <button
                  key={c.id}
                  onClick={() => toggleCleaner(c.id)}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 group ${isSelected
                      ? "bg-emerald-50 border-emerald-200 shadow-md ring-1 ring-emerald-500/20"
                      : "bg-white border-slate-100 hover:border-teal-200 hover:bg-teal-50/30"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold transition-colors ${isSelected ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-400 group-hover:bg-teal-100 group-hover:text-teal-600"
                      }`}>
                      {c.name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <div className={`text-sm font-bold ${isSelected ? "text-emerald-900" : "text-slate-700"}`}>{c.name}</div>
                      <div className="text-[10px] font-medium text-slate-400">{c.email}</div>
                    </div>
                  </div>

                  <div className={`h-6 w-6 rounded-full border flex items-center justify-center transition-all ${isSelected ? "bg-emerald-500 border-emerald-500 scale-110" : "border-slate-200"
                    }`}>
                    {isSelected && <CheckCircle2 size={14} className="text-white" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* FOOTER INFO CARD - Kept as is */}
          <div className="bg-teal-50/50 border border-teal-100 rounded-[20px] p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-white border border-teal-100 flex items-center justify-center shadow-sm">
                <ShieldCheck className="text-teal-600 h-6 w-6" />
              </div>
              <div>
                <p className="text-[10px] font-black text-teal-400 uppercase tracking-widest">Target Assignment</p>
                <h4 className="text-base font-black text-teal-900 leading-none mt-1">{washroomName}</h4>
                <p className="text-[11px] font-bold text-teal-500/60 mt-1 italic">Permissions will be granted immediately upon save.</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Queue</p>
              <div className="text-xl font-black text-teal-700 tracking-tighter">
                {selectedIds.length} <span className="text-[10px] text-slate-400">USERS</span>
              </div>
            </div>
          </div>

          {/* SAVE BUTTON */}
          <button
            disabled={selectedIds.length === 0}
            onClick={handleCreate}
            className={`btn w-full py-4 text-sm uppercase tracking-widest flex items-center justify-center gap-3 ${
              selectedIds.length > 0
                ? "btn-primary"
                : "btn-secondary cursor-not-allowed"
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