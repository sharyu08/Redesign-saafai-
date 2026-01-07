"use client";

import React, { useState, useEffect } from "react";
import AuthCard from "@/components/auth/AuthCard";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, Phone, AlertCircle, CheckCircle2, ArrowLeft } from "lucide-react";
import { useTheme } from "next-themes";

export default function SignupPage() {
  const router = useRouter();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if already logged in
    const token = document.cookie.split('; ').find(row => row.startsWith('auth-token='));
    if (token) {
      router.push('/dashboard');
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      await new Promise((r) => setTimeout(r, 1500));
      
      // In a real app, you would make an API call here
      // const response = await fetch('/api/auth/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     name: formData.name,
      //     email: formData.email,
      //     phone: formData.phone,
      //     password: formData.password
      //   })
      // });
      
      // if (!response.ok) {
      //   const error = await response.json();
      //   throw new Error(error.message || 'Signup failed');
      // }
      
      // On success
      setSuccess(true);
      
      // Redirect to login after a short delay
      setTimeout(() => {
        router.push('/auth/login?signup=success');
      }, 2000);
      
    } catch (err) {
      setError(err.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputStyles = "w-full rounded-xl border border-slate-200 dark:border-slate-600 pl-11 pr-4 py-3.5 bg-[#F8FAFB] dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:bg-white dark:focus:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-cyan-50 dark:focus:ring-cyan-900/20 focus:border-[#58BECF] transition-all font-medium text-sm shadow-sm";
  const labelStyles = "text-[10px] font-black uppercase tracking-[0.2em] text-[#007C85] dark:text-[#58BECF] ml-1";
  const iconStyles = "absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-500 group-focus-within:text-[#58BECF] transition-colors";

  if (!mounted) return null;

  if (success) {
    return (
      <div className="relative min-h-screen flex items-center justify-center bg-[#F8FAFB] dark:bg-slate-900 overflow-hidden py-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E0F7FA]/50 dark:bg-cyan-900/30 blur-[120px] rounded-full -ml-48 -mt-48 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E6F7F9]/60 dark:bg-cyan-800/20 blur-[120px] rounded-full -mr-48 -mb-48 pointer-events-none" />
        
        <AuthCard
          title="SIGNUP SUCCESSFUL!"
          subtitle="Redirecting to login page..."
          customLogo={
            <div className="h-16 w-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center shadow-sm mx-auto mb-4">
              <CheckCircle2 className="h-9 w-9 text-emerald-500 dark:text-emerald-400" strokeWidth={2} />
            </div>
          }
        >
          <div className="text-center py-8">
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Your account has been created successfully. You'll be redirected to the login page shortly.
            </p>
            <Link 
              href="/auth/login" 
              className="inline-flex items-center text-sm font-medium text-[#58BECF] hover:text-[#007C85] dark:hover:text-[#58BECF] transition-colors"
            >
              <ArrowLeft size={14} className="mr-1" /> Go to Login
            </Link>
          </div>
        </AuthCard>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#F8FAFB] dark:bg-slate-900 overflow-hidden py-10">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E0F7FA]/50 dark:bg-cyan-900/30 blur-[120px] rounded-full -ml-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E6F7F9]/60 dark:bg-cyan-800/20 blur-[120px] rounded-full -mr-48 -mb-48 pointer-events-none" />

      <AuthCard
        title="Create Account"
        subtitle="Join our platform to get started"
        customLogo={
          <div className="h-16 w-16 rounded-2xl bg-[#E6F7F9] dark:bg-cyan-900/30 border border-[#D1F0F2] dark:border-cyan-800 flex items-center justify-center shadow-sm mx-auto mb-4">
            <User className="h-9 w-9 text-[#58BECF]" strokeWidth={2} />
          </div>
        }
        footer={
          <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-[#58BECF] font-black hover:text-[#007C85] dark:hover:text-[#58BECF] transition-colors ml-1">
              Sign In
            </Link>
          </p>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
          {/* Error Message */}
          {error && (
            <div className="animate-in fade-in zoom-in-95 flex items-center gap-2 rounded-xl bg-rose-50 dark:bg-rose-900/30 p-3 text-[10px] font-black uppercase tracking-wide text-rose-500 dark:text-rose-400 border border-rose-100 dark:border-rose-800">
              <AlertCircle size={14} strokeWidth={2.5} />
              {error}
            </div>
          )}

          {/* Name Field */}
          <div className="space-y-1">
            <label htmlFor="name" className={labelStyles}>
              Full Name
            </label>
            <div className="relative group">
              <User className={`${iconStyles} w-4 h-4`} />
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                className={inputStyles}
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <label htmlFor="email" className={labelStyles}>
              Email Address
            </label>
            <div className="relative group">
              <Mail className={`${iconStyles} w-4 h-4`} />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                className={inputStyles}
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className="space-y-1">
            <label htmlFor="phone" className={labelStyles}>
              Phone Number
            </label>
            <div className="relative group">
              <Phone className={`${iconStyles} w-4 h-4`} />
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                className={inputStyles}
                value={formData.phone}
                onChange={handleChange}
                required
                autoComplete="tel"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <label htmlFor="password" className={labelStyles}>
              Password
            </label>
            <div className="relative group">
              <Lock className={`${iconStyles} w-4 h-4`} />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Create a strong password"
                className={inputStyles}
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete="new-password"
              />
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-1">
            <label htmlFor="confirmPassword" className={labelStyles}>
              Confirm Password
            </label>
            <div className="relative group">
              <Lock className={`${iconStyles} w-4 h-4`} />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className={inputStyles}
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                autoComplete="new-password"
              />
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start mt-2">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-[#58BECF] focus:ring-[#58BECF]"
                required
              />
            </div>
            <div className="ml-3 text-xs">
              <label htmlFor="terms" className="text-slate-600 dark:text-slate-300">
                I agree to the{" "}
                <a href="#" className="text-[#58BECF] hover:underline font-medium">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#58BECF] hover:underline font-medium">
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full btn btn-cta flex items-center justify-center gap-2 mt-4"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Account...
              </>
            ) : (
              <>
                <User className="w-4 h-4" />
                Create Account
              </>
            )}
          </button>
        </form>
      </AuthCard>
    </div>
  );
}
