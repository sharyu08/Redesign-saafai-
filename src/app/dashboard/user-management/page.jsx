"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, Edit3, Trash2, Plus, Search, Users, ShieldCheck, X, Fingerprint } from "lucide-react";
import AddUserForm from "./AddUserForm";
import EditUserFormModal from "./EditUserFormModal";

// Mock Data
const initialUsers = [
  { id: 1, name: "Rajesh Sahani", email: "rajesh@saaf.ai", phone: "8955596876", role: "Cleaner", userId: "182" },
  { id: 2, name: "Omkar Supervisor", email: "supervisor@saaf.ai", phone: "3333333333", role: "Supervisor", userId: "181" },
  { id: 3, name: "NMC Admin", email: "admin@saaf.ai", phone: "9356150564", role: "Admin", userId: "180" },
];

// User Detail Modal Component
const UserDetailModal = ({ user, onClose }) => (
  <div className="form-overlay" style={{ zIndex: "var(--z-modal)" }}>
    <div className="form-container max-w-md">
      <div className="form-header">
        <div className="flex items-center gap-3">
          <div className="form-icon-button">
            <Fingerprint className="text-cyan-600 dark:text-cyan-400" size={20} />
          </div>
          <div className="text-left">
            <h2 className="form-header-title">User Details</h2>
            <p className="form-header-subtitle">Staff ID: #{user?.userId || 'N/A'}</p>
          </div>
        </div>
        <button onClick={onClose} className="form-header-close" aria-label="Close">
          <X size={20} strokeWidth={3} />
        </button>
      </div>
      <div className="form-body space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <div className="form-input-wrapper">
              <input type="text" value={user?.name || ''} className="form-input" readOnly />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="form-input-wrapper">
              <input type="email" value={user?.email || ''} className="form-input" readOnly />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <div className="form-input-wrapper">
              <input type="tel" value={user?.phone || ''} className="form-input" readOnly />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Access Role</label>
            <div className="form-input-wrapper">
              <input type="text" value={user?.role || ''} className="form-input" readOnly />
            </div>
          </div>
        </div>
        <div className="form-actions">
          <button onClick={onClose} className="btn btn-secondary px-6">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default function UserManagementPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState(initialUsers);
  const [viewingUser, setViewingUser] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [addingUser, setAddingUser] = useState(false);
  const [deletingUser, setDeletingUser] = useState(null);

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email} ${user.phone} ${user.userId}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleViewUser = (user) => {
    setViewingUser(user);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleDeleteUser = (user) => {
    setDeletingUser(user);
  };

  const confirmDelete = (userId) => {
    setUsers(users.filter(u => u.id !== userId));
    setDeletingUser(null);
  };

  const handleAddUser = () => {
    setAddingUser(true);
  };

  const handleUserAdded = (newUser) => {
    setUsers([...users, { ...newUser, id: users.length + 1, userId: String(180 + users.length + 1) }]);
    setAddingUser(false);
  };

  const handleUserUpdated = (updatedUser) => {
    setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
    setEditingUser(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-8 space-y-8 animate-fade-in">

      {/* HEADER + ACTION SECTION */}
      <div className="page-header">
        <div className="page-header-content">
          <div className="page-header-title-section">
            <div className="page-header-icon">
              <Users className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <h1 className="page-header-title">User Directory</h1>
              <p className="page-header-subtitle">
                <span className="w-2 h-2 rounded-full bg-[hsl(var(--accent-green))] animate-pulse"></span>
                System personnel and access levels
              </p>
            </div>
          </div>

          <div className="page-header-actions">
            <button
              onClick={handleAddUser}
              className="btn-primary flex items-center gap-2 px-8 py-3 rounded-xl text-xs font-black uppercase tracking-[0.15em] active:scale-95 transition-all shadow-lg shadow-orange-500/20"
            >
              <Plus size={16} strokeWidth={3} />
              Add User Account
            </button>
          </div>
        </div>

        {/* INTEGRATED SEARCH BAR */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
          <div className="form-group max-w-2xl text-left mb-0">
            <div className="form-input-wrapper">
              <Search className="form-input-icon" size={18} />
              <input
                type="text"
                placeholder="SEARCH BY NAME, EMAIL, OR STAFF ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input py-4 pl-12 text-[10px] font-black uppercase tracking-[0.2em] shadow-inner"
              />
            </div>
          </div>
        </div>
      </div>

      {/* DATA VIEW: USERS TABLE */}
      <div className="table-container">
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="table-header">
              <tr>
                <th className="w-5/12 tracking-[0.15em]">Staff Member Architecture</th>
                <th className="w-3/12 tracking-[0.15em]">Contact Metadata</th>
                <th className="w-2/12 tracking-[0.15em]">Permission</th>
                <th className="w-2/12 text-right tracking-[0.15em]">Operations</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="table-row group">

                    {/* AVATAR + NAME + ID */}
                    <td className="table-cell">
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-black text-sm shadow-sm group-hover:scale-110 transition-transform">
                          {user.name.charAt(0)}
                        </div>
                        <div className="text-left">
                          <p className="font-black text-slate-800 dark:text-slate-200 uppercase tracking-tight leading-tight">
                            {user.name}
                          </p>
                          <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.1em] mt-1">
                            Staff ID: <span className="text-cyan-600">#{user.userId}</span>
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* EMAIL + PHONE */}
                    <td className="table-cell">
                      <div className="space-y-1">
                        <p className="text-xs font-bold text-slate-600 dark:text-slate-400 lowercase tracking-tight">
                          {user.email}
                        </p>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                          {user.phone}
                        </p>
                      </div>
                    </td>

                    {/* ROLE BADGE - Aligned and Wrapped */}
                    <td className="table-cell">
                      <div className="flex">
                        <span className={`badge-role ${user.role.toLowerCase()} inline-flex items-center justify-center min-w-[100px] whitespace-nowrap`}>
                          <ShieldCheck size={10} className="mr-1.5" />
                          {user.role}
                        </span>
                      </div>
                    </td>

                    {/* ACTION BUTTONS - Semantic Colors Added */}
                    <td className="table-cell table-cell-right">
                      <div className="flex justify-end gap-2.5">
                        <button
                          onClick={() => handleViewUser(user)}
                          className="btn-icon h-9 w-9 !text-yellow-500 !dark:!text-yellow-300 !border-yellow-200 !dark:!border-yellow-800 hover:!bg-yellow-100 dark:hover:!bg-yellow-900/30"
                          title="View Details"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => handleEditUser(user)}
                          className="btn-icon h-9 w-9 !text-blue-500 !dark:!text-blue-300 !border-blue-200 !dark:!border-blue-800 hover:!bg-blue-100 dark:hover:!bg-blue-900/30"
                          title="Edit Profile"
                        >
                          <Edit3 size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user)}
                          className="btn-icon h-9 w-9 !text-red-500 !dark:!text-red-300 !border-red-200 !dark:!border-red-800 hover:!bg-red-100 dark:hover:!bg-red-900/30"
                          title="Delete User"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="table-cell py-32 text-center">
                    <div className="flex flex-col items-center opacity-40">
                      <Users size={48} className="mb-4 text-slate-300" />
                      <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
                        Registry Empty: No Users Found
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {viewingUser && (
            <UserDetailModal
              user={viewingUser}
              onClose={() => setViewingUser(null)}
            />
          )}

          {editingUser && (
            <EditUserFormModal
              initialUser={editingUser}
              onClose={() => setEditingUser(null)}
              onSubmit={handleUserUpdated}
            />
          )}

          {addingUser && (
            <AddUserForm
              onClose={() => setAddingUser(false)}
              onSubmit={handleUserAdded}
            />
          )}

          {deletingUser && (
            <div className="form-overlay" style={{ zIndex: "var(--z-modal)" }}>
              <div className="form-container max-w-sm">
                <div className="bg-rose-50/50 dark:bg-rose-950/10 p-8 flex flex-col items-center text-center border-b border-slate-100 dark:border-slate-800">
                  <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 rounded-[22px] flex items-center justify-center mb-5 shadow-sm border border-rose-200/50">
                    <Trash2 className="text-rose-600 dark:text-rose-400" size={24} />
                  </div>
                  <h2 className="text-sm font-black text-slate-800 dark:text-rose-200 uppercase tracking-[0.2em]">Confirm Deletion</h2>
                  <p className="text-[10px] font-bold text-slate-500 dark:text-rose-300/60 mt-3 leading-relaxed uppercase tracking-widest px-4">
                    Are you sure you want to remove <span className="text-rose-600 dark:text-rose-400 font-black">{deletingUser.name}</span>?
                    <br />This action is permanent.
                  </p>
                </div>
                <div className="form-actions gap-3 p-4">
                  <button
                    onClick={() => setDeletingUser(null)}
                    className="btn-icon flex-1 py-3 text-[10px] font-black uppercase tracking-widest border-none hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => confirmDelete(deletingUser.id)}
                    className="btn-danger flex-1 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl"
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}