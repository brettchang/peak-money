import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar, BookOpen } from 'lucide-react';
import { SEO } from '../components/SEO';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { FAQ_EDITIONS } from '../constants';
import { Question, FAQEdition } from '../types';

// Schema.org FAQPage markup for individual question
const FAQQuestionSchema: React.FC<{ question: Question; edition: FAQEdition }> = ({ question, edition }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": question.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": question.fullAnswer ? question.fullAnswer.join(" ") : question.answer
      }
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Peak Money"
    },
    "datePublished": edition.date,
    "about": edition.title
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export const FAQQuestionPage: React.FC = () => {
  const { editionSlug, questionSlug } = useParams<{ editionSlug: string; questionSlug: string }>();

  // Find the edition and question
  const edition = FAQ_EDITIONS.find(e => e.slug === editionSlug);
  const question = edition?.questions.find(q => q.slug === questionSlug);

  if (!edition || !question) {
    return <Navigate to="/faq" replace />;
  }

  // Find current question index and get prev/next
  const currentIndex = edition.questions.findIndex(q => q.slug === questionSlug);
  const prevQuestion = currentIndex > 0 ? edition.questions[currentIndex - 1] : null;
  const nextQuestion = currentIndex < edition.questions.length - 1 ? edition.questions[currentIndex + 1] : null;

  // Get related questions from all editions
  const relatedQuestions = question.relatedQuestions
    ?.map(relId => {
      for (const ed of FAQ_EDITIONS) {
        const found = ed.questions.find(q => q.id === relId);
        if (found) return { question: found, edition: ed };
      }
      return null;
    })
    .filter((item): item is { question: Question; edition: FAQEdition } => item !== null) || [];

  return (
    <>
      <SEO
        title={`${question.question} | Peak Money FAQ`}
        description={question.answer}
        canonical={`https://peakmoney.ca/faq/${edition.slug}/${question.slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://peakmoney.ca/' },
          { name: 'FAQ', url: 'https://peakmoney.ca/faq' },
          { name: edition.title, url: `https://peakmoney.ca/faq#${edition.slug}` },
          { name: question.question, url: `https://peakmoney.ca/faq/${edition.slug}/${question.slug}` },
        ]}
      />
      <FAQQuestionSchema question={question} edition={edition} />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-6 pt-8">
        <div className="flex items-center gap-2 text-sm text-peak-darkGray">
          <Link to="/faq" className="hover:text-peak-black transition-colors">
            FAQ
          </Link>
          <ChevronRight size={14} />
          <Link
            to={`/faq#${edition.slug}`}
            className="hover:text-peak-black transition-colors"
          >
            {edition.title}
          </Link>
        </div>
      </nav>

      {/* Question Header */}
      <header className="max-w-4xl mx-auto px-6 pt-8 pb-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block text-xs font-sans font-semibold uppercase tracking-wider text-white bg-peak-black px-3 py-1 rounded-full">
            {edition.title}
          </span>
          <span className="flex items-center gap-1 text-sm text-peak-darkGray">
            <Calendar size={14} />
            {edition.date}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif text-peak-black mb-6 leading-tight">
          {question.question}
        </h1>

        <p className="text-xl text-peak-darkGray font-serif italic">
          {question.answer}
        </p>
      </header>

      {/* Full Answer */}
      <article className="max-w-3xl mx-auto px-6 pb-16">
        <div className="border-t border-peak-black/10 pt-8">
          <h2 className="text-lg font-sans font-semibold text-peak-black mb-6 flex items-center gap-2">
            <BookOpen size={20} />
            The Full Answer
          </h2>

          {question.fullAnswer ? (
            <div className="prose prose-lg">
              {question.fullAnswer.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-peak-black font-serif leading-relaxed mb-6"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-lg text-peak-black font-serif leading-relaxed">
              {question.answer}
            </p>
          )}
        </div>

        {/* Sources */}
        {question.sources && question.sources.length > 0 && (
          <div className="mt-8 pt-6 border-t border-peak-black/10">
            <h3 className="text-sm font-sans font-semibold text-peak-darkGray uppercase tracking-wider mb-3">
              Sources
            </h3>
            <ul className="text-sm text-peak-darkGray">
              {question.sources.map((source, i) => (
                <li key={i} className="mb-1">• {source}</li>
              ))}
            </ul>
          </div>
        )}
      </article>

      {/* Related Questions */}
      {relatedQuestions.length > 0 && (
        <section className="bg-peak-gray py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-serif text-peak-black mb-8">
              Related Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedQuestions.map(({ question: relQ, edition: relEd }) => (
                <Link
                  key={relQ.id}
                  to={`/faq/${relEd.slug}/${relQ.slug}`}
                  className="bg-white rounded-lg p-6 shadow-sm border border-peak-black/5 hover:shadow-md transition-all group"
                >
                  <span className="text-xs font-sans text-peak-darkGray/60 block mb-2">
                    {relEd.title}
                  </span>
                  <h3 className="text-lg font-serif text-peak-black mb-2 group-hover:text-peak-darkGray transition-colors">
                    {relQ.question}
                  </h3>
                  <p className="text-sm text-peak-darkGray line-clamp-2">
                    {relQ.answer}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prev/Next Navigation */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center">
          {prevQuestion ? (
            <Link
              to={`/faq/${edition.slug}/${prevQuestion.slug}`}
              className="flex items-center gap-2 text-peak-darkGray hover:text-peak-black transition-colors group"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <div className="text-right">
                <span className="text-xs uppercase tracking-wider block">Previous</span>
                <span className="font-serif text-peak-black">{prevQuestion.question}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextQuestion ? (
            <Link
              to={`/faq/${edition.slug}/${nextQuestion.slug}`}
              className="flex items-center gap-2 text-peak-darkGray hover:text-peak-black transition-colors group text-right"
            >
              <div>
                <span className="text-xs uppercase tracking-wider block">Next</span>
                <span className="font-serif text-peak-black">{nextQuestion.question}</span>
              </div>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* Back to All FAQs */}
      <section className="bg-peak-black text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-peak-gray/80 font-sans mb-4">Have more questions?</p>
          <Link
            to="/faq"
            className="inline-block px-6 py-3 bg-peak-mint text-peak-black font-sans font-medium rounded-lg hover:bg-white transition-colors"
          >
            Browse All FAQs
          </Link>
        </div>
      </section>
    </>
  );
};
