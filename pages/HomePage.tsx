import React from 'react';
import { QuickVerdict } from '../components/QuickVerdict';
import { TruthTable } from '../components/TruthTable';
import { ReviewCards } from '../components/ReviewCards';
import { FAQ } from '../components/FAQ';
import { NewsSection } from '../components/NewsSection';
import { GeoSchema } from '../components/GeoSchema';
import { SEO } from '../components/SEO';
import { ACCOUNT_DATA, FAQ_EDITIONS } from '../constants';
import { useNewsArticles } from '../lib/useNews';

export const HomePage: React.FC = () => {
  const { articles } = useNewsArticles();

  return (
    <>
      <SEO
        title="Canada's Best High-Interest Savings Accounts 2025"
        description="Compare Canada's top high-interest savings accounts. We analyzed 20+ accounts to find the best rates, lowest fees, and CDIC-insured options for Canadian savers."
        canonical="https://peakmoney.ca/"
      />
      {/* Headless component for SEO/GEO */}
      <GeoSchema products={ACCOUNT_DATA} />

      {/* Editorial Intro */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-10 text-center">
        <span className="font-sans font-bold text-xs uppercase tracking-widest text-peak-darkGray mb-4 block">
          Money & Markets
        </span>
        <h1 className="text-5xl md:text-6xl font-serif text-peak-black mb-6 leading-tight">
          The Best High-Interest Savings Accounts For 2025
        </h1>
        <p className="text-xl text-peak-darkGray font-serif italic max-w-2xl mx-auto">
          Stop letting inflation eat your cash. We analyzed the top 20 accounts in Canada to find the few that actually deserve your deposits.
        </p>
      </section>

      <QuickVerdict />

      {/* News Section added between Quick Verdict and Data for context */}
      <NewsSection articles={articles} />

      <TruthTable data={ACCOUNT_DATA} />

      <ReviewCards data={ACCOUNT_DATA} />

      <FAQ editions={FAQ_EDITIONS} />
    </>
  );
};
