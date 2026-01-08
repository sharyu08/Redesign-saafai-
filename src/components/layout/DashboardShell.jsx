"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function DashboardShell({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Sidebar */}
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed((v) => !v)}
      />

      {/* Fixed Header */}
      <Header onMenuClick={() => setSidebarOpen(true)} collapsed={collapsed} />

      {/* Main Content Area - Scrollable */}
      <main 
        className={`overflow-y-auto bg-background transition-all duration-200 pt-16 pb-20 px-4 md:px-8 py-6 min-h-[calc(100vh-64px)] ${
          collapsed ? 'md:ml-20' : 'md:ml-72'
        }`}
      >
        {children}
      </main>

      {/* Fixed Footer */}
      <Footer collapsed={collapsed} />

      {/* Mobile Overlay */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 z-30 bg-black/50 transition-opacity duration-200 md:hidden ${
          sidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />
    </div>
  );
}

