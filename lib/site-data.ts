import {
  Activity,
  Baby,
  Brain,
  FlaskConical,
  HeartPulse,
  Leaf,
  Pill,
  ShieldCheck,
} from 'lucide-react'

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Divisions', href: '#divisions' },
  { label: 'Quality', href: '#quality' },
  // { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
]

export const STATS = [
  { value: '10+', label: 'Product Brands' },
  { value: '2+', label: 'Years of Trust' },
  { value: '1+', label: 'States Served' },
  { value: '1M+', label: 'Lives Touched' },
]

export const DIVISIONS = [
  {
    id: 1,
    icon: HeartPulse,
    name: "Cardiovascular",

    bannerImage: "/images/research-lab.png",
    heroImage: "/images/hero-pharma-division.png",

    description:
      "Our Cardiovascular Division focuses on delivering innovative and reliable therapies for hypertension, heart failure, dyslipidemia, diabetes, and other cardiac disorders. Every product is developed with the highest standards of quality to improve patient outcomes and support healthier lives.",

    products: [
      {
        category: "ANTI-ANGINAL",
        name: "CARDIOTAB",
        composition: "Nicorandil 5mg Tablet",
        image: "/images/products/p1.jpeg",
      },
      {
        category: "ANTI-HYPERTENSIVE",
        name: "HYPROTEL 40",
        composition: "Telmisartan 40mg Tablet",
        image: "/images/products/p2.jpeg",
      },
      {
        category: "LIPID LOWERING",
        name: "ROSUGOLD 20",
        composition: "Rosuvastatin 20mg Tablet",
        image: "/images/products/p3.jpeg",
      },
      {
        category: "ANTI-DIABETIC",
        name: "GLUCOFIT M",
        composition: "Glimepiride + Metformin",
        image: "/images/products/p4.jpeg",
      },
    ],
  },

  {
    id: 2,
    icon: Baby,
    name: "Gynaecology",

    bannerImage: "/images/research-lab.png",
    heroImage: "/images/hero-pharma-division.png",

    description:
      "Dedicated to women's healthcare through advanced formulations supporting pregnancy, fertility, hormonal balance, bone health, and gynecological wellness.",

    products: [
      {
        category: "PREGNANCY CARE",
        name: "MOMCARE XT",
        composition: "Iron + Folic Acid Tablets",
        image: "/images/products/p5.jpeg",
      },
      {
        category: "CALCIUM",
        name: "CALWOMAN D3",
        composition: "Calcium + Vitamin D3",
        image: "/images/products/p6.jpeg",
      },
      {
        category: "HORMONAL",
        name: "FEMBALANCE",
        composition: "Progesterone Softgel",
        image: "/images/products/p7.jpeg",
      },
    ],
  },

  {
    id: 3,
    icon: Brain,
    name: "Neurology",

    bannerImage: "/images/research-lab.png",
    heroImage: "/images/hero-pharma-division.png",

    description:
      "Innovative neurological therapies designed for epilepsy, neuropathy, cognitive disorders, and nervous system support.",

    products: [
      {
        category: "NEURO CARE",
        name: "NEUROVIT PLUS",
        composition: "Methylcobalamin + Alpha Lipoic Acid",
        image: "/images/products/p8.jpeg",
      },
      {
        category: "PAIN MANAGEMENT",
        name: "GABANEXT",
        composition: "Gabapentin + Methylcobalamin",
        image: "/images/products/p9.jpeg",
      },
      {
        category: "BRAIN HEALTH",
        name: "MEMORIX",
        composition: "Citicoline Tablets",
        image: "/images/products/p1.jpeg",
      },
    ],
  },

  {
    id: 4,
    icon: Leaf,
    name: "Nutraceuticals & Ortho",

    bannerImage: "/images/research-lab.png",
    heroImage: "/images/hero-pharma-division.png",

    description:
      "Premium nutritional supplements and orthopedic solutions promoting stronger bones, healthier joints, immunity, and overall wellness.",

    products: [
      {
        category: "BONE HEALTH",
        name: "OSTEOCARE D3",
        composition: "Calcium + Vitamin D3",
        image: "/images/products/p2.jpeg",
      },
      {
        category: "JOINT CARE",
        name: "JOINTFLEX",
        composition: "Glucosamine + Chondroitin",
        image: "/images/products/p3.jpeg",
      },
      {
        category: "MULTIVITAMIN",
        name: "NUTRILIFE",
        composition: "Multivitamin & Minerals",
        image: "/images/products/p4.jpeg",
      },
    ],
  },

  {
    id: 5,
    icon: Activity,
    name: "Psychiatry",

    bannerImage: "/images/research-lab.png",
    heroImage: "/images/hero-pharma-division.png",

    description:
      "Evidence-based psychiatric medicines supporting better mental health through safe and effective treatments for anxiety, depression, and related disorders.",

    products: [
      {
        category: "ANTI-ANXIETY",
        name: "CALMZEN",
        composition: "Clonazepam Tablets",
        image: "/images/products/p5.jpeg",
      },
      {
        category: "ANTI-DEPRESSANT",
        name: "SEROLIFE",
        composition: "Sertraline Tablets",
        image: "/images/products/p6.jpeg",
      },
      {
        category: "MOOD STABILIZER",
        name: "MOODCARE",
        composition: "Escitalopram Tablets",
        image: "/images/products/p7.jpeg",
      },
    ],
  },

  {
    id: 6,
    icon: Pill,
    name: "General Medicine",

    bannerImage: "/images/research-lab.png",
    heroImage: "/images/hero-pharma-division.png",

    description:
      "A comprehensive portfolio of trusted medicines covering infectious diseases, fever, pain relief, respiratory care, gastroenterology, and everyday healthcare.",

    products: [
      {
        category: "ANTIBIOTIC",
        name: "CEFOMED 500",
        composition: "Cefixime 500mg Tablets",
        image: "/images/products/p8.jpeg",
      },
      {
        category: "PAIN RELIEF",
        name: "PAINOFF MR",
        composition: "Aceclofenac + Paracetamol",
        image: "/images/products/p9.jpeg",
      },
      {
        category: "GASTRO",
        name: "GASTROX DSR",
        composition: "Pantoprazole + Domperidone",
        image: "/images/products/p1.jpeg",
      },
      {
        category: "RESPIRATORY",
        name: "RESPICOLD",
        composition: "Levocetirizine + Montelukast",
        image: "/images/products/p2.jpeg",
      },
    ],
  },
];

export const VALUES = [
  {
    icon: FlaskConical,
    title: 'Uncompromising Quality',
    description:
      'Every batch undergoes rigorous Quality Control (QC) and Quality Assurance (QA) to meet global therapeutic standards.',
  },
  {
    icon: ShieldCheck,
    title: 'Certified Manufacturing',
    description:
      'Our production ecosystem strictly adheres to world-class regulatory bodies including WHO-GMP, ISO 9001:2015, and FSSAI certifications.',
  },
  {
    icon: HeartPulse,
    title: 'Diverse Product Portfolio',
    description:
      'We cater to multiple therapeutic segments, ranging from advanced antibiotics, neural supplements, and pain management to specialized pediatric formulations.',
  },
]

export const QUALITY_POINTS = [
  'Advanced Raw Material Sourcing',
  'Environmental Controls',
  'Zero-Touch Packaging Integrity',
  'Full batch traceability and documentation',
]
