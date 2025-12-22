import { FaPerson, FaPersonDress } from "react-icons/fa6";
import { MdShower } from "react-icons/md";

export default function UsageCategory() {
    return (
        <div className="space-y-6">
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-[#E0F7FA] rounded-lg shadow-sm">
                    <MdShower className="text-[hsl(var(--primary))] text-xl" />
                </div>
                <h2 className="text-xl font-extrabold tracking-tight text-[hsl(var(--foreground))]">
                    Usage Category
                </h2>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* MEN'S SECTION */}
                <div className="bg-[#F4FBFC] border border-[hsl(var(--primary)/0.15)] rounded-2xl p-6 transition-all hover:shadow-md">
                    <div className="flex items-center gap-2 mb-6 border-b border-[hsl(var(--primary)/0.1)] pb-3">
                        <div className="p-1.5 bg-white rounded-md shadow-sm">
                            <FaPerson className="text-[hsl(var(--primary-dark))] text-lg" />
                        </div>
                        <h3 className="text-lg font-bold text-[hsl(var(--primary-dark))]">
                            Men's Facilities
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                        <InputField label="WC" />
                        <InputField label="Indian" />
                        <InputField label="Urinals" />
                        <InputField label="Shower" />
                        <InputField label="Basin" />
                    </div>
                </div>

                {/* WOMEN'S SECTION */}
                <div className="bg-[#FFF5F7] border border-rose-100 rounded-2xl p-6 transition-all hover:shadow-md">
                    <div className="flex items-center gap-2 mb-6 border-b border-rose-100 pb-3">
                        <div className="p-1.5 bg-white rounded-md shadow-sm">
                            <FaPersonDress className="text-rose-500 text-lg" />
                        </div>
                        <h3 className="text-lg font-bold text-rose-700">
                            Women's Facilities
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                        <InputField label="WC" colorScheme="rose" />
                        <InputField label="Indian" colorScheme="rose" />
                        <InputField label="Urinals" colorScheme="rose" />
                        <InputField label="Shower" colorScheme="rose" />
                        <InputField label="Basin" colorScheme="rose" />
                    </div>
                </div>

            </div>
        </div>
    );
}

function InputField({ label, colorScheme = "teal" }) {
    // Logic for dynamic color schemes
    const isTeal = colorScheme === "teal";

    return (
        <div className="flex flex-col gap-1.5">
            <label className={`text-xs font-bold uppercase tracking-wider ml-1 ${isTeal ? 'text-[hsl(var(--primary-dark))]' : 'text-rose-700'}`}>
                {label}
            </label>
            <input
                className={`
                    w-full px-4 py-2 rounded-xl text-sm font-semibold transition-all outline-none border
                    ${isTeal
                        ? 'bg-white border-[hsl(var(--primary)/0.2)] text-[hsl(var(--primary-dark))] focus:ring-2 focus:ring-[hsl(var(--primary))]'
                        : 'bg-white border-rose-200 text-rose-800 focus:ring-2 focus:ring-rose-400'
                    }
                `}
                type="number"
                min="0"
                defaultValue="0"
            />
        </div>
    );
}