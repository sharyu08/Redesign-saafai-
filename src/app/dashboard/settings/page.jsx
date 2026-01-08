"use client";

import { useState } from "react";
import { User, Bell, Map, Shield, CheckCircle2 } from "lucide-react";
import ProfileTab from "@/components/settings/ProfileTab";
import NotificationsTab from "@/components/settings/NotificationsTab";
import ZonalTab from "@/components/settings/ZonalTab";
import SecurityTab from "@/components/settings/SecurityTab";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("profile");
    const [message, setMessage] = useState("");

    const notify = (msg) => {
        setMessage(msg);
        setTimeout(() => setMessage(""), 3000);
    };

    const tabs = [
        { id: "profile", label: "Profile", icon: User, component: ProfileTab },
        { id: "notifications", label: "Notifications", icon: Bell, component: NotificationsTab },
        { id: "zonal", label: "Zonal Config", icon: Map, component: ZonalTab },
        { id: "security", label: "Security", icon: Shield, component: SecurityTab },
    ];

    const activeTabData = tabs.find(t => t.id === activeTab);
    const ActiveComponent = activeTabData.component;

    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-8 animate-fade-in">
            {/* Standardized Page Header */}
            <header className="page-header">
                <div className="page-header-content">
                    <div className="page-header-title-section">
                        <div className="page-header-icon">
                            <activeTabData.icon className="icon" size={24} />
                        </div>
                        <div>
                            <h1 className="page-header-title">Account Settings</h1>
                            <p className="page-header-subtitle">
                                Manage your Safai Portal preferences
                            </p>
                        </div>
                    </div>

                    {message && (
                        <div className="flex items-center gap-2 px-4 py-2 bg-accent-green/10 text-accent-green rounded-xl border border-accent-green/20 animate-bounce">
                            <CheckCircle2 className="h-4 w-4" />
                            <span className="text-[10px] font-black uppercase tracking-widest">{message}</span>
                        </div>
                    )}
                </div>
            </header>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Navigation */}
                <aside className="w-full lg:w-64 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-shrink-0 flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all ${isActive
                                        ? "btn-primary shadow-lg" // Uses your standardized primary button style
                                        : "text-muted-foreground hover:bg-muted"
                                    }`}
                            >
                                <tab.icon className={`h-4 w-4 ${isActive ? "text-white" : "text-primary-light"}`} />
                                <span className="font-black text-[10px] uppercase tracking-widest">
                                    {tab.label}
                                </span>
                            </button>
                        );
                    })}
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 card-global relative overflow-hidden">
                    <ActiveComponent onNotify={notify} />
                </main>
            </div>
        </div>
    );
}