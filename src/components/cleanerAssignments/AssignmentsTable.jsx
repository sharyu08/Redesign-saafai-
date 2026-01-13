import AssignmentRow from "./AssignmentRow";

export default function AssignmentsTable({
  rows,
  pageStartIndex,
  isSelected,
  onToggleSelectOne,
  onToggleSelectAllCurrent,
  onToggleAssign,
  onDelete,
}) {
  const allPageSelected =
    rows.length > 0 && rows.every((row) => isSelected(row.id));

  return (
    <div className="table-container">
      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="table min-w-full">
          <thead className="table-header-primary">
            <tr>
              <th className="w-10">
                <input
                  type="checkbox"
                  className="rounded border-border text-primary-light focus:ring-primary-light"
                  checked={allPageSelected}
                  onChange={onToggleSelectAllCurrent}
                />
              </th>
              <th>#</th>
              <th>Cleaner</th>
              <th>Location</th>
              <th>Role</th>
              <th>Status</th>
              <th>Assigned On</th>
              <th className="table-cell-right">Action</th>
            </tr>
          </thead>

          <tbody className="table-body">
            {rows.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="table-cell py-10 text-center font-medium text-muted-foreground"
                >
                  No assignments found for current filters.
                </td>
              </tr>
            ) : (
              rows.map((row, index) => (
                <AssignmentRow
                  key={row.id}
                  row={row}
                  index={pageStartIndex + index + 1}
                  checked={isSelected(row.id)}
                  onToggleSelect={() => onToggleSelectOne(row.id)}
                  onToggleAssign={() => onToggleAssign(row.id)}
                  onDelete={() => onDelete(row.id)}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-4 p-4">
        {rows.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="p-3 bg-slate-50 rounded-full">
                <div className="w-8 h-8 text-slate-400" />
              </div>
              <p className="text-sm font-medium text-slate-600">No assignments found for current filters.</p>
            </div>
          </div>
        ) : (
          rows.map((row, index) => (
            <div key={row.id} className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 space-y-4 hover:bg-slate-50 transition-colors">
              {/* Header Section */}
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="flex-1">
                  <h3 className="text-base font-bold text-slate-800">Assignment #{pageStartIndex + index + 1}</h3>
                  <p className="text-sm text-slate-500">{row.cleaner}</p>
                </div>
                <div className="text-right">
                  <input
                    type="checkbox"
                    className="rounded border-border text-primary-light focus:ring-primary-light"
                    checked={isSelected(row.id)}
                    onChange={() => onToggleSelectOne(row.id)}
                  />
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 gap-3">
                {/* Location */}
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 text-slate-400" />
                  <div>
                    <p className="text-sm font-medium text-slate-700">{row.location}</p>
                    <p className="text-xs text-slate-400">Location</p>
                  </div>
                </div>

                {/* Role */}
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 text-slate-400" />
                  <div>
                    <p className="text-sm font-medium text-slate-700">{row.role}</p>
                    <p className="text-xs text-slate-400">Role</p>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 text-slate-400" />
                  <div>
                    <span className={`px-2 py-1 rounded-lg text-xs font-bold uppercase tracking-widest ${row.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-600'
                      }`}>
                      {row.status}
                    </span>
                    <p className="text-xs text-slate-400 mt-1">Status</p>
                  </div>
                </div>

                {/* Assigned Date */}
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 text-slate-400" />
                  <div>
                    <p className="text-sm font-medium text-slate-700">{row.assignedOn}</p>
                    <p className="text-xs text-slate-400">Assigned On</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100">
                <div className="flex gap-2">
                  <button
                    onClick={() => onToggleAssign(row.id)}
                    className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-700 py-2 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <div className="w-4 h-4" />
                    Assign
                  </button>
                  <button
                    onClick={() => onDelete(row.id)}
                    className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 py-2 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <div className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}