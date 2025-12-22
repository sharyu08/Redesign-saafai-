export default function ReviewsList({ reviews }) {
    return (
        <div>
            <h3 className="font-semibold mb-3">User Reviews</h3>
            <div className="space-y-3">
                {reviews.map((r, i) => (
                    <div key={i} className="bg-muted p-3 rounded-lg">
                        <p className="text-sm">⭐ {r.rating}</p>
                        <p className="text-muted-foreground">{r.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
