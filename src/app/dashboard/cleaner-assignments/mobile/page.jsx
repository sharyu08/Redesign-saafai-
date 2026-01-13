"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useResponsive } from "@/hooks/useResponsive";
import SummaryCards from "../../../../components/cleanerAssignments/SummaryCards";
import FilterBar from "../../../../components/cleanerAssignments/FilterBar";
import AssignmentCards from "../../../../components/cleanerAssignments/AssignmentCards";
import { INITIAL_ASSIGNMENTS } from "../../../../components/cleanerAssignments/data";
import {
  Search,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "./index.css";

const PAGE_SIZE = 5;

export default function CleanerAssignmentsMobilePage() {
  const router = useRouter();
  const pathname = usePathname();
  const { isMobile } = useResponsive();
  const [assignments, setAssignments] = useState(INITIAL_ASSIGNMENTS);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");
  const [page, setPage] = useState(1);

  // Redirect desktop users to desktop page
  useEffect(() => {
    if (!isMobile && pathname === "/dashboard/cleaner-assignments/mobile") {
      router.replace("/dashboard/cleaner-assignments");
    }
  }, [isMobile, pathname, router]);

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
    <div className="min-h-screen bg-white dark:bg-background py-4 px-4 text-left">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* 1. STANDARDIZED PAGE HEADER */}
        <div className="page-header">
          <div className="page-header-content">
            <div className="page-header-title-section">
              <div className="page-header-icon">
                <Search className="h-6 w-6 text-primary-light" strokeWidth={2.5} />
              </div>
              <div className="text-left">
                <h1 className="page-header-title">Cleaner Assignments</h1>
                <p className="page-header-subtitle">Manage cleaner-to-location mappings</p>
              </div>
            </div>
            <div className="page-header-actions">
              <Link href="/dashboard/cleaner-assignments/add" className="btn btn-primary flex items-center gap-2 px-4 py-2 text-xs-standard uppercase tracking-widest">
                <Plus size={16} strokeWidth={3} /> Add Assignment
              </Link>
            </div>
          </div>
        </div>

        {/* 2. Summary Cards */}
        <SummaryCards stats={stats} />

        {/* 3. Filter Bar */}
        <FilterBar
          search={search}
          onSearchChange={setSearch}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
          roleFilter={roleFilter}
          onRoleFilterChange={setRoleFilter}
        />

        {/* 4. Mobile Cards View */}
        <div className="table-container">
          <div className="p-4">
            <AssignmentCards items={pageItems} onDelete={handleDelete} />
          </div>

          {/* Mobile Pagination */}
          <div className="flex items-center justify-between p-4 border-t border-border">
            <p className="text-xs font-medium text-muted-foreground">
              Showing {startIndex + 1}-{Math.min(startIndex + PAGE_SIZE, filtered.length)} of {filtered.length}
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
