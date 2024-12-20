import React from 'react';
import { useTestimonials } from '../../hooks/useTestimonials';
import TestimonialCard from './TestimonialCard';
import { Bot } from 'lucide-react';

export default function Testimonials() {
  const testimonials = useTestimonials();

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Bot className="h-12 w-12 text-red-600" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300">
            See how SenhTech Agency is transforming businesses through AI automation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}