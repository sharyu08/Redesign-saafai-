"use client";
import { useMemo } from "react";

export default function PreviewModal({ open, onClose, users = [], locations = [], assignmentType, startDate, onConfirm }) {
  const previewList = useMemo(() => {
    const list = [];
    if (assignmentType === "many-to-many") {
      users.forEach((u) =>
        locations.forEach((l) => list.push({ user: u, location: l }))
      );
    } else if (assignmentType === "one-to-one") {
      for (let i = 0; i < Math.min(users.length, locations.length); i++) {
        list.push({ user: users[i], location: locations[i] });
      }
    } else if (assignmentType === "round-robin") {
      for (let i = 0; i < locations.length; i++) {
        const user = users[i % users.length];
        list.push({ user, location: locations[i] });
      }
    }
    return list;
  }, [users, locations, assignmentType]);

  if (!open) return null;

  return (
    <div className="form-overlay">
      <div className="form-container form-container-xl">
        <div className="form-header">
          <div>
            <h3 className="form-header-title">Preview Assignments</h3>
            <div className="text-sm text-muted-foreground mt-1">{previewList.length} assignments</div>
          </div>
        </div>

        <div className="form-body max-h-96 overflow-auto">
          <div className="text-sm text-foreground mb-3">Start date: {startDate || "Immediate"}</div>

          <table className="table">
            <thead className="table-header">
              <tr>
                <th className="text-left pb-2">Cleaner</th>
                <th className="text-left pb-2">Location</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {previewList.slice(0, 100).map((p, idx) => (
                <tr key={idx} className="table-row">
                  <td className="table-cell py-2">{p.user.name} <div className="text-[11px] text-muted-foreground">{p.user.email}</div></td>
                  <td className="table-cell py-2">{p.location.name} <div className="text-[11px] text-muted-foreground">{p.location.ward}</div></td>
                </tr>
              ))}
            </tbody>
          </table>

          {previewList.length > 100 && (
            <div className="text-xs text-muted-foreground mt-2">Showing first 100</div>
          )}
        </div>

        <div className="form-actions">
          <button onClick={onClose} className="btn btn-secondary">Cancel</button>
          <button onClick={onConfirm} className="btn btn-gradient">Create Assignments</button>
        </div>
      </div>
    </div>
  );
}
