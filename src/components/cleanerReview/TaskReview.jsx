"use client";

export default function TaskReview() {
    return (
        <div className="rounded-2xl bg-white border border-pink-300 shadow-sm p-5 space-y-4">
            <h3 className="font-semibold text-slate-800">Task Review</h3>

            <div className="flex justify-between items-center bg-slate-50 rounded-xl p-4">
                <div>
                    <p className="text-sm text-slate-500">Cleaning Status</p>
                    <p className="text-sm font-medium text-slate-700">
                        Unsanitized Condition
                    </p>
                </div>

                <div className="h-14 w-14 rounded-full border-4 border-pink-500 flex items-center justify-center font-semibold text-slate-800">
                    6/10
                </div>
            </div>

            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
                <p className="text-sm text-emerald-700">
                    ✔ Completed in 1m
                </p>
                <p className="text-xs text-slate-500 mt-1">
                    Finished: 13/12/2025, 11:13 am
                </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div className="h-24 rounded-lg bg-slate-200" />
                <div className="h-24 rounded-lg bg-slate-200" />
            </div>
        </div>
    );
}
