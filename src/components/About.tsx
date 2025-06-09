import React from 'react';
import { Terminal, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 text-glow-red">
            ABOUT THE <span className="text-red-500">MISSION</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="cyber-card fade-in">
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                <span className="text-red-400 font-semibold">Redacted Frog</span> is a community-driven meme coin built for frogs who know too much. 
                On a mission to <span className="text-red-400">decentralize the truth</span>, one red pill at a time.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="cyber-card text-center group hover:scale-105 transition-transform duration-300">
                <Shield className="w-12 h-12 text-red-500 mx-auto mb-4 group-hover:text-red-400" />
                <h3 className="font-cyber font-bold text-lg mb-2">SECURE</h3>
                <p className="text-sm text-gray-400">Audited smart contracts</p>
              </div>
              
              <div className="cyber-card text-center group hover:scale-105 transition-transform duration-300">
                <Zap className="w-12 h-12 text-red-500 mx-auto mb-4 group-hover:text-red-400" />
                <h3 className="font-cyber font-bold text-lg mb-2">FAST</h3>
                <p className="text-sm text-gray-400">Lightning transactions</p>
              </div>
              
              <div className="cyber-card text-center group hover:scale-105 transition-transform duration-300">
                <Terminal className="w-12 h-12 text-red-500 mx-auto mb-4 group-hover:text-red-400" />
                <h3 className="font-cyber font-bold text-lg mb-2">DECENTRALIZED</h3>
                <p className="text-sm text-gray-400">Community governed</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Terminal Frog */}
          <div className="cyber-card p-8 relative">
            <div className="bg-black rounded-lg p-6 border border-red-500/30">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-red-500/30">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-400 ml-2 font-mono">frog@classified:~$</span>
              </div>
              
              {/* Terminal Content */}
              <div className="space-y-2 font-mono text-sm">
                <div className="text-green-400">$ initialize_revolution.sh</div>
                <div className="text-gray-400">Loading classified protocols...</div>
                <div className="text-red-400">REDACTED_FROG_TOKEN initialized</div>
                <div className="text-gray-400">Decentralization level: MAXIMUM</div>
                <div className="text-green-400">Status: READY TO DEPLOY</div>
                <div className="text-red-400 pulse-red">█</div>
              </div>
              
              {/* Frog Character in Terminal */}
              <div className="mt-6 text-center">
                <div className="inline-block relative">
                  <div className="w-20 h-16 bg-green-400 rounded-full relative mx-auto">
                    <div className="absolute top-1 left-2 w-3 h-3 bg-red-500 rounded-full glow-red pulse-red"></div>
                    <div className="absolute top-1 right-2 w-3 h-3 bg-red-500 rounded-full glow-red pulse-red"></div>
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-green-600 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2 font-mono">FROG_AGENT_007</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;