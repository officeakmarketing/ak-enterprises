export const TRADE_PRESETS = [
  {
    id: "barber",
    label: "Barber",
    businessName: "King & Crown Grooming",
    trade: "Master Barbers & Grooming",
    tagline: "Precision craftsmanship, hot towel rituals & bespoke styling.",
    location: "Mayfair, London",
    accent: "#C9A961", // Gold
    icon: "scissors",
    coverImage: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
    themeStyle: "dark",
    slotLength: 30,
    services: [
      {
        name: "Haircut & Beard Sculpt",
        price: 48,
        duration: 45,
        desc: "Skin fade or taper, hot towel wrap, straight-razor cheek line.",
        popular: true,
      },
      {
        name: "Skin Fade & Finish",
        price: 34,
        duration: 30,
        desc: "Precision foil fade tailored to head shape with textured styling.",
      },
      {
        name: "Hot Towel Wet Shave",
        price: 30,
        duration: 30,
        desc: "Essential oils, warm lather shave, cold towel pore closure.",
      },
      {
        name: "Full Royal Protocol",
        price: 75,
        duration: 60,
        desc: "Cut, beard sculpt, purifying charcoal face mask, scalp massage.",
      },
    ],
  },
  {
    id: "salon",
    label: "Salon",
    businessName: "Maison de Beauté",
    trade: "Haute Coiffure & Colour Studio",
    tagline: "Parisian hair artistry, botanical gloss & balayage perfection.",
    location: "Knightsbridge, London",
    accent: "#E29578", // Parisian Rose Bronze
    icon: "sparkles",
    coverImage: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
    themeStyle: "dark",
    slotLength: 45,
    services: [
      {
        name: "Signature Balayage & Toner",
        price: 185,
        duration: 90,
        desc: "Hand-painted dimension, custom gloss toner & Olaplex finish.",
        popular: true,
      },
      {
        name: "Designer Cut & Velvet Blowdry",
        price: 78,
        duration: 45,
        desc: "Face-contouring cut, scalp therapy & bouncy red-carpet blowout.",
      },
      {
        name: "Full Head Highlights",
        price: 135,
        duration: 75,
        desc: "Multi-dimensional root-to-tip lightening with Olaplex.",
      },
      {
        name: "Keratin Restorative Treatment",
        price: 195,
        duration: 105,
        desc: "Smooths frizz for up to 5 months while retaining volume.",
      },
    ],
  },
  {
    id: "clinic",
    label: "Clinic",
    businessName: "Lumière Aesthetics",
    trade: "Doctor-Led Cosmetic & Longevity",
    tagline: "Medical facial refinement, cellular renewal & zero downtime.",
    location: "Harley Street, London",
    accent: "#06B6D4", // Clinical Cyan
    icon: "shield",
    coverImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    themeStyle: "dark",
    slotLength: 30,
    services: [
      {
        name: "Anti-Wrinkle Assessment (3 Areas)",
        price: 240,
        duration: 30,
        desc: "Precision micro-dosing preserving natural facial expression.",
        popular: true,
      },
      {
        name: "Hydra-Infusion Glow Facial",
        price: 130,
        duration: 45,
        desc: "Vortex vacuum extraction, antioxidant infusion & LED therapy.",
      },
      {
        name: "Profhilo® Bioremodeling (2ml)",
        price: 290,
        duration: 30,
        desc: "Ultra-pure hyaluronic acid injection to stimulate collagen.",
      },
      {
        name: "Microneedling & Exosome Infusion",
        price: 210,
        duration: 60,
        desc: "Medical skin-needling for texture, pores & deep radiance.",
      },
    ],
  },
  {
    id: "dentist",
    label: "Dentist",
    businessName: "Harley Dental Studio",
    trade: "Cosmetic Dentistry & Smile Design",
    tagline: "Zero-anxiety modern dentistry, 3D scans & pain-free laser care.",
    location: "Marylebone, London",
    accent: "#38BDF8", // Clean Sky Blue
    icon: "activity",
    coverImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    themeStyle: "dark",
    slotLength: 30,
    services: [
      {
        name: "Dental Exam & 3D Digital Scan",
        price: 75,
        duration: 30,
        desc: "Comprehensive check, low-dose digital x-rays & AI cavity map.",
        popular: true,
      },
      {
        name: "AirFlow® Stain Removal & Polish",
        price: 95,
        duration: 45,
        desc: "Warm-water precision powder therapy erasing stubborn stains.",
      },
      {
        name: "Philips Zoom® In-Clinic Whitening",
        price: 360,
        duration: 60,
        desc: "Up to 8 shades whiter in a single comfortable 60-min session.",
      },
      {
        name: "Invisalign® 3D Smile Assessment",
        price: 0,
        duration: 30,
        desc: "Full 3D digital preview of your final aligned smile. No fee.",
      },
    ],
  },
  {
    id: "physio",
    label: "Physio",
    businessName: "Apex Sports Rehab",
    trade: "Chartered Physiotherapy & Recovery",
    tagline: "Biomechanical diagnosis, manual therapy & rapid sports recovery.",
    location: "Canary Wharf, London",
    accent: "#10B981", // Emerald
    icon: "heart",
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    themeStyle: "dark",
    slotLength: 45,
    services: [
      {
        name: "Diagnostic Initial Assessment",
        price: 88,
        duration: 45,
        desc: "Joint mobility analysis, ultrasound review & immediate relief.",
        popular: true,
      },
      {
        name: "Sports Recovery & Deep Release",
        price: 70,
        duration: 45,
        desc: "Fascial release, percussive therapy & dry needling.",
      },
      {
        name: "Post-Surgical Joint Rehab",
        price: 92,
        duration: 60,
        desc: "Kinetic progression for ACL, shoulder & spine rehabilitation.",
      },
      {
        name: "Running Gait Video Analysis",
        price: 110,
        duration: 60,
        desc: "Sensor treadmill video capture to correct stride mechanics.",
      },
    ],
  },
  {
    id: "gym-pt",
    label: "Gym / PT",
    businessName: "Vanguard Strength Lab",
    trade: "Private Personal Training",
    tagline: "Private coaching suites, metric-driven lifting & body recomposition.",
    location: "Shoreditch, London",
    accent: "#F97316", // Kinetic Orange
    icon: "dumbbell",
    coverImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    themeStyle: "dark",
    slotLength: 60,
    services: [
      {
        name: "DEXA Body Screen & Assessment",
        price: 50,
        duration: 60,
        desc: "InBody composition scan, posture screen & nutrition blueprint.",
        popular: true,
      },
      {
        name: "1-on-1 Elite Coaching Session",
        price: 85,
        duration: 60,
        desc: "Private gym pod with dedicated coach; progressive overload focus.",
      },
      {
        name: "Semi-Private Strength Pod (Max 3)",
        price: 42,
        duration: 60,
        desc: "Structured barbell, kettlebell & conditioning progressions.",
      },
      {
        name: "Metabolic Conditioning Circuit",
        price: 65,
        duration: 45,
        desc: "Anaerobic threshold training with live heart-rate monitoring.",
      },
    ],
  },
  {
    id: "photographer",
    label: "Photographer",
    businessName: "Verve Portrait Studio",
    trade: "Commercial & Executive Imagery",
    tagline: "Cinematic studio lighting, executive presence & editorial grading.",
    location: "Shoreditch Studio, London",
    accent: "#A855F7", // Purple
    icon: "camera",
    coverImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    themeStyle: "dark",
    slotLength: 60,
    services: [
      {
        name: "Executive Headshots (3 Retouches)",
        price: 195,
        duration: 45,
        desc: "3 lighting setups, live tethered review & full licensing.",
        popular: true,
      },
      {
        name: "Personal Brand Portfolio Session",
        price: 480,
        duration: 120,
        desc: "Wardrobe changes, lifestyle setups & 12 final retouches.",
      },
      {
        name: "Commercial Product Shoot (Half Day)",
        price: 850,
        duration: 240,
        desc: "Full studio lighting grid, creative direction & raw files.",
      },
      {
        name: "Editorial Portrait Sitting",
        price: 290,
        duration: 60,
        desc: "Moody cinema-inspired portraits for publications and features.",
      },
    ],
  },
  {
    id: "tutor",
    label: "Tutor",
    businessName: "Oxbridge Mentors",
    trade: "Elite STEM & Admissions Mentorship",
    tagline: "First-class Oxbridge scholars guiding students to top grades.",
    location: "Bloomsbury, London",
    accent: "#FBBF24", // Amber Gold
    icon: "book",
    coverImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    themeStyle: "dark",
    slotLength: 60,
    services: [
      {
        name: "Diagnostic Audit & Study Plan",
        price: 60,
        duration: 60,
        desc: "Knowledge gap audit, exam syllabus review & grade roadmap.",
        popular: true,
      },
      {
        name: "1-on-1 A-Level Maths Mastery",
        price: 75,
        duration: 60,
        desc: "Pure & Mechanics problem solving targeting Grade 9/A* outcomes.",
      },
      {
        name: "Oxbridge Admissions Mock Interview",
        price: 110,
        duration: 60,
        desc: "Critical thinking interrogations & STEP/MAT entrance coaching.",
      },
      {
        name: "UCAS Personal Statement Polish",
        price: 85,
        duration: 60,
        desc: "Line-by-line scholarly narrative critique by former examiners.",
      },
    ],
  },
  {
    id: "driving",
    label: "Driving School",
    businessName: "Prime Pass Driving",
    trade: "Grade A Approved Driving Academy",
    tagline: "Dual-control fleet, nervous driver specialists & fast test passes.",
    location: "Greater London & Surrey",
    accent: "#34D399", // Mint
    icon: "car",
    coverImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
    themeStyle: "dark",
    slotLength: 90,
    services: [
      {
        name: "Assessment Lesson (90 Mins)",
        price: 72,
        duration: 90,
        desc: "In-car evaluation of control, hazard instincts & lesson plan.",
        popular: true,
      },
      {
        name: "Standard Practical Lesson (90 Mins)",
        price: 60,
        duration: 90,
        desc: "Roundabouts, high-speed dual carriageways & reverse maneuvers.",
      },
      {
        name: "Mock DVSA Test on Official Routes",
        price: 80,
        duration: 90,
        desc: "Strict exam conditions with official sheet marking & debrief.",
      },
      {
        name: "Pass Plus Motorway Module",
        price: 190,
        duration: 180,
        desc: "Motorway slip-roads, adverse weather & insurance discount pass.",
      },
    ],
  },
  {
    id: "trades",
    label: "Trades",
    businessName: "Vanguard Heating",
    trade: "Gas Safe Engineers & Emergency Callout",
    tagline: "Fast-dispatch heating engineers, fixed prices & zero callout fee.",
    location: "London & Surrey 24/7",
    accent: "#EF4444", // Crimson Red
    icon: "wrench",
    coverImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    themeStyle: "dark",
    slotLength: 60,
    services: [
      {
        name: "Annual Boiler Service & Safety Check",
        price: 95,
        duration: 60,
        desc: "Flue gas check, pressure recharge & official CP12 record.",
        popular: true,
      },
      {
        name: "Emergency Boiler Diagnostics",
        price: 110,
        duration: 60,
        desc: "Same-day fault-finding by accredited Worcester/Vaillant techs.",
      },
      {
        name: "Smart Thermostat Installation",
        price: 145,
        duration: 90,
        desc: "Heat link wiring, wireless hub sync & mobile app setup.",
      },
      {
        name: "Landlord Electrical Report (EICR)",
        price: 195,
        duration: 120,
        desc: "Complete statutory inspection of consumer unit and all circuits.",
      },
    ],
  },
];

