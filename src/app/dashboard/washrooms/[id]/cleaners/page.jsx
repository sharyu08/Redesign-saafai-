"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, User, Plus, Phone, Mail, Calendar } from "lucide-react";

export default function WashroomCleanersPage() {
    const params = useParams();
    const router = useRouter();
    const [washroom, setWashroom] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWashroomData = async () => {
            try {
                const response = await fetch(`https://dash-backend-five.vercel.app/api/locations/saafai_locations?companyId=26`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                
                if (Array.isArray(data)) {
                    const washroomData = data.find(item => 
                        String(item.id) === String(params.id)
                    );
                    
                    if (washroomData) {
                        setWashroom({
                            id: washroomData.id,
                            name: washroomData.name || 'Unnamed Washroom',
                            cleaner_assignments: washroomData.cleaner_assignments || []
                        });
                    }
                }
            } catch (error) {
                console.error('Error fetching washroom data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (params.id) {
            fetchWashroomData();
        }
    }, [params.id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    if (!washroom) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-600">Washroom not found</p>
                    <button
                        onClick={() => router.back()}
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => router.back()}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Cleaners</h1>
                            <p className="text-sm text-gray-600">{washroom.name}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-sm">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-semibold text-gray-900">Assigned Cleaners</h2>
                            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                <Plus className="w-4 h-4" />
                                Assign Cleaner
                            </button>
                        </div>

                        {washroom.cleaner_assignments && washroom.cleaner_assignments.length > 0 ? (
                            <div className="space-y-4">
                                {washroom.cleaner_assignments.map((assignment) => (
                                    <div key={assignment.id} className="border border-gray-200 rounded-lg p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                                    <User className="w-6 h-6 text-blue-600" />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium text-gray-900">
                                                        {assignment.cleaner_user?.name || 'Unknown'}
                                                    </h3>
                                                    <div className="flex items-center gap-4 mt-1">
                                                        <div className="flex items-center gap-1 text-sm text-gray-600">
                                                            <Phone className="w-4 h-4" />
                                                            {assignment.cleaner_user?.phone || 'No phone'}
                                                        </div>
                                                        <div className="flex items-center gap-1 text-sm text-gray-600">
                                                            <Mail className="w-4 h-4" />
                                                            {assignment.cleaner_user?.email || 'No email'}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                    assignment.status === 'assigned' 
                                                        ? 'bg-green-100 text-green-800' 
                                                        : 'bg-gray-100 text-gray-800'
                                                }`}>
                                                    {assignment.status || 'Unknown'}
                                                </span>
                                                {assignment.assigned_on && (
                                                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-2">
                                                        <Calendar className="w-3 h-3" />
                                                        Assigned: {new Date(assignment.assigned_on).toLocaleDateString()}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <User className="w-8 h-8 text-gray-400" />
                                </div>
                                <p className="text-gray-600">No cleaners assigned to this washroom</p>
                                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                    Assign First Cleaner
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
