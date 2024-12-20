import React from 'react';
import { Sparkles } from 'lucide-react';
import HeroMedia from './HeroMedia';
import CallToAction from './CallToAction';

export default function Hero() {
  return (
    <div className="relative bg-black pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroMedia />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="flex justify-center mb-8">
          <Sparkles className="h-12 w-12 text-red-600 animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Automate Your Business
          <span className="text-red-500"> with Advanced AI</span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto drop-shadow-lg">
          Transform your operations with AI-powered customer support, appointment scheduling, and social media automation.
        </p>
        <CallToAction />
      </div>
    </div>
  );
}