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
    /* Standardized .card-global with hover shadow logic from global.css */
    <div className="card-global overflow-hidden text-left mx-auto transition-all hover:shadow-md border-slate-100 dark:border-slate-800 p-0">

      {/* 1. Slim Header - Using faint transparent Oceanic tokens */}
      <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-2.5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-indigo-600 dark:text-indigo-400" strokeWidth={2.5} />
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Node:</span>
            <span className="text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-tight">{washroomName}</span>
          </div>
        </div>
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest opacity-60">
          ID: #00{id}
        </span>
      </div>

      {/* 2. Compact Body with High-Weight Typography */}
      <div className="px-6 py-5">
        <div className="flex flex-col gap-4">

          <div className="flex gap-4">
            {/* Avatar using standardized .icon-container logic */}
            <div className="h-11 w-11 shrink-0 rounded-2xl bg-indigo-400/10 border border-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-black text-base shadow-sm">
              {userName?.charAt(0)}
            </div>

            <div className="space-y-1.5 flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <h4 className="text-lg font-black text-slate-800 dark:text-slate-100 uppercase tracking-tight truncate">
                  {userName}
                </h4>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < rating ? "text-blue-500 fill-blue-500" : "text-slate-100 dark:text-slate-800"}
                    />
                  ))}
                </div>
              </div>
              <p className="text-[14px] font-medium text-slate-600 dark:text-slate-400 leading-snug italic tracking-tight break-words">
                "{comment}"
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] opacity-70">
            <Calendar size={12} strokeWidth={2.5} />
            {new Date(createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </div>
        </div>

        {/* 3. Action Bar - Using .btn-primary and .btn-icon logic */}
        <div className="mt-5 pt-5 border-t border-slate-50 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => onToggleResolve?.(id)}
                className={isResolved
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2"
                  : "btn-primary flex items-center gap-2 px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest active:scale-95"
                }
              >
                {isResolved && <CheckCircle2 size={13} strokeWidth={3} />}
                {isResolved ? "Resolved" : "Mark Resolved"}
              </button>

              <button
                onClick={() => onMarkIssue?.(id)}
                className="btn-icon flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400"
              >
                <AlertCircle size={13} strokeWidth={2.5} className="text-rose-500" />
                Flag Issue
              </button>
            </div>

            <button className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 uppercase tracking-[0.15em] transition-all">
              <MessageSquare size={14} strokeWidth={2.5} /> Internal Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}