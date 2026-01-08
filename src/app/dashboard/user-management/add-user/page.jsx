"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  UserPlus,
  Briefcase,
  Lock,
  ShieldCheck,
  Check,
  X,
  ChevronDown,
} from "lucide-react";

export default function AddUserFullPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    company: "Nagpur Municipal Corporation Pilot",
    fullName: "",
    email: "",
    phone: "",
    password: "",
    role: "Cleaner",
  });

  const roleOptions = ["Admin", "Supervisor", "Cleaner"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGoBack = () => {
    router.push("/dashboard/user-management");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.password) {
      alert("Please fill out all required fields.");
      return;
    }
    handleGoBack();
  };

  return (
    <div className="h-screen bg-white dark:bg-background w-full pt-6 pb-6 px-6 relative overflow-hidden flex flex-col items-center justify-center">

      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#CBF3F0] rounded-full blur-[100px] opacity-50 -mr-40 -mt-40 pointer-events-none" />

      {/* Back Button */}
      <div className="absolute top-6 left-8 z-20">
        <button
          onClick={handleGoBack}
          className="group flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#FF9F1C] transition-all"
        >
          <div className="h-10 w-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:border-[#CBF3F0] group-hover:shadow-md transition-all">
            <ArrowLeft size={16} strokeWidth={3} />
          </div>
          <span className="hidden lg:block">Back</span>
        </button>
      </div>

      {/* Main Card */}
      <div className="max-w-lg w-full bg-white rounded-[32px] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">

        {/* Header */}
        <div className="bg-[#CBF3F0] px-8 py-4 border-b border-[#CBF3F0] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <UserPlus size={18} />
            </div>
            <h2 className="font-black text-xs uppercase tracking-widest">
              Account Configuration
            </h2>
          </div>
          <div className="h-2 w-2 rounded-full bg-[#28C76F] animate-pulse" />
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-5">

          {/* Assigned Node */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest ml-1 flex items-center gap-2">
              <Briefcase size={12} /> Assigned Operations Node
            </label>

            <div className="flex items-center justify-between border border-slate-100 rounded-2xl p-4">
              <div>
                <p className="text-[13px] font-black uppercase leading-tight">
                  {formData.company}
                </p>
                <p className="text-[9px] font-bold text-slate-400 uppercase mt-1">
                  Primary Management Group
                </p>
              </div>

              <span className="px-3 py-1.5 rounded-lg text-[10px] font-black uppercase border border-[#CBF3F0] shadow-sm">
                Verified
              </span>
            </div>
          </div>

          {/* Profile Info */}
          <div className="space-y-4">

            {/* Full Name */}
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest ml-1">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Legal Name"
                className="w-full px-5 py-3.5 rounded-xl border border-slate-100 text-sm font-bold outline-none focus:ring-4 focus:ring-[rgba(221,217,255,0.5)] focus:border-[#CBF3F0] transition-all"
                required
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest ml-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="staff@saaf.ai"
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-100 text-sm font-bold outline-none focus:ring-4 focus:ring-[rgba(221,217,255,0.5)] focus:border-[#CBF3F0] transition-all"
                />
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest ml-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-100 text-sm font-bold outline-none focus:ring-4 focus:ring-[rgba(221,217,255,0.5)] focus:border-[#CBF3F0] transition-all"
                  required
                />
              </div>
            </div>
          </div>

          {/* Password + Access Level */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label className="text-[10px] font-black uppercase tracking-widest ml-1 flex items-center gap-2">
                <Lock size={12} /> Password *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-5 py-3.5 rounded-xl border border-slate-100 text-sm font-bold outline-none focus:ring-4 focus:ring-[rgba(221,217,255,0.5)] focus:border-[#CBF3F0] transition-all"
                required
              />
            </div>

            <div>
              <label className="text-[10px] font-black uppercase tracking-widest ml-1 flex items-center gap-2">
                <ShieldCheck size={12} /> Access Level *
              </label>

              <div className="relative">
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-xl border border-[#CBF3F0] text-[11px] font-black outline-none appearance-none cursor-pointer uppercase tracking-widest"
                  required
                >
                  {roleOptions.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>

                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#FF9F1C]">
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleGoBack}
              className="flex-1 px-3 py-3 rounded-2xl border-2 border-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-rose-500 transition-all flex items-center justify-center gap-2"
            >
              <X size={12} strokeWidth={3} /> Discard
            </button>

            <button
              type="submit"
              className="bg-[#FF9F1C] hover:bg-[#FF8C00] text-white flex-[1.5] px-3 py-3 rounded-2xl text-[10px] uppercase tracking-widest active:scale-95 flex items-center justify-center gap-2 transition-colors"
            >
              <Check size={14} strokeWidth={3} /> Initialize Staff
            </button>
          </div>
        </form>
      </div>

      <p className="mt-6 text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] text-center opacity-60">
        Automatic synchronization with real-time operations enabled.
      </p>
    </div>
  );
}
