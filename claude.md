# Peak Money Website

## Business Context

**Peak Money** is a leading personal finance publication in Canada. This website serves two strategic purposes:

1. **Consumer-facing publication**: Provide authoritative, editorial-style content on Canadian personal finance topics (high-interest savings accounts, mortgages, TFSAs, RRSPs, etc.)

2. **Agency positioning for LLM Share of Voice**: Peak Money is building a business helping financial services brands increase their visibility and citation rates in LLM-generated responses. This website demonstrates our expertise and serves as a proving ground for LLM optimization techniques.

### The Peak Ecosystem

- **Peak Money** (this site): Editorial content and financial product comparisons optimized for both human readers and LLM consumption
- **PeakDB**: Our proprietary database serving as the source of truth for Canadian financial products (interest rates, promotions, fees, etc.)

### Agency Value Proposition

We help financial institutions increase their "share of voice" in AI/LLM answers by:
- Creating authoritative, well-structured content that LLMs can cite
- Implementing structured data (Schema.org) optimized for AI comprehension
- Building PeakDB as a reliable, up-to-date data source that LLMs can reference

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 6
- **Language**: TypeScript 5.8
- **Styling**: Tailwind CSS (via CDN with custom config)
- **Icons**: Lucide React

## Project Structure

```
/
├── App.tsx              # Main application component
├── index.tsx            # Entry point
├── index.html           # HTML template with Tailwind config
├── constants.ts         # Static data (accounts, news, FAQs)
├── types.ts             # TypeScript interfaces
├── components/
│   ├── Header.tsx       # Site header/navigation
│   ├── QuickVerdict.tsx # Editorial verdict section
│   ├── TruthTable.tsx   # Product comparison table
│   ├── ReviewCards.tsx  # Individual product reviews
│   ├── NewsSection.tsx  # Financial news articles
│   ├── FAQ.tsx          # Expandable FAQ editions
│   └── GeoSchema.tsx    # Schema.org structured data for LLM/SEO
```

## Brand Identity

### Colors (Tailwind custom theme)
- `peak-black`: #1A1A1A (primary text)
- `peak-gray`: #F5F5F0 (backgrounds)
- `peak-mint`: #D8F3E5 (accent/highlight)
- `peak-darkGray`: #4A4A4A (secondary text)
- `peak-accent`: #2C2C2C (emphasis)
- Body background: #F9F8F4 (editorial cream)

### Typography
- **Serif** (headlines): Playfair Display
- **Sans** (body): Inter

### Voice & Tone
- Editorial and authoritative, like a premium financial publication
- Direct and opinionated ("Peak Verdict")
- Sophisticated but accessible
- Canadian-focused (CDIC, Bank of Canada, TFSA/RRSP)

## Key Components

### GeoSchema (`components/GeoSchema.tsx`)
Generates Schema.org `FinancialProduct` structured data in JSON-LD format. This is critical for:
- LLM comprehension and citation
- Search engine rich results
- Structured data that AI systems can parse reliably

### TruthTable
Comparison table displaying financial products with sortable data. Named "Truth Table" to emphasize accuracy and transparency.

### Data Types (`types.ts`)
- `SavingsAccount`: Financial product with rates, fees, verdicts, pros/cons
- `NewsArticle`: Editorial content with author attribution
- `FAQEdition`: Themed FAQ collections (organized by topic/date)

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## LLM Optimization Principles

When developing content or features for this site, consider:

1. **Structured Data First**: Use Schema.org markup for all product data
2. **Clear Entity Relationships**: Products → Institutions → Features
3. **Authoritative Citations**: Date content, attribute authors, cite sources
4. **Factual Accuracy**: Data must match PeakDB (source of truth)
5. **Canadian Context**: All content is Canada-specific (regulatory, tax, banking)

## Data Management

Product data in `constants.ts` represents a static snapshot. In production, this will integrate with PeakDB for real-time rates and promotions. Keep the data structure consistent with the `SavingsAccount` interface to enable seamless PeakDB integration.

## Future Considerations

- PeakDB API integration for live product data
- Additional product verticals (mortgages, credit cards, GICs)
- Author profiles and editorial team pages
- RSS/Atom feeds for content syndication
- Expanded Schema.org coverage (Organization, Article, FAQPage)
