import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <Community />
      <Footer />
    </div>
  );
}

export default App;