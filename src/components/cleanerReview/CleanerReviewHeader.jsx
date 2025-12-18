"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function CleanerReviewHeader() {
    const router = useRouter();

    return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-5 space-y-2">

            {/* Back Button */}
            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-800"
            >
                <ArrowLeft size={16} />
                Back to Cleaner Activity
            </button>

            {/* Title */}
            <h1 className="text-xl font-semibold text-slate-800">
                Cleaning Review – Omkar saaf cleaner
                <span className="ml-3 rounded-md bg-orange-500 px-2 py-0.5 text-xs font-semibold text-white">
                    6/10
                </span>
            </h1>

            {/* Location */}
            <p className="text-sm text-slate-500">
                📍 Narendra nagar square
            </p>
        </div>
    );
}
