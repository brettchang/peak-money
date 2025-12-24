import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, ChevronLeft, ArrowRight, Loader2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { useNewsArticle, useNewsArticles } from '../lib/useNews';
import { NewsArticle } from '../types';

// Schema.org Article markup for LLM/SEO
const ArticleSchema: React.FC<{ article: NewsArticle }> = ({ article }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "description": article.summary,
    "datePublished": article.date,
    "dateModified": article.date,
    "author": {
      "@type": "Person",
      "name": article.author,
      "jobTitle": article.authorTitle || "Contributor"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Peak Money",
      "url": "https://peakmoney.ca"
    },
    "image": article.imageUrl,
    "articleSection": article.category,
    "articleBody": article.content.join(" ")
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { article, loading } = useNewsArticle(slug || '');
  const { articles: allArticles } = useNewsArticles();

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-peak-darkGray" />
      </div>
    );
  }

  // Redirect to news page if article not found
  if (!article) {
    return <Navigate to="/news" replace />;
  }

  // Get related articles
  const relatedArticles = article.relatedArticles
    ?.map(id => allArticles.find(a => a.id === id))
    .filter((a): a is NewsArticle => a !== undefined) || [];

  return (
    <>
      <SEO
        title={article.title}
        description={article.summary}
        canonical={`https://peakmoney.ca/news/${article.slug}`}
        ogType="article"
        ogImage={article.imageUrl}
        article={{
          publishedTime: article.date,
          author: article.author,
          section: article.category,
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://peakmoney.ca/' },
          { name: 'The Dispatch', url: 'https://peakmoney.ca/news' },
          { name: article.title, url: `https://peakmoney.ca/news/${article.slug}` },
        ]}
      />
      {/* Schema markup */}
      <ArticleSchema article={article} />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-6 pt-8">
        <Link
          to="/news"
          className="inline-flex items-center gap-1 text-sm text-peak-darkGray hover:text-peak-black transition-colors"
        >
          <ChevronLeft size={16} />
          Back to The Dispatch
        </Link>
      </nav>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-6 pt-8 pb-8">
        <div className="mb-6">
          <span className="inline-block text-xs font-sans font-semibold uppercase tracking-wider text-peak-mint bg-peak-black px-3 py-1 rounded-full">
            {article.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-peak-black mb-6 leading-tight">
          {article.title}
        </h1>

        <p className="text-xl md:text-2xl text-peak-darkGray font-serif italic mb-8">
          {article.summary}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-peak-darkGray border-t border-b border-peak-black/10 py-4">
          <div className="flex items-center gap-2">
            <User size={16} />
            <div>
              <span className="font-semibold text-peak-black">{article.author}</span>
              {article.authorTitle && (
                <span className="text-peak-darkGray/70 ml-1">· {article.authorTitle}</span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{article.date}</span>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {article.imageUrl && (
        <figure className="max-w-5xl mx-auto px-6 mb-10">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-auto rounded-lg shadow-sm"
          />
          {article.imageCaption && (
            <figcaption className="text-sm text-peak-darkGray/60 font-sans mt-3 text-center">
              {article.imageCaption}
            </figcaption>
          )}
        </figure>
      )}

      {/* Article Body */}
      <article className="max-w-3xl mx-auto px-6 pb-16">
        <div className="prose prose-lg">
          {article.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-peak-black font-serif leading-relaxed mb-6"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-peak-black/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-peak-mint rounded-full flex items-center justify-center">
              <User size={24} className="text-peak-black" />
            </div>
            <div>
              <p className="font-sans font-semibold text-peak-black">{article.author}</p>
              {article.authorTitle && (
                <p className="text-sm text-peak-darkGray">{article.authorTitle}</p>
              )}
            </div>
          </div>
        </footer>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-peak-gray py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-serif text-peak-black mb-8">
              Related Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  to={`/news/${related.slug}`}
                  className="bg-white rounded-lg p-6 shadow-sm border border-peak-black/5 hover:shadow-md transition-all group"
                >
                  <span className="text-xs font-sans font-semibold uppercase tracking-wider text-peak-darkGray/60 mb-2 block">
                    {related.category}
                  </span>
                  <h3 className="text-xl font-serif text-peak-black mb-2 group-hover:text-peak-darkGray transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-sm text-peak-darkGray font-sans line-clamp-2">
                    {related.summary}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-sans font-medium text-peak-black mt-4 group-hover:gap-2 transition-all">
                    Read More <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="bg-peak-black text-white py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-serif mb-4">
            Get The Dispatch
          </h3>
          <p className="text-peak-gray/80 font-sans mb-6">
            Sharp analysis on the stories moving Canadian markets, delivered weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="your@email.com"
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 font-sans text-sm text-white placeholder-white/50 flex-grow max-w-sm focus:outline-none focus:border-white/40"
            />
            <button className="px-6 py-3 bg-peak-mint text-peak-black font-sans font-medium rounded-lg hover:bg-white transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
