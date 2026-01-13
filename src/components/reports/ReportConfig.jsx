"use client";
import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Settings2, MapPin, Calendar as CalendarIcon, ChevronDown, BarChart3, RefreshCw } from 'lucide-react';
import ReportStats from "./generated/ReportStats";
import ReportSummaryHeader from "./generated/ReportSummaryHeader";
import ReportTable from "./generated/ReportTable";

export default function ReportConfig({ selectedReport, config, startDate, setStartDate, endDate, setEndDate }) {
    const [isGenerating, setIsGenerating] = React.useState(false);
    const [showGeneratedReport, setShowGeneratedReport] = React.useState(false);

    // Sample data for the report
    const reportData = [
        {
            id: 1,
            cleaner: 'John Doe',
            zone: 'Dhantoli',
            location: 'Mehadiya Chowk',
            date: '22-12-2025',
            time: '09:00 AM',
            status: 'Completed',
            score: 95,
        },
        {
            id: 2,
            cleaner: 'Anil Saafai',
            zone: 'Dharampeth',
            location: 'Ramnagar Chowk',
            date: '22-12-2025',
            time: '10:30 AM',
            status: 'In Progress',
            score: 82,
        },
        {
            id: 3,
            cleaner: 'Priya Sharma',
            zone: 'Civil Lines',
            location: 'Sadar Bazaar',
            date: '22-12-2025',
            time: '11:15 AM',
            status: 'Completed',
            score: 91,
        },
        {
            id: 4,
            cleaner: 'Rahul Kumar',
            zone: 'Mahal',
            location: 'Tekdi Road',
            date: '22-12-2025',
            time: '02:00 PM',
            status: 'Pending',
            score: 78,
        }
    ];

    const handleGenerateReport = () => {
        setIsGenerating(true);

        // Simulate report generation
        setTimeout(() => {
            setIsGenerating(false);
            setShowGeneratedReport(true);
        }, 2000);
    };

    const handleBackToConfig = () => {
        setShowGeneratedReport(false);
    };

    // If report is generated, show the generated view
    if (showGeneratedReport) {
        return (
            <>
                <ReportSummaryHeader
                    reportType={selectedReport}
                    data={reportData}
                    onBackToConfig={handleBackToConfig}
                />
                <div className="space-y-6">
                    <ReportStats data={reportData} />
                    <ReportTable data={reportData} />
                </div>
            </>
        );
    }

    return (
        <div className="card-global bg-white dark:bg-card border-slate-200">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-100 dark:border-border">
                <Settings2 size={18} className="text-indigo-500" />
                <div>
                    <h2 className="text-[14px] font-black text-slate-800 dark:text-foreground uppercase">Configure {selectedReport}</h2>
                    <p className="text-[9px] font-bold text-slate-400 dark:text-muted-foreground uppercase tracking-widest mt-0.5">
                        Customize the filters for your data export
                    </p>
                </div>
            </div>

            <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {config?.fields?.map((field, idx) => {
                        if (field.type === "select") {
                            return (
                                <div key={idx} className="space-y-2">
                                    <label className="form-label text-slate-500 flex items-center gap-2">
                                        <MapPin size={10} className="text-indigo-400" /> {field.label}
                                    </label>
                                    <div className="relative group">
                                        <select className="form-select bg-slate-50/50 dark:bg-muted border-slate-200 focus:border-indigo-500">
                                            {field.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                        </select>
                                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" />
                                    </div>
                                </div>
                            );
                        }
                        if (field.type === "date-range" || field.type === "date-single") {
                            return (
                                <div key={idx} className="space-y-2">
                                    <label className="form-label text-slate-500 flex items-center gap-2">
                                        <CalendarIcon size={10} className="text-indigo-500" /> {field.label}
                                    </label>
                                    <div className="relative z-[100]">
                                        <DatePicker
                                            selected={field.isEnd ? endDate : startDate}
                                            onChange={(date) => field.isEnd ? setEndDate(date) : setStartDate(date)}
                                            className="form-input bg-white dark:bg-card border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 pl-12 pr-4 py-3 rounded-xl shadow-sm transition-all w-full"
                                            placeholderText="DD-MM-YYYY"
                                            dateFormat="dd-MM-yyyy"
                                            portalId="root-portal"
                                        />
                                        <CalendarIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none" />
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>

                <div className="pt-6 flex flex-col md:flex-row gap-3">
                    <button
                        onClick={handleGenerateReport}
                        disabled={isGenerating}
                        className="btn btn-secondary bg-gradient-to-r from-[#2EC4B6] to-[#10B981] text-white px-8 py-3 shadow-lg shadow-teal-500/30 active:scale-95 rounded-xl flex items-center gap-2 border-none disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <BarChart3 size={16} strokeWidth={2.5} />
                        <span className="uppercase tracking-widest text-[11px] font-black">
                            {isGenerating ? 'Generating...' : 'Generate Detailed Report'}
                        </span>
                    </button>

                    <button className="btn bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 text-indigo-600 px-8 py-3 hover:bg-indigo-100 rounded-xl flex items-center gap-2">
                        <RefreshCw size={16} strokeWidth={2.5} />
                        <span className="uppercase tracking-widest text-[11px] font-black">Reset Filters</span>
                    </button>
                </div>
            </div>
        </div>
    );
}