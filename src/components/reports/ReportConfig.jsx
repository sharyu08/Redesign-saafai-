"use client";
import React from 'react';
import DatePicker from "react-datepicker";
// IMPORTANT: Ensure this is imported here or in your global layout/index.css
import "react-datepicker/dist/react-datepicker.css";
import { Settings2, MapPin, Calendar as CalendarIcon, ChevronDown } from 'lucide-react';

export default function ReportConfig({ selectedReport, config, startDate, setStartDate, endDate, setEndDate, onGenerate }) {
    const [isGenerating, setIsGenerating] = React.useState(false);

    const handleGenerate = () => {
        setIsGenerating(true);
        if (onGenerate) {
            onGenerate();
        }
        setTimeout(() => {
            setIsGenerating(false);
        }, 2000);
    };

    return (
        <div className="card-global bg-white dark:bg-card border-slate-200 shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-100 dark:border-border">
                <Settings2 size={18} className="text-indigo-500" />
                <div>
                    <h2 className="text-[14px] font-black text-slate-800 dark:text-foreground uppercase">Configure {selectedReport}</h2>
                    <p className="text-[9px] font-bold text-slate-400 dark:text-muted-foreground uppercase tracking-widest mt-0.5">
                        Customize the filters and date range for your report
                    </p>
                </div>
            </div>

            <div className="space-y-8">
                {/* Form Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {config?.fields?.map((field, idx) => {
                        if (field.type === "select") {
                            return (
                                <div key={idx} className="space-y-2">
                                    <label className="form-label text-slate-500 flex items-center gap-2 text-xs font-semibold">
                                        <MapPin size={12} className="text-indigo-400" /> {field.label}
                                    </label>
                                    <div className="relative group">
                                        <select className="bg-white dark:bg-card border border-slate-200 focus:border-indigo-500 px-3 py-2.5 rounded-lg text-sm w-full transition-all appearance-none cursor-pointer">
                                            {field.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                        </select>
                                        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" />
                                    </div>
                                </div>
                            );
                        }

                        if (field.type === "date-range" || field.type === "date-single") {
                            return (
                                <div key={idx} className="space-y-2">
                                    <label className="form-label text-slate-500 flex items-center gap-2 text-xs font-semibold">
                                        <CalendarIcon size={12} className="text-indigo-500" /> {field.label}
                                    </label>
                                    <div className="relative w-full">
                                        {/* wrapper-class ensures the datepicker takes up the full width of the container */}
                                        <DatePicker
                                            selected={field.isEnd ? endDate : startDate}
                                            onChange={(date) => field.isEnd ? setEndDate(date) : setStartDate(date)}
                                            className="bg-white dark:bg-card border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/10 px-10 py-2.5 rounded-lg text-sm w-full transition-all"
                                            placeholderText={field.placeholder || "DD/MM/YYYY"}
                                            dateFormat="dd/MM/yyyy"
                                            showYearDropdown
                                            scrollableYearDropdown
                                            yearDropdownItemNumber={100}
                                            portalId="root" // Prevents the calendar from being cut off by the card
                                            wrapperClassName="w-full"
                                        />
                                        <CalendarIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none" />
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>

                {/* Footer Actions */}
                <div className="flex justify-end pt-6 border-t border-slate-100 dark:border-border">
                    <button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className="btn btn-primary px-8 py-3 bg-[#FF9F1C] hover:bg-[#e68a00] text-white rounded-xl font-bold uppercase tracking-widest text-[11px] flex items-center gap-2 transition-all active:scale-95 disabled:opacity-50"
                    >
                        {isGenerating ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Generating...</span>
                            </>
                        ) : (
                            <span>Generate Report</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}