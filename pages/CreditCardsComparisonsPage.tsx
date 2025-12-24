import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ArrowRight, Check, X } from 'lucide-react';
import { SEO } from '../components/SEO';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { CREDIT_CARD_DATA } from '../constants';
import { CreditCard } from '../types';

// Schema.org markup for credit cards comparison
const CreditCardsComparisonSchema: React.FC<{ cards: CreditCard[] }> = ({ cards }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Credit Cards in Canada 2025",
    "description": "Comprehensive comparison of the best credit cards in Canada, including rewards rates, annual fees, and benefits.",
    "itemListElement": cards.map((card, index) => ({
      "@type": "FinancialProduct",
      "position": index + 1,
      "name": `${card.institution} ${card.productName}`,
      "brand": {
        "@type": "Organization",
        "name": card.institution
      },
      "description": card.detailedReview,
      "annualPercentageRate": card.interestRate,
      "feesAndCommissionsSpecification": card.annualFee
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export const CreditCardsComparisonsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Compare Credit Cards in Canada"
        description="Comprehensive comparison of the best credit cards in Canada, including rewards rates, annual fees, and benefits. Find the perfect card for your spending."
        canonical="https://peakmoney.ca/comparisons/credit-cards"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://peakmoney.ca/' },
          { name: 'Comparisons', url: 'https://peakmoney.ca/comparisons' },
          { name: 'Credit Cards', url: 'https://peakmoney.ca/comparisons/credit-cards' },
        ]}
      />
      {/* Schema markup */}
      <CreditCardsComparisonSchema cards={CREDIT_CARD_DATA} />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link
          to="/comparisons"
          className="inline-flex items-center gap-1 text-sm text-peak-darkGray hover:text-peak-black transition-colors"
        >
          <ChevronLeft size={16} />
          All Comparisons
        </Link>
      </div>

      {/* Page Header */}
      <section className="max-w-4xl mx-auto px-6 pt-6 pb-10 text-center">
        <span className="font-sans font-bold text-xs uppercase tracking-widest text-peak-darkGray mb-4 block">
          Product Comparisons / Credit Cards
        </span>
        <h1 className="text-5xl md:text-6xl font-serif text-peak-black mb-6 leading-tight">
          Credit Cards Compared
        </h1>
        <p className="text-xl text-peak-darkGray font-serif italic max-w-2xl mx-auto">
          Rewards rates, annual fees, and benefits—all in one place. Find the card that matches your spending style.
        </p>
      </section>

      {/* Methodology Note */}
      <section className="max-w-4xl mx-auto px-6 pb-10">
        <div className="bg-peak-gray rounded-lg p-6 border border-peak-black/5">
          <h3 className="font-sans font-semibold text-peak-black mb-2">Our Methodology</h3>
          <p className="text-sm text-peak-darkGray font-sans leading-relaxed">
            We evaluate credit cards based on rewards value, annual fee justification, welcome bonus,
            acceptance network, and insurance benefits. We calculate the real-world value of points
            programs and prioritize ongoing value over first-year teasers. Last updated: October 2025.
          </p>
        </div>
      </section>

      {/* Credit Cards Comparison Table */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="mb-6 flex items-end justify-between border-b-2 border-peak-black pb-4">
          <h3 className="text-3xl font-serif text-peak-black">The Market Data</h3>
          <span className="text-xs font-sans uppercase tracking-widest text-peak-darkGray">
            Updated: Oct 2025
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-peak-black font-sans text-xs uppercase tracking-widest">
                <th className="py-4 font-bold text-peak-black">Card</th>
                <th className="py-4 font-bold text-peak-black">Rewards</th>
                <th className="py-4 font-bold text-peak-black text-right">Annual Fee</th>
                <th className="py-4 font-bold text-peak-black text-right">Interest</th>
                <th className="py-4 font-bold text-peak-black pl-6">Peak Verdict</th>
                <th className="py-4 font-bold text-peak-black w-16"></th>
              </tr>
            </thead>
            <tbody className="font-sans text-sm">
              {CREDIT_CARD_DATA.map((card) => (
                <tr key={card.id} className="border-b border-peak-black/10 hover:bg-white transition-colors group">
                  <td className="py-6">
                    <div className="font-semibold text-lg font-serif text-peak-black group-hover:text-peak-darkGray">
                      {card.institution}
                    </div>
                    <div className="text-peak-darkGray text-sm">{card.productName}</div>
                  </td>
                  <td className="py-6">
                    <span className="bg-peak-mint/50 px-2 py-1 rounded-sm text-sm">
                      {card.rewardsRate}
                    </span>
                  </td>
                  <td className="py-6 text-right font-semibold text-peak-black">
                    {card.annualFee}
                  </td>
                  <td className="py-6 text-right text-peak-darkGray">
                    {card.interestRate}
                  </td>
                  <td className="py-6 pl-6 italic text-peak-darkGray font-serif">
                    {card.peakVerdict}
                  </td>
                  <td className="py-6 text-right">
                    <Link
                      to={`/reviews/credit-cards/${card.slug}`}
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-peak-gray group-hover:bg-peak-mint transition-colors"
                      title={`Read full review of ${card.institution} ${card.productName}`}
                    >
                      <ArrowRight size={14} className="text-peak-black" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs font-sans text-peak-darkGray/60">
          *Rates and terms are subject to change. Click arrow to read full review.
        </p>
      </section>

      {/* Detailed Reviews */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="border-b border-peak-black/10 pb-4 mb-8">
          <h2 className="text-3xl font-serif text-peak-black">
            In-Depth Reviews
          </h2>
          <p className="text-peak-darkGray font-sans mt-2">
            Our editors' detailed assessments of each card, including rewards analysis, fees breakdown, and ideal user profiles.
          </p>
        </div>
      </section>

      {/* Credit Card Review Cards */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {CREDIT_CARD_DATA.map((card) => (
            <article key={card.id} className="flex flex-col h-full group">
              <div className="border-t border-peak-black pt-4 mb-4">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-peak-darkGray">
                  Review No. {card.id.replace('cc', '')}
                </span>
              </div>

              <h4 className="text-2xl font-serif font-medium leading-snug mb-2 text-peak-black">
                {card.institution} {card.productName}
              </h4>

              <p className="text-lg font-serif italic text-peak-darkGray mb-4">
                "{card.peakVerdict}"
              </p>

              <div className="flex flex-wrap gap-3 mb-4 text-sm">
                <span className="bg-peak-mint px-3 py-1 rounded-full">{card.annualFee}/yr</span>
                <span className="bg-peak-gray px-3 py-1 rounded-full">{card.rewardsRate}</span>
                {card.welcomeBonus && (
                  <span className="bg-peak-gray px-3 py-1 rounded-full">{card.welcomeBonus}</span>
                )}
              </div>

              <p className="font-sans text-peak-darkGray leading-relaxed mb-6 flex-grow">
                {card.detailedReview}
              </p>

              <div className="bg-white p-6 border border-peak-black/5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)]">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-sans text-xs font-bold uppercase mb-3 flex items-center text-peak-black">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      The Good
                    </h5>
                    <ul className="space-y-2">
                      {card.pros.map((pro, i) => (
                        <li key={i} className="text-sm font-sans text-peak-darkGray flex items-start">
                          <Check className="w-3 h-3 mr-2 mt-1 text-peak-black shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-sans text-xs font-bold uppercase mb-3 flex items-center text-peak-black">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                      The Bad
                    </h5>
                    <ul className="space-y-2">
                      {card.cons.map((con, i) => (
                        <li key={i} className="text-sm font-sans text-peak-darkGray flex items-start">
                          <X className="w-3 h-3 mr-2 mt-1 text-peak-black shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to={`/reviews/credit-cards/${card.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-peak-black hover:gap-3 transition-all border-b border-peak-black pb-0.5"
                >
                  Read Full Review <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Cross-link to Savings */}
      <section className="bg-peak-mint py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-peak-darkGray font-sans mb-4">Looking for savings account comparisons?</p>
          <Link
            to="/comparisons/savings"
            className="inline-block px-6 py-3 bg-peak-black text-white font-sans font-medium rounded-lg hover:bg-peak-accent transition-colors"
          >
            Compare Savings Accounts →
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="border-t border-peak-black/10 pt-8">
          <p className="text-xs text-peak-darkGray/60 font-sans leading-relaxed text-center">
            <strong>Disclosure:</strong> Peak Money may receive compensation from some of the issuers listed on this page.
            This does not influence our ratings or rankings, which are based solely on our editorial methodology.
            Credit card terms and conditions apply. Always verify current rates with the issuing institution.
          </p>
        </div>
      </section>
    </>
  );
};
