"use client";

import { useRouter } from "next/navigation";
import { Network, ChevronLeft } from "lucide-react";

export default function ShowHeader() {
    const router = useRouter();

    return (
        <div className="w-full mb-6">
            {/* Branded Container with Light Cyan Theme */}
            <div className="bg-[#E6F7F9] rounded-[24px] border border-[#D1F0F2] p-4 flex flex-col md:flex-row justify-between items-center gap-4 shadow-sm">

                <div className="flex items-center gap-5">
                    {/* Branded Icon Box (White Shield Style) */}
                    <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-white">
                        <Network className="h-6 w-6 text-[#58BECF]" strokeWidth={2.5} />
                    </div>

                    <div className="text-left">
                        <h1 className="text-lg font-black text-[#007C85] tracking-tight uppercase leading-none">
                            Location Hierarchy
                        </h1>
                        <p className="text-[10px] font-bold text-[#2D8E97] uppercase tracking-widest opacity-70 mt-1">
                            Drag and organize location mapping nodes
                        </p>
                    </div>
                </div>

                {/* Back Button with Themed Styling */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-[#007C85] text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95 shadow-sm"
                    >
                        <ChevronLeft size={14} strokeWidth={3} />
                        Back to Registry
                    </button>
                </div>
            </div>
        </div>
    );
}