import React from 'react';
import { CheckIcon, RocketIcon, Users, Calendar, Award, Star, Zap, DollarSign } from 'lucide-react';

const ProgramDetails = () => {
  return (
    <section className="section-modern">
      <div className="container-modern">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="luxury-heading mb-4">
            360° Digital Marketing & Personal Development Powerhouse
          </h2>
          <p className="luxury-subheading max-w-4xl mx-auto">
            The Complete Blueprint for Financial Freedom & Digital Success – Africa & Middle East's Most Transformative Program
          </p>
        </div>

        {/* Why This Program is Life-Changing */}
        <div className="luxury-card p-8 mb-16 animate-slide-in">
          <div className="luxury-accent-top"></div>
          <div className="luxury-accent-bottom"></div>
          <div className="luxury-accent-left"></div>
          <div className="luxury-accent-right"></div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white">
            Why This Program is <span className="text-gold">Life-Changing</span>
          </h3>
          
          <p className="text-center text-xl text-gray-300 mb-8">
            We don't just teach skills – we transform mindsets and bank accounts through:
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <div className="glass-card p-4 rounded-lg">
              <CheckIcon className="text-gold inline-block mr-2" size={20} />
              <span className="text-white font-bold">Personal Development Mastery</span>
            </div>
            
            <div className="text-3xl text-gold">+</div>
            
            <div className="glass-card p-4 rounded-lg">
              <CheckIcon className="text-gold inline-block mr-2" size={20} />
              <span className="text-white font-bold">Digital Marketing Expertise</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="glass-card p-4 rounded-lg inline-block">
              <span className="text-2xl text-gold font-bold">= Your Shortcut to Financial Freedom</span>
            </div>
          </div>
        </div>
        
        {/* What You'll Master */}
        <div className="mb-16">
          <h3 className="luxury-heading mb-10 text-center">
            What You'll Master
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Development Pillars */}
            <div className="luxury-card hover-lift">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="icon-luxury">
                    <RocketIcon className="w-6 h-6 text-gold" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Personal Development Pillars <span className="text-gold font-normal">(Mondays)</span></h4>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-bold text-gold mb-3">Mindset Revolution</h5>
                    <ul className="list-luxury">
                      <li>Break limiting beliefs holding you back from success</li>
                      <li>Develop the psychology of top earners</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-bold text-gold mb-3">Wealth Consciousness</h5>
                    <ul className="list-luxury">
                      <li>Financial literacy tailored for African/Middle Eastern markets</li>
                      <li>Cashflow Quadrant: Transition from employee to investor</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-bold text-gold mb-3">High-Performance Habits</h5>
                    <ul className="list-luxury">
                      <li>Time management systems of millionaire entrepreneurs</li>
                      <li>Building unstoppable discipline</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Digital Marketing Domination */}
            <div className="luxury-card hover-lift">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="icon-luxury">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold">
                      <path d="M20 7H4V17H20V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white">Digital Marketing Domination <span className="text-gold font-normal">(Fridays)</span></h4>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-bold text-gold mb-3">The Complete Funnel System</h5>
                    <ul className="list-luxury">
                      <li>Lead generation → Conversion → Scaling (taught through real Africa-focused case studies)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-bold text-gold mb-3">Social Media Money Machines</h5>
                    <ul className="list-luxury">
                      <li>Facebook/Instagram/TikTok ads that actually convert in our markets</li>
                      <li>WhatsApp marketing automation (the untapped goldmine)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-bold text-gold mb-3">SEO & Content That Sells</h5>
                    <ul className="list-luxury">
                      <li>Rank #1 on Google for profitable keywords in your niche</li>
                      <li>Create viral content that builds authority AND makes sales</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* How This Benefits YOU */}
        <div className="mb-16">
          <h3 className="luxury-heading mb-10 text-center">
            How This Benefits YOU
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Immediate Earning Potential */}
            <div className="luxury-card hover-lift">
              <div className="p-6">
                <div className="icon-luxury mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-gold" />
                </div>
                <h4 className="text-xl font-bold text-white text-center mb-4">Immediate Earning Potential</h4>
                
                <p className="text-gray-300 mb-6 text-center">Start earning from Day 1 through our affiliate program:</p>
                
                <ul className="list-luxury">
                  <li><span className="font-bold text-white">Real Estate:</span> Earn 30% commission per closed deal (we provide the buyer leads)</li>
                  <li><span className="font-bold text-white">Automotive:</span> 30% commission per car sale</li>
                  <li><span className="font-bold text-white">Health Products:</span> 30% commission on every supplement bundle sold</li>
                </ul>
              </div>
            </div>
            
            {/* Long-Term Advantages */}
            <div className="luxury-card hover-lift">
              <div className="p-6">
                <div className="icon-luxury mx-auto mb-4">
                  <RocketIcon className="w-6 h-6 text-gold" />
                </div>
                <h4 className="text-xl font-bold text-white text-center mb-4">Long-Term Advantages</h4>
                
                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-bold text-gold mb-3">Dual "Package"</h5>
                    <p className="text-gray-300">Benefit from Personal Development Coach + Digital Marketing Pro experiences of our team</p>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-bold text-gold mb-3">Recurring Income Streams</h5>
                    <ul className="list-luxury">
                      <li>Lifetime commission from your account - unlimited wealth creation.</li>
                      <li>Ongoing commissions from repeat customers e.g Health and Wellness products</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Elite Community */}
            <div className="luxury-card hover-lift">
              <div className="p-6">
                <div className="icon-luxury mx-auto mb-4">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <h4 className="text-xl font-bold text-white text-center mb-4">Elite Community</h4>
                
                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-bold text-gold mb-3">Network Effect</h5>
                    <p className="text-gray-300">Connect with high-achieving entrepreneurs across Africa and the Middle East</p>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-bold text-gold mb-3">Collaboration Opportunities</h5>
                    <ul className="list-luxury">
                      <li>Joint ventures with fellow members</li>
                      <li>Cross-border business opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Your 8-Week Transformation Roadmap */}
        <div className="mb-16">
          <h3 className="luxury-heading mb-10 text-center">
            Your 8-Week Transformation Roadmap
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="luxury-card hover-lift">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-black border-2 border-gold flex items-center justify-center text-gold font-bold text-xl mb-4">
                  1
                </div>
                
                <h4 className="text-xl font-bold text-white mb-4">Phase 1: Foundation <span className="text-gold">(Weeks 1-4)</span></h4>
                
                <ul className="list-luxury">
                  <li><span className="font-bold text-gold">Mindset:</span> Rewire your money beliefs</li>
                  <li><span className="font-bold text-gold">Skills:</span> Master lead generation & content creation</li>
                  <li><span className="font-bold text-gold">Action:</span> Set up your first 2 income streams</li>
                </ul>
              </div>
            </div>
            
            {/* Phase 2 */}
            <div className="luxury-card hover-lift">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-black border-2 border-gold flex items-center justify-center text-gold font-bold text-xl mb-4">
                  2
                </div>
                
                <h4 className="text-xl font-bold text-white mb-4">Phase 2: Monetization <span className="text-gold">(Weeks 5-6)</span></h4>
                
                <ul className="list-luxury">
                  <li><span className="font-bold text-gold">Mindset:</span> Develop resilience against rejection</li>
                  <li><span className="font-bold text-gold">Skills:</span> Advanced sales conversion techniques</li>
                  <li><span className="font-bold text-gold">Action:</span> Close your first 3-5 deals with our templates</li>
                </ul>
              </div>
            </div>
            
            {/* Phase 3 */}
            <div className="luxury-card hover-lift">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-black border-2 border-gold flex items-center justify-center text-gold font-bold text-xl mb-4">
                  3
                </div>
                
                <h4 className="text-xl font-bold text-white mb-4">Phase 3: Scale <span className="text-gold">(Weeks 7-8)</span></h4>
                
                <ul className="list-luxury">
                  <li><span className="font-bold text-gold">Mindset:</span> Think like a CEO</li>
                  <li><span className="font-bold text-gold">Skills:</span> Automation & team building</li>
                  <li><span className="font-bold text-gold">Action:</span> Systemize to earn while you sleep</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enroll Now */}
        <div>
          <h3 className="luxury-heading mb-8 text-center">
            Enroll Now – 3 Simple Steps
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="luxury-card hover-lift text-center">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-black border-2 border-gold flex items-center justify-center text-gold font-bold text-xl mx-auto mb-4">
                  1
                </div>
                
                <h4 className="text-xl font-bold text-white mb-4">Pay KES 10,000</h4>
                <p className="text-gray-300">
                  Lifetime access to training + affiliate platform
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="luxury-card hover-lift text-center">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-black border-2 border-gold flex items-center justify-center text-gold font-bold text-xl mx-auto mb-4">
                  2
                </div>
                
                <h4 className="text-xl font-bold text-white mb-4">Join Monday's Masterclass</h4>
                <p className="text-gray-300">
                  8 PM EAT via Zoom
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="luxury-card hover-lift text-center">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-black border-2 border-gold flex items-center justify-center text-gold font-bold text-xl mx-auto mb-4">
                  3
                </div>
                
                <h4 className="text-xl font-bold text-white mb-4">Start Earning</h4>
                <p className="text-gray-300">
                  Using our plug-and-play systems
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-xl text-red font-bold animate-pulse">
              Only a few spots remain – Our last cohort sold out in 48 hours!
            </p>
          </div>
          
          <div className="luxury-card p-6 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Contact Us</h4>
                <div className="flex items-center mb-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neon mr-2">
                    <path d="M17.6 2.7998H6.3C5.00736 2.7998 3.9 3.90716 3.9 5.1998V18.7998C3.9 20.0924 5.00736 21.1998 6.3 21.1998H17.7C18.9926 21.1998 20.1 20.0924 20.1 18.7998V5.1998C20.1 3.90716 18.9926 2.7998 17.7 2.7998H17.6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 6.5998H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 18.3998H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-gray-300">
                    <span className="text-gold">WhatsApp:</span> +254 116 330665 / +254710361624
                  </span>
                </div>
                <div className="flex items-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neon mr-2">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-gray-300">
                    <span className="text-gold">Website:</span> www.jamesmbele.com
                  </span>
                </div>
              </div>
              
              <div className="glass-card p-4 flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neon mr-2 flex-shrink-0">
                  <path d="M22 11.0801V12.0001C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.86011" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-gray-300">
                  <span className="text-gold font-bold">60-Day Money-Back Guarantee:</span> If you don't earn back your fee by implementing what we teach, we'll refund you – no questions asked.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl text-gray-300 italic">
              Your future as a financially free digital entrepreneur starts with one decision. 
              <span className="block font-bold text-white mt-2">The question is – are you ready to make it?</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
