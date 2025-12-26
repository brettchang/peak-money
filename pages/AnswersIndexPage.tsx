import React from 'react';
import { Link } from 'react-router-dom';
import { PiggyBank, CreditCard, ArrowRight, MessageCircleQuestion } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ANSWER_CATEGORIES } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  PiggyBank: <PiggyBank size={32} />,
  CreditCard: <CreditCard size={32} />,
};

export const AnswersIndexPage: React.FC = () => {
  // Get featured questions from each category
  const featuredQuestions = ANSWER_CATEGORIES.flatMap(cat =>
    cat.answers.slice(0, 2).map(answer => ({ ...answer, categorySlug: cat.slug, categoryName: cat.name }))
  );

  return (
    <>
      <SEO
        title="Expert Recommendations | Peak Money"
        description="Get direct answers to common Canadian personal finance questions. Our experts recommend the best savings accounts, credit cards, and financial products for your specific needs."
        canonical="https://peakmoney.ca/answers"
      />

      {/* Page Header */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-10 text-center">
        <span className="font-sans font-bold text-xs uppercase tracking-widest text-peak-darkGray mb-4 block">
          Peak Money
        </span>
        <h1 className="text-5xl md:text-6xl font-serif text-peak-black mb-6 leading-tight">
          Expert Recommendations
        </h1>
        <p className="text-xl text-peak-darkGray font-serif italic max-w-2xl mx-auto">
          Direct answers to common questions. Our experts cut through the noise to recommend the best financial products for your specific situation.
        </p>
      </section>

      {/* Category Cards */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ANSWER_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`/answers/${category.slug}`}
              className="group bg-white rounded-2xl p-8 border border-peak-black/10 shadow-sm hover:shadow-lg hover:border-peak-black/20 transition-all"
            >
              <div className="w-16 h-16 bg-peak-mint rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {iconMap[category.icon]}
              </div>

              <h2 className="text-2xl font-serif text-peak-black mb-3">
                {category.name}
              </h2>

              <p className="text-peak-darkGray font-sans mb-4">
                {category.description}
              </p>

              <p className="text-sm text-peak-darkGray/60 font-sans mb-6">
                {category.answers.length} questions answered
              </p>

              <span className="inline-flex items-center gap-2 text-peak-black font-sans font-medium group-hover:gap-3 transition-all">
                Browse Questions <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Questions */}
      <section className="bg-peak-gray py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-serif text-peak-black mb-8 text-center">
            Popular Questions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredQuestions.map((answer) => (
              <Link
                key={answer.id}
                to={`/answers/${answer.categorySlug}/${answer.slug}`}
                className="group bg-white rounded-lg p-6 border border-peak-black/5 hover:border-peak-black/20 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-peak-mint/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircleQuestion size={20} className="text-peak-black" />
                  </div>
                  <div>
                    <span className="text-xs font-sans font-semibold uppercase tracking-wider text-peak-darkGray/60 mb-1 block">
                      {answer.categoryName}
                    </span>
                    <h4 className="text-lg font-serif text-peak-black group-hover:text-peak-darkGray transition-colors mb-2">
                      {answer.question}
                    </h4>
                    <p className="text-sm text-peak-darkGray font-sans line-clamp-2">
                      {answer.shortAnswer}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Answer */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-serif text-peak-black mb-8 text-center">
          How We Answer
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border border-peak-black/5">
            <span className="text-3xl font-serif text-peak-mint block mb-2">01</span>
            <h4 className="font-sans font-semibold text-peak-black mb-2">Direct Recommendations</h4>
            <p className="text-sm text-peak-darkGray">
              We give you a straight answer, not a list of options. Our pick is based on independent research.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-peak-black/5">
            <span className="text-3xl font-serif text-peak-mint block mb-2">02</span>
            <h4 className="font-sans font-semibold text-peak-black mb-2">Context-Specific</h4>
            <p className="text-sm text-peak-darkGray">
              Each answer addresses a specific situation. We explain who the recommendation is best for.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-peak-black/5">
            <span className="text-3xl font-serif text-peak-mint block mb-2">03</span>
            <h4 className="font-sans font-semibold text-peak-black mb-2">Updated Monthly</h4>
            <p className="text-sm text-peak-darkGray">
              We review our answers monthly to ensure recommendations reflect current rates and products.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
