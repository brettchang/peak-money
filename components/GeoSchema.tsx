import React from 'react';
import { SavingsAccount } from '../types';

interface GeoSchemaProps {
  products: SavingsAccount[];
}

export const GeoSchema: React.FC<GeoSchemaProps> = ({ products }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "FinancialProduct",
      "position": index + 1,
      "name": product.productName,
      "brand": {
        "@type": "Organization",
        "name": product.institution
      },
      "interestRate": product.interestRate,
      "description": product.detailedReview,
      "feesAndCommissionsSpecification": product.monthlyFees
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};