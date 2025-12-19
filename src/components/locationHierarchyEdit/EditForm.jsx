"use client";

export default function EditForm() {
    return (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm">
            <div className="p-6 space-y-5">
                <div>
                    <label className="text-sm font-medium text-[var(--text)]">
                        Type Name *
                    </label>
                    <input
                        defaultValue="Nagpur Urban"
                        className="mt-1 w-full rounded-xl border border-[var(--border)] px-4 py-2 text-sm outline-none focus:border-[var(--primary)]"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-[var(--text)]">
                        Parent Type (optional)
                    </label>
                    <select className="mt-1 w-full rounded-xl border border-[var(--border)] px-4 py-2 text-sm">
                        <option>No Parent (Top Level)</option>
                        <option>Nagpur Urban</option>
                    </select>
                    <p className="mt-1 text-xs text-[var(--muted)]">
                        Select a parent type to create a hierarchy
                    </p>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                    <button className="rounded-xl border border-[var(--border)] px-4 py-2 text-sm">
                        Cancel
                    </button>
                    <button className="rounded-xl bg-[var(--primary)] px-5 py-2 text-sm font-semibold text-white shadow hover:opacity-90">
                        💾 Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
