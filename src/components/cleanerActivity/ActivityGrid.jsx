"use client";

import ActivityCard from "./ActivityCard";

const activities = [
    {
        id: "1",
        cleanerName: "Omkar saaf cleaner",
        location: "Narendra nagar square",
        finishedAt: "13/12/2025, 11:34 am",
        images: [1, 2, 3, 4, 5, 6],
    },
    {
        id: "2",
        cleanerName: "Omkar saaf cleaner",
        location: "Narendra under bridge",
        finishedAt: "13/12/2025, 11:13 am",
        images: [1, 2, 3],
    },
    {
        id: "3",
        cleanerName: "Omkar saaf cleaner",
        location: "Narendra nagar square",
        finishedAt: "13/12/2025, 11:20 am",
        images: [1, 2, 3, 4],
    },
    {
        id: "4",
        cleanerName: "Omkar saaf cleaner",
        location: "Narendra nagar square",
        finishedAt: "13/12/2025, 11:05 am",
        images: [1, 2],
    },
];

export default function ActivityGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
            ))}
        </div>
    );
}
