
import React, { useEffect, useRef } from 'react';
import AnimatedScribble from './ui/AnimatedScribble';
import { CheckIcon, Users, BookOpen, RocketIcon } from 'lucide-react';

const Benefits = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            
            // Animate cards
            const cards = entry.target.querySelectorAll('.benefit-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-slide-up');
              }, index * 150);
            });
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
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
      className="py-24 px-4 bg-benefit-pattern section-reveal"
      style={{ background: 'linear-gradient(135deg, #111111 0%, #292929 100%)' }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            <AnimatedScribble type="star" color="neon">
              Why Pulse With Us?
            </AnimatedScribble>
          </h2>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Join the digital entrepreneurship wave that's transforming how recent graduates build wealth across Africa and the Middle East.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Benefit Card 1 */}
          <div className="benefit-card torn-paper bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-afrinova-gold/20 shadow-lg opacity-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-afrinova-gold/20">
                <CheckIcon size={24} className="text-afrinova-gold" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Zero Risk, All Reward</h3>
                <p className="text-gray-300 mb-4">Pay nothing upfront, KES 10,000 from your first sale. We're that confident in your success.</p>
                
                <div className="p-4 bg-black/30 rounded-lg">
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-12 h-12 rounded-full bg-afrinova-gold transform"
                        style={{
                          marginLeft: i > 0 ? '-8px' : '0',
                          opacity: 1 - (i * 0.15),
                          zIndex: 5-i
                        }}
                      >
                        {i === 0 && (
                          <div className="h-full w-full flex items-center justify-center text-black font-bold">
                            KES
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center mt-3">
                    <span className="text-afrinova-gold text-sm">Pay from your earnings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefit Card 2 */}
          <div className="benefit-card torn-paper bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-afrinova-neon/20 shadow-lg opacity-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-afrinova-neon/20">
                <RocketIcon size={24} className="text-afrinova-neon" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Big Wins, Fast</h3>
                <p className="text-gray-300 mb-4">KES 200,000+ (real estate), KES 30,000+ (cars), 25% commissions on every deal you close.</p>
                
                <div className="p-4 bg-black/30 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-afrinova-neon rounded-full"></div>
                    <div className="text-white text-sm font-bold">Affiliate Dashboard</div>
                  </div>
                  
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400 text-sm">Month:</span>
                      <span className="text-white font-mono">June 2023</span>
                    </div>
                    
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-400 text-sm">Status:</span>
                      <span className="text-afrinova-neon">Active</span>
                    </div>
                    
                    <div className="bg-black/30 p-2 rounded">
                      <div className="text-center">
                        <div className="text-gray-400 text-sm">Total Earned</div>
                        <div className="text-afrinova-gold font-mono text-xl font-bold">KES 420,000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefit Card 3 */}
          <div className="benefit-card torn-paper bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-afrinova-red/20 shadow-lg opacity-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-afrinova-red/20">
                <BookOpen size={24} className="text-afrinova-red" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Next-Level Skills</h3>
                <p className="text-gray-300 mb-4">Digital marketing + mindset, Nairobi-to-Dubai style. Skills that last a lifetime.</p>
                
                <div className="p-4 bg-black/30 rounded-lg relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" stroke="#00FF66" strokeWidth="4" fill="none" />
                      <path d="M50,10 L50,90 M10,50 L90,50" stroke="#00FF66" strokeWidth="4" />
                    </svg>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-center mb-3">
                      <div className="w-16 h-16 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-afrinova-red to-afrinova-neon rounded-full opacity-20 animate-pulse"></div>
                        <svg viewBox="0 0 24 24" className="w-full h-full">
                          <path d="M21.8 18.4L13.4 10l5.3-5.3c.4-.4.4-1 0-1.4L17 1.6c-.4-.4-1-.4-1.4 0L10.3 7 2 19.2l3 3 8.3-2.1 5.7-1.3c.8-.1 1.2-.5 1.4-1.1.1-.2 1.6-2 2.7-3.3.3-.4.3-1-.3-1.4z" fill="none" stroke="#FF3333" strokeWidth="1.5" />
                          <path d="M2 22l3-3m11 3l2-2m5-6l-2-2" fill="none" stroke="#00FF66" strokeWidth="1.5" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                      <span>Sales</span>
                      <span>Marketing</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full mb-3">
                      <div className="h-full bg-gradient-to-r from-afrinova-red to-afrinova-neon rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                      <span>Mindset</span>
                      <span>Networks</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-gradient-to-r from-afrinova-gold to-afrinova-neon rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefit Card 4 */}
          <div className="benefit-card torn-paper bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-afrinova-gold/20 shadow-lg opacity-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-afrinova-gold/20">
                <Users size={24} className="text-afrinova-gold" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Elite Squad
                  <svg className="inline-block ml-2 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="#D4AF37" />
                  </svg>
                </h3>
                <p className="text-gray-300 mb-4">15+ earners in our WhatsApp crew. Network, collaborate, and grow together.</p>
                
                <div className="p-4 bg-black/30 rounded-lg relative">
                  {/* WhatsApp chat mockup */}
                  <div className="bg-[#128C7E] h-10 rounded-t-lg flex items-center px-3">
                    <div className="text-white font-bold">AfriNova Pulse Squad</div>
                  </div>
                  
                  <div className="bg-[#E5DDD5] p-2 rounded-b-lg">
                    {/* Chat messages */}
                    <div className="bg-white p-2 rounded-lg mb-2 ml-auto max-w-[80%]">
                      <div className="text-black text-sm">Just closed my first real estate deal! 🎉</div>
                      <div className="text-right text-xs text-gray-500">10:22 AM</div>
                    </div>
                    
                    <div className="bg-[#DCF8C6] p-2 rounded-lg mb-2 mr-auto max-w-[80%]">
                      <div className="text-black text-sm">Congrats! How much did you make? 💰</div>
                      <div className="text-right text-xs text-gray-500">10:23 AM</div>
                    </div>
                    
                    <div className="bg-white p-2 rounded-lg ml-auto max-w-[80%]">
                      <div className="text-black text-sm">KES 240,000! Thanks for the mentoring @AfriNova Team 🙏</div>
                      <div className="text-right text-xs text-gray-500">10:24 AM</div>
                    </div>
                  </div>
                  
                  {/* Emoji overlay */}
                  <div className="absolute -bottom-2 -right-2 flex">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-lg transform -rotate-12">
                      🔥
                    </div>
                    <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-lg -ml-2 transform rotate-12">
                      💰
                    </div>
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

export default Benefits;
