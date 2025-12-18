"use client";

export default function HierarchyTree() {
    return (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
            <h2 className="mb-4 text-sm font-semibold text-[var(--text)]">
                Current Type in Hierarchy (Tree View)
            </h2>

            <div className="flex flex-col items-center gap-6 text-sm">
                <div className="rounded-xl border px-4 py-2 shadow">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500"></span>
                    Nagpur Urban <span className="text-xs text-[var(--muted)]">(ID: 118)</span>
                </div>

                <div className="flex gap-8">
                    <div className="rounded-xl border px-4 py-2 shadow">
                        Nagpur Urban <span className="text-xs text-[var(--muted)]">(ID: 179)</span>
                    </div>

                    <div className="rounded-xl border px-4 py-2 shadow">
                        <span className="mr-1 inline-block h-2 w-2 rounded-full bg-[var(--secondary)]"></span>
                        Dharampeth Zone <span className="text-xs text-[var(--muted)]">(ID: 776)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
