"use client";

import { useState } from "react"; // Added for modal control
import Link from "next/link";
import { MapPin, Clock, ArrowRight, User, X } from "lucide-react"; // Added X for closing modal

export default function ActivityCard({ activity }) {
    // 1. State to manage the Gallery Modal visibility
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    const IMAGE_BASE_PATH = "/image/CleanerActivity";

    const getFullImgPath = (imgName) => {
        if (imgName === undefined || imgName === null) return "";
        const nameStr = String(imgName);
        const nameWithExtension = nameStr.endsWith(".webp") ? nameStr : `${nameStr}.webp`;
        return `${IMAGE_BASE_PATH}/${nameWithExtension}`;
    };

    return (
        <>
            <div className="flex flex-col justify-between rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 p-5 h-[380px] transition-all duration-300 group border-0">
                <div className="space-y-3">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-[#FDF9F2] flex items-center justify-center">
                                <User className="h-5 w-5 text-[#FF9F1C]" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-slate-900 leading-none mb-1">
                                    {activity.cleanerName}
                                </h3>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                                    Staff Member
                                </span>
                            </div>
                        </div>
                        <span className="rounded-full bg-emerald-50 border border-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                            Completed
                        </span>
                    </div>

                    <div className="py-2">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight mb-3">
                            Evidence Logs ({activity.images?.length || 0})
                        </p>

                        {/* 2. Interactive Image Stack */}
                        <div className="flex items-center -space-x-3">
                            {activity.images?.slice(0, 4).map((imgName, i) => (
                                <button
                                    key={i}
                                    onClick={() => setIsGalleryOpen(true)}
                                    className="h-14 w-14 rounded-full overflow-hidden relative hover:z-30 hover:scale-105 transition-all cursor-pointer shadow-sm hover:shadow-md border-2 border-white"
                                    style={{ zIndex: 10 - i }}
                                >
                                    <img
                                        src={getFullImgPath(imgName)}
                                        alt="log"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = `https://ui-avatars.com/api/?name=${i + 1}&background=F1F5F9&color=64748B&bold=true`;
                                        }}
                                    />
                                </button>
                            ))}

                            {activity.images?.length > 4 && (
                                <button
                                    onClick={() => setIsGalleryOpen(true)}
                                    className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF9F1C] text-xs font-black text-white shadow-sm z-20 hover:bg-[#5A52E0] transition-all cursor-pointer active:scale-95 border-2 border-white"
                                >
                                    +{activity.images.length - 4}
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="bg-[#FAFAFF] rounded-2xl p-4 space-y-2.5 border border-[#FDF9F2]">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                        <MapPin className="h-3.5 w-3.5 text-[#FF9F1C]" />
                        <span className="truncate">{activity.location}</span>
                    </div>
                    <div className="flex flex-col gap-1.5 pl-4 border-l-2 border-[#CBF3F0]">
                        <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                            <Clock className="h-3 w-3 text-[#8A84FF]" />
                            <span>Finished: {activity.finishedAt}</span>
                        </div>
                        <p className="text-[11px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full w-fit uppercase tracking-widest">
                            Validated • 1m
                        </p>
                    </div>
                </div>

                <div className="pt-2">
                    <Link
                        href={`/dashboard/cleaner-activity/${activity.id}`}
                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold text-[#FF9F1C] hover:bg-[#FDF9F2] transition-all duration-300 active:scale-95 border border-[#CBF3F0]"
                    >
                        Detailed Report
                        <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                </div>
            </div>

            {/* 3. GALLERY MODAL OVERLAY */}
            {isGalleryOpen && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white w-full max-w-4xl rounded-[32px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
                        {/* Modal Header */}
                                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0">
                            <div>
                                        <h2 className="text-xl font-black text-[hsl(var(--primary))] uppercase tracking-tight">Full Evidence Log</h2>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{activity.cleanerName} • {activity.location}</p>
                            </div>
                            <button
                                onClick={() => setIsGalleryOpen(false)}
                                className="p-2 bg-slate-50 hover:bg-rose-50 hover:text-rose-500 rounded-full transition-all"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Modal Content: Full Grid of all photos */}
                        <div className="p-6 overflow-y-auto">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {activity.images?.map((imgName, idx) => (
                                    <div key={idx} className="aspect-square rounded-2xl overflow-hidden border border-slate-100 bg-slate-50">
                                        <img
                                            src={getFullImgPath(imgName)}
                                            alt={`Evidence ${idx + 1}`}
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                            onError={(e) => {
                                                e.target.src = `https://ui-avatars.com/api/?name=${idx + 1}&background=F1F5F9&color=64748B&bold=true`;
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Modal Footer */}
                            <div className="p-6 border-t border-slate-100 flex justify-end bg-slate-50">
                            <button
                                onClick={() => setIsGalleryOpen(false)}
                                className="btn-primary px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest active:scale-95"
                            >
                                Close Gallery
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}