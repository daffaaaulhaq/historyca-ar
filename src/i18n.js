import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Resource adalah tempat kamu menyimpan terjemahan
const resources = {
  en: {
    translation: {
      // Navbar
      nav_home: "Home",
      nav_maps: "Maps",
      nav_guide: "AR Guide",
      nav_about: "About",

      // Footer
      footer_desc:
        "Bringing the world's most iconic historical sites to your living room using cutting-edge WebAR technology.",
      footer_quick_links: "Quick Links",
      footer_historical_sites: "Historical Sites",
      footer_ar_guide: "AR Guide",
      footer_about: "About Us",
      footer_copyright_slogan: "Preserving the Past, Shaping the Future.",
      footer_connect: "Connect",
      footer_meet_team: "Meet the Team →",

      // Home - Hero
      hero_title: "History in Your Hands",
      hero_subtitle:
        "Experience the world's architectural wonders in high-performance WebAR. No apps required. Just history, brought to life in your space.",
      hero_cta: "Explore Monuments",

      // Home - Sites Section
      sites_heading: "World Heritage Sites",
      site_ar_badge: "AR Ready",
      site_explore_btn: "Explore in AR",

      // Home - AR Guide Section
      guide_title: "How to Experience AR",
      guide_subtitle:
        "Follow these simple steps to bring historical monuments into your personal space.",
      guide_step1_title: "Select a Site",
      guide_step1_desc:
        'Choose any monument from our collection and click "Explore in AR".',
      guide_step2_title: "Mobile Device",
      guide_step2_desc:
        "Open the link on your smartphone (Android or iOS) for the best experience.",
      guide_step3_title: "Find Space",
      guide_step3_desc:
        "Point your camera at a flat surface like a floor or table and move it slowly.",
      guide_step4_title: "Interact",
      guide_step4_desc:
        "The model will appear! You can pinch to zoom or drag to rotate and move it.",
      guide_sysreq_title: "System Requirement",
      guide_sysreq_desc:
        "Works best on Chrome (Android) and Safari (iOS). Ensure your device supports",
      guide_sysreq_android: "Google Play Services for AR",
      guide_sysreq_or: "or",
      guide_sysreq_ios: "Apple ARKit",

      // About Page
      about_header_title: "Preserving History, Digitally.",
      about_header_subtitle:
        "HistoricaAR bridges the gap between ancient heritage and modern innovation, bringing the world's greatest monuments directly into your hands.",
      about_vision_title: "Project Vision",
      about_vision_desc:
        "Our mission is to democratize access to historical education. By leveraging Web Augmented Reality (WebAR), we eliminate the need for expensive hardware or heavy app downloads, allowing anyone with a smartphone to explore and appreciate global heritage sites in immersive 3D.",
      about_vision_tag1: "Education",
      about_vision_tag2: "Preservation",
      about_vision_tag3: "Accessibility",
      about_tech_title: "Technology Stack",
      about_team_title: "Meet the Team",
      about_team_subtitle:
        "The creative minds and engineers behind HistoricaAR.",
      about_team_role: "Developer",
      about_credits_title: "3D Model Credits",
      about_credits_subtitle:
        "We gratefully acknowledge the creators of the 3D models used in this project.",
      about_credits_license:
        "All 3D models are used under Creative Commons Attribution (CC-BY) licenses from their respective sources.",

      // Detail Page
      detail_back: "Back to Collection",
      detail_loading: "Loading 3D Experience...",
      detail_ar_btn: "VIEW IN YOUR SPACE",
      detail_significance: "Historical Significance",
      detail_era_label: "Era",
      detail_era_value: "Historical",
      detail_status_label: "Status",
      detail_status_value: "World Heritage",
      detail_controls: "Controls",
      detail_control_rotate: "Rotate (1 Finger)",
      detail_control_zoom: "Zoom (Pinch)",
      detail_control_ar: "AR (Click Button)",
      detail_not_found: "Site Not Found",
      detail_return_home: "Return Home",
    },
  },
  id: {
    translation: {
      // Navbar
      nav_home: "Beranda",
      nav_maps: "Peta",
      nav_guide: "Panduan AR",
      nav_about: "Tentang",

      // Footer
      footer_desc:
        "Menghadirkan situs bersejarah paling ikonik di dunia ke ruang tamu Anda menggunakan teknologi WebAR mutakhir.",
      footer_quick_links: "Tautan Cepat",
      footer_historical_sites: "Situs Bersejarah",
      footer_ar_guide: "Panduan AR",
      footer_about: "Tentang Kami",
      footer_copyright_slogan: "Melestarikan Masa Lalu, Membentuk Masa Depan.",
      footer_connect: "Hubungi",
      footer_meet_team: "Kenali Tim →",

      // Home - Hero
      hero_title: "Sejarah di Genggaman Anda",
      hero_subtitle:
        "Rasakan keajaiban arsitektur dunia dalam WebAR berperforma tinggi. Tanpa aplikasi tambahan. Cukup sejarah, dihidupkan di ruang Anda.",
      hero_cta: "Jelajahi Monumen",

      // Home - Sites Section
      sites_heading: "Situs Warisan Dunia",
      site_ar_badge: "Siap AR",
      site_explore_btn: "Jelajahi dalam AR",

      // Home - AR Guide Section
      guide_title: "Cara Menggunakan AR",
      guide_subtitle:
        "Ikuti langkah-langkah sederhana ini untuk menghadirkan monumen bersejarah ke ruang pribadi Anda.",
      guide_step1_title: "Pilih Situs",
      guide_step1_desc:
        'Pilih monumen dari koleksi kami dan klik "Jelajahi dalam AR".',
      guide_step2_title: "Perangkat Mobile",
      guide_step2_desc:
        "Buka tautan di smartphone Anda (Android atau iOS) untuk pengalaman terbaik.",
      guide_step3_title: "Cari Ruang",
      guide_step3_desc:
        "Arahkan kamera ke permukaan datar seperti lantai atau meja dan gerakkan perlahan.",
      guide_step4_title: "Berinteraksi",
      guide_step4_desc:
        "Model akan muncul! Anda bisa mencubit untuk memperbesar atau menyeret untuk memutar dan memindahkannya.",
      guide_sysreq_title: "Persyaratan Sistem",
      guide_sysreq_desc:
        "Bekerja paling baik di Chrome (Android) dan Safari (iOS). Pastikan perangkat Anda mendukung",
      guide_sysreq_android: "Google Play Services for AR",
      guide_sysreq_or: "atau",
      guide_sysreq_ios: "Apple ARKit",

      // About Page
      about_header_title: "Melestarikan Sejarah, Secara Digital.",
      about_header_subtitle:
        "HistoricaAR menjembatani kesenjangan antara warisan kuno dan inovasi modern, menghadirkan monumen-monumen terbesar dunia langsung ke tangan Anda.",
      about_vision_title: "Visi Proyek",
      about_vision_desc:
        "Misi kami adalah mendemokratisasi akses terhadap pendidikan sejarah. Dengan memanfaatkan Web Augmented Reality (WebAR), kami menghilangkan kebutuhan akan perangkat keras mahal atau unduhan aplikasi berat, memungkinkan siapa saja dengan smartphone untuk menjelajahi dan mengapresiasi situs warisan global dalam 3D yang imersif.",
      about_vision_tag1: "Pendidikan",
      about_vision_tag2: "Pelestarian",
      about_vision_tag3: "Aksesibilitas",
      about_tech_title: "Teknologi yang Digunakan",
      about_team_title: "Kenali Tim Kami",
      about_team_subtitle:
        "Pikiran kreatif dan insinyur di balik HistoricaAR.",
      about_team_role: "Pengembang",
      about_credits_title: "Kredit Model 3D",
      about_credits_subtitle:
        "Kami dengan penuh rasa terima kasih mengakui para pembuat model 3D yang digunakan dalam proyek ini.",
      about_credits_license:
        "Semua model 3D digunakan di bawah lisensi Creative Commons Attribution (CC-BY) dari sumber masing-masing.",

      // Detail Page
      detail_back: "Kembali ke Koleksi",
      detail_loading: "Memuat Pengalaman 3D...",
      detail_ar_btn: "LIHAT DI RUANG ANDA",
      detail_significance: "Signifikansi Sejarah",
      detail_era_label: "Era",
      detail_era_value: "Bersejarah",
      detail_status_label: "Status",
      detail_status_value: "Warisan Dunia",
      detail_controls: "Kontrol",
      detail_control_rotate: "Putar (1 Jari)",
      detail_control_zoom: "Perbesar (Cubit)",
      detail_control_ar: "AR (Klik Tombol)",
      detail_not_found: "Situs Tidak Ditemukan",
      detail_return_home: "Kembali ke Beranda",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language is English
  interpolation: {
    escapeValue: false, // React sudah aman dari XSS
  },
});

export default i18n;
