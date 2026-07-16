export interface BeforeAfterItem {
  id: number;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  location: string;
  category: string;
}

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: 1,
    title: "Living Room Carpet",
    description:
      "Deep extraction removed embedded dirt, revived the fibres and restored the carpet's original appearance.",
    beforeImage: "/images/before-after/carpet-before.jpg",
    afterImage: "/images/before-after/carpet-after.jpg",
    location: "Winchester",
    category: "Carpet Cleaning",
  },
  {
    id: 2,
    title: "Fabric Sofa",
    description:
      "Professional upholstery cleaning removed stains and refreshed the fabric for a cleaner, healthier home.",
    beforeImage: "/images/before-after/sofa-before.jpg",
    afterImage: "/images/before-after/sofa-after.jpg",
    location: "Winchester",
    category: "Upholstery Cleaning",
  },
];