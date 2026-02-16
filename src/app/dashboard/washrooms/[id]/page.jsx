"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Star, MapPin, Clock, User, Droplets, Phone, Mail } from 'lucide-react';

export default function WashroomItemPage() {
    const params = useParams();
    const router = useRouter();
    const [washroom, setWashroom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [companyId, setCompanyId] = useState(null);

    useEffect(() => {
        // Get companyId from URL query params
        const urlParams = new URLSearchParams(window.location.search);
        const companyIdParam = urlParams.get('companyId');
        setCompanyId(companyIdParam || '26');

        // Fetch actual washroom data from API
        const fetchWashroomData = async () => {
            try {
                const response = await fetch(`https://dash-backend-five.vercel.app/api/locations/saafai_locations?companyId=${companyIdParam || '26'}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log('API Response:', data);

                // Check if data exists - API returns direct array, not wrapped in data property
                if (data && Array.isArray(data)) {
                    // Find the specific washroom by ID (convert both to strings for comparison)
                    const washroomData = data.find(item =>
                        String(item.id) === String(params.id)
                    );

                    if (washroomData) {
                        console.log('Found washroom:', washroomData);
                        setWashroom({
                            id: washroomData.id,
                            name: washroomData.name || 'Unnamed Washroom',
                            address: washroomData.address || 'Address not available',
                            latitude: washroomData.latitude,
                            longitude: washroomData.longitude,
                            averageRating: washroomData.averageRating || 2.5,
                            ratingCount: washroomData.ratingCount || 0,
                            status: washroomData.status || 'active',
                            type: washroomData.type || 'WASHROOM',
                            is_public: washroomData.is_public !== false, // Default to true
                            created_at: washroomData.created_at || new Date().toISOString(),
                            options: {
                                genderAccess: washroomData.options?.genderAccess || ['MEN', 'WOMEN'],
                                isHandicapAccessible: washroomData.options?.isHandicapAccessible || true,
                                is24Hours: washroomData.options?.is24Hours || false,
                                hasAttendant: washroomData.options?.hasAttendant || true
                            },
                            cleaner_assignments: washroomData.cleaner_assignments || [
                                {
                                    id: 1,
                                    status: 'assigned',
                                    cleaner_user: {
                                        name: 'Suresh Mane',
                                        email: 'suresh.mane@saafai.com',
                                        phone: '+91 98765 43210'
                                    }
                                }
                            ],
                            amenities: washroomData.amenities || ['Water', 'Soap', 'Tissue Paper'],
                            images: washroomData.images && washroomData.images.length > 0
                                ? washroomData.images
                                : ['https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80']
                        });
                    } else {
                        console.error('Washroom not found with ID:', params.id);
                        console.log('Available IDs:', data.map(item => item.id));
                    }
                } else {
                    console.error('Invalid API response structure:', data);
                }
            } catch (error) {
                console.error('Error fetching washroom data:', error);
                // Set a default washroom to prevent complete failure
                setWashroom({
                    id: params.id,
                    name: 'Washroom Details',
                    address: 'Address not available',
                    latitude: 0,
                    longitude: 0,
                    averageRating: 0,
                    ratingCount: 0,
                    status: 'active',
                    type: 'WASHROOM',
                    is_public: true,
                    created_at: new Date().toISOString(),
                    options: {
                        genderAccess: ['MEN', 'WOMEN'],
                        isHandicapAccessible: true,
                        is24Hours: false,
                        hasAttendant: true
                    },
                    cleaner_assignments: [],
                    amenities: ['Water'],
                    images: ['https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80']
                });
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
                    <p className="mt-4 text-gray-600">Loading washroom details...</p>
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
                        <h1 className="text-2xl font-bold text-gray-900">Washroom Details</h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Image */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <img
                                src={washroom.images[0]}
                                alt={washroom.name}
                                className="w-full h-64 object-cover"
                            />
                        </div>

                        {/* Basic Info */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">{washroom.name}</h2>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-gray-400" />
                                    <span className="text-gray-700">{washroom.address}</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                    <span className="text-lg font-semibold">{washroom.averageRating}</span>
                                    <span className="text-gray-600">({washroom.ratingCount} reviews)</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-gray-400" />
                                    <span className="text-gray-700">
                                        {washroom.options?.is24Hours ? '24/7 Available' : 'Standard Hours'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Facility Availability */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Facility Availability</h3>
                            <div className="flex gap-3">
                                {washroom.options?.genderAccess?.map((access, index) => (
                                    <span
                                        key={index}
                                        className={`px-4 py-2 rounded-lg font-medium ${access === 'MEN' ? 'bg-blue-500 text-white' :
                                            access === 'WOMEN' ? 'bg-pink-500 text-white' :
                                                'bg-purple-500 text-white'
                                            }`}
                                    >
                                        {access}
                                    </span>
                                ))}
                                {washroom.options?.isHandicapAccessible && (
                                    <span className="px-4 py-2 rounded-lg bg-purple-500 text-white font-medium">
                                        DISABLED
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Amenities */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Amenities</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {washroom.amenities?.map((amenity, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <Droplets className="w-4 h-4 text-blue-500" />
                                        <span className="text-gray-700">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Cleaner Info */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Assigned Cleaner</h3>
                            {washroom.cleaner_assignments?.[0] && (
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <User className="w-5 h-5 text-gray-400" />
                                        <div>
                                            <p className="font-medium text-gray-900">
                                                {washroom.cleaner_assignments[0].cleaner_user?.name}
                                            </p>
                                            <span className="text-xs text-green-600 font-medium">ON DUTY</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-4 h-4 text-gray-400" />
                                        <span className="text-gray-700">
                                            {washroom.cleaner_assignments[0].cleaner_user?.phone}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-4 h-4 text-gray-400" />
                                        <span className="text-gray-700">
                                            {washroom.cleaner_assignments[0].cleaner_user?.email}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                                Start Navigation
                            </button>
                        </div>

                        {/* Status */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Status</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Facility Status</span>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${washroom.status === 'active' ? 'bg-green-100 text-green-800' :
                                        'bg-red-100 text-red-800'
                                        }`}>
                                        {washroom.status}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Public Access</span>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${washroom.is_public ? 'bg-blue-100 text-blue-800' :
                                        'bg-gray-100 text-gray-800'
                                        }`}>
                                        {washroom.is_public ? 'Public' : 'Private'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
