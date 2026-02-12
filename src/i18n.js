import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enDocs from "./locales/en.json";
import idDocs from "./locales/id.json";

const resources = {
  en: {
    translation: enDocs,
  },
  id: {
    translation: idDocs,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Bahasa default (bisa diubah ke "en")
  interpolation: {
    escapeValue: false, // React sudah aman dari XSS
  },
});

export default i18n;
