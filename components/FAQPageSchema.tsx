import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQPageSchemaProps {
  questions: FAQItem[];
}

export const FAQPageSchema: React.FC<FAQPageSchemaProps> = ({ questions }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
