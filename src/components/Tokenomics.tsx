import React from 'react';
import { PieChart, TrendingUp, Lock, Users } from 'lucide-react';

const Tokenomics: React.FC = () => {
  const tokenomicsData = [
    { label: 'Liquidity', percentage: 40, color: 'bg-red-500', icon: Lock },
    { label: 'Marketing', percentage: 20, color: 'bg-red-400', icon: TrendingUp },
    { label: 'Development', percentage: 20, color: 'bg-red-300', icon: PieChart },
    { label: 'Team', percentage: 10, color: 'bg-red-200', icon: Users },
    { label: 'Airdrop', percentage: 10, color: 'bg-red-100', icon: Users },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 text-glow-red">
            TOKEN<span className="text-red-500">OMICS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transparent distribution designed for long-term growth and community empowerment
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Chart Section */}
          <div className="relative">
            <div className="cyber-card p-8">
              {/* Simplified Donut Chart */}
              <div className="relative w-80 h-80 mx-auto mb-8">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="rgba(239, 68, 68, 0.1)"
                    strokeWidth="10"
                    fill="none"
                  />
                  
                  {/* Liquidity - 40% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#ef4444"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="100 151"
                    strokeDashoffset="0"
                    className="glow-red"
                  />
                  
                  {/* Marketing - 20% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#f87171"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="50 201"
                    strokeDashoffset="-100"
                  />
                  
                  {/* Development - 20% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#fca5a5"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray="50 201"
                    strokeDashoffset="-150"
                  />
                  
                  {/* Team - 10% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#fecaca"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="25 226"
                    strokeDashoffset="-200"
                  />
                  
                  {/* Airdrop - 10% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#fee2e2"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="25 226"
                    strokeDashoffset="-225"
                  />
                </svg>
                
                {/* Center Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-red-500 glow-red-intense flex items-center justify-center">
                    <div className="w-12 h-10 bg-green-400 rounded-full relative">
                      <div className="absolute top-1 left-1 w-2 h-2 bg-red-500 rounded-full pulse-red"></div>
                      <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full pulse-red"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Details Section */}
          <div className="space-y-6">
            {tokenomicsData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="cyber-card group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center group-hover:bg-red-500/30 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-cyber font-semibold text-lg">{item.label}</h3>
                        <span className="text-2xl font-bold text-red-400">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${item.color} glow-red transition-all duration-1000`}
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            
            <div className="cyber-card bg-red-500/5 border-red-500/50">
              <div className="text-center">
                <h3 className="font-cyber font-bold text-xl mb-2 text-red-400">TOTAL SUPPLY</h3>
                <p className="text-3xl font-black text-white">1,000,000,000</p>
                <p className="text-sm text-gray-400 mt-1">REDACTED TOKENS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;