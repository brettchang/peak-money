import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { NewsPage } from './pages/NewsPage';
import { ArticlePage } from './pages/ArticlePage';
import { ComparisonsIndexPage } from './pages/ComparisonsIndexPage';
import { SavingsComparisonsPage } from './pages/SavingsComparisonsPage';
import { CreditCardsComparisonsPage } from './pages/CreditCardsComparisonsPage';
import { FAQPage } from './pages/FAQPage';
import { FAQQuestionPage } from './pages/FAQQuestionPage';
import { PicksIndexPage } from './pages/PicksIndexPage';
import { PicksSavingsPage } from './pages/PicksSavingsPage';
import { PicksCreditCardsPage } from './pages/PicksCreditCardsPage';
import { SavingsReviewPage } from './pages/SavingsReviewPage';
import { CreditCardReviewPage } from './pages/CreditCardReviewPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/:slug" element={<ArticlePage />} />
          <Route path="comparisons" element={<ComparisonsIndexPage />} />
          <Route path="comparisons/savings" element={<SavingsComparisonsPage />} />
          <Route path="comparisons/credit-cards" element={<CreditCardsComparisonsPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="faq/:editionSlug/:questionSlug" element={<FAQQuestionPage />} />
          <Route path="picks" element={<PicksIndexPage />} />
          <Route path="picks/savings" element={<PicksSavingsPage />} />
          <Route path="picks/credit-cards" element={<PicksCreditCardsPage />} />
          <Route path="reviews/savings/:slug" element={<SavingsReviewPage />} />
          <Route path="reviews/credit-cards/:slug" element={<CreditCardReviewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
