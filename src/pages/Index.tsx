
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import RecruitmentProcess from '@/components/RecruitmentProcess';
import Benefits from '@/components/Benefits';
import JoinSection from '@/components/JoinSection';
import Footer from '@/components/Footer';
import ProgramDetails from '@/components/ProgramDetails';
import ProgramInfo from '@/components/ProgramInfo';

const Index = () => {
  useEffect(() => {
    // Initialize intersection observer for animation
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px' // Reduced margin to minimize gaps
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe all sections with the section-reveal class
    document.querySelectorAll('.section-reveal').forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-afrinova-black text-white overflow-x-hidden">
      <Hero />
      <ProgramDetails />
      <RecruitmentProcess />
      <ProgramInfo />
      <Benefits />
      <JoinSection />
      <Footer />
    </div>
  );
};

export default Index;
