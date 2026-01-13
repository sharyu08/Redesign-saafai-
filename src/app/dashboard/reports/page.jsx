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

  // Function to switch to the results view
  const handleGenerateReport = () => {
    setView("generated");
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">

        {view === "config" ? (
          /* --- CONFIGURATION VIEW --- */
          <>
            <ReportHeader
              selectedReport={selectedReport}
              description={reportConfigs[selectedReport].description}
              onExport={() => handleExport(selectedReport, startDate, endDate, setIsExporting)}
              isExporting={isExporting}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* LEFT: SELECTION PANEL */}
              <div className="lg:col-span-4">
                <ReportSidebar
                  reportConfigs={reportConfigs}
                  selectedReport={selectedReport}
                  setSelectedReport={setSelectedReport}
                />
              </div>

              {/* RIGHT: CONFIGURATION FORM */}
              <div className="lg:col-span-8">
                <ReportConfig
                  selectedReport={selectedReport}
                  config={reportConfigs[selectedReport]}
                  startDate={startDate}
                  setStartDate={setStartDate}
                  endDate={endDate}
                  setEndDate={setEndDate}
                  onGenerate={handleGenerateReport} // Pass the trigger function
                />
              </div>
            </div>
          </>
        ) : (
          /* --- GENERATED REPORT VIEW --- */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* LEFT: SELECTION PANEL (Still visible in generated view) */}
            <div className="lg:col-span-4">
              <ReportSidebar
                reportConfigs={reportConfigs}
                selectedReport={selectedReport}
                setSelectedReport={setSelectedReport}
              />
            </div>

            {/* RIGHT: GENERATED REPORT CONTENT */}
            <div className="lg:col-span-8 animate-in fade-in duration-500 space-y-6">
              <ReportSummaryHeader
                reportType={selectedReport}
                onRefine={() => setView("config")}
              />
              <ReportStats />
              <ReportTable data={reportData} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}