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

  const handleServicesBlur = (event) => {
    if (event.currentTarget.contains(event.relatedTarget)) {
      return;
    }
    setServicesOpen(false);
  };

  const handleServicesMouseLeave = (event) => {
    if (event.currentTarget.contains(event.relatedTarget)) {
      return;
    }
    setServicesOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <span className="text-2xl font-semibold tracking-tight text-slate-900">OutreachSmith</span>
            <span className="hidden sm:inline-flex text-[10px] font-semibold uppercase tracking-[0.3em] text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
              Link building
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={handleServicesMouseLeave}
              onFocus={() => setServicesOpen(true)}
              onBlur={handleServicesBlur}
            >
              <button
                type="button"
                className="flex items-center text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                onClick={() => setServicesOpen((open) => !open)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setServicesOpen((open) => !open);
                  }
                  if (event.key === 'Escape') {
                    setServicesOpen(false);
                  }
                }}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {servicesOpen && (
                <div
                  id="services-menu"
                  role="menu"
                  aria-label="Services"
                  className="absolute top-full left-0 mt-3 w-96 bg-white rounded-2xl border border-slate-200 shadow-xl p-3"
                >
                  <div className="grid gap-2">
                    {serviceCards.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/${service.slug}`}
                        role="menuitem"
                        className="rounded-xl border border-transparent hover:border-orange-200 hover:bg-orange-50 transition-colors px-4 py-3"
                        onClick={() => setServicesOpen(false)}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-semibold text-slate-900">{service.title}</div>
                            <div className="text-xs text-slate-500">{service.description}</div>
                          </div>
                          <div className="text-right text-xs text-orange-600 font-semibold">
                            From ${service.startingPrice}
                          </div>
                        </div>
                        <div className="text-xs text-slate-500 mt-1">Typical delivery: {service.tat}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="/#services" className="text-sm text-slate-600 hover:text-slate-900 font-medium">
              Link Building
            </a>
            <Link to="/case-studies" className="text-sm text-slate-600 hover:text-slate-900 font-medium">
              Case Studies
            </Link>
            <a href="/#process" className="text-sm text-slate-600 hover:text-slate-900 font-medium">
              Process
            </a>
            <a href="/#faq" className="text-sm text-slate-600 hover:text-slate-900 font-medium">
              FAQ
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => navigate('/cart')}
              className="relative text-slate-500 hover:text-slate-900 transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {getItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                  {getItemCount()}
                </span>
              )}
            </button>
            <button className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Login
            </button>
            <a
              href="mailto:hello@outreachsmith.com"
              className="px-5 py-2.5 border border-slate-300 text-slate-700 rounded-full text-sm font-semibold hover:border-slate-400 transition-colors"
            >
              Talk to sales
            </a>
            <button className="px-5 py-2.5 bg-orange-600 text-white rounded-full text-sm font-semibold hover:bg-orange-700 transition-colors">
              Get started
            </button>
          </div>

          <button
            className="lg:hidden text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-5 space-y-5">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-orange-600 font-semibold mb-2">Services</div>
              <div className="grid gap-2">
                {serviceCards.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/${service.slug}`}
                    className="block rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="font-semibold text-slate-900">{service.title}</div>
                    <div className="text-xs text-slate-500">From ${service.startingPrice} · {service.tat}</div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid gap-3 text-sm">
              <a href="/#services" className="text-slate-600" onClick={() => setMobileMenuOpen(false)}>
                Link Building
              </a>
              <Link to="/case-studies" className="text-slate-600" onClick={() => setMobileMenuOpen(false)}>
                Case Studies
              </Link>
              <a href="/#process" className="text-slate-600" onClick={() => setMobileMenuOpen(false)}>
                Process
              </a>
              <a href="/#faq" className="text-slate-600" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </a>
              <button
                onClick={() => {
                  navigate('/cart');
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-between text-slate-600"
              >
                Cart
                {getItemCount() > 0 && (
                  <span className="bg-orange-600 text-white text-xs rounded-full px-2 py-0.5">
                    {getItemCount()}
                  </span>
                )}
              </button>
            </div>

            <div className="grid gap-3">
              <button className="w-full px-5 py-2.5 border border-slate-300 text-slate-700 rounded-full text-sm font-semibold">
                Login
              </button>
              <a
                href="mailto:hello@outreachsmith.com"
                className="w-full px-5 py-2.5 border border-slate-300 text-slate-700 rounded-full text-sm font-semibold text-center"
              >
                Talk to sales
              </a>
              <button className="w-full px-5 py-2.5 bg-orange-600 text-white rounded-full text-sm font-semibold">
                Get started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
