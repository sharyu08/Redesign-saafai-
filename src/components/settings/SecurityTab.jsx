"use client";

import { KeyRound, ShieldCheck, Lock, Fingerprint, Loader2 } from "lucide-react";
import { InputField, ToggleButton, SaveButton } from "./SharedUI";
import { useState } from "react";

export default function SecurityTab({ onNotify }) {
    const [loading, setLoading] = useState(false);

    const save = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            onNotify("Security Settings Saved!");
        }, 1000);
    };

    return (
        <div className="space-y-10 animate-fade-in">
            {/* Header Section - Synchronized with Page Header logic */}
            <div className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
                <div className="h-12 w-12 rounded-2xl bg-cyan-400/10 flex items-center justify-center border border-cyan-500/10 shadow-sm">
                    <ShieldCheck className="text-cyan-600 dark:text-cyan-400" size={24} strokeWidth={2.5} />
                </div>
                <div className="text-left">
                    <h2 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-[0.2em] leading-none">
                        Security & Privacy
                    </h2>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 opacity-70">
                        Authentication Infrastructure Configuration
                    </p>
                </div>
            </div>

            {/* Standardized Card Container for Password Update */}
            <div className="card-global bg-slate-50/30 dark:bg-slate-800/10 border border-slate-100 dark:border-slate-800 p-8 rounded-[22px]">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                        <KeyRound className="h-4 w-4 text-cyan-600" />
                    </div>
                    <span className="text-[11px] font-black text-slate-700 dark:text-slate-200 uppercase tracking-[0.15em]">
                        Credential Matrix Update
                    </span>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* These SharedUI components should use .form-group internally */}
                    <InputField
                        label="Current Access Key"
                        type="password"
                        placeholder="••••••••"
                        icon={<Lock size={14} />}
                    />
                    <InputField
                        label="New Security String"
                        type="password"
                        placeholder="••••••••"
                        icon={<Fingerprint size={14} />}
                    />
                </div>
            </div>

            {/* Interaction Options - Standardized Toggle Buttons */}
            <div className="grid gap-4">
                <ToggleButton
                    label="Multi-Factor Authentication (MFA)"
                    description="Redundant security layer via biometric or mobile verification code."
                    icon={ShieldCheck}
                />
                <ToggleButton
                    label="Auto-Session Termination"
                    description="Automatic system logout after 30 minutes of operational inactivity."
                    active
                    icon={Lock}
                />
            </div>

            {/* Action Footer - Using .btn-primary orange gradient */}
            <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <button
                    onClick={save}
                    disabled={loading}
                    className="btn-primary flex items-center justify-center gap-3 px-12 py-3.5 rounded-xl text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-orange-500/20 active:scale-95 transition-all w-full md:w-auto"
                >
                    {loading ? (
                        <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span>Securing...</span>
                        </>
                    ) : (
                        "Commit Security Changes"
                    )}
                </button>
            </div>
        </div>
    );
}