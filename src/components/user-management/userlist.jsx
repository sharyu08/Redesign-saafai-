"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
// Added Search to imports
import {
    Activity,
    AlertTriangle,
    BarChart3,
    ChevronDown,
    Filter,
    Eye,
    Edit3,
    Layers3,
    ListChecks,
    LogOut,
    Mail,
    Map,
    MapPin,
    MenuSquare,
    MessageSquare,
    Phone,
    Plus,
    Search,    // ✅ Added
    Shield,
    Users,
    Wrench,
    Trash2,
} from "lucide-react";

// --- MOCK DATA ---
const initialUserRows = [
    {
        id: 103,
        name: 'Rajesh Sahani',
        phone: '8955596876',
        email: 'rajesh@saaf.ai',
        role: 'Cleaner',
        userId: 182,
        locations: [
            { name: 'Narendra nagar square', assignedDate: '20 Nov 2025', active: true, coordinates: '21.107, 79.079' },
            { name: 'New Manish Nagar Chowk', assignedDate: '8 Dec 2025', active: true, coordinates: '21.085, 79.087' }
        ]
    },
    { id: 101, name: 'Test Intern', phone: '9356150564', email: 'test1@gmail.com', role: 'Admin', userId: 180, locations: [] },
    { id: 102, name: 'Omkar Supervisor', phone: '3333333333', email: 'richom056@gmail.com', role: 'Supervisor', userId: 181, locations: [{ name: 'Narendra nagar square', assignedDate: '20 Nov 2025', active: true, coordinates: '21.107, 79.079' }] },
];

const getRoleStyle = (role) => {
    switch (role) {
        case 'Admin': return 'role-badge admin';
        case 'Supervisor': return 'role-badge supervisor';
        case 'Cleaner': return 'role-badge cleaner';
        default: return 'role-badge';
    }
};

// --- DELETE CONFIRMATION MODAL ---
const DeleteConfirmModal = ({ user, onClose, onConfirm }) => (
    <div className="form-overlay z-index-100">
        <div className="form-container">
            <div className="bg-rose-50 dark:bg-rose-950/20 p-8 flex flex-col items-center text-center border-b border-border">
                <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/50 rounded-2xl flex items-center justify-center mb-4">
                    <AlertTriangle className="h-8 w-8 text-rose-600 dark:text-rose-400" />
                </div>
                <h2 className="form-header-title text-rose-950 dark:text-rose-200">Confirm Deletion</h2>
                <p className="text-sm font-bold text-rose-800/60 dark:text-rose-300/60 mt-2 leading-relaxed">
                    Are you sure you want to remove <span className="text-rose-600 dark:text-rose-400 font-black">{user.name}</span>? This action is permanent.
                </p>
            </div>
            <div className="form-actions">
                <button onClick={onClose} className="btn btn-secondary flex-1">
                    Cancel
                </button>
                <button onClick={() => onConfirm(user.id)} className="btn btn-danger flex-1">
                    Delete User
                </button>
            </div>
        </div>
    </div>
);

