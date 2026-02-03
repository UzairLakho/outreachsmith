import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { serviceCards } from '../data/pricing';

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getItemCount } = useCart();
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-serif italic tracking-tight text-white">OutreachSmith</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center text-sm text-[#CBD5E1] hover:text-white transition-colors font-light tracking-wide">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-[#1E293B]/95 backdrop-blur-xl rounded-xl border border-white/10 py-2 shadow-2xl">
                  {serviceCards.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/${service.slug}`}
                      className="block px-4 py-3 hover:bg-white/5 transition-colors"
                    >
                      <div className="font-medium text-white">{service.title}</div>
                      <div className="text-sm text-[#CBD5E1]">{service.description}</div>
                      <div className="text-xs text-[#3B82F6] mt-1">From ${service.startingPrice} • {service.tat}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/case-studies" className="text-sm text-[#CBD5E1] hover:text-white transition-colors font-light tracking-wide">
              Case Studies
            </Link>

            <button 
              onClick={() => navigate('/cart')}
              className="relative text-[#CBD5E1] hover:text-white transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {getItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#3B82F6] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {getItemCount()}
                </span>
              )}
            </button>

            <button className="px-6 py-2.5 bg-transparent border border-[#3B82F6] text-[#3B82F6] rounded-full text-sm font-light tracking-wide hover:bg-[#3B82F6] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#3B82F6]/20">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#1E293B]/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-3">
            <div className="space-y-2">
              <div className="font-medium text-white text-sm">Services</div>
              {serviceCards.map((service) => (
                <Link
                  key={service.slug}
                  to={`/${service.slug}`}
                  className="block pl-4 py-2 text-sm text-[#CBD5E1] hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>
            <Link 
              to="/case-studies" 
              className="block text-[#CBD5E1] hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            <button 
              onClick={() => {
                navigate('/cart');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left text-[#CBD5E1] hover:text-white flex items-center justify-between"
            >
              Cart
              {getItemCount() > 0 && (
                <span className="bg-[#3B82F6] text-white text-xs rounded-full px-2 py-1">
                  {getItemCount()}
                </span>
              )}
            </button>
            <button className="w-full px-6 py-2.5 bg-transparent border border-[#3B82F6] text-[#3B82F6] rounded-full text-sm font-light tracking-wide hover:bg-[#3B82F6] hover:text-white transition-all duration-300">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;