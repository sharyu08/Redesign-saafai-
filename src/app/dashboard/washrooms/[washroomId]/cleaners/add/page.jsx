"use client";

import MapCleanersForm from "@/components/assigned-cleaners/MapCleanersForm";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AddCleanersPage() {
  const router = useRouter();
  const params = useParams();
  const washroomId = params.washroomId;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Uniform Back Button */}
      <div className="max-w-4xl mx-auto mb-6">
        <Link href={`/dashboard/washrooms/${washroomId}/cleaners`}>
          <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-slate-600 dark:text-slate-300 transition-colors">
            <ArrowLeft size={20} strokeWidth={2.5} />
          </button>
        </Link>
      </div>

      <MapCleanersForm />
    </div>
  );
}
