import React from 'react';

export default function HeroMedia() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10"></div>
      <img
        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1920"
        alt="AI Technology"
        className="w-full h-full object-cover"
      />
    </div>
  );
}