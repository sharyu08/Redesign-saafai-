"use client";

import { ChevronLeft, Edit3 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EditHeader() {
    const router = useRouter();

    return (
        <div className="w-full mb-6">
            <div className="page-header page-header-white">
                <div className="page-header-content">
                    <div className="page-header-title-section">
                        <div className="page-header-icon">
                            <Edit3 className="h-6 w-6 text-primary-light" strokeWidth={2.5} />
                        </div>

                        <div className="text-left">
                            <h1 className="page-header-title">
                                Edit Zone Type
                            </h1>
                            <p className="page-header-subtitle">
                                Configuration Portal • Workspace Management
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => router.back()}
                        className="btn-secondary flex items-center gap-2 px-6 py-3 text-xs-standard uppercase tracking-widest active:scale-95"
                    >
                        <ChevronLeft size={14} strokeWidth={3} />
                        Back to List
                    </button>
                </div>
            </div>
        </div>
    );
}