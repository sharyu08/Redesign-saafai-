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
                        <FolderPlus className="h-6 w-6 text-[hsl(var(--primary-light))]" strokeWidth={2.5} />
                    </div>
                    <div className="text-left">
                        <h1 className="page-header-title">
                            Add New Zone Type
                        </h1>
                        <p className="page-header-subtitle">
                            <MapPin size={12} className="text-[hsl(var(--text-muted))]" />
                            Configure Workspace Architecture
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}