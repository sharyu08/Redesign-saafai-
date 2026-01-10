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
  
  // Calculate stats
  const stats = useMemo(() => ({
    total: assignments.length,
    assigned: assignments.filter(a => a.status === "Assigned").length,
    unassigned: assignments.filter(a => a.status === "Unassigned").length,
    cleaner: assignments.filter(a => a.role === "Cleaner").length,
    supervisor: assignments.filter(a => a.role === "Supervisor").length,
  }), [assignments]);

  // Deletion logic
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to remove this assignment?")) {
      setAssignments(prev => prev.filter(item => item.id !== id));
    }
  };

  const filtered = useMemo(() => {
    let data = [...assignments];
    
    // Apply search filter
    if (search.trim()) {
      const term = search.toLowerCase();
      data = data.filter((item) =>
        item.cleanerName.toLowerCase().includes(term) ||
        item.locationName.toLowerCase().includes(term)
      );
    }
    
    // Apply status filter
    if (statusFilter !== "all") {
      data = data.filter(item => item.status === statusFilter);
    }
    
    // Apply role filter
    if (roleFilter !== "all") {
      data = data.filter(item => item.role === roleFilter);
    }
    
    return data;
  }, [assignments, search, statusFilter, roleFilter]);

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
<div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
  {/* Total Staff Card */}
  <button
    onClick={() => { setRoleFilter("all"); setStatusFilter("all"); }}
    className={`group relative overflow-hidden rounded-xl p-3 transition-all duration-200 ease-out cursor-pointer text-left border ${
      roleFilter === "all" && statusFilter === "all"
        ? "bg-[#F8FAFF] border-[#93C5FD] text-foreground shadow-sm"
        : "bg-white dark:bg-card border-[#E0F2FE] text-foreground hover:border-[#93C5FD] hover:bg-[#F8FAFF] hover:shadow-sm"
    }`}
  >
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-1">
        <p className={`text-[10px] font-bold uppercase tracking-wider ${roleFilter === "all" && statusFilter === "all" ? "text-primary font-black" : "text-muted-foreground"}`}>
          Total Staff
        </p>
        <div className={`p-1 rounded ${roleFilter === "all" && statusFilter === "all" ? "bg-primary/10" : "bg-muted/50"}`}>
          <Users className={`h-3.5 w-3.5 ${roleFilter === "all" && statusFilter === "all" ? "text-primary" : "text-muted-foreground"}`} />
        </div>
      </div>
      <p className={`text-xl font-black ${roleFilter === "all" && statusFilter === "all" ? "text-primary" : "text-foreground"}`}>
        {stats.total}
      </p>
    </div>
    <div className="mt-2 h-1.5 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
      <div 
        className="h-full bg-[hsl(var(--primary))] rounded-full"
        style={{ width: '100%' }}
      ></div>
    </div>
  </button>

  {/* Assigned Card */}
  <button
    onClick={() => { setStatusFilter("Assigned"); }}
    className={`group relative overflow-hidden rounded-xl p-3 transition-all duration-200 ease-out cursor-pointer text-left border ${
      statusFilter === "Assigned"
        ? "bg-[#F0FDF4] border-[#86EFAC] text-foreground shadow-sm"
        : "bg-white dark:bg-card border-[#DCFCE7] text-foreground hover:border-[#86EFAC] hover:bg-[#F0FDF4] hover:shadow-sm"
    }`}
  >
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-1">
        <p className={`text-[10px] font-bold uppercase tracking-wider ${statusFilter === "Assigned" ? "text-[#22C55E] font-black" : "text-muted-foreground"}`}>
          Assigned
        </p>
        <div className={`p-1 rounded ${statusFilter === "Assigned" ? "bg-[#22C55E]/10" : "bg-muted/50"}`}>
          <UserCheck className={`h-3.5 w-3.5 ${statusFilter === "Assigned" ? "text-[#22C55E]" : "text-muted-foreground"}`} />
        </div>
      </div>
      <p className={`text-xl font-black ${statusFilter === "Assigned" ? "text-[#22C55E]" : "text-foreground"}`}>
        {stats.assigned}
      </p>
    </div>
    <div className="mt-2 h-1.5 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
      <div 
        className="h-full bg-[#22C55E] rounded-full"
        style={{ width: `${(stats.assigned / stats.total) * 100}%` }}
      ></div>
    </div>
  </button>

  {/* Unassigned Card */}
  <button
    onClick={() => { setStatusFilter("Unassigned"); }}
    className={`group relative overflow-hidden rounded-xl p-3 transition-all duration-200 ease-out cursor-pointer text-left border ${
      statusFilter === "Unassigned"
        ? "bg-[#F0F9FF] border-[#93C5FD] text-foreground shadow-sm"
        : "bg-white dark:bg-card border-[#E0F2FE] text-foreground hover:border-[#93C5FD] hover:bg-[#F0F9FF] hover:shadow-sm"
    }`}
  >
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-1">
        <p className={`text-[10px] font-bold uppercase tracking-wider ${statusFilter === "Unassigned" ? "text-[#3B82F6] font-black" : "text-muted-foreground"}`}>
          Unassigned
        </p>
        <div className={`p-1 rounded ${statusFilter === "Unassigned" ? "bg-[#3B82F6]/10" : "bg-muted/50"}`}>
          <UserMinus className={`h-3.5 w-3.5 ${statusFilter === "Unassigned" ? "text-[#3B82F6]" : "text-muted-foreground"}`} />
        </div>
      </div>
      <p className={`text-xl font-black ${statusFilter === "Unassigned" ? "text-[#3B82F6]" : "text-foreground"}`}>
        {stats.unassigned}
      </p>
    </div>
    <div className="mt-2 h-1.5 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
      <div 
        className="h-full bg-[#3B82F6] rounded-full"
        style={{ width: `${(stats.unassigned / stats.total) * 100}%` }}
      ></div>
    </div>
  </button>
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
                <div className="flex items-center gap-2">
                  <Shield size={14} strokeWidth={2.5} /> 
                  <select 
                    className="bg-transparent border-none text-sm font-medium focus:ring-0 focus:outline-none cursor-pointer"
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <option value="all">All Roles</option>
                    <option value="Cleaner">Cleaner</option>
                    <option value="Supervisor">Supervisor</option>
                  </select>
                </div>
              </th>
                  <th>
                <div className="flex items-center gap-2">
                  <Activity size={14} strokeWidth={2.5} /> 
                  <select 
                    className="bg-transparent border-none text-sm font-medium focus:ring-0 focus:outline-none cursor-pointer"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <option value="all">All Status</option>
                    <option value="Assigned">Assigned</option>
                    <option value="Unassigned">Unassigned</option>
                  </select>
                </div>
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
                            className="btn-icon btn-icon-delete"
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