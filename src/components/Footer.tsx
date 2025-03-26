
import React from 'react';
import { Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-footer-pattern relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-afrinova-neon to-afrinova-gold bg-clip-text text-transparent mb-2">AfriPulse</h2>
            <p className="text-gray-400">Where Nairobi Grit Meets Middle East Gold</p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077B5]/10 border border-[#0077B5]/30 text-white hover:bg-[#0077B5]/20 transition-all duration-300"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="https://wa.me/254116330665" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-white hover:bg-[#25D366]/20 transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6 6.31999C16.8 5.49999 15.8 4.84999 14.7 4.39999C13.6 3.94999 12.3 3.69999 11 3.69999C9.7 3.69999 8.5 3.94999 7.3 4.39999C6.2 4.84999 5.2 5.49999 4.3 6.31999C3.5 7.13999 2.9 8.13999 2.4 9.19999C2 10.3 1.7 11.5 1.7 12.8C1.7 14.5 2.1 16.1 3 17.5L1.6 22.4L6.6 21C7.9 21.7 9.4 22.1 11 22.1C12.3 22.1 13.5 21.9 14.7 21.4C15.8 21 16.8 20.3 17.6 19.5C18.4 18.7 19.1 17.7 19.5 16.6C20 15.5 20.2 14.3 20.2 13C20.3 11.7 20 10.5 19.6 9.39999C19.1 8.13999 18.5 7.13999 17.6 6.31999ZM11 20.3C9.6 20.3 8.2 19.9 7 19.2L6.7 19L3.8 19.9L4.7 17.1L4.4 16.8C3.6 15.5 3.2 14.1 3.2 12.7C3.2 11.5 3.5 10.4 3.9 9.39999C4.3 8.39999 4.9 7.49999 5.6 6.79999C6.3 6.09999 7.2 5.49999 8.2 5.09999C9.2 4.69999 10.3 4.49999 11.5 4.49999C12.7 4.49999 13.7 4.69999 14.8 5.09999C15.8 5.49999 16.6 6.09999 17.4 6.79999C18.1 7.49999 18.7 8.39999 19.1 9.39999C19.5 10.4 19.7 11.5 19.7 12.7C19.7 13.9 19.4 15 19 16C18.6 17 18 17.8 17.3 18.5C16.6 19.2 15.7 19.8 14.7 20.2C13.6 20.3 12.3 20.3 11 20.3ZM15.1 14.7C14.9 14.6 14.7 14.6 14.5 14.5L13.7 14.1C13.5 14 13.3 14 13.1 14.1L12.9 14.3C12.7 14.5 12.4 14.7 12.1 14.7C12 14.7 11.9 14.7 11.8 14.6C11.1 14.3 10.4 13.8 9.9 13.3C9.4 12.8 8.9 12.2 8.6 11.4C8.4 11 8.7 10.7 8.9 10.4C9 10.3 9.1 10.1 9.1 9.89999C9.1 9.69999 8.8 9.09999 8.6 8.79999C8.4 8.49999 8.1 8.19999 7.8 7.99999C7.7 7.89999 7.5 7.89999 7.3 7.89999C7.1 7.89999 6.9 7.99999 6.7 7.99999C6.5 8.09999 6.3 8.19999 6.1 8.39999C5.9 8.59999 5.8 8.79999 5.7 8.99999C5.4 9.79999 5.4 10.6 5.7 11.4C6.3 13.2 7.3 14.7 8.6 15.9C9.1 16.4 9.7 16.8 10.3 17.2C11 17.6 11.7 17.8 12.4 17.9H13.1C13.5 17.9 13.9 17.7 14.2 17.5C14.4 17.3 14.5 17.2 14.6 17C14.6 16.8 14.7 16.6 14.7 16.4C14.7 16.3 14.7 16.1 14.8 16C14.9 15.8 14.9 15.6 14.9 15.5C15 15.2 15.3 15 15.1 14.7Z" fill="#25D366"/>
              </svg>
              <span>WhatsApp (+254 116330665)</span>
            </a>
          </div>
        </div>
        
        <div className="h-px w-full bg-gradient-to-r from-afrinova-neon/40 via-afrinova-gold/40 to-afrinova-red/40 mb-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} AfriPulse. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-afrinova-neon transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-afrinova-neon transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-afrinova-gold transition-colors">FAQ</a>
          </div>
        </div>
      </div>
      
      {/* Decorative patterns */}
      <div className="absolute bottom-0 left-0 w-full h-16 opacity-20">
        {/* Matatu stripes + desert swirls pattern */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 50" className="w-full">
            <path d="M0,25 Q300,0 600,25 T1200,25" stroke="#00FF66" strokeWidth="2" fill="none" />
            <path d="M0,35 Q300,10 600,35 T1200,35" stroke="#D4AF37" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
