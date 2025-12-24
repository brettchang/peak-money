import React from 'react';

export const WebSiteSchema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://peakmoney.ca/#website",
    "url": "https://peakmoney.ca",
    "name": "Peak Money",
    "description": "Canada's leading personal finance publication. Compare high-interest savings accounts, credit cards, mortgages, and more.",
    "publisher": {
      "@id": "https://peakmoney.ca/#organization"
    },
    "inLanguage": "en-CA",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://peakmoney.ca/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
