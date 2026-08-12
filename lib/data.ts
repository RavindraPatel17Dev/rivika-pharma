export type Division = {
  slug: string
  name: string
  short: string
  description: string
  image: string
}

export type Product = {
  slug: string
  name: string
  tagline: string
  composition: string
  form: string
  pack: string
  indications: string[]
  divisions: string[]
  image: string
}

export const divisions: Division[] = [
  {
    slug: 'gastro-intestinal',
    name: 'Gastro Intestinal',
    short: 'Acidity, digestion & gut care',
    description:
      'Formulations that address acidity, heartburn, indigestion and gut-flora balance for everyday digestive comfort.',
    image: '/divisions/gastro.jpeg',
  },
  
  {
    slug: 'respiratory-allergy',
    name: 'Respiratory & Allergy',
    short: 'Relief from allergy & airway distress',
    description:
      'Anti-allergic and respiratory solutions that provide long-lasting relief from sneezing, congestion and allergic reactions.',
    image: '/divisions/respiratory.png',
  },
  {
    slug: 'neuro-psychiatric',
    name: 'Neuro-Psychiatric',
    short: 'Nerve nourishment & neuro support',
    description:
      'Neurotropic and nerve-support therapies that nourish nerves, ease neuropathic discomfort and support overall neural health.',
    image: '/divisions/neuro.jpeg',
  },
  {
    slug: 'orthopaedic',
    name: 'Orthopaedic & Pain',
    short: 'Pain, inflammation & bone health',
    description:
      'Analgesic, anti-inflammatory and bone-health formulations for pain relief and stronger musculoskeletal wellness.',
    image: '/divisions/orthopaedic.png',
  },
  {
    slug: 'paediatric',
    name: 'Paediatric',
    short: 'Gentle care for children',
    description:
      'Palatable, gentle paediatric suspensions crafted for the specific needs of growing children.',
    image: '/divisions/paediatric.png',
  },
  {
    slug: 'gynaecology',
    name: 'Gynaecology',
    short: 'Women & bone wellness',
    description:
      'Nutritional and bone-health support tailored to women’s wellness across every stage of life.',
    image: '/divisions/gynecology.jpeg',
  },
  {
    slug: 'nutraceutical-wellness',
    name: 'Nutraceutical & Wellness',
    short: 'Immunity, energy & vitality',
    description:
      'Multivitamins, minerals and antioxidants that support immunity, energy and overall vitality.',
    image: '/divisions/wellness.png',
  },
  {
    slug: 'anti-microbial',
    name: 'General Physician',
    short: 'Broad-spectrum infection control',
    description:
      'Broad-spectrum anti-infectives designed for effective, responsible management of bacterial infections.',
    image: '/divisions/antimicrobial.jpeg',
  },
]

