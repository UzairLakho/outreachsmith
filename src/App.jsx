import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Hammer, Key, FileText, Zap, ChevronDown, Menu, X } from 'lucide-react';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [email, setEmail] = useState('');
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-[#0F172A] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-serif italic tracking-tight">
                OutreachSmith
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              <button
                onClick={() => scrollToSection('inventory')}
                className="text-sm text-[#CBD5E1] hover:text-white transition-colors duration-200 font-light tracking-wide"
              >
                Inventory
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-sm text-[#CBD5E1] hover:text-white transition-colors duration-200 font-light tracking-wide"
              >
                Why Us?
              </button>
              <button
                onClick={() => scrollToSection('policy')}
                className="text-sm text-[#CBD5E1] hover:text-white transition-colors duration-200 font-light tracking-wide"
              >
                Policy
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection('inventory')}
                className="px-6 py-2.5 bg-transparent border border-[#3B82F6] text-[#3B82F6] rounded-full text-sm font-light tracking-wide hover:bg-[#3B82F6] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#3B82F6]/20"
              >
                Access Wholesale Inventory
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#1E293B] border-t border-white/5"
          >
            <div className="px-6 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('inventory')}
                className="block w-full text-left text-[#CBD5E1] hover:text-white transition-colors"
              >
                Inventory
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left text-[#CBD5E1] hover:text-white transition-colors"
              >
                Why Us?
              </button>
              <button
                onClick={() => scrollToSection('policy')}
                className="block w-full text-left text-[#CBD5E1] hover:text-white transition-colors"
              >
                Policy
              </button>
              <button
                onClick={() => scrollToSection('inventory')}
                className="w-full px-6 py-2.5 bg-transparent border border-[#3B82F6] text-[#3B82F6] rounded-full text-sm hover:bg-[#3B82F6] hover:text-white transition-all duration-300"
              >
                Access Wholesale Inventory
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl animate-pulse-slower"></div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-6 tracking-tight">
                The Backend Engine for{' '}
                <span className="italic font-serif text-[#3B82F6]">Elite</span>{' '}
                SEO Agencies.
              </h1>
              <p className="text-xl text-[#CBD5E1] mb-8 leading-relaxed font-light">
                Stop gambling with saturated marketplaces. Get hand-forged, manual placements on high-traffic domains managed directly by us. 100% White-label. 0% Conflict.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('inventory')}
                  className="px-8 py-4 bg-[#3B82F6] text-white rounded-full text-sm font-light tracking-wide hover:bg-[#2563EB] transition-all duration-300 shadow-lg shadow-[#3B82F6]/20 hover:shadow-xl hover:shadow-[#3B82F6]/30"
                >
                  View Live Inventory
                </button>
                <button
                  onClick={() => scrollToSection('policy')}
                  className="px-8 py-4 bg-transparent text-[#CBD5E1] rounded-full text-sm font-light tracking-wide hover:text-white transition-colors duration-300"
                >
                  How we protect you →
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-[#1E293B]/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#CBD5E1]">Average DR</span>
                      <span className="text-2xl font-light text-[#3B82F6]">45+</span>
                    </div>
                    <div className="w-full bg-[#0F172A] rounded-full h-2">
                      <div className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] h-2 rounded-full w-3/4"></div>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-6">
                      <span className="text-[#CBD5E1]">Monthly Placements</span>
                      <span className="text-2xl font-light text-[#3B82F6]">500+</span>
                    </div>
                    <div className="w-full bg-[#0F172A] rounded-full h-2">
                      <div className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] h-2 rounded-full w-5/6"></div>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-6">
                      <span className="text-[#CBD5E1]">Average TAT</span>
                      <span className="text-2xl font-light text-[#3B82F6]">24h</span>
                    </div>
                    <div className="w-full bg-[#0F172A] rounded-full h-2">
                      <div className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          style={{ opacity }}
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
              <span className="text-[#CBD5E1] font-light tracking-wide">500+ Vetted Publishers</span>
              <span className="text-[#3B82F6]">•</span>
              <span className="text-[#CBD5E1] font-light tracking-wide">Average DR 45+</span>
              <span className="text-[#3B82F6]">•</span>
              <span className="text-[#CBD5E1] font-light tracking-wide">100% Manual Outreach</span>
              <span className="text-[#3B82F6]">•</span>
              <span className="text-[#CBD5E1] font-light tracking-wide">24-Hour Turnaround</span>
              <span className="text-[#3B82F6]">•</span>
              <span className="text-[#CBD5E1] font-light tracking-wide">Zero PBN Policy</span>
              <span className="text-[#3B82F6]">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light mb-4 tracking-tight">
              Built for <span className="italic font-serif text-[#3B82F6]">Scale</span>
            </h2>
            <p className="text-[#CBD5E1] text-lg font-light">The infrastructure that powers elite agencies</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Hammer,
                title: 'Hand-Forged Outreach',
                description: "We don't just 'post'. We forge relationships. Every placement is a result of genuine manual outreach to real site owners.",
                delay: 0.1
              },
              {
                icon: Key,
                title: 'Direct Admin Access',
                description: 'Skip the middleman. We have direct management rights to a private cluster of sites, ensuring the lowest rates and fastest TAT.',
                delay: 0.2
              },
              {
                icon: FileText,
                title: '100% White-Label',
                description: 'Our reports are your reports. Clean, unbranded, and ready to be forwarded directly to your clients.',
                delay: 0.3
              },
              {
                icon: Zap,
                title: 'Rapid Execution',
                description: 'In the agency world, speed is everything. Most of our placements go live within 24-48 hours.',
                delay: 0.4
              }
            ].map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Monthly Placements', suffix: '' },
              { number: '45', label: 'Average DR', suffix: '+' },
              { number: '24', label: 'Hour Turnaround', suffix: 'h' },
              { number: '99.8', label: 'Uptime Rate', suffix: '%' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl lg:text-6xl font-light text-[#3B82F6] mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-[#CBD5E1] font-light tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Anti-Poaching Section */}
      <section id="policy" className="py-24 px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E293B]/50 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#1E293B]/50 backdrop-blur-xl border border-white/10 rounded-3xl p-12"
          >
            <div className="text-center">
              <h2 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">
                Your Clients. Your Relationship.{' '}
                <span className="italic font-serif text-[#3B82F6]">Our Shield.</span>
              </h2>
              <p className="text-[#CBD5E1] text-lg leading-relaxed mb-8 font-light">
                We are NOT an SEO agency. We don't offer retail services, and we never will. OutreachSmith is a strictly B2B infrastructure built to support your growth. Every partnership is backed by a legal{' '}
                <span className="text-white font-normal">Non-Solicitation Guarantee</span>. We are your backend partner, never your competitor.
              </p>
              <button className="px-8 py-3 bg-transparent border border-white/20 text-[#CBD5E1] rounded-full text-sm font-light tracking-wide hover:bg-white/5 transition-all duration-300">
                Download Non-Solicitation Agreement Sample
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inventory Preview */}
      <section id="inventory" className="py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-light mb-4 tracking-tight">
              Premium Placements Across{' '}
              <span className="italic font-serif text-[#3B82F6]">All Niches.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mb-12"
          >
            <div className="bg-[#1E293B]/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#0F172A]/50 border-b border-white/10">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-light text-[#CBD5E1] tracking-wide">Niche</th>
                      <th className="px-6 py-4 text-left text-sm font-light text-[#CBD5E1] tracking-wide">Avg. DR</th>
                      <th className="px-6 py-4 text-left text-sm font-light text-[#CBD5E1] tracking-wide">Monthly Traffic</th>
                      <th className="px-6 py-4 text-left text-sm font-light text-[#CBD5E1] tracking-wide">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { niche: 'Tech & SaaS', dr: '65', traffic: '120k+', status: 'Available' },
                      { niche: 'Finance & Crypto', dr: '58', traffic: '95k+', status: 'Available' },
                      { niche: 'Health & Wellness', dr: '52', traffic: '180k+', status: 'Available' },
                      { niche: 'E-commerce & Retail', dr: '48', traffic: '210k+', status: 'Available' }
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 text-white font-light">{row.niche}</td>
                        <td className="px-6 py-4 text-[#3B82F6] font-light">{row.dr}</td>
                        <td className="px-6 py-4 text-white font-light">{row.traffic}</td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-xs font-light">
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent pointer-events-none"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#1E293B]/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-light mb-2 text-center">Request Live Inventory Sheet</h3>
            <p className="text-[#CBD5E1] text-sm mb-6 text-center font-light">
              Only agency emails will be processed
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@agency.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 bg-[#0F172A]/50 border border-white/10 rounded-full text-white placeholder-[#CBD5E1]/50 focus:outline-none focus:border-[#3B82F6] transition-colors font-light"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#3B82F6] text-white rounded-full text-sm font-light tracking-wide hover:bg-[#2563EB] transition-all duration-300 shadow-lg shadow-[#3B82F6]/20"
              >
                Request Access
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
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
              Trusted by <span className="italic font-serif text-[#3B82F6]">Elite</span> Agencies
            </h2>
            <p className="text-[#CBD5E1] text-lg font-light">Don't just take our word for it</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "OutreachSmith transformed our link-building operations. The quality and speed are unmatched. We've scaled from 50 to 200+ monthly placements seamlessly.",
                author: "Marcus Chen",
                role: "Founder, Velocity SEO",
                metric: "4x Growth"
              },
              {
                quote: "Finally, a vendor we can trust. The non-solicitation guarantee gives us peace of mind, and the white-label reports are client-ready out of the box.",
                author: "Sarah Mitchell",
                role: "CEO, RankForge Agency",
                metric: "100% Client Retention"
              },
              {
                quote: "The direct admin access model is a game-changer. Lower costs, faster turnaround, and real sites with actual traffic. This is how link building should work.",
                author: "David Park",
                role: "Director, Apex Digital",
                metric: "60% Cost Reduction"
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
                <div className="mb-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#CBD5E1] leading-relaxed font-light italic">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div>
                    <p className="text-white font-light">{testimonial.author}</p>
                    <p className="text-[#CBD5E1] text-sm font-light">{testimonial.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#3B82F6] font-light text-sm">{testimonial.metric}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-light mb-4 tracking-tight">
              Common <span className="italic font-serif text-[#3B82F6]">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: 'Do you work with direct clients?',
                answer: 'No. We are an agency-only provider to ensure zero conflict of interest.'
              },
              {
                question: 'Are these PBNs?',
                answer: 'Absolutely not. We only place links on real sites with organic search traffic and human audiences.'
              },
              {
                question: 'Can you handle bulk orders?',
                answer: 'Yes, our infrastructure is built for scale. We handle 500+ placements monthly for our partners.'
              }
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isActive={activeAccordion === index}
                onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
              Ready to Scale Your{' '}
              <span className="italic font-serif text-[#3B82F6]">Link Building?</span>
            </h2>
            <p className="text-[#CBD5E1] text-xl mb-8 leading-relaxed font-light max-w-2xl mx-auto">
              Join 50+ elite agencies already using OutreachSmith as their backend link building infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={() => scrollToSection('inventory')}
                className="px-10 py-4 bg-[#3B82F6] text-white rounded-full text-lg font-light tracking-wide hover:bg-[#2563EB] transition-all duration-300 shadow-2xl shadow-[#3B82F6]/30 hover:shadow-[#3B82F6]/50 hover:scale-105"
              >
                Get Instant Access
              </button>
              <a
                href="mailto:partnerships@outreachsmith.com"
                className="px-10 py-4 bg-transparent border border-white/20 text-white rounded-full text-lg font-light tracking-wide hover:bg-white/5 transition-all duration-300"
              >
                Schedule a Call
              </a>
            </div>
            <div className="flex items-center justify-center gap-8 text-sm text-[#CBD5E1]">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Agency-only guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-[#CBD5E1] text-sm font-light">
                © 2026 OutreachSmith. An Exclusive B2B Link Building Infrastructure. All Rights Reserved.
              </p>
              <p className="text-[#CBD5E1]/60 text-xs mt-2 italic font-light">
                Managed by Adventise Group
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-[#CBD5E1] hover:text-white transition-colors font-light">
                Privacy Policy
              </a>
              <a href="#" className="text-[#CBD5E1] hover:text-white transition-colors font-light">
                Terms of Service
              </a>
              <a href="mailto:partnerships@outreachsmith.com" className="text-[#CBD5E1] hover:text-white transition-colors font-light">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group relative bg-[#1E293B]/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-[#1E293B]/50 transition-all duration-300 hover:border-[#3B82F6]/30"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative">
        <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3B82F6]/20 transition-colors duration-300">
          <Icon className="text-[#3B82F6]" size={24} />
        </div>
        <h3 className="text-xl font-light mb-3 tracking-tight">{title}</h3>
        <p className="text-[#CBD5E1] leading-relaxed font-light">{description}</p>
      </div>
    </motion.div>
  );
};

// Accordion Item Component
const AccordionItem = ({ question, answer, isActive, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#1E293B]/30 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden"
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-lg font-light">{question}</span>
        <ChevronDown
          className={`text-[#3B82F6] transition-transform duration-300 ${
            isActive ? 'rotate-180' : ''
          }`}
          size={20}
        />
      </button>
      {isActive && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-5"
        >
          <p className="text-[#CBD5E1] leading-relaxed font-light">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default App;