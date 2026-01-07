"use client";

import { useRouter } from "next/navigation";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { MdOutlineRateReview } from "react-icons/md";

import { ArrowLeft, Star, MapPin } from "lucide-react";

export default function CleanerReviewHeader() {
    const router = useRouter();

    return (
        <div className="page-header">
            <div className="page-header-content">
                {/* Left content: Navigation & Title */}
                <div className="space-y-3">
                    {/* Back Button */}
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-xs-standard font-bold uppercase tracking-wider text-primary-dark hover:text-primary transition-colors group"
                    >
                        <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={16} />
                        Back to Cleaner Activity
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="page-header-icon">
                            <Star className="h-6 w-6 text-primary-light" strokeWidth={2.5} />
                        </div>
                        <div>
                            <div className="flex items-center gap-3">
                                <h1 className="page-header-title text-2xl">
                                    Cleaning Review – Omkar Saaf Cleaner
                                </h1>
                                <span className="badge-score">
                                    6/10
                                </span>
                            </div>
                            <p className="page-header-subtitle mt-1">
                                <MapPin className="h-4 w-4" />
                                Narendra Nagar Square
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}