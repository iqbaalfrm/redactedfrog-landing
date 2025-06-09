import React from 'react';
import { FileText, Shield, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-16 px-4 border-t border-red-500/30">
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-10 bg-green-400 rounded-full relative">
                <div className="absolute top-1 left-1.5 w-2 h-2 bg-red-500 rounded-full pulse-red"></div>
                <div className="absolute top-1 right-1.5 w-2 h-2 bg-red-500 rounded-full pulse-red"></div>
              </div>
              <span className="text-2xl font-cyber font-bold text-red-400">REDACTED FROG</span>
            </div>
            <p className="text-gray-400 max-w-md">
              The most classified meme token in the crypto space. Built by the community, 
              for the community. Join the revolution.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-cyber font-bold text-lg mb-4 text-red-400">QUICK ACCESS</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Smart Contract
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contract Info */}
          <div>
            <h3 className="font-cyber font-bold text-lg mb-4 text-red-400">CONTRACT</h3>
            <div className="cyber-card bg-black/50">
              <p className="text-xs text-gray-500 mb-2">CONTRACT ADDRESS</p>
              <p className="font-mono text-sm text-red-400 break-all">
                0x742d35...frog5576
              </p>
              <button className="mt-3 text-xs text-gray-400 hover:text-red-400 transition-colors duration-300">
                COPY ADDRESS
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-red-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-gray-500 text-sm">
                © 2025 Redacted Frog. All rights reserved.
              </p>
              <div className="w-6 h-5 bg-green-400 rounded-full relative">
                <div className="absolute top-0.5 left-1 w-1 h-1 bg-red-500 rounded-full pulse-red"></div>
                <div className="absolute top-0.5 right-1 w-1 h-1 bg-red-500 rounded-full pulse-red"></div>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-gray-500 text-sm">Built on</span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-500 rounded glow-red"></div>
                <span className="text-red-400 font-semibold">Ethereum</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -bottom-4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
      </div>
    </footer>
  );
};

export default Footer;