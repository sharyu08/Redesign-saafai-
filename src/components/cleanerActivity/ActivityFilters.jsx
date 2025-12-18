"use client";

export default function ActivityFilters() {
    return (
        <div className="rounded-2xl bg-white border border-[var(--border)] shadow-[var(--card-shadow)] px-6 py-3 flex justify-between items-center">
            <div className="flex items-center gap-3 text-sm">
                <span className="text-[var(--muted)]">Filter by Date:</span>
                <input
                    type="date"
                    className="rounded-lg border border-[var(--border)] px-3 py-1 text-sm"
                />
                <button className="text-[var(--accent)] hover:underline">
                    Reset Filters
                </button>
            </div>

            <div className="flex items-center gap-2">
                <span className="text-sm text-[var(--text)]">Today’s Activity</span>
                <input type="checkbox" defaultChecked />
            </div>
        </div>
    );
}
