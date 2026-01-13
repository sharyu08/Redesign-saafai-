"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  UserPlus,
  Lock,
  ShieldCheck,
  X,
  ChevronDown,
  Building2,
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
    <div className="min-h-screen bg-white dark:bg-background w-full pt-8 pb-12 px-4 sm:px-6 md:px-8 flex flex-col items-center relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#CBF3F0] rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none" />

      {/* Back Button */}
      <div className="w-full max-w-3xl mb-6 self-center">
        <button
          onClick={handleGoBack}
          className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#FF9F1C] transition-all"
        >
          <div className="h-9 w-9 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:border-[#CBF3F0] group-hover:shadow-md transition-all">
            <ArrowLeft size={16} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" />
          </div>
          <span>Return</span>
        </button>
      </div>

      {/* Main Card - Increased size and spacing */}
      <div className="w-full max-w-3xl bg-white dark:bg-card rounded-[32px] shadow-2xl shadow-slate-200/50 border border-slate-100 dark:border-border overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-1000 relative z-10">
        {/* Card Header */}
        <div className="bg-[#CBF3F0] px-6 sm:px-8 py-5 border-b border-[#CBF3F1] flex justify-between items-center">
          <div className="flex items-center gap-3">
            <UserPlus size={20} className="text-[#FF9F1C]" />
            <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-[#0f0f0f]">
              Add New User
            </h1>
          </div>
          <div className="h-2 w-2 rounded-full bg-[#28C76F] animate-pulse" />
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8">
          {/* Assigned Node - Simplified */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#CBF3F0] flex items-center justify-center">
                <Building2 size={18} className="text-[#FF9F1C]" />
              </div>
              <div>
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-tight">
                  Assigned Operation Node
                </h3>
                <p className="text-xs font-medium text-slate-500">
                  Select the operation node for this user
                </p>
              </div>
            </div>
          </div>

          {/* User Information Section */}
          <div className="space-y-6 bg-slate-50/50 p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2 mb-2">
              <UserPlus size={18} className="text-[#FF9F1C]" />
              User Information
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 mb-2 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Legal Name"
                  className="w-full px-4 py-3.5 text-base rounded-xl border border-slate-200 bg-white font-medium text-[#0f0f0f] outline-none focus:border-[#FF9F1C] focus:ring-2 focus:ring-[#FF9F1C]/20 transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="staff@saaf.ai"
                    className="w-full px-4 py-3.5 text-base rounded-xl border border-slate-200 bg-white font-medium text-[#0f0f0f] outline-none focus:border-[#FF9F1C] focus:ring-2 focus:ring-[#FF9F1C]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 mb-2 uppercase tracking-wider">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    className="w-full px-4 py-3.5 text-base rounded-xl border border-slate-200 bg-white font-medium text-[#0f0f0f] outline-none focus:border-[#FF9F1C] focus:ring-2 focus:ring-[#FF9F1C]/20 transition-all"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Password + Access Level */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 bg-white dark:bg-card p-6 rounded-2xl border border-slate-100 dark:border-border shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 col-span-2 flex items-center gap-2">
              <Lock size={18} className="text-[#FF9F1C]" />
              Access & Security
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="flex items-center gap-2 text-[11px] font-bold text-slate-500 mb-2 uppercase tracking-wider">
                  <Lock size={12} /> Password *
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••"
                  className="w-full px-4 py-3.5 text-base rounded-xl border border-slate-200 bg-white font-medium text-[#0f0f0f] outline-none focus:border-[#FF9F1C] focus:ring-2 focus:ring-[#FF9F1C]/20 transition-all"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="flex items-center gap-2 text-[11px] font-bold text-slate-500 mb-2 uppercase tracking-wider">
                  <ShieldCheck size={12} /> Access Level *
                </label>
                <div className="relative">
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 text-base rounded-xl border border-slate-200 bg-white font-medium text-[#0f0f0f] outline-none appearance-none cursor-pointer focus:border-[#FF9F1C] focus:ring-2 focus:ring-[#FF9F1C]/20 transition-all"
                    required
                  >
                    {roleOptions.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#FF9F1C]">
                    <ChevronDown size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 sm:gap-4 pt-6">
            <button
              type="button"
              onClick={handleGoBack}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-200 text-sm font-bold uppercase tracking-wider text-slate-500 hover:text-rose-500 hover:bg-rose-50 transition-all flex items-center justify-center gap-2"
            >
              <X size={16} strokeWidth={2.5} />
              <span>Cancel</span>
            </button>

            <button
              type="submit"
              className="w-full sm:w-auto bg-[#FF9F1C] hover:bg-[#E68A00] text-white text-sm font-bold py-3.5 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
            >
              <UserPlus size={18} strokeWidth={2.5} />
              <span>Create User</span>
            </button>
          </div>
        </form>
      </div>


    </div>
  );
}