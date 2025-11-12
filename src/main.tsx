import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";
import { SwrConfig } from "./utils/swr-fetcher.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SWRConfig value={{ ...SwrConfig }}>
      <BrowserRouter basename="/trading-event">
        <App />
      </BrowserRouter>
    </SWRConfig>
  </StrictMode>
);
