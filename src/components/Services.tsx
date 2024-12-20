import React from 'react';
import { ServiceGrid } from './ServiceGrid';
import { useServices } from '../hooks/useServices';

export default function Services() {
  const services = useServices();
  
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-300">Advanced AI automation solutions for modern businesses</p>
        </div>
        <ServiceGrid services={services} />
      </div>
    </section>
  );
}