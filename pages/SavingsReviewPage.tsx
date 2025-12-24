import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronLeft, Check, X, Shield, TrendingUp, Zap, Building } from 'lucide-react';
import { SEO } from '../components/SEO';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { ACCOUNT_DATA } from '../constants';
import { SavingsAccount } from '../types';

// Schema.org markup for savings account review
const SavingsReviewSchema: React.FC<{ account: SavingsAccount }> = ({ account }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": `${account.institution} ${account.productName}`,
    "description": account.detailedReview,
    "brand": {
      "@type": "Organization",
      "name": account.institution
    },
    "interestRate": account.interestRate,
    "feesAndCommissionsSpecification": account.monthlyFees,
    "review": {
      "@type": "Review",
      "author": {
        "@type": "Organization",
        "name": "Peak Money"
      },
      "reviewBody": account.fullReview.join(" "),
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

export const SavingsReviewPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const account = ACCOUNT_DATA.find(a => a.slug === slug);

  if (!account) {
    return <Navigate to="/comparisons" replace />;
  }

  // Get other accounts for comparison
  const otherAccounts = ACCOUNT_DATA.filter(a => a.id !== account.id).slice(0, 2);

  return (
    <>
      <SEO
        title={`${account.institution} ${account.productName} Review`}
        description={`${account.detailedReview} Best for: ${account.bestFor}`}
        canonical={`https://peakmoney.ca/reviews/savings/${account.slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://peakmoney.ca/' },
          { name: 'Comparisons', url: 'https://peakmoney.ca/comparisons' },
          { name: 'Savings Accounts', url: 'https://peakmoney.ca/comparisons/savings' },
          { name: `${account.institution} ${account.productName}`, url: `https://peakmoney.ca/reviews/savings/${account.slug}` },
        ]}
      />
      <SavingsReviewSchema account={account} />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-6 pt-8">
        <Link
          to="/comparisons"
          className="inline-flex items-center gap-1 text-sm text-peak-darkGray hover:text-peak-black transition-colors"
        >
          <ChevronLeft size={16} />
          Back to Comparisons
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
          {account.institution} <span className="text-peak-darkGray/60">{account.productName}</span>
        </h1>

        <p className="text-2xl font-serif text-peak-darkGray italic mb-6">
          "{account.peakVerdict}"
        </p>

        <p className="text-lg text-peak-darkGray font-sans">
          <strong>Best for:</strong> {account.bestFor}
        </p>
      </header>

      {/* Quick Stats */}
      <section className="max-w-4xl mx-auto px-6 pb-10">
        <div className="bg-peak-mint rounded-2xl p-6 md:p-8">
          <h2 className="text-lg font-sans font-semibold text-peak-black mb-6">At a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/60 rounded-lg p-4 text-center">
              <TrendingUp size={24} className="mx-auto mb-2 text-peak-black" />
              <span className="text-2xl font-serif text-peak-black block">{account.interestRate}</span>
              <span className="text-xs font-sans text-peak-darkGray uppercase tracking-wider">Interest Rate</span>
            </div>
            <div className="bg-white/60 rounded-lg p-4 text-center">
              <Zap size={24} className="mx-auto mb-2 text-peak-black" />
              <span className="text-2xl font-serif text-peak-black block">{account.monthlyFees}</span>
              <span className="text-xs font-sans text-peak-darkGray uppercase tracking-wider">Monthly Fee</span>
            </div>
            <div className="bg-white/60 rounded-lg p-4 text-center">
              <Building size={24} className="mx-auto mb-2 text-peak-black" />
              <span className="text-2xl font-serif text-peak-black block">{account.minBalance}</span>
              <span className="text-xs font-sans text-peak-darkGray uppercase tracking-wider">Minimum</span>
            </div>
            <div className="bg-white/60 rounded-lg p-4 text-center">
              <Shield size={24} className="mx-auto mb-2 text-peak-black" />
              <span className="text-2xl font-serif text-peak-black block">{account.cdic ? 'Yes' : 'No'}</span>
              <span className="text-xs font-sans text-peak-darkGray uppercase tracking-wider">CDIC Insured</span>
            </div>
          </div>

          {(account.eTransferLimit || account.withdrawalLimit) && (
            <div className="mt-6 pt-6 border-t border-peak-black/10 grid grid-cols-2 gap-4 text-sm">
              {account.eTransferLimit && (
                <div>
                  <span className="text-peak-darkGray">e-Transfer Limit:</span>
                  <span className="text-peak-black font-semibold ml-2">{account.eTransferLimit}</span>
                </div>
              )}
              {account.withdrawalLimit && (
                <div>
                  <span className="text-peak-darkGray">Withdrawal Limit:</span>
                  <span className="text-peak-black font-semibold ml-2">{account.withdrawalLimit}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Full Review */}
      <article className="max-w-3xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-serif text-peak-black mb-6 pb-4 border-b border-peak-black/10">
          Full Review
        </h2>
        <div className="prose prose-lg">
          {account.fullReview.map((paragraph, index) => (
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
                {account.pros.map((pro, i) => (
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
                {account.cons.map((con, i) => (
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
      {otherAccounts.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-serif text-peak-black mb-8">
            Compare with Other Accounts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherAccounts.map((other) => (
              <Link
                key={other.id}
                to={`/reviews/savings/${other.slug}`}
                className="bg-white rounded-lg p-6 border border-peak-black/10 hover:shadow-md transition-all group"
              >
                <h3 className="text-xl font-serif text-peak-black mb-2 group-hover:text-peak-darkGray transition-colors">
                  {other.institution} {other.productName}
                </h3>
                <p className="text-peak-darkGray text-sm mb-4">{other.peakVerdict}</p>
                <div className="flex gap-4 text-sm">
                  <span className="font-semibold text-peak-black">{other.interestRate}</span>
                  <span className="text-peak-darkGray">{other.monthlyFees}/mo</span>
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
            <strong>Disclosure:</strong> Peak Money may receive compensation from {account.institution}.
            This does not influence our editorial ratings. All deposit accounts listed are CDIC insured
            up to applicable limits. Information is accurate as of October 2025.
          </p>
        </div>
      </section>
    </>
  );
};
