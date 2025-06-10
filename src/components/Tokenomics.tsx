import React, { useState, useEffect } from 'react';
import { PieChart, Lock, Flame, Users, Rocket } from 'lucide-react';

const Tokenomics = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('tokenomics');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const tokenomicsData = [
    {
      icon: Users,
      title: "Community",
      percentage: 85,
      color: "from-red-400 to-red-600",
      description: "Distributed to the community"
    },
    {
      icon: Rocket,
      title: "Marketing",
      percentage: 10,
      color: "from-red-500 to-red-700",
      description: "Community marketing initiatives"
    },
    {
      icon: Flame,
      title: "Burned",
      percentage: 5,
      color: "from-red-600 to-red-800",
      description: "Permanently removed from supply"
    }
  ];

  const stats = [
    { label: "Total Supply", value: "1,000,000,000", suffix: "RFROG" },
    { label: "Circulating", value: "850,000,000", suffix: "RFROG" },
    { label: "Buy Tax", value: "0", suffix: "%" },
    { label: "Sell Tax", value: "0", suffix: "%" }
  ];

  return (
    <section id="tokenomics" className="py-20 bg-gradient-to-b from-red-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bebas text-white mb-6">
            <span className="text-red-400">Token</span>omics
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fair launch, community-owned, and built for the long term. No hidden allocations, no team dumps.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Tokenomics Breakdown */}
          <div className="space-y-6">
            {tokenomicsData.map((item, index) => (
              <div 
                key={index}
                className={`bg-black/40 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-8 h-8 text-red-400" />
                    <div>
                      <h3 className="text-xl font-bebas text-white">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bebas text-red-400">{item.percentage}%</div>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div 
                    className={`h-3 bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: isVisible ? `${item.percentage}%` : '0%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-red-600/20 to-red-800/20 border border-red-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-2xl sm:text-3xl font-bebas text-red-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-red-300 mb-1">{stat.suffix}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-black/40 backdrop-blur-sm border border-red-500/30 rounded-3xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <Lock className="w-12 h-12 text-red-400 mx-auto" />
              <h3 className="text-xl font-bebas text-white">Liquidity Locked</h3>
              <p className="text-gray-400 text-sm">LP tokens permanently burned</p>
            </div>
            <div className="space-y-3">
              <PieChart className="w-12 h-12 text-red-400 mx-auto" />
              <h3 className="text-xl font-bebas text-white">Fair Launch</h3>
              <p className="text-gray-400 text-sm">No presale, no team allocation</p>
            </div>
            <div className="space-y-3">
              <Flame className="w-12 h-12 text-red-400 mx-auto" />
              <h3 className="text-xl font-bebas text-white">Renounced</h3>
              <p className="text-gray-400 text-sm">Contract ownership renounced</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;