"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { Search, Plus, Eye, Edit2, Trash2, Shield, ShieldCheck, AlertTriangle, MapPin, Calendar, Fingerprint, Users } from 'lucide-react';
import EditUserFormModal from './EditUserFormModal';
import AddUserForm from './AddUserForm';

const initialUserRows = [
  {
    id: 103,
    name: 'Rajesh Sahani - Narendra square',
    phone: '8955596876',
    email: 'rajesh@example.com',
    role: 'Cleaner',
    userId: 182,
    status: 'active',
    lastActive: '2 hours ago',
    joinDate: '15 Jan 2023',
    locations: [
      { name: 'Narendra nagar square', assignedDate: '20 Nov 2025', active: true, coordinates: '21.107, 79.079' },
      { name: 'New Manish Nagar Chowk', assignedDate: '8 Dec 2025', active: true, coordinates: '21.085, 79.087' }
    ]
  },
  {
    id: 101, name: 'Test Admin', phone: '9356150564', email: 'admin@example.com', role: 'Admin', userId: 180, status: 'active', lastActive: '30 mins ago', joinDate: '10 Jan 2023', locations: []
  },
  {
    id: 102, name: 'Omkar Supervisor', phone: '3333333333', email: 'supervisor@example.com', role: 'Supervisor', userId: 181, status: 'active', lastActive: '1 hour ago', joinDate: '12 Jan 2023', locations: [{ name: 'Narendra nagar square', assignedDate: '20 Nov 2025', active: true, coordinates: '21.107, 79.079' }]
  }
];

