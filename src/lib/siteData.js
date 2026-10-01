// Rudy Jaya Elektrical — Verified site data
// Source: https://sites.google.com/view/tukanglistri (Home, QNA, Cara Kerja, Target Market)
// Replace these local placeholder photos with client photos when available.
import businessLogo from "../../img/LOGO RUDY JAYA ELECTRICAL.jpg";

const IMG = {
  hero: "/images/hero.png",
  panelAssembly: "/images/panel-assembly.png",
  finishedPanel: "/images/finished-panel.png",
  ledStrip: "/images/led-strip.png",
  pendantLamp: "/images/pendant-lamp.png",
  conduitPiping: "/images/conduit-piping.png",
  renovation: "/images/renovation.png",
};

export const BUSINESS = {
  name: "Rudy Jaya Elektrical",
  logo: businessLogo,
  tagline: "Layanan listrik untuk rumah, kantor, dan kebutuhan usaha di Jakarta Pusat.",
  intro: "Rudy Jaya Elektrical membantu kebutuhan listrik rumah dan usaha dengan instalasi, perbaikan, panel, dan pencahayaan yang aman serta rapi. Kami fokus pada pekerjaan yang sesuai kondisi lokasi, kebutuhan harian, dan jadwal Anda.",
  phone: "0852-8098-5750",
  phoneIntl: "+6285280985750",
  whatsapp: "https://wa.me/6285280985750",
  whatsappMessage: "Halo Rudy Jaya Elektrical, saya ingin berkonsultasi mengenai kebutuhan kelistrikan.",
  address: "Jl. Karet Pasar Baru Barat I No. 22, Karet Tengsin, Tanah Abang, Jakarta Pusat",
  hoursWeek: "Senin–Sabtu, 08.00–20.00 WIB",
  hoursSun: "Minggu, 09.00–20.00 WIB",
  mapsUrl: "https://www.google.com/maps/place/Tukang+listrik+JAKARTA+(Rudy+jaya+elektrical)/@-6.2059353,106.8107168,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f73d4289691f:0xa3cc1f41a0f27985!8m2!3d-6.2059353!4d106.8107168!16s%2Fg%2F11xtnrn4z_?entry=ttu&g_ep=EgoyMDI2MDkyOC4wIKXMDSoASAFQAw%3D%3D",
  areas: [
    "Karet Tengsin", "Tanah Abang", "Bendungan Hilir", "Kebon Melati",
    "Cideng", "Petamburan", "Sudirman", "Jakarta Pusat",
    "Jakarta Selatan", "Jakarta Barat",
  ],
};

