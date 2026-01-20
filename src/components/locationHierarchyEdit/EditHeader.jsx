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


                </div>
            </div>
        </div>
    );
}