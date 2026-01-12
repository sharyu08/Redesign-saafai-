"use client";

import MapCleanersForm from "@/components/assigned-cleaners/MapCleanersForm";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function AddCleanersPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Dynamic Back Button */}
      <div className="max-w-4xl mx-auto mb-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-100 transition-all shadow-sm active:scale-95"
        >
          <ArrowLeft size={16} />
          Back
        </button>
      </div>

      <MapCleanersForm />
    </div>
  );
}
