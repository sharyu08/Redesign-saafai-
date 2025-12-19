"use client";

import CleanerReviewHeader from "@/components/cleanerReview/CleanerReviewHeader";
import TaskSummary from "@/components/cleanerReview/TaskSummary";
import TaskReview from "@/components/cleanerReview/TaskReview";
import VisualEvidence from "@/components/cleanerReview/VisualEvidence";

export default function CleanerReviewPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-sky-50 to-white p-6 space-y-6">
            <CleanerReviewHeader />

            <TaskSummary />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <TaskReview />
                <VisualEvidence />
            </div>
        </div>
    );
}
