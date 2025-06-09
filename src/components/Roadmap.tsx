import React from 'react';
import { Rocket, Target, Crown, Globe } from 'lucide-react';

const Roadmap: React.FC = () => {
  const phases = [
    {
      phase: 'PHASE 1',
      title: 'Launch & Liquidity Lock',
      description: 'Token deployment, initial liquidity provision, and smart contract verification.',
      icon: Rocket,
      status: 'completed'
    },
    {
      phase: 'PHASE 2',
      title: 'Marketing Blitz & CEX Listing',
      description: 'Aggressive marketing campaign and major centralized exchange listings.',
      icon: Target,
      status: 'active'
    },
    {
      phase: 'PHASE 3',
      title: 'NFT Collection & Staking',
      description: 'Launch exclusive Redacted Frog NFTs and staking rewards program.',
      icon: Crown,
      status: 'upcoming'
    },
    {
      phase: 'PHASE 4',
      title: 'DAO Governance & Expansion',
      description: 'Full decentralized governance and ecosystem expansion initiatives.',
      icon: Globe,
      status: 'upcoming'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 cyber-grid opacity-15"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 text-glow-red">
            MISSION <span className="text-red-500">ROADMAP</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our strategic plan to dominate the meme coin universe
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 via-red-400 to-red-300 glow-red hidden lg:block"></div>
          
          <div className="space-y-16">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-red-500 glow-red-intense flex items-center justify-center z-10 hidden lg:flex">
                    <div className="w-8 h-6 bg-green-400 rounded-full relative">
                      <div className="absolute top-0 left-1 w-1.5 h-1.5 bg-red-500 rounded-full pulse-red"></div>
                      <div className="absolute top-0 right-1 w-1.5 h-1.5 bg-red-500 rounded-full pulse-red"></div>
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className={`cyber-card group hover:scale-105 transition-all duration-300 ${
                      phase.status === 'completed' ? 'border-green-500/50 bg-green-500/5' :
                      phase.status === 'active' ? 'border-red-500/50 bg-red-500/5' :
                      'border-gray-500/30 bg-gray-500/5'
                    }`}>
                      <div className="flex items-start gap-4">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                          phase.status === 'completed' ? 'bg-green-500/20' :
                          phase.status === 'active' ? 'bg-red-500/20' :
                          'bg-gray-500/20'
                        }`}>
                          <Icon className={`w-8 h-8 ${
                            phase.status === 'completed' ? 'text-green-400' :
                            phase.status === 'active' ? 'text-red-400' :
                            'text-gray-400'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`text-sm font-cyber font-bold px-3 py-1 rounded-full ${
                              phase.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                              phase.status === 'active' ? 'bg-red-500/20 text-red-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                              {phase.phase}
                            </span>
                            {phase.status === 'completed' && (
                              <span className="text-green-400 text-sm">✓ COMPLETE</span>
                            )}
                            {phase.status === 'active' && (
                              <span className="text-red-400 text-sm pulse-red">● ACTIVE</span>
                            )}
                          </div>
                          <h3 className="text-2xl font-cyber font-bold mb-3 text-white">
                            {phase.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed">
                            {phase.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Spacer for timeline */}
                  <div className="hidden lg:block lg:w-2/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;