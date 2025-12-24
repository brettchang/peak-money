import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { TruthTable } from '../components/TruthTable';
import { ReviewCards } from '../components/ReviewCards';
import { GeoSchema } from '../components/GeoSchema';
import { SEO } from '../components/SEO';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { ACCOUNT_DATA } from '../constants';

export const SavingsComparisonsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Compare High-Interest Savings Accounts"
        description="Side-by-side comparison of Canadian HISA rates, fees, and features. Our Truth Table cuts through the marketing noise with verified data."
        canonical="https://peakmoney.ca/comparisons/savings"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://peakmoney.ca/' },
          { name: 'Comparisons', url: 'https://peakmoney.ca/comparisons' },
          { name: 'Savings Accounts', url: 'https://peakmoney.ca/comparisons/savings' },
        ]}
      />
      {/* Headless component for SEO/GEO */}
      <GeoSchema products={ACCOUNT_DATA} />

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
          Product Comparisons / Savings
        </span>
        <h1 className="text-5xl md:text-6xl font-serif text-peak-black mb-6 leading-tight">
          High-Interest Savings Accounts
        </h1>
        <p className="text-xl text-peak-darkGray font-serif italic max-w-2xl mx-auto">
          Every rate, fee, and feature laid bare. Our Truth Table cuts through the marketing noise so you can make an informed decision.
        </p>
      </section>

      {/* Methodology Note */}
      <section className="max-w-4xl mx-auto px-6 pb-10">
        <div className="bg-peak-gray rounded-lg p-6 border border-peak-black/5">
          <h3 className="font-sans font-semibold text-peak-black mb-2">Our Methodology</h3>
          <p className="text-sm text-peak-darkGray font-sans leading-relaxed">
            We evaluate savings accounts based on base interest rate (not promotional teasers), fee structure,
            account flexibility, deposit insurance coverage, and overall user experience. Data is verified monthly
            against each institution's published rates. Last updated: October 2025.
          </p>
        </div>
      </section>

      {/* Truth Table */}
      <TruthTable data={ACCOUNT_DATA} />

      {/* Detailed Reviews */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="border-b border-peak-black/10 pb-4 mb-8">
          <h2 className="text-3xl font-serif text-peak-black">
            In-Depth Reviews
          </h2>
          <p className="text-peak-darkGray font-sans mt-2">
            Our editors' detailed assessments of each account, including pros, cons, and who they're best suited for.
          </p>
        </div>
      </section>

      <ReviewCards data={ACCOUNT_DATA} />

      {/* Cross-link to Credit Cards */}
      <section className="bg-peak-mint py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-peak-darkGray font-sans mb-4">Looking for credit card comparisons?</p>
          <Link
            to="/comparisons/credit-cards"
            className="inline-block px-6 py-3 bg-peak-black text-white font-sans font-medium rounded-lg hover:bg-peak-accent transition-colors"
          >
            Compare Credit Cards →
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="border-t border-peak-black/10 pt-8">
          <p className="text-xs text-peak-darkGray/60 font-sans leading-relaxed text-center">
            <strong>Disclosure:</strong> Peak Money may receive compensation from some of the institutions listed on this page.
            This does not influence our ratings or rankings, which are based solely on our editorial methodology.
            All deposit accounts listed are CDIC insured up to applicable limits.
          </p>
        </div>
      </section>
    </>
  );
};
