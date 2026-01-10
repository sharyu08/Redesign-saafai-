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
    <div className="min-h-screen bg-white dark:bg-background w-full pt-8 pb-12 px-6 flex flex-col items-center relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#CBF3F0] rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none" />

      {/* Back Button */}
      <div className="absolute top-8 left-8 z-20">
        <button
          onClick={handleGoBack}
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
        {/* Card Header */}
        <div className="bg-[#CBF3F0] px-8 py-5 border-b border-[#CBF3F1] flex justify-between items-center">
          <div className="flex items-center gap-3">
            <UserPlus size={20} className="text-[#FF9F1C]" />
            <h1 className="text-xl font-extrabold tracking-tight text-[#0f0f0f]">
              Add New User
            </h1>
          </div>
          <div className="h-2 w-2 rounded-full bg-[#28C76F] animate-pulse" />
        </div>

        <form onSubmit={handleSubmit} className="p-10 space-y-8">
          {/* Assigned Node */}
          <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <label className="block text-xs font-bold text-slate-600 mb-3 uppercase tracking-wider flex items-center gap-2">
              <Briefcase size={14} className="text-[#FF9F1C]" /> 
              <span>Assigned Operations Node</span>
            </label>

            <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
              <div>
                <p className="text-base font-black text-slate-800 leading-tight">
                  {formData.company}
                </p>
                <p className="text-sm font-medium text-slate-500 mt-1">
                  Primary Management Group
                </p>
              </div>

              <span className="px-4 py-1.5 rounded-lg text-sm font-bold text-[#28C76F] bg-[#E8F9F0] border border-[#D1F5E0] flex items-center gap-2">
                <Check size={14} strokeWidth={3} />
                Verified
              </span>
            </div>
          </div>

          {/* Profile Info */}
          <div className="space-y-6 pt-2">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <UserPlus size={18} className="text-[#FF9F1C]" />
              User Information
            </h3>
            {/* Full Name */}
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-2 uppercase tracking-wider">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Legal Name"
                className="w-full px-5 py-3.5 text-base rounded-xl border border-slate-100 bg-white font-medium text-[#0f0f0f] placeholder-slate-400 outline-none focus:border-[#93C5FD] focus:ring-2 focus:ring-[#93C5FD]/20 transition-all"
                required
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="staff@saaf.ai"
                  className="w-full px-5 py-3.5 text-base rounded-xl border border-slate-100 bg-white font-medium text-[#0f0f0f] placeholder-slate-400 outline-none focus:border-[#93C5FD] focus:ring-2 focus:ring-[#93C5FD]/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2 uppercase tracking-wider">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="w-full px-5 py-3.5 text-base rounded-xl border border-slate-100 bg-white font-medium text-[#0f0f0f] placeholder-slate-400 outline-none focus:border-[#93C5FD] focus:ring-2 focus:ring-[#93C5FD]/20 transition-all"
                  required
                />
              </div>
            </div>
          </div>

          {/* Password + Access Level */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <h3 className="text-lg font-bold text-slate-800 col-span-2 flex items-center gap-2">
              <Lock size={18} className="text-[#FF9F1C]" />
              Access & Security
            </h3>
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-2 uppercase tracking-wider">
                <Lock size={12} /> Password *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-5 py-3.5 text-base rounded-xl border border-slate-100 bg-white font-medium text-[#0f0f0f] placeholder-slate-400 outline-none focus:border-[#93C5FD] focus:ring-2 focus:ring-[#93C5FD]/20 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-800 mb-2 uppercase tracking-wider">
                <ShieldCheck size={12} /> Access Level *
              </label>

              <div className="relative">
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 text-base rounded-xl border border-[#CBF3F0] bg-white font-medium text-[#0f0f0f] outline-none appearance-none cursor-pointer uppercase tracking-wider"
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
          <div className="flex items-center justify-end gap-4 pt-8 border-t border-slate-100 mt-8">
            <button
              type="button"
              onClick={handleGoBack}
              className="px-6 py-3.5 rounded-xl border border-slate-200 text-sm font-bold uppercase tracking-wider text-slate-500 hover:text-rose-500 hover:bg-rose-50 transition-all flex items-center justify-center gap-2"
            >
              <X size={16} strokeWidth={2.5} /> 
              <span>Cancel</span>
            </button>

            <button
              type="submit"
              className="bg-[#FF9F1C] hover:bg-[#E68A00] text-white text-sm font-bold py-3.5 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3"
            >
              <UserPlus size={18} strokeWidth={2.5} className="text-white" />
              <span>Create User</span>
            </button>
          </div>
        </form>
      </div>

      <p className="mt-8 text-sm font-medium text-slate-400 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
          <span>Automatic synchronization with real-time operations enabled</span>
        </span>
      </p>
    </div>
  );
}