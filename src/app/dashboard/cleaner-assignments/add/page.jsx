"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ClipboardPlus,
  Users,
  ChevronDown,
  ArrowLeft,
  ShieldCheck,
  Check
} from "lucide-react";
import FilterBar from "../../../../components/cleanerAssignments/FilterBar";

export default function CreateAssignmentsPage() {
  const router = useRouter();
  const [isMultipleMode, setIsMultipleMode] = useState(true);
  const [roleFilter, setRoleFilter] = useState("All Roles");

  const roles = ["All Roles", "Cleaner", "Supervisor"];

  const handleBack = () => router.back();

  return (
    <div className="min-h-screen bg-white dark:bg-background w-full pt-8 pb-12 px-6 flex flex-col items-center relative overflow-hidden">

      {/* Background Decorative Blur (lavender) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#CBF3F0] rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none" />

      {/* Back Button */}
      <div className="absolute top-8 left-8 z-20">
        <button
          onClick={handleBack}
          className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#FF9F1C] transition-all"
        >
          <div className="h-9 w-9 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:border-[#CBF3F0] group-hover:shadow-md transition-all">
            <ArrowLeft size={16} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" />
          </div>
          <span className="hidden lg:block">Return</span>
        </button>
      </div>

      {/* Main Card - Increased size and spacing */}
      <div className="max-w-3xl w-full bg-white rounded-[32px] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-1000 relative z-10">

        {/* Card Header (lavender) - Increased padding */}
        <div className="bg-[#CBF3F0] px-8 py-5 border-b border-[#CBF3F1] flex justify-between items-center">
          <div className="flex items-center gap-3">
            <ClipboardPlus size={20} className="text-[#FF9F1C]" />
            <h1 className="text-xl font-extrabold tracking-tight text-[#0f0f0f]">
              Create Assignments
            </h1>
          </div>
          <div className="h-2 w-2 rounded-full bg-[#28C76F] animate-pulse" />
        </div>

        <form className="p-8 space-y-8">

          {/* Mode Toggle Box - Increased spacing and font sizes */}
          <div className="bg-white dark:bg-background border border-slate-50 dark:border-border rounded-2xl p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-11 w-11 rounded-lg bg-white flex items-center justify-center shadow-sm">
                <ShieldCheck className="text-[#FF9F1C]" size={20} />
              </div>
              <div className="text-left">
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-tight">
                  Multiple Mode
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase">
                  Bulk Mapping Active
                </p>
              </div>
            </div>

            {/* Toggle Switch (lavender) */}
            <button
              type="button"
              onClick={() => setIsMultipleMode(!isMultipleMode)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-all duration-300 ${
                isMultipleMode ? "bg-[#CBF3F0]" : "bg-slate-200"
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 shadow-md ${
                  isMultipleMode ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Filter Bar (lavender theme) */}
          {/* Filter by Role - Increased spacing and font sizes */}
          <div className="text-left space-y-4 bg-[#FDF9F2] p-6 rounded-2xl border border-[#CBF3F0]">
            <p className="text-xs font-black text-[#FF9F1C]/70 uppercase tracking-widest ml-1">
              Filter by Role
            </p>
            <div className="flex gap-3">
              {roles.map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setRoleFilter(role)}
                  className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all border ${
                    roleFilter === role
                      ? "bg-[#CBF3F0] border-[#CBF3F0] text-[#FF9F1C] shadow-md"
                      : "bg-white border-slate-100 text-slate-400 hover:border-[#CBF3F0]"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* Selection Dropdowns */}
          {/* Form Inputs - Increased spacing and font sizes */}
          <div className="space-y-6">
            <div className="text-left space-y-2">
              <label className="text-xs font-black text-[#0f0f0f] uppercase tracking-widest ml-1">
                Select Users
              </label>
              <div className="relative cursor-pointer group">
                <input
                  type="text"
                  readOnly
                  placeholder="Choose personnel..."
                  className="w-full px-6 py-3.5 text-base rounded-xl border border-slate-100 bg-white font-medium text-[#0f0f0f] outline-none focus:border-[#93C5FD] focus:ring-2 focus:ring-[#93C5FD]/20 transition-all cursor-pointer"
                />
                <ChevronDown
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-[#FF9F1C] transition-colors"
                  size={18}
                  strokeWidth={2.5}
                />
              </div>
            </div>

            <div className="text-left space-y-2">
              <label className="text-xs font-black text-[#0f0f0f] uppercase tracking-widest ml-1">
                Select Locations
              </label>
              <div className="relative cursor-pointer group">
                <input
                  type="text"
                  readOnly
                  placeholder="Choose facilities..."
                  className="w-full px-6 py-3.5 text-base rounded-xl border border-slate-100 bg-white font-medium text-[#0f0f0f] outline-none focus:border-[#93C5FD] focus:ring-2 focus:ring-[#93C5FD]/20 transition-all cursor-pointer"
                />
                <ChevronDown
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-[#FF9F1C] transition-colors"
                  size={18}
                  strokeWidth={2.5}
                />
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-6 border-t border-slate-100">
            <button
              type="submit"
              className="btn btn-primary w-full py-4 px-6 text-base font-bold text-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3"
            >
              <Check size={20} strokeWidth={3} className="text-white" />
              <span>Save Assignment</span>
            </button>
          </div>
        </form>
      </div>

      <p className="mt-10 text-xs font-bold text-slate-400 uppercase tracking-[0.3em] opacity-70">
        System Registry Synchronization Active
      </p>
    </div>
  );
}
