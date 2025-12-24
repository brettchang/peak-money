import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { NEWS_DATA } from '../constants';

export const NewsPage: React.FC = () => {
  const featuredArticle = NEWS_DATA.find(a => a.featured) || NEWS_DATA[0];
  const otherArticles = NEWS_DATA.filter(a => a.id !== featuredArticle?.id);

  return (
    <>
      <SEO
        title="The Dispatch: Financial News & Analysis"
        description="Sharp takes on the stories moving Canadian markets, rates, and your bottom line. Expert analysis from Peak Money's editorial team."
        canonical="https://peakmoney.ca/news"
      />
      {/* Page Header */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-10 text-center">
        <span className="font-sans font-bold text-xs uppercase tracking-widest text-peak-darkGray mb-4 block">
          The Dispatch
        </span>
        <h1 className="text-5xl md:text-6xl font-serif text-peak-black mb-6 leading-tight">
          Financial News & Analysis
        </h1>
        <p className="text-xl text-peak-darkGray font-serif italic max-w-2xl mx-auto">
          Sharp takes on the stories moving Canadian markets, rates, and your bottom line.
        </p>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="max-w-6xl mx-auto px-6 pb-12">
          <Link
            to={`/news/${featuredArticle.slug}`}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg overflow-hidden shadow-sm border border-peak-black/5 hover:shadow-lg transition-shadow group"
          >
            {featuredArticle.imageUrl && (
              <div className="aspect-video lg:aspect-auto overflow-hidden">
                <img
                  src={featuredArticle.imageUrl}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-8 flex flex-col justify-center">
              <span className="text-xs font-sans font-semibold uppercase tracking-wider text-peak-mint bg-peak-black px-3 py-1 rounded-full self-start mb-4">
                {featuredArticle.category}
              </span>
              <h2 className="text-3xl font-serif text-peak-black mb-4 leading-tight group-hover:text-peak-darkGray transition-colors">
                {featuredArticle.title}
              </h2>
              <p className="text-peak-darkGray font-serif mb-6">
                {featuredArticle.summary}
              </p>
              <div className="flex items-center gap-4 text-sm text-peak-darkGray/70">
                <span className="flex items-center gap-1">
                  <User size={14} />
                  {featuredArticle.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {featuredArticle.date}
                </span>
              </div>
              <span className="mt-6 self-start flex items-center gap-2 text-peak-black font-sans font-medium group-hover:gap-3 transition-all">
                Read Full Story <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        </section>
      )}

      {/* All Articles Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-serif text-peak-black mb-8 border-b border-peak-black/10 pb-4">
          Latest Stories
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherArticles.map((article) => (
            <Link
              key={article.id}
              to={`/news/${article.slug}`}
              className="bg-white rounded-lg p-6 shadow-sm border border-peak-black/5 hover:shadow-md transition-shadow group"
            >
              <span className="text-xs font-sans font-semibold uppercase tracking-wider text-peak-darkGray mb-3 block">
                {article.category}
              </span>
              <h4 className="text-xl font-serif text-peak-black mb-3 leading-snug group-hover:text-peak-darkGray transition-colors">
                {article.title}
              </h4>
              <p className="text-sm text-peak-darkGray/80 font-sans mb-4 line-clamp-3">
                {article.summary}
              </p>
              <div className="flex items-center justify-between text-xs text-peak-darkGray/60">
                <span>{article.author}</span>
                <span>{article.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-peak-mint py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-serif text-peak-black mb-4">
            Get The Dispatch
          </h3>
          <p className="text-peak-darkGray font-sans mb-6">
            Our weekly newsletter delivers the most important financial stories directly to your inbox. No spam, just signal.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="your@email.com"
              className="px-4 py-3 rounded-lg border border-peak-black/20 font-sans text-sm flex-grow max-w-sm focus:outline-none focus:border-peak-black"
            />
            <button className="px-6 py-3 bg-peak-black text-white font-sans font-medium rounded-lg hover:bg-peak-accent transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
