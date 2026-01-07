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
        <div className="form-overlay" style={{ zIndex: 70 }}>
            <div className="form-container">
                {/* Header */}
                <div className="form-header">
                    <div className="flex items-center gap-3">
                        <div className="form-icon-button">
                            <Fingerprint className="h-6 w-6" strokeWidth={2} />
                        </div>
                        <div className="text-left">
                            <h2 className="form-header-title">
                                Edit Profile
                            </h2>
                            <p className="form-header-subtitle">
                                ID: #{initialUser?.userId || '182'}
                            </p>
                        </div>
                    </div>
                    <button onClick={onClose} className="form-header-close">
                        <X size={18} strokeWidth={2.5} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="form-body">
                    <div className="space-y-4">
                        {/* Name Field */}
                        <div className="form-group">
                            <label className="form-label">Full Name <span className="form-label-required">*</span></label>
                            <div className="form-input-wrapper">
                                <User className="form-input-icon" size={16} />
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="Rajesh Sahani"
                                    required
                                />
                            </div>
                        </div>

                        {/* Contact Fields */}
                        <div className="grid grid-cols-1 gap-4">
                            <div className="form-group">
                                <label className="form-label">Email</label>
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
                                <label className="form-label">Phone <span className="form-label-required">*</span></label>
                                <div className="form-input-wrapper">
                                    <Phone className="form-input-icon" size={16} />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="+91"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Role Selector */}
                        <div className="form-group">
                            <label className="form-label">Permission Level</label>
                            <div className="grid grid-cols-3 gap-2">
                                {roleOptions.map((role) => (
                                    <button
                                        key={role}
                                        type="button"
                                        onClick={() => setFormData(p => ({ ...p, role }))}
                                        className={`btn ${formData.role === role ? 'btn-primary' : 'btn-secondary'}`}
                                    >
                                        {role}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Action Footer */}
                    <div className="form-actions form-actions-column">
                        <button
                            type="submit"
                            className="btn btn-gradient w-full flex items-center justify-center gap-2"
                        >
                            <Check size={16} strokeWidth={3} /> Save Updates
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="btn btn-secondary w-full"
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