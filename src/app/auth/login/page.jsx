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

  const inputStyles = "w-full rounded-lg border border-gray-300 pl-11 pr-4 py-2.5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm shadow-sm";
  const labelStyles = "block text-sm font-medium text-gray-700 mb-1.5";
  const iconStyles = "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400";

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-muted overflow-hidden py-10">
      <AuthCard
        title="SAFAI PORTAL"
        subtitle="Initialize an encrypted session to manage your workspace."

        customLogo={
          <div className="h-16 w-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-sm mx-auto mb-4">
            <ShieldCheck className="h-9 w-9 text-blue-600" strokeWidth={2} />
          </div>
        }
        footer={
          <p className="text-sm text-gray-600">
            New administrator?{" "}
            <Link href="/auth/sign-in" className="font-medium text-blue-600 hover:text-blue-800 transition-colors">
              Request Portal Access
            </Link>
          </p>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-6 text-left" noValidate>
          {/* Success Notification */}
          {justSignedUp && (
            <div className="animate-in fade-in slide-in-from-top-2 flex items-center gap-3 rounded-lg bg-green-50 p-4 text-sm text-green-700 border border-green-100">
              <CheckCircle2 size={18} className="flex-shrink-0 text-green-500" />
              <span>Account created. Please sign in to verify.</span>
            </div>
          )}

          {/* Identity/Phone Field */}
          <div className="space-y-1.5">
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
          <div className="space-y-1.5">
            <label htmlFor="password" className="flex items-center justify-between">
              <span className={labelStyles}>Access Key</span>
              <Link
                href="/auth/forgot-password"
                className="text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
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
            <div className="animate-in fade-in zoom-in-95 flex items-start gap-3 rounded-lg bg-red-50 p-4 text-sm text-red-700 border border-red-100">
              <AlertCircle size={18} className="flex-shrink-0 text-red-500 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Submit Action */}
          <div className="pt-1">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
          </div>
        </form>
      </AuthCard>
    </div>
  );
}