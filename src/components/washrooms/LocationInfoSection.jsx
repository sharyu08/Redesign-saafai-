"use client";

import { HiOutlineLocationMarker } from "react-icons/hi";

export default function LocationInfoSection() {
    return (
        <div className="space-y-6">
            {/* Section Header - Synchronized with Page Header tokens */}
            <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-xl bg-cyan-400/10 flex items-center justify-center border border-cyan-500/10 shadow-sm">
                    <HiOutlineLocationMarker className="text-cyan-600 dark:text-cyan-400 text-xl" />
                </div>
                <div>
                    <h2 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-[0.2em] leading-none">
                        Location Information
                    </h2>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 opacity-70">
                        Geographic Placement Details
                    </p>
                </div>
            </div>

            {/* Form Grid using standardized form-group logic */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">

                {/* 1. STATE */}
                <div className="form-group mb-0">
                    <label className="form-label mb-1.5 ml-1">
                        State
                    </label>
                    <select className="form-select pl-4 focus:ring-cyan-500/10 focus:border-cyan-500">
                        <option value="">Select or type state</option>
                        <option value="maharashtra">Maharashtra</option>
                    </select>
                </div>

                {/* 2. DISTRICT */}
                <div className="form-group mb-0">
                    <label className="form-label mb-1.5 ml-1">
                        District
                    </label>
                    <input
                        type="text"
                        className="form-input pl-4 focus:ring-cyan-500/10 focus:border-cyan-500"
                        placeholder="Enter district name"
                    />
                </div>

                {/* 3. CITY */}
                <div className="form-group mb-0">
                    <label className="form-label mb-1.5 ml-1">
                        City
                    </label>
                    <select className="form-select pl-4 focus:ring-cyan-500/10 focus:border-cyan-500">
                        <option value="">Select or type city</option>
                        <option value="nagpur">Nagpur</option>
                        <option value="mumbai">Mumbai</option>
                    </select>
                </div>

                {/* 4. PINCODE */}
                <div className="form-group mb-0">
                    <label className="form-label mb-1.5 ml-1">
                        Pincode
                    </label>
                    <input
                        type="text"
                        className="form-input pl-4 font-mono focus:ring-cyan-500/10 focus:border-cyan-500"
                        placeholder="Enter 6-digit pincode"
                        maxLength={6}
                    />
                </div>

                {/* 5. FULL ADDRESS */}
                <div className="col-span-1 md:col-span-2 form-group mb-0">
                    <label className="form-label mb-1.5 ml-1">
                        Full Address
                    </label>
                    <textarea
                        className="form-input pl-4 h-28 resize-none py-3 focus:ring-cyan-500/10 focus:border-cyan-500"
                        placeholder="Enter complete street address, landmark, and building details"
                    ></textarea>
                </div>

            </div>
        </div>
    );
}