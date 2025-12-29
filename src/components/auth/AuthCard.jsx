"use client";
import React from "react";

export default function AuthCard({ title, subtitle, customLogo, logoUrl = "/globe.svg", children, footer }) {
  return (
    <div className="w-full">
      <div className="w-full max-w-md mx-auto bg-white dark:bg-slate-800 rounded-[32px] shadow-sm py-10 px-8 border border-slate-100 dark:border-slate-700 relative overflow-hidden transition-colors duration-200">

        {/* Decorative Header Detail */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-right from-[#58BECF] to-[#6D9CDC]"
          style={{ background: 'linear-gradient(to right, #58BECF, #6D9CDC)' }} />

        <div className="flex flex-col items-center mb-6">
          {/* Logo Container */}
          {customLogo ? (
            customLogo
          ) : (
            <div className="w-16 h-16 rounded-2xl bg-[#E6F7F9] dark:bg-cyan-900/30 border border-[#D1F0F2] dark:border-cyan-800 flex items-center justify-center mb-4 shadow-sm transition-all hover:scale-105">
              <img
                src={logoUrl}
                alt="portal logo"
                className="w-9 h-9 opacity-80"
                style={{ filter: 'invert(72%) sepia(54%) saturate(452%) hue-rotate(143deg) brightness(92%) contrast(88%)' }}
              />
            </div>
          )}

          <h1 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight text-center">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[11px] font-bold text-[#2D8E97] dark:text-cyan-400 uppercase tracking-widest opacity-70 mt-2 text-center">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-4">
          {children}
        </div>

        {footer && (
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 text-center">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}