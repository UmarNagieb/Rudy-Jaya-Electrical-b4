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
  tagline: "Electrical services for homes, offices, and businesses in Central Jakarta.",
  intro: "Rudy Jaya Elektrical meets the electrical needs of homes and businesses with safe, neat installation, repairs, panels, and lighting. We tailor our work to your site, day-to-day needs, and schedule.",
  phone: "0852-8098-5750",
  phoneIntl: "+6285280985750",
  whatsapp: "https://wa.me/6285280985750",
  whatsappMessage: "Hello Rudy Jaya Elektrical, I would like to discuss my electrical needs.",
  address: "Karet Pasar Baru Barat I Street No. 22, Karet Tengsin, Tanah Abang, Central Jakarta",
  hoursWeek: "Monday–Saturday, 08:00–20:00 Western Indonesian Time",
  hoursSun: "Sunday, 09:00–20:00 Western Indonesian Time",
  mapsUrl: "https://www.google.com/maps/place/Tukang+listrik+JAKARTA+(Rudy+jaya+elektrical)/@-6.2059353,106.8107168,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f73d4289691f:0xa3cc1f41a0f27985!8m2!3d-6.2059353!4d106.8107168!16s%2Fg%2F11xtnrn4z_?entry=ttu&g_ep=EgoyMDI2MDkyOC4wIKXMDSoASAFQAw%3D%3D",
  areas: [
    "Karet Tengsin", "Tanah Abang", "Bendungan Hilir", "Kebon Melati",
    "Cideng", "Petamburan", "Sudirman", "Central Jakarta",
    "South Jakarta", "West Jakarta",
  ],
};

