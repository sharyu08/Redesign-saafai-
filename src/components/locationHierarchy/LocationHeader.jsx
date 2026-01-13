"use client";

import Link from "next/link";
import { Network, TreePine, Plus, LayoutGrid } from "lucide-react";

export default function LocationHeader() {
    return (
        <div className="page-header">
            <div className="page-header-content">
                {/* Title Section */}
                <div className="page-header-title-section">
                    <div className="page-header-icon">
                        <Network className="h-6 w-6 text-[hsl(var(--primary-light))]" strokeWidth={2.5} />
                    </div>
                    <div className="text-left">
                        <h1 className="page-header-title">
                            Location Hierarchy
                        </h1>
                        <p className="page-header-subtitle">
                            <TreePine size={12} className="text-[hsl(var(--text-muted))]" />
                            Organization Structure & Zones
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="page-header-actions flex items-center gap-3">
                    {/* Show Hierarchy - Using global secondary button */}
                    <Link href="/dashboard/locationHierarchy/show">
                        <button className="btn-secondary flex items-center justify-center gap-2 px-5 py-2.5 min-w-[160px] h-[42px] text-[10px] font-black uppercase tracking-[0.15em] active:scale-95">
                            <LayoutGrid size={16} strokeWidth={2.5} />
                            <span className="whitespace-nowrap">Show Hierarchy</span>
                        </button>
                    </Link>

                    {/* Add Tree Hierarchy - Using global primary button */}
                    <Link href="/dashboard/locationHierarchy/add">
                        <button className="btn-primary flex items-center gap-2 px-6 py-3 text-xs-standard uppercase tracking-widest active:scale-95">
                            <Plus size={18} strokeWidth={3} />
                            <span className="whitespace-nowrap">Add Tree Hierarchy</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}