import React, { useEffect, useState } from 'react';
import { TrendingUp, BarChart3, ExternalLink } from 'lucide-react';
import logoOnly from '../assets/redacted-logoonly.png';


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black relative overflow-hidden flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-red-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-red-400/30 rounded-full blur-lg animate-bounce delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bebas text-white mb-6 tracking-wider">
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              RedactedFrog
            </span>
           <div className="mt-4 flex justify-center">
            <img src={logoOnly} alt="Redacted Logo" className="h-24 sm:h-28 lg:h-32 xl:h-40 object-contain" />
        </div>

          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto font-light">
            The meme coin <span className="text-red-400 font-semibold">they don't want you to know</span>
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Join the revolution. Embrace the chaos. Become part of the legend that's too dangerous to speak about.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30 flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 group-hover:animate-bounce" />
              <span>Buy on Uniswap</span>
              <ExternalLink className="w-4 h-4" />
            </button>
            
            <button className="group border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30 flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 group-hover:animate-pulse" />
              <span>View Chart</span>
            </button>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;