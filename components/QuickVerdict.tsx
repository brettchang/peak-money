import React from 'react';

export const QuickVerdict: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto mt-12 mb-16 px-6">
      <div className="border-t-4 border-peak-black bg-peak-mint p-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-auto">
            <span className="inline-block bg-peak-black text-white text-xs font-bold px-2 py-1 uppercase tracking-widest mb-3">
              Quick Verdict
            </span>
            <h2 className="text-2xl font-serif leading-tight mb-2">
              The Best High-Interest Savings Account Right Now
            </h2>
          </div>
          <div className="flex-1">
            <p className="font-serif text-lg leading-relaxed text-peak-black border-l-2 border-peak-black/20 pl-4 md:pl-6">
              For most Canadians in 2025, <span className="font-bold border-b border-peak-black/40">WealthSimple Cash</span> is the superior choice. 
              It offers a market-leading 4.0% interest rate with zero monthly fees and instant liquidity. 
              If you prefer a traditional bank, <span className="font-bold border-b border-peak-black/40">EQ Bank</span> remains the runner-up 
              due to its lack of minimum balance requirements and robust mobile app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};