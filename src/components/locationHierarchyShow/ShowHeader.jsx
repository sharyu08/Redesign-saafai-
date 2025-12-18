"use client";

import { useRouter } from "next/navigation";

export default function ShowHeader() {
    const router = useRouter();

    return (
        <div className="rounded-2xl bg-white border border-[var(--border)] shadow-[var(--card-shadow)] px-6 py-5">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold text-[var(--text)]">
                        Location Hierarchy
                    </h1>
                    <p className="text-sm text-[var(--muted)]">
                        Drag and organize location hierarchy
                    </p>
                </div>

                <button
                    onClick={() => router.back()}
                    className="text-sm text-[var(--accent)] hover:underline"
                >
                    ← Back
                </button>
            </div>
        </div>
    );
}
