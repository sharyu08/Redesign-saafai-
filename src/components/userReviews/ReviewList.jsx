import ReviewCard from "./ReviewCard";

export default function ReviewList({ reviews, onToggleResolve, onMarkIssue }) {
  return (
    <div className="space-y-4 w-full">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="animate-in fade-in slide-in-from-bottom-2 duration-500"
        >
          <ReviewCard
            review={review}
            onToggleResolve={onToggleResolve}
            onMarkIssue={onMarkIssue}
          />
        </div>
      ))}
    </div>
  );
}