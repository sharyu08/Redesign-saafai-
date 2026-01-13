"use client";

import { useState } from "react";
import WashroomRowWithModal, { WashroomRowModal } from "./WashroomRowWithModal";
import { Hash, List, MapPin, Star, User, Building2, Activity, Settings } from "lucide-react";

export default function WashroomTable({ items }) {
    const rows = items ?? [];
    const [modalStates, setModalStates] = useState({});

    const handleModalOpen = (washroomId) => {
        setModalStates(prev => ({ ...prev, [washroomId]: true }));
    };

    const handleModalClose = (washroomId) => {
        setModalStates(prev => ({ ...prev, [washroomId]: false }));
    };

    return (
        <div className="table-container">
            {/* Scrollable Container with Custom Scrollbar Styling */}
            <div className="table-wrapper-responsive overflow-y-auto max-h-[600px]">
                <table className="table w-full">
                    <thead className="table-header">
                        <tr>
                            <th>
                                <div className="flex items-center gap-2">
                                    <Hash className="w-4 h-4" />
                                    <span>SR NO</span>
                                </div>
                            </th>
                            <th>
                                <div className="flex items-center gap-2">
                                    <List className="w-4 h-4" />
                                    <span>WASHROOM NAME</span>
                                </div>
                            </th>
                            <th>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>ZONE</span>
                                </div>
                            </th>
                            <th>
                                <div className="flex items-center gap-2">
                                    <Star className="w-4 h-4" />
                                    <span>CURRENT SCORE</span>
                                </div>
                            </th>
                            <th>
                                <div className="flex items-center gap-2">
                                    <Star className="w-4 h-4 star-rating" />
                                    <span>AVG RATING</span>
                                </div>
                            </th>
                            <th>
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    <span>CLEANER</span>
                                </div>
                            </th>
                            <th>
                                <div className="flex items-center gap-2">
                                    <Building2 className="w-4 h-4" />
                                    <span>FACILITY</span>
                                </div>
                            </th>
                            <th>
                                <div className="flex items-center gap-2">
                                    <Activity className="w-4 h-4" />
                                    <span>STATUS</span>
                                </div>
                            </th>
                            <th className="table-cell-right">
                                <div className="flex items-center justify-end gap-2">
                                    <Settings className="w-4 h-4" />
                                    <span>ACTION</span>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody className="table-body">
                        {rows.length > 0 ? (
                            rows.map((washroom, index) => (
                                <WashroomRowWithModal
                                    key={washroom.id}
                                    index={index}
                                    washroom={washroom}
                                    onModalOpen={() => handleModalOpen(washroom.id)}
                                />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9" className="table-cell py-20 text-center bg-light-gray">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="p-3 bg-card rounded-full shadow-sm">
                                            <Activity className="w-8 h-8 text-muted-foreground opacity-20" />
                                        </div>
                                        <p className="text-sm-standard font-medium text-muted-foreground">No washroom records found.</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>

            {/* Mobile Card View */ }
    <div className="lg:hidden space-y-4 p-4">
        {rows.length > 0 ? (
            rows.map((washroom, index) => (
                <div key={washroom.id} className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 space-y-4 hover:bg-slate-50 transition-colors">
                    {/* Header Section */}
                    <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                        <div className="flex-1">
                            <h3 className="text-base font-bold text-slate-800">{washroom.name}</h3>
                            <p className="text-sm text-slate-500">SR NO: {washroom.srNo}</p>
                        </div>
                        <div className="text-right">
                            <span className={`px-2 py-1 rounded-lg text-xs font-bold uppercase tracking-widest ${washroom.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-600'
                                }`}>
                                {washroom.status}
                            </span>
                        </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 gap-3">
                        {/* Zone */}
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-slate-400" />
                            <div>
                                <p className="text-sm font-medium text-slate-700">{washroom.zone}</p>
                            </div>
                        </div>

                        {/* Current Score */}
                        <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-slate-400" />
                            <div>
                                <p className="text-sm font-medium text-slate-700">{washroom.currentScore}</p>
                                <p className="text-xs text-slate-400">Current Score</p>
                            </div>
                        </div>

                        {/* Average Rating */}
                        <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-slate-400" />
                            <div>
                                <p className="text-sm font-medium text-slate-700">{washroom.avgRating}</p>
                                <p className="text-xs text-slate-400">Average Rating</p>
                            </div>
                        </div>

                        {/* Cleaner */}
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-slate-400" />
                            <div>
                                <p className="text-sm font-medium text-slate-700">{washroom.cleaner}</p>
                                <p className="text-xs text-slate-400">Assigned Cleaner</p>
                            </div>
                        </div>

                        {/* Facility */}
                        <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-slate-400" />
                            <div>
                                <p className="text-sm font-medium text-slate-700">{washroom.facility}</p>
                                <p className="text-xs text-slate-400">Facility Type</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-3 border-t border-slate-100">
                        <button
                            onClick={() => handleModalOpen(washroom.id)}
                            className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 py-3 rounded-xl font-medium text-sm transition-colors flex items-center justify-center gap-2"
                        >
                            <Settings className="w-4 h-4" />
                            View Details
                        </button>
                    </div>
                </div>
            ))
        ) : (
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-8 text-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="p-3 bg-slate-50 rounded-full">
                        <Activity className="w-8 h-8 text-slate-400" />
                    </div>
                    <p className="text-sm font-medium text-slate-600">No washroom records found.</p>
                </div>
            </div>
        )}
    </div>

    {/* Render all modals outside table structure */ }
    {
        rows.map((washroom) => (
            <WashroomRowModal
                key={`modal-${washroom.id}`}
                washroom={washroom}
                isModalOpen={modalStates[washroom.id] || false}
                setIsModalOpen={(isOpen) => isOpen ? handleModalOpen(washroom.id) : handleModalClose(washroom.id)}
            />
        ))
    }

    {/* Table Footer / Summary - Desktop Only */ }
    <div className="hidden lg:block">
        <div className="table-footer">
            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
                <div className="text-sm text-slate-600 dark:text-slate-400">
                    Showing {rows.length} of {rows.length} washrooms
                </div>
            </div>
        </div>
    </div>
        </div >
    );
}