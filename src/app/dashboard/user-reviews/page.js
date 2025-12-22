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
    comment: "The washroom was very clean and well maintained.",
    createdAt: "2025-12-07T10:30:00Z",
    status: "none",
    washroomName: "Public Toilet - Block A",
    location: "Civil Lines",
  },
  {
    id: 2,
    userName: "Priya Verma",
    rating: 3,
    comment: "Average cleanliness, needs more frequent cleaning.",
    createdAt: "2025-12-06T14:15:00Z",
    status: "pending",
    washroomName: "Metro Station Washroom",
    location: "Sitabuldi",
  },
  {
    id: 3,
    userName: "Rajesh Kumar",
    rating: 2,
    comment: "Not clean at all. Needs immediate attention.",
    createdAt: "2025-12-05T09:45:00Z",
    status: "pending",
    washroomName: "Public Toilet - Block A",
    location: "Civil Lines",
  },
];

export default function UserReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [selectedRating, setSelectedRating] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredReviews = useMemo(() => {
    return reviews.filter((review) => {
      const matchesRating = selectedRating ? review.rating === selectedRating : true;
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
    /* Changed max-w-5xl to w-full and added standard dashboard padding */
    <div className="w-full py-8 px-8 bg-[#F8FAFB] min-h-screen text-left">
      <div className="max-w-[1600px] mx-auto"> {/* Optional max-width for ultra-wide monitors to keep content readable */}

        <ReviewHeader totalReviews={totalReviews} />

        {/* Filter Card Section - Full Width */}
        <div className="bg-white rounded-[24px] border border-slate-100 p-6 shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

            {/* Rating Filter Group */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <SlidersHorizontal size={14} /> Filter by rating
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedRating(null)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${selectedRating === null
                      ? "bg-[#58BECF] text-white border-[#58BECF] shadow-lg shadow-cyan-100"
                      : "bg-white text-slate-400 border-slate-100 hover:border-cyan-200"
                    }`}
                >
                  All Reviews
                </button>
                {ratingOptions.map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setSelectedRating(rating)}
                    className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${selectedRating === rating
                        ? "bg-[#F4B740] text-white border-[#F4B740] shadow-lg shadow-amber-100"
                        : "bg-white text-slate-400 border-slate-100 hover:border-amber-200"
                      }`}
                  >
                    {rating} ★
                  </button>
                ))}
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative group lg:w-96"> {/* Increased width for full-screen feel */}
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#58BECF]" size={18} />
              <input
                type="text"
                placeholder="Search Washroom or User..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-[20px] border border-slate-100 bg-[#F8FAFB] text-sm font-bold text-slate-700 outline-none focus:ring-4 focus:ring-cyan-50 focus:border-[#58BECF] transition-all"
              />
            </div>
          </div>
        </div>

        {/* Content Section - Full Width */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          {filteredReviews.length > 0 ? (
            <div className="grid grid-cols-1 gap-6"> {/* Can change to grid-cols-2 if you want side-by-side reviews on large screens */}
              <ReviewList
                reviews={filteredReviews}
                onToggleResolve={handleToggleResolve}
              />
            </div>
          ) : (
            <EmptyState />
          )}
        </section>

        <p className="mt-12 text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] text-center opacity-60">
          Data synchronized with SAAF System Node
        </p>
      </div>
    </div>
  );
}