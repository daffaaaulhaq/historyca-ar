import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Map, History } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./Switch.css";
const Layout: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Fungsi untuk mengubah bahasa
  const toggleLanguage = () => {
    const newLang = i18n.language === "id" ? "en" : "id";
    i18n.changeLanguage(newLang);
  };
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-stone-900">
      <header className="bg-white/80 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <History className="w-8 h-8 text-amber-700 group-hover:rotate-12 transition-transform" />
            <span className="text-xl font-bold tracking-tight text-stone-800 uppercase">
              Historica<span className="text-amber-700">AR</span>
            </span>
          </Link>
          <div className="flex gap-6">
            <Link
              to="/"
              className="text-sm font-medium hover:text-amber-700 transition-colors"
            >
              {t("nav_home")}
            </Link>
            <a
              href="#"
              className="text-sm font-medium hover:text-amber-700 transition-colors"
            >
              {t("nav_maps")}
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-amber-700 transition-colors"
            >
              {t("nav_about")}
            </a>
          </div>
          <div className="nav-right">
            {/* Label di luar dihapus, karena teks sudah ada di dalam switch */}

            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleLanguage}
                checked={i18n.language === "en"}
              />
              <span className="slider"></span>
            </label>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                HistoricaAR
              </h3>
              <p className="text-sm leading-relaxed">{t("footer_desc")}</p>
            </div>
            <div>
              <h4 className="text-white text-md font-semibold mb-4">
                {t("footer_links")}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/"
                    className="hover:text-amber-500 transition-colors"
                  >
                    {t("nav_home")}
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    {t("footer_historical_sites")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    {t("footer_ar_guide")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-md font-semibold mb-4">
                {t("footer_contact")}
              </h4>
              <p className="text-sm">Email: info@historica-ar.com</p>
              <div className="flex gap-4 mt-4">
                <Map className="w-5 h-5 hover:text-amber-500 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 text-center text-xs uppercase tracking-widest">
            © 2026 HistoricaAR. {t("footer_copyright_slogan")}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
