// src/app/auth/sign-in/page.jsx
"use client";
import React, { useState } from "react";
import AuthCard from "../../../components/auth/AuthCard";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserPlus, User, Mail, Phone, Lock, ShieldCheck } from "lucide-react";

export default function SignInPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Logic: Handle input changes centrally
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Logic: Form Submission
  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    // Logical Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      setError("All fields are required to create an account.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    try {
      // Simulate Backend API Call
      await new Promise((r) => setTimeout(r, 1500));

      // Success Logic: Redirect to login
      router.push("/auth/login?signup=success");
    } catch (err) {
      setError("System was unable to create your account. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputStyles = "w-full rounded-xl border border-border pl-11 pr-4 py-3 bg-muted text-foreground placeholder:text-muted-foreground focus:bg-card focus:outline-none focus:ring-4 focus:ring-primary-light/20 focus:border-primary-light transition-all font-bold text-sm shadow-sm";
  const labelStyles = "text-[10px] font-black uppercase tracking-[0.2em] text-primary-dark ml-1";
  const iconStyles = "absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary-light transition-colors";

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-muted overflow-hidden py-10">
      <AuthCard
        title="SAFAI PORTAL"
        subtitle="Create your administrator account to manage workspaces."
        customLogo={
          <div className="h-16 w-16 rounded-2xl bg-[hsl(var(--bg-very-light-cyan))] border border-border flex items-center justify-center shadow-sm mx-auto mb-4">
            <UserPlus className="h-9 w-9 text-primary-light" strokeWidth={2} />
          </div>
        }
        footer={
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            Existing user?{" "}
            <Link href="/auth/login" className="text-primary-light font-black hover:text-primary-dark transition-colors ml-1 uppercase">
              Sign In to Portal
            </Link>
          </p>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className={labelStyles}>Full Name</label>
            <div className="relative group">
              <div className={iconStyles}><User size={16} /></div>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className={inputStyles}
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label className={labelStyles}>Email Address</label>
            <div className="relative group">
              <div className={iconStyles}><Mail size={16} /></div>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="admin@safai.gov"
                className={inputStyles}
              />
            </div>
          </div>

          {/* Contact & Security Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className={labelStyles}>Phone Number</label>
              <div className="relative group">
                <div className={iconStyles}><Phone size={16} /></div>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="9876543210"
                  className={inputStyles}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className={labelStyles}>Access Password</label>
              <div className="relative group">
                <div className={iconStyles}><Lock size={16} /></div>
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={inputStyles}
                />
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="animate-in fade-in slide-in-from-top-1 flex items-center gap-2 rounded-xl bg-rose-50 p-3 text-[10px] font-black uppercase tracking-wide text-rose-500 border border-rose-100">
              <ShieldCheck size={14} strokeWidth={3} />
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full btn btn-cta mt-4 group relative overflow-hidden text-xs-standard uppercase tracking-widest active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <div className="relative flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  <span>Configuring Account...</span>
                </>
              ) : (
                <span>Request Portal Access</span>
              )}
            </div>
          </button>
        </form>
      </AuthCard>
    </div>
  );
}