
import React, { useEffect, useRef } from 'react';
import AnimatedScribble from './ui/AnimatedScribble';
import PulseButton from './ui/PulseButton';
import { CheckIcon, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const JoinSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            
            // Animate steps
            const steps = entry.target.querySelectorAll('.join-step');
            steps.forEach((step, index) => {
              setTimeout(() => {
                step.classList.add('animate-slide-up');
              }, index * 200);
            });
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef} 
      className="py-24 px-4 bg-gradient-to-br from-gray-900 to-black section-reveal overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(10)].map((_, i) => (
              <div 
                key={i} 
                className="absolute" 
                style={{
                  top: `${i * 10}%`,
                  left: `${(i % 2) * 50}%`,
                  width: '100%',
                  height: '1px',
                  background: i % 2 === 0 ? '#00FF66' : '#D4AF37',
                  transform: `rotate(${i * 5}deg)`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white inline-block">
            <AnimatedScribble type="arrow" color="gold">
              Ready to Rise?
            </AnimatedScribble>
          </h2>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Take the first step towards financial independence. Our easy 3-step process gets you started in minutes.
          </p>
        </div>
        
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <div className="join-step glass-card p-6 rounded-xl border border-afrinova-neon/20 hover:border-afrinova-neon/50 transition-all duration-300 opacity-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-afrinova-neon/20 text-afrinova-neon mb-4 mx-auto">
                <span className="font-bold">1</span>
              </div>
              
              <h3 className="text-xl font-bold text-white text-center mb-4">Hit "Pulse In" → Fill the form</h3>
              
              <div className="flex justify-center mb-4">
                <div className="relative w-16 h-16">
                  <svg className="w-full h-full animate-pulse" viewBox="0 0 24 24">
                    <path d="M12 5V19M12 5L5 12M12 5L19 12" stroke="#00FF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
              </div>
              
              <p className="text-gray-300 text-center">
                Click the button and take 2 minutes to tell us about yourself and your goals.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="join-step glass-card p-6 rounded-xl border border-afrinova-gold/20 hover:border-afrinova-gold/50 transition-all duration-300 opacity-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-afrinova-gold/20 text-afrinova-gold mb-4 mx-auto">
                <span className="font-bold">2</span>
              </div>
              
              <h3 className="text-xl font-bold text-white text-center mb-4">Get the nod via LinkedIn DM or WhatsApp</h3>
              
              <div className="flex justify-center mb-4">
                <div className="relative w-24 h-16 bg-gray-800 rounded-lg p-2">
                  <div className="text-xs text-gray-400 mb-1">Direct Message</div>
                  <div className="text-white text-sm">You're in! Welcome to AfriPulse 🚀</div>
                </div>
              </div>
              
              <p className="text-gray-300 text-center">
                We'll review your application and reach out within 24 hours.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="join-step glass-card p-6 rounded-xl border border-afrinova-red/20 hover:border-afrinova-red/50 transition-all duration-300 opacity-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-afrinova-red/20 text-afrinova-red mb-4 mx-auto">
                <span className="font-bold">3</span>
              </div>
              
              <h3 className="text-xl font-bold text-white text-center mb-4">Join Monday's Masterclass (8 PM EAT, Zoom)</h3>
              
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Calendar size={48} className="text-afrinova-red animate-float" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-afrinova-neon rounded-full flex items-center justify-center text-xs font-bold text-black">
                    M
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 text-center">
                Jump straight into learning with our exclusive onboarding masterclass.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="mb-8">
              <Link to="/form">
                <PulseButton 
                  variant="neon" 
                  className="text-lg"
                >
                  Pulse In Now <ArrowRight className="inline-block ml-2" size={18} />
                </PulseButton>
              </Link>
            </div>
            
            <div className="mb-8">
              <AnimatedScribble type="circle" color="red">
                <span className="text-white font-caveat text-xl">Spots limited—last cohort sold out in 48 hrs!</span>
              </AnimatedScribble>
            </div>
            
            <div className="glass-card p-4 rounded-full border border-afrinova-gold/30 flex items-center">
              <div className="w-10 h-10 rounded-full bg-afrinova-gold/20 flex items-center justify-center mr-3">
                <CheckIcon size={20} className="text-afrinova-gold" />
              </div>
              <span className="text-white font-bold">60-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
