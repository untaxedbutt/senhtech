import React from 'react';

export default function ContactForm() {
  return (
    <form className="bg-gradient-to-br from-red-950/90 to-black p-8 rounded-xl border border-red-900/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500"
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="w-full px-4 py-2 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500"
          placeholder="How can we help?"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-2 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500"
          placeholder="Tell us about your project..."
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}