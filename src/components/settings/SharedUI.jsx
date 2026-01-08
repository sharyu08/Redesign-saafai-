"use client";
import { useState } from "react";
import { Save } from "lucide-react";

export function InputField({ label, value, type = "text", disabled = false, placeholder = "" }) {
    return (
        <div className="form-group">
            {/* Standardized Global Label */}
            <label className="form-label">{label}</label>
            <div className="relative">
                <input
                    type={type}
                    defaultValue={value}
                    disabled={disabled}
                    placeholder={placeholder}
                    /* Using global .form-input for consistent padding and colors */
                    className={`form-input !pl-5 ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
                />
            </div>
        </div>
    );
}

export function ToggleButton({ label, description, active = false }) {
    const [isOn, setIsOn] = useState(active);
    return (
        /* Using .bg-muted and .card-global logic for the container */
        <div className="p-5 bg-muted/50 dark:bg-muted/20 border border-border rounded-2xl flex items-center justify-between gap-4 transition-colors">
            <div>
                <p className="text-xs font-black text-foreground uppercase tracking-tight">{label}</p>
                <p className="text-[10px] text-muted-foreground font-bold">{description}</p>
            </div>
            <button
                onClick={() => setIsOn(!isOn)}
                /* Using primary-medium for active state and border variables for track */
                className={`w-12 h-6 rounded-full transition-colors relative outline-none focus:ring-2 focus:ring-primary-light/30 ${isOn ? "bg-primary-medium" : "bg-border dark:bg-slate-700"
                    }`}
            >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-sm ${isOn ? "right-1" : "left-1"
                    }`} />
            </button>
        </div>
    );
}

export function SaveButton({ onClick, loading }) {
    return (
        /* Using .border-border for the divider */
        <div className="mt-12 pt-8 border-t border-border flex justify-end">
            <button
                onClick={onClick}
                disabled={loading}
                /* Switched from inline style to your global .btn-primary or .btn-gradient */
                className="btn-primary px-10 py-4 shadow-lg shadow-primary-medium/20 active:scale-95 disabled:opacity-50 flex items-center gap-2"
            >
                {loading ? (
                    <span className="animate-pulse">Saving...</span>
                ) : (
                    <>
                        <Save className="h-4 w-4" />
                        <span className="font-black text-[10px] uppercase tracking-widest">Save Changes</span>
                    </>
                )}
            </button>
        </div>
    );
}