// --- USER DETAIL CARD ---
const UserDetailCard = ({ user, onClose }) => {
    const activeLocations = user.locations.filter(l => l.active).length;
    return (
        <div className="form-overlay z-index-60">
            <div className="form-container form-container-xl">
                <div className="form-header flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-5">
                        <div className="w-16 h-16 bg-primary-dark text-white flex items-center justify-center rounded-2xl text-2xl font-black shadow-lg">
                            {user.name.charAt(0)}
                        </div>
                        <div>
                            <h1 className="form-header-title text-2xl">{user.name}</h1>
                            <div className={`badge badge-role ${user.role.toLowerCase()} mt-2`}>
                                <Shield className="w-3 h-3 mr-1.5" /> {user.role}
                            </div>
                        </div>
                    </div>
                    <button onClick={onClose} className="btn btn-secondary">
                        Close Profile
                    </button>
                </div>
                <div className="form-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-1">
                        <p className="form-label">Email Address</p>
                        <p className="font-bold text-foreground flex items-center gap-2 lowercase">
                            <Mail size={14} /> {user.email}
                        </p>
                    </div>
                    <div className="space-y-1">
                        <p className="form-label">Phone Number</p>
                        <p className="font-bold text-foreground flex items-center gap-2">
                            <Phone size={14} /> {user.phone}
                        </p>
                    </div>
                    <div className="space-y-1">
                        <p className="form-label">Organization</p>
                        <p className="font-bold text-foreground uppercase tracking-tight text-xs">Nagpur Municipal Corp</p>
                    </div>
                    <div className="space-y-1 text-right">
                        <p className="form-label">Staff ID</p>
                        <p className="font-mono font-bold text-primary-dark dark:text-primary-light">#{user.userId}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- MAIN COMPONENT ---
const UserList = () => {
    const router = useRouter();
    const [userRows, setUserRows] = useState(initialUserRows);
    const [searchTerm, setSearchTerm] = useState("");
    const [roleFilter, setRoleFilter] = useState("all");
    const [viewingUser, setViewingUser] = useState(null);
    const [deletingUser, setDeletingUser] = useState(null);

    // Calculate stats
    const stats = {
        total: userRows.length,
        admin: userRows.filter(u => u.role === 'Admin').length,
        supervisor: userRows.filter(u => u.role === 'Supervisor').length,
        cleaner: userRows.filter(u => u.role === 'Cleaner').length,
        zonalAdmin: userRows.filter(u => u.role === 'Zonal Admin').length,
        facilitySupervisor: userRows.filter(u => u.role === 'Facility Supervisor').length,
        facilityAdmin: userRows.filter(u => u.role === 'Facility Admin').length,
    };

    const filteredUsers = userRows.filter(user => {
        const term = searchTerm.toLowerCase();
        const matchesSearch = (
            user.name.toLowerCase().includes(term) ||
            user.email.toLowerCase().includes(term) ||
            user.phone.toLowerCase().includes(term)
        );
        const matchesRole = roleFilter === "all" || user.role === roleFilter;
        return matchesSearch && matchesRole;
    });

    const handleDeleteUser = (id) => {
        setUserRows(prev => prev.filter(u => u.id !== id));
        setDeletingUser(null);
    };

    const isModalOpen = viewingUser || deletingUser;

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">
            <div className={`space-y-8 transition-all duration-300 ${isModalOpen ? 'blur-md scale-[0.98] pointer-events-none' : 'scale-100'}`}>

                {/* Header Section - Using standardized page-header class */}
                <div className="page-header">
                    <div className="page-header-content">
                        {/* Title Section */}
                        <div className="page-header-title-section">
                            <div className="page-header-icon">
                                <Shield className="h-6 w-6 text-primary-light" strokeWidth={2.5} />
                            </div>
                            <div className="text-left">
                                <h1 className="page-header-title">
                                    User Management
                                </h1>
                                <p className="page-header-subtitle">
                                    Manage all user roles and permissions
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="page-header-actions">
                            <button
                                onClick={() => router.push('/dashboard/user-management/add-user')}
                                className="btn btn-primary flex items-center gap-2 px-6 py-2.5 text-xs-standard uppercase tracking-widest active:scale-95"
                            >
                                <Plus size={16} strokeWidth={3} /> Add User
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                    {/* Total Users Card - Highlighted */}
                    <button
                        onClick={() => setRoleFilter("all")}
                        className={`rounded-2xl p-5 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl cursor-pointer text-left ${roleFilter === "all"
                            ? "bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary-dark))] text-white"
                            : "bg-white dark:bg-card border border-border text-foreground hover:border-[hsl(var(--primary))]/50"
                            }`}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <p className={`text-xs font-bold uppercase tracking-wider ${roleFilter === "all" ? "opacity-90" : "text-muted-foreground"
                                }`}>Total Users</p>
                            <Users className={`h-5 w-5 ${roleFilter === "all" ? "opacity-80" : "text-muted-foreground"
                                }`} />
                        </div>
                        <p className={`text-3xl font-black ${roleFilter === "all" ? "text-white" : "text-foreground"
                            }`}>{stats.total}</p>
                    </button>

                    {/* Admin Card */}
                    <button
                        onClick={() => setRoleFilter("Admin")}
                        className={`rounded-2xl p-5 border shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md cursor-pointer text-left ${roleFilter === "Admin"
                            ? "bg-[hsl(var(--primary))] border-[hsl(var(--primary-dark))] text-white"
                            : "bg-white dark:bg-card border-border text-foreground hover:border-[hsl(var(--primary))]/50"
                            }`}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <p className={`text-xs font-bold uppercase tracking-wider ${roleFilter === "Admin" ? "opacity-90" : "text-muted-foreground"
                                }`}>Admin</p>
                            <Shield className={`h-5 w-5 ${roleFilter === "Admin" ? "opacity-80" : "text-muted-foreground"
                                }`} />
                        </div>
                        <p className={`text-2xl font-black ${roleFilter === "Admin" ? "text-white" : "text-foreground"
                            }`}>{stats.admin}</p>
                    </button>

                    {/* Supervisor Card */}
                    <button
                        onClick={() => setRoleFilter("Supervisor")}
                        className={`rounded-2xl p-5 border shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md cursor-pointer text-left ${roleFilter === "Supervisor"
                            ? "bg-[hsl(var(--lavender-300))] border-[hsl(var(--lavender-300))] text-white"
                            : "bg-white dark:bg-card border-border text-foreground hover:border-[hsl(var(--lavender-300))]/50"
                            }`}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <p className={`text-xs font-bold uppercase tracking-wider ${roleFilter === "Supervisor" ? "opacity-90" : "text-muted-foreground"
                                }`}>Supervisor</p>
                            <Shield className={`h-5 w-5 ${roleFilter === "Supervisor" ? "opacity-80" : "text-muted-foreground"
                                }`} />
                        </div>
                        <p className={`text-2xl font-black ${roleFilter === "Supervisor" ? "text-white" : "text-foreground"
                            }`}>{stats.supervisor}</p>
                    </button>

                    {/* Cleaner Card */}
                    <button
                        onClick={() => setRoleFilter("Cleaner")}
                        className={`rounded-2xl p-5 border shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md cursor-pointer text-left ${roleFilter === "Cleaner"
                            ? "bg-[hsl(var(--primary-accent))] border-[hsl(var(--primary-medium))] text-white"
                            : "bg-white dark:bg-card border-border text-foreground hover:border-[hsl(var(--primary-accent))]/50"
                            }`}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <p className={`text-xs font-bold uppercase tracking-wider ${roleFilter === "Cleaner" ? "opacity-90" : "text-muted-foreground"
                                }`}>Cleaner</p>
                            <Users className={`h-5 w-5 ${roleFilter === "Cleaner" ? "opacity-80" : "text-muted-foreground"
                                }`} />
                        </div>
                        <p className={`text-2xl font-black ${roleFilter === "Cleaner" ? "text-white" : "text-foreground"
                            }`}>{stats.cleaner}</p>
                    </button>

                    {/* Zonal Admin Card */}
                    <button
                        onClick={() => setRoleFilter("Zonal Admin")}
                        className={`rounded-2xl p-5 border shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md cursor-pointer text-left ${roleFilter === "Zonal Admin"
                            ? "bg-[hsl(var(--lavender-300))] border-[hsl(var(--lavender-300))] text-white"
                            : "bg-white dark:bg-card border-border text-foreground hover:border-[hsl(var(--lavender-300))]/50"
                            }`}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <p className={`text-xs font-bold uppercase tracking-wider ${roleFilter === "Zonal Admin" ? "opacity-90" : "text-muted-foreground"
                                }`}>Zonal Admin</p>
                            <MapPin className={`h-5 w-5 ${roleFilter === "Zonal Admin" ? "opacity-80" : "text-muted-foreground"
                                }`} />
                        </div>
                        <p className={`text-2xl font-black ${roleFilter === "Zonal Admin" ? "text-white" : "text-foreground"
                            }`}>{stats.zonalAdmin}</p>
                    </button>

                    {/* Facility Supervisor Card */}
                    <button
                        onClick={() => setRoleFilter("Facility Supervisor")}
                        className={`rounded-2xl p-5 border shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md cursor-pointer text-left ${roleFilter === "Facility Supervisor"
                            ? "bg-[hsl(var(--lavender-200))] border-[hsl(var(--lavender-300))] text-[hsl(var(--primary-dark))]"
                            : "bg-white dark:bg-card border-border text-foreground hover:border-[hsl(var(--lavender-300))]/50"
                            }`}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <p className={`text-xs font-bold uppercase tracking-wider ${roleFilter === "Facility Supervisor" ? "text-[hsl(var(--primary-dark))]" : "text-muted-foreground"
                                }`}>Facility Supervisor</p>
                            <Users className={`h-5 w-5 ${roleFilter === "Facility Supervisor" ? "text-[hsl(var(--primary-dark))]" : "text-muted-foreground"
                                }`} />
                        </div>
                        <p className={`text-2xl font-black ${roleFilter === "Facility Supervisor" ? "text-[hsl(var(--primary-dark))]" : "text-foreground"
                            }`}>{stats.facilitySupervisor}</p>
                    </button>

                    {/* Facility Admin Card */}
                    <button
                        onClick={() => setRoleFilter("Facility Admin")}
                        className={`rounded-2xl p-5 border shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md cursor-pointer text-left ${roleFilter === "Facility Admin"
                            ? "bg-[hsl(var(--lavender-200))] border-[hsl(var(--lavender-300))] text-[hsl(var(--primary-dark))]"
                            : "bg-white dark:bg-card border-border text-foreground hover:border-[hsl(var(--lavender-300))]/50"
                            }`}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <p className={`text-xs font-bold uppercase tracking-wider ${roleFilter === "Facility Admin" ? "text-[hsl(var(--primary-dark))]" : "text-muted-foreground"
                                }`}>Facility Admin</p>
                            <Shield className={`h-5 w-5 ${roleFilter === "Facility Admin" ? "text-[hsl(var(--primary-dark))]" : "text-muted-foreground"
                                }`} />
                        </div>
                        <p className={`text-2xl font-black ${roleFilter === "Facility Admin" ? "text-[hsl(var(--primary-dark))]" : "text-foreground"
                            }`}>{stats.facilityAdmin}</p>
                    </button>
                </div>

                {/* Search Bar */}
                <div className="relative group max-w-2xl text-left">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary-dark transition-colors" size={20} />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search t"
                        className="w-full pl-12 pr-6 py-4 rounded-2xl border border-border bg-card text-xs font-bold uppercase tracking-widest outline-none focus:ring-4 focus:ring-primary-light/20 focus:border-primary-medium transition-all shadow-sm"
                    />
                </div>

                {/* Filter Chips */}
                <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                        <Filter className="h-4 w-4" />
                        Filter:
                    </span>
                    <button
                        onClick={() => setRoleFilter("all")}
                        className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${roleFilter === "all"
                            ? "bg-[hsl(var(--primary))] text-white shadow-md"
                            : "bg-white dark:bg-card border border-border text-muted-foreground hover:bg-[hsl(var(--bg-very-light-cyan))] dark:hover:bg-slate-800 hover:border-[hsl(var(--primary))]/50"
                            }`}
                    >
                        All Users
                    </button>
                    {stats.admin > 0 && (
                        <button
                            onClick={() => setRoleFilter("Admin")}
                            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${roleFilter === "Admin"
                                ? "bg-[hsl(var(--primary))] text-white shadow-md"
                                : "bg-white dark:bg-card border border-border text-muted-foreground hover:bg-[hsl(var(--bg-very-light-cyan))] dark:hover:bg-slate-800 hover:border-[hsl(var(--primary))]/50"
                                }`}
                        >
                            Admins {stats.admin}
                        </button>
                    )}
                    {stats.supervisor > 0 && (
                        <button
                            onClick={() => setRoleFilter("Supervisor")}
                            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${roleFilter === "Supervisor"
                                ? "bg-[hsl(var(--lavender-300))] text-white shadow-md"
                                : "bg-white dark:bg-card border border-border text-muted-foreground hover:bg-[hsl(var(--bg-very-light-cyan))] dark:hover:bg-slate-800 hover:border-[hsl(var(--lavender-300))]/50"
                                }`}
                        >
                            Supervisors {stats.supervisor}
                        </button>
                    )}
                    {stats.cleaner > 0 && (
                        <button
                            onClick={() => setRoleFilter("Cleaner")}
                            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${roleFilter === "Cleaner"
                                ? "bg-[hsl(var(--primary-accent))] text-white shadow-md"
                                : "bg-white dark:bg-card border border-border text-muted-foreground hover:bg-[hsl(var(--bg-very-light-cyan))] dark:hover:bg-slate-800 hover:border-[hsl(var(--primary-accent))]/50"
                                }`}
                        >
                            Cleaners {stats.cleaner}
                        </button>
                    )}
                    {stats.zonalAdmin > 0 && (
                        <button
                            onClick={() => setRoleFilter("Zonal Admin")}
                            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${roleFilter === "Zonal Admin"
                                ? "bg-[hsl(var(--lavender-300))] text-white shadow-md"
                                : "bg-white dark:bg-card border border-border text-muted-foreground hover:bg-[hsl(var(--bg-very-light-cyan))] dark:hover:bg-slate-800 hover:border-[hsl(var(--lavender-300))]/50"
                                }`}
                        >
                            Zonal Admins {stats.zonalAdmin}
                        </button>
                    )}
                    {stats.facilitySupervisor > 0 && (
                        <button
                            onClick={() => setRoleFilter("Facility Supervisor")}
                            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${roleFilter === "Facility Supervisor"
                                ? "bg-[hsl(var(--lavender-200))] text-[hsl(var(--primary-dark))] border border-[hsl(var(--lavender-300))] shadow-md"
                                : "bg-white dark:bg-card border border-border text-muted-foreground hover:bg-[hsl(var(--bg-very-light-cyan))] dark:hover:bg-slate-800 hover:border-[hsl(var(--lavender-300))]/50"
                                }`}
                        >
                            Facility Supervisors {stats.facilitySupervisor}
                        </button>
                    )}
                    {stats.facilityAdmin > 0 && (
                        <button
                            onClick={() => setRoleFilter("Facility Admin")}
                            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${roleFilter === "Facility Admin"
                                ? "bg-[hsl(var(--lavender-200))] text-[hsl(var(--primary-dark))] border border-[hsl(var(--lavender-300))] shadow-md"
                                : "bg-white dark:bg-card border border-border text-muted-foreground hover:bg-[hsl(var(--bg-very-light-cyan))] dark:hover:bg-slate-800 hover:border-[hsl(var(--lavender-300))]/50"
                                }`}
                        >
                            Facility Admins {stats.facilityAdmin}
                        </button>
                    )}
                </div>

                {/* Table View - Using standardized table classes */}
                <div className="table-container">
                    <div className="overflow-x-auto">
                        <table className="table min-w-full">
                            <thead className="table-header">
                                <tr>
                                    <th>Staff Member</th>
                                    <th>Contact Info</th>
                                    <th>Permission Level</th>
                                    <th className="table-cell-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {filteredUsers.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="table-cell py-10 text-center">
                                            <p className="text-sm font-medium">No users found.</p>
                                        </td>
                                    </tr>
                                ) : (
                                    filteredUsers.map((user) => (
                                        <tr key={user.id} className="table-row">
                                            <td className="table-cell">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-card border border-border text-primary-dark dark:text-primary-light flex items-center justify-center font-black text-sm shadow-sm">
                                                        {user.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div>{user.name}</div>
                                                        <div className="text-[10px] text-muted-foreground">ID: #{user.userId}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="table-cell">
                                                <div className="text-xs">{user.email}</div>
                                                <div className="text-[10px] text-muted-foreground mt-1">{user.phone}</div>
                                            </td>
                                            <td className="table-cell">
                                                <span className={`badge-role ${user.role.toLowerCase()}`}>
                                                    {user.role}
                                                </span>
                                            </td>
                                            <td className="table-cell table-cell-right">
                                                <div className="flex justify-end gap-2">
                                                    <button
                                                        onClick={() => setViewingUser(user)}
                                                        className="btn-icon btn-icon-view"
                                                        title="View Profile"
                                                    >
                                                        <Eye size={16} />
                                                    </button>
                                                    <button
                                                        onClick={() => router.push(`/dashboard/user-management/edit/${user.id}`)}
                                                        className="btn-icon btn-icon-edit"
                                                        title="Edit Account"
                                                    >
                                                        <Edit3 size={16} />
                                                    </button>
                                                    <button
                                                        onClick={() => setDeletingUser(user)}
                                                        className="btn-icon btn-icon-delete"
                                                        title="Delete User"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Table Footer */}
                    <div className="table-footer">
                        <p className="text-xs font-medium text-muted-foreground">
                            Showing <span className="font-bold text-foreground">{filteredUsers.length}</span> of <span className="font-bold text-foreground">{userRows.length}</span> users
                        </p>
                    </div>
                </div>
            </div>

            {/* MODALS */}
            {viewingUser && <UserDetailCard user={viewingUser} onClose={() => setViewingUser(null)} />}
            {deletingUser && <DeleteConfirmModal user={deletingUser} onClose={() => setDeletingUser(null)} onConfirm={handleDeleteUser} />}
        </div>
    );
};

export default UserList;