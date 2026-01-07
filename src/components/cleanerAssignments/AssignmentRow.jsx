function Avatar({ name, role }) {
  const initial = name?.charAt(0).toUpperCase() || "?";
  const colors = {
    supervisor: 'bg-gradient-to-r from-[#2DB7C4] to-[#4F7FD9] text-white',
    default: 'bg-[#0E7C86] text-white'
  };
  
  return (
    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
      role === 'supervisor' ? colors.supervisor : colors.default
    }`}>
      {initial}
    </div>
  );
}

function RolePill({ role }) {
  return (
    <span className={`badge-role ${role}`}>
      {role}
    </span>
  );
}

function StatusPill({ status }) {
  return (
    <span className={`badge-status ${status}`}>
      <span>●</span> {status}
    </span>
  );
}

export default function AssignmentRow({
  row,
  index,
  checked,
  onToggleSelect,
  onToggleAssign,
  onDelete,
}) {
  return (
    <tr className="table-row">
      <td className="table-cell">
        <input
          type="checkbox"
          checked={checked}
          onChange={onToggleSelect}
          className="rounded border-border text-primary-light focus:ring-primary-light"
        />
      </td>
      <td className="table-cell text-muted-foreground">{index}</td>
      <td className="table-cell">
        <div className="flex items-center gap-2">
          <Avatar name={row.cleanerName} role={row.role} />
          <div>
            <div>
              {row.cleanerName}
            </div>
            {row.cleanerEmail && (
              <div className="text-[10px] text-muted-foreground">
                {row.cleanerEmail}
              </div>
            )}
          </div>
        </div>
      </td>
      <td className="table-cell">
        <div className="flex items-center gap-1">
          <span>📍</span>
          <span>{row.locationName}</span>
        </div>
      </td>
      <td className="table-cell">
        <RolePill role={row.role} />
      </td>
      <td className="table-cell">
        <StatusPill status={row.status} />
      </td>
      <td className="table-cell text-muted-foreground">
        {row.assignedOn || "-"}
      </td>
      <td className="table-cell table-cell-right">
        <div className="inline-flex items-center gap-2">
          <button
            onClick={onToggleAssign}
            className="btn-secondary btn-sm"
          >
            {row.status === "assigned" ? "Mark Unassigned" : "Assign"}
          </button>
          <button
            onClick={onDelete}
            className="btn-icon text-accent-red hover:bg-accent-red hover:text-white"
          >
            🗑
          </button>
        </div>
      </td>
    </tr>
  );
}
