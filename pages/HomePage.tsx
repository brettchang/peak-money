import React from 'react';
import { Link } from 'react-router-dom';
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

  // Get the featured article for the hero
  const heroArticle = articles.find(a => a.featured) || articles[0];
  // Remaining articles for the news section (exclude hero)
  const remainingArticles = articles.filter(a => a.id !== heroArticle?.id);

  return (
    <>
      <SEO
        title="Peak Money | Canada's Personal Finance Authority"
        description="Sharp analysis on Canadian personal finance. Compare high-interest savings accounts, credit cards, and get the latest financial news."
        canonical="https://peakmoney.ca/"
      />
      {/* Headless component for SEO/GEO */}
      <GeoSchema products={ACCOUNT_DATA} />

      {/* Hero - Featured News Article */}
      {heroArticle && (
        <Link to={`/news/${heroArticle.slug}`} className="block group">
          <section className="relative w-full min-h-[70vh] flex items-end">
            {/* Background Image */}
            {heroArticle.imageUrl && (
              <div className="absolute inset-0">
                <img
                  src={heroArticle.imageUrl}
                  alt={heroArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-peak-black via-peak-black/50 to-transparent" />
              </div>
            )}
            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16 pt-32 w-full">
              <span className="inline-block text-xs font-sans font-bold uppercase tracking-widest text-peak-mint bg-peak-black/80 px-3 py-1 mb-6">
                {heroArticle.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight group-hover:underline decoration-2 underline-offset-4">
                {heroArticle.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/80 font-serif italic max-w-2xl mb-6">
                {heroArticle.summary}
              </p>
              <div className="flex items-center text-sm font-sans uppercase tracking-widest text-white/60">
                <span>By {heroArticle.author}</span>
                <span className="mx-3">•</span>
                <span>{heroArticle.date}</span>
              </div>
            </div>
          </section>
        </Link>
      )}

      <QuickVerdict />

      {/* News Section - remaining articles */}
      {remainingArticles.length > 0 && <NewsSection articles={remainingArticles} />}

      <TruthTable data={ACCOUNT_DATA} />

      <ReviewCards data={ACCOUNT_DATA} />

      <FAQ editions={FAQ_EDITIONS} />
    </>
  );
};
