"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/navigation';
import DatePicker from "react-datepicker";
import { format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import {
  Calendar as CalendarIcon,
  FileText,
  Filter,
  RefreshCw,
  ChevronDown,
  Download,
} from "lucide-react";

const reportTypes = [
  "Cleaning Report",
  "Washroom Report",
  "Cleaner Report",
  "Detailed Cleaning Report",
];

const zones = [
  "All Zones",
  "Dhantoli",
  "Dharampeth Zone",
  "Manish Nagar Zone",
  "Nagpur East",
  "Nagpur Ruaral",
  "Nagpur Urban",
  "Nehru Nagar Zone",
  "Sadar Zone",
  "Shanti Nagar",
];

const locations = [
  "All Locations",
  "Ambazari Dahan Ghat (Dharampeth Zone)",
  "Budhawar Bazaar (Nehru Nagar Zone)",
  "Children Traffic Park, Khare Town, Dharampeth (Dharampeth Zone)",
  "Kachipura Chowk (Dharampeth Zone)",
  "Meetha Neem Dargah Civil lines (Dharampeth Zone)",
  "Mehadiya Chowk Dhantoli (Dhantoli)",
  "Morbhavan (old bus stop / MorBhavan city bus stand — Sitabuldi) (Nagpur Urban)",
  "Narendra nagar square (Nagpur Urban)",
  "Ramnagar Chowk (Dharampeth Zone)",
  "Sakkardhar under bridge (Nehru Nagar Zone)",
  "SBT Kadimbhag (Dharampeth Zone)",
  "Shankar Nagar Chowk (Dharampeth Zone)",
  "Tuta Garden — Gandhi Chowk (Sadar) (Sadar Zone)",
  "Vidhan Bhavan Back side Civil lines (Dharampeth Zone)",
  "Zenda Chowk, Dharampeth (Dharampeth Zone)",
];

const cleaners = [
  "All Cleaners",
  "Anil Saafai User",
  "Ankit choudhary - Budhwar Bajar",
  "Manish jadhav - Meetha Neem Dargaha",
  "Nikhil Tupkar",
  "nitesh Mohadikar vidan bhavan toilet 🚽",
  "Omkar saaf cleaner",
  "Rajesh sahani - Narendra square",
  "Raju Choudhary Ambazhari dahan toilet 🚽",
];

const statuses = ["All Status", "Completed", "Ongoing"];

function CustomDropdown({ label, value, options, onChange, icon: Icon }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {label && <label className="mb-2 block text-[11px] font-black text-slate-500 uppercase tracking-widest">{label}</label>}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between rounded-xl border ${isOpen ? "border-[#58BECF]" : "border-slate-200"
          } bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition focus:outline-none focus:ring-4 focus:ring-cyan-50`}
      >
        <span className="flex items-center gap-2">
          {Icon && <Icon className="h-4 w-4 text-[#58BECF]" />}
          <span className="text-left truncate max-w-[200px]">{value}</span>
        </span>
        <ChevronDown className={`h-4 w-4 text-slate-400 transition ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute z-50 mt-1 w-full rounded-xl border border-slate-100 bg-white shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
          <div className="max-h-60 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className={`w-full px-4 py-2.5 text-left text-xs font-bold transition-colors ${option === value ? "bg-[#E6F7F9] text-[#007C85]" : "text-slate-600 hover:bg-[#F8FAFB] hover:text-[#58BECF]"
                  }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ReportsPage() {
  const [reportType, setReportType] = useState("Cleaning Report");
  const router = useRouter();
  const [filters, setFilters] = useState({
    zone: "All Zones",
    location: "All Locations",
    cleaner: "All Cleaners",
    startDate: new Date(),
    endDate: new Date(),
    status: "All Status",
  });

  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const datePickerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setShowStartDatePicker(false);
        setShowEndDatePicker(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleGenerateReport = () => {
    const formatDate = (date) => format(date, 'dd-MM-yyyy');
    const queryParams = new URLSearchParams({
      type: reportType,
      zone: filters.zone,
      startDate: formatDate(filters.startDate),
      endDate: formatDate(filters.endDate),
      status: filters.status
    });
    router.push(`/dashboard/reports/generated?${queryParams.toString()}`);
  };

  const handleReset = () => {
    const today = new Date();
    setFilters({
      zone: "All Zones",
      location: "All Locations",
      cleaner: "All Cleaners",
      startDate: today,
      endDate: today,
      status: "All Status",
    });
    setReportType("Cleaning Report");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFB] py-8 px-8 space-y-8 w-full">

      {/* 1. Branded Header Container */}
      <div className="w-full">
        <div className="bg-[#E6F7F9] rounded-[24px] border border-[#D1F0F2] p-4 flex flex-col md:flex-row justify-between items-center gap-4 shadow-sm">
          <div className="flex items-center gap-5">
            {/* White Shield Icon Box */}
            <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-white">
              <FileText className="h-6 w-6 text-[#58BECF]" strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <h1 className="text-lg font-black text-[#007C85] tracking-tight uppercase leading-none">
                Analytics Reports
              </h1>
              <p className="text-[10px] font-bold text-[#2D8E97] uppercase tracking-widest opacity-70 mt-1">
                Generate and export detailed system performance data
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleGenerateReport}
              style={{ background: 'linear-gradient(to right, #58BECF, #6D9CDC)' }}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-cyan-500/20 hover:brightness-105 active:scale-95 transition-all"
            >
              <Download size={14} strokeWidth={3} /> Export All Reports
            </button>
          </div>
        </div>
      </div>

      {/* 2. Selection Section */}
      <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-8 rounded-lg bg-[#E6F7F9] flex items-center justify-center">
            <Filter className="h-4 w-4 text-[#2DB7C4]" />
          </div>
          <h2 className="text-sm font-black text-slate-800 uppercase tracking-widest">Configure Report Parameters</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <CustomDropdown
              label="Select Report Type"
              value={reportType}
              options={reportTypes}
              onChange={setReportType}
              icon={FileText}
            />
            <p className="mt-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
              * Includes AI scores and cleaner compliance metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-[11px] font-black text-slate-500 uppercase tracking-widest">Status Filter</label>
              <CustomDropdown
                value={filters.status}
                options={statuses}
                onChange={(value) => setFilters({ ...filters, status: value })}
              />
            </div>
            <div>
              <label className="mb-2 block text-[11px] font-black text-slate-500 uppercase tracking-widest">Zone Selection</label>
              <CustomDropdown
                value={filters.zone}
                options={zones}
                onChange={(value) => setFilters({ ...filters, zone: value })}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Detailed Filters Section */}
      <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Location Dropdown */}
          <CustomDropdown
            label="Location / Washroom Node"
            value={filters.location}
            options={locations}
            onChange={(value) => setFilters({ ...filters, location: value })}
          />

          {/* Start Date */}
          <div className="relative" ref={datePickerRef}>
            <label className="mb-2 block text-[11px] font-black text-slate-500 uppercase tracking-widest">Timeframe Start</label>
            <div
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm cursor-pointer hover:border-[#58BECF] transition-all"
              onClick={() => setShowStartDatePicker(!showStartDatePicker)}
            >
              <span>{format(filters.startDate, 'dd-MM-yyyy')}</span>
              <CalendarIcon className="h-4 w-4 text-[#58BECF]" />
            </div>
            {showStartDatePicker && (
              <div className="absolute z-20 mt-2 shadow-2xl border border-slate-100 rounded-2xl overflow-hidden">
                <DatePicker
                  selected={filters.startDate}
                  onChange={(date) => { setFilters({ ...filters, startDate: date }); setShowStartDatePicker(false); }}
                  maxDate={new Date()}
                  inline
                />
              </div>
            )}
          </div>

          {/* End Date */}
          <div className="relative">
            <label className="mb-2 block text-[11px] font-black text-slate-500 uppercase tracking-widest">Timeframe End</label>
            <div
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm cursor-pointer hover:border-[#58BECF] transition-all"
              onClick={() => setShowEndDatePicker(!showEndDatePicker)}
            >
              <span>{format(filters.endDate, 'dd-MM-yyyy')}</span>
              <CalendarIcon className="h-4 w-4 text-[#58BECF]" />
            </div>
            {showEndDatePicker && (
              <div className="absolute z-20 mt-2 shadow-2xl border border-slate-100 rounded-2xl overflow-hidden">
                <DatePicker
                  selected={filters.endDate}
                  onChange={(date) => { setFilters({ ...filters, endDate: date }); setShowEndDatePicker(false); }}
                  minDate={filters.startDate}
                  maxDate={new Date()}
                  inline
                />
              </div>
            )}
          </div>
        </div>

        {/* Action Footer */}
        <div className="mt-10 pt-8 border-t border-slate-50 flex items-center gap-4">
          <button
            onClick={handleGenerateReport}
            style={{
              background: 'linear-gradient(to right, #58BECF, #6D9CDC)',
              color: '#FFFFFF'
            }}
            className="flex items-center gap-2 px-8 py-3 rounded-2xl text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-xl shadow-cyan-900/10 hover:brightness-110 active:scale-95 transition-all"
          >
            <FileText className="h-4 w-4" /> Generate Detailed Report
          </button>

          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-8 py-3 rounded-2xl bg-white border-2 border-slate-100 text-slate-400 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-slate-50 hover:text-slate-600 transition-all"
          >
            <RefreshCw className="h-4 w-4" /> Reset Filters
          </button>
        </div>
      </div>

      <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] opacity-60 mt-12">
        Registry Audit Logging Active • Nagpur Pilot
      </p>
    </div>
  );
}