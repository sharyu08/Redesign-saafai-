"use client";

import React, { useState } from 'react';
import { X, User, Mail, Phone, ShieldCheck, Lock, UserPlus } from 'lucide-react';

const AddUserForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: 'Cleaner',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';

    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';

    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        onSubmit(formData);
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    /* Using .form-overlay for backdrop blur and standard z-index */
    <div className="form-overlay" style={{ zIndex: "var(--z-modal)" }}>

      {/* Standard modal container from global.css */}
      <div className="form-container max-w-lg">

        {/* Header synced with .form-header tokens */}
        <div className="form-header">
          <div className="flex items-center gap-3">
            <div className="form-icon-button">
              <UserPlus size={18} className="text-cyan-600 dark:text-cyan-400" />
            </div>
            <div className="text-left">
              <h2 className="form-header-title">Add New User</h2>
              <p className="form-header-subtitle">Account Provisioning</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="form-header-close"
            aria-label="Close"
          >
            <X size={20} strokeWidth={3} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="form-body space-y-5">

          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              Full Name <span className="form-label-required">*</span>
            </label>
            <div className="form-input-wrapper">
              <User className="form-input-icon" size={16} />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`form-input ${errors.fullName ? 'form-input-error' : ''}`}
                placeholder="Enter full name"
              />
            </div>
            {errors.fullName && <p className="form-error">{errors.fullName}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address <span className="form-label-required">*</span>
              </label>
              <div className="form-input-wrapper">
                <Mail className="form-input-icon" size={16} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                  placeholder="Enter email"
                />
              </div>
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number <span className="form-label-required">*</span>
              </label>
              <div className="form-input-wrapper">
                <Phone className="form-input-icon" size={16} />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`form-input ${errors.phone ? 'form-input-error' : ''}`}
                  placeholder="10-digit number"
                />
              </div>
              {errors.phone && <p className="form-error">{errors.phone}</p>}
            </div>
          </div>

          {/* Role Selection */}
          <div className="form-group">
            <label htmlFor="role" className="form-label">
              Access Role <span className="form-label-required">*</span>
            </label>
            <div className="form-input-wrapper">
              <ShieldCheck className="form-input-icon" size={16} />
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Admin">Admin</option>
                <option value="Supervisor">Supervisor</option>
                <option value="Cleaner">Cleaner</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border-t border-slate-100 dark:border-slate-800 pt-5">
            {/* Password */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password <span className="form-label-required">*</span>
              </label>
              <div className="form-input-wrapper">
                <Lock className="form-input-icon" size={16} />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`form-input ${errors.password ? 'form-input-error' : ''}`}
                  placeholder="At least 6 chars"
                />
              </div>
              {errors.password && <p className="form-error">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">
                Verify Password <span className="form-label-required">*</span>
              </label>
              <div className="form-input-wrapper">
                <Lock className="form-input-icon" size={16} />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`form-input ${errors.confirmPassword ? 'form-input-error' : ''}`}
                  placeholder="Repeat password"
                />
              </div>
              {errors.confirmPassword && <p className="form-error">{errors.confirmPassword}</p>}
            </div>
          </div>

          {/* Footer Actions using recorded button classes */}
          <div className="form-actions pt-2">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-secondary px-6"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-gradient px-8 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest active:scale-95 transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Provisioning...' : 'Add User Account'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserForm;