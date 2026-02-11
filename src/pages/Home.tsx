import React from 'react';
import { Link } from 'react-router-dom';
import { sites } from '../data/sites';
import { ArrowRight, Landmark } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=2000" 
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
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-stone-800 text-stone-800 font-bold rounded-lg hover:bg-stone-800 hover:text-white transition-all duration-300 group/btn"
                >
                  Explore in AR
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
