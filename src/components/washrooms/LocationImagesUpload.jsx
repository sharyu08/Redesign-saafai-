"use client";

import { HiOutlineCloudUpload } from "react-icons/hi";
import { Image as ImageIcon, Info } from "lucide-react";

export default function LocationImagesUpload() {
    return (
        <div className="space-y-6">
            {/* Section Header - Synchronized with Page Header tokens */}
            <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-xl bg-cyan-400/10 flex items-center justify-center border border-cyan-500/10 shadow-sm">
                    <HiOutlineCloudUpload className="text-cyan-600 dark:text-cyan-400 text-xl" />
                </div>
                <div className="text-left">
                    <h2 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-[0.2em] leading-none">
                        Location Images
                    </h2>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 opacity-70">
                        Visual Verification Archive
                    </p>
                </div>
            </div>

            {/* Upload Area using .card-global logic and faint transparent accents */}
            <div className="
                group relative
                border-2 border-dashed border-slate-200 dark:border-slate-800 
                rounded-[24px] 
                p-12 text-center 
                bg-slate-50/50 dark:bg-slate-800/10
                hover:bg-cyan-400/5 hover:border-cyan-500/30 
                transition-all duration-300
            ">
                <div className="flex flex-col items-center">
                    {/* Visual Icon for Upload - Matches .icon-container logic */}
                    <div className="mb-5 p-5 rounded-full bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                        <ImageIcon size={32} strokeWidth={1.5} />
                    </div>

                    <p className="text-xs font-black text-slate-700 dark:text-slate-200 uppercase tracking-widest mb-1">
                        Drag or Drop images here
                    </p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-6">
                        Supports JPG, PNG (Max 5MB each)
                    </p>

                    {/* Using .btn-primary recorded in global.css */}
                    <div className="btn-primary px-8 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest pointer-events-none">
                        Choose Images
                    </div>
                </div>

                {/* Hidden File Input */}
                <input
                    type="file"
                    multiple
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept="image/*"
                />
            </div>

            {/* Info Hint using theme tokens */}
            <div className="flex items-start gap-2 px-1">
                <Info size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                <p className="text-[10px] text-slate-500 dark:text-slate-400 italic leading-relaxed text-left">
                    Please upload clear images of the entrance and internal facilities for better
                    <span className="font-black text-cyan-600 dark:text-cyan-400 uppercase ml-1">verification.</span>
                </p>
            </div>
        </div>
    );
}