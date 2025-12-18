"use client";

export default function CleanerActivityHeader() {
    return (
        <div className="rounded-2xl bg-white border border-[var(--border)] shadow-[var(--card-shadow)] px-6 py-4 flex justify-between items-center">
            <div>
                <h1 className="text-xl font-semibold text-[var(--text)]">
                    Cleaner Activity
                </h1>
                <p className="text-sm text-[var(--muted)]">
                    Track daily cleaning tasks
                </p>
            </div>

            <div className="flex gap-2">
                <button className="rounded-lg bg-[var(--secondary)] px-4 py-1.5 text-sm font-medium text-white">
                    All Tasks
                </button>
                <button className="rounded-lg bg-yellow-400 px-4 py-1.5 text-sm font-medium text-white">
                    Ongoing
                </button>
                <button className="rounded-lg bg-slate-200 px-4 py-1.5 text-sm font-medium text-slate-600">
                    Completed
                </button>
            </div>
        </div>
    );
}
