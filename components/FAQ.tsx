import React from 'react';
import { FAQEdition } from '../types';
import { ArrowRight, History } from 'lucide-react';

interface FAQProps {
  editions: FAQEdition[];
}

export const FAQ: React.FC<FAQProps> = ({ editions }) => {
  // Guard against empty data
  if (!editions || editions.length === 0) return null;

  const currentEdition = editions[0];
  const pastEditions = editions.slice(1);

  return (
    <section className="bg-peak-black text-peak-gray py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-12 mb-20">
          <div className="md:w-1/3">
             <span className="block border-t border-peak-gray/30 w-12 mb-6"></span>
             <h3 className="text-4xl font-serif text-white leading-none mb-4">
               5 Questions With The Editors
             </h3>
             <p className="font-sans text-sm text-peak-gray/60 mb-2 font-medium">
               {currentEdition.title}
             </p>
             <p className="font-sans text-xs text-peak-gray/40 uppercase tracking-widest">
                {currentEdition.date}
             </p>
          </div>
          
          <div className="md:w-2/3 space-y-10">
            {currentEdition.questions.map((item, idx) => (
              <div key={idx} className="group">
                <h4 className="text-xl font-serif text-white mb-3 group-hover:text-peak-mint transition-colors">
                  {idx + 1}. {item.question}
                </h4>
                <p className="font-sans text-peak-gray/80 leading-relaxed font-light">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Past Editions */}
        {pastEditions.length > 0 && (
            <div className="border-t border-peak-gray/10 pt-10">
                <div className="flex items-center gap-2 mb-6">
                    <History className="w-4 h-4 text-peak-gray/40" />
                    <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-peak-gray/40">
                        Past Briefings
                    </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pastEditions.map((edition) => (
                        <div key={edition.id} className="group cursor-pointer border border-peak-gray/10 p-4 hover:border-peak-mint/30 transition-colors bg-white/5 hover:bg-white/10">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-sans text-peak-gray/50 uppercase tracking-widest">{edition.date}</span>
                                <ArrowRight className="w-4 h-4 text-peak-gray/30 group-hover:text-peak-mint group-hover:translate-x-1 transition-all" />
                            </div>
                            <h5 className="text-lg font-serif text-white group-hover:text-peak-mint transition-colors">
                                {edition.title}
                            </h5>
                        </div>
                    ))}
                </div>
            </div>
        )}
      </div>
    </section>
  );
};