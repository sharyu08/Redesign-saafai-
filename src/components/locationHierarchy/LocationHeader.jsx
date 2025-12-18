"use client";

import Link from "next/link";

export default function LocationHeader() {
    return (
        <div className="rounded-2xl bg-white px-6 py-5 shadow-[var(--card-shadow)] border border-[var(--border)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                {/* Title */}
                <div>
                    <h1 className="text-xl font-semibold text-[var(--text)]">
                        Location Hierarchy
                    </h1>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                        Company-specific location hierarchy
                    </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                    <Link href="/dashboard/locationHierarchy/show">
                        <button className="rounded-xl border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--text)] hover:bg-slate-50">
                            Show Hierarchy
                        </button>
                    </Link>

                    <Link href="/dashboard/locationHierarchy/add">
                        <button className="rounded-xl bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90">
                            + Add Tree Hierarchy
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}


