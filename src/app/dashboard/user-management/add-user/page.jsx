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
    <div className="min-h-screen bg-white dark:bg-background w-full pt-4 sm:pt-8 pb-12 px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col items-center relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#CBF3F0] rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none" />

      {/* Back Button */}
      <div className="absolute top-4 sm:top-8 left-3 sm:left-8 z-20">
        <button
          onClick={handleGoBack}
          className="group flex items-center gap-2 sm:gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#FF9F1C] transition-all"
        >
          <div className="h-9 w-9 rounded-full bg-white dark:bg-card shadow-sm border border-slate-100 dark:border-border flex items-center justify-center group-hover:border-[#CBF3F0] group-hover:shadow-md transition-all">
            <ArrowLeft size={16} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" />
          </div>
          <span className="hidden lg:block">Return</span>
        </button>
      </div>

      {/* Main Card - Increased size and spacing */}
      <div className="w-full max-w-full sm:max-w-2xl lg:max-w-3xl bg-white dark:bg-card rounded-2xl sm:rounded-[32px] shadow-2xl shadow-slate-200/50 border border-slate-100 dark:border-border overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-1000 relative z-10 mt-12 sm:mt-0">
        {/* Card Header */}
        <div className="bg-[#CBF3F0] dark:bg-[hsl(224,48%,16%)] px-4 sm:px-6 md:px-8 py-4 sm:py-5 border-b border-[#CBF3F1] dark:border-border flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <UserPlus size={18} className="sm:w-5 sm:h-5 text-[#FF9F1C]" />
            <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-[#0f0f0f] dark:text-foreground">
              Add New User
            </h1>
          </div>
          <div className="h-2 w-2 rounded-full bg-[#28C76F] animate-pulse" />
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
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

          {/* Profile Info */}
          <div className="space-y-5 sm:space-y-6 pt-2 bg-white dark:bg-card p-4 sm:p-6 rounded-2xl border border-slate-100 dark:border-border shadow-sm">
            <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-foreground flex items-center gap-2">
              <UserPlus size={18} className="text-[#FF9F1C]" />
              User Information
            </h3>
            {/* Full Name */}
            <div>
              <label className="block text-sm font-bold text-slate-800 dark:text-foreground mb-2 uppercase tracking-wider">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Legal Name"
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-xl border border-slate-200 dark:border-border hover:border-[#CBF3F0] bg-white dark:bg-card font-medium text-[#0f0f0f] dark:text-foreground placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-[#FF9F1C] focus:ring-2 focus:ring-[#FF9F1C]/20 transition-all duration-200"
                required
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-800 dark:text-foreground mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="staff@saaf.ai"
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-xl border border-slate-200 dark:border-border hover:border-[#CBF3F0] bg-white dark:bg-card font-medium text-[#0f0f0f] dark:text-foreground placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-[#FF9F1C] focus:ring-2 focus:ring-[#FF9F1C]/20 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-800 dark:text-foreground mb-2 uppercase tracking-wider">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-xl border border-slate-200 dark:border-border hover:border-[#CBF3F0] bg-white dark:bg-card font-medium text-[#0f0f0f] dark:text-foreground placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-[#FF9F1C] focus:ring-2 focus:ring-[#FF9F1C]/20 transition-all duration-200"
                  required
                />
              </div>
            </div>
          </div>

          {/* Password + Access Level */}
          <div className="space-y-5 sm:space-y-6 pt-2 bg-white dark:bg-card p-4 sm:p-6 rounded-2xl border border-slate-100 dark:border-border shadow-sm">
            <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-foreground flex items-center gap-2">
              <Lock size={18} className="text-[#FF9F1C]" />
              Access & Security
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-800 dark:text-foreground mb-2 uppercase tracking-wider">
                  <Lock size={12} /> Password *
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-xl border border-slate-200 dark:border-border hover:border-[#CBF3F0] bg-white dark:bg-card font-medium text-[#0f0f0f] dark:text-foreground placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-[#FF9F1C] focus:ring-2 focus:ring-[#FF9F1C]/20 transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-800 dark:text-foreground mb-2 uppercase tracking-wider">
                  <ShieldCheck size={12} /> Access Level *
                </label>

                <div className="relative">
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-xl border border-slate-200 dark:border-border hover:border-[#CBF3F0] bg-white dark:bg-card font-medium text-[#0f0f0f] dark:text-foreground outline-none appearance-none cursor-pointer uppercase tracking-wider focus:border-[#FF9F1C] focus:ring-2 focus:ring-[#FF9F1C]/20 transition-all duration-200"
                    required
                  >
                    {roleOptions.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>

                  <div className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#FF9F1C]">
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-slate-100 dark:border-border mt-6 sm:mt-8">
            <button
              type="button"
              onClick={handleGoBack}
              className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl border border-slate-200 dark:border-border text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <X size={16} strokeWidth={2.5} /> 
              <span>Cancel</span>
            </button>

            <button
              type="submit"
              className="bg-[#FF9F1C] hover:bg-[#E68A00] text-white text-sm font-bold py-3 sm:py-3.5 px-6 sm:px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 w-full sm:w-auto"
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