"use client";

import { useRouter } from "next/navigation";
import { Network, ChevronLeft } from "lucide-react";

export default function ShowHeader() {
    const router = useRouter();

    return (
        <div className="w-full mb-8">
            <div className="page-header page-header-white">
                <div className="page-header-content">
                    <div className="page-header-title-section">
                        <div className="page-header-icon">
                            <Network className="h-6 w-6 text-primary-light" strokeWidth={2.5} />
                        </div>

                        <div className="text-left">
                            <h1 className="page-header-title">
                                Zone Architecture
                            </h1>
                            <p className="page-header-subtitle">
                                Manage and organize functional zone relationships
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}