import React, { useEffect, useRef } from 'react';
import PulseButton from './ui/PulseButton';
import AnimatedScribble from './ui/AnimatedScribble';
import { Link } from 'react-router-dom';

const Hero = () => {
  const counterRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simulates the slot machine counter effect
    const runCounter = () => {
      if (!counterRef.current) return;
      
      const numbers = ['200,000+', '250,000+', '300,000+', '350,000+', '400,000+', '450,000+', '200,000+'];
      const elements = counterRef.current.querySelectorAll('.cash-number');
      
      elements.forEach((elem, i) => {
        const htmlElem = elem as HTMLElement;
        htmlElem.style.setProperty('--delay', i.toString());
      });
      
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex >= numbers.length) {
          clearInterval(interval);
          setTimeout(runCounter, 5000); // Restart after 5 seconds
          return;
        }
        
        elements.forEach(elem => {
          elem.textContent = numbers[currentIndex];
          elem.classList.remove('animate-cash-pop');
          // Force reflow - Fix TS error by using appropriate type assertion
          const htmlElem = elem as HTMLElement;
          void htmlElem.offsetWidth;
          elem.classList.add('animate-cash-pop');
        });
        
        currentIndex++;
      }, 300);
    };
    
    runCounter();
    
    return () => {
      // Clean up any intervals or timeouts
      const allIntervals = window.setInterval(() => {}, 0);
      for (let i = 0; i < allIntervals; i++) {
        window.clearInterval(i);
      }
    };
  }, []);
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 overflow-hidden bg-afrinova-black bg-hero-pattern">
      {/* Animated wave background effect */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="wave-line">
          {[...Array(10)].map((_, i) => (
            <svg 
              key={i} 
              className="absolute" 
              style={{ 
                top: `${i * 10}%`, 
                left: 0, 
                width: '200%', 
                height: '2px', 
                animationDelay: `${i * 0.2}s`
              }}
              viewBox="0 0 1200 4"
            >
              <path 
                d="M0,1 C50,0 100,3 150,2 C200,1 250,0 300,1 C350,2 400,3 450,3 C500,3 550,2 600,1 C650,0 700,0 750,1 C800,2 850,3 900,3 C950,3 1000,2 1050,1 C1100,0 1150,0 1200,1" 
                stroke={i % 2 === 0 ? "#00FF66" : "#D4AF37"} 
                strokeWidth="2" 
                fill="none"
              />
            </svg>
          ))}
        </div>
      </div>
      
      <div className="container max-w-6xl mx-auto z-10 text-center py-8">
        <div className="inline-block mb-2 px-4 py-1 rounded-full bg-afrinova-red/10 border border-afrinova-red/20">
          <span className="font-caveat text-white text-lg">Digital Entrepreneurship Incubator</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
          <AnimatedScribble type="circle" color="red">
            <span className="text-afrinova-neon">Hustle</span>
          </AnimatedScribble> Your Way to Millions—
          <br className="hidden md:block" /> No Cash Down!
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Join AfriPulse: Start Free, Pay After You Earn, Thrive Across Africa & the Middle East.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          <Link to="/form">
            <PulseButton variant="neon">
              Pulse In
            </PulseButton>
          </Link>
          
          <div ref={counterRef} className="glass-card px-6 py-4 rounded-xl flex items-center">
            <span className="text-white mr-2">Earn up to</span>
            <div className="cash-number text-2xl md:text-3xl">KES 200,000+</div>
          </div>
        </div>
        
        {/* Visuals */}
        <div className="relative mx-auto max-w-5xl">
          <div className="relative bg-gradient-to-r from-afrinova-black to-afrinova-black/40 p-4 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10">
            {/* Skyline background SVG */}
            <svg className="absolute bottom-0 left-0 w-full h-24 opacity-30" viewBox="0 0 1200 100" preserveAspectRatio="none">
              {/* Nairobi skyline silhouette */}
              <path d="M0,70 L50,70 L60,40 L80,60 L100,30 L120,50 L140,20 L160,60 L180,50 L200,70 L220,60 L240,40 L260,50 L280,20 L300,60 L320,50 L340,30 L360,50 L380,70 L400,60 L420,40 L440,50 L460,30 L480,50 L500,20 L520,40 L540,60 L560,50 L580,30" fill="#00FF66" opacity="0.3" />
              {/* Dubai skyline silhouette */}
              <path d="M600,70 L620,50 L640,70 L660,60 L680,10 L700,70 L720,60 L740,30 L760,50 L780,5 L800,40 L820,60 L840,20 L860,50 L880,15 L900,40 L920,60 L940,50 L960,70 L980,50 L1000,30 L1020,50 L1040,70 L1060,60 L1080,20 L1100,40 L1120,60 L1140,50 L1160,30 L1180,50 L1200,70" fill="#D4AF37" opacity="0.3" />
            </svg>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              {/* Grad with laptop image */}
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop" 
                    alt="Graduate with laptop" 
                    className="w-full max-w-xs md:max-w-sm rounded-lg shadow-2xl animate-float"
                  />
                  
                  {/* Gold arrow pointing to cash */}
                  <svg className="absolute -right-10 top-1/2 -translate-y-1/2 w-16 h-16 transform rotate-0 md:rotate-45 hidden md:block" viewBox="0 0 24 24">
                    <path d="M5,12H19M19,12L13,6M19,12L13,18" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
              </div>
              
              {/* Cash stack visualization - Improved visibility */}
              <div className="md:w-1/2 flex flex-col items-center">
                <div className="p-4 bg-afrinova-black/60 backdrop-blur-md rounded-lg border border-afrinova-gold/30 shadow-lg relative">
                  <div className="absolute -top-2 -left-2 bg-afrinova-red text-white text-xs font-bold py-1 px-2 rounded">
                    Start with KES 0
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <span className="text-gray-300 mb-2">Earn Up To</span>
                    <div className="relative">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className="w-56 h-12 bg-gradient-to-r from-green-100 to-green-200 border border-green-300 rounded relative"
                          style={{ 
                            marginTop: i > 0 ? '-40px' : '0',
                            transform: `rotate(${(i-2) * 2}deg)`,
                            zIndex: 5-i 
                          }}
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            {i === 2 && (
                              <span className="font-bold text-green-800 text-xl shadow-sm">KES 200,000+</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <span className="mt-4 text-afrinova-gold font-caveat text-2xl">Monthly Income Potential</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
