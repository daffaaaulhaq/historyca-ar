import type { Site } from '../types';

export const sites: Site[] = [
  {
    id: 'borobudur',
    name: 'Borobudur Temple',
    description: 'Borobudur is a 9th-century Mahayana Buddhist temple in Magelang Regency, Central Java, Indonesia. It is the world\'s largest Buddhist temple and a UNESCO World Heritage Site, decorated with 2,672 relief panels and 504 Buddha statues.',
    location: 'Central Java, Indonesia',
    coordinates: { lat: -7.6079, lng: 110.2038 },
    modelUrl: '/models/borobudur.glb',
    posterUrl: '/posters/borobudur.webp',
    thumbnailUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'petra',
    name: 'Al-Khazneh (Petra)',
    description: 'Al-Khazneh is one of the most elaborate temples in Petra, a city of the Nabataean Kingdom inhabited by the Arabs in ancient times. As with most of the other buildings in this ancient desert city, including the Monastery, this structure was carved out of a sandstone rock face.',
    location: 'Petra, Jordan',
    coordinates: { lat: 30.3285, lng: 35.4444 },
    modelUrl: '/models/al-khazneh_-_petra_jordan-v4.glb',
    posterUrl: '/posters/petra.webp',
    thumbnailUrl: 'https://www.historyhit.com/app/uploads/bis-images/5160776/Petra-788x537.jpg'
  },
  {
    id: 'great-wall',
    name: 'Great Wall of China',
    description: 'The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups. It is the longest man-made structure in the world.',
    location: 'Northern China',
    coordinates: { lat: 40.4319, lng: 116.5704 },
    modelUrl: '/models/14th_century_great_wall.glb',
    posterUrl: '/posters/great_wall.webp',
    thumbnailUrl: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pyramids',
    name: 'Pyramids of Giza',
    description: 'The Great Pyramid of Giza is the largest Egyptian pyramid and the tomb of Fourth Dynasty pharaoh Khufu. Built in the early 26th century BC, it is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact.',
    location: 'Giza, Egypt',
    coordinates: { lat: 29.9792, lng: 31.1342 },
    modelUrl: '/models/pyramid_of_menkaure_giza_pyramid_complex_egypt.glb',
    posterUrl: '/posters/pyramids.webp',
    thumbnailUrl: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'angkor-wat',
    name: 'Angkor Wat',
    description: 'Angkor Wat is a temple complex in Cambodia and is the largest religious monument in the world by land area. Originally constructed as a Hindu temple dedicated to the god Vishnu for the Khmer Empire, it was gradually transformed into a Buddhist temple towards the end of the 12th century.',
    location: 'Siem Reap, Cambodia',
    coordinates: { lat: 13.4125, lng: 103.8670 },
    modelUrl: '/models/angkor_wat.glb',
    posterUrl: '/posters/angkor_wat.webp',
    thumbnailUrl: 'https://agathatour.com/wp-content/uploads/2023/08/Angkor-Wat-temple-complex-Camb.webp'
  },
  {
    id: 'pisa-tower',
    name: 'Leaning Tower of Pisa',
    description: 'The Leaning Tower of Pisa is the campanile, or freestanding bell tower, of the cathedral of the Italian city of Pisa, known worldwide for its nearly four-degree lean, the result of an unstable foundation.',
    location: 'Pisa, Italy',
    coordinates: { lat: 43.7230, lng: 10.3966 },
    modelUrl: '/models/leaning_tower_of_pisa.glb',
    posterUrl: '/posters/pisa_tower.webp',
    thumbnailUrl: 'https://images.visititaly.eu/uploads/articoli/evidenza/2024172219-24-ore-a-pisa-min.jpg'
  },
  {
    id: 'arc-de-triomphe',
    name: 'Arc de Triomphe',
    description: 'The Arc de Triomphe de l\'Étoile is one of the most famous monuments in Paris, France, standing at the western end of the Champs-Élysées. It honours those who fought and died for France in the French Revolutionary and Napoleonic Wars.',
    location: 'Paris, France',
    coordinates: { lat: 48.8738, lng: 2.2950 },
    modelUrl: '/models/arc_de_triomphe.glb',
    posterUrl: '/posters/arc_de_triomphe.webp',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Arc_de_Triomphe%2C_Paris_21_October_2010.jpg/1200px-Arc_de_Triomphe%2C_Paris_21_October_2010.jpg'
  },
  {
    id: 'eiffel-tower',
    name: 'Eiffel Tower',
    description: 'The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower from 1887 to 1889.',
    location: 'Paris, France',
    coordinates: { lat: 48.8584, lng: 2.2945 },
    modelUrl: '/models/eiffel_tower_model_3d_with_best_quality.glb',
    posterUrl: '/posters/eiffel_tower.webp',
    thumbnailUrl: 'https://choosewhere.com/public/images/fQpK5xb/945_630/shutterstock_710380270.webp'
  },
  {
    id: 'colosseum-st-peters',
    name: 'Colosseum & St. Peter\'s',
    description: 'A magnificent collection representing the peak of Roman architecture and the heart of the Vatican. This model showcases the grandeur of the Roman amphitheatre alongside the Renaissance-style St. Peter\'s Basilica.',
    location: 'Rome & Vatican City',
    coordinates: { lat: 41.8902, lng: 12.4922 },
    modelUrl: '/models/colosseum__st_peters_basilica.glb',
    posterUrl: '/posters/colosseum_basilica.webp',
    thumbnailUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800'
  }
];
