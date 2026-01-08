"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Hash,
    Navigation2,
    Activity,
    Edit3,
    Trash2,
    MapPin,
    Map
} from "lucide-react";

export default function LocationTable() {
    const router = useRouter();

    const [locationData, setLocationData] = useState([
        { id: "114", name: "Nagpur Urban", parent_id: null },
        { id: "115", name: "Dharampeth Zone", parent_id: "114" },
        { id: "118", name: "Nehru Nagar Zone", parent_id: "114" },
        { id: "126", name: "Dhantoli", parent_id: "114" },
        { id: "127", name: "Sadar Zone", parent_id: "114" },
        { id: "131", name: "Nagpur East", parent_id: "114" },
        { id: "132", name: "Manish Nagar Zone", parent_id: "114" },
        { id: "133", name: "Shanti Nagar", parent_id: "114" },
        { id: "134", name: "Nagpur Ruaral", parent_id: null },
        { id: "135", name: "Butobori", parent_id: "114" }
    ]);

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this zone?")) {
            const updatedData = locationData.filter((item) => item.id !== id);
            setLocationData(updatedData);
        }
    };

    const getParentName = (parentId) => {
        if (!parentId) return "—";
        const parent = locationData.find(loc => loc.id === parentId);
        return parent ? parent.name : "Unknown";
    };

    return (
        <div className="table-container">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="table-header">
                        <tr>
                            <th>
                                <div className="flex items-center gap-2">
                                    <Hash size={14} strokeWidth={3} /> SR NO
                                </div>
                            </th>
                            <th>
                                <div className="flex items-center gap-2">
                                    <Navigation2 size={14} strokeWidth={3} /> Zone Name
                                </div>
                            </th>
                            <th>
                                <div className="flex items-center gap-2">
                                    <Activity size={14} strokeWidth={3} /> Parent Hierarchy
                                </div>
                            </th>
                            {/* NEW COLUMN: Locate on Map */}
                            <th className="table-cell-center">
                                <div className="flex items-center justify-center gap-2">
                                    <Map size={14} strokeWidth={3} /> Map view
                                </div>
                            </th>
                            <th className="table-cell-center">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody className="table-body">
                        {locationData.map((loc, index) => (
                            <tr key={loc.id} className="table-row group">
                                <td className="table-cell">
                                    {(index + 1).toString().padStart(2, '0')}
                                </td>

                                <td className="table-cell">
                                    <span className="group-hover:text-primary-dark dark:group-hover:text-primary-light transition-colors">
                                        {loc.name}
                                    </span>
                                </td>

                                <td className="table-cell">
                                    <div className="chip">
                                        {getParentName(loc.parent_id)}
                                    </div>
                                </td>

                                {/* LOCATE ON MAP BUTTON */}
                                <td className="table-cell table-cell-center">
                                    <button
                                        onClick={() => router.push(`/dashboard/locate?zoneId=${loc.id}`)}
                                        title={`Show all locations in ${loc.name}`}
                                        className="btn-icon"
                                    >
                                        <MapPin size={16} strokeWidth={2.5} />
                                    </button>
                                </td>

                                <td className="table-cell">
                                    <div className="flex items-center justify-center gap-3">
                                        <button
                                            onClick={() => router.push(`/dashboard/locationHierarchy/edit/${loc.id}`)}
                                            title="Edit Zone Information"
                                            className="btn-icon btn-icon-edit"
                                        >
                                            <Edit3 size={16} strokeWidth={2.5} />
                                        </button>

                                        <button
                                            onClick={() => handleDelete(loc.id)}
                                            title="Permanently Delete Zone"
                                            className="btn-icon btn-icon-delete"
                                        >
                                            <Trash2 size={16} strokeWidth={2.5} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="table-footer">
                <p className="text-xs-standard font-black text-muted-foreground uppercase tracking-widest">
                    Safai Portal Architecture Overview
                </p>
                <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary-light animate-pulse" />
                    <span className="text-xs-standard font-black text-primary-dark uppercase tracking-widest">
                        {locationData.length} Total Zones Registered
                    </span>
                </div>
            </div>
        </div>
    );
}