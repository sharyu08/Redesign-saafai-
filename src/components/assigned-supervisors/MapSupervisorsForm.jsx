"use client";

import Link from "next/link";
import { CheckCircle2, MapPin, Users, ArrowLeft, ShieldCheck, History, UserPlus } from "lucide-react";
import { useMemo, useState } from "react";
import { useParams } from "next/navigation";

const MOCK_HISTORY = [
  {
    id: 1,
    date: "Mar 05, 2025 - 10:30 AM",
    title: "Jane Doe assigned.",
    detail: "Status set to Active by Admin.",
  },
  {
    id: 2,
    date: "Feb 15, 2025 - 03:15 PM",
    title: "John Smith unassigned.",
    detail: "Transfer to North Zone.",
  },
  {
    id: 3,
    date: "Jan 01, 2025 - 09:00 PM",
    title: "Location created",
    detail: "Setup complete.",
  },
];

export default function MapSupervisorsForm({ washroomName = "Abhyankar Nagar Garden" }) {
  const params = useParams();
  const washroomId = params?.washroomId || "1";

  const supervisors = useMemo(() => [
    { id: 101, name: "Jane Doe", email: "jane.doe@saaf.ai" },
    { id: 102, name: "Michael Scott", email: "m.scott@saaf.ai" },
    { id: 103, name: "Sarah Jenkins", email: "s.jenkins@saaf.ai" },
    { id: 104, name: "Robert California", email: "r.cali@saaf.ai" },
  ], []);

  const [selectedIds, setSelectedIds] = useState([]);

  const toggleSupervisor = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const selectedCount = selectedIds.length;

  return (
    <div className="max-w-[1400px] mx-auto pb-12 animate-fade-in">

      {/* HEADER SECTION */}
      <div className="card-global flex items-center justify-between mb-8 p-6">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-slate-400 flex items-center justify-center shadow-lg shadow-slate-200">
            <ShieldCheck className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black uppercase tracking-tight text-slate-800">
              Staff Mapping
            </h1>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 mt-1">
              <MapPin size={12} className="text-cyan-500" /> {washroomName}
            </p>
          </div>
        </div>

        <Link href={`/dashboard/washrooms/${washroomId}/supervisors`}>
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-200 bg-white text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 transition-all">
            <ArrowLeft className="h-4 w-4" /> Back to Dashboard
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

        {/* LEFT COLUMN: SELECTION AREA */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card-global overflow-hidden p-0">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-400">
                  Available Personnel <span className="text-emerald-600 ml-1">({selectedCount} Selected)</span>
                </h3>
                {selectedCount > 0 && (
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    <CheckCircle2 size={12} />
                    <span>Mapping Ready</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {supervisors.map((s) => {
                  const selected = selectedIds.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      onClick={() => toggleSupervisor(s.id)}
                      className={`flex items-center gap-4 p-5 rounded-2xl border transition-all text-left ${selected
                        ? "bg-emerald-50 border-emerald-500 ring-1 ring-emerald-500"
                        : "bg-white border-slate-100 hover:border-slate-300 shadow-sm"
                        }`}
                    >
                      <div className={`h-10 w-10 rounded-xl flex items-center justify-center font-black text-xs border transition-all ${selected ? "bg-emerald-500 border-emerald-600 text-white" : "bg-slate-100 border-slate-200 text-slate-400"
                        }`}>
                        {s.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-sm font-bold truncate ${selected ? "text-emerald-900" : "text-slate-800"}`}>
                          {s.name}
                        </div>
                        <div className="text-[10px] font-medium text-slate-400 truncate">{s.email}</div>
                      </div>
                      <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all ${selected ? "bg-emerald-500 border-emerald-500 shadow-sm" : "border-slate-200"
                        }`}>
                        {selected && <CheckCircle2 size={14} className="text-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <button
                  disabled={selectedCount === 0}
                  className="btn-primary w-full py-4 flex items-center justify-center gap-3 disabled:opacity-30 disabled:grayscale transition-all active:scale-95"
                >
                  <UserPlus size={18} />
                  <span className="text-[12px] font-black uppercase tracking-widest">Finalize Selection & Update</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: AUDIT TRAIL */}
        <div className="lg:col-span-1 space-y-6">
          <div className="card-global bg-slate-50 border-slate-200">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                <History className="h-5 w-5 text-indigo-600" />
              </div>
              <h2 className="text-[12px] font-black uppercase tracking-widest text-slate-700">
                Audit Trail
              </h2>
            </div>

            <div className="space-y-0 relative before:absolute before:inset-0 before:ml-[9px] before:h-full before:w-0.5 before:bg-slate-200">
              {MOCK_HISTORY.map((item, index) => (
                <div key={item.id} className="flex items-start gap-5 pb-8 last:pb-0 relative group">
                  <div className={`relative z-10 h-5 w-5 rounded-full border-[3px] border-slate-50 shadow-sm mt-0.5 transition-colors ${index === 0 ? "bg-emerald-500 scale-110" : "bg-slate-300"
                    }`} />

                  <div className="space-y-1 flex-1">
                    <div className="text-[8px] font-black uppercase tracking-widest text-slate-400">
                      {item.date}
                    </div>
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-tight">
                      {item.title}
                    </div>
                    <div className="text-[11px] font-medium text-slate-500 leading-relaxed">
                      {item.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-indigo-50 border border-indigo-100 shadow-sm">
            <p className="text-[10px] font-black text-indigo-700 uppercase tracking-widest mb-1">Quick Note</p>
            <p className="text-[11px] font-medium text-indigo-600/80 leading-relaxed">
              Assignments update instantly. Mapped personnel will receive notifications on their mobile devices immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}