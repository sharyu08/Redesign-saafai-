"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    ArrowLeft,
    UserPlus,
    Shield,
    Briefcase,
    Mail,
    Phone,
    Lock,
    ShieldCheck,
    Check,
    X
} from 'lucide-react';

export default function AddUserFullPage() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        company: 'Nagpur Municipal Corporation Pilot',
        fullName: '',
        email: '',
        phone: '',
        password: '',
        role: 'Cleaner',
    });

    const roleOptions = ['Admin', 'Supervisor', 'Cleaner'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleGoBack = () => {
        router.push('/dashboard/user-management');
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
        <div className="min-h-screen bg-[#F8FAFB] w-full pt-12 pb-12 px-6 relative overflow-hidden flex flex-col items-center">

            {/* Background Decorative Blur */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#E6F7F9] rounded-full blur-[100px] opacity-50 -mr-40 -mt-40 pointer-events-none" />

            {/* 1. Back Button: Absolute Left Corner */}
            <div className="absolute top-8 left-8 z-20">
                <button
                    onClick={handleGoBack}
                    className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#58BECF] transition-all"
                >
                    <div className="h-10 w-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:border-[#58BECF] group-hover:shadow-md transition-all">
                        <ArrowLeft size={16} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" />
                    </div>
                    <span className="hidden lg:block">Back to Directory</span>
                </button>
            </div>

            {/* 2. Centered Page Header Section */}


            {/* 3. Main Form Card: Widened for Full Page Visibility */}
            <div className="max-w-2xl w-full bg-white rounded-[32px] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-1000 relative z-10">

                {/* Inner Card Header */}
                <div className="bg-[#E6F7F9] px-8 py-5 border-b border-[#D1F0F2] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <UserPlus size={18} className="text-[#58BECF]" />
                        <h2 className="text-[#007C85] font-black text-xs uppercase tracking-widest">
                            Account Details
                        </h2>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-[#28C76F] animate-pulse" />
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">

                    {/* Organizational Node */}
                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                            <Briefcase size={12} /> Assigned Operations Node
                        </label>
                        <div className="flex items-center justify-between border border-slate-50 rounded-2xl p-4 bg-[#F8FAFB]/60">
                            <div className="text-left">
                                <p className="text-sm font-black text-[#007C85] uppercase leading-tight">
                                    {formData.company}
                                </p>
                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter mt-1">
                                    Primary Management Group
                                </p>
                            </div>
                            <span className="px-3 py-1 bg-white rounded-lg text-[8px] font-black text-[#2D8E97] border border-[#D1F0F2] uppercase shadow-sm">
                                Verified
                            </span>
                        </div>
                    </div>

                    {/* Profile Info Grid */}
                    <div className="space-y-4">
                        <div className="space-y-1.5 text-left">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name *</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Legal Name"
                                className="w-full px-5 py-3.5 rounded-xl border border-slate-100 bg-[#F8FAFB] text-sm font-bold text-slate-700 outline-none focus:ring-4 focus:ring-cyan-50 focus:border-[#58BECF] transition-all"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1.5 text-left">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="staff@saaf.ai"
                                    className="w-full px-5 py-3.5 rounded-xl border border-slate-100 bg-[#F8FAFB] text-sm font-bold text-slate-700 outline-none focus:ring-4 focus:ring-cyan-50 focus:border-[#58BECF] transition-all"
                                />
                            </div>
                            <div className="space-y-1.5 text-left">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Mobile Number"
                                    className="w-full px-5 py-3.5 rounded-xl border border-slate-100 bg-[#F8FAFB] text-sm font-bold text-slate-700 outline-none focus:ring-4 focus:ring-cyan-50 focus:border-[#58BECF] transition-all"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Security & Role Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-slate-50">
                        <div className="space-y-1.5 text-left">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <Lock size={12} /> Password *
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="w-full px-5 py-3.5 rounded-xl border border-slate-100 bg-[#F8FAFB] text-sm font-bold text-slate-700 outline-none focus:ring-4 focus:ring-cyan-50 focus:border-[#58BECF] transition-all"
                                required
                            />
                        </div>
                        <div className="space-y-1.5 text-left">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <ShieldCheck size={12} /> Access Level *
                            </label>
                            <div className="relative">
                                <select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="w-full px-5 py-3.5 rounded-xl border border-slate-100 bg-[#F8FAFB] text-xs font-black text-[#007C85] outline-none appearance-none cursor-pointer uppercase tracking-widest"
                                    required
                                >
                                    {roleOptions.map(role => (
                                        <option key={role} value={role}>{role}</option>
                                    ))}
                                </select>
                                <ShieldCheck className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#58BECF] h-4 w-4" />
                            </div>
                        </div>
                    </div>

                    {/* Action Group: Blue-to-Teal Gradient */}
                    <div className="flex items-center gap-3 pt-4">
                        <button
                            type="button"
                            onClick={handleGoBack}
                            className="flex-1 px-6 py-4 rounded-2xl border-2 border-slate-100 bg-white text-[11px] font-black text-slate-400 uppercase tracking-widest hover:bg-slate-50 hover:text-rose-500 transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                            <X size={16} strokeWidth={3} /> Discard
                        </button>
                        <button
                            type="submit"
                            style={{ background: 'linear-gradient(to right, #58BECF, #6D9CDC)' }}
                            className="flex-[2] px-6 py-4 rounded-2xl text-white text-[11px] font-black uppercase tracking-widest shadow-xl shadow-cyan-500/20 hover:brightness-105 active:scale-95 flex items-center justify-center gap-2"
                        >
                            <Check size={18} strokeWidth={3} /> Initialize Staff Member
                        </button>
                    </div>
                </form>
            </div>

            {/* Footnote */}
            <p className="mt-10 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] text-center opacity-60 max-w-sm mx-auto relative z-10">
                Account activation initiates automatic synchronization with real-time operations.
            </p>
        </div>
    );
}