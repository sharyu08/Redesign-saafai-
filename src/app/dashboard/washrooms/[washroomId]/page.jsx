"use client";

import Link from "next/link";
import WashroomOverview from "@/components/washrooms/WashroomOverview";
import { ArrowLeft } from "lucide-react";

export default function WashroomDetailPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-surface)] p-6 space-y-4">
      <Link href="/dashboard/washrooms">
        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-slate-600 dark:text-slate-300 transition-colors">
          <ArrowLeft size={20} strokeWidth={2.5} />
        </button>
      </Link>
      <WashroomOverview />
    </div>
  );
}

