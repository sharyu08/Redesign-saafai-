"use client";

import { HiOutlineLocationMarker } from "react-icons/hi";

export default function LocationInfoSection() {
    return (
        <div className="space-y-8">
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-xl bg-cyan-400/5 flex items-center justify-center border border-cyan-500/10 shadow-sm">
                    <HiOutlineLocationMarker className="text-cyan-500/70 dark:text-cyan-400/70 text-xl" />
                </div>
                <div>
                    <h2 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-[0.2em] leading-none">
                        Location Information
                    </h2>
                    <p className="text-[10px] font-normal text-slate-400 uppercase tracking-widest mt-1.5">
                        Geographic Placement Details
                    </p>
                </div>
            </div>

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

                {/* 1. STATE */}
                <div className="form-group mb-0">
                    <label className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block ml-1">
                        State
                    </label>
                    <select
                        defaultValue=""
                        className="w-full h-11 pl-4 pr-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/30 dark:bg-slate-800/20 text-sm font-normal text-slate-600 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/5 transition-all outline-none appearance-none invalid:text-slate-300"
                        required
                    >
                        <option value="" disabled className="text-slate-300 font-normal">Select or type state</option>
                        <option value="maharashtra" className="text-slate-600">Maharashtra</option>
                    </select>
                </div>

                {/* 2. DISTRICT */}
                <div className="form-group mb-0">
                    <label className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block ml-1">
                        District
                    </label>
                    <input
                        type="text"
                        className="w-full h-11 pl-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/30 dark:bg-slate-800/20 text-sm font-normal text-slate-600 placeholder:text-slate-300 placeholder:font-normal dark:placeholder:text-slate-600 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/5 transition-all outline-none"
                        placeholder="Enter district name"
                    />
                </div>

                {/* 3. CITY */}
                <div className="form-group mb-0">
                    <label className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block ml-1">
                        City
                    </label>
                    <select
                        defaultValue=""
                        className="w-full h-11 pl-4 pr-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/30 dark:bg-slate-800/20 text-sm font-normal text-slate-600 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/5 transition-all outline-none appearance-none invalid:text-slate-300"
                        required
                    >
                        <option value="" disabled className="text-slate-300 font-normal">Select or type city</option>
                        <option value="nagpur" className="text-slate-600">Nagpur</option>
                        <option value="mumbai" className="text-slate-600">Mumbai</option>
                    </select>
                </div>

                {/* 4. PINCODE */}
                <div className="form-group mb-0">
                    <label className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block ml-1">
                        Pincode
                    </label>
                    <input
                        type="text"
                        className="w-full h-11 pl-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/30 dark:bg-slate-800/20 text-sm font-mono font-normal text-slate-600 placeholder:text-slate-300 placeholder:font-normal dark:placeholder:text-slate-600 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/5 transition-all outline-none"
                        placeholder="000000"
                        maxLength={6}
                    />
                </div>

                {/* 5. FULL ADDRESS */}
                <div className="col-span-1 md:col-span-2 form-group mb-0">
                    <label className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block ml-1">
                        Full Address
                    </label>
                    <textarea
                        className="w-full h-28 pl-4 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/30 dark:bg-slate-800/20 text-sm font-normal text-slate-600 placeholder:text-slate-300 placeholder:font-normal dark:placeholder:text-slate-600 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/5 transition-all outline-none resize-none"
                        placeholder="Enter complete street address, landmark, and building details"
                    ></textarea>
                </div>
            </div>
        </div>
    );
}