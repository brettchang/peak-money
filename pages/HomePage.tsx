import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TruthTable } from '../components/TruthTable';
import { ReviewCards } from '../components/ReviewCards';
import { FAQ } from '../components/FAQ';
import { NewsSection } from '../components/NewsSection';
import { GeoSchema } from '../components/GeoSchema';
import { SEO } from '../components/SEO';
import { ACCOUNT_DATA, CREDIT_CARD_DATA, FAQ_EDITIONS } from '../constants';
import { useNewsArticles } from '../lib/useNews';

type ProductCategory = 'savings' | 'credit-cards';

export const HomePage: React.FC = () => {
  const { articles } = useNewsArticles();
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('savings');

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
        <section className="max-w-4xl mx-auto px-6 pt-12 pb-16">
          <Link to={`/news/${heroArticle.slug}`} className="block group">
            {/* Image */}
            {heroArticle.imageUrl && (
              <div className="relative aspect-[16/9] mb-8 overflow-hidden rounded-lg">
                <img
                  src={heroArticle.imageUrl}
                  alt={heroArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            {/* Content */}
            <div>
              <span className="inline-block text-xs font-sans font-bold uppercase tracking-widest text-peak-darkGray mb-4">
                {heroArticle.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif text-peak-black mb-4 leading-tight group-hover:underline decoration-2 underline-offset-4">
                {heroArticle.title}
              </h1>
              <p className="text-xl text-peak-darkGray font-serif italic max-w-2xl mb-4">
                {heroArticle.summary}
              </p>
              <div className="flex items-center text-sm font-sans uppercase tracking-widest text-peak-darkGray/60">
                <span>By {heroArticle.author}</span>
                <span className="mx-3">•</span>
                <span>{heroArticle.date}</span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* News Section - remaining articles */}
      {remainingArticles.length > 0 && <NewsSection articles={remainingArticles} />}

      {/* Product Category Tabs */}
      <section className="max-w-6xl mx-auto px-6 mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setActiveCategory('savings')}
            className={`px-5 py-2 rounded-full font-sans text-sm transition-all ${
              activeCategory === 'savings'
                ? 'bg-peak-black text-white'
                : 'bg-peak-gray text-peak-darkGray hover:bg-peak-black/10'
            }`}
          >
            Savings Accounts
          </button>
          <button
            onClick={() => setActiveCategory('credit-cards')}
            className={`px-5 py-2 rounded-full font-sans text-sm transition-all ${
              activeCategory === 'credit-cards'
                ? 'bg-peak-black text-white'
                : 'bg-peak-gray text-peak-darkGray hover:bg-peak-black/10'
            }`}
          >
            Credit Cards
          </button>
        </div>
      </section>

      <TruthTable
        category={activeCategory}
        savingsData={ACCOUNT_DATA}
        creditCardData={CREDIT_CARD_DATA}
      />

      <ReviewCards
        category={activeCategory}
        savingsData={ACCOUNT_DATA}
        creditCardData={CREDIT_CARD_DATA}
      />

      <FAQ editions={FAQ_EDITIONS} />
    </>
  );
};
