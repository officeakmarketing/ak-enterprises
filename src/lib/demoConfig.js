export const TRADE_PRESETS = [
  {
    id: "barber",
    label: "Barber",
    businessName: "King & Crown Grooming",
    trade: "Master Barbers & Grooming",
    tagline: "Precision craftsmanship, hot towel rituals & beard sculpting.",
    location: "Mayfair, London",
    accent: "#C9A961", // Gold
    icon: "scissors",
    coverGradient: "from-amber-950/40 via-stone-900 to-[#0A0A0B]",
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
    coverGradient: "from-rose-950/40 via-stone-900 to-[#0A0A0B]",
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
    coverGradient: "from-cyan-950/40 via-slate-900 to-[#0A0A0B]",
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
    coverGradient: "from-sky-950/40 via-slate-900 to-[#0A0A0B]",
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
    coverGradient: "from-emerald-950/40 via-stone-900 to-[#0A0A0B]",
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
    coverGradient: "from-orange-950/40 via-stone-900 to-[#0A0A0B]",
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
    coverGradient: "from-purple-950/40 via-stone-900 to-[#0A0A0B]",
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
    coverGradient: "from-amber-950/40 via-stone-900 to-[#0A0A0B]",
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
    coverGradient: "from-emerald-950/40 via-slate-900 to-[#0A0A0B]",
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
    coverGradient: "from-red-950/40 via-stone-900 to-[#0A0A0B]",
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

export function encodeDemoParams(config) {
  const params = new URLSearchParams();
  if (config.name) params.set("name", config.name);
  if (config.trade) params.set("trade", config.trade);
  if (config.accent) params.set("accent", config.accent.replace("#", ""));
  if (config.service) params.set("service", config.service);
  if (config.price !== undefined) params.set("price", String(config.price));
  if (config.slot) params.set("slot", String(config.slot));
  if (config.preset) params.set("preset", config.preset);
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

  const name = searchParams.get("name") || matchedPreset.businessName;
  const trade = searchParams.get("trade") || matchedPreset.trade;
  const service = searchParams.get("service") || matchedPreset.services[0].name;
  const price = searchParams.get("price") !== null ? Number(searchParams.get("price")) : matchedPreset.services[0].price;
  const slot = searchParams.get("slot") !== null ? Number(searchParams.get("slot")) : matchedPreset.slotLength;

  return {
    name,
    trade,
    accent,
    service,
    price: isNaN(price) ? matchedPreset.services[0].price : price,
    slot: isNaN(slot) ? matchedPreset.slotLength : slot,
    preset: presetId || defaultPreset.id,
    allServices: matchedPreset.services,
    presetMeta: matchedPreset,
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
