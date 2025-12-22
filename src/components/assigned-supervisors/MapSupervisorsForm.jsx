"use client";

import Link from "next/link";
import { CheckCircle2, MapPin, Users, ArrowLeft, ShieldCheck, History, UserPlus } from "lucide-react";
import { useMemo, useState } from "react";

const MOCK_HISTORY = [
  {
    id: 1,
    date: "Mar 05, 2025 - 10:30 AM",
    title: "Supervisor Jane Doe assigned.",
    detail: "Assigned by Admin User 1. Status set to Active.",
  },
  {
    id: 2,
    date: "Feb 15, 2025 - 03:15 PM",
    title: "Supervisor John Smith unassigned.",
    detail: "Unassigned due transfer. Status set to Inactive.",
  },
  {
    id: 3,
    date: "Jan 01, 2025 - 09:00 PM",
    title: "Location created and setup",
    detail: "Initial assignment mapping completed.",
  },
];

export default function MapSupervisorsForm({ washroomName = "Abhyankar Nagar Garden" }) {
  // Mock data assuming MOCK_USERS filter
  const supervisors = useMemo(() => [
    { id: 101, name: "Jane Doe", email: "jane.doe@saaf.ai" },
    { id: 102, name: "Michael Scott", email: "m.scott@saaf.ai" },
    { id: 103, name: "Sarah Jenkins", email: "s.jenkins@saaf.ai" },
  ], []);

  const [selectedIds, setSelectedIds] = useState([]);

  const toggleSupervisor = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const selectedCount = selectedIds.length;

  const handleCreate = () => {
    if (!selectedCount) {
      alert("Please select at least one supervisor.");
      return;
    }
    alert(`Successfully assigned ${selectedCount} supervisor(s)!`);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      {/* Header card: Deep Forest Teal */}
      <div className="rounded-[24px] border border-[hsl(var(--border))] bg-white shadow-sm overflow-hidden">
        <div className="bg-[#0D4D4D] text-white px-8 py-6 flex items-center justify-between relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-teal-400/10 rounded-full -mr-32 -mt-32 blur-3xl" />

          <div className="flex items-center gap-4 relative z-10">
            <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md">
              <ShieldCheck className="h-6 w-6 text-teal-200" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight">Map Supervisors</h1>
              <p className="text-teal-100/60 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                <MapPin size={12} className="text-teal-300" /> {washroomName}
              </p>
            </div>
          </div>
          <Link href="/dashboard/washrooms/1/supervisors">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 bg-white/10 text-xs font-bold hover:bg-white/20 transition-all active:scale-95">
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
          </Link>
        </div>

        {/* Selection card */}
        <div className="p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black uppercase tracking-widest text-[hsl(var(--muted-foreground))]">
              Select Personnel ({selectedCount} Selected)
            </h3>
            <div className="flex items-center gap-2 text-xs font-bold">
              <CheckCircle2 className={`h-4 w-4 ${selectedCount ? "text-emerald-500" : "text-slate-300"}`} />
              <span className={selectedCount ? "text-emerald-600" : "text-slate-400"}>
                {selectedCount ? "Ready for mapping" : "Awaiting selection"}
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-[hsl(var(--primary)/0.1)] bg-[#F4FBFC]/50 p-4 space-y-4">
            <div className="rounded-xl border border-[hsl(var(--border))] bg-white overflow-hidden shadow-sm">
              <div className="flex items-center justify-between px-5 py-4 border-b border-[hsl(var(--border))] bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-white border border-[hsl(var(--border))] flex items-center justify-center shadow-sm">
                    <MapPin className="h-4 w-4 text-[hsl(var(--primary))]" />
                  </div>
                  <div className="text-sm font-bold text-[hsl(var(--primary-dark))]">
                    Target Location: <span className="text-[hsl(var(--foreground))] font-medium ml-1">{washroomName}</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-lg bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest">
                  Status: Pending
                </span>
              </div>

              <div className="max-h-64 overflow-auto custom-scrollbar divide-y divide-slate-100">
                {supervisors.map((s) => {
                  const selected = selectedIds.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => toggleSupervisor(s.id)}
                      className={`w-full flex items-center justify-between px-6 py-4 text-left transition-all ${selected ? "bg-emerald-50/60" : "hover:bg-slate-50"
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`h-10 w-10 rounded-xl flex items-center justify-center font-bold text-sm border transition-all ${selected ? "bg-emerald-500 border-emerald-400 text-white" : "bg-white border-slate-200 text-slate-400"
                          }`}>
                          {s.name.charAt(0)}
                        </div>
                        <div>
                          <div className={`text-sm font-bold ${selected ? "text-emerald-900" : "text-slate-800"}`}>
                            {s.name}
                          </div>
                          <div className="text-[11px] font-medium text-slate-500 tracking-tight">{s.email}</div>
                        </div>
                      </div>
                      <div className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider border transition-all ${selected
                          ? "bg-white border-emerald-200 text-emerald-600 shadow-sm"
                          : "bg-slate-50 border-slate-100 text-slate-400"
                        }`}>
                        {selected ? "Selected" : "Add Staff"}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCreate}
            disabled={selectedCount === 0}
            className="w-full px-6 py-4 rounded-2xl bg-[#0D4D4D] text-white font-bold text-sm shadow-[0_10px_20px_rgba(13,77,77,0.2)] hover:brightness-110 transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <UserPlus className="h-5 w-5" />
            {`Finalize ${selectedCount || 0} Supervisor Assignment${selectedCount === 1 ? "" : "s"}`}
          </button>
        </div>
      </div>

      {/* Assignment history: Light Cyan Tinted */}
      <div className="bg-white rounded-[24px] border border-[hsl(var(--border))] shadow-sm p-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-xl bg-[#E0F7FA] flex items-center justify-center">
            <History className="h-5 w-5 text-[hsl(var(--primary-dark))]" />
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-[hsl(var(--primary-dark))]">
            Assignment History
          </h2>
        </div>

        <div className="space-y-0 relative before:absolute before:inset-0 before:ml-[11px] before:h-full before:w-0.5 before:bg-slate-100">
          {MOCK_HISTORY.map((item, index) => (
            <div key={item.id} className="flex items-start gap-6 pb-10 last:pb-0 relative group">
              <div className={`relative z-10 h-6 w-6 rounded-full border-4 border-white shadow-sm mt-1 transition-colors ${index === 0 ? "bg-emerald-500" : "bg-slate-300 group-hover:bg-[hsl(var(--primary))]"
                }`} />

              <div className="space-y-1">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {item.date}
                </div>
                <div className="text-sm font-bold text-slate-800">
                  {item.title}
                </div>
                <div className="text-xs font-medium text-slate-500 leading-relaxed">
                  {item.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}