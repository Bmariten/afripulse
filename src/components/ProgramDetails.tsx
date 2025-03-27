
import React from 'react';
import AnimatedScribble from './ui/AnimatedScribble';
import { CheckIcon, RocketIcon, Users, Calendar, Award, Star, Zap, DollarSign } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const ProgramDetails = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-afrinova-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <AnimatedScribble type="underline" color="gold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-afrinova-gold to-afrinova-neon">
                360° Digital Marketing & Personal Development Powerhouse
              </span>
            </AnimatedScribble>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            The Complete Blueprint for Financial Freedom & Digital Success – Africa & Middle East's Most Transformative Program
          </p>
        </div>

        {/* Why This Program is Life-Changing */}
        <div className="glass-card p-8 rounded-xl border border-afrinova-neon/20 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            Why This Program is <span className="text-afrinova-neon">Life-Changing</span>
          </h3>
          
          <p className="text-center text-xl text-gray-300 mb-8">
            We don't just teach skills – we transform mindsets and bank accounts through:
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6 text-center">
            <div className="glass-card p-4 rounded-lg border border-afrinova-neon/30">
              <CheckIcon className="text-afrinova-neon inline-block mr-2" size={20} />
              <span className="text-white font-bold">Personal Development Mastery</span>
            </div>
            
            <div className="text-3xl text-afrinova-gold">+</div>
            
            <div className="glass-card p-4 rounded-lg border border-afrinova-neon/30">
              <CheckIcon className="text-afrinova-neon inline-block mr-2" size={20} />
              <span className="text-white font-bold">Digital Marketing Expertise</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-block glass-card p-4 rounded-lg border border-afrinova-gold">
              <span className="text-2xl text-afrinova-gold font-bold">= Your Shortcut to Financial Freedom</span>
            </div>
          </div>
        </div>
        
        {/* What You'll Master */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
            <AnimatedScribble type="underline" color="red">
              What You'll Master
            </AnimatedScribble>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Development Pillars */}
            <Card className="glass-card border border-afrinova-neon/20 overflow-hidden">
              <div className="bg-gradient-to-r from-afrinova-neon/20 to-transparent p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-afrinova-neon/20 flex items-center justify-center">
                  <RocketIcon size={20} className="text-afrinova-neon" />
                </div>
                <h4 className="text-xl font-bold text-white">Personal Development Pillars <span className="text-afrinova-gold font-normal">(Mondays)</span></h4>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-bold text-afrinova-gold mb-2">Mindset Revolution</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon size={16} className="text-afrinova-neon mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">Break limiting beliefs holding you back from success</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon size={16} className="text-afrinova-neon mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">Develop the psychology of top earners</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-bold text-afrinova-gold mb-2">Wealth Consciousness</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon size={16} className="text-afrinova-neon mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">Financial literacy tailored for African/Middle Eastern markets</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon size={16} className="text-afrinova-neon mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">Cashflow Quadrant: Transition from employee to investor</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-bold text-afrinova-gold mb-2">High-Performance Habits</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon size={16} className="text-afrinova-neon mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">Time management systems of millionaire entrepreneurs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon size={16} className="text-afrinova-neon mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">Building unstoppable discipline</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Digital Marketing Domination */}
            <Card className="glass-card border border-afrinova-red/20 overflow-hidden">
              <div className="bg-gradient-to-r from-afrinova-red/20 to-transparent p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-afrinova-red/20 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-afrinova-red">
                    <path d="M20 7H4V17H20V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white">Digital Marketing Domination <span className="text-afrinova-gold font-normal">(Fridays)</span></h4>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-bold text-afrinova-gold mb-2">The Complete Funnel System</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon size={16} className="text-afrinova-red mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">Lead generation → Conversion → Scaling (taught through real Africa-focused case studies)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-bold text-afrinova-gold mb-2">Social Media Money Machines</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon size={16} className="text-afrinova-red mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">Facebook/Instagram/TikTok ads that actually convert in our markets</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon size={16} className="text-afrinova-red mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">WhatsApp marketing automation (the untapped goldmine)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-bold text-afrinova-gold mb-2">SEO & Content That Sells</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon size={16} className="text-afrinova-red mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">Rank #1 on Google for profitable keywords in your niche</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon size={16} className="text-afrinova-red mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">Create viral content that builds authority AND makes sales</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Weekly Physical Workshops */}
          <div className="mt-8 glass-card p-6 rounded-xl border border-afrinova-gold/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-afrinova-gold/20 flex items-center justify-center">
                <Users size={20} className="text-afrinova-gold" />
              </div>
              <h4 className="text-xl font-bold text-white">Weekly Physical Workshops</h4>
            </div>
            
            <p className="text-gray-300 mb-4">Hands-on sessions alternating between:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-lg border border-afrinova-neon/20">
                <h5 className="text-lg font-bold text-afrinova-neon mb-2">Personal Growth</h5>
                <p className="text-gray-300">Vision board creation, accountability circles</p>
              </div>
              
              <div className="glass-card p-4 rounded-lg border border-afrinova-red/20">
                <h5 className="text-lg font-bold text-afrinova-red mb-2">Digital Skills</h5>
                <p className="text-gray-300">Live campaign builds, ad copy critiques</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* How This Benefits YOU */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
            <AnimatedScribble type="circle" color="gold">
              How This Benefits YOU
            </AnimatedScribble>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Immediate Earning Potential */}
            <Card className="glass-card border border-afrinova-gold/20 overflow-hidden">
              <div className="bg-gradient-to-r from-afrinova-gold/20 to-transparent p-4">
                <div className="w-12 h-12 rounded-full bg-afrinova-gold/20 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-afrinova-gold">
                    <path d="M12 1V23M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white text-center mb-2">Immediate Earning Potential</h4>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4 text-center">Start earning from Day 1 through our affiliate program:</p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckIcon size={16} className="text-afrinova-gold mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-300"><span className="font-bold text-white">Real Estate:</span> Earn 30% commission per closed deal (we provide the buyer leads)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon size={16} className="text-afrinova-gold mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-300"><span className="font-bold text-white">Automotive:</span> 30% commission per car sale</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon size={16} className="text-afrinova-gold mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-300"><span className="font-bold text-white">Health Products:</span> 30% commission on every supplement bundle sold</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Long-Term Advantages */}
            <Card className="glass-card border border-afrinova-neon/20 overflow-hidden">
              <div className="bg-gradient-to-r from-afrinova-neon/20 to-transparent p-4">
                <div className="w-12 h-12 rounded-full bg-afrinova-neon/20 flex items-center justify-center mx-auto mb-4">
                  <RocketIcon size={24} className="text-afrinova-neon" />
                </div>
                <h4 className="text-xl font-bold text-white text-center mb-2">Long-Term Advantages</h4>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="text-lg font-bold text-afrinova-neon mb-2">Dual "Package"</h5>
                    <p className="text-gray-300">Benefit from Personal Development Coach + Digital Marketing Pro experiences of our team</p>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-bold text-afrinova-neon mb-2">Recurring Income Streams</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon size={16} className="text-afrinova-neon mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">Lifetime commission from your account - unlimited wealth creation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon size={16} className="text-afrinova-neon mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">Ongoing commissions from repeat customers e.g Health and Wellness products</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Elite Community Access */}
            <Card className="glass-card border border-afrinova-red/20 overflow-hidden">
              <div className="bg-gradient-to-r from-afrinova-red/20 to-transparent p-4">
                <div className="w-12 h-12 rounded-full bg-afrinova-red/20 flex items-center justify-center mx-auto mb-4">
                  <Users size={24} className="text-afrinova-red" />
                </div>
                <h4 className="text-xl font-bold text-white text-center mb-2">Elite Community Access</h4>
              </div>
              
              <CardContent className="p-6">
                <div className="glass-card p-4 rounded-lg border border-afrinova-red/20 text-center">
                  <p className="text-gray-300">
                    WhatsApp mastermind group with top performers 
                    <span className="block mt-2 text-white font-bold">(currently 15+ members generating money per month)</span>
                  </p>
                </div>
                
                {/* WhatsApp chat mockup */}
                <div className="mt-4 bg-black/30 rounded-lg relative overflow-hidden">
                  <div className="bg-[#128C7E] h-10 rounded-t-lg flex items-center px-3">
                    <div className="text-white font-bold">AfriPulse Squad</div>
                  </div>
                  
                  <div className="bg-[#E5DDD5] p-2 rounded-b-lg">
                    <div className="bg-white p-2 rounded-lg max-w-[80%]">
                      <div className="text-black text-sm">Just closed my first real estate deal! 🏠</div>
                      <div className="text-right text-xs text-gray-500">10:15 AM</div>
                    </div>
                    
                    <div className="bg-white p-2 rounded-lg max-w-[80%] my-2">
                      <div className="text-black text-sm">Congrats! How much did you earn? 💰</div>
                      <div className="text-right text-xs text-gray-500">10:18 AM</div>
                    </div>
                    
                    <div className="bg-white p-2 rounded-lg ml-auto max-w-[80%]">
                      <div className="text-black text-sm">KES 240,000! Thanks for the mentoring @AfriPulse Team 🙏</div>
                      <div className="text-right text-xs text-gray-500">10:24 AM</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Your 8-Week Transformation Roadmap */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-afrinova-gold to-afrinova-neon">
              Your 8-Week Transformation Roadmap
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="glass-card p-6 rounded-xl border border-afrinova-neon/20 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-afrinova-black border-2 border-afrinova-neon flex items-center justify-center text-afrinova-neon font-bold text-xl">
                1
              </div>
              
              <h4 className="text-xl font-bold text-white mt-2 mb-4">Phase 1: Foundation <span className="text-afrinova-gold">(Weeks 1-4)</span></h4>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-afrinova-neon font-bold mr-2">Mindset:</span>
                  <span className="text-gray-300">Rewire your money beliefs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-afrinova-neon font-bold mr-2">Skills:</span>
                  <span className="text-gray-300">Master lead generation & content creation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-afrinova-neon font-bold mr-2">Action:</span>
                  <span className="text-gray-300">Set up your first 2 income streams</span>
                </li>
              </ul>
            </div>
            
            {/* Phase 2 */}
            <div className="glass-card p-6 rounded-xl border border-afrinova-gold/20 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-afrinova-black border-2 border-afrinova-gold flex items-center justify-center text-afrinova-gold font-bold text-xl">
                2
              </div>
              
              <h4 className="text-xl font-bold text-white mt-2 mb-4">Phase 2: Monetization <span className="text-afrinova-gold">(Weeks 5-6)</span></h4>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-afrinova-gold font-bold mr-2">Mindset:</span>
                  <span className="text-gray-300">Develop resilience against rejection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-afrinova-gold font-bold mr-2">Skills:</span>
                  <span className="text-gray-300">Advanced sales conversion techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-afrinova-gold font-bold mr-2">Action:</span>
                  <span className="text-gray-300">Close your first 3-5 deals with our templates</span>
                </li>
              </ul>
            </div>
            
            {/* Phase 3 */}
            <div className="glass-card p-6 rounded-xl border border-afrinova-red/20 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-afrinova-black border-2 border-afrinova-red flex items-center justify-center text-afrinova-red font-bold text-xl">
                3
              </div>
              
              <h4 className="text-xl font-bold text-white mt-2 mb-4">Phase 3: Scale <span className="text-afrinova-gold">(Weeks 7-8)</span></h4>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-afrinova-red font-bold mr-2">Mindset:</span>
                  <span className="text-gray-300">Think like a CEO</span>
                </li>
                <li className="flex items-start">
                  <span className="text-afrinova-red font-bold mr-2">Skills:</span>
                  <span className="text-gray-300">Automation & team building</span>
                </li>
                <li className="flex items-start">
                  <span className="text-afrinova-red font-bold mr-2">Action:</span>
                  <span className="text-gray-300">Systemize to earn while you sleep</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Exclusive Bonuses */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            <span className="relative">
              Exclusive Bonuses 
              <span className="absolute -top-4 -right-20 bg-afrinova-red text-white text-xs font-bold py-1 px-3 rounded-full animate-pulse">
                Limited Time
              </span>
            </span>
          </h3>
          
          <div className="glass-card p-8 rounded-xl border border-afrinova-gold">
            <div className="mb-6">
              <h4 className="text-xl font-bold text-white mb-4">First 50 Students Get:</h4>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckIcon size={20} className="text-afrinova-gold mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">1-hour private coaching with James Mbele <span className="text-afrinova-gold">(worth KES 15,000)</span></span>
                </li>
                <li className="flex items-start">
                  <CheckIcon size={20} className="text-afrinova-gold mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Done-for-you campaign setup <span className="text-white font-italic">(we'll build your first ad)</span></span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Early Graduation Reward:</h4>
              
              <div className="glass-card p-4 rounded-lg border border-afrinova-neon/20">
                <p className="text-gray-300">
                  Complete all masterclasses in 4 weeks → Get premium Canva templates <span className="text-afrinova-neon">(worth KES 9,000)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Proven Results */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            <AnimatedScribble type="underline" color="gold">
              Proven Results
            </AnimatedScribble>
          </h3>
          
          <div className="glass-card p-8 rounded-xl border border-afrinova-neon/20 max-w-3xl mx-auto relative">
            <svg className="absolute top-8 left-8 text-afrinova-gold/20 -z-10" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 21C3 16.0294 7.02944 12 12 12C16.9706 12 21 16.0294 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 12C14.4853 12 16.5 9.98528 16.5 7.5C16.5 5.01472 14.4853 3 12 3C9.51472 3 7.5 5.01472 7.5 7.5C7.5 9.98528 9.51472 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            
            <p className="text-xl text-gray-300 italic mb-6">
              "The mindset shifts were game-changing. I went from KES 20,000/month to <span className="text-afrinova-neon font-bold">KES 420,000 in 3 months</span> by combining the personal growth lessons with the marketing strategies."
            </p>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-afrinova-gold to-afrinova-neon mr-4 flex items-center justify-center font-bold text-2xl text-afrinova-black">
                B
              </div>
              <div>
                <p className="font-bold text-white">Bernard M.</p>
                <p className="text-gray-400">Nairobi</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enroll Now */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            <AnimatedScribble type="circle" color="red">
              Enroll Now – 3 Simple Steps
            </AnimatedScribble>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="glass-card p-6 rounded-xl border border-afrinova-gold/20 text-center relative overflow-hidden group hover:border-afrinova-gold transition-all duration-300">
              <div className="absolute -right-10 -top-10 w-20 h-20 bg-afrinova-gold/10 rounded-full group-hover:scale-150 transition-all duration-500"></div>
              
              <div className="w-12 h-12 rounded-full bg-afrinova-gold/20 text-afrinova-gold flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                1
              </div>
              
              <h4 className="text-xl font-bold text-white mb-4">Pay KES 10,000</h4>
              <p className="text-gray-300">
                Lifetime access to training + affiliate platform
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="glass-card p-6 rounded-xl border border-afrinova-neon/20 text-center relative overflow-hidden group hover:border-afrinova-neon transition-all duration-300">
              <div className="absolute -right-10 -top-10 w-20 h-20 bg-afrinova-neon/10 rounded-full group-hover:scale-150 transition-all duration-500"></div>
              
              <div className="w-12 h-12 rounded-full bg-afrinova-neon/20 text-afrinova-neon flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                2
              </div>
              
              <h4 className="text-xl font-bold text-white mb-4">Join Monday's Masterclass</h4>
              <p className="text-gray-300">
                8 PM EAT via Zoom
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="glass-card p-6 rounded-xl border border-afrinova-red/20 text-center relative overflow-hidden group hover:border-afrinova-red transition-all duration-300">
              <div className="absolute -right-10 -top-10 w-20 h-20 bg-afrinova-red/10 rounded-full group-hover:scale-150 transition-all duration-500"></div>
              
              <div className="w-12 h-12 rounded-full bg-afrinova-red/20 text-afrinova-red flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                3
              </div>
              
              <h4 className="text-xl font-bold text-white mb-4">Start Earning</h4>
              <p className="text-gray-300">
                Using our plug-and-play systems
              </p>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-xl text-afrinova-red font-bold animate-pulse">
              Only a few spots remain – Our last cohort sold out in 48 hours!
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-xl border border-afrinova-gold/20 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Contact Us</h4>
                <div className="flex items-center mb-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-afrinova-neon mr-2">
                    <path d="M17.6 2.7998H6.3C5.00736 2.7998 3.9 3.90716 3.9 5.1998V18.7998C3.9 20.0924 5.00736 21.1998 6.3 21.1998H17.7C18.9926 21.1998 20.1 20.0924 20.1 18.7998V5.1998C20.1 3.90716 18.9926 2.7998 17.7 2.7998H17.6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 6.5998H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 18.3998H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-gray-300">
                    <span className="text-afrinova-gold">WhatsApp:</span> +254 116 330665 / +254710361624
                  </span>
                </div>
                <div className="flex items-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-afrinova-neon mr-2">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-gray-300">
                    <span className="text-afrinova-gold">Website:</span> www.jamesmbele.com
                  </span>
                </div>
              </div>
              
              <div className="glass-card p-4 rounded-lg border border-afrinova-neon/30 flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-afrinova-neon mr-2 flex-shrink-0">
                  <path d="M22 11.0801V12.0001C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.86011" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-white">
                  <span className="text-afrinova-gold font-bold">60-Day Money-Back Guarantee:</span> If you don't earn back your fee by implementing what we teach, we'll refund you – no questions asked.
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
