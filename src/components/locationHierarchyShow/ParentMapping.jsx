"use client";

const locations = [
    "Nagpur Urban",
    "Dharampeth Zone",
    "Nehru Nagar Zone",
    "Dhantoli",
];

export default function ParentMapping() {
    return (
        <div className="rounded-2xl bg-white border border-[var(--border)] shadow-[var(--card-shadow)] p-4">
            <h2 className="mb-2 text-sm font-semibold text-[var(--text)]">
                Parent Mapping
            </h2>
            <p className="mb-4 text-xs text-[var(--muted)]">
                Assign parent locations
            </p>

            <div className="space-y-3">
                {locations.map((loc) => (
                    <select
                        key={loc}
                        defaultValue="Nagpur Urban"
                        className="w-full rounded-xl border border-[var(--border)] px-3 py-2 text-sm outline-none focus:border-[var(--primary)]"
                    >
                        <option value="No Parent">No Parent</option>
                        <option value="Nagpur Urban">Nagpur Urban</option>
                        <option value="Dharampeth Zone">Dharampeth Zone</option>
                        <option value="Nehru Nagar Zone">Nehru Nagar Zone</option>
                    </select>
                ))}
            </div>
        </div>
    );
}
