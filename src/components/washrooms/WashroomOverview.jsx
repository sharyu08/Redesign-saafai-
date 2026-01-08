"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MapPin, Map, Pencil, Trash2, Users, CheckCircle, Sparkles } from "lucide-react";

const MOCK_WASHROOM = {
  id: 1,
  name: "Abhyankar Nagar Garden",
  subtitle: "Abhyankar Nagar Garden, Main Entrance",
  zone: "Dharampeth Zone",
  city: "Nagpur",
  state: "Maharashtra",
  pincode: "440034",
  createdOn: "Nov 10, 2025",
  lat: 21.1458,
  lng: 79.0882,
  amenities: ["Female", "Male", "Unisex", "Paid Entry", "24/7 Open", "Has Attendant"],
};

export default function WashroomOverview({ washroom = MOCK_WASHROOM }) {
  const router = useRouter();

  const handleLocate = () => {
    router.push("/dashboard/locate");
  };

  const handleDelete = () => {
    const ok = window.confirm(
      `Are you sure you want to delete "${washroom.name}"? This action cannot be undone.`
    );
    if (!ok) return;
    alert(`Washroom "${washroom.name}" deleted.`);
  };

  return (
    <div className="space-y-6 pb-10">
      {/* Top card with image and details */}
      <div className="bg-white rounded-xl shadow-sm border border-[hsl(var(--border))] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-[300px_minmax(0,1fr)] gap-0">
          <div className="relative h-64 md:h-full min-h-[250px] bg-[hsl(var(--muted))]">
            <Image
              src="/image/dashboard img.png"
              alt={washroom.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-8 space-y-6 bg-white dark:bg-slate-900">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-1">
                <h1 className="text-2xl font-bold tracking-tight text-[hsl(var(--foreground))]">
                  {washroom.name}
                </h1>
                <div className="flex items-center gap-2 text-sm font-medium text-[hsl(var(--muted-foreground))]">
                  <MapPin className="h-4 w-4 text-[hsl(var(--primary))]" />
                  <span>{washroom.subtitle}</span>
                </div>
              </div>
              <div className="badge-status active shadow-sm">
                <Sparkles size={12} />
                <span>Operational</span>
              </div>
            </div>

            {/* Zone Highlight - Using faint transparent Oceanic tokens */}
            <div className="flex flex-wrap gap-4">
              <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-4 py-3">
                <div className="text-xs font-medium text-[hsl(var(--muted-foreground))] mb-1">
                  Location Hierarchy / Zone
                </div>
                <div className="text-sm font-semibold text-[hsl(var(--foreground))]">
                  {washroom.zone}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-8 gap-y-3 py-2">
                {[
                  { label: "City", value: washroom.city },
                  { label: "State", value: washroom.state },
                  { label: "Pincode", value: washroom.pincode },
                  { label: "Created", value: washroom.createdOn },
                ].map((item) => (
                  <div key={item.label} className="text-xs">
                    <span className="text-[hsl(var(--muted-foreground))] font-bold uppercase tracking-tighter mr-1">
                      {item.label}:
                    </span>
                    <span className="text-[hsl(var(--foreground))] font-semibold">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleLocate}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[hsl(var(--border))] bg-white text-[hsl(var(--foreground))] text-sm font-bold hover:bg-[hsl(var(--muted))] transition-all active:scale-95"
              >
                <Map size={16} />
                Locate
              </button>

              <Link href={`/dashboard/washrooms/${washroom.id}/edit`} className="inline-block">
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[hsl(var(--primary))] text-white text-sm font-bold hover:opacity-90 transition-all active:scale-95">
                  <Pencil className="h-4 w-4" />
                  Edit Details
                </button>
              </Link>

              <button
                type="button"
                onClick={handleDelete}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[hsl(var(--border))] bg-white text-[hsl(var(--destructive))] text-sm font-bold hover:bg-[hsl(var(--muted))] transition-all active:scale-95"
              >
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities section */}
      <div className="bg-white rounded-xl border border-[hsl(var(--border))] shadow-sm p-6 space-y-4">
        <h2 className="text-sm font-extrabold uppercase tracking-widest text-[hsl(var(--muted-foreground))] flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-blue-600" />
          Amenities & Features
        </h2>
        <div className="flex flex-wrap gap-2">
          {washroom.amenities.map((a) => (
            <span key={a} className="chip font-bold">
              {a}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 3. Assigned Users - Using .card-global and .text-muted */}
        <div className="card-global">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
            <Users className="h-4 w-4 text-cyan-500" />
            Assigned Users
          </h2>
          <div className="flex flex-col items-center justify-center py-10 border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-[24px]">
            <p className="text-sm font-medium text-slate-400 italic">No staff currently assigned to this location.</p>
            <button className="mt-4 text-[10px] font-black text-cyan-600 uppercase tracking-widest hover:underline">
              + Assign Personnel
            </button>
          </div>
        </div>

        {/* Review statistics */}
        <div className="bg-white rounded-xl border border-[hsl(var(--border))] shadow-sm p-6 space-y-4">
          <h2 className="text-sm font-extrabold uppercase tracking-widest text-[hsl(var(--muted-foreground))]">Review Statistics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-blue-100 border border-[hsl(var(--primary)/0.1)] p-4">
              <p className="text-[10px] font-bold text-gray-800 uppercase tracking-tighter mb-1">User Rating</p>
              <p className="text-2xl font-black text-gray-800">N/A</p>
              <p className="text-[10px] font-bold text-[hsl(var(--muted-foreground))]">0 User Reviews</p>
            </div>

            <div className="rounded-[24px] bg-slate-50 dark:bg-slate-800/50 p-6 border border-slate-100 dark:border-slate-800">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Staff Rating</p>
              <div className="flex items-end gap-2">
                <p className="text-3xl font-black text-slate-800 dark:text-white leading-none">N/A</p>
                <div className="badge-score">0.0</div>
              </div>
              <p className="text-[10px] font-bold text-slate-400 mt-3 uppercase">0 Cleaner Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}