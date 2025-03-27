
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    background: '',
    goals: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check if all required fields are filled
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Send data to FormSubmit.co service which will forward to ask@afripulse.app
      const response = await fetch("https://formsubmit.co/ajax/ask@afripulse.app", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          background: formData.background,
          goals: formData.goals,
          _subject: "New AfriPulse Program Inquiry"
        })
      });

      if (response.ok) {
        toast({
          title: "Thank you!",
          description: "Your application has been received. We'll contact you within 24 hours.",
        });
        
        // Wait for toast to be seen, then redirect
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission error",
        description: "There was a problem sending your information. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

          <form onSubmit={handleSubmit} className="space-y-6">
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
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-afrinova-neon"
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
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-afrinova-neon"
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
                value={formData.phone}
                onChange={handleChange}
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
                value={formData.location}
                onChange={handleChange}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-afrinova-neon"
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
                value={formData.background}
                onChange={handleChange}
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
                value={formData.goals}
                onChange={handleChange}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-afrinova-neon"
                placeholder="What do you hope to achieve with AfriPulse?"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center bg-gradient-to-r from-afrinova-neon to-afrinova-gold text-black font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    Submit Application <Send size={18} className="ml-2" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
