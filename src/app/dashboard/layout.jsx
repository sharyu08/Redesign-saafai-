"use client";

import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: 250,
          background: "#020617",
          color: "#fff",
          padding: "16px 12px",
        }}
      >
        <Sidebar />
      </aside>

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar />
        <main style={{ padding: 24, background: "#f1f5f9", flex: 1 }}>
          {children}
        </main>
      </div>
    </div>
  );
}
