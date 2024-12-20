import React from 'react';
import { Brain, Rocket, TrendingUp, Shield } from 'lucide-react';
import WhyAICard from './WhyAICard';

export default function WhyAISection() {
  const reasons = [
    {
      icon: Brain,
      title: "Enhanced Customer Experience",
      description: "AI-powered systems provide 24/7 support, instant responses, and personalized interactions, leading to higher customer satisfaction."
    },
    {
      icon: Rocket,
      title: "Increased Efficiency",
      description: "Automate repetitive tasks, reduce operational costs, and free up your team to focus on strategic initiatives."
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description: "Leverage AI analytics to understand customer behavior, predict trends, and make informed business decisions."
    },
    {
      icon: Shield,
      title: "Competitive Advantage",
      description: "Stay ahead in 2024 by adopting AI early. Companies using AI are seeing 40% higher productivity rates."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Adopt AI in 2024?
          </h2>
          <p className="text-xl text-gray-300">
            Transform your business with the power of artificial intelligence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <WhyAICard key={index} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
}