import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-red-900/30 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 flex justify-between items-center bg-gradient-to-r from-red-950/90 to-black hover:from-red-900/90 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-left text-lg font-medium text-white">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-red-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-red-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-black/50">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
}