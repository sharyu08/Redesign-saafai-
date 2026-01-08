"use client";

import { Building2, MapPin, Factory, Camera } from "lucide-react";

export default function WashroomDetailsForm() {
    return (
        /* Using .card-global for consistent rounding and Oceanic shadow */
        <div className="card-global">
            {/* Header synced with Page Header Title tokens */}
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="h-10 w-10 rounded-xl bg-cyan-400/10 flex items-center justify-center border border-cyan-500/10">
                    <Building2 size={20} className="text-cyan-600 dark:text-cyan-400" strokeWidth={2.5} />
                </div>
                <div>
                    <h2 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-[0.2em] leading-none">
                        Washroom Architecture
                    </h2>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 opacity-70">
                        Primary Facility Configuration
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

                {/* Washroom Name - Form Group Logic */}
                <div className="form-group">
                    <label className="form-label">
                        Washroom Name <span className="form-label-required">*</span>
                    </label>
                    <div className="form-input-wrapper">
                        <Building2 className="form-input-icon" size={16} />
                        <input
                            className="form-input"
                            placeholder="Enter primary facility name"
                        />
                    </div>
                </div>

                {/* Location (Nearby) */}
                <div className="form-group">
                    <label className="form-label">Location (Nearby Landmark)</label>
                    <div className="form-input-wrapper">
                        <MapPin className="form-input-icon" size={16} />
                        <input
                            className="form-input"
                            placeholder="e.g. Near West Entrance Gate"
                        />
                    </div>
                </div>

                {/* Facility Company */}
                <div className="form-group">
                    <label className="form-label">Maintenance / Facility Company</label>
                    <div className="form-input-wrapper">
                        <Factory className="form-input-icon" size={16} />
                        <input
                            className="form-input"
                            placeholder="Enter service provider name"
                        />
                    </div>
                </div>

                {/* Number of Photos */}
                <div className="form-group">
                    <label className="form-label">Archive Image Count</label>
                    <div className="form-input-wrapper">
                        <Camera className="form-input-icon" size={16} />
                        <input
                            className="form-input"
                            type="number"
                            placeholder="0"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}