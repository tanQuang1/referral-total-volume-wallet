import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/home-pageview";
import { RewardHistoryPageView } from "./pages/reward-history/rewarrd-history-pageview";
import i18n from "./i18n/i18n";
import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import LangLayout from "./components/layout/langLayout";

const localI18n = i18n.cloneInstance();

export default function App() {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <I18nextProvider i18n={localI18n}>
        <Routes>
          <Route index element={<Navigate to="en" replace />} />

          <Route path=":lng" element={<LangLayout />}>
            <Route path=":address" element={<HomePage />} />
            <Route path="history" element={<RewardHistoryPageView />} />
          </Route>

          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </I18nextProvider>
    </Suspense>
  );
}
