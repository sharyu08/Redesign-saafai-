"use client";

export default function LocationSearch() {
    return (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm">
            <input
                type="text"
                placeholder="Search location hierarchy..."
                className="w-full rounded-xl border border-[var(--border)] px-4 py-2 text-sm outline-none focus:border-[var(--primary)]"
            />
        </div>
    );
}
