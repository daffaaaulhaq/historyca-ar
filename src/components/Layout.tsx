import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { History } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./Switch.css";

const Layout: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Tutup menu saat pindah halaman
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Kunci scroll saat menu terbuka
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToGuide = () => {
    if (location.pathname === "/") return;
  };

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "id" ? "en" : "id";
    i18n.changeLanguage(newLang);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-stone-900">
      <header className="bg-white/80 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
          {/* Logo */}
          <Link
            to="/"
            onClick={scrollToTop}
            className="flex items-center gap-2 group"
          >
            <History className="w-8 h-8 text-amber-700 group-hover:rotate-12 transition-transform" />
            <span className="text-xl font-bold tracking-tight text-stone-800 uppercase">
              Historica<span className="text-amber-700">AR</span>
            </span>
          </Link>

          {/* Desktop Nav Links - centered absolutely */}
          <div className="hidden md:flex gap-6 items-center absolute left-1/2 -translate-x-1/2">
            <Link
              to="/"
              onClick={scrollToTop}
              className="text-sm font-medium hover:text-amber-700 transition-colors"
            >
              {t("nav_home")}
            </Link>
            <a
              href="/#ar-guide"
              onClick={scrollToGuide}
              className="text-sm font-medium hover:text-amber-700 transition-colors"
            >
              {t("nav_guide")}
            </a>
            <Link
              to="/about"
              onClick={scrollToTop}
              className="text-sm font-medium hover:text-amber-700 transition-colors"
            >
              {t("nav_about")}
            </Link>
          </div>

          {/* Right side: Switch + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Language Switch - tetap terlihat */}
            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleLanguage}
                checked={i18n.language === "en"}
              />
              <span className="slider"></span>
            </label>

            {/* Hamburger Button - hanya di mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-stone-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col gap-[5px]">
                <span
                  className={`block h-[2px] bg-stone-700 rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""
                    }`}
                />
                <span
                  className={`block h-[2px] bg-stone-700 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""
                    }`}
                />
                <span
                  className={`block h-[2px] bg-stone-700 rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                    }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Slide-in Panel */}
      <div
        className={`fixed top-16 right-0 w-72 h-[calc(100vh-4rem)] bg-white z-40 md:hidden shadow-2xl transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Nav Links */}
          <div className="flex-1 py-8 px-6">
            <div className="space-y-1">
              <Link
                to="/"
                onClick={handleNavClick}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${location.pathname === "/"
                  ? "bg-amber-50 text-amber-800"
                  : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                  }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                {t("nav_home")}
              </Link>
              <a
                href="/#ar-guide"
                onClick={() => {
                  scrollToGuide();
                  setMenuOpen(false);
                }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-all duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                {t("nav_guide")}
              </a>
              <Link
                to="/about"
                onClick={handleNavClick}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${location.pathname === "/about"
                  ? "bg-amber-50 text-amber-800"
                  : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                  }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                {t("nav_about")}
              </Link>
            </div>
          </div>

          {/* Bottom brand */}
          <div className="px-6 py-6 border-t border-stone-100">
            <p className="text-[11px] text-stone-400 uppercase tracking-widest">
              © 2026 HistoricaAR
            </p>
          </div>
        </div>
      </div>

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
                {t("footer_quick_links")}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/"
                    onClick={scrollToTop}
                    className="hover:text-amber-500 transition-colors"
                  >
                    {t("nav_home")}
                  </Link>
                </li>
                <li>
                  <a
                    href="/#sites"
                    className="hover:text-amber-500 transition-colors"
                  >
                    {t("footer_historical_sites")}
                  </a>
                </li>
                <li>
                  <a
                    href="/#ar-guide"
                    className="hover:text-amber-500 transition-colors"
                  >
                    {t("footer_ar_guide")}
                  </a>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={scrollToTop}
                    className="hover:text-amber-500 transition-colors"
                  >
                    {t("footer_about")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-md font-semibold mb-4">{t("footer_connect")}</h4>
              <Link
                to="/about#team"
                className="text-sm hover:text-amber-500 transition-colors"
              >
                {t("footer_meet_team")}
              </Link>
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
