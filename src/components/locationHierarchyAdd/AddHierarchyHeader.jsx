"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, FolderPlus, MapPin } from "lucide-react";

export default function AddHierarchyHeader() {
    const router = useRouter();

    return (
        <div className="page-header">
            <div className="page-header-content">
                {/* Title & Description Section */}
                <div className="page-header-title-section">
                    <div className="page-header-icon">
                        <FolderPlus className="h-6 w-6 text-primary-light" strokeWidth={2.5} />
                    </div>
                    <div className="text-left">
                        <h1 className="page-header-title">
                            Add New Zone Type
                        </h1>
                        <p className="page-header-subtitle">
                            <MapPin size={12} />
                            Configure Workspace Architecture
                        </p>
                    </div>
                </div>

                {/* Back Button */}
                <div className="page-header-actions">
                    <button
                        onClick={() => router.back()}
                        className="btn btn-secondary flex items-center gap-2 px-5 py-2.5 text-xs-standard uppercase tracking-widest active:scale-95"
                    >
                        <ChevronLeft size={16} strokeWidth={3} />
                        Back to List
                    </button>
                </div>
            </div>
        </div>
    );
}