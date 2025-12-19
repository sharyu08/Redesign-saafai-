"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EditHeader() {
    const router = useRouter();

    return (
        <div className="rounded-t-2xl bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-5 text-white">
            <button
                onClick={() => router.back()}
                className="mb-1 flex items-center gap-2 text-sm opacity-90 hover:opacity-100"
            >
                <ArrowLeft size={16} /> Back
            </button>

            <h1 className="text-xl font-semibold">Edit Location Type</h1>
            <p className="text-sm opacity-80">
                Update location type information
            </p>
        </div>
    );
}
