import { SavingsAccount, CreditCard, ProductCategory, NewsArticle, FAQEdition } from './types';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'savings',
    slug: 'savings',
    name: 'High-Interest Savings Accounts',
    shortName: 'Savings',
    description: 'The best places to park your cash while earning competitive interest rates.',
    icon: 'PiggyBank'
  },
  {
    id: 'credit-cards',
    slug: 'credit-cards',
    name: 'Credit Cards',
    shortName: 'Credit Cards',
    description: 'Rewards cards, cashback cards, and low-interest options for every spending style.',
    icon: 'CreditCard'
  }
];

export const CREDIT_CARD_DATA: CreditCard[] = [
  {
    id: "cc01",
    slug: "scotiabank-momentum-visa-infinite",
    institution: "Scotiabank",
    productName: "Momentum Visa Infinite",
    annualFee: "$120",
    rewardsRate: "4% groceries, 2% gas & transit",
    welcomeBonus: "$400 welcome bonus",
    interestRate: "20.99%",
    foreignTransactionFee: "2.5%",
    insuranceBenefits: ["Purchase protection", "Extended warranty", "Car rental insurance"],
    peakVerdict: "The Everyday Spender's Champion",
    bestFor: "Families with significant grocery and recurring bill spending",
    detailedReview: "Scotiabank's Momentum Visa Infinite is the undisputed king of everyday category spending in Canada. With 4% back on groceries and recurring bills, plus 2% on gas and transit, it pays for itself quickly if you're strategic about where you swipe. The annual fee stings, but the math works out for households spending $800+/month on groceries.",
    fullReview: [
      "The Scotiabank Momentum Visa Infinite has earned its reputation as the best everyday cashback card in Canada through simple math: 4% back on groceries is unmatched by any competitor, and Canadians spend a lot on groceries.",
      "The category structure is generous. The 4% rate applies to grocery stores and recurring bill payments (subscriptions, utilities, internet). The 2% tier covers gas stations, daily transit, and drugstores. Everything else earns 1%. For a household with typical spending patterns, this translates to hundreds of dollars in annual cashback.",
      "Let's do the math: A family spending $1,000/month on groceries earns $480/year on that category alone. Add $200/month on gas ($48/year) and $150/month on subscriptions ($72/year), and you're looking at $600+ in annual cashback—five times the annual fee.",
      "The $400 welcome bonus (typically requiring $1,000 spend in the first 3 months) sweetens the first-year value proposition significantly. Combined with the ongoing cashback, first-year value can exceed $1,000.",
      "The downsides are manageable. The $120 annual fee is real, but easily offset by the cashback if you hit the bonus categories. The 20.99% interest rate is painful if you carry a balance—this is strictly a pay-in-full card. And the 2.5% foreign transaction fee makes it a poor choice for international travel.",
      "Scotia Rewards points can be redeemed for statement credits, gift cards, or travel through Scotia's portal. The redemption value is straightforward: 1 point = 1 cent. No complicated transfer schemes or devaluation risks.",
      "The Momentum Visa Infinite is our top pick for Canadian households focused on maximizing everyday spending. The category rates are industry-leading, the redemption is simple, and the math works for anyone spending meaningfully on groceries."
    ],
    pros: ["Highest grocery cashback rate", "No merchant restrictions", "Strong welcome bonus"],
    cons: ["$120 annual fee", "High interest rate if you carry a balance"]
  },
  {
    id: "cc02",
    slug: "tangerine-money-back-credit-card",
    institution: "Tangerine",
    productName: "Money-Back Credit Card",
    annualFee: "$0",
    rewardsRate: "2% on 2-3 categories",
    interestRate: "19.95%",
    foreignTransactionFee: "2.5%",
    insuranceBenefits: ["Purchase protection", "Extended warranty"],
    peakVerdict: "The No-Fee Winner",
    bestFor: "Fee-conscious spenders who want solid returns without complexity",
    detailedReview: "Tangerine lets you pick your own 2% cashback categories (3 if you have a savings account with them). It is the rare no-fee card that actually competes with premium offerings. Perfect for minimalists who want solid returns without tracking annual fee ROI.",
    fullReview: [
      "The Tangerine Money-Back Credit Card proves that no-fee cards don't have to be terrible. By letting you choose your own 2% cashback categories, it offers competitive returns that rival cards charging $100+ annually.",
      "The category selection is where this card shines. You pick two categories from a list including groceries, restaurants, gas, drug stores, entertainment, furniture, and more. If you have a Tangerine savings account, you get a third category free. Your cashback is automatically deposited into your Tangerine account monthly.",
      "The 2% rate on chosen categories beats most premium cards' base rates. Outside your selected categories, you earn 0.5%—not great, but acceptable for a no-fee card. The key is aligning your categories with your actual spending patterns.",
      "No annual fee means no breakeven calculation. Every dollar of cashback is pure profit. For light spenders or those philosophically opposed to paying for credit cards, this is compelling. Even modest spending generates meaningful returns with zero downside.",
      "The Tangerine ecosystem integration is a plus if you're already banking with them. Cashback flows directly into your savings or chequing account, and the app provides a unified view of your finances. If you're not a Tangerine customer, you'll need to open a savings account to get the third category—but that account is also no-fee.",
      "The card lacks the bells and whistles of premium offerings. Insurance coverage is basic, there's no airport lounge access, and the 2.5% foreign transaction fee makes it unsuitable for travel. It's a domestic everyday card, nothing more.",
      "The Tangerine Money-Back is our pick for anyone who wants straightforward cashback without annual fee guilt. Choose your categories wisely, pay your balance in full, and enjoy free money."
    ],
    pros: ["No annual fee", "Choose your own categories", "Simple flat-rate structure"],
    cons: ["Only 0.5% outside chosen categories", "No welcome bonus"]
  },
  {
    id: "cc03",
    slug: "american-express-cobalt",
    institution: "American Express",
    productName: "Cobalt Card",
    annualFee: "$156 ($12.99/mo)",
    rewardsRate: "5x dining & groceries, 2x transit",
    welcomeBonus: "Up to 30,000 points",
    interestRate: "21.99%",
    foreignTransactionFee: "2.5%",
    insuranceBenefits: ["Purchase protection", "Fraud protection", "Front of the line access"],
    peakVerdict: "The Points Maximizer",
    bestFor: "Food enthusiasts and points optimizers who value transfer flexibility",
    detailedReview: "The Amex Cobalt is a points-earning machine for food lovers. At 5x on dining and groceries, it is unmatched for accumulating transferable Membership Rewards points. The monthly fee structure makes it easier to swallow, and the points transfer to Aeroplan at 1:1. Just watch for Amex acceptance gaps at smaller merchants.",
    fullReview: [
      "The American Express Cobalt Card occupies a unique position in the Canadian credit card market: it's simultaneously the best food rewards card and one of the best travel cards, depending on how you use the points.",
      "The earning structure is exceptional. 5x points on food and drinks (restaurants, bars, grocery stores, food delivery) crushes the competition. 2x on transit and travel, 1x on everything else. For anyone who spends heavily on food—and who doesn't?—the points accumulate rapidly.",
      "The magic is in the transfer partners. Cobalt points transfer 1:1 to Aeroplan, Marriott Bonvoy, and other programs. A 5x earn rate on groceries that transfers to Aeroplan at 1:1 is effectively 5 Aeroplan points per dollar—better than the Aeroplan credit card itself for that category.",
      "The monthly fee structure ($12.99/month vs. a lump sum annual fee) reduces commitment anxiety. You're never more than a month from being able to cancel, and the psychological impact of $13/month feels lighter than $156 upfront. It's the same money, but Amex understands behavioral economics.",
      "The welcome bonus (typically 2,500 points per month for the first year when you spend $500/month) can add up to 30,000 points—worth $300+ depending on redemption. This effectively makes the first year free for engaged users.",
      "The Achilles heel is acceptance. Amex isn't taken everywhere in Canada, particularly at smaller merchants, Costco, and some restaurants. You'll need a backup Visa or Mastercard. The 2.5% foreign transaction fee also makes this a poor choice for international spending.",
      "The Cobalt is our top pick for points maximizers who eat out frequently or spend significantly on groceries. The 5x food rate is unmatched, and the transfer flexibility to Aeroplan makes these points genuinely valuable for travel redemptions."
    ],
    pros: ["5x on food categories is industry-leading", "Flexible points transfers", "Monthly fee option"],
    cons: ["Amex not accepted everywhere", "Points require strategy to maximize"]
  },
  {
    id: "cc04",
    slug: "cibc-aventura-visa-infinite",
    institution: "CIBC",
    productName: "Aventura Visa Infinite",
    annualFee: "$139",
    rewardsRate: "1.5 points per $1",
    welcomeBonus: "20,000 Aventura points",
    interestRate: "20.99%",
    foreignTransactionFee: "2.5%",
    insuranceBenefits: ["Travel emergency medical", "Trip cancellation", "Car rental insurance", "Purchase protection"],
    peakVerdict: "The Travel Generalist",
    bestFor: "Travelers who want simplicity and solid insurance without category optimization",
    detailedReview: "CIBC Aventura offers solid, consistent earning without category restrictions. The points work across multiple travel programs, giving flexibility that category-locked cards lack. Not the highest earner, but reliable and comes with solid insurance coverage for the fee.",
    fullReview: [
      "The CIBC Aventura Visa Infinite is the sensible sedan of Canadian travel cards. It won't turn heads, but it reliably gets you where you're going with a comfortable ride and decent fuel economy.",
      "The earning structure is straightforward: 1.5 Aventura points per dollar on everything, everywhere. No bonus categories to track, no merchant restrictions to navigate. This simplicity appeals to cardholders who don't want to optimize every transaction.",
      "Aventura points can be redeemed through CIBC's travel portal or transferred to partners including Aeroplan. Portal redemptions typically value points at about 1 cent each; transfer to Aeroplan can yield higher value for those willing to put in the effort.",
      "The insurance package is where this card earns its annual fee. Travel emergency medical coverage (up to $1 million), trip cancellation/interruption insurance, car rental collision coverage, and purchase protection are all included. For occasional travelers, this coverage alone can justify the $139 fee.",
      "The welcome bonus of 20,000 points (worth roughly $200) after first purchase provides immediate value. Combined with the insurance benefits, first-year value is solid even with modest spending.",
      "The downsides are the opportunity cost. The 1.5x flat rate lags behind category-focused cards for their bonus spending. Someone putting $1,000/month on groceries would earn significantly more with a Scotiabank Momentum or Amex Cobalt. The 2.5% foreign transaction fee also limits international utility.",
      "The Aventura Visa Infinite makes sense for two groups: CIBC relationship clients who value integration with their banking, and travelers who want solid insurance coverage without the complexity of optimizing multiple cards. It's not exciting, but it's competent."
    ],
    pros: ["Flexible travel redemptions", "Strong travel insurance", "No category tracking needed"],
    cons: ["Lower earn rate than category cards", "Annual fee for modest returns"]
  }
];

