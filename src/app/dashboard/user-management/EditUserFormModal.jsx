"use client";

import React, { useState } from 'react';
import {
    X,
    ShieldCheck,
    Mail,
    Phone,
    Check,
    Fingerprint,
    User,
    ArrowRight
} from 'lucide-react';

const EditUserFormModal = ({ onClose, onSubmit, initialUser }) => {
    const [formData, setFormData] = useState({
        company: 'Nagpur Municipal Corp',
        fullName: initialUser?.name || initialUser?.fullName || '',
        email: initialUser?.email || '',
        phone: initialUser?.phone || '',
        role: initialUser?.role || 'Cleaner',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.fullName || !formData.phone) {
            alert("Please fill out required fields.");
            return;
        }
        onSubmit(formData);
        onClose();
    };

    const roleOptions = ['Admin', 'Supervisor', 'Cleaner'];

    return (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-[70] p-4 overflow-y-auto">
            {/* Width reduced from max-w-2xl to max-w-md for a compact feel */}
            <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">

                {/* 1. Slimmed Header */}
                <div className="bg-[#E6F7F9] px-6 py-5 border-b border-[#D1F0F2] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                            <Fingerprint className="h-6 w-6 text-[#58BECF]" strokeWidth={2} />
                        </div>
                        <div className="text-left">
                            <h2 className="text-sm font-black text-slate-800 uppercase tracking-tight leading-none">
                                Edit Profile
                            </h2>
                            <p className="text-[9px] font-bold text-[#58BECF] uppercase tracking-widest mt-1">
                                ID: #{initialUser?.userId || '182'}
                            </p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-white text-slate-400 hover:text-rose-500 transition-all">
                        <X size={18} strokeWidth={2.5} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-5 bg-white">

                    {/* 2. Compact Input Section */}
                    <div className="space-y-4">
                        {/* Name Field */}
                        <div className="text-left group">
                            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1 block">Full Name *</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-100 bg-[#F8FAFB] text-sm font-bold text-slate-700 outline-none focus:ring-4 focus:ring-cyan-50 focus:border-[#58BECF] transition-all"
                                    placeholder="Rajesh Sahani"
                                    required
                                />
                            </div>
                        </div>

                        {/* Contact Duo: Reduced vertical height */}
                        <div className="grid grid-cols-1 gap-4">
                            <div className="text-left">
                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1 block">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-100 bg-[#F8FAFB] text-sm font-bold text-slate-700 outline-none focus:ring-4 focus:ring-cyan-50 focus:border-[#58BECF] transition-all"
                                        placeholder="user@saaf.ai"
                                    />
                                </div>
                            </div>
                            <div className="text-left">
                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1 block">Phone *</label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-100 bg-[#F8FAFB] text-sm font-bold text-slate-700 outline-none focus:ring-4 focus:ring-cyan-50 focus:border-[#58BECF] transition-all"
                                        placeholder="+91"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 3. Role Selector: Compact Grid */}
                        <div className="text-left">
                            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Permission Level</label>
                            <div className="grid grid-cols-3 gap-2">
                                {roleOptions.map((role) => (
                                    <button
                                        key={role}
                                        type="button"
                                        onClick={() => setFormData(p => ({ ...p, role }))}
                                        className={`py-2 rounded-lg text-[10px] font-black uppercase tracking-tight border transition-all ${formData.role === role
                                                ? 'bg-cyan-50 border-[#58BECF] text-[#007C85]'
                                                : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200'
                                            }`}
                                    >
                                        {role}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 4. Action Footer: High-impact gradient button */}
                    <div className="flex flex-col gap-3 pt-2">
                        <button
                            type="submit"
                            style={{ background: 'linear-gradient(to right, #58BECF, #6D9CDC)' }}
                            className="w-full py-3.5 rounded-xl text-white text-[11px] font-black uppercase tracking-widest shadow-lg shadow-cyan-500/20 hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                        >
                            <Check size={16} strokeWidth={3} /> Save Updates
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="w-full py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-rose-500 transition-all"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUserFormModal;