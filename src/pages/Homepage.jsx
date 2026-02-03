import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Star,
  ShieldCheck,
  Clock,
  Sparkles,
  Users,
  BarChart3,
  PenTool,
  Zap,
  Globe,
  Target,
  Image,
  Layers
} from 'lucide-react';
import { serviceCards } from '../data/pricing';

const iconMap = {
  PenTool: PenTool,
  Zap: Zap,
  Globe: Globe,
  Target: Target,
  Image: Image,
  Layers: Layers
};

const Homepage = () => {
  const steps = [
    {
      title: 'Brief us in minutes',
      description: 'Share URLs, anchors, and exclusions. We align on goals, metrics, and timelines.'
    },
    {
      title: 'We build the list',
      description: 'We source relevant publishers, verify traffic, and pitch manually to secure placements.'
    },
    {
      title: 'Links go live',
      description: 'You receive a client-ready report with live URLs, metrics, and proof of placement.'
    }
  ];

  const faqs = [
    {
      question: 'Are these real websites?',
      answer: 'Yes. We only place links on genuine publishers with organic traffic and editorial standards.'
    },
    {
      question: 'How fast can we get links live?',
      answer: 'Most orders land within 2-21 days depending on service and publisher availability.'
    },
    {
      question: 'Do you offer white-label reporting?',
      answer: 'Yes. Every order includes client-ready reports with live URLs, metrics, and screenshots.'
    },
    {
      question: 'Can I order in bulk?',
      answer: 'Yes. We support bulk and monthly orders with volume pricing for agencies and teams.'
    },
    {
      question: 'Do you guarantee rankings?',
      answer: 'We guarantee quality placements on vetted sites. Rankings depend on your broader SEO strategy.'
    },
    {
      question: 'Can you match specific niches?',
      answer: 'Yes. We vet topical relevance and confirm the publisher fits your niche before outreach.'
    }
  ];

  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-24 bg-mesh">
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold uppercase tracking-wide">
                White-label link building for agencies
              </div>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                Link building that scales.
                <span className="block text-orange-600">Real sites. Real outreach.</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                OutreachSmith delivers contextual backlinks for agencies and in-house teams. Pick from five services with
                transparent pricing, strict QA, and predictable delivery.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-slate-600">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-orange-600 mt-0.5" />
                  Manual outreach and publisher vetting.
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-orange-600 mt-0.5" />
                  Real sites with organic traffic only.
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-orange-600 mt-0.5" />
                  White-label reports included in every order.
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors"
                >
                  See services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="mailto:hello@outreachsmith.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-700 rounded-full font-semibold hover:border-slate-400 transition-colors"
                >
                  Book a call
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-4 w-4 text-orange-500 fill-orange-500" />
                  ))}
                  <span className="font-semibold text-slate-800">4.9</span>
                  <span>average rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-orange-500" />
                  <span>Trusted by 500+ agencies</span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 text-xs text-slate-500">
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center">
                  <div className="text-lg font-semibold text-slate-900">500+</div>
                  placements / mo
                </div>
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center">
                  <div className="text-lg font-semibold text-slate-900">45+</div>
                  avg DR
                </div>
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center">
                  <div className="text-lg font-semibold text-slate-900">2-21</div>
                  day delivery
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-panel shadow-soft rounded-3xl p-8 animate-float"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Campaign snapshot</p>
                  <p className="text-2xl font-semibold text-slate-900">Niche edits - DA30+</p>
                </div>
                <div className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
                  From $130
                </div>
              </div>

              <div className="mt-6 grid gap-4 text-sm text-slate-600">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-orange-600 mt-0.5" />
                  Publisher vetted for traffic and relevance.
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-orange-600 mt-0.5" />
                  Contextual placement inside existing content.
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-orange-600 mt-0.5" />
                  Live URL report with metrics and screenshots.
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                  <div className="text-xs uppercase text-slate-500">Typical delivery</div>
                  <div className="text-lg font-semibold text-slate-900">14 days</div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                  <div className="text-xs uppercase text-slate-500">Order type</div>
                  <div className="text-lg font-semibold text-slate-900">White-label</div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-slate-900 text-white rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors"
                >
                  Start an order
                </a>
                <a
                  href="mailto:hello@outreachsmith.com"
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-slate-300 text-slate-700 rounded-full text-sm font-semibold"
                >
                  Ask a question
                </a>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-slate-500 uppercase tracking-[0.2em]">
            {['Agency Partner', 'In-house SEO', 'Growth Team', 'Performance Studio'].map((label) => (
              <div key={label} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-center">
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-orange-600 font-semibold">Services</p>
              <h2 className="mt-3 text-3xl lg:text-4xl font-semibold">Five services. One vetted outreach team.</h2>
              <p className="mt-4 text-slate-600 max-w-2xl">
                Pick the delivery model that fits your goal: speed, authority, or ongoing scale. Every service follows the same QA process.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              {['All', 'Link Building', 'Managed'].map((label) => (
                <span key={label} className="px-3 py-1 border border-slate-200 rounded-full text-slate-600 bg-white">
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {serviceCards.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Link
                  key={service.slug}
                  to={`/${service.slug}`}
                  className="group relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-orange-200 hover:shadow-md transition-all block"
                >
                  {service.badge && (
                    <span className="absolute top-5 right-5 px-3 py-1 text-xs font-semibold uppercase tracking-wide bg-orange-100 text-orange-700 rounded-full">
                      {service.badge}
                    </span>
                  )}
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-full bg-orange-100 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                      <p className="text-sm text-slate-600">{service.description}</p>
                    </div>
                  </div>

                  <div className="mt-5 text-xs uppercase tracking-[0.2em] text-slate-500">
                    {service.category}
                  </div>

                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-slate-500">From</div>
                      <div className="text-2xl font-semibold text-slate-900">${service.startingPrice}</div>
                    </div>
                    <div className="text-right text-xs text-slate-500">
                      Typical delivery
                      <div className="text-sm font-semibold text-slate-700">{service.tat}</div>
                    </div>
                  </div>

                  <div className="mt-6 inline-flex items-center text-sm font-semibold text-orange-600 group-hover:text-orange-700">
                    Explore service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-sm text-slate-600">
              Not sure which service fits? We will recommend the best mix based on your goals.
            </div>
            <a
              href="mailto:hello@outreachsmith.com"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-slate-300 text-slate-700 rounded-full text-sm font-semibold hover:border-slate-400 transition-colors"
            >
              Get a recommendation
            </a>
          </div>
        </div>
      </section>

      {/* White-label */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-orange-600 font-semibold">White-label delivery</p>
              <h2 className="mt-3 text-3xl lg:text-4xl font-semibold">Fulfillment your clients never see.</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We operate as your outreach team behind the scenes. You keep strategy and client relationships, while we handle prospecting,
                outreach, and placement delivery.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Whether you need a single order or a monthly pipeline, you get consistent delivery and clean reporting.
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm text-slate-600">
                <ShieldCheck className="h-5 w-5 text-orange-600" />
                Anti-poaching policy and NDA-ready workflows.
              </div>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-slate-900">What you get with every campaign</h3>
              <div className="mt-4 grid gap-3 text-sm text-slate-700">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-orange-600 mt-0.5" />
                  Publisher vetting for relevance, traffic, and spam signals.
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-orange-600 mt-0.5" />
                  Editorially-placed anchors with natural context.
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-orange-600 mt-0.5" />
                  Live URL delivery with metrics and screenshots.
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-orange-600 mt-0.5" />
                  Dedicated campaign manager for monthly plans.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidance */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 text-orange-600 mb-4">
                <Sparkles className="h-5 w-5" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold">Which service?</span>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">Choose based on speed or authority.</h3>
              <p className="mt-4 text-slate-600">
                Need fast wins? Niche edits move quickest. Want stronger authority? Blogger outreach is your best path.
              </p>
              <p className="mt-4 text-slate-600">
                Not sure what to pick? Tell us your goals and we will recommend the right mix.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 text-orange-600 mb-4">
                <BarChart3 className="h-5 w-5" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold">In-house vs outsourced</span>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">Skip hiring. Keep control.</h3>
              <p className="mt-4 text-slate-600">
                Building an outreach team is costly and slow. We provide the systems, publishers, and reporting so you can stay focused on growth.
              </p>
              <p className="mt-4 text-slate-600">
                You keep the client relationship and roadmap. We supply the delivery engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-orange-600 font-semibold">How it works</p>
              <h2 className="mt-3 text-3xl lg:text-4xl font-semibold">A simple, repeatable workflow.</h2>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <Clock className="h-5 w-5 text-orange-600" />
              Average turnaround: 2-21 days
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={step.title} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="h-10 w-10 rounded-full bg-orange-100 text-orange-700 font-semibold flex items-center justify-center">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="py-20 bg-orange-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-orange-600 font-semibold">Quality assurance</p>
              <h2 className="mt-3 text-3xl lg:text-4xl font-semibold">Quality checks on every placement.</h2>
              <p className="mt-4 text-slate-600">
                We validate traffic, relevance, and history before any outreach begins. If it fails QA, it does not go live.
              </p>
            </div>
            <div className="bg-white border border-orange-100 rounded-2xl p-6 shadow-sm">
              <div className="grid gap-3 text-sm text-slate-700">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-orange-600 mt-0.5" />
                  Manual review for every publisher.
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-orange-600 mt-0.5" />
                  Relevancy checks for topical fit.
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-orange-600 mt-0.5" />
                  Traffic and spam signal screening.
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-orange-600 mt-0.5" />
                  Transparent reporting with live URLs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-orange-600 font-semibold">FAQs</p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-semibold">Quick answers before you order</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-3 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-orange-400 font-semibold">Link building, handled</p>
              <h2 className="mt-3 text-3xl lg:text-4xl font-semibold">Ready to scale link building?</h2>
              <p className="mt-4 text-slate-300">
                Start with a single order or build a monthly pipeline. We deliver placements your team is proud to report.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-slate-300">
                <div>
                  <div className="text-2xl font-semibold text-white">100k+</div>
                  Links delivered
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">14 days</div>
                  Avg turnaround
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">92%</div>
                  Repeat clients
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-500 transition-colors"
                >
                  Get started
                </a>
                <a
                  href="mailto:hello@outreachsmith.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-slate-200 rounded-full font-semibold"
                >
                  Talk to sales
                </a>
              </div>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
              <div className="grid gap-4 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-orange-400" />
                  Agency-safe delivery with white-label reporting.
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-orange-400" />
                  Predictable timelines across every service.
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-orange-400" />
                  Dedicated campaign manager on monthly plans.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giving Back */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-orange-600 font-semibold">Giving back</p>
              <h2 className="mt-3 text-3xl lg:text-4xl font-semibold">Every order gives back.</h2>
              <p className="mt-4 text-slate-600">
                We set aside a portion of every campaign to support scholarships and training programs that help people
                build careers in digital marketing.
              </p>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
              <div className="text-sm text-slate-700">
                We donate <span className="font-semibold text-orange-700">$1 from every order</span> to grassroots
                programs focused on skills training, education, and access to opportunity.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
