export default function SummaryCards({
  total,
  assigned,
  unassigned,
  onClickCard,
  activeStatus,
}) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {/* Gold / Highlight Card */}
      <div
        className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#FFF3E0] border border-[#F4B740] shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => onClickCard('unassigned')}
      >
        <div className="text-center">
          <div className="text-[10px] font-medium text-[#2F3A45] mb-1">Unassigned</div>
          <div className="text-lg font-bold text-[#2F3A45]">
            {unassigned}
          </div>
        </div>
        <div className="w-6 h-6 rounded-full bg-[#F4B740] flex items-center justify-center text-white text-xs mt-1">
          👥
        </div>
      </div>

      {/* Blue / Secondary Card */}
      <div
        className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#EEF4FF] border border-[#4F7FD9] shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => onClickCard('assigned')}
      >
        <div className="text-center">
          <div className="text-[10px] font-medium text-[#2F3A45] mb-1">Assigned</div>
          <div className="text-lg font-bold text-[#2F3A45]">
            {assigned}
          </div>
        </div>
        <div className="w-6 h-6 rounded-full bg-[#4F7FD9] flex items-center justify-center text-white text-xs mt-1">
          ✅
        </div>
      </div>

      {/* Bronze / Neutral Card */}
      <div
        className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#FFF1E8] border border-[#C77C5C] shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => onClickCard('total')}
      >
        <div className="text-center">
          <div className="text-[10px] font-medium text-[#2F3A45] mb-1">Total</div>
          <div className="text-lg font-bold text-[#2F3A45]">
            {total}
          </div>
        </div>
        <div className="w-6 h-6 rounded-full bg-[#C77C5C] flex items-center justify-center text-white text-xs mt-1">
          📊
        </div>
      </div>
    </div>
  );
}
