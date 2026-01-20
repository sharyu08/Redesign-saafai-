"use client";

import React, { useState } from "react";
import {
    Network, Building2, Map, ChevronRight,
    Activity, CheckCircle, X, Maximize2, Share2
} from "lucide-react";

export default function HierarchyTreePreview() {
    const [isFullViewOpen, setIsFullViewOpen] = useState(false);

    // Dynamic data for the tree
    const rootNode = { name: "Nagpur Urban", nodes: 114 };
    const childNodes = [
        { name: "Nagpur Rural", id: "#134", color: "slate" },
        { name: "Dharampeth", id: "#115", color: "emerald" },
        { name: "Nagpur East", id: "#116", color: "orange" },
        { name: "Nagpur West", id: "#117", color: "emerald" },
        { name: "Nagpur South", id: "#118", color: "rose" }
    ];

    const TreeContent = ({ isModal = false }) => (
        <div className={`flex flex-col items-center ${isModal ? 'p-12' : 'p-6'} min-w-max`}>
            {/* ROOT LEVEL */}
            <div className="relative flex flex-col items-center">
                <div className="relative z-10 bg-white dark:bg-slate-900 border-2 border-indigo-100 dark:border-indigo-900 px-8 py-4 rounded-2xl shadow-xl flex flex-col items-center transition-transform hover:scale-105">
                    <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center mb-2 shadow-lg">
                        <Building2 size={20} className="text-white" />
                    </div>
                    <span className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">
                        {rootNode.name}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 mt-1">{rootNode.nodes} NODES</span>
                </div>

                {/* Vertical Stem below Root */}
                <div className="h-10 w-0.5 bg-indigo-200 dark:bg-indigo-900"></div>
            </div>

            {/* BRANCHING LEVEL */}
            <div className="relative flex flex-col items-center w-full">
                {/* The Horizontal Connector Bar */}
                {/* This line spans from the center of the first child to the center of the last child */}
                <div className="absolute top-0 h-0.5 bg-indigo-200 dark:bg-indigo-900"
                    style={{
                        width: `calc(100% - ${100 / childNodes.length}%)`,
                        left: `${50 / childNodes.length}%`
                    }}>
                </div>

                <div className="flex w-full justify-between gap-8 md:gap-12">
                    {childNodes.map((child, i) => (
                        <div key={i} className="relative flex flex-col items-center pt-10 flex-1">
                            {/* Vertical line connecting horizontal branch to individual child */}
                            <div className="absolute top-0 h-10 w-0.5 bg-indigo-200 dark:bg-indigo-900"></div>

                            <div className={`relative z-10 px-4 py-4 rounded-2xl border-2 transition-all hover:shadow-lg w-full max-w-[160px] ${child.color === 'emerald'
                                ? 'bg-emerald-50 border-emerald-100 text-emerald-700 dark:bg-emerald-900/20 dark:border-emerald-800'
                                : child.color === 'orange'
                                    ? 'bg-orange-50 border-orange-100 text-orange-700 dark:bg-orange-900/20 dark:border-orange-800'
                                    : child.color === 'rose'
                                        ? 'bg-rose-50 border-rose-100 text-rose-700 dark:bg-rose-900/20 dark:border-rose-800'
                                        : 'bg-slate-50 border-slate-100 text-slate-700 dark:bg-slate-800/40 dark:border-slate-700'
                                }`}>
                                <div className="flex flex-col items-center text-center">
                                    <div className={`h-8 w-8 rounded-lg flex items-center justify-center mb-2 ${child.color === 'emerald' ? 'bg-emerald-100' :
                                        child.color === 'orange' ? 'bg-orange-100' :
                                            child.color === 'rose' ? 'bg-rose-100' : 'bg-slate-200'
                                        }`}>
                                        <Map size={16} />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-tight leading-tight mb-1">{child.name}</span>
                                    <span className="text-[9px] font-bold opacity-60">{child.id}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className="card-global bg-white dark:bg-card border-slate-200 h-full flex flex-col overflow-hidden">
                {/* Header */}
                <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-md">
                            <Network size={18} className="text-white" />
                        </div>
                        <div>
                            <h2 className="text-[11px] font-black text-slate-800 dark:text-white uppercase tracking-widest">Architecture</h2>
                            <p className="text-[9px] font-bold text-slate-400 uppercase">Hierarchical Map</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsFullViewOpen(true)}
                        className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 transition-all text-slate-400 hover:text-indigo-600"
                    >
                        <Maximize2 size={16} />
                    </button>
                </div>

                {/* Normal View Scrollable Area */}
                <div className="flex-1 overflow-auto custom-scrollbar bg-white dark:bg-slate-900">
                    <TreeContent />
                </div>
            </div>

            {/* FULL VIEW MODAL */}
            {isFullViewOpen && (
                <div className="fixed inset-0 z-[999] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4">
                    <div className="bg-white dark:bg-slate-950 w-full max-w-[95vw] h-[90vh] rounded-[32px] shadow-2xl overflow-hidden flex flex-col border border-white/20">
                        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-4">
                                <Share2 className="text-indigo-500" />
                                <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-widest">Full Architecture Map</h3>
                            </div>
                            <button
                                onClick={() => setIsFullViewOpen(false)}
                                className="h-10 w-10 rounded-full bg-slate-100 hover:bg-rose-50 hover:text-rose-500 flex items-center justify-center transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="flex-1 overflow-auto bg-white dark:bg-slate-900">
                            <div className="min-h-full flex items-center justify-center">
                                <TreeContent isModal={true} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}