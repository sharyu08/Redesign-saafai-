"use client";

import { useRouter } from "next/navigation";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { MdOutlineRateReview } from "react-icons/md";

export default function CleanerReviewHeader() {
    const router = useRouter();

    return (
        <div className="
            flex flex-col md:flex-row justify-between items-start md:items-center
            rounded-[var(--radius)]
            px-8 py-6
            /* Matching your Light Cyan theme (#E0F7FA) */
            bg-[#E0F7FA] 
            border border-[hsl(var(--primary)/0.2)]
            shadow-sm
            relative
            overflow-hidden
        ">
            {/* Subtle Background Accent Decor */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[hsl(var(--primary))] opacity-[0.03] rounded-full" />

            {/* Left content: Navigation & Title */}
            <div className="z-10 space-y-3">
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="
                        flex items-center gap-2 
                        text-xs font-bold uppercase tracking-wider 
                        text-[hsl(var(--primary-dark))] 
                        hover:text-[hsl(var(--primary))] 
                        transition-colors group
                    "
                >
                    <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" size={16} />
                    Back to Cleaner Activity
                </button>

                <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-white rounded-xl shadow-sm text-[hsl(var(--primary))]">
                        <MdOutlineRateReview size={24} />
                    </div>
                    <div>
                        <div className="flex items-center gap-3">
                            <h1 className="text-2xl font-extrabold tracking-tight text-[hsl(var(--foreground))]">
                                Cleaning Review – Omkar Saaf Cleaner
                            </h1>
                            <span className="rounded-lg bg-[hsl(var(--accent))] px-3 py-1 text-sm font-bold text-[hsl(var(--accent-foreground))] shadow-sm">
                                6/10
                            </span>
                        </div>
                        <p className="mt-1 text-sm font-medium text-[hsl(var(--muted-foreground))] flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[hsl(var(--primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Narendra Nagar Square
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
}