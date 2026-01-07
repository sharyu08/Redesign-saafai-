"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import SummaryCards from "../../../components/cleanerAssignments/SummaryCards";
import FilterBar from "../../../components/cleanerAssignments/FilterBar";
import {
  Search,
  Plus,
  MapPin,
  Trash2,
  Users,
  UserCheck,
  UserMinus,
  Shield,
  ChevronLeft,
  ChevronRight,
  Activity,
  Settings,
  LayoutList
} from "lucide-react";

// Mock data
const initialAssignments = [
  { id: 1, cleanerName: "Omkar saaf cleaner", cleanerEmail: "omkar.cleaner@example.com", locationName: "New Manish Nagar Chowk", role: "Cleaner", status: "Assigned", assignedOn: "2025-12-08" },
  { id: 2, cleanerName: "Rajesh sahani - Narendra square", cleanerEmail: "rajesh.sahani@example.com", locationName: "New Manish Nagar Chowk", role: "Cleaner", status: "Assigned", assignedOn: "2025-12-08" },
  { id: 3, cleanerName: "Omkar Supervisor", cleanerEmail: "richom056@gmail.com", locationName: "Narendra nagar square", role: "Supervisor", status: "Assigned", assignedOn: "2025-12-08" },
  { id: 4, cleanerName: "Test Supervisor", cleanerEmail: "test.supervisor@example.com", locationName: "Budhwar Bazaar", role: "Supervisor", status: "Assigned", assignedOn: "2025-12-03" },
  { id: 5, cleanerName: "New Cleaner", cleanerEmail: "new.cleaner@example.com", locationName: "Untitled Location", role: "Cleaner", status: "Unassigned", assignedOn: "-" },
];

const PAGE_SIZE = 5;

export default function CleanerAssignmentsPage() {
  const [assignments, setAssignments] = useState(initialAssignments);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");
  const [page, setPage] = useState(1);

  // Deletion logic
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to remove this assignment?")) {
      setAssignments(prev => prev.filter(item => item.id !== id));
    }
  };

  const filtered = useMemo(() => {
    let data = [...assignments];
    if (search.trim()) {
      const term = search.toLowerCase();
      data = data.filter((item) =>
        item.cleanerName.toLowerCase().includes(term) ||
        item.locationName.toLowerCase().includes(term)
      );
    }
    return data;
  }, [assignments, search]);

  const startIndex = (page - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <div className="min-h-screen bg-white dark:bg-background py-8 px-8 text-left">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* 1. STANDARDIZED PAGE HEADER - Using same class as all other headers */}
        <div className="page-header">
          <div className="page-header-content">
            {/* Title Section */}
            <div className="page-header-title-section">
              <div className="page-header-icon">
                <Users className="h-6 w-6 text-primary-light" strokeWidth={2.5} />
              </div>
              <div className="text-left">
                <h1 className="page-header-title">
                  Cleaner Assignments
                </h1>
                <p className="page-header-subtitle">
                  <Activity size={12} />
                  System Personnel Mapping Registry
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="page-header-actions">
              <button 
                type="button"
                className="btn btn-secondary flex items-center gap-2 px-5 py-2.5 text-xs-standard uppercase tracking-widest active:scale-95"
              >
                <LayoutList size={14} /> Show Assignments
              </button>
              
              <Link
                href="/dashboard/cleaner-assignments/add"
                className="btn btn-primary flex items-center gap-2 px-6 py-2.5 text-xs-standard uppercase tracking-widest active:scale-95"
              >
                <Plus size={16} strokeWidth={3} /> Add Cleaner
              </Link>
            </div>
          </div>
        </div>

        {/* 2. Summary Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* Unassigned Card */}
  <div className="bg-white p-5 rounded-xl border border-[#CBF3F0] hover:shadow-md transition-all duration-300">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 mb-1">Unassigned</p>
        <p className="text-2xl font-bold text-gray-800">
          {assignments.filter(a => a.status === "Unassigned").length}
        </p>
      </div>
      <div className="p-3 rounded-lg bg-[#FDF9F2]">
        <UserMinus className="h-5 w-5 text-[#FF9F1C]" />
      </div>
    </div>
    <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
      <div 
        className="h-full bg-[#FF9F1C] rounded-full" 
        style={{ 
          width: `${(assignments.filter(a => a.status === "Unassigned").length / assignments.length) * 100}%` 
        }}
      ></div>
    </div>
  </div>

  {/* Assigned Card */}
  <div className="bg-white p-5 rounded-xl border border-[#CBF3F0] hover:shadow-md transition-all duration-300">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 mb-1">Assigned</p>
        <p className="text-2xl font-bold text-gray-800">
          {assignments.filter(a => a.status === "Assigned").length}
        </p>
      </div>
      <div className="p-3 rounded-lg bg-[#E9F8F0]">
        <UserCheck className="h-5 w-5 text-[#22C55E]" />
      </div>
    </div>
    <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
      <div 
        className="h-full bg-[#22C55E] rounded-full"
        style={{ 
          width: `${(assignments.filter(a => a.status === "Assigned").length / assignments.length) * 100}%` 
        }}
      ></div>
    </div>
  </div>

  {/* Total Card */}
  <div className="bg-white p-5 rounded-xl border border-[#CBF3F0] hover:shadow-md transition-all duration-300">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 mb-1">Total Staff</p>
        <p className="text-2xl font-bold text-gray-800">
          {assignments.length}
        </p>
      </div>
      <div className="p-3 rounded-lg bg-[#E6F0FF]">
        <Users className="h-5 w-5 text-[#3B82F6]" />
      </div>
    </div>
    <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
      <div className="h-full bg-[#3B82F6] rounded-full" style={{ width: '100%' }}></div>
    </div>
  </div>
