"use client";

import { useRouter } from "next/navigation";

const locations = [
    { id: "114", name: "Nagpur Urban", parent: "—" },
    { id: "115", name: "Dharampeth Zone", parent: "Nagpur Urban" },
    { id: "118", name: "Nehru Nagar Zone", parent: "Nagpur Urban" },
];

export default function LocationTable() {
    const router = useRouter();

    return (
        <div className="rounded-2xl bg-white shadow-[var(--card-shadow)] border border-[var(--border)]">
            <div className="border-b border-[var(--border)] px-6 py-4">
                <h2 className="text-lg font-semibold text-[var(--text)]">
                    All Location Hierarchy
                </h2>
            </div>

            <table className="w-full text-sm">
                <thead className="bg-slate-50 text-[var(--muted)]">
                    <tr>
                        <th className="px-6 py-3 text-left">ID</th>
                        <th className="px-6 py-3 text-left">Name</th>
                        <th className="px-6 py-3 text-left">Parent</th>
                        <th className="px-6 py-3 text-left">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {locations.map((loc) => (
                        <tr
                            key={loc.id}
                            className="border-t border-[var(--border)] hover:bg-slate-50 transition"
                        >
                            <td className="px-6 py-4 text-[var(--muted)]">#{loc.id}</td>
                            <td className="px-6 py-4 font-medium text-[var(--text)]">
                                {loc.name}
                            </td>
                            <td className="px-6 py-4 text-[var(--muted)]">
                                {loc.parent}
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={() =>
                                        router.push(`/dashboard/locationHierarchy/edit/${loc.id}`)
                                    }
                                    className="mr-3 text-[var(--accent)] hover:underline"
                                >
                                    Edit
                                </button>
                                <button className="text-[var(--secondary)] hover:underline">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


