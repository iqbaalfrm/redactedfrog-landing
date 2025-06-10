import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Bottom Bar */}
        <div className="border-t border-red-500/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0 text-center md:text-left">
            © 2025 RedactedFrog. All rights reserved. Built by the community, for the community.
          </p>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500 text-center md:text-right">
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
