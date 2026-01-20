"use client";

import { useState, useMemo } from "react";
import ReviewHeader from "@/components/userReviews/ReviewHeader";
import ReviewList from "@/components/userReviews/ReviewList";
import EmptyState from "@/components/userReviews/EmptyState";
import { Search, SlidersHorizontal } from "lucide-react";

const initialReviews = [
  {
    id: 1,
    userName: "Amit Sharma",
    rating: 5,
    comment: "The washroom was very clean and well maintained. Excellent facilities and regular cleaning schedule.",
    createdAt: "2025-12-07T10:30:00Z",
    status: "none",
    washroomName: "Public Toilet - Block A",
    location: "Civil Lines",
  },
  {
    id: 2,
    userName: "Priya Verma",
    rating: 3,
    comment: "Average cleanliness, needs more frequent cleaning. The soap dispensers were empty.",
    createdAt: "2025-12-06T14:15:00Z",
    status: "pending",
    washroomName: "Metro Station Washroom",
    location: "Sitabuldi",
  },
  {
    id: 3,
    userName: "Rajesh Kumar",
    rating: 2,
    comment: "Not clean at all. Needs immediate attention. Very poor maintenance.",
    createdAt: "2025-12-05T09:45:00Z",
    status: "pending",
    washroomName: "Public Toilet - Block A",
    location: "Civil Lines",
  },
  {
    id: 4,
    userName: "Anita Deshmukh",
    rating: 4,
    comment: "Good overall cleanliness. Could improve on stocking supplies regularly.",
    createdAt: "2025-12-04T16:20:00Z",
    status: "resolved",
    washroomName: "Shopping Mall Washroom",
    location: "Sadar Bazaar",
  },
  {
    id: 5,
    userName: "Vikram Singh",
    rating: 5,
    comment: "Outstanding facilities! Very clean and well-maintained. Staff is helpful.",
    createdAt: "2025-12-03T11:10:00Z",
    status: "resolved",
    washroomName: "Airport Lounge Washroom",
    location: "Dr. Babasaheb Ambedkar International Airport",
  },
  {
    id: 6,
    userName: "Meera Patel",
    rating: 1,
    comment: "Terrible condition. No water, dirty floors, broken fixtures. Unacceptable.",
    createdAt: "2025-12-02T13:45:00Z",
    status: "pending",
    washroomName: "Bus Terminal Washroom",
    location: "Gandhi Bagh",
  },
  {
    id: 7,
    userName: "Rohan Joshi",
    rating: 4,
    comment: "Clean and tidy. Good ventilation. Minor issues with paper towel dispensers.",
    createdAt: "2025-12-01T09:30:00Z",
    status: "none",
    washroomName: "Hospital Visitor Washroom",
    location: "Medical Square",
  },
  {
    id: 8,
    userName: "Kavita Nair",
    rating: 3,
    comment: "Decent cleanliness but needs attention to detail. Some areas were missed.",
    createdAt: "2025-11-30T15:20:00Z",
    status: "resolved",
    washroomName: "Railway Station Washroom",
    location: "Nagpur Railway Station",
  },
  {
    id: 9,
    userName: "Arjun Mehta",
    rating: 5,
    comment: "Excellent maintenance! Spotless clean, fresh fragrance, all supplies available.",
    createdAt: "2025-11-29T08:15:00Z",
    status: "none",
    washroomName: "Corporate Office Washroom",
    location: "IT Park",
  },
  {
    id: 10,
    userName: "Divya Reddy",
    rating: 2,
    comment: "Poor hygiene standards. Dirty toilets, no hand soap, unpleasant odor.",
    createdAt: "2025-11-28T12:40:00Z",
    status: "pending",
    washroomName: "Public Park Restroom",
    location: "Telangkhedi Garden",
  },
  {
    id: 11,
    userName: "Suresh Kumar",
    rating: 4,
    comment: "Well maintained facilities. Regular cleaning schedule followed. Good job!",
    createdAt: "2025-11-27T10:55:00Z",
    status: "resolved",
    washroomName: "College Campus Washroom",
    location: "Ramdaspeth",
  },
  {
    id: 12,
    userName: "Pooja Sharma",
    rating: 3,
    comment: "Average facilities. Cleanliness could be improved during peak hours.",
    createdAt: "2025-11-26T14:30:00Z",
    status: "none",
    washroomName: "Restaurant Washroom",
    location: "Mount Road",
  },
  {
    id: 13,
    userName: "Amitabh Desai",
    rating: 5,
    comment: "World-class facilities! Impeccably clean, modern amenities, excellent maintenance.",
    createdAt: "2025-11-25T09:20:00Z",
    status: "resolved",
    washroomName: "Five Star Hotel Washroom",
    location: "Ajni Square",
  },
  {
    id: 14,
    userName: "Neha Gupta",
    rating: 1,
    comment: "Extremely unsanitary conditions. Overflowing bins, wet floors, broken locks.",
    createdAt: "2025-11-24T16:45:00Z",
    status: "pending",
    washroomName: "Market Complex Washroom",
    location: "Itwari",
  },
  {
    id: 15,
    userName: "Ravi Choudhary",
    rating: 4,
    comment: "Good standards maintained. Clean, well-stocked, pleasant environment.",
    createdAt: "2025-11-23T11:35:00Z",
    status: "none",
    washroomName: "Government Office Washroom",
    location: "Civil Court",
  },
];