</div>

        {/* 4. Main Data Table - Using standardized table classes */}
        <div className="table-container">
          <div className="overflow-x-auto">
            <table className="table min-w-full">
              <thead className="table-header">
                <tr>
                  <th>
                    <div className="flex items-center gap-2"><Users size={14} strokeWidth={2.5} /> Cleaner</div>
                  </th>
                  <th>
                    <div className="flex items-center gap-2"><MapPin size={14} strokeWidth={2.5} /> Location</div>
                  </th>
                  <th>
                    <div className="flex items-center gap-2"><Shield size={14} strokeWidth={2.5} /> Role</div>
                  </th>
                  <th>
                    <div className="flex items-center gap-2"><Activity size={14} strokeWidth={2.5} /> Status</div>
                  </th>
                  <th>
                    <div className="flex items-center gap-2"><LayoutList size={14} strokeWidth={2.5} /> Assigned On</div>
                  </th>
                  <th className="table-cell-right">
                    <div className="flex items-center justify-end gap-2"><Settings size={14} strokeWidth={2.5} /> Action</div>
                  </th>
                </tr>
              </thead>
              <tbody className="table-body">
                {pageItems.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="table-cell py-10 text-center">
                      <p className="text-sm font-medium">No assignments found for current filters.</p>
                    </td>
                  </tr>
                ) : (
                  pageItems.map((item) => (
                    <tr key={item.id} className="table-row">
                      <td className="table-cell">
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-full bg-white dark:bg-card border border-cyan-100 dark:border-border text-[#00838F] dark:text-primary-light flex items-center justify-center font-bold text-[11px] shadow-sm">
                            {item.cleanerName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                          </div>
                          <div className="text-left">
                            <p className="leading-none mb-1">{item.cleanerName}</p>
                            <p className="text-[10px] text-muted-foreground">{item.cleanerEmail}</p>
                          </div>
                        </div>
                      </td>
                      <td className="table-cell">
                        <p className="text-primary-dark dark:text-primary-light hover:text-primary-medium dark:hover:text-primary transition-colors cursor-pointer">
                          {item.locationName}
                        </p>
                      </td>
                      <td className="table-cell">
                        <span className={`badge-role ${item.role.toLowerCase()}`}>
                          {item.role}
                        </span>
                      </td>
                      <td className="table-cell">
                        <span className={`badge-status ${item.status === 'Assigned' ? 'assigned' : 'unassigned'}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="table-cell text-muted">
                        {item.assignedOn}
                      </td>
                      <td className="table-cell table-cell-right">
                        <div className="flex justify-end">
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="btn-icon text-accent-red hover:bg-accent-red hover:text-white"
                            title="Delete Assignment"
                          >
                            <Trash2 size={18} strokeWidth={2} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Footer Navigation */}
          <div className="table-footer">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted">
              Showing <span className="text-foreground">{startIndex + 1}-{Math.min(startIndex + PAGE_SIZE, filtered.length)}</span> of {filtered.length} entries
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="btn-icon disabled:opacity-30"
              >
                <ChevronLeft size={16} strokeWidth={3} />
              </button>
              <button
                onClick={() => setPage(p => p + 1)}
                disabled={startIndex + PAGE_SIZE >= filtered.length}
                className="btn-icon disabled:opacity-30"
              >
                <ChevronRight size={16} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}