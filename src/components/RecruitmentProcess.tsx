
import React, { useEffect, useRef } from 'react';
import AnimatedScribble from './ui/AnimatedScribble';
import { RocketIcon, Linkedin, BookOpen } from 'lucide-react';

const RecruitmentProcess = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            
            // Animate the timeline steps sequentially
            const steps = entry.target.querySelectorAll('.timeline-step');
            steps.forEach((step, index) => {
              setTimeout(() => {
                step.classList.add('animate-slide-up');
              }, index * 300);
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
      className="py-24 px-4 bg-gradient-to-b from-afrinova-black to-gray-900 section-reveal"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white inline-block">
            <AnimatedScribble type="underline" color="neon">
              Your Grind, Our Blueprint
            </AnimatedScribble>
          </h2>
          
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            <div className="px-4 py-2 rounded-full border border-afrinova-neon/30 bg-afrinova-neon/5">
              <span className="font-caveat text-xl text-afrinova-neon">Chukua Chance</span>
            </div>
            <div className="px-4 py-2 rounded-full border border-afrinova-gold/30 bg-afrinova-gold/5 font-caveat text-xl text-afrinova-gold">
              ابدأ الآن
            </div>
          </div>
        </div>
        
        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-afrinova-neon to-afrinova-gold transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Step 1 */}
          <div className="timeline-step flex flex-col md:flex-row items-center mb-16 opacity-0">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
              <h3 className="text-afrinova-neon text-2xl font-bold mb-3">Step 1: Catch the Vibe</h3>
              <p className="text-gray-300 mb-4">LinkedIn buzz, no fluff. We post opportunities, you respond. Simple.</p>
              
              <div className="glass-card p-4 rounded-lg inline-block">
                <div className="flex items-center gap-4">
                  <Linkedin className="text-blue-400" size={24} />
                  <div className="text-white">
                    <div className="font-bold">AfriPulse</div>
                    <div className="text-sm text-gray-400">1,250 followers</div>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-gray-800 rounded">
                  <p className="text-white text-sm">"Looking for hustlers! Start with zero, earn commissions on our real estate & automotive packages. DM for details."</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-gray-400">125 likes</span>
                    <span className="text-xs text-gray-400">43 comments</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-16 flex justify-center items-center">
              <div className="w-16 h-16 rounded-full bg-afrinova-neon flex items-center justify-center shadow-[0_0_20px_rgba(0,255,102,0.5)] z-10">
                <Linkedin size={24} className="text-afrinova-black" />
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12 md:text-left hidden md:block">
              {/* Empty space for right-aligned content */}
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="timeline-step flex flex-col md:flex-row items-center mb-16 opacity-0">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 hidden md:block md:text-right">
              {/* Empty space for left-aligned content */}
            </div>
            
            <div className="md:w-16 flex justify-center items-center">
              <div className="w-16 h-16 rounded-full bg-afrinova-gold flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.5)] z-10">
                <BookOpen size={24} className="text-afrinova-black" />
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12 md:text-left">
              <h3 className="text-afrinova-gold text-2xl font-bold mb-3">Step 2: Drop Your Deets</h3>
              <p className="text-gray-300 mb-4">Fill the form, spill your hustle. Tell us who you are and what drives you.</p>
              
              <div className="glass-card p-4 rounded-lg overflow-hidden relative">
                <div className="absolute top-0 right-0 w-20 h-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M0,0 L100,0 L100,100 Z" fill="#D4AF37" opacity="0.5" />
                  </svg>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-afrinova-red rounded-full"></div>
                    <div className="w-3 h-3 bg-afrinova-gold rounded-full"></div>
                    <div className="w-3 h-3 bg-afrinova-neon rounded-full"></div>
                  </div>
                  
                  <div className="bg-gray-800 p-3 rounded mb-3">
                    <div className="text-white text-sm font-bold mb-1">Full Name</div>
                    <div className="h-6 bg-gray-700 rounded"></div>
                  </div>
                  
                  <div className="bg-gray-800 p-3 rounded mb-3">
                    <div className="text-white text-sm font-bold mb-1">Phone Number</div>
                    <div className="h-6 bg-gray-700 rounded"></div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="px-4 py-2 bg-afrinova-gold text-black rounded font-bold text-sm">
                      Submit
                    </div>
                  </div>
                </div>
                
                {/* Animated pen scribbling */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 animate-pulse">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" stroke="#D4AF37" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="16" y1="8" x2="2" y2="22" stroke="#D4AF37" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="17.5" y1="15" x2="9" y2="15" stroke="#D4AF37" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="timeline-step flex flex-col md:flex-row items-center opacity-0">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
              <h3 className="text-afrinova-red text-2xl font-bold mb-3">Step 3: Launch Your Gig</h3>
              <p className="text-gray-300 mb-4">Join, sell, pay KES 10,000 from your first deal. Start earning immediately.</p>
              
              <div className="glass-card p-4 rounded-lg relative overflow-hidden">
                <div className="flex justify-center">
                  <div className="relative">
                    <RocketIcon size={64} className="text-afrinova-red" />
                    <div className="absolute -bottom-4 -left-2 w-32 h-12">
                      <svg viewBox="0 0 100 50" className="w-full h-full">
                        <path d="M0,50 Q25,30 50,40 T100,30" 
                              stroke="#D4AF37" 
                              strokeWidth="4" 
                              fill="none" 
                              strokeDasharray="5,5" 
                              className="animate-wave" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <div className="text-white font-bold mb-1">First Deal</div>
                  <div className="text-afrinova-gold font-mono text-xl">KES 10,000</div>
                  <div className="mt-2 px-3 py-1 bg-afrinova-neon/20 text-afrinova-neon rounded-full text-xs inline-block">
                    Paid from earnings
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-16 flex justify-center items-center">
              <div className="w-16 h-16 rounded-full bg-afrinova-red flex items-center justify-center shadow-[0_0_20px_rgba(255,51,51,0.5)] z-10">
                <RocketIcon size={24} className="text-white" />
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12 md:text-left hidden md:block">
              {/* Empty space for right-aligned content */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentProcess;
