import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send } from 'lucide-react';

const ContactForm = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-afrinova-black to-gray-900 text-white py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-afrinova-neon hover:text-afrinova-neon/80 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back
        </button>

        <div className="glass-card p-8 rounded-xl border border-afrinova-gold/30">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Join AfriPulse
          </h1>
          
          <p className="text-gray-300 text-center mb-8">
            Complete this short form to start your journey toward financial independence.
            Our team will review your application and contact you within 24 hours.
          </p>

          <form 
            action={`mailto:ask@afripulse.app?subject=New AfriPulse Program Application`}
            method="POST"
            encType="text/plain"
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">
                Full Name <span className="text-afrinova-red">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-afrinova-neon"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email Address <span className="text-afrinova-red">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-afrinova-neon"
                placeholder="Enter your email address"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-white font-medium mb-2">
                Phone Number <span className="text-afrinova-red">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-afrinova-neon"
                placeholder="Include country code e.g. +254"
              />
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-white font-medium mb-2">
                Location (City, Country)
              </label>
              <input
                id="location"
                name="location"
                type="text"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-afrinova-neon"
                placeholder="Enter your city and country"
              />
            </div>

            {/* Background */}
            <div>
              <label htmlFor="background" className="block text-white font-medium mb-2">
                Your Background
              </label>
              <textarea
                id="background"
                name="background"
                rows={3}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-afrinova-neon"
                placeholder="Tell us about your current job, skills, or business experience"
              />
            </div>

            {/* Goals */}
            <div>
              <label htmlFor="goals" className="block text-white font-medium mb-2">
                Your Goals
              </label>
              <textarea
                id="goals"
                name="goals"
                rows={3}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-afrinova-neon"
                placeholder="What do you hope to achieve with AfriPulse?"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-gradient-to-r from-afrinova-neon to-afrinova-gold text-black font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
              >
                Submit Application <Send size={18} className="ml-2" />
              </button>
            </div>

            {/* WhatsApp Fallback */}
            <div className="text-center mt-4">
              <p className="text-gray-400 text-sm">
                Having trouble? Contact us directly via{' '}
                <a 
                  href="https://wa.me/254116330665" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-afrinova-neon hover:text-afrinova-neon/80"
                >
                  WhatsApp
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
