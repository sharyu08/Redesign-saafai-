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
        <div className="form-overlay z-index-70">
            <div className="form-container">
                {/* Header */}
                <div className="form-header">
                    <div className="flex items-center gap-3">
                        <div className="form-icon-button">
                            <Fingerprint className="text-cyan-600 dark:text-cyan-400" size={20} />
                        </div>
                        <div className="text-left">
                            <h2 className="form-header-title">
                                Edit Profile
                            </h2>
                            <p className="form-header-subtitle">
                                USER ID: #{initialUser?.userId || '182'}
                            </p>
                        </div>
                    </div>
                    <button onClick={onClose} className="form-header-close">
                        <X size={20} strokeWidth={3} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="form-body space-y-6">

                    {/* Full Name - Using .form-input-wrapper pattern */}
                    <div className="form-group">
                        <label className="form-label">
                            Full Name <span className="form-label-required">*</span>
                        </label>
                        <div className="form-input-wrapper">
                            <User className="form-input-icon" size={16} />
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="e.g. Rajesh Sahani"
                                required
                            />
                        </div>
                    </div>

                    {/* Contact Details Grid */}
                    <div className="grid grid-cols-1 gap-5">
                        <div className="form-group">
                            <label className="form-label">Email Address</label>
                            <div className="form-input-wrapper">
                                <Mail className="form-input-icon" size={16} />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="user@saaf.ai"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                Phone Number <span className="form-label-required">*</span>
                            </label>
                            <div className="form-input-wrapper">
                                <Phone className="form-input-icon" size={16} />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="form-input font-mono"
                                    placeholder="+91"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Permission Selector using recorded Button classes */}
                    <div className="form-group">
                        <label className="form-label">Access Level Architecture</label>
                        <div className="grid grid-cols-3 gap-2 p-1 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                            {roleOptions.map((role) => (
                                <button
                                    key={role}
                                    type="button"
                                    onClick={() => setFormData(p => ({ ...p, role }))}
                                    className={`
                                        px-2 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all
                                        ${formData.role === role
                                            ? 'bg-white dark:bg-slate-700 text-cyan-600 dark:text-cyan-400 shadow-sm border border-slate-100 dark:border-slate-600'
                                            : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                                        }
                                    `}
                                >
                                    {role}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Action Footer - Using form-actions-column logic */}
                    <div className="form-actions form-actions-column pt-2">
                        <button
                            type="submit"
                            className="btn-gradient w-full flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-black uppercase tracking-[0.15em] active:scale-95 transition-all"
                        >
                            <Check size={16} strokeWidth={3} /> Save User Updates
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="btn-icon w-full text-xs font-black uppercase tracking-widest text-slate-500 border-none shadow-none hover:bg-slate-50"
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