// --- DELETE CONFIRMATION MODAL ---
const DeleteConfirmModal = ({ user, onClose, onConfirm }) => {
  if (!user) return null;
  return createPortal(
    <div className="form-overlay" style={{ zIndex: "var(--z-modal)" }}>
      <div className="form-container max-w-sm">
        <div className="bg-rose-50/50 dark:bg-rose-950/10 p-8 flex flex-col items-center text-center border-b border-slate-100 dark:border-slate-800">
          <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 rounded-[22px] flex items-center justify-center mb-5 shadow-sm border border-rose-200/50">
            <AlertTriangle className="h-8 w-8 text-rose-600 dark:text-rose-400" />
          </div>
          <h2 className="text-sm font-black text-slate-800 dark:text-rose-200 uppercase tracking-[0.2em]">Confirm Deletion</h2>
          <p className="text-[10px] font-bold text-slate-500 dark:text-rose-300/60 mt-3 leading-relaxed uppercase tracking-widest">
            Are you sure you want to remove <span className="text-rose-600 dark:text-rose-400 font-black">{user.name}</span>?
            <br />This action is permanent.
          </p>
        </div>
        <div className="form-actions gap-3 p-4">
          <button onClick={onClose} className="btn-icon flex-1 py-3 text-[10px] font-black uppercase tracking-widest border-none hover:bg-slate-50">
            Cancel
          </button>
          <button onClick={() => onConfirm(user)} className="btn-danger flex-1 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl">
            Delete Account
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

// --- LOCATION CARD ---
const LocationAssignmentCard = ({ location }) => (
  <div className="bg-slate-50/50 dark:bg-slate-800/20 border border-slate-100 dark:border-slate-800 p-4 rounded-2xl transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm">
    <div className="flex justify-between items-start mb-3">
      <h3 className="text-xs font-black text-slate-700 dark:text-slate-200 uppercase tracking-tight flex items-center gap-2">
        <MapPin size={14} className="text-cyan-600" /> {location?.name}
      </h3>
      <span className={`badge-status text-[9px] font-black uppercase tracking-widest ${location?.active ? 'active' : 'inactive'}`}>
        {location?.active ? 'Active' : 'Inactive'}
      </span>
    </div>
    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
      Nagpur, Maharashtra <br />
      <span className="font-mono text-[9px] opacity-60 lowercase">{location?.coordinates}</span>
    </p>
    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-[9px] font-black text-slate-400 uppercase tracking-widest">
      <Calendar size={12} className="text-cyan-600/50" />
      Assigned {location?.assignedDate}
    </div>
  </div>
);

// --- USER DETAIL CARD ---
const UserDetailCard = ({ user, onClose }) => {
  if (!user) return null;
  const activeLocations = user.locations?.filter(l => l.active).length || 0;

  return createPortal(
    <div className="form-overlay" style={{ zIndex: "var(--z-modal)" }}>
      <div className="form-container max-w-4xl">
        <div className="form-header">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-slate-800 to-slate-900 dark:from-cyan-600 dark:to-blue-600 text-white flex items-center justify-center rounded-2xl text-xl font-black shadow-lg border-2 border-white dark:border-slate-800">
              {user.name.charAt(0)}
            </div>
            <div className="text-left">
              <h2 className="form-header-title text-xl tracking-tight">{user.name}</h2>
              <div className={`badge-role ${user.role.toLowerCase()} mt-1`}>
                <Shield className="w-3 h-3" /> {user.role}
              </div>
            </div>
          </div>
          <button onClick={onClose} className="btn-icon text-[10px] font-black uppercase tracking-widest">
            Back to Registry
          </button>
        </div>

        <div className="form-body grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b border-slate-100 dark:border-slate-800">
          <div className="space-y-1"><p className="form-label">Email</p><p className="text-sm font-black text-slate-700 dark:text-slate-200 lowercase">{user.email}</p></div>
          <div className="space-y-1"><p className="form-label">Phone</p><p className="text-sm font-black text-slate-700 dark:text-slate-200">{user.phone}</p></div>
          <div className="space-y-1"><p className="form-label">Staff ID</p><p className="font-mono text-sm font-black text-cyan-600">#{user.userId}</p></div>
          <div className="space-y-1"><p className="form-label">Status</p><span className={`badge-status uppercase text-[9px] font-black ${user.status === 'active' ? 'active' : 'inactive'}`}>{user.status}</span></div>
          <div className="space-y-1"><p className="form-label">Last Active</p><p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{user.lastActive}</p></div>
          <div className="space-y-1"><p className="form-label">Joined</p><p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{user.joinDate}</p></div>
        </div>

        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xs font-black text-slate-800 dark:text-slate-100 uppercase tracking-[0.2em] flex items-center gap-2">
              <MapPin className="text-cyan-600" size={16} /> Assigned Locations
            </h2>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              {activeLocations} Active • {user.locations?.length || 0} Total
            </span>
          </div>

          {user.locations?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {user.locations.map((loc, i) => <LocationAssignmentCard key={i} location={loc} />)}
            </div>
          ) : (
            <div className="text-center py-12 bg-slate-50/50 dark:bg-slate-800/10 rounded-2xl border-2 border-dashed border-slate-100 dark:border-slate-800">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">No spatial assignments found</p>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

const UserList = () => {
  const [users, setUsers] = useState(initialUserRows);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewingUser, setViewingUser] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [deletingUser, setDeletingUser] = useState(null);
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true); }, []);

  const filteredUsers = users.filter(u => {
    const term = searchTerm.toLowerCase();
    return u.name.toLowerCase().includes(term) || u.email.toLowerCase().includes(term) || u.userId.toString().includes(term);
  });

  if (!isMounted) return null;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 min-h-screen">

      {/* Page Header Component Pattern */}
      <div className="page-header">
        <div className="page-header-content">
          <div className="page-header-title-section">
            <div className="page-header-icon"><Fingerprint className="h-6 w-6" strokeWidth={2.5} /></div>
            <div className="text-left">
              <h1 className="page-header-title">User Management</h1>
              <p className="page-header-subtitle">System access levels and personnel mapping</p>
            </div>
          </div>
          <button onClick={() => setIsAddingUser(true)} className="btn-primary flex items-center gap-2 px-8 py-3 rounded-xl text-xs font-black uppercase tracking-[0.15em] shadow-lg shadow-orange-500/20">
            <Plus size={16} strokeWidth={3} /> Add New User
          </button>
        </div>
      </div>

      {/* Search using form-input-wrapper pattern */}
      <div className="form-group max-w-2xl text-left">
        <div className="form-input-wrapper">
          <Search className="form-input-icon" size={18} />
          <input
            type="text"
            className="form-input py-4 pl-12 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm"
            placeholder="Search by Name, Email or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Standardized Table View */}
      <div className="table-container">
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="table-header">
              <tr>
                <th className="tracking-[0.15em]">Staff Registry</th>
                <th className="tracking-[0.15em]">Role Architecture</th>
                <th className="tracking-[0.15em]">Status</th>
                <th className="tracking-[0.15em]">Last Activity</th>
                <th className="table-cell-right tracking-[0.15em]">Operations</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="table-row group">
                  <td className="table-cell">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-800 dark:text-cyan-400 flex items-center justify-center font-black text-xs group-hover:scale-110 transition-transform">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-black text-slate-800 dark:text-slate-200 uppercase tracking-tight">{user.name}</div>
                        <div className="text-[10px] text-slate-400 font-bold lowercase">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="table-cell">
                    <span className={`badge-role ${user.role.toLowerCase()}`}>{user.role}</span>
                  </td>
                  <td className="table-cell">
                    <span className={`badge-status uppercase text-[9px] font-black tracking-widest ${user.status === 'active' ? 'active' : 'inactive'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="table-cell text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    {user.lastActive}
                  </td>
                  <td className="table-cell table-cell-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => setViewingUser(user)} className="btn-icon"><Eye size={15} /></button>
                      <button onClick={() => setEditingUser(user)} className="btn-icon"><Edit2 size={15} /></button>
                      <button onClick={() => setDeletingUser(user)} className="btn-icon text-rose-500 border-rose-100 hover:bg-rose-50"><Trash2 size={15} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Conditional Modals */}
      {isAddingUser && <AddUserForm onClose={() => setIsAddingUser(false)} onSubmit={(u) => setUsers([u, ...users])} />}
      {editingUser && <EditUserFormModal initialUser={editingUser} onClose={() => setEditingUser(null)} onSubmit={(u) => setUsers(users.map(row => row.id === u.id ? u : row))} />}
      {deletingUser && <DeleteConfirmModal user={deletingUser} onClose={() => setDeletingUser(null)} onConfirm={(u) => setUsers(users.filter(row => row.id !== u.id))} />}
      {viewingUser && <UserDetailCard user={viewingUser} onClose={() => setViewingUser(null)} />}
    </div>
  );
};

export default UserListFixed;