import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    load: "languageOnly",
    detection: {
      order: ["path", "querystring", "localStorage", "navigator", "htmlTag"],

      lookupFromPathIndex: 1,
      caches: ["localStorage"],
    },
    backend: {
      loadPath: "/trading-event/locales/{{lng}}/translation.json",
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
