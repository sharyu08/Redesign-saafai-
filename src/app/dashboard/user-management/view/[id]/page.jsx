"use client";

import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import {
    UserCog, ShieldCheck, Mail, Phone, MapPin,
    Calendar, Edit, ArrowLeft, Users, Activity,
    ChevronRight, CheckCircle2, Clock, Info
} from 'lucide-react';

export default function ViewUserPage() {
    const router = useRouter();
    const params = useParams();
    const userId = params?.id || "182";

    const [user] = useState({
        id: userId,
        fullName: "Rajesh Sahani",
        email: "rajesh@example.com",
        phone: "8955596876",
        role: "Cleaner",
        status: "active",
        joinDate: "15 Jan 2023",
        lastActive: "2 hours ago",
        locations: [
            {
                name: 'Narendra nagar square',
                assignedDate: '20 Nov 2025',
                active: true,
                coordinates: '21.107, 79.079',
                address: "Nagar Square, Nagpur, Maharashtra"
            },
            {
                name: 'New Manish Nagar Chowk',
                assignedDate: '8 Dec 2025',
                active: true,
                coordinates: '21.085, 79.087',
                address: "Manish Nagar, Nagpur, Maharashtra"
            }
        ]
    });

    const handleEdit = () => router.push(`/dashboard/user-management/edit/${userId}`);
    const handleBack = () => router.push('/dashboard/user-management');

    return (
        <div className="w-full h-full bg-white animate-in fade-in duration-500">
            <div className="p-8 max-w-[1300px] mx-auto space-y-8">

                {/* TOP NAVIGATION BAR */}
                <div className="flex items-center justify-between">
                    <button
                        onClick={handleBack}
                        className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-slate-600 dark:text-slate-300 transition-colors"
                    >
                        <ArrowLeft size={20} strokeWidth={2.5} />
                    </button>

                    <button
                        onClick={handleEdit}
                        className="btn-primary px-6 py-2.5 flex items-center gap-2 rounded-xl shadow-lg shadow-cyan-500/10 active:scale-95 transition-all"
                    >
                        <Edit size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Edit Personnel</span>
                    </button>
                </div>

                {/* USER PROFILE CARD */}
                <div className="card-global bg-white border border-slate-200 shadow-sm overflow-hidden">

                    {/* PROFILE HERO HEADER - LIGHT THEME */}
                    <div className="bg-slate-50/50 border-b border-slate-100 px-10 py-8">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="relative">
                                <div className="h-24 w-24 rounded-[32px] bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                                    <UserCog className="h-10 w-10 text-cyan-600" />
                                </div>
                                <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-emerald-500 border-4 border-white flex items-center justify-center shadow-md">
                                    <CheckCircle2 size={14} className="text-white" />
                                </div>
                            </div>

                            <div className="text-center md:text-left space-y-2">
                                <div className="flex flex-col md:flex-row items-center gap-4">
                                    <h1 className="text-3xl font-black text-slate-800 uppercase tracking-tight">
                                        {user.fullName}
                                    </h1>
                                    <span className="px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-emerald-50 text-emerald-600 border border-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800">
                                        System {user.status}
                                    </span>
                                </div>
                                <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                                    <span className="flex items-center gap-2 text-cyan-600">
                                        <ShieldCheck size={14} /> ID: {userId}
                                    </span>
                                    <span className="hidden md:inline text-slate-200">•</span>
                                    <span className="flex items-center gap-2">
                                        <Clock size={14} /> Active {user.lastActive}
                                    </span>
                                    <span className="hidden md:inline text-slate-200">•</span>
                                    <span className="flex items-center gap-2 text-slate-500">
                                        <Users size={14} /> Designated {user.role}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DATA GRID */}
                    <div className="p-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                            {/* LEFT COLUMN: CONTACT & ACCOUNT (4 COLS) */}
                            <div className="lg:col-span-4 space-y-10">
                                <section className="space-y-6">
                                    <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100 pb-3">
                                        Primary Contact
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 rounded-xl bg-cyan-50 border border-cyan-100">
                                                <Mail size={18} className="text-cyan-600" />
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Email Address</p>
                                                <p className="text-sm font-bold text-slate-700 mt-1">{user.email}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                                                <Phone size={18} className="text-slate-600" />
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Mobile Number</p>
                                                <p className="text-sm font-bold text-slate-700 mt-1">{user.phone}</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="space-y-6">
                                    <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100 pb-3">
                                        Account History
                                    </h3>
                                    <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                        <div className="flex items-center gap-3">
                                            <Calendar size={16} className="text-slate-400" />
                                            <p className="text-xs font-bold text-slate-600 uppercase">Onboarded</p>
                                        </div>
                                        <p className="text-xs font-black text-slate-800">{user.joinDate}</p>
                                    </div>
                                </section>
                            </div>

                            {/* RIGHT COLUMN: ASSIGNED LOCATIONS (8 COLS) */}
                            <div className="lg:col-span-8 space-y-6">
                                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                                    <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                        Assigned Mapping Zones ({user.locations.length})
                                    </h3>
                                    <Activity size={16} className="text-cyan-500" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {user.locations.map((location, index) => (
                                        <div
                                            key={index}
                                            className="group p-5 rounded-3xl border border-slate-100 bg-white hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300"
                                        >
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="h-10 w-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-cyan-600 group-hover:text-white transition-colors shadow-sm">
                                                    <MapPin size={18} />
                                                </div>
                                                <ChevronRight size={14} className="text-slate-200 group-hover:text-cyan-500" />
                                            </div>

                                            <div className="space-y-1">
                                                <h4 className="text-sm font-black text-slate-800 uppercase tracking-tight">{location.name}</h4>
                                                <p className="text-[10px] font-medium text-slate-400 leading-relaxed truncate">{location.address}</p>
                                            </div>

                                            <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
                                                <div className="flex items-center gap-1.5 text-[9px] font-black text-slate-400 uppercase">
                                                    <Clock size={10} />
                                                    Since {location.assignedDate}
                                                </div>
                                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* LIGHT FOOTER NOTE */}
                                <div className="p-6 rounded-[28px] bg-cyan-50/50 border border-cyan-100">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-xl bg-white border border-cyan-100 flex items-center justify-center shadow-sm">
                                            <Info size={20} className="text-cyan-600" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-cyan-600/60">System Notification</p>
                                            <p className="text-[11px] font-medium mt-1 leading-relaxed text-cyan-800">
                                                All location mappings for <span className="font-bold">{user.fullName}</span> are synchronized with real-time GPS terminal updates. Mapping is verified for accuracy.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}