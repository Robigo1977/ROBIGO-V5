export const SERVICE_PRICES = {
  carpet: {
    minimumCharge: 60,
    bands: [
      { min: 0, max: 49, pricePerSqm: 3 },
      { min: 50, max: 99, pricePerSqm: 2 },
      { min: 100, max: Number.POSITIVE_INFINITY, pricePerSqm: 1.8 },
    ],
  },
  steam: {
    minimumCharge: 50,
    pricePerSqm: 2.5,
  },
  upholstery: {
    armchair: 30,
    diningChair: 10,
    sofa2: 49,
    sofa3: 59,
    sofa4: 69,
    cornerSofa: 79,
  },
  mattress: {
    single: 30,
    double: 40,
    king: 50,
    superKing: 60,
  },
  rugs: {
    small: 20,
    medium: 30,
    large: 40,
    extraLarge: 50,
  },
  extras: {
    petOdour: 20,
    heavyStains: 15,
    priority24: 30,
    emergency: 50,
  },
} as const;
