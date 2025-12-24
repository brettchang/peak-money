import React from 'react';
import { Link } from 'react-router-dom';
import { Award, TrendingUp, Shield, Zap, ChevronLeft, Check, X } from 'lucide-react';
import { ACCOUNT_DATA } from '../constants';
import { GeoSchema } from '../components/GeoSchema';
import { SEO } from '../components/SEO';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';

export const PicksSavingsPage: React.FC = () => {
  const topPick = ACCOUNT_DATA[0];
  const runnerUp = ACCOUNT_DATA[1];
  const otherPicks = ACCOUNT_DATA.slice(2);

  return (
    <>
      <SEO
        title="Best High-Interest Savings Accounts 2025"
        description="Our editors' top picks for Canadian high-interest savings accounts. All accounts are CDIC insured and fee-free, updated monthly."
        canonical="https://peakmoney.ca/picks/savings"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://peakmoney.ca/' },
          { name: "Editor's Picks", url: 'https://peakmoney.ca/picks' },
          { name: 'Savings Accounts', url: 'https://peakmoney.ca/picks/savings' },
        ]}
      />
      {/* Schema for LLM/SEO */}
      <GeoSchema products={ACCOUNT_DATA} />

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
          Editor's Picks / Savings
        </span>
        <h1 className="text-5xl md:text-6xl font-serif text-peak-black mb-6 leading-tight">
          Best High-Interest Savings Accounts
        </h1>
        <p className="text-xl text-peak-darkGray font-serif italic max-w-2xl mx-auto">
          Where to park your cash while earning competitive interest. All accounts are CDIC insured and fee-free.
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

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/60 rounded-lg p-4 text-center">
                  <span className="text-3xl font-serif text-peak-black block">{topPick.interestRate}</span>
                  <span className="text-xs font-sans text-peak-darkGray uppercase tracking-wider">Interest Rate</span>
                </div>
                <div className="bg-white/60 rounded-lg p-4 text-center">
                  <span className="text-3xl font-serif text-peak-black block">{topPick.monthlyFees}</span>
                  <span className="text-xs font-sans text-peak-darkGray uppercase tracking-wider">Monthly Fee</span>
                </div>
                <div className="bg-white/60 rounded-lg p-4 text-center">
                  <span className="text-3xl font-serif text-peak-black block">{topPick.minBalance}</span>
                  <span className="text-xs font-sans text-peak-darkGray uppercase tracking-wider">Minimum</span>
                </div>
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
              Runner Up
            </span>

            <h3 className="text-3xl font-serif text-peak-black mb-2">
              {runnerUp.institution} <span className="text-peak-darkGray/60">{runnerUp.productName}</span>
            </h3>

            <p className="text-lg font-serif text-peak-darkGray mb-4">
              "{runnerUp.peakVerdict}"
            </p>

            <div className="flex gap-4 mb-6 text-sm">
              <span className="text-peak-black font-semibold">{runnerUp.interestRate} APY</span>
              <span className="text-peak-darkGray">•</span>
              <span className="text-peak-darkGray">{runnerUp.monthlyFees}/mo</span>
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
            {otherPicks.map((account) => (
              <div
                key={account.id}
                className="bg-white rounded-lg p-6 border border-peak-black/5 hover:border-peak-black/10 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-serif text-peak-black">
                      {account.institution} {account.productName}
                    </h4>
                    <p className="text-peak-darkGray text-sm mt-1">{account.peakVerdict}</p>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <span className="text-peak-black font-semibold">{account.interestRate}</span>
                    <span className="text-peak-darkGray">{account.monthlyFees}/mo</span>
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
          How We Evaluate Savings Accounts
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-peak-gray rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-peak-mint rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp size={24} className="text-peak-black" />
            </div>
            <h4 className="font-serif text-lg text-peak-black mb-2">Base Rate</h4>
            <p className="text-sm text-peak-darkGray font-sans">
              We prioritize the everyday rate, not short-term promotional offers.
            </p>
          </div>

          <div className="bg-peak-gray rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-peak-mint rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield size={24} className="text-peak-black" />
            </div>
            <h4 className="font-serif text-lg text-peak-black mb-2">CDIC Insured</h4>
            <p className="text-sm text-peak-darkGray font-sans">
              Every account we recommend is covered by federal deposit insurance.
            </p>
          </div>

          <div className="bg-peak-gray rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-peak-mint rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap size={24} className="text-peak-black" />
            </div>
            <h4 className="font-serif text-lg text-peak-black mb-2">No Friction</h4>
            <p className="text-sm text-peak-darkGray font-sans">
              Easy signup, no hidden fees, and straightforward terms.
            </p>
          </div>

          <div className="bg-peak-gray rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-peak-mint rounded-full flex items-center justify-center mx-auto mb-4">
              <Award size={24} className="text-peak-black" />
            </div>
            <h4 className="font-serif text-lg text-peak-black mb-2">Editor Tested</h4>
            <p className="text-sm text-peak-darkGray font-sans">
              Our team uses these products personally.
            </p>
          </div>
        </div>
      </section>

      {/* View Other Categories CTA */}
      <section className="bg-peak-black text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-peak-gray/80 font-sans mb-4">Looking for other product recommendations?</p>
          <Link
            to="/picks/credit-cards"
            className="inline-block px-6 py-3 bg-peak-mint text-peak-black font-sans font-medium rounded-lg hover:bg-white transition-colors"
          >
            View Credit Card Picks →
          </Link>
        </div>
      </section>
    </>
  );
};