// Curated stock photography gallery for quick 1-click swaps
export const CURATED_HERO_PHOTOS = [
  { label: "Barber Studio", url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80" },
  { label: "Luxury Salon", url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80" },
  { label: "Modern Clinic", url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80" },
  { label: "Cosmetic Dental", url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80" },
  { label: "Physio Clinic", url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80" },
  { label: "Strength Gym", url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80" },
  { label: "Photo Studio", url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80" },
  { label: "Study Room", url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80" },
  { label: "Driving Fleet", url: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80" },
  { label: "Engineers Van", url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80" },
  { label: "Modern Loft", url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" },
  { label: "Executive Suite", url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80" },
];

export function encodeDemoParams(config) {
  const params = new URLSearchParams();
  if (config.name) params.set("name", config.name);
  if (config.trade) params.set("trade", config.trade);
  if (config.accent) params.set("accent", config.accent.replace("#", ""));
  if (config.currency) params.set("curr", config.currency);
  if (config.service) params.set("service", config.service);
  if (config.price !== undefined && config.price !== null) params.set("price", String(config.price));
  if (config.slot) params.set("slot", String(config.slot));
  if (config.preset) params.set("preset", config.preset);
  if (config.coverImage) params.set("cover", encodeURIComponent(config.coverImage));
  if (config.themeStyle) params.set("style", config.themeStyle);
  if (config.token) params.set("token", config.token);
  if (config.services && Array.isArray(config.services) && config.services.length > 0) {
    try {
      // Store compact representation of services [{name, price, duration, desc}]
      const compactServices = config.services.map((s) => ({
        name: s.name,
        price: Number(s.price) || 0,
        duration: Number(s.duration) || 30,
        desc: s.desc || "",
        popular: !!s.popular,
      }));
      params.set("services_data", encodeURIComponent(JSON.stringify(compactServices)));
    } catch {
      // ignore
    }
  }
  return params.toString();
}

export function decodeDemoParams(searchParams) {
  const defaultPreset = TRADE_PRESETS[0];

  const presetId = searchParams.get("preset");
  const matchedPreset = TRADE_PRESETS.find((p) => p.id === presetId) || defaultPreset;

  const rawAccent = searchParams.get("accent");
  const accent = rawAccent
    ? rawAccent.startsWith("#")
      ? rawAccent
      : `#${rawAccent}`
    : matchedPreset.accent;

  const currency = searchParams.get("curr") || "£";
  const name = searchParams.get("name") || matchedPreset.businessName;
  const trade = searchParams.get("trade") || matchedPreset.trade;
  
  // Explicitly check for query params
  const hasServiceParam = searchParams.has("service");
  const service = hasServiceParam ? searchParams.get("service") : matchedPreset.services[0].name;

  const hasPriceParam = searchParams.has("price");
  const rawPrice = searchParams.get("price");
  const parsedPrice = hasPriceParam && rawPrice !== "" ? Number(rawPrice) : NaN;
  const price = !isNaN(parsedPrice) ? parsedPrice : matchedPreset.services[0].price;

  const hasSlotParam = searchParams.has("slot");
  const rawSlot = searchParams.get("slot");
  const parsedSlot = hasSlotParam && rawSlot !== "" ? Number(rawSlot) : NaN;
  const slot = !isNaN(parsedSlot) ? parsedSlot : matchedPreset.slotLength;

  const rawCover = searchParams.get("cover");
  const coverImage = rawCover ? decodeURIComponent(rawCover) : matchedPreset.coverImage;

  const themeStyle = searchParams.get("style") || matchedPreset.themeStyle || "dark";
  const token = searchParams.get("token") || "demo-stand";

  // Check if explicit services_data was passed
  let servicesFromParam = null;
  const rawServicesData = searchParams.get("services_data");
  if (rawServicesData) {
    try {
      const parsed = JSON.parse(decodeURIComponent(rawServicesData));
      if (Array.isArray(parsed) && parsed.length > 0) {
        servicesFromParam = parsed;
      }
    } catch {
      // ignore
    }
  }

  // Re-build allServices list ensuring custom service name & price are included and take precedence
  const baseServices = servicesFromParam || matchedPreset.services || [];
  let customServiceFound = false;
  const mergedServices = baseServices.map((s, index) => {
    if (s.name === service) {
      customServiceFound = true;
      return { ...s, price, duration: slot };
    }
    // If first item and service was explicitly overridden
    if (index === 0 && hasServiceParam && !servicesFromParam) {
      customServiceFound = true;
      return { ...s, name: service, price, duration: slot };
    }
    return s;
  });

  if (!customServiceFound && hasServiceParam && !servicesFromParam) {
    mergedServices.unshift({
      name: service,
      price: price,
      duration: slot,
      desc: "Custom requested service.",
      popular: true,
    });
  }

  return {
    name,
    trade,
    accent,
    currency,
    service,
    price,
    slot,
    preset: presetId || defaultPreset.id,
    coverImage,
    themeStyle,
    token,
    allServices: mergedServices,
    presetMeta: {
      ...matchedPreset,
      services: mergedServices,
    },
  };
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function generateDeterministicSlots(businessSeed = "default", slotLength = 30) {
  const seedNum = hashString(businessSeed);
  const days = [];

  const baseTimes = [
    "09:30", "10:30", "11:30", "13:30", "14:30", "15:30", "16:30"
  ];

  const now = new Date();
  let dayOffset = 1;
  let addedDays = 0;

  while (addedDays < 5) {
    const d = new Date(now);
    d.setDate(now.getDate() + dayOffset);
    dayOffset++;

    if (d.getDay() === 0) continue; // Skip Sundays

    const daySeed = seedNum + d.getDate() * 17 + d.getMonth() * 31;
    const dateKey = d.toISOString().split("T")[0];

    const slots = [];
    baseTimes.forEach((time, idx) => {
      const pseudoRand = ((daySeed + idx * 7919) % 100) / 100;
      if (pseudoRand > 0.4) {
        slots.push(time);
      }
    });

    if (slots.length < 3) {
      slots.push("10:30", "13:30", "15:30");
    }

    days.push({
      dateKey,
      dayName: d.toLocaleDateString("en-GB", { weekday: "short" }),
      dateFormatted: d.toLocaleDateString("en-GB", { day: "numeric", month: "short" }),
      slots: Array.from(new Set(slots)).sort(),
    });

    addedDays++;
  }

  return days;
}
