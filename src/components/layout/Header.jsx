"use client";

import { LogOut, Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export default function Header({ onMenuClick }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();

    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });

    router.push("auth/login");
  };

  return (
    <header className="header-main sticky top-2 z-[100] mx-4 md:mx-8 rounded-[28px] bg-white border border-[#e0f2f1] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
      <div className="flex h-16 items-center justify-between px-4 md:px-8">

        {/* Left side */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="btn-icon md:hidden"
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" />
          </button>

          <h1 className="text-lg font-semibold text-foreground">
            Nagpur Municipal Corporation
          </h1>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <div className="h-4 w-[1px] bg-[#e0f2f1] mx-1 hidden md:block" />

          <Link
            href="/dashboard/profile"
            className="flex items-center gap-3 group cursor-pointer hover:opacity-80 transition-all"
          >
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=TestIntern"
              alt="User Avatar"
              className="h-9 w-9 rounded-full border-2 border-[#e0f2f1] bg-card group-hover:ring-2 group-hover:ring-[#e0f2f1]/40 transition-all"
            />

            <p className="hidden text-sm font-bold text-foreground md:block group-hover:text-slate-700 transition-colors">
              Test Intern
            </p>
          </Link>

          <div className="h-4 w-[1px] bg-[#e0f2f1] mx-1 hidden md:block" />

          <button
            onClick={handleLogout}
            className="btn-icon rounded-full h-9 w-9 hover:bg-slate-100 hover:text-slate-700 active:scale-90 transition-all"
            aria-label="Logout"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
