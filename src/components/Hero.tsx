import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import RedactedLogo from '../assets/redacted-logo.png';


const Hero: React.FC = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Cyberpunk Background */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      {/* Animated Circuit Lines */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent pulse-red"></div>
        <div className="absolute top-1/2 right-0 w-1/4 h-px bg-gradient-to-l from-transparent via-red-500 to-transparent pulse-red" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent pulse-red" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Frog Character */}
       {/* Redacted Logo */}
        <div className="mb-12 slide-in">
          <div className="w-64 h-64 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full bg-gradient-to-b from-gray-800 to-black border-4 border-red-500 glow-red flex items-center justify-center overflow-hidden">
              <img
                src={RedactedLogo}
                alt="Redacted Frog Logo"
                className="object-contain w-48 h-48"
              />
            </div>
          </div>
        </div>
        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-cyber font-black mb-6 text-glow-red slide-in" style={{animationDelay: '0.2s'}}>
          REDACTED
          <br />
          <span className="text-red-500">FROG</span>
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto slide-in" style={{animationDelay: '0.4s'}}>
          The most <span className="text-red-400 font-semibold">classified</span> meme token ever deployed.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center slide-in" style={{animationDelay: '0.6s'}}>
          <button className="neon-button flex items-center gap-3 text-lg">
            Buy Token
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border-2 border-red-500 text-red-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-red-500 hover:text-white hover:scale-105 flex items-center gap-3 text-lg">
            <FileText className="w-5 h-5" />
            View Whitepaper
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;