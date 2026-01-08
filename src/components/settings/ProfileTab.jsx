"use client";

import { Camera, Loader2, User, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function ProfileTab({ onNotify }) {
    const [loading, setLoading] = useState(false);

    const save = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            onNotify("Profile Updated!");
        }, 1000);
    };

    return (
        <div className="space-y-10 animate-fade-in">
            {/* Avatar Section using established .icon-container logic */}
            <div className="flex items-center gap-6">
                <div className="relative group">
                    <div className="h-24 w-24 rounded-2xl border-2 border-slate-100 dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-slate-900 shadow-sm">
                        <img
                            src="/image/dashboard img.png"
                            alt="Avatar"
                            className="h-full w-full object-cover transition-transform group-hover:scale-110 duration-500"
                        />
                    </div>
                    {/* Camera Button using .btn-primary orange gradient tokens */}
                    <button className="absolute -bottom-2 -right-2 p-2.5 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-xl border-4 border-white dark:border-slate-900 shadow-lg hover:scale-110 active:scale-90 transition-all">
                        <Camera className="h-4 w-4" strokeWidth={2.5} />
                    </button>
                </div>
                <div className="text-left">
                    <h3 className="text-xl font-black text-slate-800 dark:text-slate-100 uppercase tracking-tight">
                        Omkar Saaf
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="badge-role supervisor">
                            <ShieldCheck size={10} className="mr-1" />
                            Zonal Supervisor
                        </span>
                    </div>
                </div>
            </div>

            {/* Form Section using .form-group and .form-input architecture */}
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="form-group mb-0">
                    <label className="form-label mb-2 ml-1">Full Name Architecture</label>
                    <input
                        type="text"
                        className="form-input font-bold"
                        defaultValue="Omkar Saaf"
                    />
                </div>

                <div className="form-group mb-0">
                    <label className="form-label mb-2 ml-1">Official Registry Email</label>
                    <input
                        type="email"
                        className="form-input bg-slate-50/50 dark:bg-slate-800/10 cursor-not-allowed opacity-70"
                        defaultValue="omkar.saaf@safai.gov.in"
                        disabled
                    />
                </div>

                <div className="form-group mb-0">
                    <label className="form-label mb-2 ml-1">Phone Metadata</label>
                    <input
                        type="text"
                        className="form-input font-mono font-bold"
                        defaultValue="+91 98765 43210"
                    />
                </div>

                <div className="form-group mb-0">
                    <label className="form-label mb-2 ml-1">Assigned Operational Zone</label>
                    <input
                        type="text"
                        className="form-input bg-slate-50/50 dark:bg-slate-800/10 cursor-not-allowed opacity-70"
                        defaultValue="Nagpur Urban"
                        disabled
                    />
                </div>
            </div>

            {/* Action Footer using .btn-primary orange gradient */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <button
                    onClick={save}
                    disabled={loading}
                    className="btn-primary flex items-center justify-center gap-3 px-10 py-3.5 rounded-xl text-sm font-black uppercase tracking-[0.15em] shadow-xl shadow-orange-500/20 active:scale-95 transition-all w-full md:w-auto"
                >
                    {loading ? (
                        <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span>Updating Grid...</span>
                        </>
                    ) : (
                        "Update "
                    )}
                </button>
            </div>
        </div>
    );
}