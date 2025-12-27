import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, Calendar, ArrowRight, Loader2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { FAQPageSchema } from '../components/FAQPageSchema';
import { useFAQEditions } from '../lib/useFAQ';

export const FAQPage: React.FC = () => {
  const { editions, loading } = useFAQEditions();
  const [activeEdition, setActiveEdition] = useState('');
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  // Set active edition when editions load
  useEffect(() => {
    if (editions.length > 0 && !activeEdition) {
      setActiveEdition(editions[0].id);
    }
  }, [editions, activeEdition]);

  const currentEdition = editions.find(e => e.id === activeEdition) || editions[0];

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-peak-darkGray" size={32} />
      </div>
    );
  }

  if (!editions || editions.length === 0) {
    return null;
  }

  // Collect all questions for FAQ schema
  const allQuestions = editions.flatMap(edition =>
    edition.questions.map(q => ({ question: q.question, answer: q.answer }))
  );

  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Answers to the questions Canadian savers and investors ask most, organized by topic and updated monthly by Peak Money's editorial team."
        canonical="https://peakmoney.ca/faq"
      />
      <FAQPageSchema questions={allQuestions.slice(0, 10)} />
      {/* Page Header */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-10 text-center">
        <span className="font-sans font-bold text-xs uppercase tracking-widest text-peak-darkGray mb-4 block">
          Knowledge Base
        </span>
        <h1 className="text-5xl md:text-6xl font-serif text-peak-black mb-6 leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-peak-darkGray font-serif italic max-w-2xl mx-auto">
          Answers to the questions Canadian savers and investors ask most, organized by topic and updated monthly.
        </p>
      </section>

      {/* Edition Selector */}
      <section className="max-w-4xl mx-auto px-6 pb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {editions.map((edition) => (
            <button
              key={edition.id}
              onClick={() => setActiveEdition(edition.id)}
              className={`px-4 py-2 rounded-full font-sans text-sm transition-all ${
                activeEdition === edition.id
                  ? 'bg-peak-black text-white'
                  : 'bg-peak-gray text-peak-darkGray hover:bg-peak-black/10'
              }`}
            >
              {edition.title}
            </button>
          ))}
        </div>
      </section>

      {/* Current Edition Content */}
      {currentEdition && (
        <section id={currentEdition.slug} className="max-w-4xl mx-auto px-6 pb-16">
          <div className="bg-white rounded-lg shadow-sm border border-peak-black/5 overflow-hidden">
            {/* Edition Header */}
            <div className="bg-peak-black text-white p-6">
              <h2 className="text-2xl font-serif mb-2">{currentEdition.title}</h2>
              <p className="text-peak-gray/80 text-sm mb-3">{currentEdition.description}</p>
              <div className="flex items-center gap-2 text-peak-mint text-sm">
                <Calendar size={14} />
                <span>{currentEdition.date}</span>
              </div>
            </div>

            {/* Questions */}
            <div className="divide-y divide-peak-black/5">
              {currentEdition.questions.map((q, index) => {
                const questionId = `${currentEdition.id}-${index}`;
                const isOpen = openQuestions.has(questionId);

                return (
                  <div key={questionId} className="group">
                    <button
                      onClick={() => toggleQuestion(questionId)}
                      className="w-full px-6 py-5 flex items-start gap-4 text-left hover:bg-peak-gray/50 transition-colors"
                    >
                      <span className="text-peak-mint font-mono text-sm mt-1">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="flex-grow font-serif text-lg text-peak-black">
                        {q.question}
                      </span>
                      {isOpen ? (
                        <ChevronDown size={20} className="text-peak-darkGray mt-1 flex-shrink-0" />
                      ) : (
                        <ChevronRight size={20} className="text-peak-darkGray mt-1 flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pl-16">
                        <p className="text-peak-darkGray font-sans leading-relaxed mb-4">
                          {q.answer}
                        </p>
                        <Link
                          to={`/faq/${currentEdition.slug}/${q.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-peak-black hover:gap-3 transition-all"
                        >
                          Read Full Answer <ArrowRight size={14} />
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Editions Archive */}
      <section className="bg-peak-gray py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-serif text-peak-black mb-8 text-center">
            Browse All Editions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {editions.map((edition) => (
              <div
                key={edition.id}
                className={`bg-white rounded-lg p-6 shadow-sm border transition-all hover:shadow-md ${
                  activeEdition === edition.id
                    ? 'border-peak-black'
                    : 'border-peak-black/5'
                }`}
              >
                <span className="text-xs font-sans text-peak-darkGray/60 block mb-2">
                  {edition.date}
                </span>
                <h4 className="font-serif text-xl text-peak-black mb-2">
                  {edition.title}
                </h4>
                <p className="text-sm text-peak-darkGray mb-4">
                  {edition.description}
                </p>
                <div className="space-y-2">
                  {edition.questions.slice(0, 3).map((q) => (
                    <Link
                      key={q.id}
                      to={`/faq/${edition.slug}/${q.slug}`}
                      className="block text-sm text-peak-darkGray hover:text-peak-black transition-colors truncate"
                    >
                      → {q.question}
                    </Link>
                  ))}
                  {edition.questions.length > 3 && (
                    <button
                      onClick={() => {
                        setActiveEdition(edition.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-sm text-peak-black font-semibold"
                    >
                      +{edition.questions.length - 3} more questions
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h3 className="text-2xl font-serif text-peak-black mb-4">
          Have a Question We Haven't Answered?
        </h3>
        <p className="text-peak-darkGray font-sans mb-6">
          Submit your question and our editorial team may feature it in an upcoming edition.
        </p>
        <button className="px-6 py-3 bg-peak-black text-white font-sans font-medium rounded-lg hover:bg-peak-accent transition-colors">
          Submit a Question
        </button>
      </section>
    </>
  );
};
