"use client";

import { useState } from "react";
import "./index.css";
import { 
  Calendar as CalendarIcon,
  FileText,
  RefreshCw,
  ChevronDown,
  Download,
  Check,
  BarChart3,
  Settings2,
  Filter,
  MapPin
} from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const reportConfigs = {
  "Cleaning Report": {
    description: "INCLUDES AI SCORES AND CLEANER COMPLIANCE METRICS",
    fields: [
      { type: "select", name: "status", label: "Status Filter", options: ["All Status", "Completed", "Pending"] },
      { type: "select", name: "zone", label: "Zone Selection", options: ["All Zones", "Dhantoli", "Dharampeth"] },
      { type: "select", name: "location", label: "Location / Washroom Node", options: ["All Locations", "Public Toilet 1"] },
      { type: "date-range", label: "Select Timeframe" }
    ]
  },
  "Washroom Report": {
    description: "VIEW SINGLE WASHROOM HYGIENE REPORT",
    fields: [
      { type: "select", name: "location", label: "Location / Washroom", options: ["All Locations", "Node A", "Node B"] },
      { type: "date-range", label: "Start Date", isStart: true },
      { type: "date-range", label: "End Date", isEnd: true },
      { type: "select", name: "status", label: "Status", options: ["All Status", "Clean", "Needs Attention"] }
    ]
  },
  "Cleaner Report": {
    description: "VIEW INDIVIDUAL CLEANER OR ALL CLEANERS PERFORMANCE",
    fields: [
      { type: "select", name: "location", label: "Location / Washroom", options: ["All Locations", "Main Block"] },
      { type: "select", name: "cleaner", label: "Cleaner", options: ["All Cleaners", "Rahul S.", "Priya M."] },
      { type: "date-range", label: "Start Date", isStart: true },
      { type: "date-range", label: "End Date", isEnd: true },
      { type: "select", name: "status", label: "Status", options: ["All Status", "Active", "Inactive"] }
    ]
  },
  "Washroom Hygiene Trend": {
    description: "VIEW DAILY HYGIENE SCORES ACROSS ALL WASHROOMS",
    fields: [
      { type: "date-range", label: "Start Date", isStart: true },
      { type: "date-range", label: "End Date", isEnd: true, description: "(Max 31 days from start)" }
    ]
  },
  "Detailed Cleaning Report": {
    description: "AGGREGATE PERFORMANCE METRICS FOR CLEANERS",
    fields: [
      { type: "select", name: "zone", label: "Zone / Location Type", options: ["All Zones", "Nagpur Urban", "Nagpur Rural"] },
      { type: "select", name: "location", label: "Location / Washroom", options: ["All Locations"] },
      { type: "date-single", label: "Choose Date", description: "Select a single date for detailed report" }
    ]
  }
};

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState("Cleaning Report");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* UPDATED: COMPACT HEADER SECTION - Using standardized page-header class */}
        <div className="page-header">
          <div className="page-header-content">
            <div className="page-header-title-section">
              <div className="page-header-icon">
                <FileText size={24} strokeWidth={2.5} />
              </div>
              
              <div>
                <h1 className="page-header-title text-lg md:text-xl">
                  Analytics Reports
                </h1>
                <p className="page-header-subtitle mt-1.5">
                  * {reportConfigs[selectedReport].description}
                </p>
              </div>
            </div>

            <button className="btn btn-primary px-6 py-3 w-full md:w-auto text-xs-standard uppercase tracking-widest active:scale-95 flex items-center justify-center gap-2">
              <Download size={14} strokeWidth={3} />
              Export All Reports
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT: SELECTION PANEL */}
          <div className="lg:col-span-4">
            <div className="rounded-[24px] bg-white dark:bg-card border border-slate-200 dark:border-border p-5 shadow-sm sticky top-8">
              <div className="flex items-center gap-2 mb-4 px-2">
                <Filter size={16} className="text-[#FF9F1C] dark:text-primary-light" />
                <h2 className="text-[11px] font-black text-slate-400 dark:text-muted-foreground uppercase tracking-widest">
                  Report Modules
                </h2>
              </div>
              <div className="space-y-2">
                {Object.keys(reportConfigs).map((report) => (
                  <button
                    key={report}
                    onClick={() => setSelectedReport(report)}
                    className={`w-full group px-4 py-4 rounded-xl border transition-all flex items-center justify-between ${
                      selectedReport === report
                        ? "bg-[#FDF9F2] dark:bg-primary/20 border-[#CBF3F0] dark:border-primary/30 text-[#FF9F1C] dark:text-primary-light"
                        : "bg-transparent border-transparent text-slate-500 dark:text-muted-foreground hover:bg-slate-50 dark:hover:bg-muted"
                    }`}
                  >
                    <span className="text-[12px] font-bold tracking-tight">{report}</span>
                    {selectedReport === report && <Check size={14} strokeWidth={3} />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: CONFIGURATION FORM */}
          <div className="lg:col-span-8">
            <div className="rounded-[24px] bg-white dark:bg-card border border-slate-200 dark:border-border p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-100 dark:border-border">
                <Settings2 size={18} className="text-[#FF9F1C] dark:text-primary-light" />
                <div>
                  <h2 className="text-[14px] font-black text-slate-800 dark:text-foreground uppercase">
                    Configure {selectedReport}
                  </h2>
                  <p className="text-[9px] font-bold text-[#FF9F1C] dark:text-primary-light/80 uppercase tracking-widest mt-0.5">
                    * {reportConfigs[selectedReport].description}
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {/* DYNAMIC FILTERS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {reportConfigs[selectedReport]?.fields?.map((field, idx) => {
                    if (field.type === "select") {
                      return (
                        <div key={idx} className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 dark:text-muted-foreground uppercase tracking-widest ml-1 flex items-center gap-2">
                            <MapPin size={10} className="text-[#FF9F1C] dark:text-primary-light" /> {field.label}
                          </label>
                          <div className="relative group">
                            <select className="w-full appearance-none rounded-xl border border-slate-200 dark:border-border bg-slate-50/50 dark:bg-muted px-5 py-4 text-[13px] font-bold text-slate-700 dark:text-foreground outline-none focus:border-[#FF9F1C] dark:focus:border-primary transition-all cursor-pointer">
                              {field.options?.map(opt => <option key={opt} value={opt} className="bg-white dark:bg-card">{opt}</option>)}
                            </select>
                            <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 dark:text-muted-foreground pointer-events-none" />
                          </div>
                        </div>
                      );
                    }
                    if (field.type === "date-range" || field.type === "date-single") {
                       return (
                        <div key={idx} className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 dark:text-muted-foreground uppercase tracking-widest ml-1">
                            {field.label} {field.description && <span className="text-[#e67e22] dark:text-accent-gold lowercase italic font-medium tracking-normal">{field.description}</span>}
                          </label>
                          <div className="relative">
                            <DatePicker
                              selected={field.isEnd ? endDate : startDate}
                              onChange={(date) => field.isEnd ? setEndDate(date) : setStartDate(date)}
                              className="w-full rounded-xl border border-slate-200 dark:border-border bg-slate-50/50 dark:bg-muted px-12 py-4 text-[13px] font-bold text-slate-700 dark:text-foreground outline-none focus:border-[#007b8a] dark:focus:border-primary transition-colors"
                              placeholderText="DD-MM-YYYY"
                              dateFormat="dd-MM-yyyy"
                            />
                            <CalendarIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FF9F1C] dark:text-primary-light" />
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>

                {/* FORM ACTIONS - Using standardized button classes */}
                <div className="pt-6 flex flex-col md:flex-row gap-3">
                  <button className="btn btn-primary px-6 py-2.5 text-xs-standard uppercase tracking-widest flex items-center justify-center gap-2">
                    <BarChart3 size={14} />
                    Generate Detailed Report
                  </button>
                  <button className="btn btn-secondary px-6 py-2.5 text-xs-standard uppercase tracking-widest flex items-center justify-center gap-2">
                    <RefreshCw size={14} />
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SYSTEM FOOTER */}
        <div className="text-center pt-8 opacity-60 dark:opacity-40 transition-opacity">
          <p className="text-[8px] font-black uppercase tracking-[0.5em] text-slate-500 dark:text-muted-foreground">
            Safai Analytics Engine // Nagpur Municipal Corporation
          </p>
        </div>
      </div>
    </div>
  );
}