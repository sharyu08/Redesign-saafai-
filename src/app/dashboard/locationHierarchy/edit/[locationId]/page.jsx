"use client";

import {
    EditHeader,
    EditForm,
    HierarchyTree,
} from "@/components/locationHierarchyEdit";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EditLocationHierarchyPage() {
    const router = useRouter();
    return (
        <div className="min-h-screen p-6 bg-white">
            {/* Back Button */}
            <div className="page-header-actions mb-6">
                <button
                    onClick={() => router.back()}
                    className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-slate-600 dark:text-slate-300 transition-colors"
                >
                    <ChevronLeft size={20} strokeWidth={2.5} />
                </button>
            </div>
            <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                    <EditHeader />
                    <EditForm />
                </div>
                <HierarchyTree />
            </div>
        </div>
    );
}
