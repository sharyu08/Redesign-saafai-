"use client";

import WashroomRow from "./WashroomRow";
import { Hash, List, MapPin, Star, User, Building2, Activity, Settings } from "lucide-react";

export default function WashroomTable({ items }) {
    const rows = items ?? [];

    return (
        <div className="table-container">
            {/* Scrollable Container with Custom Scrollbar Styling */}
            <div className="overflow-x-auto overflow-y-auto max-h-[600px]">
                <table className="table min-w-[1200px]">
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
                                <WashroomRow
                                    key={washroom.id}
                                    index={index}
                                    washroom={washroom}
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

            {/* Table Footer / Summary */}
            <div className="table-footer">
                <p className="text-xs-standard font-bold text-muted-foreground uppercase tracking-widest">
                    Showing {rows.length} Total Facilities
                </p>
                <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs-standard font-bold text-primary-dark uppercase tracking-widest">
                        System Active
                    </span>
                </div>
            </div>
        </div>
    );
}