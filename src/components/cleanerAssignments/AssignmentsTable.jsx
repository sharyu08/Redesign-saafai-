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
    <div className="table-container overflow-x-auto">
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
  );
}