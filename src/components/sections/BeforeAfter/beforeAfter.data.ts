export interface BeforeAfterItem {
  id: number;

  featured: boolean;

  title: string;
  category: string;

  service: string;
  location: string;

  description: string;
  story: string;

  process: {
    inspect: boolean;
    preTreat: boolean;
    steam: boolean;
    extraction: boolean;
  };

  stains: string[];

  beforeImage: string;
  afterImage: string;
}

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: 1,

    featured: true,

    title: "Living Room Carpet Restoration",

    category: "Carpet Cleaning",

    service: "Deep Carpet Cleaning",

    location: "Winchester",

    description:
      "Heavy traffic marks, embedded dirt and dull fibres restored with professional deep extraction cleaning.",

    story:
      "After a full inspection, targeted pre-treatment was applied before high-temperature steam helped loosen embedded contamination. Professional extraction restored the carpet's appearance, leaving it noticeably cleaner, fresher and brighter.",

    process: {
      inspect: true,
      preTreat: true,
      steam: true,
      extraction: true,
    },

    stains: [
      "Traffic Marks",
      "Embedded Dirt",
      "General Soiling",
      "Everyday Wear",
    ],

    beforeImage:
      "/images/before-after/carpet-before.webp",

    afterImage:
      "/images/before-after/carpet-after.webp",
  },

  {
    id: 2,

    featured: false,

    title: "Professional Upholstery Revival",

    category: "Upholstery Cleaning",

    service: "Upholstery Cleaning",

    location: "Eastleigh",

    description:
      "Fabric professionally cleaned to remove everyday dirt, refresh colour and improve overall appearance.",

    story:
      "Every fabric requires a different approach. After inspection we selected the safest cleaning method to lift dirt while protecting the material.",

    process: {
      inspect: true,
      preTreat: true,
      steam: false,
      extraction: true,
    },

    stains: [
      "Food Stains",
      "Drink Spills",
      "General Dirt",
    ],

    beforeImage:
      "/images/before-after/sofa-before.webp",

    afterImage:
      "/images/before-after/sofa-after.webp",
  },

  {
    id: 3,

    featured: false,

    title: "Bedroom Carpet Refresh",

    category: "Carpet Cleaning",

    service: "Carpet Cleaning",

    location: "King's Worthy",

    description:
      "Professional deep clean removing everyday dirt, restoring freshness and improving appearance.",

    story:
      "A routine maintenance clean that brought life back to the carpet while removing built-up dirt from daily use.",

    process: {
      inspect: true,
      preTreat: true,
      steam: true,
      extraction: true,
    },

    stains: [
      "Dust",
      "Traffic Marks",
      "General Soiling",
    ],

    beforeImage:
      "/images/before-after/bedroom-before.webp",

    afterImage:
      "/images/before-after/bedroom-after.webp",
  },
];