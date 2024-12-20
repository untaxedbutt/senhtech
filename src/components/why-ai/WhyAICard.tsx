import React from 'react';
import { LucideIcon } from 'lucide-react';

interface WhyAICardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function WhyAICard({ icon: Icon, title, description }: WhyAICardProps) {
  return (
    <div className="bg-gradient-to-br from-red-950/90 to-black p-8 rounded-xl border border-red-900/30 hover:border-red-500/50 transition-colors">
      <Icon className="w-12 h-12 text-red-500 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}