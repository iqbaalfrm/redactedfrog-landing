import React from 'react';
import { Twitter, Send, MessageCircle, ExternalLink, Zap } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Telegram', icon: Send, href: '#' },
    { name: 'Discord', icon: MessageCircle, href: '#' }
  ];

  const quickLinks = [
    { name: 'Buy $RFROG', href: '#' },
    { name: 'Chart', href: '#' },
    { name: 'Whitepaper', href: '#' },
    { name: 'Audit', href: '#' }
  ];

  return (
    <footer className="bg-black border-t border-red-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-8 h-8 text-red-500" />
              <span className="text-2xl font-bebas text-white">RedactedFrog</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The meme coin revolution that started in the shadows and emerged to challenge 
              the status quo. Join us in the rebellion against centralized control.
            </p>
            
            {/* Contract Address */}
            <div className="bg-red-950/20 border border-red-500/30 rounded-lg p-4 mb-6">
              <div className="text-sm text-red-400 font-semibold mb-1">Contract Address:</div>
              <div className="text-xs text-gray-300 font-mono break-all">
                0x████████████████████████████████████████████
              </div>
              <div className="text-xs text-gray-500 mt-1">
                [REDACTED FOR SECURITY]
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bebas text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200 flex items-center space-x-1"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-lg font-bebas text-white mb-4">Community</h4>
            <ul className="space-y-3">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a 
                    href={social.href}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <social.icon className="w-4 h-4" />
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-500/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 RedactedFrog. All rights reserved. Built by the community, for the community.
          </p>
          
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <span>🐸 HODL STRONG</span>
            <span>•</span>
            <span>DIAMOND HANDS ONLY</span>
            <span>•</span>
            <span>TO THE AMPHIBIAN MOON 🌙</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;