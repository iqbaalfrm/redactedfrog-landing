import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, Rocket, Target, Trophy, Zap } from 'lucide-react';

const Roadmap = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "The Awakening",
      status: "completed",
      icon: CheckCircle,
      items: [
        "🐸 RedactedFrog contract deployed",
        "💧 Liquidity pool created",
        "🔥 LP tokens burned forever",
        "🚀 Fair launch completed"
      ]
    },
    {
      phase: "Phase 2",
      title: "Community Building",
      status: "in-progress",
      icon: Target,
      items: [
        "📱 Telegram & Twitter growth",
        "🎨 Meme creation contests",
        "🤝 Community partnerships",
        "📈 First exchange listings"
      ]
    },
    {
      phase: "Phase 3",
      title: "The Revolution",
      status: "upcoming",
      icon: Rocket,
      items: [
        "🏪 RedactedFrog merchandise",
        "🎮 Community gaming events",
        "💰 Staking rewards program",
        "🌍 Global marketing campaign"
      ]
    },
    {
      phase: "Phase 4",
      title: "Legendary Status",
      status: "future",
      icon: Trophy,
      items: [
        "🏛️ DAO governance launch",
        "🔗 Cross-chain expansion",
        "📚 RedactedFrog university",
        "🌟 Meme coin hall of fame"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.roadmap-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'from-green-400 to-green-600';
      case 'in-progress': return 'from-yellow-400 to-orange-500';
      case 'upcoming': return 'from-red-400 to-red-600';
      case 'future': return 'from-purple-400 to-purple-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-black to-red-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bebas text-white mb-6">
            The <span className="text-red-400">Roadmap</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our journey from shadow to legend. Every milestone brings us closer to immortality.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-red-500 to-red-600 hidden lg:block"></div>

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div 
                key={index}
                data-index={index}
                className={`roadmap-item relative transition-all duration-700 ${
                  visibleItems.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <div className={`lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-black/40 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 hover:bg-black/60 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`p-2 rounded-full bg-gradient-to-r ${getStatusColor(item.status)}`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-red-400 font-semibold">{item.phase}</div>
                          <div className="text-xl font-bebas text-white">{item.title}</div>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {item.items.map((listItem, itemIndex) => (
                          <li key={itemIndex} className="text-gray-300 flex items-center space-x-2">
                            <span className="text-xs">•</span>
                            <span>{listItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:flex items-center justify-center w-2/12">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${getStatusColor(item.status)} border-4 border-black shadow-lg`}></div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 border border-red-500/30 rounded-3xl p-8 max-w-2xl mx-auto">
            <Zap className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bebas text-white mb-4">Join the Revolution</h3>
            <p className="text-gray-300 mb-6">
              Be part of the community that's writing the next chapter of meme coin history.
            </p>
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-full font-bold transition-all duration-200 hover:scale-105">
              Get $RFROG Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;