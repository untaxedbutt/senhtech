import React from 'react';
import { Bot, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Bot className="h-8 w-8 text-red-600" />
            <span className="ml-2 text-xl font-bold text-white">SenhTech</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-red-500">Services</a>
            <a href="#benefits" className="text-gray-300 hover:text-red-500">Benefits</a>
            <a href="#process" className="text-gray-300 hover:text-red-500">Process</a>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
              Contact Us
            </button>
          </div>
          
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-300" />
          </div>
        </div>
      </div>
    </nav>
  );
}