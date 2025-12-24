import React from 'react';
import { NewsArticle } from '../types';
import { ArrowRight } from 'lucide-react';

interface NewsSectionProps {
  articles: NewsArticle[];
}

export const NewsSection: React.FC<NewsSectionProps> = ({ articles }) => {
  // Logic: Find the featured article, otherwise fallback to the first one.
  const featured = articles.find(article => article.featured) || articles[0];
  
  // Logic: The sidebar contains all articles EXCEPT the featured one.
  const sidebar = articles.filter(article => article.id !== featured.id);

  return (
    <section className="max-w-6xl mx-auto px-6 mb-20">
      <div className="flex items-end justify-between border-b-2 border-peak-black pb-4 mb-10">
        <h3 className="text-3xl font-serif text-peak-black">Latest Dispatches</h3>
        <button className="text-xs font-sans uppercase tracking-widest text-peak-darkGray hover:text-peak-black transition-colors flex items-center group">
          View Archive <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Feature - Displayed prominently at the top/left */}
        <div className="lg:col-span-8 group cursor-pointer">
           <div className="relative overflow-hidden mb-6 aspect-video bg-peak-gray">
             {featured.imageUrl && (
               <img 
                 src={featured.imageUrl} 
                 alt={featured.title} 
                 className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 grayscale hover:grayscale-0"
               />
             )}
             <div className="absolute top-4 left-4 bg-white px-3 py-1 border border-peak-black/10">
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-peak-black">
                  {featured.category}
                </span>
             </div>
           </div>
           
           <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-4 text-peak-black group-hover:underline decoration-1 underline-offset-4">
             {featured.title}
           </h2>
           <p className="text-lg text-peak-darkGray font-serif leading-relaxed mb-4 max-w-2xl">
             {featured.summary}
           </p>
           <div className="flex items-center text-xs font-sans uppercase tracking-widest text-peak-darkGray/60">
             <span>By {featured.author}</span>
             <span className="mx-2">•</span>
             <span>{featured.date}</span>
           </div>
        </div>

        {/* Sidebar List - Displays non-featured articles */}
        <div className="lg:col-span-4 flex flex-col space-y-8 border-t lg:border-t-0 lg:border-l border-peak-black/10 pt-8 lg:pt-0 lg:pl-8">
          {sidebar.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="flex flex-col h-full">
                <div className="mb-2 flex justify-between items-baseline">
                   <span className="text-xs font-sans font-bold uppercase tracking-widest text-peak-mint bg-peak-black px-2 py-0.5">
                     {article.category}
                   </span>
                </div>
                <h4 className="text-xl font-serif leading-snug mb-2 text-peak-black group-hover:text-peak-darkGray transition-colors">
                  {article.title}
                </h4>
                <p className="text-sm font-sans text-peak-darkGray line-clamp-2 mb-3">
                  {article.summary}
                </p>
                <div className="mt-auto text-xs font-sans text-peak-darkGray/50">
                   {article.date}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};