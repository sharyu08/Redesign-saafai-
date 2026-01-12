"use client";

import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { UserCog, ShieldCheck, Info, Save, Building2, Smartphone, Mail, Lock } from 'lucide-react';

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

    return (
        <div className="w-full h-full bg-slate-50/30 dark:bg-slate-900 animate-in fade-in duration-500">
            {/* COMPACT TOP HEADER */}
            <div className="flex items-center justify-between px-8 py-4 border-b border-slate-200 bg-white dark:bg-slate-900/50 sticky top-0 z-10">
                <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <UserCog className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                        <h1 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight">
                            User Configuration
                        </h1>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                            <ShieldCheck size={10} className="text-cyan-500" /> ID: #{userId} • System Profile
                        </p>
                    </div>
                </div>
            </div>

            {/* UNIFIED CONTENT AREA */}
            <div className="p-8 max-w-[800px] mx-auto">
                <form onSubmit={handleSubmit} className="card-global bg-white border-slate-200 shadow-sm overflow-hidden">

                    {/* TOP CONTEXT STRIP */}
                    <div className="px-8 py-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Building2 size={16} className="text-slate-400" />
                            <p className="text-xs font-bold text-slate-600 uppercase tracking-tight">
                                Nagpur Municipal Corporation Pilot
                            </p>
                        </div>
                        <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase border border-emerald-100">
                            Verified Entity
                        </span>
                    </div>

                    <div className="p-8 space-y-6">
                        {/* VERTICAL STACKED ENTITIES (Ek ke upar ek) */}
                        <div className="flex flex-col space-y-6">

                            {/* Entity 1: Full Name */}
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

                            {/* Entity 2: Email Address */}
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

                            {/* Entity 3: Mobile Access */}
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

                            {/* Entity 4: Account Role */}
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

                            {/* Entity 5: Update Password */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Update Password</label>
                                <div className="relative">
                                    <Lock size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" />
                                    <input
                                        type="password"
                                        placeholder="Leave blank to keep unchanged"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 dark:bg-slate-800 text-sm font-bold focus:ring-2 focus:ring-cyan-500/20 focus:bg-white transition-all outline-none"
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Final Action: Save Changes */}
                            <div className="pt-4">
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