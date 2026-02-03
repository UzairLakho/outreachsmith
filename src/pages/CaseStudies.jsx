import React from 'react';
import { TrendingUp, Clock, Target } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      title: "E-commerce Site Doubles Organic Traffic",
      client: "Online Retail Store",
      challenge: "Struggling to rank for competitive product keywords. Traffic had plateaued for 6 months.",
      solution: "Built 50 high-quality links using our blogger outreach service over 3 months.",
      results: [
        "102% increase in organic traffic",
        "Ranking on page 1 for 15 target keywords",
        "35% increase in online sales"
      ],
      metric: "102% Traffic",
      icon: TrendingUp
    },
    {
      title: "SaaS Company Cuts Link Building Time by 60%",
      client: "B2B Software Company",
      challenge: "Previous link building took too long. Needed faster results to keep up with competitors.",
      solution: "Switched to our niche edits service for rapid placements.",
      results: [
        "Links live in 48-72 hours (vs 3 weeks before)",
        "Doubled monthly link acquisition",
        "Better quality sites than previous vendor"
      ],
      metric: "60% Faster",
      icon: Clock
    },
    {
      title: "Marketing Agency Scales Client Results",
      client: "Digital Marketing Agency",
      challenge: "Needed reliable link building partner to service growing client base.",
      solution: "Used our white-label link building services for 15+ clients.",
      results: [
        "Consistent quality across all campaigns",
        "Client retention improved to 95%",
        "Able to take on 3x more clients"
      ],
      metric: "3x Scale",
      icon: Target
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Success Stories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real businesses using our link building services.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {cases.map((study, index) => {
            const Icon = study.icon;
            return (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 transition-all shadow-sm hover:shadow-xl">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h2 className="text-2xl font-bold text-gray-900">{study.title}</h2>
                      <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                        {study.metric}
                      </span>
                    </div>
                    <p className="text-gray-600 italic">{study.client}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Challenge</h3>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Solution</h3>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Results</h3>
                    <ul className="space-y-1 text-sm">
                      {study.results.map((result, i) => (
                        <li key={i} className="text-gray-600 flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          {result}
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Similar Results?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Start building quality links today. No contracts, no commitment.
          </p>
          <a 
            href="/"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View Services
          </a>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;