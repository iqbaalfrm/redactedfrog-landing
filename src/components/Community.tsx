import React from 'react';
import { MessageCircle, Twitter, Users } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-black to-black"></div>
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Frog Army Silhouettes */}
      <div className="absolute bottom-0 left-0 w-full h-32 flex items-end justify-center space-x-8 opacity-30">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`w-8 h-6 bg-red-500 rounded-full relative ${i % 2 === 0 ? 'mb-4' : 'mb-8'}`}>
            <div className="absolute top-0 left-1 w-1 h-1 bg-red-400 rounded-full pulse-red"></div>
            <div className="absolute top-0 right-1 w-1 h-1 bg-red-400 rounded-full pulse-red"></div>
          </div>
        ))}
      </div>
      
      {/* Blood Red Moon */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-red-500 to-red-800 glow-red-intense opacity-40"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-cyber font-bold mb-6 text-glow-red">
          JOIN THE <span className="text-red-500">RESISTANCE</span>
        </h2>
        
        <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-semibold">
          Be part of the revolution.
        </p>
        <p className="text-xl md:text-2xl text-red-400 mb-16 font-cyber">
          Join the frog revolution.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
          {/* Telegram */}
          <a href="#" className="group">
            <div className="cyber-card w-64 h-32 flex flex-col items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:border-red-400">
              <MessageCircle className="w-12 h-12 text-red-500 mb-3 group-hover:text-red-400 glow-red" />
              <span className="font-cyber font-bold text-lg">TELEGRAM</span>
              <span className="text-sm text-gray-400">Join the chat</span>
            </div>
          </a>
          
          {/* Twitter/X */}
          <a href="#" className="group">
            <div className="cyber-card w-64 h-32 flex flex-col items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:border-red-400">
              <Twitter className="w-12 h-12 text-red-500 mb-3 group-hover:text-red-400 glow-red" />
              <span className="font-cyber font-bold text-lg">X (TWITTER)</span>
              <span className="text-sm text-gray-400">Follow updates</span>
            </div>
          </a>
          
          {/* Discord */}
          <a href="#" className="group">
            <div className="cyber-card w-64 h-32 flex flex-col items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:border-red-400">
              <Users className="w-12 h-12 text-red-500 mb-3 group-hover:text-red-400 glow-red" />
              <span className="font-cyber font-bold text-lg">DISCORD</span>
              <span className="text-sm text-gray-400">Join the community</span>
            </div>
          </a>
        </div>
        
        <div className="cyber-card bg-red-500/10 border-red-500/50 max-w-2xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-cyber font-bold mb-4 text-red-400">
              CLASSIFIED INTEL AVAILABLE
            </h3>
            <p className="text-gray-300 mb-6">
              Get exclusive updates, insider information, and early access to new developments. 
              The revolution needs informed soldiers.
            </p>
            <button className="neon-button">
              SUBSCRIBE TO INTEL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;