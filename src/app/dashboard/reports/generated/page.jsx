"use client";

import { useSearchParams } from 'next/navigation';
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
  Settings
} from 'lucide-react';
import { useState } from 'react';

export default function GeneratedReport() {
  const searchParams = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  // Get filter values from URL
  const reportType = searchParams.get('type') || 'Cleaning Report';
  const zone = searchParams.get('zone') || 'All Zones';
  const startDate = searchParams.get('startDate') || '';
  const endDate = searchParams.get('endDate') || '';
  const status = searchParams.get('status') || 'All Status';

  // Sample data
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
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFB] py-8 px-8 space-y-8 w-full text-left">

      {/* 1. Branded Header Section */}
      <div className="w-full">
        <div className="bg-[#E6F7F9] rounded-[24px] border border-[#D1F0F2] p-4 flex flex-col md:flex-row justify-between items-center gap-4 shadow-sm">
          <div className="flex items-center gap-5">
            <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-white">
              <BarChart3 className="h-6 w-6 text-[#58BECF]" strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <h1 className="text-lg font-black text-[#007C85] tracking-tight uppercase leading-none">
                Report Generated
              </h1>
              <p className="text-[10px] font-bold text-[#2D8E97] uppercase tracking-widest opacity-70 mt-1">
                Registry Audit • {reportType}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              style={{ background: 'linear-gradient(to right, #58BECF, #6D9CDC)' }}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-cyan-500/20 hover:brightness-105 active:scale-95 transition-all"
            >
              <Download className="h-4 w-4 text-white" /> Download PDF
            </button>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-500 text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm"
            >
              <Filter className="h-4 w-4" /> Filters
              <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Summary Statistics */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="bg-[#FEF3EB] p-6 rounded-[24px] border border-[#FDE0CF] flex items-center justify-between shadow-sm">
          <div>
            <p className="text-[10px] font-black text-[#8E6C1F] uppercase tracking-widest leading-none">Total Entries</p>
            <h3 className="text-3xl font-black text-slate-800 mt-2">24</h3>
          </div>
          <FileText size={24} className="text-[#F4B740] opacity-50" />
        </div>
        <div className="bg-[#F0FDF4] p-6 rounded-[24px] border border-[#DCFCE7] flex items-center justify-between shadow-sm">
          <div>
            <p className="text-[10px] font-black text-[#15803D] uppercase tracking-widest leading-none">Validated Tasks</p>
            <h3 className="text-3xl font-black text-slate-800 mt-2">18</h3>
          </div>
          <CheckCircle2 size={24} className="text-[#15803D] opacity-50" />
        </div>
        <div className="bg-[#F0F9FF] p-6 rounded-[24px] border border-[#D1E9FF] flex items-center justify-between shadow-sm">
          <div>
            <p className="text-[10px] font-black text-[#0070AD] uppercase tracking-widest leading-none">In Queue</p>
            <h3 className="text-3xl font-black text-slate-800 mt-2">04</h3>
          </div>
          <Clock size={24} className="text-[#0070AD] opacity-50" />
        </div>
      </div>

      {/* 3. Main Data Table */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0">
            <thead>
              {/* Table Header Row with Theme Color */}
              <tr className="bg-[#E6F7F9]">
                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-[0.15em] text-[#007C85] border-b border-[#D1F0F2]">
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-[#58BECF]" strokeWidth={2.5} />
                    <span>Cleaner</span>
                  </div>
                </th>
                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-[0.15em] text-[#007C85] border-b border-[#D1F0F2]">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#58BECF]" strokeWidth={2.5} />
                    <span>Location</span>
                  </div>
                </th>
                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-[0.15em] text-[#007C85] border-b border-[#D1F0F2]">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-[#58BECF]" strokeWidth={2.5} />
                    <span>Registry Date</span>
                  </div>
                </th>
                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-[0.15em] text-[#007C85] border-b border-[#D1F0F2]">
                  <div className="flex items-center gap-2">
                    <Activity size={14} className="text-[#58BECF]" strokeWidth={2.5} />
                    <span>Status</span>
                  </div>
                </th>
                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-[0.15em] text-[#007C85] border-b border-[#D1F0F2]">
                  <div className="flex items-center gap-2">
                    <Zap size={14} className="text-[#58BECF]" strokeWidth={2.5} />
                    <span>AI Score</span>
                  </div>
                </th>
                <th className="px-8 py-5 text-right text-[10px] font-black uppercase tracking-[0.15em] text-[#007C85] border-b border-[#D1F0F2]">
                  <div className="flex items-center justify-end gap-2">
                    <Settings size={14} className="text-[#58BECF]" strokeWidth={2.5} />
                    <span>Action</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 bg-white">
              {reportData.map((item) => (
                <tr key={item.id} className="hover:bg-[#F4FBFC]/40 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-[#E6F7F9] text-[#007C85] flex items-center justify-center font-bold text-[11px] shadow-sm border border-[#D1F0F2]">
                        {item.cleaner.split(' ').map(n => n[0]).join('')}
                      </div>
                      <p className="text-sm font-bold text-slate-700">{item.cleaner}</p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-bold text-[#007C85] tracking-tight">{item.location}</p>
                    <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">{item.zone}</p>
                  </td>
                  <td className="px-8 py-6 text-sm font-medium text-slate-400">
                    <div className="font-bold text-slate-600">{item.date}</div>
                    <div className="text-[10px] text-slate-400 uppercase">{item.time}</div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border ${item.status === 'Completed'
                        ? 'bg-emerald-50 border-emerald-100 text-emerald-500'
                        : 'bg-amber-50 border-amber-100 text-amber-500'
                      }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-16 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#2DB7C4]" style={{ width: `${item.score}%` }}></div>
                      </div>
                      <span className="text-sm font-black text-[#2DB7C4]">{item.score}%</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="text-[#58BECF] hover:text-[#4F7FD9] text-[10px] font-black uppercase tracking-widest transition-colors">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 4. Footer/Pagination */}
        <div className="bg-[#F8FAFB]/50 px-8 py-4 border-t border-slate-100 flex items-center justify-between">
          <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
            Audit Records <span className="text-slate-400 ml-2">1-10 of 24 entries</span>
          </p>
          <div className="flex gap-2">
            <button className="h-8 w-8 flex items-center justify-center bg-white border border-slate-100 rounded-lg text-slate-300 hover:text-[#58BECF] transition-all shadow-sm">
              <ChevronLeft size={16} strokeWidth={3} />
            </button>
            <button className="h-8 w-8 flex items-center justify-center bg-white border border-slate-100 rounded-lg text-slate-300 hover:text-[#58BECF] transition-all shadow-sm">
              <ChevronRight size={16} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}