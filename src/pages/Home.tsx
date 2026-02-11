import React from 'react';
import { Link } from 'react-router-dom';
import { sites } from '../data/sites';
import { ArrowRight, Landmark, Box } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <img
            src="/famous-arena-sunset-nimes.jpg"
            alt="Historical Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight leading-tight">
            History in Your Hands
          </h1>
          <p className="text-xl text-stone-300 mb-10 font-light max-w-2xl mx-auto">
            Experience the world's architectural wonders in high-performance WebAR.
            No apps required. Just history, brought to life in your space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#sites" className="px-8 py-4 bg-amber-700 hover:bg-amber-600 text-white font-semibold rounded-full transition-all shadow-xl hover:shadow-amber-900/20 flex items-center gap-2">
              Explore Monuments <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section id="sites" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-grow bg-stone-200"></div>
          <h2 className="text-3xl font-serif text-stone-800 px-4">World Heritage Sites</h2>
          <div className="h-px flex-grow bg-stone-200"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sites.map((site) => (
            <div
              key={site.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={site.thumbnailUrl}
                  alt={site.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-amber-800 border border-amber-100 flex items-center gap-1">
                  <Landmark className="w-3 h-3" /> AR Ready
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif text-stone-800 mb-2">{site.name}</h3>
                <p className="text-stone-500 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                  {site.description}
                </p>
                <Link
                  to={`/site/${site.id}`}
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-amber-700 text-amber-700 font-bold rounded-lg hover:bg-amber-700 hover:text-white transition-all duration-300 group/btn"
                >
                  Explore in AR
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AR Guide Section */}
      <section id="ar-guide" className="bg-stone-100 pt-20 pb-10 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">How to Experience AR</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">Follow these simple steps to bring historical monuments into your personal space.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-700 group-hover:text-white transition-all duration-300">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="font-bold text-stone-800 mb-2">Select a Site</h4>
              <p className="text-sm text-stone-500">Choose any monument from our collection and click "Explore in AR".</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-700 group-hover:text-white transition-all duration-300">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="font-bold text-stone-800 mb-2">Mobile Device</h4>
              <p className="text-sm text-stone-500">Open the link on your smartphone (Android or iOS) for the best experience.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-700 group-hover:text-white transition-all duration-300">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="font-bold text-stone-800 mb-2">Find Space</h4>
              <p className="text-sm text-stone-500">Point your camera at a flat surface like a floor or table and move it slowly.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-700 group-hover:text-white transition-all duration-300">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h4 className="font-bold text-stone-800 mb-2">Interact</h4>
              <p className="text-sm text-stone-500">The model will appear! You can pinch to zoom or drag to rotate and move it.</p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-amber-50 rounded-3xl border border-amber-100 flex flex-col md:flex-row items-center gap-6">
            <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center text-white shrink-0">
              <Box className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-bold text-amber-900 mb-1">System Requirement</h5>
              <p className="text-sm text-amber-800/80">
                Works best on Chrome (Android) and Safari (iOS). Ensure your device supports <strong>Google Play Services for AR</strong> or <strong>Apple ARKit</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
