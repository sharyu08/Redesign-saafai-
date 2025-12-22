import { HiOutlineLocationMarker } from "react-icons/hi";

export default function LocationInfoSection() {
    return (
        <div className="space-y-6">
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-[#E0F7FA] rounded-lg shadow-sm">
                    <HiOutlineLocationMarker className="text-[hsl(var(--primary))] text-xl" />
                </div>
                <h2 className="text-xl font-extrabold tracking-tight text-[hsl(var(--foreground))]">
                    Location Information
                </h2>
            </div>

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">

                {/* 1. STATE */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider ml-1 text-[hsl(var(--muted-foreground))]">
                        State
                    </label>
                    <select className="w-full px-4 py-2.5 bg-[hsl(var(--input))] border border-[hsl(var(--border))] rounded-xl text-sm font-medium focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                        <option value="">Select or type state</option>
                        <option value="maharashtra">Maharashtra</option>
                        {/* Add other states */}
                    </select>
                </div>

                {/* 2. DISTRICT */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider ml-1 text-[hsl(var(--muted-foreground))]">
                        District
                    </label>
                    <input
                        type="text"
                        className="w-full px-4 py-2.5 bg-[hsl(var(--input))] border border-[hsl(var(--border))] rounded-xl text-sm font-medium focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent outline-none transition-all"
                        placeholder="Enter district name"
                    />
                </div>

                {/* 3. CITY */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider ml-1 text-[hsl(var(--muted-foreground))]">
                        City
                    </label>
                    <select className="w-full px-4 py-2.5 bg-[hsl(var(--input))] border border-[hsl(var(--border))] rounded-xl text-sm font-medium focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                        <option value="">Select or type city</option>
                        <option value="nagpur">Nagpur</option>
                        <option value="mumbai">Mumbai</option>
                        {/* Add other cities */}
                    </select>
                </div>

                {/* 4. PINCODE */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider ml-1 text-[hsl(var(--muted-foreground))]">
                        Pincode
                    </label>
                    <input
                        type="text"
                        maxLength={6}
                        className="w-full px-4 py-2.5 bg-[hsl(var(--input))] border border-[hsl(var(--border))] rounded-xl text-sm font-medium focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent outline-none transition-all font-mono"
                        placeholder="Enter 6-digit pincode"
                    />
                </div>

                {/* 5. FULL ADDRESS */}
                <div className="col-span-1 md:col-span-2 flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider ml-1 text-[hsl(var(--muted-foreground))]">
                        Full Address
                    </label>
                    <textarea
                        className="w-full px-4 py-3 bg-[hsl(var(--input))] border border-[hsl(var(--border))] rounded-xl text-sm font-medium focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent outline-none transition-all h-28 resize-none"
                        placeholder="Enter complete street address, landmark, and building details"
                    ></textarea>
                </div>

            </div>
        </div>
    );
}