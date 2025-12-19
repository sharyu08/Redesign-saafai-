"use client";

export default function TaskSummary() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-5">
                <h3 className="font-semibold text-slate-800 mb-2">Task Details</h3>
                <p className="text-sm text-slate-500">Started:</p>
                <p className="text-sm text-slate-700">13/12/2025, 11:13 am</p>
                <p className="mt-2 text-sm text-green-600">✔ Completed in 1m</p>
            </div>

            <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-5">
                <h3 className="font-semibold text-emerald-700 mb-2">
                    Final Comment
                </h3>
                <p className="text-sm text-emerald-700">
                    mostly clean
                </p>
            </div>

        </div>
    );
}
