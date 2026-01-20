"use client";

import React, { useState } from "react";
import { GitBranch, MapPin, Hash, Maximize2, X, Share2 } from "lucide-react";

export default function HierarchyTree() {
    const [isFullViewOpen, setIsFullViewOpen] = useState(false);

    const treeData = {
        root: { name: "Nagpur Urban", id: "114" },
        children: [
            { name: "Nagpur Rural", id: "134", active: false },
            { name: "Dharampeth", id: "115", active: true }
        ]
    };

    const TreeCanvas = ({ isModal = false }) => (
        <div className={`flex flex-col items-center min-w-max ${isModal ? 'p-12' : 'py-8 px-4'}`}>
            {/* ROOT NODE */}
            <div className="relative flex flex-col items-center">
                <div className="tree-node z-10 bg-white dark:bg-card border-2 border-indigo-100 dark:border-indigo-800 px-6 py-4 rounded-xl shadow-lg flex flex-col items-center min-w-[150px]">
                    <div className="flex items-center gap-2 mb-2">
                        <MapPin size={10} className="text-indigo-600" />
                        <span className="text-[10px] font-black text-slate-800 dark:text-white uppercase tracking-wider">
                            {treeData.root.name}
                        </span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 bg-indigo-50 dark:bg-indigo-900/40 rounded-full border border-indigo-100 dark:border-indigo-800">
                        <Hash size={8} className="text-indigo-500" />
                        <span className="text-[8px] font-black text-indigo-600 dark:text-indigo-400 uppercase">#{treeData.root.id}</span>
                    </div>
                </div>
                <div className="tree-trunk h-8 bg-indigo-200 dark:bg-indigo-900"></div>
            </div>

            {/* BRANCHING LAYER */}
            <div className="relative w-full max-w-3xl">
                <div className="relative w-full flex justify-center">
                    <div className="tree-branch-arm bg-indigo-200 dark:bg-indigo-900 w-[60%] top-0"></div>
                </div>

                <div className="flex w-full justify-center gap-6 md:gap-12">
                    {treeData.children.map((node) => (
                        <div key={node.id} className="relative flex flex-col items-center pt-8 min-w-[140px]">
                            <div className="tree-trunk absolute top-0 h-8 bg-indigo-200 dark:bg-indigo-900"></div>
                            <div className={`tree-node px-4 py-3 rounded-xl border-2 w-full text-center shadow-sm transition-all ${node.active
                                    ? "bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-900/20 dark:border-emerald-800"
                                    : "bg-slate-50 border-slate-200 text-slate-400 dark:bg-slate-800/40 dark:border-slate-800"
                                }`}>
                                <span className="text-[9px] font-black uppercase tracking-tight block mb-0.5">{node.name}</span>
                                <span className="text-[8px] font-bold opacity-60 uppercase">ID: {node.id}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className="card-global bg-white dark:bg-card border-slate-200 h-full flex flex-col overflow-hidden p-0 shadow-sm">
                <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 shrink-0">
                    <div className="flex items-center gap-2.5">
                        <div className="h-7 w-7 rounded-lg bg-indigo-600 flex items-center justify-center">
                            <GitBranch size={14} className="text-white" />
                        </div>
                        <h2 className="text-[10px] font-black text-slate-800 dark:text-white uppercase tracking-widest">Topology</h2>
                    </div>
                    <button
                        onClick={() => setIsFullViewOpen(true)}
                        className="btn-icon h-7 w-7 border-slate-200 hover:border-indigo-500"
                    >
                        <Maximize2 size={12} />
                    </button>
                </div>

                <div className="flex-1 overflow-auto bg-blueprint custom-scrollbar">
                    <TreeCanvas />
                </div>
            </div>

            {/* FULL TREE MODAL - REDESIGNED FOR BETTER FIT */}
            {isFullViewOpen && (
                <div className="form-overlay z-[1000] p-6 md:p-16 flex items-center justify-center">
                    {/* Max-width limited to 4xl and height to 80vh to prevent header overlap */}
                    <div className="bg-white dark:bg-slate-950 w-full max-w-4xl max-h-[80vh] rounded-[24px] shadow-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-slate-800 animate-fade-in relative">

                        {/* Compact Modal Header */}
                        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-card shrink-0">
                            <div className="flex items-center gap-3">
                                <Share2 className="text-indigo-500" size={18} />
                                <div>
                                    <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-widest leading-none">Hierarchy Map</h3>
                                    <p className="text-[9px] font-bold text-slate-400 uppercase mt-1">Full System Registry</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsFullViewOpen(false)}
                                className="h-8 w-8 rounded-lg bg-slate-50 hover:bg-rose-50 hover:text-rose-500 flex items-center justify-center transition-colors border border-slate-100"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {/* Modal Workspace */}
                        <div className="flex-1 overflow-auto bg-blueprint">
                            <div className="min-h-full flex items-center justify-center py-10">
                                <TreeCanvas isModal={true} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}