export const ACCOUNT_DATA: SavingsAccount[] = [
  {
    id: "01",
    slug: "wealthsimple-cash",
    institution: "WealthSimple",
    productName: "Cash Account",
    interestRate: "4.00%",
    monthlyFees: "$0.00",
    minBalance: "$0",
    cdic: true,
    eTransferLimit: "Unlimited free",
    withdrawalLimit: "Unlimited",
    peakVerdict: "The Modern Default",
    bestFor: "Tech-savvy savers who want top rates with zero friction",
    detailedReview: "WealthSimple has effectively killed the distinction between checking and savings. With a massive 4% base rate and zero fees, it is the most fluid way to hold cash while fighting inflation. It feels less like a bank and more like a tech utility.",
    fullReview: [
      "WealthSimple Cash has become the default recommendation for anyone asking where to park their savings in Canada. The 4% interest rate isn't a promotional teaser—it's the everyday rate, paid on every dollar from the first cent. In an industry built on fine print and gotchas, this simplicity is revolutionary.",
      "The account blurs the line between savings and chequing in the best way possible. You get a Visa debit card that works anywhere, unlimited free e-Transfers, and the ability to set up direct deposits and bill payments. There's no need to maintain a separate chequing account at a big bank just to access your money.",
      "The mobile app is best-in-class. Account opening takes minutes, transfers are instant between WealthSimple accounts, and the interface is clean enough that you'll actually enjoy checking your balance. The company's roots in investment management show in the polish.",
      "The trade-off is the lack of physical presence. There are no branches to visit, no bankers to meet with, and customer service is primarily through chat. For most routine banking needs this is fine, but if you need certified cheques or have complex situations, you may need to maintain a relationship with a traditional institution.",
      "CDIC insurance covers deposits up to $100,000 through their banking partner, and the company's venture-backed stability means your money is as safe here as anywhere. WealthSimple has processed billions in deposits without incident.",
      "For the vast majority of Canadians, WealthSimple Cash should be where your emergency fund and short-term savings live. The combination of top-tier rates, zero fees, and genuine usability as a daily account makes it our top pick."
    ],
    pros: ["High base interest rate", "No monthly fees", "Use card internationally"],
    cons: ["No physical branches", "Customer service is chat-heavy"]
  },
  {
    id: "02",
    slug: "eq-bank-savings-plus",
    institution: "EQ Bank",
    productName: "Savings Plus",
    interestRate: "2.50%",
    monthlyFees: "$0.00",
    minBalance: "$0",
    cdic: true,
    eTransferLimit: "Unlimited free",
    withdrawalLimit: "Unlimited",
    peakVerdict: "The Reliable Runner-Up",
    bestFor: "Conservative savers who value stability and GIC integration",
    detailedReview: "EQ Bank started the digital banking revolution in Canada and remains a stalwart choice. While their base rate has been eclipsed by newer entrants, their platform stability and integration with GIC products make them a serious contender for the risk-averse.",
    fullReview: [
      "EQ Bank deserves credit for proving that Canadians would trust a digital-only bank with their savings. Launched in 2016, they pioneered the high-interest savings account model that newer fintech players have since copied and improved upon.",
      "The current 2.50% rate is no longer market-leading, but EQ Bank offers something the startups can't match: a track record. They've operated profitably for years, their parent company Equitable Bank has been around since 1970, and their systems have proven reliable through market turbulence.",
      "Where EQ Bank really shines is in the integration between savings and GICs. If you're the type of saver who wants to ladder GICs alongside your liquid savings, EQ makes this seamless. Their GIC rates are consistently competitive, and moving money between products takes seconds.",
      "The account also functions well as a daily driver. Bill payments, e-Transfers, and direct deposits all work smoothly. The recent addition of a card option has addressed the historical complaint about accessibility, though it came later than competitors.",
      "The mobile app is functional if not flashy. It gets the job done without the design polish of WealthSimple or Neo, which may actually be a plus for users who find minimalist fintech interfaces confusing.",
      "EQ Bank is the right choice for savers who prioritize proven reliability over bleeding-edge rates. If you're building a GIC ladder or simply want the peace of mind that comes with an established institution, the slightly lower yield is a reasonable trade-off."
    ],
    pros: ["CDIC Insured", "Great bill payment features", "Seamless GIC purchasing"],
    cons: ["Lower base rate than competitors", "No debit card (historically)"]
  },
  {
    id: "03",
    slug: "tangerine-savings",
    institution: "Tangerine",
    productName: "Savings Account",
    interestRate: "0.70% (6.00% Promo)",
    monthlyFees: "$0.00",
    minBalance: "$0",
    cdic: true,
    eTransferLimit: "Unlimited free",
    withdrawalLimit: "Unlimited",
    peakVerdict: "The Promo Hunter's Pick",
    bestFor: "Active savers willing to chase promotional rates",
    detailedReview: "Tangerine (owned by Scotiabank) plays a different game. Their base rate is negligible, but their promotional rates for new clients are often market-leading. If you are willing to move money every 5 months, this is your winner.",
    fullReview: [
      "Tangerine's strategy is nakedly transactional: offer eye-popping promotional rates to attract deposits, then hope customers don't notice when the rate crashes back to earth. If you're willing to play the game, it can work in your favor.",
      "The promotional rates—often 5-6% for new clients or new deposits—are genuinely excellent. For a 5-month promotional period, you can earn significantly more than you would at a flat-rate competitor. The catch is that you need to be organized enough to move your money when the promo expires.",
      "The base rate of 0.70% is insulting in the current environment. Leaving money at Tangerine after a promo ends is essentially giving Scotiabank free profits. Set a calendar reminder or use a rate-tracking tool to avoid this trap.",
      "On the positive side, Tangerine's Scotiabank backing means rock-solid CDIC insurance and a mature, stable platform. The mobile app is excellent—arguably the best among traditional bank offshoots. And if you have other Scotiabank products, the integration can be convenient.",
      "Tangerine also offers a no-fee chequing account with a debit card, making it possible to use them as your primary bank. The combination of promo-hunting savings and free daily banking can be a winning setup for the right customer.",
      "Our recommendation: use Tangerine as a promotional rate vehicle, not a permanent home. Open an account when they're offering a strong promo, deposit your savings, and move the money to a higher-base-rate account when the promotional period ends. Rinse and repeat."
    ],
    pros: ["Backed by Scotiabank", "Huge promotional spikes", "Excellent mobile app"],
    cons: ["Terrible base rate", "Requires active management"]
  },
  {
    id: "04",
    slug: "neo-financial-savings",
    institution: "Neo Financial",
    productName: "High-Interest Savings",
    interestRate: "4.00%",
    monthlyFees: "$0.00",
    minBalance: "$0",
    cdic: true,
    eTransferLimit: "Unlimited free",
    withdrawalLimit: "Unlimited",
    peakVerdict: "The Disruptor",
    bestFor: "Ecosystem players who want savings + high cashback credit cards",
    detailedReview: "Neo is aggressive. Matching WealthSimple on rates, they offer a slick interface and tight integration with their credit products (which offer high cashback). It is a strong ecosystem play for the digital native.",
    fullReview: [
      "Neo Financial emerged from Calgary's startup scene with a clear mission: out-WealthSimple WealthSimple. Their 4% savings rate matches the market leader, and their credit card cashback program is genuinely category-leading.",
      "The savings account itself is straightforward. You get the full 4% on all balances, CDIC insurance through their banking partner, and a clean mobile app for managing your money. Transfers are quick, and there are no fees to worry about.",
      "Where Neo differentiates is in the ecosystem play. Their Neo Money card offers up to 5% cashback at partner merchants—not rotating categories or complicated redemption schemes, but actual instant cashback. If you shop at partner retailers (Hudson's Bay, Staples, and others), the combined value of savings rate plus cashback is hard to beat.",
      "The app experience is modern and responsive, though perhaps not quite as polished as WealthSimple's. Account opening is fast, and the company has invested heavily in making the onboarding experience smooth.",
      "The concern with Neo is longevity. They're a younger company, still in growth mode, and their aggressive rates are partly funded by venture capital. The 4% rate could change if their unit economics demand it. That said, your deposits are CDIC insured regardless of what happens to the company.",
      "Neo makes sense if you're going all-in on their ecosystem. The combination of top-tier savings rates and market-leading cashback rewards creates real value for engaged users. If you just want a savings account, WealthSimple's more established platform might be a safer choice."
    ],
    pros: ["High interest rate", "Great cashback integration", "Modern UI"],
    cons: ["Newer entrant", "Ecosystem feels closed"]
  }
];

