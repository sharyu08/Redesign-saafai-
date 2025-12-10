"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, UserPlus, Users, Search, ChevronDown, MoreVertical, Eye, Trash2 } from "lucide-react";

// Mock cleaners data
const MOCK_CLEANERS = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    name: `Cleaner ${i + 1}`,
    phone: `+91 90000${1000 + i}`,
    status: i % 3 === 0 ? 'active' : 'unassigned',
    assignedOn: i % 3 === 0 ? '2025-11-0' + ((i % 9) + 1) : undefined,
}));

const styles = {
    container: { padding: '28px', backgroundColor: '#f6f9fc', minHeight: '100vh' },
    wrapper: { maxWidth: '1100px', margin: '0 auto', width: '100%' },
    headerContainer: {
        background: 'linear-gradient(90deg, #2563eb, #1e40af)',
        color: '#fff',
        padding: '32px',
        borderRadius: '12px',
        marginBottom: '22px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerContent: { display: 'flex', alignItems: 'center', gap: '16px' },
    headerIcon: {
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
    },
    headerText: { display: 'flex', flexDirection: 'column', gap: '4px' },
    title: { margin: 0, fontSize: '1.5rem', fontWeight: 700, color: '#fff' },
    subtitle: { margin: 0, fontSize: '0.9rem', opacity: 0.9, color: '#fff' },
    card: {
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
        marginBottom: '20px',
    },
    filterSection: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' },
    searchInput: {
        padding: '10px 16px',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        width: '300px',
        fontSize: '0.95rem',
    },
    roleButton: {
        padding: '8px 16px',
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
        backgroundColor: '#fff',
        cursor: 'pointer',
        fontSize: '0.9rem',
        fontWeight: '500',
    },
    roleButtonActive: {
        backgroundColor: '#2563eb',
        color: '#fff',
        border: '1px solid #2563eb',
    },
    tableWrapper: {
        overflowX: 'auto',
        backgroundColor: '#fff',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    thead: {
        backgroundColor: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
    },
    th: {
        padding: '16px',
        textAlign: 'left',
        fontWeight: '600',
        color: '#1e293b',
        fontSize: '0.9rem',
    },
    td: {
        padding: '16px',
        borderBottom: '1px solid #f1f5f9',
        fontSize: '0.95rem',
        color: '#1e293b',
    },
    actionBtn: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '4px',
        color: '#64748b',
        marginRight: '8px',
    },
    buttonGroup: { display: 'flex', gap: '12px', marginTop: '20px', justifyContent: 'flex-end' },
    primaryBtn: {
        padding: '12px 24px',
        backgroundColor: '#2563eb',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: '0.95rem',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
    },
    secondaryBtn: {
        padding: '12px 24px',
        backgroundColor: '#fff',
        color: '#475569',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: '0.95rem',
    },
};

export default function CreateAssignmentsPage() {
    const [query, setQuery] = useState('');
    const [activeRole, setActiveRole] = useState('All Roles');
    const [selectedCleaners, setSelectedCleaners] = useState([]);

    const cleaners = query
        ? MOCK_CLEANERS.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()))
        : MOCK_CLEANERS;

    const handleSelectCleaner = (id) => {
        setSelectedCleaners((prev) =>
            prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
        );
    };

    return (
        <div style={styles.container}>
            <div style={styles.wrapper}>
                {/* Header */}
                <div style={styles.headerContainer}>
                    <div style={styles.headerContent}>
                        <div style={styles.headerIcon}>
                            <UserPlus size={24} />
                        </div>
                        <div style={styles.headerText}>
                            <h1 style={styles.title}>Create Assignments</h1>
                            <p style={styles.subtitle}>Assign cleaners to washrooms</p>
                        </div>
                    </div>
                    <Link href="/dashboard/cleaner-assignments/add">
                        <button style={styles.primaryBtn}>
                            <Plus size={16} /> Add Cleaner
                        </button>
                    </Link>
                </div>

                {/* Filter & Search Card */}
                <div style={styles.card}>
                    <div style={styles.filterSection}>
                        <input
                            type="text"
                            placeholder="Search cleaners by name or phone"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            style={styles.searchInput}
                        />
                        <button style={styles.roleButton}>
                            All Roles <ChevronDown size={16} style={{ marginLeft: '8px' }} />
                        </button>
                    </div>

                    {/* Role Filter Buttons */}
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                        {[
                            { label: 'All Roles', count: 14 },
                            { label: 'Supervisor', count: 2 },
                            { label: 'Cleaner', count: 12 },
                        ].map((role) => (
                            <button
                                key={role.label}
                                onClick={() => setActiveRole(role.label)}
                                style={{
                                    ...styles.roleButton,
                                    ...(activeRole === role.label ? styles.roleButtonActive : {}),
                                }}
                            >
                                {role.label} ({role.count})
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cleaners Table */}
                <div style={styles.card}>
                    <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '600', color: '#1e293b' }}>
                            Select Cleaners ({selectedCleaners.length} selected)
                        </h3>
                    </div>

                    <div style={styles.tableWrapper}>
                        <table style={styles.table}>
                            <thead style={styles.thead}>
                                <tr>
                                    <th style={styles.th}>
                                        <input type="checkbox" />
                                    </th>
                                    <th style={styles.th}>Sr. No.</th>
                                    <th style={styles.th}>Cleaner Name</th>
                                    <th style={styles.th}>Phone</th>
                                    <th style={styles.th}>Status</th>
                                    <th style={styles.th}>Assigned On</th>
                                    <th style={styles.th}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cleaners.map((cleaner, idx) => (
                                    <tr key={cleaner.id}>
                                        <td style={styles.td}>
                                            <input
                                                type="checkbox"
                                                checked={selectedCleaners.includes(cleaner.id)}
                                                onChange={() => handleSelectCleaner(cleaner.id)}
                                            />
                                        </td>
                                        <td style={styles.td}>{idx + 1}</td>
                                        <td style={styles.td}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <div
                                                    style={{
                                                        width: '32px',
                                                        height: '32px',
                                                        borderRadius: '50%',
                                                        backgroundColor: '#e0f2fe',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: '#0284c7',
                                                    }}
                                                >
                                                    <Users size={16} />
                                                </div>
                                                <div>
                                                    <div style={{ fontWeight: '600', color: '#1e293b' }}>{cleaner.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td style={styles.td}>{cleaner.phone}</td>
                                        <td style={styles.td}>
                                            <span
                                                style={{
                                                    padding: '4px 12px',
                                                    borderRadius: '16px',
                                                    backgroundColor: cleaner.status === 'active' ? '#dcfce7' : '#f3f4f6',
                                                    color: cleaner.status === 'active' ? '#166534' : '#6b7280',
                                                    fontSize: '0.85rem',
                                                    fontWeight: '500',
                                                }}
                                            >
                                                {cleaner.status === 'active' ? 'Active' : 'Unassigned'}
                                            </span>
                                        </td>
                                        <td style={styles.td}>{cleaner.assignedOn || '—'}</td>
                                        <td style={styles.td}>
                                            <button style={styles.actionBtn} title="View">
                                                <Eye size={16} />
                                            </button>
                                            <button style={styles.actionBtn} title="Delete">
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div style={styles.buttonGroup}>
                        <button style={styles.secondaryBtn}>Cancel</button>
                        <button style={styles.primaryBtn}>
                            <Plus size={16} /> Create {selectedCleaners.length} Assignments
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
