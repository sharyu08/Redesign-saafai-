"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useResponsive } from "@/hooks/useResponsive";
import UserListMobile from "@/components/user-management/UserListMobile";
import { initialUserRows } from "@/components/user-management/data";
import "./index.css";

export default function UserManagementMobilePage() {
  const { isMobile } = useResponsive();
  const router = useRouter();
  const pathname = usePathname();
  const [users, setUsers] = useState(initialUserRows);

  useEffect(() => {
    if (!isMobile && pathname === "/dashboard/user-management/mobile") {
      router.replace("/dashboard/user-management");
    }
  }, [isMobile, pathname, router]);

  const handleDeleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div className="min-h-screen bg-background text-foreground padding-responsive">
      <div className="container-responsive space-y-4">
        <div className="page-header">
          <div className="page-header-content">
            <div className="page-header-title-section">
              <div className="page-header-icon">
                <span className="font-black text-lg">UM</span>
              </div>
              <div className="text-left">
                <h1 className="page-header-title">User Management</h1>
                <p className="page-header-subtitle">Mobile view — cards</p>
              </div>
            </div>
          </div>
        </div>

        <UserListMobile
          users={users}
          onDelete={handleDeleteUser}
          onView={(id) => router.push(`/dashboard/user-management/view/${id}`)}
          onEdit={(id) => router.push(`/dashboard/user-management/edit/${id}`)}
        />
      </div>
    </div>
  );
}
