"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import "./index.css";
import {
  FileText,
  Download,
  ChevronDown,
  Filter,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Clock,
  BarChart3,
  Users,
  MapPin,
  Calendar,
  Activity,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  LayoutDashboard
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

function GeneratedReportContent() {
  const searchParams = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const progressRefs = useRef({});

  const reportType = searchParams.get('type') || 'Cleaning Report';
  const reportData = [
    { id: 1, cleaner: 'John Doe', zone: 'Dhantoli', location: 'Mehadiya Chowk', date: '22-12-2025', time: '09:00 AM', status: 'Completed', score: 95 },
    { id: 2, cleaner: 'Anil Saafai', zone: 'Dharampeth', location: 'Ramnagar Chowk', date: '22-12-2025', time: '10:30 AM', status: 'In Progress', score: 82 }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background py-8 px-8 space-y-6 w-full text-left font-sans">

      {/* 1. Page Header - Premium Indigo styling */}
      <div className="page-header border-none shadow-md bg-white dark:bg-card relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

        <div className="page-header-content relative z-10">
          <div className="page-header-title-section">
            <div className="page-header-icon bg-indigo-600 shadow-lg shadow-indigo-200 dark:shadow-none">
              <BarChart3 className="h-6 w-6 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-800 dark:text-white leading-tight">
                Report Analysis
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="flex items-center gap-1 text-[10px] font-bold bg-[#CBF3F0] text-[#0d9488] px-2 py-0.5 rounded-full uppercase tracking-wider">
                  <ShieldCheck size={10} /> Verified
                </span>
                <span className="text-slate-400 text-xs font-medium">Registry Audit • {reportType}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="btn btn-primary px-6 py-2.5 shadow-xl shadow-orange-500/20 hover:scale-[1.02] active:scale-[0.98]">
              <Download className="h-4 w-4" /> Export PDF
            </button>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn-secondary bg-white border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600"
            >
              <Filter className="h-4 w-4" /> Refine
            </button>
          </div>
        </div>
      </div>

      {/* 2. Summary Statistics - Dynamic Colors */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Total Entries - Clean Indigo */}
        <div className="card-global border-slate-100 bg-white hover:border-indigo-200 transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl">
              <LayoutDashboard size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Entries</p>
              <h3 className="text-2xl font-black text-slate-800 mt-0.5">2,480</h3>
            </div>
          </div>
        </div>

        {/* Validated - Fresh Teal */}
        <div className="card-global border-slate-100 bg-white hover:border-emerald-200 transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Efficiency</p>
              <h3 className="text-2xl font-black text-slate-800 mt-0.5">94.2%</h3>
            </div>
          </div>
        </div>

        {/* Score - Energy Orange */}
        <div className="card-global border-slate-100 bg-white hover:border-orange-200 transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-orange-50 text-orange-600 rounded-2xl">
              <Zap size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Avg AI Score</p>
              <h3 className="text-2xl font-black text-slate-800 mt-0.5">88.5</h3>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Data Table Section */}
      <div className="bg-white dark:bg-card rounded-[24px] shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <FileText size={16} className="text-indigo-500" /> Audit Log Entries
          </h2>
          <div className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase">
            Showing Recent Activity
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table-global border-none rounded-none shadow-none">
            <thead className="bg-slate-50/50">
              <tr className="border-b border-slate-100">
                <th className="py-5 font-bold text-slate-500"><div className="flex items-center gap-2 ml-2"><Users size={14} /> Cleaner</div></th>
                <th className="py-5 font-bold text-slate-500"><div className="flex items-center gap-2"><MapPin size={14} /> Location</div></th>
                <th className="py-5 font-bold text-slate-500"><div className="flex items-center gap-2"><Calendar size={14} /> Date</div></th>
                <th className="py-5 font-bold text-slate-500"><div className="flex items-center gap-2"><Activity size={14} /> Status</div></th>
                <th className="py-5 font-bold text-slate-500"><div className="flex items-center gap-2"><Zap size={14} /> AI Score</div></th>
                <th className="py-5 font-bold text-slate-500 text-right pr-8">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((item) => (
                <tr key={item.id} className="hover:bg-indigo-50/30 transition-colors border-b border-slate-50">
                  <td className="py-5 px-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 text-white flex items-center justify-center font-bold text-xs shadow-md">
                        {item.cleaner.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-bold text-slate-700">{item.cleaner}</span>
                    </div>
                  </td>
                  <td className="py-5">
                    <p className="font-bold text-slate-700 text-sm">{item.location}</p>
                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-tighter">{item.zone}</p>
                  </td>
                  <td className="py-5">
                    <div className="text-slate-600 font-semibold text-sm">{item.date}</div>
                    <div className="text-[10px] text-slate-400 font-medium italic">{item.time}</div>
                  </td>
                  <td className="py-5">
                    <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border shadow-sm ${item.status === 'Completed'
                      ? 'bg-emerald-50 border-emerald-100 text-emerald-600'
                      : 'bg-orange-50 border-orange-100 text-orange-600'
                      }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-5">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-20 bg-slate-100 rounded-full overflow-hidden border border-slate-50">
                        <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600" style={{ width: `${item.score}%` }}></div>
                      </div>
                      <span className="font-black text-slate-700 text-sm">{item.score}%</span>
                    </div>
                  </td>
                  <td className="py-5 text-right pr-8">
                    <button className="p-2 text-indigo-400 hover:text-indigo-600 rounded-lg transition-all group">
                      <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer/Pagination */}
        <div className="px-8 py-5 bg-slate-50/30 flex items-center justify-between border-t border-slate-50">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            Showing <span className="text-indigo-600 font-black">1-10</span> of 24 entries
          </p>
          <div className="flex gap-3">
            <button className="h-9 w-9 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-all shadow-sm">
              <ChevronLeft size={18} />
            </button>
            <button className="h-9 w-9 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-all shadow-sm">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GeneratedReport() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 dark:bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 border-t-transparent"></div>
        <p className="mt-4 text-slate-600">Loading report...</p>
      </div>
    </div>}>
      <GeneratedReportContent />
    </Suspense>
  );
}