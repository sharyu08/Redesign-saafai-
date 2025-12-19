"use client";

import { useRouter } from "next/navigation";

const locations = [
    { id: "114", name: "Nagpur Urban" },
    { id: "118", name: "Dharampeth Zone" },
    { id: "119", name: "Nehru Nagar Zone" },
];

export default function SaveActions() {
    const router = useRouter();

    return (
        <div className="rounded-2xl bg-white border border-[var(--border)] shadow-[var(--card-shadow)] p-4">
            <h2 className="mb-2 text-sm font-semibold text-[var(--text)]">
                Save Hierarchy
            </h2>
            <p className="mb-4 text-xs text-[var(--muted)]">
                Review and save hierarchy changes
            </p>

            <div className="space-y-3">
                {locations.map((loc) => (
                    <div
                        key={loc.id}
                        className="flex items-center justify-between rounded-xl border border-[var(--border)] px-3 py-2 text-sm"
                    >
                        <button
                            onClick={() =>
                                router.push(`/dashboard/locationHierarchy/edit/${loc.id}`)
                            }
                            className="text-[var(--accent)] hover:underline"
                        >
                            Edit
                        </button>

                        <button className="rounded-lg bg-[var(--secondary)] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90">
                            Save Changes
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
