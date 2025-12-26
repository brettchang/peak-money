import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronLeft, Check, X, CreditCard as CreditCardIcon, Gift, Percent, Globe, Shield, Loader2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { useCreditCard, useCreditCards } from '../lib/useReviews';
import { CreditCard } from '../types';

// Schema.org markup for credit card review
const CreditCardReviewSchema: React.FC<{ card: CreditCard }> = ({ card }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": `${card.institution} ${card.productName}`,
    "description": card.detailedReview,
    "brand": {
      "@type": "Organization",
      "name": card.institution
    },
    "annualPercentageRate": card.interestRate,
    "feesAndCommissionsSpecification": card.annualFee,
    "review": {
      "@type": "Review",
      "author": {
        "@type": "Organization",
        "name": "Peak Money"
      },
      "reviewBody": card.fullReview.join(" "),
      "publisher": {
        "@type": "Organization",
        "name": "Peak Money"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export const CreditCardReviewPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { card, loading } = useCreditCard(slug || '');
  const { cards: allCards } = useCreditCards();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-peak-darkGray" size={32} />
      </div>
    );
  }

  if (!card) {
    return <Navigate to="/answers/credit-cards" replace />;
  }

  // Get other cards for comparison
  const otherCards = allCards.filter(c => c.id !== card.id).slice(0, 2);

  return (
    <>
      <SEO
        title={`${card.institution} ${card.productName} Review`}
        description={`${card.detailedReview} Best for: ${card.bestFor}`}
        canonical={`https://peakmoney.ca/reviews/credit-cards/${card.slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://peakmoney.ca/' },
          { name: 'Expert Recommendations', url: 'https://peakmoney.ca/answers' },
          { name: 'Credit Cards', url: 'https://peakmoney.ca/answers/credit-cards' },
          { name: `${card.institution} ${card.productName}`, url: `https://peakmoney.ca/reviews/credit-cards/${card.slug}` },
        ]}
      />
      <CreditCardReviewSchema card={card} />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-6 pt-8">
        <Link
          to="/answers/credit-cards"
          className="inline-flex items-center gap-1 text-sm text-peak-darkGray hover:text-peak-black transition-colors"
        >
          <ChevronLeft size={16} />
          Back to Credit Cards
        </Link>
      </nav>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 pt-8 pb-8">
        <div className="mb-4">
          <span className="inline-block text-xs font-sans font-semibold uppercase tracking-wider text-white bg-peak-black px-3 py-1 rounded-full">
            Deep Dive Review
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-peak-black mb-4 leading-tight">
          {card.institution} <span className="text-peak-darkGray/60">{card.productName}</span>
        </h1>

        <p className="text-2xl font-serif text-peak-darkGray italic mb-6">
          "{card.peakVerdict}"
        </p>

        <p className="text-lg text-peak-darkGray font-sans">
          <strong>Best for:</strong> {card.bestFor}
        </p>
      </header>

      {/* Quick Stats */}
      <section className="max-w-4xl mx-auto px-6 pb-10">
        <div className="bg-peak-mint rounded-2xl p-6 md:p-8">
          <h2 className="text-lg font-sans font-semibold text-peak-black mb-6">At a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/60 rounded-lg p-4 text-center">
              <CreditCardIcon size={24} className="mx-auto mb-2 text-peak-black" />
              <span className="text-xl font-serif text-peak-black block">{card.annualFee}</span>
              <span className="text-xs font-sans text-peak-darkGray uppercase tracking-wider">Annual Fee</span>
            </div>
            <div className="bg-white/60 rounded-lg p-4 text-center">
              <Percent size={24} className="mx-auto mb-2 text-peak-black" />
              <span className="text-lg font-serif text-peak-black block leading-tight">{card.rewardsRate}</span>
              <span className="text-xs font-sans text-peak-darkGray uppercase tracking-wider">Rewards</span>
            </div>
            <div className="bg-white/60 rounded-lg p-4 text-center">
              <Gift size={24} className="mx-auto mb-2 text-peak-black" />
              <span className="text-lg font-serif text-peak-black block leading-tight">{card.welcomeBonus || 'None'}</span>
              <span className="text-xs font-sans text-peak-darkGray uppercase tracking-wider">Welcome Bonus</span>
            </div>
            <div className="bg-white/60 rounded-lg p-4 text-center">
              <Globe size={24} className="mx-auto mb-2 text-peak-black" />
              <span className="text-xl font-serif text-peak-black block">{card.foreignTransactionFee || 'N/A'}</span>
              <span className="text-xs font-sans text-peak-darkGray uppercase tracking-wider">FX Fee</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-peak-black/10">
            <div className="flex items-center gap-2 text-sm text-peak-darkGray mb-2">
              <span className="font-semibold text-peak-black">Purchase Interest Rate:</span>
              <span>{card.interestRate}</span>
            </div>
            {card.insuranceBenefits && card.insuranceBenefits.length > 0 && (
              <div className="flex items-start gap-2 text-sm">
                <Shield size={16} className="text-peak-black mt-0.5" />
                <div>
                  <span className="font-semibold text-peak-black">Insurance:</span>
                  <span className="text-peak-darkGray ml-2">{card.insuranceBenefits.join(', ')}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Full Review */}
      <article className="max-w-3xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-serif text-peak-black mb-6 pb-4 border-b border-peak-black/10">
          Full Review
        </h2>
        <div className="prose prose-lg">
          {card.fullReview.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-peak-black font-serif leading-relaxed mb-6"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      {/* Pros and Cons */}
      <section className="bg-peak-gray py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-serif text-peak-black mb-8 text-center">
            The Bottom Line
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-sans font-semibold text-peak-black mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Check size={18} className="text-green-600" />
                </div>
                The Good
              </h3>
              <ul className="space-y-3">
                {card.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-peak-darkGray">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-sans font-semibold text-peak-black mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <X size={18} className="text-red-500" />
                </div>
                The Bad
              </h3>
              <ul className="space-y-3">
                {card.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X size={16} className="text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-peak-darkGray">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compare with Others */}
      {otherCards.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-serif text-peak-black mb-8">
            Compare with Other Cards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherCards.map((other) => (
              <Link
                key={other.id}
                to={`/reviews/credit-cards/${other.slug}`}
                className="bg-white rounded-lg p-6 border border-peak-black/10 hover:shadow-md transition-all group"
              >
                <h3 className="text-xl font-serif text-peak-black mb-2 group-hover:text-peak-darkGray transition-colors">
                  {other.institution} {other.productName}
                </h3>
                <p className="text-peak-darkGray text-sm mb-4">{other.peakVerdict}</p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="bg-peak-gray px-2 py-1 rounded">{other.annualFee}/yr</span>
                  <span className="bg-peak-gray px-2 py-1 rounded">{other.rewardsRate}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Disclaimer */}
      <section className="bg-peak-black text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-peak-gray/60 leading-relaxed">
            <strong>Disclosure:</strong> Peak Money may receive compensation from {card.institution}.
            This does not influence our editorial ratings. Credit card terms and conditions apply.
            Information is accurate as of October 2025. Always verify current rates and offers
            with the issuing institution.
          </p>
        </div>
      </section>
    </>
  );
};
