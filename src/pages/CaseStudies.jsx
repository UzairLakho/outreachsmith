import React from 'react';
import { TrendingUp, Clock, Target, Check } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      title: "E-commerce brand doubles organic traffic",
      client: "Online retail store",
      challenge: "Plateaued growth for 6 months in competitive product keywords.",
      solution: "Built 50 contextual links through blogger outreach across 90 days.",
      results: [
        "102% increase in organic traffic",
        "15 target keywords moved to page one",
        "35% uplift in online sales"
      ],
      metric: "102% traffic",
      icon: TrendingUp
    },
    {
      title: "SaaS team cuts link building time by 60%",
      client: "B2B software company",
      challenge: "Legacy vendor took 3+ weeks per placement and missed timelines.",
      solution: "Switched to niche edits for rapid, vetted placements.",
      results: [
        "Links live in 48-72 hours",
        "2x monthly link acquisition",
        "Higher quality publishers"
      ],
      metric: "60% faster",
      icon: Clock
    },
    {
      title: "Agency scales delivery across 15 clients",
      client: "Digital marketing agency",
      challenge: "Needed reliable fulfillment without hiring an outreach team.",
      solution: "White-label delivery across campaigns with shared reporting.",
      results: [
        "Consistent quality across all campaigns",
        "Client retention improved to 95%",
        "3x capacity without extra headcount"
      ],
      metric: "3x capacity",
      icon: Target
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24">
      {/* Hero */}
      <section className="bg-mesh py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-orange-600 font-semibold">Case studies</p>
          <h1 className="mt-4 text-4xl lg:text-5xl font-semibold text-slate-900">Results from real campaigns</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            See how agencies and in-house teams use OutreachSmith to deliver consistent, measurable link building outcomes.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {cases.map((study, index) => {
            const Icon = study.icon;
            return (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-soft">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="h-7 w-7 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
                      <h2 className="text-2xl font-semibold text-slate-900">{study.title}</h2>
                      <span className="px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                        {study.metric}
                      </span>
                    </div>
                    <p className="text-slate-500">{study.client}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Challenge</h3>
                    <p className="text-slate-600 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Solution</h3>
                    <p className="text-slate-600 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Results</h3>
                    <ul className="space-y-2 text-sm">
                      {study.results.map((result, i) => (
                        <li key={i} className="text-slate-600 flex items-start">
                          <Check className="h-4 w-4 text-orange-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-soft">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Ready for similar results?
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Start building quality links today. No contracts, no minimums, no fluff.
            </p>
            <a
              href="/#services"
              className="inline-block px-8 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors"
            >
              View services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
