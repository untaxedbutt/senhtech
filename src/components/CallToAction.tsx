import React from 'react';

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors">
        Get Started
      </button>
      <button className="border-2 border-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-600/20 transition-colors">
        Learn More
      </button>
    </div>
  );
}