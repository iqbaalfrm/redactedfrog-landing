import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <Hero />
      <About />
      <Community />
      <Footer />
    </div>
  );
}

export default App;