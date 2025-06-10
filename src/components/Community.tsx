import React from 'react';
import logoOnly from '../assets/redacted-logoonly.png'; // pastikan path-nya sesuai

const Community = () => {
  return (
    <section id="community" className="py-20 bg-gradient-to-b from-red-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 border border-red-500/30 rounded-3xl p-12 text-center">
          {/* Logo */}
          <div className="mb-6">
            <img 
              src={logoOnly} 
              alt="Redacted Logo" 
              className="h-16 sm:h-20 lg:h-24 xl:h-28 object-contain mx-auto" 
            />
          </div>

          {/* Headline */}
          <h3 className="text-3xl sm:text-4xl font-bebas text-white mb-4">
            Ready to Join the Revolution?
          </h3>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't just watch from the sidelines. Be part of the community that's rewriting 
            the rules of meme coins. Your voice matters in the RedactedFrog revolution.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30">
              Buy $RFROG Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
