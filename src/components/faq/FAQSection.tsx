import React from 'react';
import FAQItem from './FAQItem';
import { useFAQs } from '../../hooks/useFAQs';

export default function FAQSection() {
  const faqs = useFAQs();

  return (
    <section className="py-20 bg-black" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about our AI automation services
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}