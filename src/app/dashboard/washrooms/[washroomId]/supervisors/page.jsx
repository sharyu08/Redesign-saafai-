import AssignedSupervisorHeader from "@/components/assigned-supervisors/AssignedSupervisorHeader";
import SupervisorStats from "@/components/assigned-supervisors/SupervisorStats";
import SupervisorFilters from "@/components/assigned-supervisors/SupervisorFilters";
import EmptySupervisorState from "@/components/assigned-supervisors/EmptySupervisorState";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SupervisorsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-background p-6 space-y-6">
            <Link href="/dashboard/washrooms">
                <button className="btn btn-icon inline-flex h-10 w-10 items-center justify-center active:scale-95">
                    <ArrowLeft className="h-5 w-5" />
                </button>
            </Link>
            <AssignedSupervisorHeader />
            <SupervisorStats />
            <SupervisorFilters />
            <EmptySupervisorState />
        </div>
    );
}
