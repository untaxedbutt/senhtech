import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({ icon: Icon, title, description, image }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-red-950/90 to-black/90 p-1">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover opacity-40 group-hover:opacity-20 transition-opacity duration-500"
        />
      </div>
      <div className="relative p-6">
        <Icon className="h-12 w-12 text-red-500 mb-4 group-hover:scale-110 transition-transform" />
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}