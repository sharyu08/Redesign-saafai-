"use client";

import { ArrowLeft, UserPlus, Users } from "lucide-react";
import Link from "next/link";

export default function CleanerHeader() {
    return (
        <div className="page-header page-header-white">
            <div className="page-header-content">
                {/* Left Section: Title and Breadcrumb */}
                <div className="page-header-title-section">
                    <Link href="/dashboard/washrooms" className="text-primary-dark hover:text-primary">
                        <ArrowLeft className="h-5 w-5 mr-2" />
                    </Link>
                    <div>
                        <h1 className="page-header-title text-2xl">
                            Assigned Cleaners
                        </h1>
                        <div className="mt-1 flex items-center text-sm-standard text-muted-foreground">
                            <span>Washroom Management</span>
                            <span className="mx-2">/</span>
                            <span className="text-primary-dark">Abhyankar Nagar Garden</span>
                        </div>
                    </div>
                </div>

                {/* Right Section: Stats and Action Button */}
                <div className="page-header-actions flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
                    <div className="flex items-center bg-light-gray dark:bg-muted px-4 py-2 rounded-lg border border-border">
                        <Users className="h-5 w-5 text-primary-light mr-2" />
                        <span className="text-sm-standard font-medium text-foreground">
                            Staffing: <span className="font-semibold">2/2</span> Cleaners
                        </span>
                    </div>
                    
                    <Link href="/dashboard/washrooms/1/cleaners/add" className="w-full sm:w-auto">
                        <button className="btn btn-primary w-full flex items-center justify-center gap-2 px-6 py-2.5 text-sm-standard font-semibold">
                            <UserPlus size={18} className="h-4 w-4" />
                            Add Cleaner
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}