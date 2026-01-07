"use client";
import React from "react";

export default function AuthCard({ title, subtitle, customLogo, logoUrl = "/globe.svg", children, footer }) {
  return (
    <div className="w-full">
      <div className="w-full max-w-md mx-auto relative overflow-hidden bg-white rounded-2xl shadow-md border border-gray-200">

        <div className="flex flex-col items-center mb-6 pt-8 px-8">
          {/* Logo Container */}
          {customLogo ? (
            customLogo
          ) : (
            <div className="icon-container w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-sm transition-all hover:scale-105">
              <img
                src={logoUrl}
                alt="portal logo"
                className="w-9 h-9 opacity-80"
              />
            </div>
          )}

          <h1 className="text-2xl font-black text-foreground uppercase tracking-tight text-center">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm text-gray-600 mt-2 text-center">
              {subtitle}
            </p>
          )}
        </div>

        <div className="px-8 pb-8 space-y-6">
          {children}
        </div>

        {footer && (
          <div className="mt-6 pt-6 border-t border-gray-100 text-center px-8 pb-8">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}