import React from 'react';
import { Shield, Zap, Users, Eye } from 'lucide-react';
import logo from '../assets/redacted-logo.png';


const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Uncensorable",
      description: "Built on the blockchain, beyond the reach of traditional censorship"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Ethereum-based smart contract with optimized gas efficiency"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "No central authority, governed entirely by the community"
    },
    {
      icon: Eye,
      title: "Transparent",
      description: "All transactions visible on-chain, nothing to hide"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-red-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bebas text-white mb-6">
            The <span className="text-red-400">Legend</span> Begins
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              In the depths of the internet, where memes are born and legends are made, 
              <span className="text-red-400 font-semibold"> RedactedFrog</span> emerged from the shadows. 
              This isn't just another memecoin—it's a movement against the sanitized, corporate-controlled 
              crypto landscape.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Born from the community's desire for authentic, unfiltered expression, RedactedFrog represents 
              the rebellious spirit of the early internet. No marketing budget, no celebrity endorsements, 
              no corporate backing—just pure, unadulterated <span className="text-red-400 font-semibold">meme magic</span>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              They tried to silence the frog. They tried to redact the truth. But the community remembers. 
              The community <span className="text-red-400 font-semibold">never forgets</span>.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-3xl p-8 border border-red-500/30 backdrop-blur-sm">
           <div className="flex justify-center mb-4">
  <img src={logo} alt="Redacted Logo" className="h-24 w-24 object-contain" />
</div>
<div className="text-center">
  <div className="text-2xl font-bebas text-red-400 mb-2">REDACTED</div>
  <div className="text-4xl font-bebas text-white mb-2">FROG</div>
  <div className="text-sm text-gray-400">███████ ████ ██ ██████</div>
</div>

          </div>
        </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-black/40 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 hover:bg-black/60 transition-all duration-300 hover:scale-105 group"
            >
              <feature.icon className="w-12 h-12 text-red-400 mb-4 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-xl font-bebas text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;