"use client";

import { CheckCircle2, XCircle } from "lucide-react";

export default function StatusBadge({ status }) {
    // Normalize status to lowercase for comparison
    const normalizedStatus = status?.toLowerCase();
    const isActive = normalizedStatus === "active" || status === true;

    return (
        <span className={`badge-status ${isActive ? 'active' : 'inactive'}`}>
            <div className={`h-1.5 w-1.5 rounded-full animate-pulse ${isActive ? "bg-accent-green" : "bg-accent-red"}`} />
            {isActive ? (
                <>
                    <CheckCircle2 size={10} strokeWidth={3} />
                    Active
                </>
            ) : (
                <>
                    <XCircle size={10} strokeWidth={3} />
                    Inactive
                </>
            )}
        </span>
    );
}
