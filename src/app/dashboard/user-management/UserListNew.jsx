"use client";

import { useState } from "react";
import { Eye, Edit3, Trash2, Plus, Search, Users, Fingerprint } from "lucide-react";

export default function UserManagementPage({ users = [] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email} ${user.phone}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    /* Standardized background and font scaling from global base layers */
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-8 space-y-8">

      {/* HEADER + SEARCH + ACTION (Using Standardized .page-header pattern) */}
      <div className="page-header shadow-sm overflow-hidden">
        <div className="page-header-content">

          {/* Left Side: Title Architecture */}
          <div className="page-header-title-section">
            <div className="page-header-icon">
              <Users className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <h1 className="page-header-title">Manage Users</h1>
              <p className="page-header-subtitle">
                System personnel and access levels
              </p>
            </div>
          </div>

          {/* Right Side: Primary Action */}
          <div className="page-header-actions">
            <button className="btn-primary flex items-center gap-2 px-8 py-3 rounded-xl text-xs font-black uppercase tracking-[0.15em] active:scale-95 transition-all shadow-lg shadow-orange-500/20">
              <Plus size={16} strokeWidth={3} />
              Add User
            </button>
          </div>
        </div>

        {/* INTEGRATED SEARCH (Faint Style) */}
        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
          <div className="form-group max-w-2xl text-left mb-0">
            <div className="form-input-wrapper">
              <Search className="form-input-icon" size={18} />
              <input
                type="text"
                placeholder="SEARCH BY NAME, EMAIL, OR PHONE..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input py-4 pl-12 text-[10px] font-black uppercase tracking-[0.2em] shadow-inner"
              />
            </div>
          </div>
        </div>
      </div>

      {/* USERS TABLE - Using .table-container architectural tokens */}
      <div className="table-container">
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="table-header">
              <tr>
                <th className="w-5/12 tracking-[0.15em]">Staff Member Architecture</th>
                <th className="w-4/12 tracking-[0.15em]">Contact Metadata</th>
                <th className="w-2/12 tracking-[0.15em]">Role</th>
                <th className="w-1/12 text-right tracking-[0.15em]">Operations</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="table-row group">
                    {/* NAME + PHONE */}
                    <td className="table-cell">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-black text-xs group-hover:scale-110 transition-transform">
                          {user.name.charAt(0)}
                        </div>
                        <div className="text-left">
                          <p className="font-black text-slate-800 dark:text-slate-200 uppercase tracking-tight">
                            {user.name}
                          </p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                            {user.phone}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* EMAIL */}
                    <td className="table-cell">
                      <p className="text-xs font-bold text-slate-600 dark:text-slate-400 lowercase tracking-tight">
                        {user.email || "n/a"}
                      </p>
                    </td>

                    {/* ROLE - Using Standardized badge-role classes */}
                    <td className="table-cell">
                      <span className={`badge-role ${user.role.toLowerCase()}`}>
                        {user.role}
                      </span>
                    </td>

                    {/* ACTIONS - Using btn-icon logic */}
                    <td className="table-cell table-cell-right">
                      <div className="flex justify-end gap-2">
                        <button className="btn-icon" title="View Details">
                          <Eye size={15} />
                        </button>
                        <button className="btn-icon" title="Edit Profile">
                          <Edit3 size={15} />
                        </button>
                        <button className="btn-icon text-rose-500 border-rose-100 dark:border-rose-900/30 hover:bg-rose-50" title="Delete User">
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="table-cell py-20 text-center">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
                      Registry Empty: No Users Found
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}