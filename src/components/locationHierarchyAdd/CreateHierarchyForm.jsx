"use client";

import { useRouter } from "next/navigation";

export default function CreateHierarchyForm() {
    const router = useRouter();

    return (
        <div className="rounded-2xl bg-white border border-[var(--border)] shadow-[var(--card-shadow)] p-6 space-y-5">
            <h2 className="text-sm font-semibold text-[var(--text)]">
                Create New Hierarchy
            </h2>

            {/* Hierarchy Name */}
            <div>
                <label className="block text-sm font-medium text-[var(--text)] mb-1">
                    Hierarchy Name <span className="text-red-500">*</span>
                </label>
                <input
                    placeholder="e.g., Ward, Floor, Platform"
                    className="w-full rounded-xl border border-[var(--border)] px-4 py-2 text-sm outline-none focus:border-[var(--primary)]"
                />
            </div>

            {/* Parent Hierarchy */}
            <div>
                <label className="block text-sm font-medium text-[var(--text)] mb-1">
                    Parent Hierarchy (optional)
                </label>
                <select
                    defaultValue="No Parent"
                    className="w-full rounded-xl border border-[var(--border)] px-4 py-2 text-sm outline-none focus:border-[var(--primary)]"
                >
                    <option>No Parent (Top Level)</option>
                    <option>Nagpur Urban</option>
                    <option>Dharampeth Zone</option>
                    <option>Nehru Nagar Zone</option>
                </select>
                <p className="mt-1 text-xs text-[var(--muted)]">
                    Select a parent to create hierarchy
                </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-3 pt-2">
                {/* Cancel */}
                <button
                    onClick={() => router.back()}
                    className="flex-1 rounded-xl border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--text)] hover:bg-slate-50"
                >
                    Cancel
                </button>

                {/* Submit */}
                <button className="flex-1 rounded-xl bg-[var(--secondary)] px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90">
                    Create Location Hierarchy
                </button>
            </div>
        </div>
    );
}
