"use client";

import React from 'react';
import {
  MapPin,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Star,
  MessageSquare
} from 'lucide-react';

export default function ReviewCard({ review, onToggleResolve, onMarkIssue }) {
  const { id, userName, rating, comment, createdAt, status, washroomName } = review;
  const isResolved = status === "resolved";

  return (
    /* Reduced vertical footprint with tighter rounded corners and padding */
    <div className="bg-white rounded-[24px] border-2 border-[#D1F0F2] shadow-sm hover:shadow-md transition-all overflow-hidden text-left mx-auto">

      {/* 1. Slim Header */}
      <div className="bg-[#F8FAFB] px-6 py-2.5 border-b-2 border-[#D1F0F2] flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-[#58BECF]" strokeWidth={2.5} />
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black text-[#007C85] uppercase tracking-widest">Node:</span>
            <span className="text-sm font-bold text-slate-800">{washroomName}</span>
          </div>
        </div>
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
          #00{id}
        </span>
      </div>

      {/* 2. Compact Body with Large Font */}
      <div className="px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">

          <div className="flex gap-4">
            {/* Avatar size slightly reduced to save vertical space */}
            <div className="h-10 w-10 shrink-0 rounded-full bg-[#E6F7F9] border-2 border-[#D1F0F2] flex items-center justify-center text-[#007C85] font-black text-sm shadow-sm">
              {userName?.charAt(0)}
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-3">
                {/* Kept the larger font size as requested */}
                <h4 className="text-lg font-black text-slate-800 uppercase tracking-tight">
                  {userName}
                </h4>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < rating ? "text-[#F4B740] fill-[#F4B740]" : "text-slate-100"}
                    />
                  ))}
                </div>
              </div>
              <p className="text-[15px] font-medium text-slate-600 leading-snug italic">
                "{comment}"
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest shrink-0 md:pt-1">
            <Calendar size={12} />
            {new Date(createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </div>
        </div>

        {/* 3. Streamlined Action Bar */}
        <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleResolve?.(id)}
              style={!isResolved ? { background: 'linear-gradient(to right, #58BECF, #6D9CDC)' } : {}}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${isResolved
                  ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                  : "text-white hover:brightness-105 active:scale-95 shadow-sm"
                }`}
            >
              {isResolved && <CheckCircle2 size={12} strokeWidth={3} />}
              {isResolved ? "Resolved" : "Mark Resolved"}
            </button>

            <button
              onClick={() => onMarkIssue?.(id)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:border-amber-200 hover:text-amber-600 transition-all"
            >
              <AlertCircle size={12} />
              Issue
            </button>
          </div>

          <button className="flex items-center gap-1.5 text-[10px] font-black text-slate-300 hover:text-[#58BECF] uppercase tracking-widest transition-colors">
            <MessageSquare size={14} /> Reply
          </button>
        </div>
      </div>
    </div>
  );
}