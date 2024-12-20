import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyAISection from './components/why-ai/WhyAISection';
import Testimonials from './components/testimonials/Testimonials';
import FAQSection from './components/faq/FAQSection';
import ContactSection from './components/contact/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyAISection />
        <Testimonials />
        <FAQSection />
        <ContactSection />
      </main>
      
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>© 2024 SenhTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;