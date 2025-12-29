// src/app/auth/login/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import AuthCard from "@/components/auth/AuthCard";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ShieldCheck, Lock, Phone, AlertCircle, CheckCircle2 } from "lucide-react";
import { useTheme } from "next-themes";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [justSignedUp, setJustSignedUp] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if user just signed up successfully
    if (searchParams.get("signup") === "success") {
      setJustSignedUp(true);
    }
    
    // Check if already logged in
    const token = document.cookie.split('; ').find(row => row.startsWith('auth-token='));
    if (token) {
      router.push('/dashboard');
    }
  }, [searchParams, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // src/app/auth/login/page.jsx
async function handleSubmit(e) {
  e.preventDefault();
  setError(null);

  // Basic validation
  if (!formData.phone || !formData.password) {
    setError("Phone number and password are required");
    return;
  }

  setLoading(true);

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Set auth token in cookies
    document.cookie = 'auth-token=your-jwt-token; path=/; max-age=604800; SameSite=Lax';
    
    // Force full page reload to ensure all auth state is properly initialized
    window.location.href = '/dashboard';
    
  } catch (err) {
    setError("Authentication failed. Please check your credentials.");
    console.error('Login error:', err);
  } finally {
    setLoading(false);
  }
}

  const inputStyles = "w-full rounded-xl border border-slate-200 dark:border-slate-600 pl-11 pr-4 py-3.5 bg-[#F8FAFB] dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:bg-white dark:focus:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-cyan-50 dark:focus:ring-cyan-900/20 focus:border-[#58BECF] transition-all font-bold text-sm shadow-sm";
  const labelStyles = "text-[10px] font-black uppercase tracking-[0.2em] text-[#007C85] dark:text-[#58BECF] ml-1";
  const iconStyles = "absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-500 group-focus-within:text-[#58BECF] transition-colors";

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#F8FAFB] dark:bg-slate-900 overflow-hidden py-10">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E0F7FA]/50 dark:bg-cyan-900/30 blur-[120px] rounded-full -ml-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E6F7F9]/60 dark:bg-cyan-800/20 blur-[120px] rounded-full -mr-48 -mb-48 pointer-events-none" />

      <AuthCard
        title="SAFAI PORTAL"
        subtitle="Initialize an encrypted session to manage your workspace."

        customLogo={
          <div className="h-16 w-16 rounded-2xl bg-[#E6F7F9] dark:bg-cyan-900/30 border border-[#D1F0F2] dark:border-cyan-800 flex items-center justify-center shadow-sm mx-auto mb-4">
            <ShieldCheck className="h-9 w-9 text-[#58BECF]" strokeWidth={2} />
          </div>
        }
        footer={
          <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            New administrator?{" "}
            <Link href="/auth/sign-in" className="text-[#58BECF] font-black hover:text-[#007C85] dark:hover:text-[#58BECF] transition-colors ml-1 uppercase tracking-widest">
              Request Portal Access
            </Link>
          </p>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-6 text-left" noValidate>
          {/* Success Notification */}
          {justSignedUp && (
            <div className="animate-in fade-in slide-in-from-top-2 flex items-center gap-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 p-4 text-[10px] font-black uppercase tracking-wide text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800 mb-2">
              <CheckCircle2 size={16} />
              Account Created. Please sign in to verify.
            </div>
          )}

          {/* Identity/Phone Field */}
          <div className="space-y-1">
            <label htmlFor="phone" className={labelStyles}>
              Identification Number
            </label>
            <div className="relative group">
              <Phone className={`${iconStyles} w-4 h-4`} />
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter Mobile Number"
                className={inputStyles}
                value={formData.phone}
                onChange={handleChange}
                required
                autoComplete="username"
              />
            </div>
          </div>

          {/* Access Key/Password Field */}
          <div className="space-y-1">
            <label htmlFor="password" className="flex items-center justify-between">
              <span className={labelStyles}>Access Key</span>
              <Link
                href="/auth/forgot-password"
                className="text-[10px] font-black text-[#58BECF] hover:text-[#007C85] dark:hover:text-[#58BECF] transition-colors"
              >
                Forgot Key?
              </Link>
            </label>
            <div className="relative group">
              <Lock className={`${iconStyles} w-4 h-4`} />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter Access Key"
                className={inputStyles}
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete="current-password"
              />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="animate-in fade-in zoom-in-95 flex items-center gap-2 rounded-xl bg-rose-50 p-3 text-[10px] font-black uppercase tracking-wide text-rose-500 border border-rose-100">
              <AlertCircle size={14} strokeWidth={3} />
              {error}
            </div>
          )}

          {/* Submit Action */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 bg-gradient-to-r from-[#007C85] to-[#58BECF] text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:opacity-95 transition-all focus:outline-none focus:ring-4 focus:ring-cyan-100 dark:focus:ring-cyan-800/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Authenticating...
              </>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                Authenticate Session
              </>
            )}
          </button>
        </form>
      </AuthCard>
    </div>
  );
}