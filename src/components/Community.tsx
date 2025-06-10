import React from 'react';
import { MessageCircle, Twitter, Users, Send, ExternalLink } from 'lucide-react';

const Community = () => {
  const socialLinks = [
    {
      name: "Telegram",
      icon: Send,
      description: "Join our main community chat",
      members: "12.5K+ members",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700"
    },
    {
      name: "Twitter/X",
      icon: Twitter,
      description: "Follow for latest updates",
      members: "8.2K+ followers",
      color: "from-black to-gray-800",
      hoverColor: "hover:from-gray-800 hover:to-black"
    },
    {
      name: "Discord",
      icon: MessageCircle,
      description: "Deep community discussions",
      members: "5.7K+ members",
      color: "from-indigo-500 to-purple-600",
      hoverColor: "hover:from-indigo-600 hover:to-purple-700"
    }
  ];

  const communityStats = [
    { label: "Community Members", value: "25K+", icon: Users },
    { label: "Daily Messages", value: "2.5K+", icon: MessageCircle },
    { label: "Countries", value: "67", icon: ExternalLink },
    { label: "Memes Created", value: "∞", icon: Twitter }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-b from-red-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bebas text-white mb-6">
            Join the <span className="text-red-400">Rebellion</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Become part of the most passionate community in crypto. Share memes, discuss strategies, 
            and help us build the future of decentralized rebellion.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <div 
              key={index}
              className="bg-black/40 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 text-center hover:bg-black/60 transition-all duration-300 hover:scale-105"
            >
              <stat.icon className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl font-bebas text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {socialLinks.map((social, index) => (
            <div 
              key={index}
              className={`group bg-gradient-to-br ${social.color} rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 cursor-pointer ${social.hoverColor} shadow-2xl hover:shadow-red-500/20`}
            >
              <social.icon className="w-16 h-16 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-2xl font-bebas text-white mb-2">{social.name}</h3>
              <p className="text-white/80 mb-3">{social.description}</p>
              <div className="text-sm text-white/60 mb-4">{social.members}</div>
              <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 mx-auto">
                <span>Join Now</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 border border-red-500/30 rounded-3xl p-12 text-center">
          <div className="text-6xl mb-6">🐸</div>
          <h3 className="text-3xl sm:text-4xl font-bebas text-white mb-4">
            Ready to Join the Revolution?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't just watch from the sidelines. Be part of the community that's rewriting 
            the rules of meme coins. Your voice matters in the RedactedFrog revolution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30">
              Buy $RFROG Now
            </button>
            <button className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:scale-105">
              Join Telegram
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;