export const NEWS_DATA: NewsArticle[] = [
  {
    id: "n1",
    slug: "bank-of-canada-holds-rates-october-2025",
    title: "Bank of Canada Holds Rates Steady at 4.5%",
    summary: "Governor Macklem signals that the tightening cycle may be over, but core inflation remains a stubborn challenge for the central bank's policy committee.",
    content: [
      "The Bank of Canada held its overnight lending rate at 4.5% on Wednesday, marking the third consecutive meeting without a change and signaling that the aggressive tightening cycle that began in March 2022 may finally be drawing to a close.",
      "Governor Tiff Macklem, speaking at the post-decision press conference, struck a cautiously optimistic tone while emphasizing that the battle against inflation is not yet won. \"We are seeing the effects of higher interest rates working through the economy,\" Macklem said. \"But core inflation remains sticky, and we need to see more progress before we can consider easing.\"",
      "The decision was widely expected by markets, with overnight index swaps pricing in a 95% probability of a hold heading into the announcement. The Canadian dollar traded flat against its US counterpart following the release.",
      "For Canadian savers, the rate hold means high-interest savings accounts will continue to offer attractive yields. Many digital banks are currently paying between 4% and 5% on deposits, a stark contrast to the near-zero rates that prevailed just three years ago.",
      "However, the news is less welcome for borrowers. Canadians with variable-rate mortgages continue to face elevated payments, and those approaching renewal on fixed-rate terms are bracing for significant increases. The Bank estimates that about 60% of outstanding mortgages have yet to renew at current rate levels.",
      "Looking ahead, futures markets are pricing in the first rate cut for the second quarter of 2026, though Macklem was careful not to provide explicit forward guidance. \"We will make decisions meeting by meeting, based on the incoming data,\" he said."
    ],
    category: "Monetary Policy",
    date: "Oct 24, 2025",
    author: "Sarah Jenkins",
    authorTitle: "Senior Economics Correspondent",
    imageUrl: "https://images.unsplash.com/photo-1565514020176-dbf2277e3c66?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "The Bank of Canada headquarters in Ottawa",
    featured: true,
    relatedArticles: ["n2", "n3"]
  },
  {
    id: "n2",
    slug: "60-40-portfolio-comeback-2025",
    title: "Why The 60/40 Portfolio Is Making a Comeback",
    summary: "After a disastrous 2022, the classic balanced portfolio is proving its worth again in a high-yield environment.",
    content: [
      "The 60/40 portfolio—the time-tested strategy of allocating 60% to stocks and 40% to bonds—was declared dead in 2022 when both asset classes fell in tandem, delivering the worst returns in decades. But reports of its demise may have been greatly exaggerated.",
      "Through the first three quarters of 2025, a simple 60/40 split between the S&P/TSX Composite and Canadian aggregate bonds has returned 12.3%, outperforming many sophisticated alternatives. The strategy's rehabilitation has been driven by one key factor: bonds are finally paying meaningful income again.",
      "\"For a decade, the 40 in 60/40 was essentially dead weight,\" says Marcus Thompson, portfolio manager at a major Canadian asset manager. \"Now you're getting 4-5% yields on investment-grade bonds. That changes the math entirely.\"",
      "The return of positive real yields—interest rates above the rate of inflation—has restored bonds to their traditional role as both an income generator and a portfolio stabilizer. When equities sold off in August, Canadian bonds rallied, providing the diversification benefit that was conspicuously absent in 2022.",
      "For DIY investors, implementing a 60/40 strategy has never been easier or cheaper. Asset allocation ETFs from providers like Vanguard, iShares, and BMO offer one-ticker solutions with management fees under 0.25%.",
      "Critics argue that the strategy remains vulnerable to a resurgence in inflation, which would simultaneously hurt both stocks and bonds. But for investors seeking simplicity and reasonable risk-adjusted returns, the boring balanced portfolio is once again a viable option."
    ],
    category: "Investing",
    date: "Oct 22, 2025",
    author: "Michael Chen",
    authorTitle: "Investment Analyst",
    relatedArticles: ["n1", "n3"]
  },
  {
    id: "n3",
    slug: "cash-etf-tax-implications-canada",
    title: "The Hidden Tax Implications of Cash ETFs",
    summary: "High interest is great, until tax season. Here is how to structure your holdings to minimize the CRA's cut.",
    content: [
      "High-interest savings ETFs have exploded in popularity over the past two years, with assets in Canadian cash ETFs surpassing $30 billion. Products like CI High Interest Savings ETF (CSAV) and Purpose High Interest Savings ETF (PSA) offer yields competitive with—or better than—traditional savings accounts. But there's a catch that many investors overlook: taxes.",
      "Unlike interest earned in a savings account at a bank, the distributions from cash ETFs are often classified as \"other income\" rather than pure interest. This seemingly technical distinction can have meaningful implications for your tax bill.",
      "\"The CRA treats these distributions based on their underlying character,\" explains tax specialist Amanda Liu. \"In many cases, a portion is classified as capital gains or return of capital, which receive more favorable treatment than interest.\"",
      "However, this tax treatment is not guaranteed and varies by fund. Some cash ETFs generate primarily interest income, which is taxed at your full marginal rate. For high-income earners in Ontario, that can mean losing nearly 54% of your interest to taxes.",
      "The solution? Hold cash ETFs in registered accounts whenever possible. In a TFSA, all growth is tax-free. In an RRSP, taxes are deferred until withdrawal. The tax drag of holding these instruments in a taxable account can reduce your after-tax yield by 1-2 percentage points.",
      "For funds that must remain in taxable accounts, consider corporate-class money market funds, which can be more tax-efficient for high earners. The trade-off is slightly lower yields and higher complexity."
    ],
    category: "Tax Strategy",
    date: "Oct 20, 2025",
    author: "Priya Patel",
    authorTitle: "Tax & Estate Planning Editor",
    relatedArticles: ["n1", "n4"]
  },
  {
    id: "n4",
    slug: "toronto-vancouver-housing-market-outlook-2025",
    title: "Housing Market Outlook: The Spring Thaw",
    summary: "Inventory is climbing in Toronto and Vancouver, signaling a potential shift in buyer leverage.",
    content: [
      "After two years of frozen activity, Canada's largest housing markets are showing signs of life—but perhaps not in the way sellers hoped. Active listings in the Greater Toronto Area reached 22,000 in September, the highest level since 2018. Vancouver is telling a similar story.",
      "The surge in inventory is shifting the balance of power toward buyers for the first time since the pandemic. Bidding wars have become rare, and price reductions are increasingly common. The average Toronto home is now sitting on market for 28 days, compared to just 11 days at the peak in early 2022.",
      "\"We're seeing a normalization, not a crash,\" cautions real estate analyst Jennifer Park. \"Prices are still well above pre-pandemic levels. But the days of multiple offers over asking on day one are behind us.\"",
      "The inventory build-up reflects several converging factors. Homeowners who delayed selling while hoping for a rate-cut-fueled rebound are capitulating. New construction completions are hitting the market. And investors, facing negative cash flow on rental properties, are looking to exit.",
      "For prospective buyers, the math is improving on the margins. While mortgage rates remain elevated, the ability to negotiate on price and include conditions in offers represents a meaningful change from the frenzied markets of 2021-2022.",
      "The spring market will be the real test. If inventory continues to climb while demand remains subdued, more significant price corrections could follow. But a decisive move lower in interest rates—which markets are not currently pricing in—could quickly reignite buyer enthusiasm."
    ],
    category: "Real Estate",
    date: "Oct 18, 2025",
    author: "David Ross",
    authorTitle: "Real Estate Correspondent",
    relatedArticles: ["n1", "n2"]
  }
];