// ⭐ Rating color map (ONLY active state uses color)
const ratingColorMap = {
  5: "bg-green-100 text-green-700 border-green-300",
  4: "bg-blue-100 text-blue-700 border-blue-300",
  3: "bg-amber-100 text-amber-700 border-amber-300",
  2: "bg-orange-100 text-orange-700 border-orange-300",
  1: "bg-red-100 text-red-700 border-red-300",
};

export default function UserReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [selectedRating, setSelectedRating] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredReviews = useMemo(() => {
    return reviews.filter((review) => {
      const matchesRating = selectedRating
        ? review.rating === selectedRating
        : true;
      const matchesSearch =
        review.washroomName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.userName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRating && matchesSearch;
    });
  }, [reviews, selectedRating, searchQuery]);

  const totalReviews = filteredReviews.length;

  const handleToggleResolve = (reviewId) => {
    setReviews((prev) =>
      prev.map((review) => {
        if (review.id !== reviewId) return review;
        if (review.status === "pending") return { ...review, status: "resolved" };
        if (review.status === "resolved") return { ...review, status: "pending" };
        return review;
      })
    );
  };

  const ratingOptions = [5, 4, 3, 2, 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 lg:py-8">

        {/* Header */}
        <ReviewHeader totalReviews={totalReviews} />

        {/* ================= STATS DASHBOARD ================= */}
        <div className="mb-6 lg:mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
            {/* Total Reviews Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl lg:rounded-2xl border border-slate-200 dark:border-slate-700 p-3 lg:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2 lg:mb-4">
                <div className="h-8 w-8 lg:h-12 lg:w-12 rounded-lg lg:rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                  <div className="h-4 w-4 lg:h-6 lg:w-6 rounded-full bg-blue-500"></div>
                </div>
                <span className="text-[10px] lg:text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total</span>
              </div>
              <div className="space-y-1">
                <p className="text-xl lg:text-3xl font-bold text-slate-900 dark:text-white">{totalReviews}</p>
                <p className="text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-400">Reviews</p>
              </div>
            </div>

            {/* Pending Reviews Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl lg:rounded-2xl border border-slate-200 dark:border-slate-700 p-3 lg:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2 lg:mb-4">
                <div className="h-8 w-8 lg:h-12 lg:w-12 rounded-lg lg:rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center">
                  <div className="h-4 w-4 lg:h-6 lg:w-6 rounded-full bg-amber-500"></div>
                </div>
                <span className="text-[10px] lg:text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Pending</span>
              </div>
              <div className="space-y-1">
                <p className="text-xl lg:text-3xl font-bold text-slate-900 dark:text-white">{reviews.filter(r => r.status === 'pending').length}</p>
                <p className="text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-400">Action Required</p>
              </div>
            </div>

            {/* Resolved Reviews Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl lg:rounded-2xl border border-slate-200 dark:border-slate-700 p-3 lg:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2 lg:mb-4">
                <div className="h-8 w-8 lg:h-12 lg:w-12 rounded-lg lg:rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                  <div className="h-4 w-4 lg:h-6 lg:w-6 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-[10px] lg:text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Resolved</span>
              </div>
              <div className="space-y-1">
                <p className="text-xl lg:text-3xl font-bold text-slate-900 dark:text-white">{reviews.filter(r => r.status === 'resolved').length}</p>
                <p className="text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-400">Completed</p>
              </div>
            </div>

            {/* Average Rating Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl lg:rounded-2xl border border-slate-200 dark:border-slate-700 p-3 lg:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2 lg:mb-4">
                <div className="h-8 w-8 lg:h-12 lg:w-12 rounded-lg lg:rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                  <div className="text-lg lg:text-2xl font-bold text-indigo-600 dark:text-indigo-400">★</div>
                </div>
                <span className="text-[10px] lg:text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Average</span>
              </div>
              <div className="space-y-1">
                <p className="text-xl lg:text-3xl font-bold text-slate-900 dark:text-white">{(reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)}</p>
                <p className="text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-400">Rating Score</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FILTER & SEARCH SECTION ================= */}
        <div className="bg-white dark:bg-slate-800 rounded-xl lg:rounded-2xl border border-slate-200 dark:border-slate-700 p-4 lg:p-6 shadow-sm mb-6 lg:mb-8">
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 lg:gap-6">

            {/* Rating Filters */}
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="h-6 w-6 lg:h-8 lg:w-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                  <SlidersHorizontal size={12} className="text-slate-600 dark:text-slate-400 lg:text-base lg:w-5 lg:h-5" />
                </div>
                <h3 className="text-xs lg:text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Filter by Rating</h3>
              </div>

              <div className="flex flex-wrap gap-1.5 lg:gap-2">
                {/* All Reviews */}
                <button
                  onClick={() => setSelectedRating(null)}
                  className={`px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg font-medium text-xs lg:text-sm transition-all duration-200 ${selectedRating === null
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                    }`}
                >
                  All Reviews
                </button>

                {/* Rating Buttons */}
                {ratingOptions.map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setSelectedRating(rating)}
                    className={`px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg font-medium text-xs lg:text-sm transition-all duration-200 flex items-center gap-1 lg:gap-1.5 ${selectedRating === rating
                      ? `${ratingColorMap[rating]} shadow-md`
                      : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                      }`}
                  >
                    {rating} <span className="text-sm lg:text-base">★</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative group flex-1 max-w-xs lg:max-w-md">
              <div className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-600 transition-colors z-10">
                <Search size={16} className="lg:w-5 lg:h-5" strokeWidth={2} />
              </div>
              <input
                type="text"
                placeholder="Search reviews..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 lg:pl-12 pr-3 lg:pr-4 py-2 lg:py-3 rounded-lg lg:rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium focus:border-slate-400 focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-600 transition-all duration-200 text-sm"
              />
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          {filteredReviews.length > 0 ? (
            <div className="space-y-3 lg:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between px-2 gap-2">
                <h2 className="text-base lg:text-lg font-bold text-slate-900 dark:text-white">
                  Review Results
                </h2>
                <p className="text-xs lg:text-sm font-medium text-slate-500 dark:text-slate-400">
                  {filteredReviews.length} {filteredReviews.length === 1 ? 'review' : 'reviews'} found
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl lg:rounded-2xl shadow-sm overflow-hidden">
                <ReviewList
                  reviews={filteredReviews}
                  onToggleResolve={handleToggleResolve}
                />
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-800 rounded-xl lg:rounded-2xl border border-slate-200 dark:border-slate-700 p-6 lg:p-12 text-center shadow-sm">
              <div className="max-w-sm lg:max-w-md mx-auto">
                <div className="h-12 w-12 lg:h-16 lg:w-16 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <Search size={20} className="lg:w-7 lg:h-7 text-slate-400 dark:text-slate-500" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-slate-900 dark:text-white mb-2 lg:mb-3">No Reviews Found</h3>
                <p className="text-sm lg:text-base text-slate-600 dark:text-slate-400 mb-4 lg:mb-6">
                  {searchQuery
                    ? `No reviews found matching "${searchQuery}"`
                    : selectedRating
                      ? `No ${selectedRating}-star reviews found`
                      : "No reviews available"
                  }
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedRating(null);
                  }}
                  className="px-4 py-2 lg:px-6 lg:py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors text-sm lg:text-base"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
