"use client";

import { useState } from "react";
import ReportHeader from "../../../components/reports/ReportHeader";
import ReportSidebar from "../../../components/reports/ReportSidebar";
import ReportConfig from "../../../components/reports/ReportConfig";
import ReportSummaryHeader from "../../../components/reports/generated/ReportSummaryHeader";
import ReportStats from "../../../components/reports/generated/ReportStats";
import ReportTable from "../../../components/reports/generated/ReportTable";
import { reportConfigs, reportData } from "./constants.js";
import { handleExport } from "./exportUtils.js";

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState("Cleaning Report");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [view, setView] = useState("config"); // "config" or "generated"
  const [isExporting, setIsExporting] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background p-4 md:p-8">
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
              Export Reports
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
                    className={`w-full group px-4 py-4 rounded-xl border transition-all flex items-center justify-between ${selectedReport === report
                        ? "bg-[#FDF9F2] dark:bg-primary/20 border-[#CBF3F0] dark:border-primary/30 text-[#FF9F1C] dark:text-primary-light"
                        : "bg-transparent border-transparent text-slate-500 dark:text-muted-foreground hover:bg-slate-50 dark:hover:bg-muted"
                      }`}
                  >
                    <span className="text-[12px] font-bold tracking-tight">{report}</span>
                    {selectedReport === report && <Check size={14} strokeWidth={3} />}
                  </button>
                ))}
                {view === "config" ? (
                  <>
                    <ReportHeader
                      selectedReport={selectedReport}
                      description={reportConfigs[selectedReport].description}
                      onExport={() => handleExport(selectedReport, startDate, endDate, setIsExporting)}
                      isExporting={isExporting}
                    />
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                      <div className="lg:col-span-4">
                        <ReportSidebar
                          reportConfigs={reportConfigs}
                          selectedReport={selectedReport}
                          setSelectedReport={setSelectedReport}
                        />
                      </div>
                      <div className="lg:col-span-8">
                        <ReportConfig
                          selectedReport={selectedReport}
                          config={reportConfigs[selectedReport]}
                          startDate={startDate} setStartDate={setStartDate}
                          endDate={endDate} setEndDate={setEndDate}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <ReportSummaryHeader reportType={selectedReport} onRefine={() => setView("config")} />
                    <ReportStats />
                    <ReportTable data={reportData} />
                  </>
                )}
              </div>
            </div>
            );
}