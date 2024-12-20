import React from 'react';
import ContactForm from './ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-20 bg-black" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300">
            Ready to transform your business with AI? Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-red-950/90 to-black p-6 rounded-xl border border-red-900/30">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-6 h-6 text-red-500" />
                <h3 className="text-lg font-semibold text-white">Email Us</h3>
              </div>
              <p className="text-gray-300">contact@senhtech.com</p>
            </div>

            <div className="bg-gradient-to-br from-red-950/90 to-black p-6 rounded-xl border border-red-900/30">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-6 h-6 text-red-500" />
                <h3 className="text-lg font-semibold text-white">Call Us</h3>
              </div>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>

            <div className="bg-gradient-to-br from-red-950/90 to-black p-6 rounded-xl border border-red-900/30">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-6 h-6 text-red-500" />
                <h3 className="text-lg font-semibold text-white">Visit Us</h3>
              </div>
              <p className="text-gray-300">123 AI Innovation Street<br />Tech Valley, CA 94025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}