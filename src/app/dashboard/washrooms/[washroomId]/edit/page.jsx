"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import EditWashroomForm from "@/components/washrooms/EditWashroomForm";

export default function EditWashroomPage() {
  return (
    <div className="p-6 space-y-4">
      <Link href="/dashboard/washrooms">
        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-slate-600 dark:text-slate-300 transition-colors">
          <ArrowLeft size={20} strokeWidth={2.5} />
        </button>
      </Link>
      <EditWashroomForm />
    </div>
  );
}

