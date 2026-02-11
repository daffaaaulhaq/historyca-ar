import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { History } from 'lucide-react';

const Layout: React.FC = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper untuk scroll ke section jika di home, atau pindah ke home dulu
  const scrollToGuide = () => {
    // Jika kita sudah di home ('/'), biarkan default behavior anchor tag bekerja
    if (location.pathname === '/') return;

    // Jika tidak, kita tidak preventDefault (biarkan pindah ke /#ar-guide)
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-stone-900">
      <header className="bg-white/80 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" onClick={scrollToTop} className="flex items-center gap-2 group">
            <History className="w-8 h-8 text-amber-700 group-hover:rotate-12 transition-transform" />
            <span className="text-xl font-bold tracking-tight text-stone-800 uppercase">
              Historica<span className="text-amber-700">AR</span>
            </span>
          </Link>
          <div className="flex gap-6">
            <Link to="/" onClick={scrollToTop} className="text-sm font-medium hover:text-amber-700 transition-colors">Home</Link>
            <a
              href="/#ar-guide"
              onClick={scrollToGuide}
              className="text-sm font-medium hover:text-amber-700 transition-colors"
            >
              AR Guide
            </a>
            <Link to="/about" onClick={scrollToTop} className="text-sm font-medium hover:text-amber-700 transition-colors">About</Link>
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
              <h3 className="text-white text-lg font-semibold mb-4">HistoricaAR</h3>
              <p className="text-sm leading-relaxed">
                Bringing the world's most iconic historical sites to your living room using cutting-edge WebAR technology.
              </p>
            </div>
            <div>
              <h4 className="text-white text-md font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" onClick={scrollToTop} className="hover:text-amber-500 transition-colors">Home</Link></li>
                <li><a href="/#sites" className="hover:text-amber-500 transition-colors">Historical Sites</a></li>
                <li><a href="/#ar-guide" className="hover:text-amber-500 transition-colors">AR Guide</a></li>
                <li><Link to="/about" onClick={scrollToTop} className="hover:text-amber-500 transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-md font-semibold mb-4">Connect</h4>
              <Link to="/about#team" className="text-sm hover:text-amber-500 transition-colors">Meet the Team →</Link>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 text-center text-xs uppercase tracking-widest">
            © 2026 HistoricaAR. Preserving the Past, Shaping the Future.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
