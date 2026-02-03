import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0A0F1E] border-t border-white/5 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-serif italic mb-4">OutreachSmith</h3>
            <p className="text-sm mb-4 font-light">Link Building. Done.</p>
            <p className="text-xs text-gray-500 font-light">Quality link building services for agencies and businesses worldwide.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-medium mb-4 font-light">Services</h4>
            <ul className="space-y-2 text-sm font-light">
              <li><Link to="/blogger-outreach" className="hover:text-[#3B82F6] transition-colors">Blogger Outreach</Link></li>
              <li><Link to="/niche-edits" className="hover:text-[#3B82F6] transition-colors">Niche Edits</Link></li>
              <li><Link to="/multilingual" className="hover:text-[#3B82F6] transition-colors">Multilingual Links</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-medium mb-4 font-light">Company</h4>
            <ul className="space-y-2 text-sm font-light">
              <li><Link to="/case-studies" className="hover:text-[#3B82F6] transition-colors">Case Studies</Link></li>
              <li><Link to="/about" className="hover:text-[#3B82F6] transition-colors">About Us</Link></li>
              <li><a href="mailto:support@outreachsmith.com" className="hover:text-[#3B82F6] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-medium mb-4 font-light">Legal</h4>
            <ul className="space-y-2 text-sm font-light">
              <li><Link to="/privacy" className="hover:text-[#3B82F6] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#3B82F6] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 text-center text-sm font-light">
          <p className="text-gray-400">&copy; 2026 OutreachSmith. Quality Link Building Services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;