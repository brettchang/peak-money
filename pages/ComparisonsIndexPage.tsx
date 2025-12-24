import React from 'react';
import { Link } from 'react-router-dom';
import { PiggyBank, CreditCard, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { PRODUCT_CATEGORIES } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  PiggyBank: <PiggyBank size={32} />,
  CreditCard: <CreditCard size={32} />,
};

export const ComparisonsIndexPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Product Comparisons: The Truth Tables"
        description="Every rate, fee, and feature laid bare. Compare Canadian financial products with our transparent, data-driven comparison tables."
        canonical="https://peakmoney.ca/comparisons"
      />
      {/* Page Header */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-10 text-center">
        <span className="font-sans font-bold text-xs uppercase tracking-widest text-peak-darkGray mb-4 block">
          Product Comparisons
        </span>
        <h1 className="text-5xl md:text-6xl font-serif text-peak-black mb-6 leading-tight">
          The Truth Tables
        </h1>
        <p className="text-xl text-peak-darkGray font-serif italic max-w-2xl mx-auto">
          Every rate, fee, and feature laid bare. We cut through the marketing noise so you can make informed decisions about your money.
        </p>
      </section>

      {/* Category Cards */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCT_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`/comparisons/${category.slug}`}
              className="group bg-white rounded-2xl p-8 border border-peak-black/10 shadow-sm hover:shadow-lg hover:border-peak-black/20 transition-all"
            >
              <div className="w-16 h-16 bg-peak-mint rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {iconMap[category.icon]}
              </div>

              <h2 className="text-2xl font-serif text-peak-black mb-3">
                {category.name}
              </h2>

              <p className="text-peak-darkGray font-sans mb-6">
                {category.description}
              </p>

              <span className="inline-flex items-center gap-2 text-peak-black font-sans font-medium group-hover:gap-3 transition-all">
                View Comparison <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Methodology Section */}
      <section className="bg-peak-gray py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-serif text-peak-black mb-8 text-center">
            Our Comparison Methodology
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <span className="text-3xl font-serif text-peak-mint block mb-2">01</span>
              <h4 className="font-sans font-semibold text-peak-black mb-2">Primary Sources</h4>
              <p className="text-sm text-peak-darkGray">
                All data comes directly from financial institutions' published terms, verified monthly.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <span className="text-3xl font-serif text-peak-mint block mb-2">02</span>
              <h4 className="font-sans font-semibold text-peak-black mb-2">Base Rates Only</h4>
              <p className="text-sm text-peak-darkGray">
                We prioritize everyday rates over promotional teasers that expire after a few months.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <span className="text-3xl font-serif text-peak-mint block mb-2">03</span>
              <h4 className="font-sans font-semibold text-peak-black mb-2">No Pay-to-Play</h4>
              <p className="text-sm text-peak-darkGray">
                Rankings are based on product merit. Affiliate relationships never influence our tables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Freshness */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-sm text-peak-darkGray/60">
          All comparison data last verified: <strong>October 2025</strong>
        </p>
      </section>
    </>
  );
};
