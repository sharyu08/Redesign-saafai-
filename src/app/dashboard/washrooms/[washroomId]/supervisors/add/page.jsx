"use client";

import MapSupervisorsForm from "@/components/assigned-supervisors/MapSupervisorsForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function AddSupervisorsPage() {
  const params = useParams();
  const washroomId = params?.washroomId || "1";

  return (
    <div className="min-h-screen bg-[var(--bg-surface)] p-6">
      {/* Uniform Back Button */}

      <Link href={`/dashboard/washrooms/${washroomId}/supervisors`}>
        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-slate-600 dark:text-slate-300 transition-colors">
          <ArrowLeft size={20} strokeWidth={2.5} />
        </button>
      </Link>
      <MapSupervisorsForm />



    </div>
  );
}

