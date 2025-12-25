import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating = ({ rating, maxRating = 5 }: StarRatingProps) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: maxRating }, (_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 transition-colors ${
            index < rating
              ? "fill-primary text-primary"
              : "fill-muted text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
};

export default StarRating;
