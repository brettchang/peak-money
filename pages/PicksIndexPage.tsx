import React from 'react';
import { Link } from 'react-router-dom';
import { PiggyBank, CreditCard, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { PRODUCT_CATEGORIES } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  PiggyBank: <PiggyBank size={32} />,
  CreditCard: <CreditCard size={32} />,
};

export const PicksIndexPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Editor's Picks: The Quick Verdict"
        description="No time for endless research? Our editors recommend the best financial products in Canada, updated monthly with independent analysis."
        canonical="https://peakmoney.ca/picks"
      />
      {/* Page Header */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-10 text-center">
        <span className="font-sans font-bold text-xs uppercase tracking-widest text-peak-darkGray mb-4 block">
          Editor's Picks
        </span>
        <h1 className="text-5xl md:text-6xl font-serif text-peak-black mb-6 leading-tight">
          The Quick Verdict
        </h1>
        <p className="text-xl text-peak-darkGray font-serif italic max-w-2xl mx-auto">
          No time for endless research? Our editors cut through the noise to recommend the best financial products in Canada, updated monthly.
        </p>
      </section>

      {/* Category Cards */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCT_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`/picks/${category.slug}`}
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
                View Our Picks <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Methodology Preview */}
      <section className="bg-peak-gray py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-serif text-peak-black mb-4">
            How We Choose
          </h3>
          <p className="text-peak-darkGray font-sans max-w-2xl mx-auto mb-8">
            Unlike affiliate-driven comparison sites, Peak Money's recommendations are based on editorial merit.
            Our team uses these products and evaluates them on value, transparency, and real-world performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white rounded-lg p-6">
              <span className="text-3xl font-serif text-peak-mint block mb-2">01</span>
              <h4 className="font-sans font-semibold text-peak-black mb-2">Independent Research</h4>
              <p className="text-sm text-peak-darkGray">We don't let affiliate relationships influence our rankings.</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <span className="text-3xl font-serif text-peak-mint block mb-2">02</span>
              <h4 className="font-sans font-semibold text-peak-black mb-2">Hands-On Testing</h4>
              <p className="text-sm text-peak-darkGray">Our editors maintain accounts at every institution we recommend.</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <span className="text-3xl font-serif text-peak-mint block mb-2">03</span>
              <h4 className="font-sans font-semibold text-peak-black mb-2">Monthly Updates</h4>
              <p className="text-sm text-peak-darkGray">We re-evaluate picks whenever market conditions shift.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