export const FAQ_EDITIONS: FAQEdition[] = [
  {
    id: "e1",
    slug: "high-yield-savings",
    title: "The High-Yield Savings Briefing",
    description: "Everything you need to know about high-interest savings accounts in Canada, from CDIC insurance to promotional rates.",
    date: "October 2025",
    questions: [
      {
        id: "q1",
        slug: "is-my-money-safe-cdic-insurance",
        question: "Is My Money Safe In These Accounts?",
        answer: "Yes. All institutions listed here are CDIC insured members. This means your deposits are eligible for coverage up to $100,000 per category in the unlikely event of insolvency.",
        fullAnswer: [
          "Yes, your deposits at all institutions we recommend are protected by the Canada Deposit Insurance Corporation (CDIC). This federal Crown corporation insures eligible deposits up to $100,000 per depositor, per insured category, at each member institution.",
          "The coverage categories include: deposits in one name, joint deposits, deposits in an RRSP, RRIF, or TFSA, and deposits in trust. This means a single person could theoretically have up to $500,000 in coverage at one institution by using different categories.",
          "Digital banks and fintech companies often operate through partnerships with CDIC member institutions. For example, WealthSimple Cash deposits are held at Canadian Western Bank, a CDIC member. Always verify CDIC membership before depositing significant funds.",
          "In the unlikely event of a bank failure, CDIC aims to reimburse depositors within days. Since its creation in 1967, CDIC has protected depositors in 43 member institution failures, and no one has ever lost a single dollar of insured deposits."
        ],
        relatedQuestions: ["q2", "q5"],
        sources: ["CDIC Official Website", "Bank of Canada Financial Stability Reports"]
      },
      {
        id: "q2",
        slug: "are-promotional-rates-worth-it",
        question: "Are Promotional Rates Worth It?",
        answer: "Often, yes, but tread carefully. Many 'teaser' rates drop significantly after 3-5 months. We prioritize the base rate in our 'Truth Table' because stability builds long-term wealth better than chasing monthly promos.",
        fullAnswer: [
          "Promotional rates can be worth pursuing, but they require active management and a clear-eyed view of the math involved. The key question is whether the extra interest earned during the promotional period justifies the effort of moving your money.",
          "Let's do the math: A $50,000 deposit at a 6% promo rate for 5 months earns approximately $1,250 in interest. The same deposit at a 4% everyday rate earns about $833. The $417 difference is meaningful, but not life-changing.",
          "The hidden cost is attention. Promo chasers must track expiration dates, initiate transfers, and manage multiple accounts. For some, this is a fun optimization game. For others, it's a source of stress that isn't worth the marginal gain.",
          "Our recommendation: If you enjoy financial optimization, chase promos strategically. If you prefer simplicity, choose a high base-rate account and focus your energy elsewhere. Both approaches are valid—just be honest about which type of saver you are."
        ],
        relatedQuestions: ["q1", "q3"]
      },
      {
        id: "q3",
        slug: "what-does-no-monthly-fee-mean",
        question: "What Does 'No Monthly Fee' Really Mean?",
        answer: "It means no recurring maintenance charge. However, transaction fees for excessive withdrawals or e-transfers may still apply depending on the account tier you select.",
        fullAnswer: [
          "'No monthly fee' means the bank won't charge you a recurring maintenance fee just for having the account open. This is different from traditional bank accounts that might charge $4-$30 per month unless you maintain a minimum balance.",
          "However, 'no monthly fee' doesn't mean 'no fees ever.' Many accounts still charge for specific transactions: paper statements, expedited transfers, returned payments, or exceeding transaction limits. Always read the fee schedule.",
          "Some accounts that advertise as 'no fee' may have limits on free e-Transfers (e.g., first 5 per month free, then $1 each). Others may charge for things like stop payments or account research.",
          "The best truly no-fee accounts—like WealthSimple Cash and EQ Bank—have eliminated most nickel-and-dime charges. But even with these, certain services (like wire transfers) will still incur fees. The key is understanding what you're likely to use and checking those specific fee categories."
        ],
        relatedQuestions: ["q4"]
      },
      {
        id: "q4",
        slug: "can-i-use-savings-as-chequing",
        question: "Can I Use These As Chequing Accounts?",
        answer: "Some hybrid accounts (like WealthSimple Cash) blur the line, offering high interest plus payment features. However, traditional savings accounts usually limit transaction types.",
        fullAnswer: [
          "The line between savings and chequing accounts has blurred significantly in recent years. Modern hybrid accounts like WealthSimple Cash offer high interest rates alongside debit cards, bill payments, and direct deposit capabilities.",
          "Traditional savings accounts typically limit you to 1-2 withdrawals per month before charging fees or restricting access. They're designed for accumulating money, not daily transactions. Using them as chequing accounts often results in fees or frozen funds.",
          "Hybrid accounts solve this by combining the best of both worlds. You earn competitive interest on your full balance while having the flexibility to spend directly from the account. The trade-off is usually the lack of physical branches.",
          "Our recommendation for most people: Use a hybrid account as your primary spending and saving vehicle. There's no need to maintain a separate low-interest chequing account at a big bank unless you specifically need branch services like certified cheques."
        ],
        relatedQuestions: ["q3", "q5"]
      },
      {
        id: "q5",
        slug: "why-are-savings-rates-high",
        question: "Why Are Rates So High Right Now?",
        answer: "Central bank policy rates drive savings yields. As the Bank of Canada adjusts rates to manage inflation, consumer savings rates fluctuate in tandem. We are currently in a high-yield environment relative to the last decade.",
        fullAnswer: [
          "Savings account interest rates are directly tied to the Bank of Canada's overnight lending rate. When the central bank raises its policy rate to combat inflation, banks can charge more for loans—and they pass some of this increase to depositors to attract funds.",
          "From 2009 to 2022, the Bank of Canada kept rates near historic lows (0.25%-1.75%), and savings accounts paid almost nothing. The inflation surge of 2022-2023 forced aggressive rate hikes, pushing the overnight rate to 5.0% by mid-2023.",
          "Banks don't pass through 100% of rate increases to savers—they keep a spread for profit. But competition from digital banks has narrowed this spread. When EQ Bank offers 4%, big banks can't get away with offering 0.5% without losing deposits.",
          "The current high-rate environment is not guaranteed to last. If inflation falls and the Bank of Canada cuts rates, savings yields will decline. Enjoy the 4%+ rates while they last, but don't assume they're permanent. This is a historically favorable moment for cash savers."
        ],
        relatedQuestions: ["q1", "q2"],
        sources: ["Bank of Canada Policy Rate Announcements", "Statistics Canada CPI Data"]
      }
    ]
  },
  {
    id: "e2",
    slug: "mortgage-renewal",
    title: "The Mortgage Renewal Crisis",
    description: "Navigating mortgage renewals in a high-rate environment: fixed vs variable, stress tests, and rate forecasts.",
    date: "September 2025",
    questions: [
      {
        id: "q6",
        slug: "variable-or-fixed-mortgage",
        question: "Should I Go Variable or Fixed?",
        answer: "In the current inverted yield curve environment, 3-year fixed terms offer the best balance of stability and flexibility.",
        fullAnswer: [
          "The variable vs. fixed decision depends on your risk tolerance, financial stability, and view on where rates are headed. Neither option is universally 'better'—they serve different needs.",
          "Variable rates are currently higher than many fixed rates due to the inverted yield curve. This unusual situation means you're paying more for flexibility. Historically, variable rates have saved money over full mortgage terms, but this requires stomaching payment fluctuations.",
          "Fixed rates lock in your payment for the term, providing budget certainty. The 3-year fixed term currently offers the best rates, as lenders price in expected rate cuts. 5-year fixed rates are higher because they include a premium for longer certainty.",
          "Our current recommendation: For most borrowers, a 3-year fixed term balances rate savings with the option to reassess when rates have (presumably) normalized. Risk-tolerant borrowers with stable income can consider variable, betting on rate cuts."
        ],
        relatedQuestions: ["q7", "q10"]
      },
      {
        id: "q7",
        slug: "mortgage-stress-test-rate",
        question: "What is the Stress Test Rate?",
        answer: "It remains at 5.25% or the contract rate plus 2%, whichever is higher.",
        fullAnswer: [
          "The mortgage stress test requires you to qualify at the higher of either: your actual contract rate plus 2 percentage points, or the benchmark rate of 5.25% (whichever is greater).",
          "For example, if you're offered a mortgage at 5.5%, you must prove you can afford payments at 7.5% (5.5% + 2%). If your rate is 4%, you'd qualify at 6% (the contract rate plus 2%, since that exceeds 5.25%).",
          "The stress test applies to all federally regulated lenders (banks) and insured mortgages. Credit unions in some provinces may not require it, giving them a competitive advantage for borrowers who can't qualify at banks.",
          "The stress test was introduced to ensure borrowers can handle rate increases. Given recent rate volatility, this protection has proven valuable—many homeowners who qualified in 2021 are now facing the exact payment increases the test simulated."
        ],
        relatedQuestions: ["q6", "q8"]
      },
      {
        id: "q8",
        slug: "switch-lenders-at-renewal",
        question: "Can I Switch Lenders At Renewal?",
        answer: "Yes, but you will need to re-qualify under the stress test if you switch, unless you are with a credit union not regulated by OSFI.",
        fullAnswer: [
          "Switching lenders at renewal is absolutely possible and often financially beneficial—lenders compete aggressively for refinance business. However, switching triggers a new qualification process.",
          "If you switch to a federally regulated lender (any major bank), you'll need to pass the stress test again at current rates. This can be a problem if rates have risen since your original purchase, or if your income has decreased.",
          "Staying with your current lender for a 'straight renewal' typically doesn't require re-qualification. This creates an awkward dynamic where shopping around—normally good consumer behavior—is penalized.",
          "Provincial credit unions offer an escape valve. They're not subject to OSFI's stress test rules, meaning they can qualify you at the actual contract rate. If you can't pass the bank stress test but have reliable income, credit unions may be your best option."
        ],
        relatedQuestions: ["q7", "q9"]
      },
      {
        id: "q9",
        slug: "30-year-amortization-mortgages",
        question: "Are 30-Year Amortizations Back?",
        answer: "For first-time buyers on new builds, yes. For everyone else, 25 years remains the standard for insured mortgages.",
        fullAnswer: [
          "The federal government reintroduced 30-year amortizations in 2024, but only for first-time homebuyers purchasing newly constructed homes. This policy aims to support both housing affordability and new construction.",
          "For everyone else—repeat buyers, resale purchasers, or those refinancing—25 years remains the maximum amortization for insured mortgages (those with less than 20% down payment).",
          "Uninsured mortgages (20%+ down payment) can often access 30-year amortizations at any time, though lenders may charge a premium. The monthly payment savings are meaningful: on a $500,000 mortgage at 5%, extending from 25 to 30 years reduces payments by about $250/month.",
          "The trade-off is significant. A 30-year amortization means you'll pay substantially more interest over the life of the mortgage and build equity more slowly. Use the lower payments as breathing room, not as license to buy more house than you can afford."
        ],
        relatedQuestions: ["q8", "q10"]
      },
      {
        id: "q10",
        slug: "interest-rates-forecast-2026",
        question: "Will Rates Drop in 2026?",
        answer: "Futures markets are pricing in a 1.5% cut over the next 18 months, but don't bet the house on it.",
        fullAnswer: [
          "Interest rate futures and overnight index swaps—financial instruments that reflect market expectations—are currently pricing in approximately 1.5 percentage points of Bank of Canada rate cuts between now and mid-2026.",
          "This implies the overnight rate falling from 4.5% to around 3.0%, which would translate to mortgage rates declining by a similar amount. Variable rate mortgages would see immediate relief; fixed rates would adjust as lenders reprice.",
          "However, market expectations have been wrong before. In early 2023, markets were pricing in rate cuts that never materialized. The Bank of Canada has repeatedly emphasized that decisions are data-dependent and not pre-committed.",
          "Our view: Rates probably will decline if inflation continues to normalize, but the timing and magnitude are uncertain. Don't make major financial decisions (like taking a variable rate) purely based on rate cut expectations. Hope for cuts, but plan for the possibility that rates stay elevated longer than expected."
        ],
        relatedQuestions: ["q6", "q7"],
        sources: ["Bank of Canada Monetary Policy Reports", "CME FedWatch Tool"]
      }
    ]
  },
  {
    id: "e3",
    slug: "tfsa-rrsp-primer",
    title: "The TFSA & RRSP Primer",
    description: "Demystifying Canada's registered accounts: contribution limits, tax implications, and optimal strategies.",
    date: "August 2025",
    questions: [
      {
        id: "q11",
        slug: "tfsa-or-rrsp-first",
        question: "TFSA or RRSP First?",
        answer: "If you earn less than $50k, TFSA. If you earn more than $100k, RRSP. In between? It depends on your pension situation.",
        fullAnswer: [
          "The TFSA vs. RRSP decision comes down to tax rates: when is your marginal tax rate higher—now or in retirement? RRSP contributions reduce taxes now but create taxable income later. TFSA contributions are after-tax but grow forever tax-free.",
          "If you earn under $50,000, you're in a low tax bracket. RRSP deductions save you relatively little (20-25%), and you might be in a similar or higher bracket in retirement. TFSA is likely better.",
          "If you earn over $100,000, you're in a high bracket (40%+). RRSP deductions are valuable now, and you'll likely withdraw in a lower bracket during retirement. RRSP is typically better.",
          "The $50k-$100k range is genuinely ambiguous. Key factors: Do you have a pension that will generate retirement income? (If yes, lean TFSA—you'll have taxable retirement income anyway.) Do you expect your income to rise significantly? (If yes, lean TFSA now, RRSP later when deductions are worth more.)"
        ],
        relatedQuestions: ["q12", "q15"]
      },
      {
        id: "q12",
        slug: "tfsa-rrsp-contribution-limits-2025",
        question: "What is the Contribution Limit?",
        answer: "For 2025, the TFSA limit is $7,000. RRSP is 18% of earned income up to $32,490.",
        fullAnswer: [
          "The 2025 TFSA contribution limit is $7,000. If you've never contributed and were 18+ in 2009 (when TFSAs launched), your cumulative room is $95,000. Unused room carries forward indefinitely.",
          "The 2025 RRSP contribution limit is 18% of your 2024 earned income, to a maximum of $32,490. Unused room carries forward. Your exact limit is on your CRA Notice of Assessment or My Account.",
          "TFSA room is simple: everyone eligible gets the same annual amount regardless of income. RRSP room depends on your earnings—higher income means more room (up to the cap). Pension adjustments reduce RRSP room for those with workplace pensions.",
          "Both accounts accumulate room even if you don't contribute. Many Canadians have significant unused RRSP and TFSA room they don't realize they have. Check your CRA account to see your available contribution space."
        ],
        relatedQuestions: ["q11", "q15"]
      },
      {
        id: "q13",
        slug: "day-trading-tfsa-cra",
        question: "Can I Day Trade in My TFSA?",
        answer: "Technically no. The CRA audits accounts with excessive frequency of trades. Stick to long-term holds.",
        fullAnswer: [
          "The CRA's position is that TFSAs are for saving and investing, not operating a business. If your trading activity resembles a business—frequent trades, short holding periods, significant time spent—the CRA may reclassify your TFSA gains as business income, which is fully taxable.",
          "There's no bright-line rule for 'too much' trading. The CRA considers factors including: trade frequency, holding periods, your knowledge and experience, time devoted to trading, and whether you've advertised or borrowed to invest.",
          "Several high-profile cases have resulted in massive tax bills. One trader grew a TFSA to over $600,000 through frequent penny stock trades; the CRA successfully argued the gains were taxable business income.",
          "The safest approach: Use your TFSA for buy-and-hold investing. ETFs, dividend stocks, and bonds held for months or years are clearly within the spirit of the program. Save active trading for taxable accounts where the tax treatment is unambiguous."
        ],
        relatedQuestions: ["q14", "q15"]
      },
      {
        id: "q14",
        slug: "us-dividends-tfsa-withholding-tax",
        question: "Do US Dividends Have Tax in TFSA?",
        answer: "Yes, a 15% withholding tax applies. Use your RRSP for US dividend stocks to avoid this.",
        fullAnswer: [
          "US dividends paid to Canadian TFSAs are subject to a 15% withholding tax that cannot be recovered. This is because the Canada-US tax treaty doesn't recognize TFSAs as retirement accounts deserving of exemption.",
          "RRSPs, by contrast, are recognized under the treaty. US dividends paid to an RRSP are not subject to withholding tax. This makes RRSPs the optimal account for US dividend-paying stocks.",
          "The practical impact: A US stock paying a 3% dividend yield effectively pays 2.55% in a TFSA (after the 15% withholding). Over decades of compounding, this drag is meaningful.",
          "Asset location strategy: Hold US dividend stocks in your RRSP, Canadian stocks in your TFSA, and bonds/interest-bearing investments in registered accounts (since interest is taxed at full rates in non-registered accounts). This optimization can add meaningful value over time."
        ],
        relatedQuestions: ["q11", "q13"]
      },
      {
        id: "q15",
        slug: "rrsp-tfsa-over-contribution-penalty",
        question: "What Happens If I Over-Contribute?",
        answer: "The CRA charges 1% per month on the excess amount. Fix it immediately.",
        fullAnswer: [
          "Over-contributing to your TFSA or RRSP triggers a penalty tax of 1% per month on the excess amount. This continues until you either withdraw the excess or gain new contribution room.",
          "For TFSAs, there's no grace amount—any dollar over your limit is immediately subject to the penalty. For RRSPs, you have a $2,000 lifetime over-contribution buffer before penalties kick in.",
          "The most common over-contribution mistake: withdrawing from a TFSA and re-contributing in the same year. TFSA withdrawal room doesn't return until the following January 1. If you withdraw $10,000 in March and re-contribute in November, you've over-contributed by $10,000.",
          "If you've over-contributed, fix it immediately by withdrawing the excess. File form RC243 (TFSA) or T1-OVP (RRSP) with the CRA. In some cases of genuine errors, the CRA may waive penalties—but don't count on it. Prevention is better than remediation."
        ],
        relatedQuestions: ["q11", "q12"],
        sources: ["CRA TFSA Guide", "CRA RRSP Guide"]
      }
    ]
  }
];