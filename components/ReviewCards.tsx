import React from 'react';
import { Link } from 'react-router-dom';
import { SavingsAccount, CreditCard } from '../types';
import { Check, X, ArrowRight } from 'lucide-react';

type ProductCategory = 'savings' | 'credit-cards';

interface ReviewCardsProps {
  category: ProductCategory;
  savingsData?: SavingsAccount[];
  creditCardData?: CreditCard[];
}

export const ReviewCards: React.FC<ReviewCardsProps> = ({ category, savingsData = [], creditCardData = [] }) => {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-20">
      <h3 className="text-3xl font-serif text-peak-black mb-10 border-b-2 border-peak-black pb-4 inline-block">
        The Deep Dive
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {category === 'savings' ? (
          savingsData.map((account) => (
            <article key={account.id} className="flex flex-col h-full group">
              <div className="border-t border-peak-black pt-4 mb-4">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-peak-darkGray">
                  Review No. {account.id}
                </span>
              </div>

              <h4 className="text-2xl font-serif font-medium leading-snug mb-4 text-peak-black">
                Why We Like The {account.institution} {account.productName}
              </h4>

              <p className="font-sans text-peak-darkGray leading-relaxed mb-6 flex-grow">
                {account.detailedReview}
              </p>

              <div className="bg-white p-6 border border-peak-black/5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)]">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-sans text-xs font-bold uppercase mb-3 flex items-center text-peak-black">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      The Good
                    </h5>
                    <ul className="space-y-2">
                      {account.pros.map((pro, i) => (
                        <li key={i} className="text-sm font-sans text-peak-darkGray flex items-start">
                          <Check className="w-3 h-3 mr-2 mt-1 text-peak-black shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-sans text-xs font-bold uppercase mb-3 flex items-center text-peak-black">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                      The Bad
                    </h5>
                    <ul className="space-y-2">
                      {account.cons.map((con, i) => (
                        <li key={i} className="text-sm font-sans text-peak-darkGray flex items-start">
                          <X className="w-3 h-3 mr-2 mt-1 text-peak-black shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to={`/reviews/savings/${account.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-peak-black hover:gap-3 transition-all border-b border-peak-black pb-0.5"
                >
                  Read Full Review <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))
        ) : (
          creditCardData.map((card) => (
            <article key={card.id} className="flex flex-col h-full group">
              <div className="border-t border-peak-black pt-4 mb-4">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-peak-darkGray">
                  Review No. {card.id.replace('cc', '')}
                </span>
              </div>

              <h4 className="text-2xl font-serif font-medium leading-snug mb-2 text-peak-black">
                {card.institution} {card.productName}
              </h4>

              <p className="text-lg font-serif italic text-peak-darkGray mb-4">
                "{card.peakVerdict}"
              </p>

              <div className="flex flex-wrap gap-3 mb-4 text-sm">
                <span className="bg-peak-mint px-3 py-1 rounded-full">{card.annualFee}/yr</span>
                <span className="bg-peak-gray px-3 py-1 rounded-full">{card.rewardsRate}</span>
                {card.welcomeBonus && (
                  <span className="bg-peak-gray px-3 py-1 rounded-full">{card.welcomeBonus}</span>
                )}
              </div>

              <p className="font-sans text-peak-darkGray leading-relaxed mb-6 flex-grow">
                {card.detailedReview}
              </p>

              <div className="bg-white p-6 border border-peak-black/5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)]">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-sans text-xs font-bold uppercase mb-3 flex items-center text-peak-black">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      The Good
                    </h5>
                    <ul className="space-y-2">
                      {card.pros.map((pro, i) => (
                        <li key={i} className="text-sm font-sans text-peak-darkGray flex items-start">
                          <Check className="w-3 h-3 mr-2 mt-1 text-peak-black shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-sans text-xs font-bold uppercase mb-3 flex items-center text-peak-black">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                      The Bad
                    </h5>
                    <ul className="space-y-2">
                      {card.cons.map((con, i) => (
                        <li key={i} className="text-sm font-sans text-peak-darkGray flex items-start">
                          <X className="w-3 h-3 mr-2 mt-1 text-peak-black shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to={`/reviews/credit-cards/${card.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-peak-black hover:gap-3 transition-all border-b border-peak-black pb-0.5"
                >
                  Read Full Review <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
};
