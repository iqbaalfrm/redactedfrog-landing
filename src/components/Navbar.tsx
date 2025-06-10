import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoOnly from '../assets/redacted-logoonly.png';
import avaxLogo from '../assets/avalanche-avax-logo.png'; // ✅ Import logo AVAX

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Community', href: '#community' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-red-600/20 backdrop-blur-lg border-b border-red-500/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Title */}
          <div className="flex items-center space-x-2">
            <img
              src={logoOnly}
              alt="Redacted Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-bold font-bebas text-white">
              RedactedFrog
            </span>
            {/* AVAX Logo */}
            <img
              src={avaxLogo}
              alt="Avalanche Logo"
              className="h-6 w-6 object-contain ml-2"
              title="Built on Avalanche"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-red-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
            {/* ✅ Buy Now button with external link */}
            <a
              href="https://arena.trade/token/0x6a3ee7dbf407017e58d48b2cc9b55b180f0a3ee7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
            >
              Buy Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg rounded-lg mt-2 p-4 border border-red-500/30">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-white hover:text-red-400 py-2 transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            {/* ✅ Buy Now button mobile */}
            <a
              href="https://arena.trade/token/0x6a3ee7dbf407017e58d48b2cc9b55b180f0a3ee7"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold mt-4 transition-all duration-200 text-center"
            >
              Buy Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