export function waLink(message) {
  const msg = message || BUSINESS.whatsappMessage;
  return `${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#layanan" },
  { label: "How It Works", href: "#cara-kerja" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#tentang" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#kontak" },
];

export const HERO_IMAGE = IMG.hero;

export const GALLERY = [
  { caption: "Pendant Light Installation", category: "Lighting", w: IMG.pendantLamp },
  { caption: "Conduit Installation", category: "Installation", w: IMG.conduitPiping },
  { caption: "Completed Installation", category: "Installation", w: IMG.ledStrip },
  { caption: "LED Strip Light Installation", category: "Lighting", w: IMG.ledStrip },
  { caption: "Panel Conduit Installation", category: "Panels", w: IMG.panelAssembly },
  { caption: "Panel Relocation", category: "Panels", w: IMG.finishedPanel },
  { caption: "Cable Routing", category: "Installation", w: IMG.conduitPiping },
  { caption: "Conduit Finishing", category: "Installation", w: IMG.conduitPiping },
  { caption: "Light Installation", category: "Lighting", w: IMG.pendantLamp },
  { caption: "Electrical Panel Labeling", category: "Panels", w: IMG.finishedPanel },
  { caption: "LED Strip and Pendant Light Renovation", category: "Renovation", w: IMG.renovation },
  { caption: "Electrical Panel Assembly", category: "Panels", w: IMG.panelAssembly },
  { caption: "Completed Electrical Panel Installation", category: "Panels", w: IMG.finishedPanel },
];

const portfolioFiles = import.meta.glob(
  ["../../img/*.{jpg,jpeg,png,webp}", "!../../img/LOGO RUDY JAYA ELECTRICAL.jpg"],
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const PORTFOLIO_CAPTIONS = {
  "1.1 pemasangan lampu gantung.jpg": { caption: "Pendant Light Installation", category: "Lighting" },
  "1.2 proses peping.jpg": { caption: "Conduit Installation", category: "Installation" },
  "1.3 hasil pemasangan.jpg": { caption: "Completed Installation", category: "Installation" },
  "2.1 pemasangan lampu ledstrip.jpg": { caption: "LED Strip Light Installation", category: "Lighting" },
  "2.2 proses peping.jpg": { caption: "Panel Conduit Installation", category: "Installation" },
  "2.3 relokasi panel.jpg": { caption: "Electrical Panel Relocation", category: "Panels" },
  "3.1 proses peping.jpg": { caption: "Cable Routing", category: "Installation" },
  "3.2 proses peping.jpg": { caption: "Conduit Finishing", category: "Installation" },
  "4.1 pemasangan lampu.jpg": { caption: "Light Installation", category: "Lighting" },
  "4.2 Penandaan panel listrik.jpg": { caption: "Electrical Panel Labeling", category: "Panels" },
  "4.3 hasil renovasi lampu ledsrip dan gantung.jpg": { caption: "LED Strip and Pendant Light Renovation", category: "Renovation" },
  "5.1 perakitan panel.jpg": { caption: "Electrical Panel Assembly", category: "Panels" },
  "5.2 hasil pemasangaan panel.jpg": { caption: "Completed Electrical Panel Installation", category: "Panels" },
  "5.3 relokasi serve.jpg": { caption: "Electrical Panel Relocation", category: "Panels" },
};

export const PORTFOLIO_IMAGES = Object.entries(portfolioFiles)
  .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath, undefined, { numeric: true }))
  .map(([imagePath, src]) => {
    const filename = imagePath.slice(imagePath.lastIndexOf("/") + 1);
    const translated = PORTFOLIO_CAPTIONS[filename] || {
      caption: "Electrical Project",
      category: "Installation",
    };

    return {
      src,
      ...translated,
    };
  });

export const SERVICES = {
  featured: {
    title: "Electrical Installation & Renovation",
    description: "We handle new electrical installations and renovations for homes, offices, and businesses. Our work includes wiring, lighting points, outlets, panels, and neat finishing tailored to your site.",
    items: [
      "New home electrical installations",
      "Home and office electrical renovations",
      "Additional lighting points and outlets",
      "Ceiling installations with neatly concealed wiring",
    ],
  },
  groups: [
    {
      icon: "Cable",
      title: "Installation",
      items: [
        "New electrical installations",
        "Additional lighting points and outlets",
        "Air conditioner installation and power circuits",
        "CCTV installation and power wiring",
        "Dedicated circuits for water heaters, refrigerators, and washing machines",
      ],
    },
    {
      icon: "Wrench",
      title: "Repairs",
      items: [
        "Short-circuit repairs",
        "Faulty circuit breaker replacement",
        "Burnt outlet replacement",
        "Replacement of brittle or overheating wires",
        "Home electrical inspections",
      ],
    },
    {
      icon: "CircuitBoard",
      title: "Panels & Grounding",
      items: [
        "Electrical panel assembly",
        "Grounding installation",
        "Panel relocation",
        "Power capacity upgrades",
        "Electrical panel labeling",
        "Generator and automatic transfer switch (ATS) systems",
      ],
    },
    {
      icon: "Lightbulb",
      title: "Lighting",
      items: [
        "Pendant light installation",
        "LED strip light installation",
        "Decorative and ceiling lights",
        "Garden and outdoor lighting",
        "Automatic sensor lights",
        "Emergency lighting",
      ],
    },
  ],
};

export const PROCESS_STEPS = [
  {
    no: "01",
    title: "Consultation & Planning",
    description: "We discuss your needs and budget, then create a detailed plan to make sure everything is ready before work begins.",
  },
  {
    no: "02",
    title: "Design & Approval",
    description: "We create a tailored design based on your ideas and review it with you to make sure it meets your expectations.",
  },
  {
    no: "03",
    title: "Work & Implementation",
    description: "Our team gets to work, carefully managing each phase and keeping you updated throughout the process.",
  },
  {
    no: "04",
    title: "Inspection & Handover",
    description: "Once the work is complete, we inspect it and, after your approval, hand over the finished space.",
  },
];

export const TARGET_MARKET = [
  {
    group: "Residential",
    icon: "Home",
    items: [
      { name: "Homes", need: "Short-circuit repairs, additional lights, breaker replacement" },
      { name: "Apartments", need: "Small panel installations and routine electrical maintenance" },
      { name: "Boarding Houses", need: "Room wiring, individual meters, and outlets" },
      { name: "Rental Homes", need: "Wiring and grounding maintenance" },
      { name: "Older Homes", need: "Old wiring replacement and grounding" },
      { name: "Luxury Homes", need: "Smart electrical systems and automatic lighting" },
    ],
  },
  {
    group: "Commercial",
    icon: "Building2",
    items: [
      { name: "Shophouses", need: "New installations and additional outlets and lighting" },
      { name: "Retail Stores", need: "Display lighting and wiring repairs, switch installation" },
      { name: "Convenience Stores", need: "Power distribution for refrigerators, air conditioning, and lighting" },
      { name: "Restaurants", need: "Dedicated circuits for stoves and commercial refrigerators" },
      { name: "Cafes", need: "Decorative lighting, outlets, and sound systems" },
      { name: "Salons", need: "Outlets for hair dryers, equipment, and lighting" },
      { name: "Laundromats", need: "Dedicated circuits for washing machines and water heaters" },
      { name: "Motorcycle Repair Shops", need: "Power circuits for welding equipment and compressors" },
    ],
  },
  {
    group: "Facilities & Light Industry",
    icon: "Building",
    items: [
      { name: "Schools", need: "Panel maintenance, lab outlets, and classroom lighting" },
      { name: "Mosques", need: "Sound system installation and energy-efficient lighting" },
      { name: "Clinics", need: "Stable power circuits for medical equipment" },
      { name: "Hotels", need: "Lighting systems and room-by-room power controls" },
      { name: "Small Factories", need: "Three-phase panels and circuits for light industrial machinery" },
      { name: "Warehouses", need: "Lighting and outlets for material-handling equipment" },
      { name: "Fuel Stations", need: "Safe circuits for pumps and outdoor lighting" },
    ],
  },
  {
    group: "Project Partners",
    icon: "Briefcase",
    items: [
      { name: "Property Developers", need: "Initial installations for new units" },
      { name: "Architects / Contractors", need: "Electrical installation partners for projects" },
      { name: "Event Organizers", need: "Stage power and sound system installation" },
      { name: "Local Community Associations", need: "Community area lighting installations" },
    ],
  },
];

export const WHY_US = [
  {
    icon: "Users",
    title: "Professional Service",
    description: "Our experienced technicians respond courteously and provide solutions tailored to your needs.",
  },
  {
    icon: "BadgeCheck",
    title: "Certified Technicians",
    description: "Our certified, experienced technicians are ready to safely handle electrical projects of any size.",
  },
  {
    icon: "ShieldCheck",
    title: "Indonesian National Standard (SNI) Materials",
    description: "We use materials that meet Indonesian National Standards (SNI) for safety and long-term durability.",
  },
  {
    icon: "Wrench",
    title: "High-Quality Work",
    description: "We prioritize quality and use modern equipment and up-to-date technology to deliver excellent results.",
  },
];

export const FAQS = [
  { q: "Does Rudy Jaya Elektrical offer home visits?", a: "Yes, we can visit your home in Karet Tengsin and the surrounding areas." },
  { q: "Can you repair electrical short circuits?", a: "Yes. We handle short circuits safely and efficiently." },
  { q: "Which areas do you serve?", a: "We serve Tanah Abang, Bendungan Hilir, Kebon Melati, Cideng, Petamburan, Sudirman, Central Jakarta, South Jakarta, and West Jakarta." },
  { q: "Can you install new wiring in a home?", a: "Yes, we handle new home electrical installations and renovations." },
  { q: "Do you provide electrical services for offices?", a: "Yes, we install and maintain safe office electrical systems." },
  { q: "What electrical services do you offer?", a: "Installation, repairs, grounding, circuit breakers, panels, and maintenance." },
  { q: "Do you provide a workmanship warranty?", a: "Yes, we ensure our work is neat, safe, and meets applicable standards." },
  { q: "Are your technicians certified?", a: "Yes, our technicians are certified and experienced." },
  { q: "Do your tools and wiring meet SNI standards?", a: "Yes, the materials we use meet Indonesian National Standards (SNI)." },
  { q: "Do you take on small projects?", a: "Of course. We handle electrical projects of every size, with no minimum." },
  { q: "Do you also handle large projects?", a: "Yes, we have experience with building and office projects." },
  { q: "How can I contact Rudy Jaya Elektrical?", a: "Please call or message us using the number listed in the Contact section." },
];

export const TESTIMONIALS = [
  {
    name: "Dimas Aditya",
    quote: "If you need new electrical installation, renovation, or maintenance, I highly recommend them. The work is neat, fast, and reliable. You won't regret hiring them.",
    rating: 5,
  },
  {
    name: "Anissa Sashabilla",
    quote: "Excellent service. I had a minor electrical issue, and it was handled quickly with great communication. Thank you, Rudy.",
    rating: 5,
  },
  {
    name: "Puspita R.",
    quote: "I've relied on this electrical installation service even after moving house because the work is fast and professional. 👍🏻👍🏻",
    rating: 5,
  },
];

export const TRUST_BADGES = [
  "Certified Technicians",
  "SNI-Compliant Materials",
  "Workmanship Warranty",
  "Projects of Any Size",
];