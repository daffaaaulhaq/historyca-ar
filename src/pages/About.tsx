import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Users, Code, Globe, Sparkles, Box, Server, LayoutTemplate } from 'lucide-react';

const developers = [
  "Salsa Syifa Sabrina",
  "Mochamad Rifqy Agustino",
  "Daffa Ulhaq",
  "Albert Cendra Hernawan",
  "Sahl Hafidz Irkhami"
];

const techStack = [
  { name: "React 19", icon: <Code className="w-5 h-5" /> },
  { name: "Vite", icon: <Sparkles className="w-5 h-5" /> },
  { name: "TypeScript", icon: <Code className="w-5 h-5" /> },
  { name: "Tailwind CSS", icon: <LayoutTemplate className="w-5 h-5" /> },
  { name: "Google Model Viewer", icon: <Box className="w-5 h-5" /> },
];

const credits = [
  { model: "Borobudur Temple", source: "Sketchfab", author: "Diverse Authors" },
  { model: "Al-Khazneh (Petra)", source: "Sketchfab", author: "m_d" },
  { model: "Angkor Wat", source: "Sketchfab", author: "Global Digital Heritage" },
  { model: "Leaning Tower of Pisa", source: "Sketchfab", author: "Andrea Spognetta" },
  { model: "Arc de Triomphe", source: "Sketchfab", author: "Bastien Genicot" },
  { model: "Great Wall of China", source: "Sketchfab", author: "noe-3d.at" },
  { model: "Pyramids of Giza", source: "Sketchfab", author: "Global Digital Heritage" },
  { model: "Colosseum & St. Peter's", source: "Sketchfab", author: "Diverse Authors" },
  { model: "Eiffel Tower", source: "Sketchfab", author: "Amilcar Parra" },
];

const About: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      {/* Header Section */}
      <section className="relative bg-stone-900 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L100 0 L100 100 Z" fill="#78350f" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Preserving History, Digitally.</h1>
          <p className="text-xl text-stone-300 font-light leading-relaxed max-w-2xl mx-auto">
            HistoricaAR bridges the gap between ancient heritage and modern innovation,
            bringing the world's greatest monuments directly into your hands.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">

        {/* Tech Stack & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-stone-100">
            <h3 className="font-serif text-2xl text-stone-800 mb-4 flex items-center gap-2">
              <Globe className="w-6 h-6 text-amber-700" /> Project Vision
            </h3>
            <p className="text-stone-600 leading-relaxed mb-6">
              Our mission is to democratize access to historical education. By leveraging Web Augmented Reality (WebAR),
              we eliminate the need for expensive hardware or heavy app downloads, allowing anyone with a smartphone
              to explore and appreciate global heritage sites in immersive 3D.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full">Education</span>
              <span className="px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full">Preservation</span>
              <span className="px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full">Accessibility</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-stone-100">
            <h3 className="font-serif text-2xl text-stone-800 mb-6 flex items-center gap-2">
              <Server className="w-6 h-6 text-amber-700" /> Technology Stack
            </h3>
            <div className="space-y-4">
              {techStack.map((tech, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 hover:bg-stone-50 rounded-lg transition-colors border-b border-stone-100 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="text-stone-400">{tech.icon}</div>
                    <span className="font-medium text-stone-700">{tech.name}</span>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div id="team" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-stone-800 mb-4">Meet the Team</h2>
            <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full mb-6"></div>
            <p className="text-stone-500 max-w-2xl mx-auto">
              The creative minds and engineers behind HistoricaAR.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {developers.map((name, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-stone-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center"
              >
                <div className="w-20 h-20 bg-stone-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-amber-700 transition-colors duration-300">
                  <Users className="w-8 h-8 text-stone-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-stone-800 text-sm mb-1">{name}</h3>
                <span className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-[10px] font-bold uppercase tracking-wider rounded-full mt-2">
                  Developer
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Credits Section */}
        <div className="bg-stone-100 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-serif text-stone-800 mb-2">3D Model Credits</h2>
            <p className="text-stone-500 text-sm">We gratefully acknowledge the creators of the 3D models used in this project.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {credits.map((credit, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-stone-200 flex items-center justify-between text-sm">
                <span className="font-bold text-stone-700 truncate mr-2">{credit.model}</span>
                <span className="text-stone-400 text-xs italic">by {credit.author}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-xs text-stone-400">
              All 3D models are used under Creative Commons Attribution (CC-BY) licenses from their respective sources.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
