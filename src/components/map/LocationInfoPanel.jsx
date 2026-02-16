"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { X, Star, User, Droplets, MessageSquare, Navigation } from 'lucide-react';

const LocationInfoPanel = ({ selectedLocation, onClose, companyId }) => {
  if (!selectedLocation) return null;

  const router = useRouter();

  return (
    <div className="absolute top-0 right-0 h-full w-96 bg-white shadow-lg z-10 overflow-y-auto">
      <div className="p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header - Clean Design */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            {selectedLocation.name || "Unnamed Location"}
          </h2>
          <p className="text-sm text-gray-600">
            {selectedLocation.address || "Location details"}
          </p>
        </div>

        {/* Rating and Time */}
        <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="text-2xl font-bold text-gray-900">
              {selectedLocation.averageRating !== null && selectedLocation.averageRating > 0
                ? selectedLocation.averageRating.toFixed(1)
                : "2.5"
              }
            </span>
            <span className="text-sm text-gray-600">/ 5.0</span>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">5 MIN AWAY</p>
          </div>
        </div>

        {/* Facility Availability */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">FACILITY AVAILABILITY</h3>
          <div className="flex gap-2">
            <button className={`px-4 py-2 rounded-lg text-sm font-medium ${selectedLocation.options?.genderAccess?.includes('MEN') || selectedLocation.options?.genderAccess?.includes('EN') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
              MEN
            </button>
            <button className={`px-4 py-2 rounded-lg text-sm font-medium ${selectedLocation.options?.genderAccess?.includes('WOMEN') || selectedLocation.options?.genderAccess?.includes('FEMALE') ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
              WOMEN
            </button>
            <button className={`px-4 py-2 rounded-lg text-sm font-medium ${selectedLocation.options?.isHandicapAccessible ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
              DISABLED
            </button>
          </div>
        </div>

        {/* Key Performance */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">KEY PERFORMANCE</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-gray-700">Rating</span>
              </div>
              <span className="text-sm font-medium text-gray-900">
                {selectedLocation.averageRating !== null && selectedLocation.averageRating > 0
                  ? selectedLocation.averageRating.toFixed(1)
                  : "2.5"
                }
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-700">Main Cleaner</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  {selectedLocation.cleaner_assignments?.[0]?.cleaner_user?.name || 'Suresh Mane'}
                </p>
                <span className="text-xs text-green-600 font-medium">ON DUTY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Facility Amenities */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">FACILITY AMENITIES</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <Droplets className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-gray-700">Water</span>
            </div>
            {selectedLocation.options?.is24Hours && (
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <span className="text-green-500">24/7</span>
                <span className="text-sm text-gray-700">Available</span>
              </div>
            )}
          </div>
        </div>

        {/* Community Feedback */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">COMMUNITY FEEDBACK</h3>
          <div className="flex items-center gap-2 p-3 bg-yellow-50 rounded-lg">
            <MessageSquare className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-700">12 reviews this month</span>
          </div>
        </div>

        {/* Start Navigation Button */}
        <div className="mb-4">
          <button
            onClick={() => {
              router.push(
                `/dashboard/washrooms/${selectedLocation.id}?companyId=${companyId || 26}`,
              );
            }}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Navigation className="w-4 h-4" />
            START NAVIGATION →
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationInfoPanel;