"use client";

export default function ActivityStats() {
    return (
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 space-y-6">

            <h3 className="text-lg font-semibold text-slate-800">
                Filter Activity
            </h3>

            {/* Completion */}
            <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 rounded-full border-4 border-teal-500 flex items-center justify-center text-sm font-semibold text-teal-600">
                    75%
                </div>
                <div>
                    <p className="text-sm font-medium text-slate-700">
                        Completion Rate Today
                    </p>
                    <p className="text-xs text-slate-500">
                        Avg Score: 8.5
                    </p>
                </div>
            </div>

            {/* Score */}
            <div>
                <p className="text-sm font-medium text-slate-700 mb-2">
                    Score: <span className="text-teal-600">8.2 / 10</span>
                </p>
                <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-[82%] rounded-full bg-teal-500" />
                </div>
            </div>

            {/* Location */}
            <p className="text-xs text-slate-500">
                📍 Budhawar Bazzar
            </p>
        </div>
    );
}
