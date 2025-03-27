
import React from 'react';
import { AlertCircle, CheckCircle, Users, Calendar, Award, Star, Zap, DollarSign } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Link } from 'react-router-dom';
import PulseButton from './ui/PulseButton';

const ProgramInfo = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-afrinova-black via-afrinova-black/95 to-afrinova-black section-reveal">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-afrinova-neon via-white to-afrinova-gold bg-clip-text text-transparent">
            360° Digital Marketing & Personal Development Powerhouse
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The Complete Blueprint for Financial Freedom & Digital Success – Africa & Middle East's Most Transformative Program
          </p>
        </div>

        {/* Why Life-Changing Section */}
        <div className="mb-16 glass-card p-8 rounded-xl border border-afrinova-neon/20">
          <h3 className="text-3xl font-bold text-afrinova-neon mb-6 text-center">
            Why This Program is Life-Changing
          </h3>
          <p className="text-gray-300 text-center mb-8">
            We don't just teach skills – we transform mindsets and bank accounts through:
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
            <div className="bg-afrinova-black/60 p-6 rounded-lg border border-afrinova-gold/20 flex-1">
              <CheckCircle className="h-10 w-10 text-afrinova-neon mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Personal Development Mastery</h4>
            </div>
            <div className="text-3xl text-afrinova-gold">+</div>
            <div className="bg-afrinova-black/60 p-6 rounded-lg border border-afrinova-gold/20 flex-1">
              <CheckCircle className="h-10 w-10 text-afrinova-neon mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Digital Marketing Expertise</h4>
            </div>
            <div className="text-3xl text-afrinova-gold">=</div>
            <div className="bg-afrinova-black/60 p-6 rounded-lg border border-afrinova-red/30 flex-1">
              <DollarSign className="h-10 w-10 text-afrinova-gold mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Your Shortcut to Financial Freedom</h4>
            </div>
          </div>
        </div>

        {/* What You'll Master Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-10 text-center">
            What You'll Master
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Personal Development Column */}
            <div className="glass-card p-6 rounded-xl border border-afrinova-neon/20">
              <div className="flex items-center mb-6">
                <Zap className="h-8 w-8 text-afrinova-neon mr-4" />
                <h4 className="text-2xl font-bold text-white">Personal Development Pillars</h4>
                <span className="ml-2 text-afrinova-gold">(Mondays)</span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-xl font-semibold text-afrinova-gold mb-2">Mindset Revolution</h5>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
                    <li>Break limiting beliefs holding you back from success</li>
                    <li>Develop the psychology of top earners</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-xl font-semibold text-afrinova-gold mb-2">Wealth Consciousness</h5>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
                    <li>Financial literacy tailored for African/Middle Eastern markets</li>
                    <li>Cashflow Quadrant: Transition from employee to investor</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-xl font-semibold text-afrinova-gold mb-2">High-Performance Habits</h5>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
                    <li>Time management systems of millionaire entrepreneurs</li>
                    <li>Building unstoppable discipline</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Digital Marketing Column */}
            <div className="glass-card p-6 rounded-xl border border-afrinova-neon/20">
              <div className="flex items-center mb-6">
                <Zap className="h-8 w-8 text-afrinova-neon mr-4" />
                <h4 className="text-2xl font-bold text-white">Digital Marketing Domination</h4>
                <span className="ml-2 text-afrinova-gold">(Fridays)</span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-xl font-semibold text-afrinova-gold mb-2">The Complete Funnel System</h5>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
                    <li>Lead generation → Conversion → Scaling</li>
                    <li>Taught through real Africa-focused case studies</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-xl font-semibold text-afrinova-gold mb-2">Social Media Money Machines</h5>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
                    <li>Facebook/Instagram/TikTok ads that actually convert in our markets</li>
                    <li>WhatsApp marketing automation (the untapped goldmine)</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-xl font-semibold text-afrinova-gold mb-2">SEO & Content That Sells</h5>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
                    <li>Rank #1 on Google for profitable keywords in your niche</li>
                    <li>Create viral content that builds authority AND makes sales</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Weekly Workshops */}
            <div className="glass-card p-6 rounded-xl border border-afrinova-neon/20 md:col-span-2">
              <div className="flex items-center mb-6">
                <Calendar className="h-8 w-8 text-afrinova-neon mr-4" />
                <h4 className="text-2xl font-bold text-white">Weekly Physical Workshops</h4>
              </div>
              
              <p className="text-gray-300 mb-4">Hands-on sessions alternating between:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-afrinova-black/60 p-4 rounded-lg border border-afrinova-gold/20">
                  <h5 className="text-xl font-semibold text-afrinova-gold mb-2">Personal Growth</h5>
                  <p className="text-gray-300">Vision board creation, accountability circles</p>
                </div>
                
                <div className="bg-afrinova-black/60 p-4 rounded-lg border border-afrinova-gold/20">
                  <h5 className="text-xl font-semibold text-afrinova-gold mb-2">Digital Skills</h5>
                  <p className="text-gray-300">Live campaign builds, ad copy critiques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* How This Benefits YOU Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-10 text-center">
            How This Benefits YOU
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Immediate Earning */}
            <div className="glass-card p-6 rounded-xl border border-afrinova-neon/20">
              <div className="flex items-center mb-6">
                <DollarSign className="h-8 w-8 text-afrinova-neon mr-4" />
                <h4 className="text-2xl font-bold text-white">Immediate Earning Potential</h4>
              </div>
              
              <p className="text-gray-300 mb-4">Start earning from Day 1 through our affiliate program:</p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-afrinova-neon mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Real Estate:</span> Earn 30% commission per closed deal (we provide the buyer leads)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-afrinova-neon mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Automotive:</span> 30% commission per car sale
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-afrinova-neon mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Health Products:</span> 30% commission on every supplement bundle sold
                  </span>
                </li>
              </ul>
            </div>
            
            {/* Long-Term Advantages */}
            <div className="glass-card p-6 rounded-xl border border-afrinova-neon/20">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-afrinova-neon mr-4" />
                <h4 className="text-2xl font-bold text-white">Long-Term Advantages</h4>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-xl font-semibold text-afrinova-gold mb-2">Dual "Package"</h5>
                  <p className="text-gray-300">Benefit from Personal Development Coach + Digital Marketing Pro experiences of our team</p>
                </div>
                
                <div>
                  <h5 className="text-xl font-semibold text-afrinova-gold mb-2">Recurring Income Streams</h5>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
                    <li>Lifetime commission from your account - unlimited wealth creation.</li>
                    <li>Ongoing commissions from repeat customers e.g Health and Wellness products</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Elite Community */}
            <div className="glass-card p-6 rounded-xl border border-afrinova-neon/20">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-afrinova-neon mr-4" />
                <h4 className="text-2xl font-bold text-white">Elite Community Access</h4>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop" 
                  alt="Community Members" 
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-afrinova-black to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold">WhatsApp mastermind group with top performers</p>
                </div>
              </div>
              
              <p className="text-gray-300">
                Currently 15+ members generating money per month, sharing insights and supporting each other's growth.
              </p>
            </div>
          </div>
        </div>

        {/* Transformation Roadmap */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-10 text-center">
            Your 8-Week Transformation Roadmap
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="glass-card p-6 rounded-xl border border-afrinova-neon/20">
              <h4 className="text-2xl font-bold text-white text-center mb-4">Phase 1: Foundation</h4>
              <p className="text-afrinova-gold text-center mb-4">Weeks 1-4</p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-semibold text-afrinova-neon mr-2">Mindset:</span>
                  <span className="text-gray-300">Rewire your money beliefs</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-afrinova-neon mr-2">Skills:</span>
                  <span className="text-gray-300">Master lead generation & content creation</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-afrinova-neon mr-2">Action:</span>
                  <span className="text-gray-300">Set up your first 2 income streams</span>
                </li>
              </ul>
            </div>
            
            {/* Phase 2 */}
            <div className="glass-card p-6 rounded-xl border border-afrinova-neon/20">
              <h4 className="text-2xl font-bold text-white text-center mb-4">Phase 2: Monetization</h4>
              <p className="text-afrinova-gold text-center mb-4">Weeks 5-6</p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-semibold text-afrinova-gold mr-2">Mindset:</span>
                  <span className="text-gray-300">Develop resilience against rejection</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-afrinova-gold mr-2">Skills:</span>
                  <span className="text-gray-300">Advanced sales conversion techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-afrinova-gold mr-2">Action:</span>
                  <span className="text-gray-300">Close your first 3-5 deals with our templates</span>
                </li>
              </ul>
            </div>
            
            {/* Phase 3 */}
            <div className="glass-card p-6 rounded-xl border border-afrinova-neon/20">
              <h4 className="text-2xl font-bold text-white text-center mb-4">Phase 3: Scale</h4>
              <p className="text-afrinova-gold text-center mb-4">Weeks 7-8</p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-semibold text-afrinova-red mr-2">Mindset:</span>
                  <span className="text-gray-300">Think like a CEO</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-afrinova-red mr-2">Skills:</span>
                  <span className="text-gray-300">Automation & team building</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-afrinova-red mr-2">Action:</span>
                  <span className="text-gray-300">Systemize to earn while you sleep</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bonuses & Enrollment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          {/* Bonuses */}
          <div className="glass-card p-6 rounded-xl border border-afrinova-neon/20">
            <h3 className="text-3xl font-bold text-white mb-6">
              Exclusive Bonuses <span className="text-afrinova-gold">(Limited Time)</span>
            </h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">First 50 Students Get:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-afrinova-neon mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">
                      1-hour private coaching with James Mbele (worth KES 15,000)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-afrinova-neon mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">
                      Done-for-you campaign setup (we'll build your first ad)
                    </span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">Early Graduation Reward:</h4>
                <div className="flex items-start">
                  <Star className="h-5 w-5 text-afrinova-neon mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">
                    Complete all masterclasses in 4 weeks → Get premium Canva templates (worth KES 9,000)
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Results & Enrollment */}
          <div>
            {/* Testimonial */}
            <div className="glass-card p-6 rounded-xl border border-afrinova-gold/20 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Proven Results
              </h3>
              
              <div className="relative border-l-4 border-afrinova-neon pl-4 py-2">
                <p className="text-gray-300 italic mb-2">
                  "The mindset shifts were game-changing. I went from KES 20,000/month to KES 420,000 in 3 months by combining the personal growth lessons with the marketing strategies."
                </p>
                <p className="text-white font-semibold">– Bernard M, Nairobi</p>
              </div>
            </div>
            
            {/* Enrollment */}
            <div className="glass-card p-6 rounded-xl border border-afrinova-red/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Enroll Now – 3 Simple Steps
              </h3>
              
              <ol className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-afrinova-red text-white flex items-center justify-center mr-3">
                    1
                  </div>
                  <span className="text-gray-300 pt-1">
                    Pay KES 10,000 (lifetime access to training + affiliate platform)
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-afrinova-red text-white flex items-center justify-center mr-3">
                    2
                  </div>
                  <span className="text-gray-300 pt-1">
                    Join Monday's Masterclass at 8 PM EAT via Zoom
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-afrinova-red text-white flex items-center justify-center mr-3">
                    3
                  </div>
                  <span className="text-gray-300 pt-1">
                    Start Earning using our plug-and-play systems
                  </span>
                </li>
              </ol>
              
              <Alert className="bg-afrinova-red/10 text-white border-afrinova-red mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Limited Spots Available!</AlertTitle>
                <AlertDescription>
                  Our last cohort sold out in 48 hours!
                </AlertDescription>
              </Alert>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link to="/form" className="flex-1">
                  <PulseButton variant="neon" className="w-full">
                    Apply Now
                  </PulseButton>
                </Link>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm italic">
                  P.S. Remember our 60-Day Money-Back Guarantee: If you don't earn back your fee by implementing what we teach, we'll refund you – no questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramInfo;
