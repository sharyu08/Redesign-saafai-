"use client";

import Link from "next/link";

export default function ActivityCard({ activity }) {
    return (
        <div className="flex flex-col justify-between rounded-2xl bg-white border border-slate-200 shadow-sm p-4 h-[360px]">

            {/* Header */}
            <div className="flex items-start justify-between">
                <h3 className="text-sm font-semibold text-slate-800 leading-snug">
                    {activity.cleanerName}
                </h3>
                <span className="rounded-full bg-green-100 px-3 py-0.5 text-xs font-medium text-green-600">
                    completed
                </span>
            </div>

            {/* Images */}
            <div className="mt-3 flex items-center gap-2">
                {activity.images.slice(0, 4).map((_, i) => (
                    <div
                        key={i}
                        className="h-12 w-12 rounded-full bg-slate-200 overflow-hidden"
                    />
                ))}

                {activity.images.length > 4 && (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-xs font-semibold text-white">
                        +{activity.images.length - 4}
                    </div>
                )}
            </div>

            {/* Location & Time */}
            <div className="mt-4 space-y-1 text-xs text-slate-500">
                <p className="flex items-center gap-1">
                    📍 {activity.location}
                </p>
                <p>
                    Finished: {activity.finishedAt}
                </p>
                <p className="text-green-600 font-medium">
                    Completed in 1m
                </p>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-slate-100">
                <Link
                    href={`/dashboard/cleaner-activity/${activity.id}`}
                    className="text-sm font-medium text-teal-600 hover:underline"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}
