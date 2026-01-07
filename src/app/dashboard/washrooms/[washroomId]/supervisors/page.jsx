import AssignedSupervisorHeader from "@/components/assigned-supervisors/AssignedSupervisorHeader";
import SupervisorStats from "@/components/assigned-supervisors/SupervisorStats";
import SupervisorFilters from "@/components/assigned-supervisors/SupervisorFilters";
import EmptySupervisorState from "@/components/assigned-supervisors/EmptySupervisorState";

export default function SupervisorsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-background p-6 space-y-6">
            <AssignedSupervisorHeader />
            <SupervisorStats />
            <SupervisorFilters />
            <EmptySupervisorState />
        </div>
    );
}
