"use client";

export default function HierarchyTreePreview() {
    return (
        <div className="rounded-2xl bg-white border border-[var(--border)] shadow-[var(--card-shadow)] p-6">
            <h2 className="mb-4 text-sm font-semibold text-[var(--text)]">
                Current Hierarchy (Tree View)
            </h2>

            <div className="space-y-4 text-sm">
                {/* Root */}
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                    <div className="rounded-xl border border-[var(--border)] px-3 py-2">
                        <p className="font-medium text-[var(--text)]">Nagpur Urban</p>
                        <p className="text-xs text-[var(--muted)]">ID: 113</p>
                    </div>
                </div>

                {/* Child */}
                <div className="ml-6 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" />
                    <div className="rounded-xl border border-[var(--border)] px-3 py-2">
                        <p className="font-medium text-[var(--text)]">Dharampeth Zone</p>
                        <p className="text-xs text-[var(--muted)]">ID: 159</p>
                    </div>
                </div>

                {/* Child */}
                <div className="ml-6 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                    <div className="rounded-xl border border-[var(--border)] px-3 py-2">
                        <p className="font-medium text-[var(--text)]">Nagpur East</p>
                        <p className="text-xs text-[var(--muted)]">ID: 129</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
