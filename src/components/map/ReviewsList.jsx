// ReviewsList.jsx
import { Star, User, Quote } from "lucide-react";

export default function ReviewsList({ reviews }) {
    if (!reviews || reviews.length === 0) return null;

    return (
        <div className="space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                <Star className="w-4 h-4 text-cyan-500" /> Community Feedback
            </h3>

            <div className="space-y-3">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 transition-all hover:border-cyan-100"
                    >
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center overflow-hidden">
                                    {review.userImage ? (
                                        <img src={review.userImage} alt="" className="w-full h-full object-cover" />
                                    ) : (
                                        <User className="w-4 h-4 text-slate-400" />
                                    )}
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-800">{review.userName || "Verified User"}</p>
                                    <p className="text-[10px] text-slate-400 font-medium">{review.date || "Recently"}</p>
                                </div>
                            </div>

                            {/* Rating Badge */}
                            <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-lg border border-slate-100">
                                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                                <span className="text-[10px] font-black text-slate-700">{review.rating || "5.0"}</span>
                            </div>
                        </div>

                        <div className="relative">
                            <Quote className="absolute -left-1 -top-1 w-3 h-3 text-cyan-200 opacity-50" />
                            <p className="text-[11px] leading-relaxed text-slate-600 pl-3 italic">
                                "{review.comment}"
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}