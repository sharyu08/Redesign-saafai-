// src/app/dashboard/locationHierarchy/show/page.jsx
"use client";

import {
    ShowHeader,
    ParentMapping,
    SaveActions,
} from "@/components/locationHierarchyShow";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ShowHierarchyPage() {
    const router = useRouter();
    return (
        /* UI UPDATE: Applied a very soft neutral background (#F8FAFB) 
           to make the pure white cards pop. Added a max-width container 
           for better readability on ultra-wide monitors.
        */
        <div className="min-h-screen bg-white dark:bg-background pb-20">
            <div className="max-w-[1600px] mx-auto p-6 space-y-8">

                <button
                    onClick={() => router.back()}
                    className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-slate-600 dark:text-slate-300 transition-colors"
                >
                    <ChevronLeft size={20} strokeWidth={2.5} />
                </button>

                {/* Header Section */}
                <ShowHeader />

                {/* GRID ADJUSTMENT: 
                    Left (2/3): Parent Mapping (Main Task)
                    Right (1/3): Save Actions (Finalization)
                */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    <div className="lg:col-span-7 xl:col-span-8">
                        <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden">
                            <ParentMapping />
                        </div>
                    </div>

                    <div className="lg:col-span-5 xl:col-span-4 sticky top-6">
                        <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden">
                            <SaveActions />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}