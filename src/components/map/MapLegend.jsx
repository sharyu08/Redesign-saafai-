export default function MapLegend() {
    return (
        <div
            className="
        absolute bottom-4 right-4
        bg-[hsl(var(--card))]
        border border-[hsl(var(--border))]
        rounded-xl
        shadow-xl
        p-4
        text-sm
        font-semibold
        z-10
        space-y-2
      "
        >
            <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[hsl(var(--chart-success))]"></span>
                <span className="text-[hsl(var(--text-heading))]">Top Performing</span>
            </div>

            <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[hsl(var(--chart-error))]"></span>
                <span className="text-[hsl(var(--text-heading))]">Needs Attention</span>
            </div>

            <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[hsl(var(--chart-warning))]"></span>
                <span className="text-[hsl(var(--text-heading))]">Unassigned</span>
            </div>
        </div>
    );
}
