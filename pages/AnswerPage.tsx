import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronLeft, Award, ArrowRight, CheckCircle, AlertCircle, Calendar } from 'lucide-react';
import { SEO } from '../components/SEO';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { FAQPageSchema } from '../components/FAQPageSchema';
import { ANSWER_CATEGORIES, ACCOUNT_DATA, CREDIT_CARD_DATA } from '../constants';
import { SavingsAccount, CreditCard } from '../types';

// Helper to get product by ID
const getProduct = (productId: string): SavingsAccount | CreditCard | undefined => {
  const savings = ACCOUNT_DATA.find(p => p.id === productId);
  if (savings) return savings;
  return CREDIT_CARD_DATA.find(p => p.id === productId);
};

// Product Card Component
const ProductCard: React.FC<{
  product: SavingsAccount | CreditCard;
  reasoning: string;
  isPrimary?: boolean;
}> = ({ product, reasoning, isPrimary = false }) => {
  const isSavings = 'interestRate' in product && !('annualFee' in product);

  return (
    <div className={`rounded-xl p-6 ${isPrimary ? 'bg-peak-mint border-2 border-peak-black' : 'bg-white border border-peak-black/10'}`}>
      {isPrimary && (
        <div className="flex items-center gap-2 mb-4">
          <Award size={20} className="text-peak-black" />
          <span className="text-sm font-sans font-bold uppercase tracking-wider text-peak-black">Our Pick</span>
        </div>
      )}

      <div className="mb-4">
        <span className="text-sm font-sans text-peak-darkGray/70">{product.institution}</span>
        <h3 className="text-xl font-serif text-peak-black">{product.productName}</h3>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {isSavings ? (
          <>
            <div>
              <span className="text-xs font-sans uppercase text-peak-darkGray/60">Interest Rate</span>
              <p className="text-2xl font-serif text-peak-black">{(product as SavingsAccount).interestRate}</p>
            </div>
            <div>
              <span className="text-xs font-sans uppercase text-peak-darkGray/60">Monthly Fee</span>
              <p className="text-2xl font-serif text-peak-black">{(product as SavingsAccount).monthlyFees}</p>
            </div>
          </>
        ) : (
          <>
            <div>
              <span className="text-xs font-sans uppercase text-peak-darkGray/60">Annual Fee</span>
              <p className="text-2xl font-serif text-peak-black">{(product as CreditCard).annualFee}</p>
            </div>
            <div>
              <span className="text-xs font-sans uppercase text-peak-darkGray/60">Rewards</span>
              <p className="text-lg font-serif text-peak-black">{(product as CreditCard).rewardsRate}</p>
            </div>
          </>
        )}
      </div>

      <p className="text-peak-darkGray font-sans text-sm mb-4">{reasoning}</p>

      {/* Pros/Cons */}
      <div className="space-y-2">
        {product.pros.slice(0, 2).map((pro, i) => (
          <div key={i} className="flex items-start gap-2 text-sm">
            <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-peak-darkGray">{pro}</span>
          </div>
        ))}
        {product.cons.slice(0, 1).map((con, i) => (
          <div key={i} className="flex items-start gap-2 text-sm">
            <AlertCircle size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
            <span className="text-peak-darkGray">{con}</span>
          </div>
        ))}
      </div>

      {/* Link to full review */}
      <Link
        to={isSavings ? `/reviews/savings/${product.slug}` : `/reviews/credit-cards/${product.slug}`}
        className="inline-flex items-center gap-1 text-sm font-sans font-medium text-peak-black mt-4 hover:gap-2 transition-all"
      >
        Read Full Review <ArrowRight size={14} />
      </Link>
    </div>
  );
};

