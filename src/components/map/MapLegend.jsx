export default function MapLegend() {
    return (
        <div
            className="
        absolute bottom-4 right-4
        bg-white
        border border-gray-300
        rounded-xl
        shadow-xl
        p-4
        text-sm
        font-semibold
        z-20
        space-y-2
      "
        >
            <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-gray-900">Top Performing</span>
            </div>

            <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="text-gray-900">Needs Attention</span>
            </div>

            <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="text-gray-900">Unassigned</span>
            </div>
        </div>
    );
}
