import React from 'react';
import { Link } from 'react-router-dom';
import { SavingsAccount } from '../types';
import { ArrowRight } from 'lucide-react';

interface TruthTableProps {
  data: SavingsAccount[];
}

export const TruthTable: React.FC<TruthTableProps> = ({ data }) => {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-20">
      <div className="mb-6 flex items-end justify-between border-b-2 border-peak-black pb-4">
        <h3 className="text-3xl font-serif text-peak-black">The Market Data</h3>
        <span className="text-xs font-sans uppercase tracking-widest text-peak-darkGray">
          Updated: Oct 2025
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-peak-black font-sans text-xs uppercase tracking-widest">
              <th className="py-4 font-bold text-peak-black w-1/4">Financial Institution</th>
              <th className="py-4 font-bold text-peak-black w-1/4">Account Name</th>
              <th className="py-4 font-bold text-peak-black text-right">Interest Rate (APY)</th>
              <th className="py-4 font-bold text-peak-black text-right">Monthly Fees</th>
              <th className="py-4 font-bold text-peak-black w-1/4 pl-8">Peak Verdict</th>
              <th className="py-4 font-bold text-peak-black w-16"></th>
            </tr>
          </thead>
          <tbody className="font-sans text-sm">
            {data.map((account) => (
              <tr key={account.id} className="border-b border-peak-black/10 hover:bg-white transition-colors group">
                <td className="py-6 font-semibold text-lg font-serif text-peak-black group-hover:text-peak-darkGray">
                  {account.institution}
                </td>
                <td className="py-6 text-peak-darkGray">
                  {account.productName}
                </td>
                <td className="py-6 text-right font-bold text-peak-black text-lg">
                  <span className="bg-peak-mint/50 px-2 py-1 rounded-sm">
                    {account.interestRate}
                  </span>
                </td>
                <td className="py-6 text-right text-peak-darkGray">
                  {account.monthlyFees}
                </td>
                <td className="py-6 pl-8 italic text-peak-darkGray font-serif">
                  {account.peakVerdict}
                </td>
                <td className="py-6 text-right">
                  <Link
                    to={`/reviews/savings/${account.slug}`}
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-peak-gray group-hover:bg-peak-mint transition-colors"
                    title={`Read full review of ${account.institution} ${account.productName}`}
                  >
                    <ArrowRight size={14} className="text-peak-black" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs font-sans text-peak-darkGray/60">
        *Rates are subject to change without notice. Data aggregated from public filings. Click arrow to read full review.
      </p>
    </section>
  );
};
