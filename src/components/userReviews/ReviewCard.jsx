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
    <div className="bg-white rounded-[24px] border-2 border-[hsl(var(--lavender-200))] shadow-sm hover:shadow-md transition-all overflow-hidden text-left mx-auto">

      {/* 1. Slim Header */}
      <div className="bg-[hsl(var(--lavender-100))] px-6 py-2.5 border-b-2 border-[hsl(var(--lavender-200))] flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-[hsl(var(--primary))]" strokeWidth={2.5} />
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black text-[hsl(var(--primary))] uppercase tracking-widest">Node:</span>
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
            <div className="h-10 w-10 shrink-0 rounded-full bg-[hsl(var(--lavender-200))] border-2 border-[hsl(var(--lavender-200))] flex items-center justify-center text-[hsl(var(--primary))] font-black text-sm shadow-sm">
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
              className={`${isResolved ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "btn btn-primary"} flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-widest`}
            >
              {isResolved && <CheckCircle2 size={12} strokeWidth={3} />}
              {isResolved ? "Resolved" : "Mark Resolved"}
            </button>

            <button
              onClick={() => onMarkIssue?.(id)}
              className="btn btn-secondary flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-widest"
            >
              <AlertCircle size={12} />
              Issue
            </button>
          </div>

          <button className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 hover:text-primary-dark uppercase tracking-widest transition-colors">
            <MessageSquare size={14} /> Reply
          </button>
        </div>
      </div>
    </div>
  );
}