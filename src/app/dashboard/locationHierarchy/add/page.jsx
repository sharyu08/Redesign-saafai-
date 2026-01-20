"use client";

import {
    AddHierarchyHeader,
    CreateHierarchyForm,
    HierarchyTreePreview,
} from "@/components/locationHierarchyAdd";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddHierarchyPage() {
    const router = useRouter();
    return (
        <div className="min-h-screen bg-white dark:bg-background pb-12 transition-all duration-300 p-4 md:p-8">

            {/* 1. Header Section - Acts as a floating white command bar */}
            <div className="z-20 rounded-2xl mb-8">
                {/* Back Button */}
                <div className="page-header-actions">
                    <button
                        onClick={() => router.back()}
                        className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-slate-600 dark:text-slate-300 transition-colors"
                    >
                        <ChevronLeft size={20} strokeWidth={2.5} />
                    </button>
                </div>
                <AddHierarchyHeader />
            </div>

            {/* 2. Content Grid - Two-column split for creation and visualization */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                {/* Form Column - Left */}
                <div className="relative group">
                    {/* Decorative branded glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(var(--primary))/0.08] to-[hsl(var(--primary-accent))/0.08] rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />

                    <div className="relative bg-white rounded-[32px] shadow-lg overflow-hidden">
                        <CreateHierarchyForm />
                    </div>
                </div>

                {/* Preview Column - Right */}
                <div className="relative h-full">
                    <div className="rounded-[32px] shadow-lg h-full overflow-hidden">
                        <HierarchyTreePreview />
                    </div>
                </div>
            </div>

        </div>
    );
}