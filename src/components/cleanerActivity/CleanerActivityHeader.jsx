"use client";

import { useState } from "react";
import { HiOutlineClipboardList } from "react-icons/hi";
import { ClipboardList } from "lucide-react";

export default function CleanerActivityHeader() {
    const [activeTab, setActiveTab] = useState('all'); // 'all', 'ongoing', 'completed'

    return (
        <div className="page-header">
            <div className="page-header-content flex-col gap-4 sm:flex-row sm:items-center sm:gap-0">
                {/* Left content: Icon, Title & Subtext */}
                <div className="page-header-title-section">
                    <div className="page-header-icon">
                        <ClipboardList className="h-6 w-6 text-primary-light" strokeWidth={2.5} />
                    </div>
                    <div>
                        <h1 className="page-header-title">
                            Cleaners Activity
                        </h1>
                        <p className="page-header-subtitle">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-light animate-pulse"></span>
                            Monitor real-time daily cleaning tasks and progress
                        </p>
                    </div>
                </div>

                {/* Right Side: Filter Tabs */}
                <div className="flex flex-col sm:flex-row items-center bg-[#F7F7FF] dark:bg-[hsl(224,48%,14%)] p-1.5 rounded-xl gap-1 w-full sm:w-auto">
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors flex-1 sm:flex-none ${activeTab === 'all'
                                ? 'text-white bg-[#FF9F1C] dark:bg-[hsl(var(--primary))] shadow-sm hover:bg-[#E68900] dark:hover:bg-[hsl(var(--primary-dark))]'
                                : 'text-slate-600 dark:text-slate-300 hover:text-[#FF9F1C] dark:hover:text-[hsl(var(--primary))]'
                            }`}>
                        All Tasks
                    </button>

                    <button
                        onClick={() => setActiveTab('ongoing')}
                        className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors flex-1 sm:flex-none ${activeTab === 'ongoing'
                                ? 'text-white bg-[#FF9F1C] dark:bg-[hsl(var(--primary))] shadow-sm hover:bg-[#E68900] dark:hover:bg-[hsl(var(--primary-dark))]'
                                : 'text-slate-600 dark:text-slate-300 hover:text-[#FF9F1C] dark:hover:text-[hsl(var(--primary))]'
                            }`}>
                        Ongoing
                    </button>

                    <button
                        onClick={() => setActiveTab('completed')}
                        className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors flex-1 sm:flex-none ${activeTab === 'completed'
                                ? 'text-white bg-[#FF9F1C] dark:bg-[hsl(var(--primary))] shadow-sm hover:bg-[#E68900] dark:hover:bg-[hsl(var(--primary-dark))]'
                                : 'text-slate-600 dark:text-slate-300 hover:text-[#FF9F1C] dark:hover:text-[hsl(var(--primary))]'
                            }`}>
                        Completed
                    </button>
                </div>
            </div>
        </div>
    );
}