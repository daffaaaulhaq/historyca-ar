import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Resource adalah tempat kamu menyimpan terjemahan
const resources = {
  en: {
    translation: {
      nav_home: "Home",
      nav_maps: "Maps",
      nav_guide: "AR Guide",
      nav_about: "About",

      // Bagian Footer
      footer_desc:
        "Bringing the world's most iconic historical sites to your living room using cutting-edge WebAR technology.",
      footer_quick_links: "Quick Links",
      footer_historical_sites: "Historical Sites",
      footer_ar_guide: "AR Guide",
      footer_about: "About Us",
      footer_copyright_slogan: "Preserving the Past, Shaping the Future.",
    },
  },
  id: {
    translation: {
      nav_home: "Beranda",
      nav_maps: "Peta",
      nav_guide: "Panduan AR",
      nav_about: "Tentang",

      footer_desc:
        "Menghadirkan situs bersejarah paling ikonik di dunia ke ruang tamu Anda menggunakan teknologi WebAR mutakhir.",
      footer_quick_links: "Tautan Cepat",
      footer_historical_sites: "Situs Bersejarah",
      footer_ar_guide: "Panduan AR",
      footer_about: "Tentang Kami",
      footer_copyright_slogan: "Melestarikan Masa Lalu, Membentuk Masa Depan.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "id", // Bahasa default (bisa diubah ke "en")
  interpolation: {
    escapeValue: false, // React sudah aman dari XSS
  },
});

export default i18n;
