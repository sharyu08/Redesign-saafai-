"use client";

export default function VisualEvidence() {
    return (
        <div className="rounded-2xl bg-white border border-green-300 shadow-sm p-5 space-y-4">
            <h3 className="font-semibold text-slate-800">
                Visual Evidence (8 Photos)
            </h3>

            <p className="text-sm font-semibold text-pink-500">BEFORE</p>
            <p className="text-xs text-slate-500">Inspected & Completed</p>

            <div className="grid grid-cols-2 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div
                        key={i}
                        className="relative h-32 rounded-xl bg-slate-200 border border-green-400"
                    >
                        <span className="absolute top-2 left-2 rounded bg-white px-2 py-0.5 text-xs font-medium text-green-600">
                            after
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