export const products: Product[] = [
  {
    slug: 'panzoriv-dsr',
    name: 'PANZORIV-DSR',
    tagline: 'Care for Acidity, Comfort for Life.',
    composition: 'Pantoprazole 40 mg + Domperidone 30 mg (SR) Capsules',
    form: 'Capsules',
    pack: '10 x 10 Capsules',
    indications: [
      'Relieves Acidity & Heartburn',
      'Reduces Nausea & Vomiting',
      'Improves Digestion',
    ],
    divisions: ['gastro-intestinal','gynaecology','neuro-psychiatric','respiratory-allergy','orthopaedic','anti-microbial'],
    image: '/products/panzoriv-dsr.jpg',
  },
  {
    slug: 'dolovik-sp',
    name: 'DOLOVIK-SP',
    tagline: 'Targeted Relief from Pain & Inflammation.',
    composition: 'Aceclofenac 100 mg + Paracetamol 325 mg Tablets',
    form: 'Tablets',
    pack: '10 x 10 Tablets',
    indications: [
      'Relieves Pain & Inflammation',
      'Reduces Fever',
      'Effective for Body Aches',
    ],
    divisions: ['orthopaedic','gynaecology','neuro-psychiatric','anti-microbial'],
    image: '/products/dolovik-sp.jpeg',
  },
  {
    slug: 'vitozest',
    name: 'VITOZEST',
    tagline: 'Everyday Nutrition, Everyday Energy.',
    composition:
      'Multivitamin, Multimineral, Amino Acid with Antioxidant Suspension',
    form: 'Suspension',
    pack: '200 ml | Mixed Fruit Flavour',
    indications: [
      'Supports Overall Growth & Immunity',
      'Fights Fatigue & Weakness',
      'Improves Appetite',
    ],
    divisions: ['nutraceutical-wellness', 'gynaecology', 'paediatric','neuro-psychiatric','respiratory-allergy','gastro-intestinal','orthopaedic','anti-microbial'],
    image: '/products/vitozest.jpg',
  },
  {
    slug: 'montivik-l-suspension',
    name: 'MONTIVIK-L Suspension',
    tagline: 'Gentle Allergy Relief for Little Ones.',
    composition: 'Montelukast 4 mg + Levocetirizine 2.5 mg Suspension',
    form: 'Suspension',
    pack: '60 ml | Mixed Fruit Flavour',
    indications: [
      'Relieves Sneezing & Runny Nose',
      'Reduces Itching & Watery Eyes',
      'Provides Long-lasting Relief',
    ],
    divisions: ['respiratory-allergy', 'paediatric','anti-microbial'],
    image: '/products/montivik-l-suspension.jpg',
  },
  {
    slug: 'kidriv-p',
    name: 'KIDRIV-P',
    tagline: 'Soothing Care for Growing Kids.',
    composition: 'Paracetamol & Mefenamic Acid Suspension',
    form: 'Suspension',
    pack: '60 ml | Mango Flavour',
    indications: [
      'Relieves Pain & Fever',
      'Reduces Inflammation',
      'Gentle on Stomach',
    ],
    divisions: ['paediatric','anti-microbial'],
    image: '/products/kidriv-p.jpeg',
  },
  {
    slug: 'montivik-l-tablets',
    name: 'MONTIVIK-L Tablets',
    tagline: 'Relief from Allergy, Freedom to Live.',
    composition: 'Montelukast 10 mg + Levocetirizine 5 mg Tablets',
    form: 'Tablets',
    pack: '10 x 10 Tablets',
    indications: [
      'Relieves Sneezing & Runny Nose',
      'Reduces Itching & Watery Eyes',
      'Provides Long-lasting Relief',
    ],
    divisions: ['respiratory-allergy','anti-microbial'],
    image: '/products/montivik-l-tablets.jpeg',
  },
  {
    slug: 'moxriv-cv-625',
    name: 'MOXRIV-CV 625',
    tagline: 'Broad Spectrum. Better Protection.',
    composition:
      'Amoxicillin 500 mg + Clavulanic Acid 125 mg + Lactic Acid Bacillus 60 Million Spores Tablets',
    form: 'Tablets',
    pack: '10 x 6 Tablets',
    indications: [
      'Treats Bacterial Infections',
      'Restores Gut Flora Balance',
      'Improves Immunity',
    ],
    divisions: ['anti-microbial','gynaecology','neuro-psychiatric','respiratory-allergy','orthopaedic'],
    image: '/products/moxriv-cv-625.jpeg',
  },
  {
    slug: 'myeloriv-plus',
    name: 'MYELORIV-PLUS',
    tagline: 'Nourish Nerves. Energize Life.',
    composition:
      'Methylcobalamin 1500 mcg + Alpha Lipoic Acid 100 mg + Pyridoxine HCl 3 mg Tablets',
    form: 'Tablets',
    pack: '10 x 10 Tablets',
    indications: [
      'Supports Healthy Nerve Function',
      'Helps Relieve Nerve Pain & Tingling',
      'Reduces Oxidative Stress',
    ],
    divisions: ['neuro-psychiatric','gynaecology','orthopaedic','anti-microbial'],
    image: '/products/myeloriv-plus.jpg',
  },
  {
    slug: 'osteoriv',
    name: 'OSTEORIV',
    tagline: 'Strong Bones, Stronger Life.',
    composition: 'Calcium Carbonate 1250 mg + Vitamin D3 250 IU + Zinc 7.5 mg Tablets',
    form: 'Tablets',
    pack: '10 x 10 Tablets',
    indications: [
      'Helps in Strong Bones & Teeth',
      'Supports Bone Density',
      'Helps Prevent Osteoporosis',
    ],
    divisions: ['orthopaedic', 'gynaecology', 'nutraceutical-wellness', 'anti-microbial'],
    image: '/products/osteoriv.jpg',
  },
]

export const company = {
  name: 'Rivika Pharma Private Limited',
  tagline: 'Caring Beyond Medicine',
  cin: 'U46497MP2026PTC083099',
  gstin: '23AAPCR7077N1ZK',
  dl: '21B/2508/17/2026',
  fssai: '11426130000051',
  address:
    'B-02 / 702, Tapti Parisar, Phase-01 Sindoda, Pigdamber, Indore, Madhya Pradesh – 453331, India',
  email: 'rivikapharma@gmail.com',
}

export function getProductsByDivision(slug: string) {
  return products.filter((p) => p.divisions.includes(slug))
}

export function getDivision(slug: string) {
  return divisions.find((d) => d.slug === slug)
}
