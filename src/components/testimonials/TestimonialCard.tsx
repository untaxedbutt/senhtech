import React from 'react';
import { Testimonial } from '../../types/testimonial';
import StarRating from './StarRating';

export default function TestimonialCard({ name, role, company, image, content, rating }: Testimonial) {
  return (
    <div className="bg-gradient-to-br from-red-950/90 to-black p-6 rounded-xl backdrop-blur-sm border border-red-900/30">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-red-500"
        />
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-red-400">{role}</p>
          <p className="text-gray-400 text-sm">{company}</p>
        </div>
      </div>
      <StarRating rating={rating} />
      <p className="mt-4 text-gray-300 italic">&ldquo;{content}&rdquo;</p>
    </div>
  );
}