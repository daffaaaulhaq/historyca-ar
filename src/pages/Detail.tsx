import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { sites } from '../data/sites';
import { ArrowLeft, Box, Maximize2, MapPin, Info } from 'lucide-react';
import '@google/model-viewer';

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const site = sites.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!site) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Site Not Found</h2>
          <Link to="/" className="text-amber-700 hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link to="/" className="inline-flex items-center text-stone-500 hover:text-stone-800 transition-colors mb-8 group">
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Collection
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* AR Viewer Section */}
        <div className="relative aspect-square lg:aspect-[4/5] bg-stone-200 rounded-3xl overflow-hidden shadow-2xl border border-stone-100 group">
          <model-viewer
            src={site.modelUrl}
            poster={site.posterUrl}
            alt={`A 3D model of ${site.name}`}
            ar
            ar-modes="scene-viewer webxr quick-look"
            camera-controls
            auto-rotate
            shadow-intensity="1"
            exposure="1"
            touch-action="pan-y"
            style={{ width: '100%', height: '100%', backgroundColor: '#f5f5f4' }}
          >
            <div slot="poster" className="absolute inset-0 flex items-center justify-center">
              <img src={site.thumbnailUrl} alt={site.name} className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-stone-900/20 flex items-center justify-center">
                <div className="px-6 py-3 bg-white/90 backdrop-blur rounded-full font-bold shadow-lg flex items-center gap-2">
                   <div className="w-4 h-4 border-2 border-amber-700 border-t-transparent rounded-full animate-spin"></div>
                   Loading 3D Experience...
                </div>
              </div>
            </div>

            <button
              slot="ar-button"
              className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-bold shadow-2xl flex items-center gap-2 transition-all active:scale-95"
            >
              <Maximize2 className="w-5 h-5" />
              VIEW IN YOUR SPACE
            </button>

            <div className="absolute top-6 right-6">
               <div className="bg-white/50 backdrop-blur-md p-3 rounded-2xl border border-white/20">
                  <Box className="w-6 h-6 text-stone-700" />
               </div>
            </div>
          </model-viewer>
        </div>

        {/* Content Section */}
        <div className="flex flex-col space-y-8">
          <div>
            <div className="flex items-center gap-2 text-amber-700 font-bold tracking-widest text-xs uppercase mb-3">
              <MapPin className="w-3 h-3" /> {site.location}
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6">{site.name}</h1>
          </div>

          <div className="space-y-6">
            <div className="bg-white/60 backdrop-blur-xl border border-stone-200 p-8 rounded-3xl shadow-sm">
              <div className="flex items-center gap-2 text-stone-800 font-bold mb-4">
                <Info className="w-5 h-5 text-amber-700" />
                <span>Historical Significance</span>
              </div>
              <p className="text-stone-600 leading-relaxed text-lg italic">
                "{site.description}"
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="p-6 bg-stone-100 rounded-2xl">
                  <span className="block text-xs uppercase text-stone-400 font-bold mb-1">Era</span>
                  <span className="text-stone-800 font-serif text-xl">Historical</span>
               </div>
               <div className="p-6 bg-stone-100 rounded-2xl">
                  <span className="block text-xs uppercase text-stone-400 font-bold mb-1">Status</span>
                  <span className="text-stone-800 font-serif text-xl">World Heritage</span>
               </div>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-200">
             <h4 className="font-bold text-stone-900 mb-4 uppercase text-sm tracking-widest">Controls</h4>
             <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-stone-100 text-stone-600 text-xs rounded-full border border-stone-200">Rotate (1 Finger)</span>
                <span className="px-4 py-2 bg-stone-100 text-stone-600 text-xs rounded-full border border-stone-200">Zoom (Pinch)</span>
                <span className="px-4 py-2 bg-stone-100 text-stone-600 text-xs rounded-full border border-stone-200">AR (Click Button)</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
