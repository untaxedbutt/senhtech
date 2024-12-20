import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
}

export default function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-red-500 text-red-500" />
      ))}
    </div>
  );
}