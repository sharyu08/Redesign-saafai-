"use client";

import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { UserCog, ShieldCheck, Info, Save, Building2, Smartphone, Mail, Lock, X } from 'lucide-react';

export default function EditUserPage() {
    const router = useRouter();
    const params = useParams();
    const userId = params?.id || "182";

    const [formData, setFormData] = useState({
        fullName: "Rajesh Sahani",
        email: "rajesh@example.com",
        phone: "8955596876",
        password: "",
        role: "cleaner"
    });

    const roles = [
        "admin", "supervisor", "cleaner", "zonal admin", "facility supervisor", "facility admin"
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push('/dashboard/user-management');
    };

    const handleCancel = () => {
        router.back();
    };

    return (
        <div className="w-full h-full bg-slate-50/30 dark:bg-slate-900 animate-in fade-in duration-500">
            <button
                type="button"
                onClick={handleCancel}
                className="flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-red-500 transition-colors w-fit rounded-xl border border-slate-200 hover:border-red-200 bg-white hover:bg-red-50"
            >
                <X size={14} /> Cancel Edits
            </button>

            <div className="p-8 max-w-[800px] mx-auto">
                <form onSubmit={handleSubmit} className="card-global bg-white border-slate-200 shadow-sm overflow-hidden">

                    <div className="sticky top-0 z-10 bg-gradient-to-r from-white via-slate-50/50 to-white dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900 border-b border-slate-200/80 dark:border-slate-700/80 backdrop-blur-xl shadow-sm">
                        <div className="px-8 py-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-5">
                                    <div className="relative">
                                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                                            <UserCog className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900"></div>
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight flex items-center gap-3">
                                            User Configuration
                                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-full uppercase border border-emerald-200 dark:border-emerald-500/30">
                                                Active
                                            </span>
                                        </h1>
                                        <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-3 mt-2">
                                            <span className="flex items-center gap-1.5">
                                                <ShieldCheck size={11} className="text-cyan-500" />
                                                <span className="text-cyan-600 dark:text-cyan-400">ID: #{userId}</span>
                                            </span>
                                            <span className="text-slate-300 dark:text-slate-600">•</span>
                                            <span className="text-slate-600 dark:text-slate-300">System Profile</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 space-y-6">
                        <div className="flex flex-col space-y-6">

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Full Name *</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 dark:bg-slate-800 text-sm font-bold focus:ring-2 focus:ring-cyan-500/20 focus:bg-white transition-all outline-none"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                                <div className="relative">
                                    <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                                    <input
                                        type="email"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-100 bg-slate-50 dark:bg-slate-800 text-sm font-bold focus:ring-2 focus:ring-cyan-500/20 focus:bg-white transition-all outline-none"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Mobile Access *</label>
                                <div className="relative">
                                    <Smartphone size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                                    <input
                                        type="tel"
                                        required
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-100 bg-slate-50 dark:bg-slate-800 text-sm font-bold focus:ring-2 focus:ring-cyan-500/20 focus:bg-white transition-all outline-none"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Account Role *</label>
                                <select
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 dark:bg-slate-800 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-cyan-500/20 focus:bg-white outline-none appearance-none cursor-pointer"
                                    value={formData.role}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                >
                                    {roles.map((role) => (
                                        <option key={role} value={role}>{role.toUpperCase()}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Update Password</label>
                                <div className="relative">
                                    <Lock size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                                    <input
                                        type="password"
                                        placeholder="Leave blank to keep unchanged"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 dark:bg-slate-800 text-sm font-bold focus:ring-2 focus:ring-cyan-500/20 focus:bg-white transition-all outline-none"
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="pt-6 border-t border-slate-100 flex flex-col space-y-4">
                                <button
                                    type="submit"
                                    className="btn-primary w-full py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/20 active:scale-[0.98] transition-all"
                                >
                                    <Save size={18} />
                                    <span className="text-[12px] font-black uppercase tracking-[0.2em]">Save User Changes</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}