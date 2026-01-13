"use client";

import { Eye, Edit3, Trash2, Mail, Phone, Shield, Plus } from "lucide-react";
import { useMemo } from "react";
import { useRouter } from "next/navigation";

export default function UserListMobile({ users = [], onDelete, onView, onEdit }) {
  const router = useRouter();

  const sorted = useMemo(
    () => [...users].sort((a, b) => a.name.localeCompare(b.name)),
    [users]
  );

  return (
    <div className="um-mobile-list space-y-3">
      {/* Header with Add User Button */}
      <div className="page-header">
        <div className="page-header-content">
          <div className="page-header-title-section">
            <div className="page-header-icon">
              <Shield className="h-6 w-6 text-primary-light" strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <h1 className="page-header-title">User Management</h1>
              <p className="page-header-subtitle">Manage all user roles and permissions</p>
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

      {sorted.length === 0 ? (
        <div className="um-mobile-empty">
          <p className="text-sm text-muted-foreground">No users found.</p>
        </div>
      ) : (
        sorted.map((user) => (
          <article key={user.id} className="um-mobile-card">
            <header className="um-mobile-header">
              <div className="um-mobile-avatar">{user.name.charAt(0)}</div>
              <div className="flex-1 min-w-0">
                <p className="um-mobile-name text-wrap-safe">{user.name}</p>
                <p className="um-mobile-id">ID: #{user.userId}</p>
              </div>
              <span className={`badge-role ${user.role.toLowerCase()}`}>
                {user.role}
              </span>
            </header>

            <div className="um-mobile-row">
              <Mail className="um-mobile-icon" />
              <a href={`mailto:${user.email}`} className="um-mobile-link text-wrap-safe">
                {user.email}
              </a>
            </div>

            <div className="um-mobile-row">
              <Phone className="um-mobile-icon" />
              <a href={`tel:${user.phone}`} className="um-mobile-link">
                {user.phone}
              </a>
            </div>

            <div className="um-mobile-row">
              <Shield className="um-mobile-icon" />
              <span className="text-sm text-foreground">{user.role}</span>
            </div>

            <footer className="um-mobile-actions">
              <button
                className="btn-icon btn-icon-view"
                onClick={() => onView?.(user.id)}
                aria-label="View user"
              >
                <Eye size={18} />
              </button>
              <button
                className="btn-icon btn-icon-edit"
                onClick={() => onEdit?.(user.id)}
                aria-label="Edit user"
              >
                <Edit3 size={18} />
              </button>
              <button
                className="btn-icon btn-icon-delete"
                onClick={() => onDelete?.(user.id)}
                aria-label="Delete user"
              >
                <Trash2 size={18} />
              </button>
            </footer>
          </article>
        ))
      )}
    </div>
  );
}
