import React from 'react';
import { Link } from 'react-router-dom';
import { serviceCards } from '../data/pricing';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">OutreachSmith</h3>
            <p className="text-sm text-slate-400 mb-4">
              White-label link building built for agencies, in-house teams, and fast-growing brands.
            </p>
            <p className="text-xs text-slate-500">Questions? Email hello@outreachsmith.com</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {serviceCards.map((service) => (
                <li key={service.slug}>
                  <Link to={`/${service.slug}`} className="hover:text-orange-400 transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#services" className="hover:text-orange-400 transition-colors">Link Building</a></li>
              <li><a href="/#process" className="hover:text-orange-400 transition-colors">How It Works</a></li>
              <li><a href="/#faq" className="hover:text-orange-400 transition-colors">FAQs</a></li>
              <li><Link to="/case-studies" className="hover:text-orange-400 transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hello@outreachsmith.com" className="hover:text-orange-400 transition-colors">Contact</a></li>
              <li><Link to="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-orange-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-8 text-xs text-slate-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p>&copy; 2026 OutreachSmith. All rights reserved.</p>
          <p>Built for agencies who need link building that scales.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