export const AnswerPage: React.FC = () => {
  const { categorySlug, answerSlug } = useParams<{ categorySlug: string; answerSlug: string }>();

  const category = ANSWER_CATEGORIES.find(c => c.slug === categorySlug);
  const answer = category?.answers.find(a => a.slug === answerSlug);

  if (!category || !answer) {
    return <Navigate to="/answers" replace />;
  }

  const recommendedProduct = getProduct(answer.recommendation.productId);
  const runnerUpProduct = answer.runnerUp ? getProduct(answer.runnerUp.productId) : undefined;

  // Get related answers
  const relatedAnswers = answer.relatedAnswers
    ?.map(id => {
      for (const cat of ANSWER_CATEGORIES) {
        const found = cat.answers.find(a => a.id === id);
        if (found) return { ...found, categorySlug: cat.slug };
      }
      return null;
    })
    .filter(Boolean) || [];

  // FAQ schema data
  const faqData = [{
    question: answer.question,
    answer: answer.shortAnswer + ' ' + answer.fullAnswer.join(' ')
  }];

  return (
    <>
      <SEO
        title={`${answer.question} | Peak Money`}
        description={answer.shortAnswer}
        canonical={`https://peakmoney.ca/answers/${category.slug}/${answer.slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://peakmoney.ca/' },
          { name: 'Expert Recommendations', url: 'https://peakmoney.ca/answers' },
          { name: category.name, url: `https://peakmoney.ca/answers/${category.slug}` },
          { name: answer.question, url: `https://peakmoney.ca/answers/${category.slug}/${answer.slug}` },
        ]}
      />
      <FAQPageSchema questions={faqData} />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-6 pt-8">
        <Link
          to={`/answers/${category.slug}`}
          className="inline-flex items-center gap-1 text-sm text-peak-darkGray hover:text-peak-black transition-colors"
        >
          <ChevronLeft size={16} />
          Back to {category.name}
        </Link>
      </nav>

      {/* Question Header */}
      <header className="max-w-4xl mx-auto px-6 pt-8 pb-8">
        <span className="inline-block text-xs font-sans font-semibold uppercase tracking-wider text-peak-mint bg-peak-black px-3 py-1 rounded-full mb-6">
          {category.name}
        </span>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-peak-black mb-6 leading-tight">
          {answer.question}
        </h1>

        <p className="text-xl text-peak-darkGray font-serif italic mb-4">
          {answer.shortAnswer}
        </p>

        <div className="flex items-center gap-2 text-sm text-peak-darkGray/60">
          <Calendar size={14} />
          <span>Last updated: {answer.lastUpdated}</span>
        </div>
      </header>

      {/* Recommendation Section */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {recommendedProduct && (
            <ProductCard
              product={recommendedProduct}
              reasoning={answer.recommendation.reasoning}
              isPrimary
            />
          )}
          {runnerUpProduct && answer.runnerUp && (
            <div>
              <span className="text-sm font-sans font-semibold uppercase tracking-wider text-peak-darkGray/60 mb-3 block">
                Runner Up
              </span>
              <ProductCard
                product={runnerUpProduct}
                reasoning={answer.runnerUp.reasoning}
              />
            </div>
          )}
        </div>
      </section>

      {/* Considerations */}
      <section className="bg-peak-gray py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-serif text-peak-black mb-6">
            Things to Consider
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {answer.considerations.map((consideration, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-peak-black/5">
                <p className="text-peak-darkGray font-sans">{consideration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Answer */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-serif text-peak-black mb-6">
          The Full Answer
        </h2>
        <div className="prose prose-lg">
          {answer.fullAnswer.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-peak-black font-serif leading-relaxed mb-6"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      {/* Related Answers */}
      {relatedAnswers.length > 0 && (
        <section className="bg-peak-gray py-12">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-serif text-peak-black mb-6">
              Related Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedAnswers.map((related: any) => (
                <Link
                  key={related.id}
                  to={`/answers/${related.categorySlug}/${related.slug}`}
                  className="bg-white rounded-lg p-6 border border-peak-black/5 hover:border-peak-black/20 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-serif text-peak-black mb-2 group-hover:text-peak-darkGray transition-colors">
                    {related.question}
                  </h3>
                  <p className="text-sm text-peak-darkGray font-sans line-clamp-2">
                    {related.shortAnswer}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-sans font-medium text-peak-black mt-3 group-hover:gap-2 transition-all">
                    Read Answer <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA to Comparisons */}
      <section className="bg-peak-black text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-serif mb-4">
            Want to Compare All Options?
          </h3>
          <p className="text-peak-gray/80 font-sans mb-6">
            See our complete comparison tables with every rate, fee, and feature.
          </p>
          <Link
            to={`/comparisons/${category.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-peak-mint text-peak-black font-sans font-medium rounded-lg hover:bg-white transition-colors"
          >
            View {category.name} Comparison <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
};
