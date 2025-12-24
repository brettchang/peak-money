import React from 'react';

export const OrganizationSchema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://peakmoney.ca/#organization",
    "name": "Peak Money",
    "url": "https://peakmoney.ca",
    "logo": {
      "@type": "ImageObject",
      "url": "https://peakmoney.ca/logo.png",
      "width": 200,
      "height": 60
    },
    "description": "Canada's leading personal finance publication providing authoritative information on high-interest savings accounts, mortgages, TFSAs, RRSPs, and more.",
    "foundingDate": "2024",
    "areaServed": {
      "@type": "Country",
      "name": "Canada"
    },
    "knowsAbout": [
      "High-Interest Savings Accounts",
      "Canadian Personal Finance",
      "TFSA",
      "RRSP",
      "GICs",
      "Credit Cards",
      "Mortgages",
      "CDIC Insurance"
    ],
    "slogan": "Smart Finance for Canadians",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@peakmoney.ca",
      "availableLanguage": ["English", "French"]
    },
    "sameAs": [
      "https://twitter.com/peakmoney",
      "https://linkedin.com/company/peakmoney"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
