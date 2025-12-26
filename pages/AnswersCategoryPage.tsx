import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronLeft, MessageCircleQuestion, ArrowRight, Loader2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { FAQPageSchema } from '../components/FAQPageSchema';
import { ANSWER_CATEGORIES } from '../constants';
import { useAnswersByCategory } from '../lib/useAnswers';

export const AnswersCategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  const category = ANSWER_CATEGORIES.find(c => c.slug === categorySlug);
  const { answers, loading } = useAnswersByCategory(categorySlug || '');

  if (!category) {
    return <Navigate to="/answers" replace />;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-peak-darkGray" size={32} />
      </div>
    );
  }

  // Prepare FAQ data for schema
  const faqData = answers.map(a => ({
    question: a.question,
    answer: a.shortAnswer
  }));

  return (
    <>
      <SEO
        title={`${category.name} Questions | Peak Money Answers`}
        description={`Expert answers to common ${category.name.toLowerCase()} questions. Get direct recommendations for your specific situation.`}
        canonical={`https://peakmoney.ca/answers/${category.slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://peakmoney.ca/' },
          { name: 'Expert Recommendations', url: 'https://peakmoney.ca/answers' },
          { name: category.name, url: `https://peakmoney.ca/answers/${category.slug}` },
        ]}
      />
      <FAQPageSchema questions={faqData} />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-6 pt-8">
        <Link
          to="/answers"
          className="inline-flex items-center gap-1 text-sm text-peak-darkGray hover:text-peak-black transition-colors"
        >
          <ChevronLeft size={16} />
          Back to Expert Recommendations
        </Link>
      </nav>

      {/* Page Header */}
      <section className="max-w-4xl mx-auto px-6 pt-8 pb-10">
        <span className="font-sans font-bold text-xs uppercase tracking-widest text-peak-darkGray mb-4 block">
          {category.name}
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-peak-black mb-6 leading-tight">
          Common Questions
        </h1>
        <p className="text-xl text-peak-darkGray font-serif italic max-w-2xl">
          {category.description}. Click any question to get our expert recommendation.
        </p>
      </section>

      {/* Questions List */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="space-y-4">
          {answers.map((answer) => (
            <Link
              key={answer.id}
              to={`/answers/${category.slug}/${answer.slug}`}
              className="group block bg-white rounded-xl p-6 border border-peak-black/10 hover:border-peak-black/20 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-peak-mint rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircleQuestion size={24} className="text-peak-black" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-serif text-peak-black mb-2 group-hover:text-peak-darkGray transition-colors">
                    {answer.question}
                  </h2>
                  <p className="text-peak-darkGray font-sans mb-3">
                    {answer.shortAnswer}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-peak-darkGray/50 font-sans">
                      Last updated: {answer.lastUpdated}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-sans font-medium text-peak-black group-hover:gap-2 transition-all">
                      Read Full Answer <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Other Category CTA */}
      {ANSWER_CATEGORIES.filter(c => c.id !== category.id).map(otherCategory => (
        <section key={otherCategory.id} className="bg-peak-black text-white py-12">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-serif mb-4">
              Looking for {otherCategory.name}?
            </h3>
            <p className="text-peak-gray/80 font-sans mb-6">
              {otherCategory.description}
            </p>
            <Link
              to={`/answers/${otherCategory.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-peak-mint text-peak-black font-sans font-medium rounded-lg hover:bg-white transition-colors"
            >
              Browse {otherCategory.name} Questions <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      ))}
    </>
  );
};
