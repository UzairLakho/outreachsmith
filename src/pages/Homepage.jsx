import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PenTool, Zap, Globe, Check, Shield, Clock, DollarSign, ArrowRight, ChevronDown } from 'lucide-react';
import { serviceCards } from '../data/pricing';

const iconMap = {
  PenTool: PenTool,
  Zap: Zap,
  Globe: Globe
};

const Homepage = () => {
  return (
    <div className="bg-[#0F172A] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl animate-pulse-slower"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-6 tracking-tight">
              Quality Link Building.<br />
              <span className="italic font-serif text-[#3B82F6]">Delivered Fast.</span>
            </h1>
            <p className="text-xl text-[#CBD5E1] mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              We build high-quality backlinks for agencies and businesses. Real sites. Real traffic. Real results.<br/>
              No PBNs. No spam. Just links that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/niche-edits" 
                className="px-8 py-4 bg-[#3B82F6] text-white rounded-full font-light tracking-wide hover:bg-[#2563EB] transition-all duration-300 shadow-lg shadow-[#3B82F6]/20 hover:shadow-xl hover:shadow-[#3B82F6]/30"
              >
                Order Links Now
              </Link>
              <a 
                href="#how-it-works" 
                className="px-8 py-4 bg-transparent text-[#CBD5E1] rounded-full font-light tracking-wide hover:text-white transition-colors duration-300"
              >
                See How It Works →
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-[#CBD5E1]">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-[#3B82F6] mr-2" />
                <span>100% Manual Outreach</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-[#3B82F6] mr-2" />
                <span>Real Sites, Real Traffic</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-[#3B82F6] mr-2" />
                <span>White Hat Only</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-[#3B82F6] mr-2" />
                <span>Fast Turnaround</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="animate-bounce text-[#CBD5E1]" size={32} />
        </motion.div>
      </section>

      {/* Metrics Marquee */}
      <section className="py-12 border-y border-white/5 bg-[#1E293B]/30 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center space-x-12 mx-6">
              <span className="text-[#CBD5E1] font-light tracking-wide">500+ Monthly Placements</span>
              <span className="text-[#3B82F6]">•</span>
              <span className="text-[#CBD5E1] font-light tracking-wide">Average DR 45+</span>
              <span className="text-[#3B82F6]">•</span>
              <span className="text-[#CBD5E1] font-light tracking-wide">100% Manual Outreach</span>
              <span className="text-[#3B82F6]">•</span>
              <span className="text-[#CBD5E1] font-light tracking-wide">48-Hour Turnaround</span>
              <span className="text-[#3B82F6]">•</span>
              <span className="text-[#CBD5E1] font-light tracking-wide">Zero PBN Policy</span>
              <span className="text-[#3B82F6]">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="how-it-works" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light mb-4 tracking-tight">
              Why <span className="italic font-serif text-[#3B82F6]">OutreachSmith?</span>
            </h2>
            <p className="text-[#CBD5E1] text-lg font-light">We make link building simple, fast, and effective.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Quality Guaranteed',
                description: 'Every link is placed on a real website with organic traffic. We vet every single site manually.',
                delay: 0.1
              },
              {
                icon: Clock,
                title: 'Lightning Fast',
                description: 'Most links go live within 48 hours to 2 weeks. No endless waiting. We deliver on time, every time.',
                delay: 0.2
              },
              {
                icon: DollarSign,
                title: 'Transparent Pricing',
                description: 'No hidden fees. No surprises. You see exactly what you\'re paying for before you order.',
                delay: 0.3
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  viewport={{ once: true }}
                  className="group relative bg-[#1E293B]/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-[#1E293B]/50 transition-all duration-300 hover:border-[#3B82F6]/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="w-14 h-14 bg-[#3B82F6]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3B82F6]/20 transition-colors duration-300">
                      <Icon className="text-[#3B82F6]" size={28} />
                    </div>
                    <h3 className="text-xl font-light mb-3 tracking-tight">{feature.title}</h3>
                    <p className="text-[#CBD5E1] leading-relaxed font-light">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#1E293B]/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light mb-4 tracking-tight">
              Our Link Building <span className="italic font-serif text-[#3B82F6]">Services</span>
            </h2>
            <p className="text-[#CBD5E1] text-lg font-light">Pick the service that fits your needs. Order in minutes.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceCards.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/${service.slug}`}
                    className="group block h-full bg-[#1E293B]/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-[#1E293B]/50 hover:border-[#3B82F6]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#3B82F6]/10"
                  >
                    <div className="w-14 h-14 bg-[#3B82F6]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3B82F6]/20 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-[#3B82F6]" />
                    </div>
                    <h3 className="text-2xl font-light text-white mb-3 tracking-tight">{service.title}</h3>
                    <p className="text-[#CBD5E1] mb-6 font-light">{service.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div>
                        <div className="text-sm text-[#CBD5E1]">From</div>
                        <div className="text-3xl font-light text-[#3B82F6]">${service.startingPrice}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-[#CBD5E1]">Delivery</div>
                        <div className="font-light text-white">{service.tat}</div>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center text-[#3B82F6] font-light group-hover:translate-x-2 transition-transform">
                      Order Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light mb-4 tracking-tight">
              How It <span className="italic font-serif text-[#3B82F6]">Works</span>
            </h2>
            <p className="text-[#CBD5E1] text-lg font-light">Getting links is easy. Here's the process:</p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                number: '1',
                title: 'Choose Your Service',
                description: 'Pick the link building service that matches your needs. We have options for every budget and timeline.'
              },
              {
                number: '2',
                title: 'Place Your Order',
                description: 'Tell us your target URL, anchor text, and any requirements. Add to cart and checkout in minutes.'
              },
              {
                number: '3',
                title: 'We Build Your Links',
                description: 'Our team gets to work. We reach out to site owners, negotiate placements, and build your links manually.'
              },
              {
                number: '4',
                title: 'Get Your Report',
                description: 'Receive a detailed report with all your live links, metrics, and proof of placement. Simple as that.'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#3B82F6] text-white rounded-full flex items-center justify-center font-light text-xl">
                  {step.number}
                </div>
                <div className="flex-1 bg-[#1E293B]/30 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-light text-white mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-[#CBD5E1] font-light">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#1E293B]/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light mb-4 tracking-tight">
              Trusted By Agencies <span className="italic font-serif text-[#3B82F6]">Worldwide</span>
            </h2>
            <p className="text-[#CBD5E1] text-lg font-light">Join hundreds of agencies and businesses that trust us with their link building.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Fast, reliable, and quality links. We've been using OutreachSmith for 6 months and haven't looked back. The turnaround time is unbeatable.",
                author: "Sarah M.",
                role: "Marketing Agency Owner"
              },
              {
                quote: "Finally, a link building service that actually delivers what they promise. Real sites, real traffic, real results. Highly recommend.",
                author: "Mike T.",
                role: "E-commerce Brand"
              },
              {
                quote: "We've tried other services and this is by far the best. The quality is consistent and the pricing is transparent. No surprises.",
                author: "David K.",
                role: "SEO Consultant"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1E293B]/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-[#1E293B]/50 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#CBD5E1] leading-relaxed font-light italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="text-white font-light">{testimonial.author}</p>
                  <p className="text-[#CBD5E1] text-sm font-light">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light mb-4 tracking-tight">
              Frequently Asked <span className="italic font-serif text-[#3B82F6]">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'Are these PBNs?',
                answer: 'No. We only place links on real websites with organic traffic and real audiences. Every site is manually vetted.'
              },
              {
                question: 'How long does it take?',
                answer: 'It depends on the service. Niche edits are typically live in 48 hours. Blogger outreach takes 10-28 days depending on the DA level.'
              },
              {
                question: 'Do you guarantee rankings?',
                answer: 'We guarantee quality links from real sites. While we can\'t guarantee specific ranking improvements (no one can), our links are built to help improve your SEO over time.'
              },
              {
                question: 'Can I see examples of sites?',
                answer: 'For security reasons, we can\'t share our full network publicly. However, we provide full transparency in your order report with all metrics included.'
              },
              {
                question: 'Do you offer bulk discounts?',
                answer: 'Yes! For large orders (50+ links), contact us for custom pricing. We work with agencies and businesses of all sizes.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-[#1E293B]/30 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-lg font-light text-white mb-3">{faq.question}</h3>
                  <p className="text-[#CBD5E1] leading-relaxed font-light">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 via-transparent to-[#8B5CF6]/10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl lg:text-6xl font-light mb-6 tracking-tight">
              Ready to Build Quality{' '}
              <span className="italic font-serif text-[#3B82F6]">Links?</span>
            </h2>
            <p className="text-[#CBD5E1] text-xl mb-8 leading-relaxed font-light max-w-2xl mx-auto">
              Join hundreds of businesses and agencies that trust OutreachSmith for their link building.
            </p>
            <Link 
              to="/niche-edits" 
              className="inline-block px-10 py-4 bg-[#3B82F6] text-white rounded-full font-light tracking-wide hover:bg-[#2563EB] transition-all duration-300 shadow-2xl shadow-[#3B82F6]/30 hover:shadow-[#3B82F6]/50 hover:scale-105 text-lg"
            >
              Get Started Now
            </Link>
            <p className="text-sm text-[#CBD5E1] mt-6 font-light">No contracts. No commitment. Order what you need, when you need it.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;