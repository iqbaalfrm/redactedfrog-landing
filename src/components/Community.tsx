import React from 'react';

const Community = () => {
  return (
    <section id="community" className="py-20 bg-gradient-to-b from-red-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
