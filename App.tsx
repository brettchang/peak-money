import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { NewsPage } from './pages/NewsPage';
import { ArticlePage } from './pages/ArticlePage';
import { ComparisonsIndexPage } from './pages/ComparisonsIndexPage';
import { SavingsComparisonsPage } from './pages/SavingsComparisonsPage';
import { CreditCardsComparisonsPage } from './pages/CreditCardsComparisonsPage';
import { FAQPage } from './pages/FAQPage';
import { FAQQuestionPage } from './pages/FAQQuestionPage';
import { AnswersIndexPage } from './pages/AnswersIndexPage';
import { AnswersCategoryPage } from './pages/AnswersCategoryPage';
import { AnswerPage } from './pages/AnswerPage';
import { SavingsReviewPage } from './pages/SavingsReviewPage';
import { CreditCardReviewPage } from './pages/CreditCardReviewPage';
import { StudioPage } from './pages/StudioPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Sanity Studio - outside Layout */}
        <Route path="/studio/*" element={<StudioPage />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/:slug" element={<ArticlePage />} />
          <Route path="comparisons" element={<ComparisonsIndexPage />} />
          <Route path="comparisons/savings" element={<SavingsComparisonsPage />} />
          <Route path="comparisons/credit-cards" element={<CreditCardsComparisonsPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="faq/:editionSlug/:questionSlug" element={<FAQQuestionPage />} />
          <Route path="answers" element={<AnswersIndexPage />} />
          <Route path="answers/:categorySlug" element={<AnswersCategoryPage />} />
          <Route path="answers/:categorySlug/:answerSlug" element={<AnswerPage />} />
          <Route path="reviews/savings/:slug" element={<SavingsReviewPage />} />
          <Route path="reviews/credit-cards/:slug" element={<CreditCardReviewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
