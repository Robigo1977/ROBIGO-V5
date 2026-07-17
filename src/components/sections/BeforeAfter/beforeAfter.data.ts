export interface BeforeAfterItem {
  id: number;
  title: string;
  category: string;
  description: string;
  location: string;
  service: string;
  beforeImage: string;
  afterImage: string;
}

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: 1,
    title: "Living Room Carpet",
    category: "Carpet Cleaning",
    description:
      "Deep extraction removed embedded dirt, traffic marks and restored the carpet's appearance.",
    location: "Winchester",
    service: "Deep Carpet Cleaning",
    beforeImage: "/images/before-after/carpet-before.webp",
    afterImage: "/images/before-after/carpet-after.webp",
  },
  {
    id: 2,
    title: "Corner Sofa",
    category: "Upholstery Cleaning",
    description:
      "Professional upholstery cleaning removed stains and refreshed the fabric.",
    location: "Eastleigh",
    service: "Upholstery Cleaning",
    beforeImage: "/images/before-after/sofa-before.webp",
    afterImage: "/images/before-after/sofa-after.webp",
  },
  {
    id: 3,
    title: "Bedroom Carpet",
    category: "Carpet Cleaning",
    description:
      "Deep cleaned to remove everyday dirt and leave the carpet fresh and hygienic.",
    location: "King's Worthy",
    service: "Carpet Cleaning",
    beforeImage: "/images/before-after/bedroom-before.webp",
    afterImage: "/images/before-after/bedroom-after.webp",
  },
];