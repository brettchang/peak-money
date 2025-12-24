import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Percent, Gift, Shield, ChevronLeft, Check, X } from 'lucide-react';
import { SEO } from '../components/SEO';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { CREDIT_CARD_DATA } from '../constants';
import { CreditCard } from '../types';

// Schema component for credit cards
const CreditCardSchema: React.FC<{ cards: CreditCard[] }> = ({ cards }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": cards.map((card, index) => ({
      "@type": "FinancialProduct",
      "position": index + 1,
      "name": card.productName,
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

export const PicksCreditCardsPage: React.FC = () => {
  const topPick = CREDIT_CARD_DATA[0];
  const runnerUp = CREDIT_CARD_DATA[1];
  const otherPicks = CREDIT_CARD_DATA.slice(2);

  return (
    <>
      <SEO
        title="Best Credit Cards in Canada 2025"
        description="Our editors' top picks for Canadian credit cards. Independent analysis of rewards, benefits, and annual fees, updated monthly."
        canonical="https://peakmoney.ca/picks/credit-cards"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://peakmoney.ca/' },
          { name: "Editor's Picks", url: 'https://peakmoney.ca/picks' },
          { name: 'Credit Cards', url: 'https://peakmoney.ca/picks/credit-cards' },
        ]}
      />
      {/* Schema for LLM/SEO */}
      <CreditCardSchema cards={CREDIT_CARD_DATA} />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link
          to="/picks"
          className="inline-flex items-center gap-1 text-sm text-peak-darkGray hover:text-peak-black transition-colors"
        >
          <ChevronLeft size={16} />
          All Categories
        </Link>
      </div>

      {/* Page Header */}
      <section className="max-w-4xl mx-auto px-6 pt-6 pb-10 text-center">
        <span className="font-sans font-bold text-xs uppercase tracking-widest text-peak-darkGray mb-4 block">
          Editor's Picks / Credit Cards
        </span>
        <h1 className="text-5xl md:text-6xl font-serif text-peak-black mb-6 leading-tight">
          Best Credit Cards in Canada
        </h1>
        <p className="text-xl text-peak-darkGray font-serif italic max-w-2xl mx-auto">
          Maximize your rewards, minimize your fees. Our picks for cashback, travel, and everyday spending.
        </p>
        <p className="text-sm text-peak-darkGray/60 font-sans mt-4">
          Last updated: October 2025
        </p>
      </section>

      {/* Top Pick */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div className="bg-peak-mint rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <Award size={48} className="text-peak-black/10" />
          </div>

          <span className="inline-block bg-peak-black text-white text-xs font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
            Top Pick 2025
          </span>

          {topPick && (
            <>
              <h2 className="text-4xl md:text-5xl font-serif text-peak-black mb-4">
                {topPick.institution} <span className="text-peak-darkGray/60">{topPick.productName}</span>
              </h2>

              <p className="text-2xl font-serif text-peak-black mb-6">
                "{topPick.peakVerdict}"
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/60 rounded-lg p-4 text-center">
                  <span className="text-2xl font-serif text-peak-black block">{topPick.annualFee}</span>
                  <span className="text-xs font-sans text-peak-darkGray uppercase tracking-wider">Annual Fee</span>
                </div>
                <div className="bg-white/60 rounded-lg p-4 text-center">
                  <span className="text-lg font-serif text-peak-black block leading-tight">{topPick.rewardsRate}</span>
                  <span className="text-xs font-sans text-peak-darkGray uppercase tracking-wider">Rewards</span>
                </div>
                <div className="bg-white/60 rounded-lg p-4 text-center">
                  <span className="text-2xl font-serif text-peak-black block">{topPick.interestRate}</span>
                  <span className="text-xs font-sans text-peak-darkGray uppercase tracking-wider">Interest</span>
                </div>
                {topPick.welcomeBonus && (
                  <div className="bg-white/60 rounded-lg p-4 text-center">
                    <span className="text-lg font-serif text-peak-black block leading-tight">{topPick.welcomeBonus}</span>
                    <span className="text-xs font-sans text-peak-darkGray uppercase tracking-wider">Bonus</span>
                  </div>
                )}
              </div>

              <p className="text-peak-darkGray font-sans leading-relaxed mb-6">
                {topPick.detailedReview}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-sans font-semibold text-peak-black mb-2 flex items-center gap-2">
                    <Check size={16} className="text-green-600" /> The Good
                  </h4>
                  <ul className="space-y-1">
                    {topPick.pros.map((pro, i) => (
                      <li key={i} className="text-sm text-peak-darkGray">{pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-peak-black mb-2 flex items-center gap-2">
                    <X size={16} className="text-red-500" /> The Bad
                  </h4>
                  <ul className="space-y-1">
                    {topPick.cons.map((con, i) => (
                      <li key={i} className="text-sm text-peak-darkGray">{con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Runner Up */}
      {runnerUp && (
        <section className="max-w-4xl mx-auto px-6 pb-12">
          <div className="bg-white rounded-2xl p-8 border border-peak-black/10 shadow-sm">
            <span className="inline-block bg-peak-gray text-peak-darkGray text-xs font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Best No-Fee Option
            </span>

            <h3 className="text-3xl font-serif text-peak-black mb-2">
              {runnerUp.institution} <span className="text-peak-darkGray/60">{runnerUp.productName}</span>
            </h3>

            <p className="text-lg font-serif text-peak-darkGray mb-4">
              "{runnerUp.peakVerdict}"
            </p>

            <div className="flex flex-wrap gap-4 mb-6 text-sm">
              <span className="text-peak-black font-semibold">{runnerUp.annualFee} annual fee</span>
              <span className="text-peak-darkGray">•</span>
              <span className="text-peak-darkGray">{runnerUp.rewardsRate}</span>
            </div>

            <p className="text-peak-darkGray font-sans leading-relaxed">
              {runnerUp.detailedReview}
            </p>
          </div>
        </section>
      )}

      {/* Other Notable Picks */}
      {otherPicks.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 pb-16">
          <h3 className="text-2xl font-serif text-peak-black mb-6">Also Worth Considering</h3>
          <div className="space-y-4">
            {otherPicks.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-lg p-6 border border-peak-black/5 hover:border-peak-black/10 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-serif text-peak-black">
                      {card.institution} {card.productName}
                    </h4>
                    <p className="text-peak-darkGray text-sm mt-1">{card.peakVerdict}</p>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="bg-peak-gray px-2 py-1 rounded">{card.annualFee}/yr</span>
                    <span className="bg-peak-gray px-2 py-1 rounded">{card.rewardsRate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Selection Criteria */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-peak-black/10">
        <h3 className="text-2xl font-serif text-peak-black mb-8 text-center">
          How We Evaluate Credit Cards
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-peak-gray rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-peak-mint rounded-full flex items-center justify-center mx-auto mb-4">
              <Percent size={24} className="text-peak-black" />
            </div>
            <h4 className="font-serif text-lg text-peak-black mb-2">Rewards Value</h4>
            <p className="text-sm text-peak-darkGray font-sans">
              We calculate the real-world value of points and cashback programs.
            </p>
          </div>

          <div className="bg-peak-gray rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-peak-mint rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift size={24} className="text-peak-black" />
            </div>
            <h4 className="font-serif text-lg text-peak-black mb-2">Welcome Bonus</h4>
            <p className="text-sm text-peak-darkGray font-sans">
              Sign-up bonuses factor in, but we weight ongoing value more heavily.
            </p>
          </div>

          <div className="bg-peak-gray rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-peak-mint rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield size={24} className="text-peak-black" />
            </div>
            <h4 className="font-serif text-lg text-peak-black mb-2">Fee vs Value</h4>
            <p className="text-sm text-peak-darkGray font-sans">
              Annual fees must be justified by tangible benefits and savings.
            </p>
          </div>

          <div className="bg-peak-gray rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-peak-mint rounded-full flex items-center justify-center mx-auto mb-4">
              <Award size={24} className="text-peak-black" />
            </div>
            <h4 className="font-serif text-lg text-peak-black mb-2">Acceptance</h4>
            <p className="text-sm text-peak-darkGray font-sans">
              A card that's not accepted is worthless. We factor in network coverage.
            </p>
          </div>
        </div>
      </section>

      {/* View Other Categories CTA */}
      <section className="bg-peak-black text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-peak-gray/80 font-sans mb-4">Looking for other product recommendations?</p>
          <Link
            to="/picks/savings"
            className="inline-block px-6 py-3 bg-peak-mint text-peak-black font-sans font-medium rounded-lg hover:bg-white transition-colors"
          >
            View Savings Account Picks →
          </Link>
        </div>
      </section>
    </>
  );
};
