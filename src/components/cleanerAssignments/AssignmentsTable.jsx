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
    <div className="overflow-x-auto">
      <table className="min-w-full border-separate border-spacing-0 text-left text-xs">
        {/* Header updated to use primary-dark variable and bold uppercase text */}
        <thead className="sticky top-0 z-10">
          <tr style={{ backgroundColor: 'var(--primary-dark)' }}>
            <th className="w-10 px-8 py-5 border-b border-white/10">
              <input
                type="checkbox"
                className="rounded border-slate-300 text-[#58BECF] focus:ring-[#58BECF]"
                checked={allPageSelected}
                onChange={onToggleSelectAllCurrent}
              />
            </th>
            <th className="px-4 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white border-b border-white/10">
              #
            </th>
            <th className="px-4 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white border-b border-white/10">
              Cleaner
            </th>
            <th className="px-4 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white border-b border-white/10">
              Location
            </th>
            <th className="px-4 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white border-b border-white/10">
              Role
            </th>
            <th className="px-4 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white border-b border-white/10">
              Status
            </th>
            <th className="px-4 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white border-b border-white/10">
              Assigned On
            </th>
            <th className="px-8 py-5 text-right text-[10px] font-bold uppercase tracking-[0.2em] text-white border-b border-white/10">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-50 bg-white">
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={8}
                className="px-4 py-10 text-center font-medium text-slate-400"
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
  );
}