export function waLink(message) {
  const msg = message || BUSINESS.whatsappMessage;
  return `${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export const NAV_LINKS = [
  { label: "Beranda", href: "#home" },
  { label: "Layanan", href: "#layanan" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Portofolio", href: "#portfolio" },
  { label: "Tentang", href: "#tentang" },
  { label: "Tanya Jawab", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

export const HERO_IMAGE = IMG.hero;

export const GALLERY = [
  { caption: "Pemasangan Lampu Gantung", category: "Penerangan", w: IMG.pendantLamp },
  { caption: "Proses Piping — Instalasi", category: "Instalasi", w: IMG.conduitPiping },
  { caption: "Hasil Pemasangan", category: "Instalasi", w: IMG.ledStrip },
  { caption: "Pemasangan Lampu LED Strip", category: "Penerangan", w: IMG.ledStrip },
  { caption: "Proses Piping — Panel", category: "Panel", w: IMG.panelAssembly },
  { caption: "Relokasi Panel", category: "Panel", w: IMG.finishedPanel },
  { caption: "Proses Piping — Penarikan Kabel", category: "Instalasi", w: IMG.conduitPiping },
  { caption: "Proses Piping — Finishing", category: "Instalasi", w: IMG.conduitPiping },
  { caption: "Pemasangan Lampu", category: "Penerangan", w: IMG.pendantLamp },
  { caption: "Penandaan Panel Listrik", category: "Panel", w: IMG.finishedPanel },
  { caption: "Hasil Renovasi Lampu LED Strip dan Gantung", category: "Renovasi", w: IMG.renovation },
  { caption: "Perakitan Panel", category: "Panel", w: IMG.panelAssembly },
  { caption: "Hasil Pemasangan Panel", category: "Panel", w: IMG.finishedPanel },
];

const portfolioFiles = import.meta.glob(
  ["../../img/*.{jpg,jpeg,png,webp}", "!../../img/LOGO RUDY JAYA ELECTRICAL.jpg"],
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

export const PORTFOLIO_IMAGES = Object.entries(portfolioFiles)
  .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath, undefined, { numeric: true }))
  .map(([imagePath, src]) => {
    const filename = imagePath.slice(imagePath.lastIndexOf("/") + 1);
    const captionWords = filename
      .replace(/^\d+(?:\.\d+)?\s*/, "")
      .replace(/\.[^.]+$/, "")
      .toLocaleLowerCase("id-ID")
      .split(/\s+/);
    const caption = captionWords
      .map((word, wordIndex) => {
        if (wordIndex > 0 && word === "dan") return word;
        if (word === "ledstrip" || word === "ledsrip") return "LED Strip";
        return word.charAt(0).toLocaleUpperCase("id-ID") + word.slice(1);
      })
      .join(" ");
    const normalizedCaption = caption.toLowerCase();

    return {
      src,
      caption,
      category: normalizedCaption.includes("panel")
        ? "Panel"
        : normalizedCaption.includes("lampu") || normalizedCaption.includes("led")
          ? "Penerangan"
          : "Instalasi",
    };
  });

export const SERVICES = {
  featured: {
    title: "Instalasi & Renovasi Listrik",
    description: "Kami membantu pemasangan listrik baru maupun renovasi di rumah, kantor, dan usaha. Pekerjaan mencakup kabel, titik lampu, stopkontak, panel, serta finishing yang rapi sesuai kondisi lokasi.",
    items: [
      "Instalasi listrik rumah baru",
      "Renovasi listrik rumah dan kantor",
      "Tambah titik lampu dan stopkontak",
      "Instalasi plafon — kabel rapi tersembunyi",
    ],
  },
  groups: [
    {
      icon: "Cable",
      title: "Instalasi",
      items: [
        "Instalasi listrik baru",
        "Tambah titik lampu & stopkontak",
        "Instalasi AC & jalur listriknya",
        "Pemasangan CCTV dan jalur dayanya",
        "Jalur listrik pemanas air, kulkas, dan mesin cuci",
      ],
    },
    {
      icon: "Wrench",
      title: "Perbaikan",
      items: [
        "Perbaikan konsleting (korslet)",
        "Ganti MCB rusak",
        "Stopkontak terbakar",
        "Ganti kabel lama yang getas atau panas",
        "Audit listrik rumah",
      ],
    },
    {
      icon: "CircuitBoard",
      title: "Panel & Pembumian",
      items: [
        "Perakitan panel listrik",
        "Pemasangan pembumian (grounding)",
        "Relokasi panel",
        "Peningkatan daya PLN",
        "Penandaan panel listrik",
        "Sistem genset & ATS",
      ],
    },
    {
      icon: "Lightbulb",
      title: "Penerangan",
      items: [
        "Pemasangan lampu gantung",
        "Pemasangan lampu LED strip",
        "Lampu hias & plafon",
        "Lampu taman & luar ruangan",
        "Lampu sensor otomatis",
        "Lampu darurat",
      ],
    },
  ],
};

export const PROCESS_STEPS = [
  {
    no: "01",
    title: "Konsultasi dan Perencanaan",
    description: "Kami membahas kebutuhan dan anggaran Anda, membuat rencana terperinci untuk memastikan semuanya siap sebelum memulai.",
  },
  {
    no: "02",
    title: "Desain dan Persetujuan",
    description: "Kami membuat desain khusus berdasarkan ide-ide Anda, meninjau bersama-sama untuk memastikan desain tersebut memenuhi harapan Anda.",
  },
  {
    no: "03",
    title: "Konstruksi dan Eksekusi",
    description: "Tim kami memulai pengerjaan, mengelola setiap fase dengan cermat dan memberi Anda informasi terkini selama proses berlangsung.",
  },
  {
    no: "04",
    title: "Inspeksi dan Serah Terima",
    description: "Setelah selesai, kami memeriksa pekerjaan, dan setelah Anda menyetujuinya, kami serahkan ruang Anda yang telah siap sesuai keinginan Anda.",
  },
];

export const TARGET_MARKET = [
  {
    group: "Residensial",
    icon: "Home",
    items: [
      { name: "Rumah Tinggal", need: "Perbaikan korslet, tambah titik lampu, ganti MCB" },
      { name: "Apartemen", need: "Instalasi panel kecil, perawatan listrik rutin" },
      { name: "Kos-kosan", need: "Instalasi kamar, meteran individu, stopkontak" },
      { name: "Kontrakan", need: "Perawatan kabel & pembumian" },
      { name: "Rumah Tua", need: "Penggantian kabel lama & pembumian" },
      { name: "Rumah Mewah", need: "Sistem listrik pintar & lampu otomatis" },
    ],
  },
  {
    group: "Komersial",
    icon: "Building2",
    items: [
      { name: "Ruko", need: "Instalasi baru, penambahan stopkontak & lampu" },
      { name: "Toko", need: "Perbaikan lampu & kabel display, pasang saklar" },
      { name: "Minimarket", need: "Distribusi listrik kulkas, AC, dan penerangan" },
      { name: "Restoran", need: "Jalur listrik kompor & kulkas industri" },
      { name: "Kafe", need: "Penerangan dekoratif, stopkontak & sistem tata suara" },
      { name: "Salon", need: "Stopkontak pengering rambut, mesin, dan pencahayaan" },
      { name: "Laundry", need: "Jalur khusus mesin cuci & pemanas air" },
      { name: "Bengkel Motor", need: "Jalur daya untuk alat las & kompresor" },
    ],
  },
  {
    group: "Fasilitas & Industri",
    icon: "Building",
    items: [
      { name: "Sekolah", need: "Perawatan panel, stopkontak lab, penerangan kelas" },
      { name: "Masjid", need: "Pemasangan perangkat tata suara & lampu hemat energi" },
      { name: "Klinik", need: "Jalur stabil listrik alat medis" },
      { name: "Hotel", need: "Sistem penerangan & kontrol daya tiap kamar" },
      { name: "Pabrik Kecil", need: "Panel 3 fasa & jalur mesin industri ringan" },
      { name: "Gudang", need: "Instalasi penerangan & colokan alat angkut barang" },
      { name: "SPBU", need: "Jalur aman pompa & lampu luar" },
    ],
  },
  {
    group: "Mitra Proyek",
    icon: "Briefcase",
    items: [
      { name: "Pengembang Properti", need: "Instalasi awal unit baru" },
      { name: "Arsitek / Kontraktor", need: "Mitra pemasangan listrik proyek" },
      { name: "Penyelenggara Acara", need: "Pemasangan listrik panggung & perangkat tata suara" },
      { name: "RT/RW Setempat", need: "Instalasi penerangan lingkungan" },
    ],
  },
];

export const WHY_US = [
  {
    icon: "Users",
    title: "Pelayanan Profesional",
    description: "Tim teknisi berpengalaman kami merespon kebutuhan Anda dengan ramah dan memberikan solusi yang tepat sesuai kebutuhan Anda.",
  },
  {
    icon: "BadgeCheck",
    title: "Teknisi Bersertifikat",
    description: "Tenaga kami bersertifikat dan berpengalaman, siap menangani segala skala pekerjaan listrik dengan aman.",
  },
  {
    icon: "ShieldCheck",
    title: "Material Standar SNI",
    description: "Semua material yang kami gunakan berstandar SNI untuk keamanan dan ketahanan jangka panjang.",
  },
  {
    icon: "Wrench",
    title: "Kualitas Standar Tinggi",
    description: "Kami mengutamakan kualitas dengan peralatan modern dan teknologi terkini untuk hasil terbaik.",
  },
];

export const FAQS = [
  { q: "Apakah Rudy Jaya Elektrical melayani panggilan ke rumah?", a: "Ya, kami siap datang ke lokasi rumah Anda di Karet Tengsin dan sekitarnya." },
  { q: "Bisa perbaiki listrik korslet?", a: "Tentu, kami ahli menangani korsleting dengan aman dan cepat." },
  { q: "Melayani area mana saja?", a: "Seluruh Tanah Abang, Bendungan Hilir, Kebon Melati, Cideng, Petamburan, Sudirman, hingga Jakarta Pusat, Selatan, dan Barat." },
  { q: "Apakah bisa pasang instalasi baru rumah?", a: "Bisa, kami menangani instalasi listrik rumah baru dan renovasi." },
  { q: "Apakah melayani listrik untuk kantor?", a: "Ya, kami pasang dan rawat listrik kantor dengan sistem aman." },
  { q: "Apa saja layanan listriknya?", a: "Instalasi, perbaikan, pembumian, MCB, panel, dan perawatan." },
  { q: "Apakah ada garansi pengerjaan?", a: "Ada, kami pastikan hasil rapi, aman, dan sesuai standar." },
  { q: "Apakah teknisinya bersertifikat?", a: "Ya, tenaga kami bersertifikat dan berpengalaman." },
  { q: "Apakah alat dan kabelnya standar SNI?", a: "Ya, semua material yang kami gunakan berstandar SNI." },
  { q: "Apakah menerima proyek kecil?", a: "Tentu, kami melayani semua skala pekerjaan listrik tanpa minimum." },
  { q: "Apakah melayani proyek besar juga?", a: "Ya, kami berpengalaman di proyek gedung dan kantor." },
  { q: "Bagaimana cara menghubungi Rudy Jaya Elektrical?", a: "Silakan hubungi kami melalui nomor yang tercantum di bagian Kontak." },
];

export const TESTIMONIALS = [
  {
    name: "Dimas Aditya",
    quote: "Buat yang cari solusi untuk pengerjaan instalasi listrik baru, renov atau maintenance, saya rekomend banget soalnya pekerjaannya rapi, cepat dan bisa dipercaya. Dijamin gak bakal nyesel pakai jasanya.",
    rating: 5,
  },
  {
    name: "Anissa Sashabilla",
    quote: "Top banget, ada masalah minor soal listrik langsung sat set dan komunikatif. Thank you mas Rudy.",
    rating: 5,
  },
  {
    name: "Puspita R.",
    quote: "Sudah langganan jasa instalasi listrik ini sampai sekarang pindah rumah, karena pengerjaan cepat dan profesional 👍🏻👍🏻",
    rating: 5,
  },
];

export const TRUST_BADGES = [
  "Teknisi Bersertifikat",
  "Material Standar SNI",
  "Garansi Pengerjaan",
  "Semua Skala Pekerjaan",
];