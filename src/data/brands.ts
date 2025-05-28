export type Brand = {
  id: string;
  name: string;
  mainImage: string;
  brandImage: string;
  description: string;
  categories: string[]; // These should match Tier 1, 2, or 3 names from categories.ts
  deterministicAudience: {
    size: string;
    lookbackWindow: string;
    propensityToPurchase: number;
    averageAge: number;
    genderDistribution: {
      male: number;
      female: number;
      nonSpecified: number;
    };
  };
};

export const brands: Brand[] = [
  {
    id: "8a104296",
    name: "Modern Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Field is a trusted brand known for quality products in Baby and Toddler Products.",
    categories: ["Baby and Toddler Products"],
    deterministicAudience: {
      size: "252.0M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 52,
      averageAge: 27,
      genderDistribution: {
        male: 20,
        female: 24,
        nonSpecified: 56,
      },
    },
  },
  {
    id: "83d62c7f",
    name: "Happy Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Crate is a trusted brand known for quality products in Baby and Toddler Products.",
    categories: ["Baby and Toddler Products"],
    deterministicAudience: {
      size: "122.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 67,
      averageAge: 47,
      genderDistribution: {
        male: 47,
        female: 22,
        nonSpecified: 31,
      },
    },
  },
  {
    id: "b2333708",
    name: "Fresh Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Forge is a trusted brand known for quality products in Baby and Toddler Products.",
    categories: ["Baby and Toddler Products"],
    deterministicAudience: {
      size: "127.7M",
      lookbackWindow: "All Time",
      propensityToPurchase: 54,
      averageAge: 53,
      genderDistribution: {
        male: 21,
        female: 30,
        nonSpecified: 49,
      },
    },
  },
  {
    id: "8076566a",
    name: "Modern Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Forge is a trusted brand known for quality products in Baby Bath & Potty.",
    categories: ["Baby Bath & Potty"],
    deterministicAudience: {
      size: "283.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 35,
      averageAge: 29,
      genderDistribution: {
        male: 45,
        female: 39,
        nonSpecified: 16,
      },
    },
  },
  {
    id: "82103e7f",
    name: "Fresh Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Field is a trusted brand known for quality products in Baby Bath & Potty.",
    categories: ["Baby Bath & Potty"],
    deterministicAudience: {
      size: "26.6M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 42,
      averageAge: 40,
      genderDistribution: {
        male: 36,
        female: 42,
        nonSpecified: 22,
      },
    },
  },
  {
    id: "cedf9ccd",
    name: "Silent Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Crate is a trusted brand known for quality products in Baby Bath & Potty.",
    categories: ["Baby Bath & Potty"],
    deterministicAudience: {
      size: "106.1M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 30,
      averageAge: 27,
      genderDistribution: {
        male: 23,
        female: 60,
        nonSpecified: 17,
      },
    },
  },
  {
    id: "0f192e51",
    name: "Golden Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Harvest is a trusted brand known for quality products in Baby Furniture, Bedding & Decor.",
    categories: ["Baby Furniture, Bedding & Decor"],
    deterministicAudience: {
      size: "217.1M",
      lookbackWindow: "All Time",
      propensityToPurchase: 81,
      averageAge: 54,
      genderDistribution: {
        male: 38,
        female: 22,
        nonSpecified: 40,
      },
    },
  },
  {
    id: "bf1411ef",
    name: "Urban Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Stream is a trusted brand known for quality products in Baby Furniture, Bedding & Decor.",
    categories: ["Baby Furniture, Bedding & Decor"],
    deterministicAudience: {
      size: "194.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 89,
      averageAge: 59,
      genderDistribution: {
        male: 30,
        female: 38,
        nonSpecified: 32,
      },
    },
  },
  {
    id: "a4e6b8da",
    name: "Green Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Harvest is a trusted brand known for quality products in Baby Furniture, Bedding & Decor.",
    categories: ["Baby Furniture, Bedding & Decor"],
    deterministicAudience: {
      size: "134.4M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 83,
      averageAge: 39,
      genderDistribution: {
        male: 25,
        female: 28,
        nonSpecified: 47,
      },
    },
  },
  {
    id: "c112269c",
    name: "Fresh Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Roots is a trusted brand known for quality products in Baby Health & Safety.",
    categories: ["Baby Health & Safety"],
    deterministicAudience: {
      size: "431.5M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 51,
      averageAge: 35,
      genderDistribution: {
        male: 43,
        female: 46,
        nonSpecified: 11,
      },
    },
  },
  {
    id: "7b4c91a4",
    name: "Happy Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Nest is a trusted brand known for quality products in Baby Health & Safety.",
    categories: ["Baby Health & Safety"],
    deterministicAudience: {
      size: "398.4M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 51,
      averageAge: 43,
      genderDistribution: {
        male: 40,
        female: 40,
        nonSpecified: 20,
      },
    },
  },
  {
    id: "1d27bd4b",
    name: "Urban Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Crate is a trusted brand known for quality products in Baby Health & Safety.",
    categories: ["Baby Health & Safety"],
    deterministicAudience: {
      size: "441.0M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 63,
      averageAge: 39,
      genderDistribution: {
        male: 29,
        female: 54,
        nonSpecified: 17,
      },
    },
  },
  {
    id: "14de35e4",
    name: "Peak Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Nest is a trusted brand known for quality products in Baby Travel Equipment.",
    categories: ["Baby Travel Equipment"],
    deterministicAudience: {
      size: "441.4M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 30,
      averageAge: 21,
      genderDistribution: {
        male: 23,
        female: 22,
        nonSpecified: 55,
      },
    },
  },
  {
    id: "8321ae3b",
    name: "Lush Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Wave is a trusted brand known for quality products in Baby Travel Equipment.",
    categories: ["Baby Travel Equipment"],
    deterministicAudience: {
      size: "110.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 91,
      averageAge: 39,
      genderDistribution: {
        male: 51,
        female: 28,
        nonSpecified: 21,
      },
    },
  },
  {
    id: "1b5e53eb",
    name: "Golden Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Lab is a trusted brand known for quality products in Diapers.",
    categories: ["Diapers"],
    deterministicAudience: {
      size: "327.5M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 99,
      averageAge: 55,
      genderDistribution: {
        male: 43,
        female: 40,
        nonSpecified: 17,
      },
    },
  },
  {
    id: "c69350b8",
    name: "Green Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Crate is a trusted brand known for quality products in Diapers.",
    categories: ["Diapers"],
    deterministicAudience: {
      size: "384.0M",
      lookbackWindow: "All Time",
      propensityToPurchase: 59,
      averageAge: 30,
      genderDistribution: {
        male: 59,
        female: 28,
        nonSpecified: 13,
      },
    },
  },
  {
    id: "3995e6bb",
    name: "Modern Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Grove is a trusted brand known for quality products in Nursing and Feeding Products.",
    categories: ["Nursing and Feeding Products"],
    deterministicAudience: {
      size: "496.4M",
      lookbackWindow: "All Time",
      propensityToPurchase: 46,
      averageAge: 42,
      genderDistribution: {
        male: 24,
        female: 56,
        nonSpecified: 20,
      },
    },
  },
  {
    id: "82010bee",
    name: "Fresh Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Lab is a trusted brand known for quality products in Nursing and Feeding Products.",
    categories: ["Nursing and Feeding Products"],
    deterministicAudience: {
      size: "294.6M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 54,
      averageAge: 27,
      genderDistribution: {
        male: 41,
        female: 26,
        nonSpecified: 33,
      },
    },
  },
  {
    id: "e60cbe59",
    name: "Golden Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Field is a trusted brand known for quality products in Nursing and Feeding Products.",
    categories: ["Nursing and Feeding Products"],
    deterministicAudience: {
      size: "344.1M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 83,
      averageAge: 56,
      genderDistribution: {
        male: 59,
        female: 39,
        nonSpecified: 2,
      },
    },
  },
  {
    id: "ddadefb0",
    name: "Silent Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Wave is a trusted brand known for quality products in Back to School Supplies.",
    categories: ["Back to School Supplies"],
    deterministicAudience: {
      size: "452.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 84,
      averageAge: 41,
      genderDistribution: {
        male: 37,
        female: 45,
        nonSpecified: 18,
      },
    },
  },
  {
    id: "9f8e6ab4",
    name: "Lush Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Grove is a trusted brand known for quality products in Back to School Supplies.",
    categories: ["Back to School Supplies"],
    deterministicAudience: {
      size: "295.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 89,
      averageAge: 55,
      genderDistribution: {
        male: 58,
        female: 30,
        nonSpecified: 12,
      },
    },
  },
  {
    id: "2f90a1aa",
    name: "Urban Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Roots is a trusted brand known for quality products in Barbeque.",
    categories: ["Barbeque"],
    deterministicAudience: {
      size: "368.3M",
      lookbackWindow: "All Time",
      propensityToPurchase: 60,
      averageAge: 41,
      genderDistribution: {
        male: 34,
        female: 56,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "ef532e5a",
    name: "Golden Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Grove is a trusted brand known for quality products in Barbeque.",
    categories: ["Barbeque"],
    deterministicAudience: {
      size: "492.2M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 72,
      averageAge: 51,
      genderDistribution: {
        male: 55,
        female: 29,
        nonSpecified: 16,
      },
    },
  },
  {
    id: "6f7511cf",
    name: "Peak Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Crate is a trusted brand known for quality products in Barbeque.",
    categories: ["Barbeque"],
    deterministicAudience: {
      size: "383.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 98,
      averageAge: 20,
      genderDistribution: {
        male: 46,
        female: 23,
        nonSpecified: 31,
      },
    },
  },
  {
    id: "0c022cb5",
    name: "Bright Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Wave is a trusted brand known for quality products in Charcoal.",
    categories: ["Charcoal"],
    deterministicAudience: {
      size: "338.6M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 92,
      averageAge: 59,
      genderDistribution: {
        male: 47,
        female: 30,
        nonSpecified: 23,
      },
    },
  },
  {
    id: "781ebc1d",
    name: "Happy Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Wave is a trusted brand known for quality products in Charcoal.",
    categories: ["Charcoal"],
    deterministicAudience: {
      size: "244.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 68,
      averageAge: 30,
      genderDistribution: {
        male: 26,
        female: 23,
        nonSpecified: 51,
      },
    },
  },
  {
    id: "5e4e00da",
    name: "Bright Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Grove is a trusted brand known for quality products in Charcoal.",
    categories: ["Charcoal"],
    deterministicAudience: {
      size: "59.4M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 69,
      averageAge: 37,
      genderDistribution: {
        male: 21,
        female: 56,
        nonSpecified: 23,
      },
    },
  },
  {
    id: "a1e4f228",
    name: "Bright Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Crate is a trusted brand known for quality products in Charcoal Lighter Fluids.",
    categories: ["Charcoal Lighter Fluids"],
    deterministicAudience: {
      size: "28.8M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 58,
      averageAge: 50,
      genderDistribution: {
        male: 37,
        female: 39,
        nonSpecified: 24,
      },
    },
  },
  {
    id: "9447a638",
    name: "Silent Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Grove is a trusted brand known for quality products in Charcoal Lighter Fluids.",
    categories: ["Charcoal Lighter Fluids"],
    deterministicAudience: {
      size: "391.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 40,
      averageAge: 30,
      genderDistribution: {
        male: 37,
        female: 56,
        nonSpecified: 7,
      },
    },
  },
  {
    id: "a29ea957",
    name: "Fresh Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Grove is a trusted brand known for quality products in Beverages.",
    categories: ["Beverages"],
    deterministicAudience: {
      size: "450.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 88,
      averageAge: 44,
      genderDistribution: {
        male: 54,
        female: 36,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "cb31a948",
    name: "Modern Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Nest is a trusted brand known for quality products in Beverages.",
    categories: ["Beverages"],
    deterministicAudience: {
      size: "360.1M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 95,
      averageAge: 27,
      genderDistribution: {
        male: 41,
        female: 40,
        nonSpecified: 19,
      },
    },
  },
  {
    id: "4c38f247",
    name: "Golden Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Roots is a trusted brand known for quality products in Shakes & Smoothies.",
    categories: ["Shakes & Smoothies"],
    deterministicAudience: {
      size: "246.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 80,
      averageAge: 55,
      genderDistribution: {
        male: 49,
        female: 38,
        nonSpecified: 13,
      },
    },
  },
  {
    id: "2f179ee2",
    name: "Green Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Forge is a trusted brand known for quality products in Shakes & Smoothies.",
    categories: ["Shakes & Smoothies"],
    deterministicAudience: {
      size: "18.6M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 69,
      averageAge: 54,
      genderDistribution: {
        male: 23,
        female: 31,
        nonSpecified: 46,
      },
    },
  },
  {
    id: "1b55569a",
    name: "Modern Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Harvest is a trusted brand known for quality products in Sparkling Water, Seltzers & Tonics.",
    categories: ["Sparkling Water, Seltzers & Tonics"],
    deterministicAudience: {
      size: "60.8M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 77,
      averageAge: 37,
      genderDistribution: {
        male: 37,
        female: 57,
        nonSpecified: 6,
      },
    },
  },
  {
    id: "076df1a4",
    name: "Lush Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Roots is a trusted brand known for quality products in Sparkling Water, Seltzers & Tonics.",
    categories: ["Sparkling Water, Seltzers & Tonics"],
    deterministicAudience: {
      size: "188.6M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 92,
      averageAge: 29,
      genderDistribution: {
        male: 32,
        female: 25,
        nonSpecified: 43,
      },
    },
  },
  {
    id: "5c755b80",
    name: "Golden Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Stream is a trusted brand known for quality products in Carbonated Soft Drinks.",
    categories: ["Carbonated Soft Drinks"],
    deterministicAudience: {
      size: "33.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 78,
      averageAge: 62,
      genderDistribution: {
        male: 43,
        female: 40,
        nonSpecified: 17,
      },
    },
  },
  {
    id: "188da409",
    name: "Urban Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Field is a trusted brand known for quality products in Carbonated Soft Drinks.",
    categories: ["Carbonated Soft Drinks"],
    deterministicAudience: {
      size: "73.6M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 57,
      averageAge: 25,
      genderDistribution: {
        male: 41,
        female: 56,
        nonSpecified: 3,
      },
    },
  },
  {
    id: "0c2b2020",
    name: "Lush Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Lab is a trusted brand known for quality products in Carbonated Soft Drinks.",
    categories: ["Carbonated Soft Drinks"],
    deterministicAudience: {
      size: "241.1M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 35,
      averageAge: 54,
      genderDistribution: {
        male: 37,
        female: 44,
        nonSpecified: 19,
      },
    },
  },
  {
    id: "9fd91d01",
    name: "Lush Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Stream is a trusted brand known for quality products in Coffee and Tea.",
    categories: ["Coffee and Tea"],
    deterministicAudience: {
      size: "239.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 84,
      averageAge: 52,
      genderDistribution: {
        male: 48,
        female: 39,
        nonSpecified: 13,
      },
    },
  },
  {
    id: "aa145527",
    name: "Silent Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Roots is a trusted brand known for quality products in Coffee and Tea.",
    categories: ["Coffee and Tea"],
    deterministicAudience: {
      size: "396.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 49,
      averageAge: 38,
      genderDistribution: {
        male: 32,
        female: 21,
        nonSpecified: 47,
      },
    },
  },
  {
    id: "674142ed",
    name: "Urban Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Wave is a trusted brand known for quality products in Drink Mixes.",
    categories: ["Drink Mixes"],
    deterministicAudience: {
      size: "264.9M",
      lookbackWindow: "All Time",
      propensityToPurchase: 97,
      averageAge: 47,
      genderDistribution: {
        male: 40,
        female: 50,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "99bb8f52",
    name: "Peak Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Forge is a trusted brand known for quality products in Drink Mixes.",
    categories: ["Drink Mixes"],
    deterministicAudience: {
      size: "422.0M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 64,
      averageAge: 31,
      genderDistribution: {
        male: 56,
        female: 31,
        nonSpecified: 13,
      },
    },
  },
  {
    id: "3cc98bc2",
    name: "Silent Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Stream is a trusted brand known for quality products in Juices.",
    categories: ["Juices"],
    deterministicAudience: {
      size: "296.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 55,
      averageAge: 35,
      genderDistribution: {
        male: 43,
        female: 22,
        nonSpecified: 35,
      },
    },
  },
  {
    id: "76d8f0a8",
    name: "Bright Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Stream is a trusted brand known for quality products in Juices.",
    categories: ["Juices"],
    deterministicAudience: {
      size: "130.1M",
      lookbackWindow: "All Time",
      propensityToPurchase: 67,
      averageAge: 45,
      genderDistribution: {
        male: 31,
        female: 58,
        nonSpecified: 11,
      },
    },
  },
  {
    id: "a2b4a856",
    name: "Fresh Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Wave is a trusted brand known for quality products in Juices.",
    categories: ["Juices"],
    deterministicAudience: {
      size: "24.9M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 94,
      averageAge: 46,
      genderDistribution: {
        male: 39,
        female: 56,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "425c220d",
    name: "Bright Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Roots is a trusted brand known for quality products in Sports/Energy Drinks.",
    categories: ["Sports/Energy Drinks"],
    deterministicAudience: {
      size: "262.1M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 51,
      averageAge: 65,
      genderDistribution: {
        male: 43,
        female: 49,
        nonSpecified: 8,
      },
    },
  },
  {
    id: "42978ce5",
    name: "Green Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Roots is a trusted brand known for quality products in Sports/Energy Drinks.",
    categories: ["Sports/Energy Drinks"],
    deterministicAudience: {
      size: "31.6M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 58,
      averageAge: 40,
      genderDistribution: {
        male: 56,
        female: 30,
        nonSpecified: 14,
      },
    },
  },
  {
    id: "b27e94bf",
    name: "Peak Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Harvest is a trusted brand known for quality products in Sports/Energy Drinks.",
    categories: ["Sports/Energy Drinks"],
    deterministicAudience: {
      size: "73.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 31,
      averageAge: 48,
      genderDistribution: {
        male: 57,
        female: 32,
        nonSpecified: 11,
      },
    },
  },
  {
    id: "9338acd4",
    name: "Bright Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Forge is a trusted brand known for quality products in Water.",
    categories: ["Water"],
    deterministicAudience: {
      size: "211.6M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 85,
      averageAge: 51,
      genderDistribution: {
        male: 56,
        female: 45,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "2e4c4829",
    name: "Golden Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Wave is a trusted brand known for quality products in Water.",
    categories: ["Water"],
    deterministicAudience: {
      size: "177.5M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 96,
      averageAge: 45,
      genderDistribution: {
        male: 50,
        female: 34,
        nonSpecified: 16,
      },
    },
  },
  {
    id: "a882af01",
    name: "Fresh Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Stream is a trusted brand known for quality products in Water.",
    categories: ["Water"],
    deterministicAudience: {
      size: "310.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 87,
      averageAge: 23,
      genderDistribution: {
        male: 23,
        female: 31,
        nonSpecified: 46,
      },
    },
  },
  {
    id: "740455d6",
    name: "Happy Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Field is a trusted brand known for quality products in Cosmetics.",
    categories: ["Cosmetics"],
    deterministicAudience: {
      size: "394.3M",
      lookbackWindow: "All Time",
      propensityToPurchase: 65,
      averageAge: 36,
      genderDistribution: {
        male: 31,
        female: 55,
        nonSpecified: 14,
      },
    },
  },
  {
    id: "b03a98d3",
    name: "Happy Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Stream is a trusted brand known for quality products in Cosmetics.",
    categories: ["Cosmetics"],
    deterministicAudience: {
      size: "194.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 47,
      averageAge: 53,
      genderDistribution: {
        male: 34,
        female: 43,
        nonSpecified: 23,
      },
    },
  },
  {
    id: "db6e52ea",
    name: "Happy Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Lab is a trusted brand known for quality products in Cosmetics Accessories.",
    categories: ["Cosmetics Accessories"],
    deterministicAudience: {
      size: "284.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 94,
      averageAge: 23,
      genderDistribution: {
        male: 44,
        female: 58,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "0354bb5c",
    name: "Peak Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Stream is a trusted brand known for quality products in Cosmetics Accessories.",
    categories: ["Cosmetics Accessories"],
    deterministicAudience: {
      size: "152.4M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 58,
      averageAge: 32,
      genderDistribution: {
        male: 50,
        female: 22,
        nonSpecified: 28,
      },
    },
  },
  {
    id: "94e0f907",
    name: "Urban Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Lab is a trusted brand known for quality products in Cosmetics Accessories.",
    categories: ["Cosmetics Accessories"],
    deterministicAudience: {
      size: "174.0M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 37,
      averageAge: 56,
      genderDistribution: {
        male: 52,
        female: 44,
        nonSpecified: 4,
      },
    },
  },
  {
    id: "cd25e6de",
    name: "Golden Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Nest is a trusted brand known for quality products in Cosmetics-Nail.",
    categories: ["Cosmetics-Nail"],
    deterministicAudience: {
      size: "155.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 97,
      averageAge: 33,
      genderDistribution: {
        male: 32,
        female: 30,
        nonSpecified: 38,
      },
    },
  },
  {
    id: "3d2c8b37",
    name: "Green Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Field is a trusted brand known for quality products in Cosmetics-Nail.",
    categories: ["Cosmetics-Nail"],
    deterministicAudience: {
      size: "177.6M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 30,
      averageAge: 62,
      genderDistribution: {
        male: 58,
        female: 42,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "28f7c81e",
    name: "Modern Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Wave is a trusted brand known for quality products in Cosmetics-Nail.",
    categories: ["Cosmetics-Nail"],
    deterministicAudience: {
      size: "496.6M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 86,
      averageAge: 30,
      genderDistribution: {
        male: 41,
        female: 33,
        nonSpecified: 26,
      },
    },
  },
  {
    id: "bcc6c7fa",
    name: "Urban Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Grove is a trusted brand known for quality products in Eye.",
    categories: ["Eye"],
    deterministicAudience: {
      size: "180.7M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 100,
      averageAge: 32,
      genderDistribution: {
        male: 40,
        female: 57,
        nonSpecified: 3,
      },
    },
  },
  {
    id: "89ee37d9",
    name: "Lush Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Field is a trusted brand known for quality products in Eye.",
    categories: ["Eye"],
    deterministicAudience: {
      size: "75.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 63,
      averageAge: 20,
      genderDistribution: {
        male: 54,
        female: 35,
        nonSpecified: 11,
      },
    },
  },
  {
    id: "60fea0c9",
    name: "Modern Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Lab is a trusted brand known for quality products in Eye.",
    categories: ["Eye"],
    deterministicAudience: {
      size: "261.6M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 61,
      averageAge: 46,
      genderDistribution: {
        male: 56,
        female: 59,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "6a04e2c0",
    name: "Green Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Stream is a trusted brand known for quality products in Facial.",
    categories: ["Facial"],
    deterministicAudience: {
      size: "272.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 49,
      averageAge: 24,
      genderDistribution: {
        male: 42,
        female: 38,
        nonSpecified: 20,
      },
    },
  },
  {
    id: "13bd5f9d",
    name: "Modern Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Roots is a trusted brand known for quality products in Facial.",
    categories: ["Facial"],
    deterministicAudience: {
      size: "405.7M",
      lookbackWindow: "All Time",
      propensityToPurchase: 78,
      averageAge: 55,
      genderDistribution: {
        male: 22,
        female: 37,
        nonSpecified: 41,
      },
    },
  },
  {
    id: "6d7c3d48",
    name: "Silent Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Forge is a trusted brand known for quality products in Facial.",
    categories: ["Facial"],
    deterministicAudience: {
      size: "342.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 81,
      averageAge: 56,
      genderDistribution: {
        male: 22,
        female: 42,
        nonSpecified: 36,
      },
    },
  },
  {
    id: "24f9edf4",
    name: "Urban Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Nest is a trusted brand known for quality products in Lip.",
    categories: ["Lip"],
    deterministicAudience: {
      size: "180.6M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 31,
      averageAge: 58,
      genderDistribution: {
        male: 51,
        female: 33,
        nonSpecified: 16,
      },
    },
  },
  {
    id: "c237e280",
    name: "Lush Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Nest is a trusted brand known for quality products in Lip.",
    categories: ["Lip"],
    deterministicAudience: {
      size: "415.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 50,
      averageAge: 41,
      genderDistribution: {
        male: 26,
        female: 35,
        nonSpecified: 39,
      },
    },
  },
  {
    id: "4df7e91d",
    name: "Fresh Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Harvest is a trusted brand known for quality products in Storage.",
    categories: ["Storage"],
    deterministicAudience: {
      size: "121.8M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 90,
      averageAge: 64,
      genderDistribution: {
        male: 35,
        female: 49,
        nonSpecified: 16,
      },
    },
  },
  {
    id: "19ff5560",
    name: "Peak Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Lab is a trusted brand known for quality products in Storage.",
    categories: ["Storage"],
    deterministicAudience: {
      size: "115.2M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 48,
      averageAge: 62,
      genderDistribution: {
        male: 57,
        female: 20,
        nonSpecified: 23,
      },
    },
  },
  {
    id: "bc57ceb4",
    name: "Silent Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Lab is a trusted brand known for quality products in Storage.",
    categories: ["Storage"],
    deterministicAudience: {
      size: "206.3M",
      lookbackWindow: "All Time",
      propensityToPurchase: 83,
      averageAge: 50,
      genderDistribution: {
        male: 42,
        female: 45,
        nonSpecified: 13,
      },
    },
  },
  {
    id: "48696a7a",
    name: "Happy Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Forge is a trusted brand known for quality products in Disposable Tableware.",
    categories: ["Disposable Tableware"],
    deterministicAudience: {
      size: "217.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 86,
      averageAge: 32,
      genderDistribution: {
        male: 49,
        female: 20,
        nonSpecified: 31,
      },
    },
  },
  {
    id: "6b5ab0fd",
    name: "Bright Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Nest is a trusted brand known for quality products in Disposable Tableware.",
    categories: ["Disposable Tableware"],
    deterministicAudience: {
      size: "369.8M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 87,
      averageAge: 58,
      genderDistribution: {
        male: 59,
        female: 21,
        nonSpecified: 20,
      },
    },
  },
  {
    id: "8412c673",
    name: "Silent Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Field is a trusted brand known for quality products in Cups and Plates.",
    categories: ["Cups and Plates"],
    deterministicAudience: {
      size: "339.5M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 54,
      averageAge: 53,
      genderDistribution: {
        male: 35,
        female: 20,
        nonSpecified: 45,
      },
    },
  },
  {
    id: "e1a0636c",
    name: "Lush Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Crate is a trusted brand known for quality products in Cups and Plates.",
    categories: ["Cups and Plates"],
    deterministicAudience: {
      size: "78.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 56,
      averageAge: 57,
      genderDistribution: {
        male: 48,
        female: 49,
        nonSpecified: 3,
      },
    },
  },
  {
    id: "e4ad2afb",
    name: "Lush Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Harvest is a trusted brand known for quality products in Disposable Tableware.",
    categories: ["Disposable Tableware"],
    deterministicAudience: {
      size: "195.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 84,
      averageAge: 53,
      genderDistribution: {
        male: 36,
        female: 30,
        nonSpecified: 34,
      },
    },
  },
  {
    id: "2422a33b",
    name: "Bright Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Lab is a trusted brand known for quality products in Disposable Tableware.",
    categories: ["Disposable Tableware"],
    deterministicAudience: {
      size: "33.4M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 96,
      averageAge: 39,
      genderDistribution: {
        male: 50,
        female: 56,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "736f96f4",
    name: "Green Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Nest is a trusted brand known for quality products in Disposable Tableware.",
    categories: ["Disposable Tableware"],
    deterministicAudience: {
      size: "73.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 66,
      averageAge: 45,
      genderDistribution: {
        male: 35,
        female: 27,
        nonSpecified: 38,
      },
    },
  },
  {
    id: "3c85de7b",
    name: "Bright Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Field is a trusted brand known for quality products in Foils, Wraps, and Bags.",
    categories: ["Foils, Wraps, and Bags"],
    deterministicAudience: {
      size: "140.9M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 84,
      averageAge: 52,
      genderDistribution: {
        male: 34,
        female: 21,
        nonSpecified: 45,
      },
    },
  },
  {
    id: "5cca293c",
    name: "Peak Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Roots is a trusted brand known for quality products in Foils, Wraps, and Bags.",
    categories: ["Foils, Wraps, and Bags"],
    deterministicAudience: {
      size: "27.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 45,
      averageAge: 58,
      genderDistribution: {
        male: 32,
        female: 33,
        nonSpecified: 35,
      },
    },
  },
  {
    id: "8a437dbb",
    name: "Urban Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Forge is a trusted brand known for quality products in Foil Pans.",
    categories: ["Foil Pans"],
    deterministicAudience: {
      size: "487.0M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 67,
      averageAge: 32,
      genderDistribution: {
        male: 30,
        female: 44,
        nonSpecified: 26,
      },
    },
  },
  {
    id: "320abe90",
    name: "Peak Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Wave is a trusted brand known for quality products in Foil Pans.",
    categories: ["Foil Pans"],
    deterministicAudience: {
      size: "397.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 71,
      averageAge: 53,
      genderDistribution: {
        male: 20,
        female: 23,
        nonSpecified: 57,
      },
    },
  },
  {
    id: "bc3375e0",
    name: "Happy Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Grove is a trusted brand known for quality products in Foil Pans.",
    categories: ["Foil Pans"],
    deterministicAudience: {
      size: "476.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 78,
      averageAge: 45,
      genderDistribution: {
        male: 20,
        female: 34,
        nonSpecified: 46,
      },
    },
  },
  {
    id: "fb3e88de",
    name: "Silent Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Nest is a trusted brand known for quality products in Foils and Wraps.",
    categories: ["Foils and Wraps"],
    deterministicAudience: {
      size: "371.6M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 30,
      averageAge: 40,
      genderDistribution: {
        male: 46,
        female: 38,
        nonSpecified: 16,
      },
    },
  },
  {
    id: "3bfdd31f",
    name: "Golden Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Crate is a trusted brand known for quality products in Foils and Wraps.",
    categories: ["Foils and Wraps"],
    deterministicAudience: {
      size: "470.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 58,
      averageAge: 39,
      genderDistribution: {
        male: 34,
        female: 22,
        nonSpecified: 44,
      },
    },
  },
  {
    id: "4ce12de8",
    name: "Urban Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Harvest is a trusted brand known for quality products in Foils and Wraps.",
    categories: ["Foils and Wraps"],
    deterministicAudience: {
      size: "58.2M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 89,
      averageAge: 54,
      genderDistribution: {
        male: 23,
        female: 60,
        nonSpecified: 17,
      },
    },
  },
  {
    id: "c37d104b",
    name: "Modern Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Stream is a trusted brand known for quality products in Food and Trash Bags.",
    categories: ["Food and Trash Bags"],
    deterministicAudience: {
      size: "255.1M",
      lookbackWindow: "All Time",
      propensityToPurchase: 69,
      averageAge: 54,
      genderDistribution: {
        male: 51,
        female: 60,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "5ed20a64",
    name: "Lush Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Forge is a trusted brand known for quality products in Food and Trash Bags.",
    categories: ["Food and Trash Bags"],
    deterministicAudience: {
      size: "109.6M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 71,
      averageAge: 29,
      genderDistribution: {
        male: 20,
        female: 54,
        nonSpecified: 26,
      },
    },
  },
  {
    id: "47b9823d",
    name: "Happy Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Harvest is a trusted brand known for quality products in Food and Trash Bags.",
    categories: ["Food and Trash Bags"],
    deterministicAudience: {
      size: "35.7M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 59,
      averageAge: 51,
      genderDistribution: {
        male: 29,
        female: 52,
        nonSpecified: 19,
      },
    },
  },
  {
    id: "113091ae",
    name: "Green Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Lab is a trusted brand known for quality products in Fragrance.",
    categories: ["Fragrance"],
    deterministicAudience: {
      size: "106.8M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 93,
      averageAge: 60,
      genderDistribution: {
        male: 29,
        female: 33,
        nonSpecified: 38,
      },
    },
  },
  {
    id: "104287a2",
    name: "Peak Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Grove is a trusted brand known for quality products in Fragrance.",
    categories: ["Fragrance"],
    deterministicAudience: {
      size: "203.2M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 49,
      averageAge: 57,
      genderDistribution: {
        male: 31,
        female: 42,
        nonSpecified: 27,
      },
    },
  },
  {
    id: "274e671f",
    name: "Silent Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Forge is a trusted brand known for quality products in Fragrances - Women's.",
    categories: ["Fragrances - Women's"],
    deterministicAudience: {
      size: "29.1M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 36,
      averageAge: 46,
      genderDistribution: {
        male: 60,
        female: 36,
        nonSpecified: 4,
      },
    },
  },
  {
    id: "10436843",
    name: "Golden Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Forge is a trusted brand known for quality products in Fragrances - Women's.",
    categories: ["Fragrances - Women's"],
    deterministicAudience: {
      size: "236.4M",
      lookbackWindow: "All Time",
      propensityToPurchase: 83,
      averageAge: 45,
      genderDistribution: {
        male: 52,
        female: 60,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "24d90481",
    name: "Modern Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Crate is a trusted brand known for quality products in Fragrances - Women's.",
    categories: ["Fragrances - Women's"],
    deterministicAudience: {
      size: "172.2M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 49,
      averageAge: 32,
      genderDistribution: {
        male: 48,
        female: 43,
        nonSpecified: 9,
      },
    },
  },
  {
    id: "7167017e",
    name: "Peak Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Crate is a trusted brand known for quality products in Shaving Lotion/Men's Fragrance.",
    categories: ["Shaving Lotion/Men's Fragrance"],
    deterministicAudience: {
      size: "23.7M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 95,
      averageAge: 23,
      genderDistribution: {
        male: 27,
        female: 46,
        nonSpecified: 27,
      },
    },
  },
  {
    id: "a3254dbb",
    name: "Peak Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Wave is a trusted brand known for quality products in Shaving Lotion/Men's Fragrance.",
    categories: ["Shaving Lotion/Men's Fragrance"],
    deterministicAudience: {
      size: "221.1M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 84,
      averageAge: 22,
      genderDistribution: {
        male: 27,
        female: 52,
        nonSpecified: 21,
      },
    },
  },
  {
    id: "5665cb40",
    name: "Green Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Grove is a trusted brand known for quality products in Frozen.",
    categories: ["Frozen"],
    deterministicAudience: {
      size: "495.3M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 91,
      averageAge: 62,
      genderDistribution: {
        male: 49,
        female: 30,
        nonSpecified: 21,
      },
    },
  },
  {
    id: "37d68c2e",
    name: "Peak Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Forge is a trusted brand known for quality products in Frozen.",
    categories: ["Frozen"],
    deterministicAudience: {
      size: "392.9M",
      lookbackWindow: "All Time",
      propensityToPurchase: 63,
      averageAge: 35,
      genderDistribution: {
        male: 44,
        female: 48,
        nonSpecified: 8,
      },
    },
  },
  {
    id: "5274a3b5",
    name: "Fresh Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Nest is a trusted brand known for quality products in Frozen.",
    categories: ["Frozen"],
    deterministicAudience: {
      size: "37.8M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 47,
      averageAge: 41,
      genderDistribution: {
        male: 38,
        female: 24,
        nonSpecified: 38,
      },
    },
  },
  {
    id: "8e5bb8e3",
    name: "Green Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Wave is a trusted brand known for quality products in Frozen Pizza.",
    categories: ["Frozen Pizza"],
    deterministicAudience: {
      size: "154.4M",
      lookbackWindow: "All Time",
      propensityToPurchase: 90,
      averageAge: 25,
      genderDistribution: {
        male: 59,
        female: 23,
        nonSpecified: 18,
      },
    },
  },
  {
    id: "d9135d30",
    name: "Happy Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Roots is a trusted brand known for quality products in Frozen Pizza.",
    categories: ["Frozen Pizza"],
    deterministicAudience: {
      size: "107.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 69,
      averageAge: 23,
      genderDistribution: {
        male: 30,
        female: 42,
        nonSpecified: 28,
      },
    },
  },
  {
    id: "23f8b488",
    name: "Peak Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Field is a trusted brand known for quality products in Ice.",
    categories: ["Ice"],
    deterministicAudience: {
      size: "183.1M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 67,
      averageAge: 53,
      genderDistribution: {
        male: 45,
        female: 39,
        nonSpecified: 16,
      },
    },
  },
  {
    id: "a614c8ff",
    name: "Lush Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Grove is a trusted brand known for quality products in Ice.",
    categories: ["Ice"],
    deterministicAudience: {
      size: "466.9M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 98,
      averageAge: 46,
      genderDistribution: {
        male: 59,
        female: 53,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "197f7688",
    name: "Fresh Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Crate is a trusted brand known for quality products in Ice.",
    categories: ["Ice"],
    deterministicAudience: {
      size: "145.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 33,
      averageAge: 28,
      genderDistribution: {
        male: 29,
        female: 38,
        nonSpecified: 33,
      },
    },
  },
  {
    id: "c4be8d5f",
    name: "Bright Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Harvest is a trusted brand known for quality products in Frozen Meat Alternatives.",
    categories: ["Frozen Meat Alternatives"],
    deterministicAudience: {
      size: "487.6M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 48,
      averageAge: 64,
      genderDistribution: {
        male: 22,
        female: 37,
        nonSpecified: 41,
      },
    },
  },
  {
    id: "6da91b2d",
    name: "Happy Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Stream is a trusted brand known for quality products in Frozen Meat Alternatives.",
    categories: ["Frozen Meat Alternatives"],
    deterministicAudience: {
      size: "11.7M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 51,
      averageAge: 65,
      genderDistribution: {
        male: 57,
        female: 59,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "b1f2b6fe",
    name: "Silent Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Harvest is a trusted brand known for quality products in Frozen Baked Goods.",
    categories: ["Frozen Baked Goods"],
    deterministicAudience: {
      size: "73.3M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 88,
      averageAge: 20,
      genderDistribution: {
        male: 20,
        female: 44,
        nonSpecified: 36,
      },
    },
  },
  {
    id: "c10be786",
    name: "Bright Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Wave is a trusted brand known for quality products in Frozen Baked Goods.",
    categories: ["Frozen Baked Goods"],
    deterministicAudience: {
      size: "69.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 46,
      averageAge: 33,
      genderDistribution: {
        male: 49,
        female: 44,
        nonSpecified: 7,
      },
    },
  },
  {
    id: "a86581cd",
    name: "Urban Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Wave is a trusted brand known for quality products in Frozen Beverages.",
    categories: ["Frozen Beverages"],
    deterministicAudience: {
      size: "279.0M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 36,
      averageAge: 38,
      genderDistribution: {
        male: 33,
        female: 45,
        nonSpecified: 22,
      },
    },
  },
  {
    id: "69b651fb",
    name: "Lush Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Harvest is a trusted brand known for quality products in Frozen Beverages.",
    categories: ["Frozen Beverages"],
    deterministicAudience: {
      size: "217.1M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 30,
      averageAge: 50,
      genderDistribution: {
        male: 23,
        female: 57,
        nonSpecified: 20,
      },
    },
  },
  {
    id: "fd803a36",
    name: "Lush Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Field is a trusted brand known for quality products in Frozen Desserts.",
    categories: ["Frozen Desserts"],
    deterministicAudience: {
      size: "40.8M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 69,
      averageAge: 63,
      genderDistribution: {
        male: 26,
        female: 39,
        nonSpecified: 35,
      },
    },
  },
  {
    id: "dfe96b9e",
    name: "Happy Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Nest is a trusted brand known for quality products in Frozen Desserts.",
    categories: ["Frozen Desserts"],
    deterministicAudience: {
      size: "454.2M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 96,
      averageAge: 31,
      genderDistribution: {
        male: 41,
        female: 24,
        nonSpecified: 35,
      },
    },
  },
  {
    id: "438d815d",
    name: "Bright Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Grove is a trusted brand known for quality products in Frozen Desserts.",
    categories: ["Frozen Desserts"],
    deterministicAudience: {
      size: "49.5M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 60,
      averageAge: 22,
      genderDistribution: {
        male: 41,
        female: 30,
        nonSpecified: 29,
      },
    },
  },
  {
    id: "688b3802",
    name: "Happy Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Stream is a trusted brand known for quality products in Frozen Fruits and Vegetables.",
    categories: ["Frozen Fruits and Vegetables"],
    deterministicAudience: {
      size: "343.3M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 64,
      averageAge: 38,
      genderDistribution: {
        male: 40,
        female: 56,
        nonSpecified: 4,
      },
    },
  },
  {
    id: "841cd227",
    name: "Bright Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Grove is a trusted brand known for quality products in Frozen Fruits and Vegetables.",
    categories: ["Frozen Fruits and Vegetables"],
    deterministicAudience: {
      size: "389.3M",
      lookbackWindow: "All Time",
      propensityToPurchase: 92,
      averageAge: 21,
      genderDistribution: {
        male: 31,
        female: 32,
        nonSpecified: 37,
      },
    },
  },
  {
    id: "ebfc3290",
    name: "Urban Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Wave is a trusted brand known for quality products in Frozen Juices.",
    categories: ["Frozen Juices"],
    deterministicAudience: {
      size: "160.8M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 69,
      averageAge: 52,
      genderDistribution: {
        male: 58,
        female: 29,
        nonSpecified: 13,
      },
    },
  },
  {
    id: "14265774",
    name: "Silent Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Stream is a trusted brand known for quality products in Frozen Juices.",
    categories: ["Frozen Juices"],
    deterministicAudience: {
      size: "485.1M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 49,
      averageAge: 20,
      genderDistribution: {
        male: 43,
        female: 57,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "71721e94",
    name: "Silent Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Wave is a trusted brand known for quality products in Frozen Meals.",
    categories: ["Frozen Meals"],
    deterministicAudience: {
      size: "252.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 41,
      averageAge: 45,
      genderDistribution: {
        male: 45,
        female: 57,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "c59a54af",
    name: "Bright Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Stream is a trusted brand known for quality products in Frozen Meals.",
    categories: ["Frozen Meals"],
    deterministicAudience: {
      size: "195.1M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 35,
      averageAge: 39,
      genderDistribution: {
        male: 58,
        female: 44,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "633042b7",
    name: "Green Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Stream is a trusted brand known for quality products in Frozen Meals.",
    categories: ["Frozen Meals"],
    deterministicAudience: {
      size: "320.9M",
      lookbackWindow: "All Time",
      propensityToPurchase: 61,
      averageAge: 60,
      genderDistribution: {
        male: 21,
        female: 37,
        nonSpecified: 42,
      },
    },
  },
  {
    id: "1c422584",
    name: "Golden Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Field is a trusted brand known for quality products in Frozen Meat/Poultry/Seafood.",
    categories: ["Frozen Meat/Poultry/Seafood"],
    deterministicAudience: {
      size: "355.2M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 34,
      averageAge: 27,
      genderDistribution: {
        male: 43,
        female: 46,
        nonSpecified: 11,
      },
    },
  },
  {
    id: "18cbf6b0",
    name: "Lush Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Grove is a trusted brand known for quality products in Frozen Meat/Poultry/Seafood.",
    categories: ["Frozen Meat/Poultry/Seafood"],
    deterministicAudience: {
      size: "149.6M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 41,
      averageAge: 64,
      genderDistribution: {
        male: 56,
        female: 26,
        nonSpecified: 18,
      },
    },
  },
  {
    id: "b4a5bef4",
    name: "Silent Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Stream is a trusted brand known for quality products in Frozen Snacks.",
    categories: ["Frozen Snacks"],
    deterministicAudience: {
      size: "401.3M",
      lookbackWindow: "All Time",
      propensityToPurchase: 31,
      averageAge: 56,
      genderDistribution: {
        male: 51,
        female: 27,
        nonSpecified: 22,
      },
    },
  },
  {
    id: "409eccd5",
    name: "Modern Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Harvest is a trusted brand known for quality products in Frozen Snacks.",
    categories: ["Frozen Snacks"],
    deterministicAudience: {
      size: "110.1M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 80,
      averageAge: 18,
      genderDistribution: {
        male: 28,
        female: 46,
        nonSpecified: 26,
      },
    },
  },
  {
    id: "3686653e",
    name: "Urban Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Harvest is a trusted brand known for quality products in Other Frozen.",
    categories: ["Other Frozen"],
    deterministicAudience: {
      size: "132.3M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 83,
      averageAge: 26,
      genderDistribution: {
        male: 36,
        female: 56,
        nonSpecified: 8,
      },
    },
  },
  {
    id: "1de79368",
    name: "Happy Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Harvest is a trusted brand known for quality products in Other Frozen.",
    categories: ["Other Frozen"],
    deterministicAudience: {
      size: "355.7M",
      lookbackWindow: "All Time",
      propensityToPurchase: 50,
      averageAge: 60,
      genderDistribution: {
        male: 30,
        female: 52,
        nonSpecified: 18,
      },
    },
  },
  {
    id: "21a0ae66",
    name: "Fresh Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Forge is a trusted brand known for quality products in General Food.",
    categories: ["General Food"],
    deterministicAudience: {
      size: "82.2M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 90,
      averageAge: 42,
      genderDistribution: {
        male: 51,
        female: 47,
        nonSpecified: 2,
      },
    },
  },
  {
    id: "df19d488",
    name: "Golden Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Crate is a trusted brand known for quality products in General Food.",
    categories: ["General Food"],
    deterministicAudience: {
      size: "497.1M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 43,
      averageAge: 18,
      genderDistribution: {
        male: 48,
        female: 31,
        nonSpecified: 21,
      },
    },
  },
  {
    id: "225bf39a",
    name: "Golden Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Harvest is a trusted brand known for quality products in Canned & Packaged.",
    categories: ["Canned & Packaged"],
    deterministicAudience: {
      size: "441.4M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 63,
      averageAge: 56,
      genderDistribution: {
        male: 26,
        female: 25,
        nonSpecified: 49,
      },
    },
  },
  {
    id: "52f6b5d6",
    name: "Silent Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Lab is a trusted brand known for quality products in Canned & Packaged.",
    categories: ["Canned & Packaged"],
    deterministicAudience: {
      size: "130.2M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 90,
      averageAge: 41,
      genderDistribution: {
        male: 30,
        female: 49,
        nonSpecified: 21,
      },
    },
  },
  {
    id: "72605a8d",
    name: "Silent Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Roots is a trusted brand known for quality products in Canned & Packaged.",
    categories: ["Canned & Packaged"],
    deterministicAudience: {
      size: "445.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 93,
      averageAge: 55,
      genderDistribution: {
        male: 43,
        female: 56,
        nonSpecified: 1,
      },
    },
  },
  {
    id: "ad5154b7",
    name: "Silent Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Nest is a trusted brand known for quality products in Beans.",
    categories: ["Beans"],
    deterministicAudience: {
      size: "123.9M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 32,
      genderDistribution: {
        male: 49,
        female: 41,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "59676cfe",
    name: "Green Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Roots is a trusted brand known for quality products in Beans.",
    categories: ["Beans"],
    deterministicAudience: {
      size: "255.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 45,
      averageAge: 43,
      genderDistribution: {
        male: 26,
        female: 27,
        nonSpecified: 47,
      },
    },
  },
  {
    id: "99cf5e59",
    name: "Fresh Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Grove is a trusted brand known for quality products in Canned Meat.",
    categories: ["Canned Meat"],
    deterministicAudience: {
      size: "174.4M",
      lookbackWindow: "All Time",
      propensityToPurchase: 98,
      averageAge: 63,
      genderDistribution: {
        male: 55,
        female: 29,
        nonSpecified: 16,
      },
    },
  },
  {
    id: "ad696229",
    name: "Fresh Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Field is a trusted brand known for quality products in Canned Meat.",
    categories: ["Canned Meat"],
    deterministicAudience: {
      size: "420.9M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 59,
      averageAge: 56,
      genderDistribution: {
        male: 39,
        female: 24,
        nonSpecified: 37,
      },
    },
  },
  {
    id: "a0acd648",
    name: "Lush Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Grove is a trusted brand known for quality products in Dried Beans & Vegetables.",
    categories: ["Dried Beans & Vegetables"],
    deterministicAudience: {
      size: "325.7M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 80,
      averageAge: 61,
      genderDistribution: {
        male: 50,
        female: 37,
        nonSpecified: 13,
      },
    },
  },
  {
    id: "b5940feb",
    name: "Modern Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Wave is a trusted brand known for quality products in Dried Beans & Vegetables.",
    categories: ["Dried Beans & Vegetables"],
    deterministicAudience: {
      size: "418.1M",
      lookbackWindow: "All Time",
      propensityToPurchase: 62,
      averageAge: 50,
      genderDistribution: {
        male: 32,
        female: 32,
        nonSpecified: 36,
      },
    },
  },
  {
    id: "16072db4",
    name: "Peak Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Lab is a trusted brand known for quality products in Dried Beans & Vegetables.",
    categories: ["Dried Beans & Vegetables"],
    deterministicAudience: {
      size: "34.9M",
      lookbackWindow: "All Time",
      propensityToPurchase: 91,
      averageAge: 51,
      genderDistribution: {
        male: 60,
        female: 28,
        nonSpecified: 12,
      },
    },
  },
  {
    id: "50da6159",
    name: "Green Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Wave is a trusted brand known for quality products in Fruit.",
    categories: ["Fruit"],
    deterministicAudience: {
      size: "348.6M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 69,
      averageAge: 37,
      genderDistribution: {
        male: 47,
        female: 58,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "767337ad",
    name: "Green Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Harvest is a trusted brand known for quality products in Fruit.",
    categories: ["Fruit"],
    deterministicAudience: {
      size: "4.4M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 35,
      averageAge: 46,
      genderDistribution: {
        male: 57,
        female: 33,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "083d48c3",
    name: "Lush Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Nest is a trusted brand known for quality products in Fruit.",
    categories: ["Fruit"],
    deterministicAudience: {
      size: "387.4M",
      lookbackWindow: "All Time",
      propensityToPurchase: 48,
      averageAge: 27,
      genderDistribution: {
        male: 26,
        female: 33,
        nonSpecified: 41,
      },
    },
  },
  {
    id: "ed4dae14",
    name: "Bright Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Nest is a trusted brand known for quality products in Soup.",
    categories: ["Soup"],
    deterministicAudience: {
      size: "185.8M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 57,
      averageAge: 27,
      genderDistribution: {
        male: 54,
        female: 34,
        nonSpecified: 12,
      },
    },
  },
  {
    id: "546a8840",
    name: "Green Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Nest is a trusted brand known for quality products in Soup.",
    categories: ["Soup"],
    deterministicAudience: {
      size: "348.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 78,
      averageAge: 38,
      genderDistribution: {
        male: 22,
        female: 50,
        nonSpecified: 28,
      },
    },
  },
  {
    id: "96ab1546",
    name: "Golden Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Nest is a trusted brand known for quality products in Stock & Broths.",
    categories: ["Stock & Broths"],
    deterministicAudience: {
      size: "181.3M",
      lookbackWindow: "All Time",
      propensityToPurchase: 62,
      averageAge: 36,
      genderDistribution: {
        male: 24,
        female: 23,
        nonSpecified: 53,
      },
    },
  },
  {
    id: "6d60b2c8",
    name: "Peak Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Stream is a trusted brand known for quality products in Stock & Broths.",
    categories: ["Stock & Broths"],
    deterministicAudience: {
      size: "489.0M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 41,
      averageAge: 32,
      genderDistribution: {
        male: 56,
        female: 26,
        nonSpecified: 18,
      },
    },
  },
  {
    id: "29c97506",
    name: "Urban Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Forge is a trusted brand known for quality products in Vegetables.",
    categories: ["Vegetables"],
    deterministicAudience: {
      size: "3.4M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 70,
      averageAge: 47,
      genderDistribution: {
        male: 44,
        female: 25,
        nonSpecified: 31,
      },
    },
  },
  {
    id: "ec15c837",
    name: "Green Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Nest is a trusted brand known for quality products in Vegetables.",
    categories: ["Vegetables"],
    deterministicAudience: {
      size: "396.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 37,
      averageAge: 52,
      genderDistribution: {
        male: 58,
        female: 57,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "f8b86328",
    name: "Fresh Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Roots is a trusted brand known for quality products in Pasta, Rice & Grains.",
    categories: ["Pasta, Rice & Grains"],
    deterministicAudience: {
      size: "221.8M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 32,
      averageAge: 19,
      genderDistribution: {
        male: 40,
        female: 43,
        nonSpecified: 17,
      },
    },
  },
  {
    id: "6c0bd218",
    name: "Urban Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Crate is a trusted brand known for quality products in Pasta, Rice & Grains.",
    categories: ["Pasta, Rice & Grains"],
    deterministicAudience: {
      size: "17.6M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 48,
      averageAge: 39,
      genderDistribution: {
        male: 33,
        female: 54,
        nonSpecified: 13,
      },
    },
  },
  {
    id: "47341a8d",
    name: "Silent Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Crate is a trusted brand known for quality products in Baby Food.",
    categories: ["Baby Food"],
    deterministicAudience: {
      size: "306.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 99,
      averageAge: 24,
      genderDistribution: {
        male: 48,
        female: 31,
        nonSpecified: 21,
      },
    },
  },
  {
    id: "0ba41100",
    name: "Silent Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Nest is a trusted brand known for quality products in Baby Food.",
    categories: ["Baby Food"],
    deterministicAudience: {
      size: "469.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 49,
      averageAge: 25,
      genderDistribution: {
        male: 22,
        female: 48,
        nonSpecified: 30,
      },
    },
  },
  {
    id: "1216508a",
    name: "Bright Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Field is a trusted brand known for quality products in Baby Food.",
    categories: ["Baby Food"],
    deterministicAudience: {
      size: "370.0M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 69,
      averageAge: 22,
      genderDistribution: {
        male: 39,
        female: 52,
        nonSpecified: 9,
      },
    },
  },
  {
    id: "954bef6a",
    name: "Golden Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Harvest is a trusted brand known for quality products in Bakery.",
    categories: ["Bakery"],
    deterministicAudience: {
      size: "272.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 36,
      averageAge: 21,
      genderDistribution: {
        male: 20,
        female: 54,
        nonSpecified: 26,
      },
    },
  },
  {
    id: "1d41a450",
    name: "Lush Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Field is a trusted brand known for quality products in Bakery.",
    categories: ["Bakery"],
    deterministicAudience: {
      size: "416.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 49,
      averageAge: 60,
      genderDistribution: {
        male: 46,
        female: 57,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "629c7cb8",
    name: "Bright Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Wave is a trusted brand known for quality products in Bakery.",
    categories: ["Bakery"],
    deterministicAudience: {
      size: "129.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 69,
      averageAge: 59,
      genderDistribution: {
        male: 57,
        female: 44,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "244e5c59",
    name: "Silent Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Field is a trusted brand known for quality products in Bagels.",
    categories: ["Bagels"],
    deterministicAudience: {
      size: "268.0M",
      lookbackWindow: "All Time",
      propensityToPurchase: 55,
      averageAge: 38,
      genderDistribution: {
        male: 41,
        female: 45,
        nonSpecified: 14,
      },
    },
  },
  {
    id: "2db074bf",
    name: "Fresh Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Crate is a trusted brand known for quality products in Bagels.",
    categories: ["Bagels"],
    deterministicAudience: {
      size: "11.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 64,
      averageAge: 27,
      genderDistribution: {
        male: 42,
        female: 23,
        nonSpecified: 35,
      },
    },
  },
  {
    id: "7a89a836",
    name: "Golden Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Harvest is a trusted brand known for quality products in Bagels.",
    categories: ["Bagels"],
    deterministicAudience: {
      size: "16.2M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 31,
      averageAge: 32,
      genderDistribution: {
        male: 34,
        female: 56,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "4db283df",
    name: "Bright Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Lab is a trusted brand known for quality products in Bread.",
    categories: ["Bread"],
    deterministicAudience: {
      size: "304.3M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 83,
      averageAge: 49,
      genderDistribution: {
        male: 49,
        female: 29,
        nonSpecified: 22,
      },
    },
  },
  {
    id: "ee44b0c0",
    name: "Fresh Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Grove is a trusted brand known for quality products in Bread.",
    categories: ["Bread"],
    deterministicAudience: {
      size: "338.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 98,
      averageAge: 36,
      genderDistribution: {
        male: 45,
        female: 34,
        nonSpecified: 21,
      },
    },
  },
  {
    id: "505f8f0e",
    name: "Fresh Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Roots is a trusted brand known for quality products in Cupcakes & Muffins.",
    categories: ["Cupcakes & Muffins"],
    deterministicAudience: {
      size: "305.9M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 38,
      averageAge: 39,
      genderDistribution: {
        male: 47,
        female: 38,
        nonSpecified: 15,
      },
    },
  },
  {
    id: "bacf6ae8",
    name: "Silent Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Nest is a trusted brand known for quality products in Cupcakes & Muffins.",
    categories: ["Cupcakes & Muffins"],
    deterministicAudience: {
      size: "429.4M",
      lookbackWindow: "All Time",
      propensityToPurchase: 37,
      averageAge: 53,
      genderDistribution: {
        male: 42,
        female: 21,
        nonSpecified: 37,
      },
    },
  },
  {
    id: "136b5889",
    name: "Silent Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Roots is a trusted brand known for quality products in English Muffins.",
    categories: ["English Muffins"],
    deterministicAudience: {
      size: "216.3M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 50,
      averageAge: 21,
      genderDistribution: {
        male: 31,
        female: 40,
        nonSpecified: 29,
      },
    },
  },
  {
    id: "9d972f1a",
    name: "Bright Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Crate is a trusted brand known for quality products in English Muffins.",
    categories: ["English Muffins"],
    deterministicAudience: {
      size: "377.9M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 88,
      averageAge: 46,
      genderDistribution: {
        male: 28,
        female: 38,
        nonSpecified: 34,
      },
    },
  },
  {
    id: "174a22d9",
    name: "Green Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Nest is a trusted brand known for quality products in Pastries & Doughnuts.",
    categories: ["Pastries & Doughnuts"],
    deterministicAudience: {
      size: "79.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 92,
      averageAge: 48,
      genderDistribution: {
        male: 35,
        female: 31,
        nonSpecified: 34,
      },
    },
  },
  {
    id: "ac5519fe",
    name: "Fresh Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Crate is a trusted brand known for quality products in Pastries & Doughnuts.",
    categories: ["Pastries & Doughnuts"],
    deterministicAudience: {
      size: "475.1M",
      lookbackWindow: "All Time",
      propensityToPurchase: 69,
      averageAge: 26,
      genderDistribution: {
        male: 43,
        female: 21,
        nonSpecified: 36,
      },
    },
  },
  {
    id: "59b941f0",
    name: "Fresh Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Wave is a trusted brand known for quality products in Pies & Cakes.",
    categories: ["Pies & Cakes"],
    deterministicAudience: {
      size: "24.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 55,
      averageAge: 24,
      genderDistribution: {
        male: 47,
        female: 39,
        nonSpecified: 14,
      },
    },
  },
  {
    id: "b28e247e",
    name: "Urban Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Roots is a trusted brand known for quality products in Pies & Cakes.",
    categories: ["Pies & Cakes"],
    deterministicAudience: {
      size: "440.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 78,
      averageAge: 31,
      genderDistribution: {
        male: 47,
        female: 57,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "c2245bc2",
    name: "Urban Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Forge is a trusted brand known for quality products in Pies & Cakes.",
    categories: ["Pies & Cakes"],
    deterministicAudience: {
      size: "15.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 85,
      averageAge: 34,
      genderDistribution: {
        male: 38,
        female: 24,
        nonSpecified: 38,
      },
    },
  },
  {
    id: "aa1ea161",
    name: "Lush Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Nest is a trusted brand known for quality products in Pizza Crust.",
    categories: ["Pizza Crust"],
    deterministicAudience: {
      size: "390.6M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 32,
      averageAge: 50,
      genderDistribution: {
        male: 37,
        female: 22,
        nonSpecified: 41,
      },
    },
  },
  {
    id: "2dfa8015",
    name: "Golden Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Harvest is a trusted brand known for quality products in Pizza Crust.",
    categories: ["Pizza Crust"],
    deterministicAudience: {
      size: "98.2M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 77,
      averageAge: 63,
      genderDistribution: {
        male: 58,
        female: 55,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "d789d219",
    name: "Golden Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Wave is a trusted brand known for quality products in Tortillas, Pitas & Wraps.",
    categories: ["Tortillas, Pitas & Wraps"],
    deterministicAudience: {
      size: "402.0M",
      lookbackWindow: "All Time",
      propensityToPurchase: 40,
      averageAge: 58,
      genderDistribution: {
        male: 25,
        female: 27,
        nonSpecified: 48,
      },
    },
  },
  {
    id: "fd560fcf",
    name: "Lush Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Roots is a trusted brand known for quality products in Tortillas, Pitas & Wraps.",
    categories: ["Tortillas, Pitas & Wraps"],
    deterministicAudience: {
      size: "70.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 39,
      averageAge: 58,
      genderDistribution: {
        male: 59,
        female: 40,
        nonSpecified: 1,
      },
    },
  },
  {
    id: "2d9154a0",
    name: "Silent Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Wave is a trusted brand known for quality products in Baking.",
    categories: ["Baking"],
    deterministicAudience: {
      size: "478.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 67,
      averageAge: 29,
      genderDistribution: {
        male: 22,
        female: 53,
        nonSpecified: 25,
      },
    },
  },
  {
    id: "cc71368e",
    name: "Silent Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Nest is a trusted brand known for quality products in Baking.",
    categories: ["Baking"],
    deterministicAudience: {
      size: "115.4M",
      lookbackWindow: "All Time",
      propensityToPurchase: 83,
      averageAge: 36,
      genderDistribution: {
        male: 57,
        female: 43,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "7e5d30c8",
    name: "Golden Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Grove is a trusted brand known for quality products in Baking Chips & Chocolate.",
    categories: ["Baking Chips & Chocolate"],
    deterministicAudience: {
      size: "469.1M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 60,
      averageAge: 50,
      genderDistribution: {
        male: 43,
        female: 31,
        nonSpecified: 26,
      },
    },
  },
  {
    id: "bbce92e6",
    name: "Modern Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Wave is a trusted brand known for quality products in Baking Chips & Chocolate.",
    categories: ["Baking Chips & Chocolate"],
    deterministicAudience: {
      size: "143.9M",
      lookbackWindow: "All Time",
      propensityToPurchase: 37,
      averageAge: 38,
      genderDistribution: {
        male: 58,
        female: 33,
        nonSpecified: 9,
      },
    },
  },
  {
    id: "aac4e492",
    name: "Peak Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Grove is a trusted brand known for quality products in Baking Chips & Chocolate.",
    categories: ["Baking Chips & Chocolate"],
    deterministicAudience: {
      size: "448.3M",
      lookbackWindow: "All Time",
      propensityToPurchase: 97,
      averageAge: 42,
      genderDistribution: {
        male: 46,
        female: 33,
        nonSpecified: 21,
      },
    },
  },
  {
    id: "a9ee01c5",
    name: "Fresh Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Forge is a trusted brand known for quality products in Baking Mixes.",
    categories: ["Baking Mixes"],
    deterministicAudience: {
      size: "23.4M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 87,
      averageAge: 45,
      genderDistribution: {
        male: 60,
        female: 54,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "14251682",
    name: "Bright Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Roots is a trusted brand known for quality products in Baking Mixes.",
    categories: ["Baking Mixes"],
    deterministicAudience: {
      size: "227.5M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 51,
      averageAge: 21,
      genderDistribution: {
        male: 39,
        female: 43,
        nonSpecified: 18,
      },
    },
  },
  {
    id: "b37c0a85",
    name: "Golden Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Roots is a trusted brand known for quality products in Baking Mixes.",
    categories: ["Baking Mixes"],
    deterministicAudience: {
      size: "369.2M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 94,
      averageAge: 36,
      genderDistribution: {
        male: 32,
        female: 33,
        nonSpecified: 35,
      },
    },
  },
  {
    id: "74b409c1",
    name: "Peak Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Forge is a trusted brand known for quality products in Baking Nuts & Seeds.",
    categories: ["Baking Nuts & Seeds"],
    deterministicAudience: {
      size: "126.2M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 42,
      averageAge: 54,
      genderDistribution: {
        male: 23,
        female: 27,
        nonSpecified: 50,
      },
    },
  },
  {
    id: "2dc665cf",
    name: "Urban Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Wave is a trusted brand known for quality products in Baking Nuts & Seeds.",
    categories: ["Baking Nuts & Seeds"],
    deterministicAudience: {
      size: "210.1M",
      lookbackWindow: "All Time",
      propensityToPurchase: 70,
      averageAge: 48,
      genderDistribution: {
        male: 30,
        female: 47,
        nonSpecified: 23,
      },
    },
  },
  {
    id: "f46b4baa",
    name: "Urban Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Roots is a trusted brand known for quality products in Baking Nuts & Seeds.",
    categories: ["Baking Nuts & Seeds"],
    deterministicAudience: {
      size: "197.9M",
      lookbackWindow: "All Time",
      propensityToPurchase: 59,
      averageAge: 25,
      genderDistribution: {
        male: 51,
        female: 56,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "d5dbd798",
    name: "Golden Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Crate is a trusted brand known for quality products in Baking Powder & Soda.",
    categories: ["Baking Powder & Soda"],
    deterministicAudience: {
      size: "427.4M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 80,
      averageAge: 34,
      genderDistribution: {
        male: 60,
        female: 49,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "7d81650d",
    name: "Lush Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Wave is a trusted brand known for quality products in Baking Powder & Soda.",
    categories: ["Baking Powder & Soda"],
    deterministicAudience: {
      size: "131.3M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 62,
      averageAge: 50,
      genderDistribution: {
        male: 36,
        female: 31,
        nonSpecified: 33,
      },
    },
  },
  {
    id: "e0699879",
    name: "Golden Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Forge is a trusted brand known for quality products in Baking Syrup.",
    categories: ["Baking Syrup"],
    deterministicAudience: {
      size: "13.8M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 33,
      averageAge: 29,
      genderDistribution: {
        male: 29,
        female: 22,
        nonSpecified: 49,
      },
    },
  },
  {
    id: "7aef61dd",
    name: "Urban Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Harvest is a trusted brand known for quality products in Baking Syrup.",
    categories: ["Baking Syrup"],
    deterministicAudience: {
      size: "210.1M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 43,
      averageAge: 35,
      genderDistribution: {
        male: 34,
        female: 51,
        nonSpecified: 15,
      },
    },
  },
  {
    id: "baf150b0",
    name: "Fresh Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Grove is a trusted brand known for quality products in Breadcrumbs & Batters.",
    categories: ["Breadcrumbs & Batters"],
    deterministicAudience: {
      size: "340.4M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 81,
      averageAge: 30,
      genderDistribution: {
        male: 60,
        female: 32,
        nonSpecified: 8,
      },
    },
  },
  {
    id: "374a9752",
    name: "Peak Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Roots is a trusted brand known for quality products in Breadcrumbs & Batters.",
    categories: ["Breadcrumbs & Batters"],
    deterministicAudience: {
      size: "41.2M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 37,
      averageAge: 32,
      genderDistribution: {
        male: 60,
        female: 57,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "71336582",
    name: "Golden Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Forge is a trusted brand known for quality products in Breadcrumbs & Batters.",
    categories: ["Breadcrumbs & Batters"],
    deterministicAudience: {
      size: "74.2M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 87,
      averageAge: 47,
      genderDistribution: {
        male: 23,
        female: 32,
        nonSpecified: 45,
      },
    },
  },
  {
    id: "38c98cd1",
    name: "Modern Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Forge is a trusted brand known for quality products in Condensed & Powdered Milk.",
    categories: ["Condensed & Powdered Milk"],
    deterministicAudience: {
      size: "158.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 63,
      averageAge: 53,
      genderDistribution: {
        male: 46,
        female: 42,
        nonSpecified: 12,
      },
    },
  },
  {
    id: "b973d36a",
    name: "Green Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Lab is a trusted brand known for quality products in Condensed & Powdered Milk.",
    categories: ["Condensed & Powdered Milk"],
    deterministicAudience: {
      size: "379.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 85,
      averageAge: 48,
      genderDistribution: {
        male: 25,
        female: 30,
        nonSpecified: 45,
      },
    },
  },
  {
    id: "3f5e25ee",
    name: "Fresh Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Forge is a trusted brand known for quality products in Condensed & Powdered Milk.",
    categories: ["Condensed & Powdered Milk"],
    deterministicAudience: {
      size: "205.6M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 43,
      averageAge: 33,
      genderDistribution: {
        male: 29,
        female: 24,
        nonSpecified: 47,
      },
    },
  },
  {
    id: "d8b84aaa",
    name: "Happy Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Lab is a trusted brand known for quality products in Flours & Meals.",
    categories: ["Flours & Meals"],
    deterministicAudience: {
      size: "161.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 74,
      averageAge: 51,
      genderDistribution: {
        male: 26,
        female: 54,
        nonSpecified: 20,
      },
    },
  },
  {
    id: "d7f97d4d",
    name: "Modern Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Field is a trusted brand known for quality products in Flours & Meals.",
    categories: ["Flours & Meals"],
    deterministicAudience: {
      size: "380.7M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 97,
      averageAge: 59,
      genderDistribution: {
        male: 37,
        female: 44,
        nonSpecified: 19,
      },
    },
  },
  {
    id: "03d66e0a",
    name: "Lush Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Lab is a trusted brand known for quality products in Flours & Meals.",
    categories: ["Flours & Meals"],
    deterministicAudience: {
      size: "224.1M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 93,
      averageAge: 34,
      genderDistribution: {
        male: 52,
        female: 57,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "18193933",
    name: "Bright Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Field is a trusted brand known for quality products in Frosting, Decorations & Toppings.",
    categories: ["Frosting, Decorations & Toppings"],
    deterministicAudience: {
      size: "189.7M",
      lookbackWindow: "All Time",
      propensityToPurchase: 69,
      averageAge: 59,
      genderDistribution: {
        male: 47,
        female: 54,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "9b09901a",
    name: "Green Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Roots is a trusted brand known for quality products in Frosting, Decorations & Toppings.",
    categories: ["Frosting, Decorations & Toppings"],
    deterministicAudience: {
      size: "481.2M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 52,
      averageAge: 58,
      genderDistribution: {
        male: 21,
        female: 27,
        nonSpecified: 52,
      },
    },
  },
  {
    id: "41e469fc",
    name: "Bright Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Nest is a trusted brand known for quality products in Frosting, Decorations & Toppings.",
    categories: ["Frosting, Decorations & Toppings"],
    deterministicAudience: {
      size: "114.9M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 78,
      averageAge: 34,
      genderDistribution: {
        male: 29,
        female: 25,
        nonSpecified: 46,
      },
    },
  },
  {
    id: "b76b86d9",
    name: "Green Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Forge is a trusted brand known for quality products in Marshmallows.",
    categories: ["Marshmallows"],
    deterministicAudience: {
      size: "322.1M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 79,
      averageAge: 36,
      genderDistribution: {
        male: 21,
        female: 45,
        nonSpecified: 34,
      },
    },
  },
  {
    id: "02324f30",
    name: "Fresh Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Grove is a trusted brand known for quality products in Marshmallows.",
    categories: ["Marshmallows"],
    deterministicAudience: {
      size: "317.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 75,
      averageAge: 61,
      genderDistribution: {
        male: 45,
        female: 57,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "c88c947e",
    name: "Urban Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Field is a trusted brand known for quality products in Marshmallows.",
    categories: ["Marshmallows"],
    deterministicAudience: {
      size: "396.4M",
      lookbackWindow: "All Time",
      propensityToPurchase: 47,
      averageAge: 46,
      genderDistribution: {
        male: 54,
        female: 35,
        nonSpecified: 11,
      },
    },
  },
  {
    id: "ba8b336b",
    name: "Bright Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Nest is a trusted brand known for quality products in Oil & Shortening.",
    categories: ["Oil & Shortening"],
    deterministicAudience: {
      size: "190.1M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 94,
      averageAge: 21,
      genderDistribution: {
        male: 29,
        female: 58,
        nonSpecified: 13,
      },
    },
  },
  {
    id: "5be79b2b",
    name: "Peak Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Grove is a trusted brand known for quality products in Oil & Shortening.",
    categories: ["Oil & Shortening"],
    deterministicAudience: {
      size: "399.6M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 63,
      averageAge: 45,
      genderDistribution: {
        male: 51,
        female: 47,
        nonSpecified: 2,
      },
    },
  },
  {
    id: "b3e9c165",
    name: "Bright Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Nest is a trusted brand known for quality products in Oil & Shortening.",
    categories: ["Oil & Shortening"],
    deterministicAudience: {
      size: "207.9M",
      lookbackWindow: "All Time",
      propensityToPurchase: 77,
      averageAge: 39,
      genderDistribution: {
        male: 20,
        female: 33,
        nonSpecified: 47,
      },
    },
  },
  {
    id: "a74ab59f",
    name: "Green Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Grove is a trusted brand known for quality products in Pie Crusts & Fillings.",
    categories: ["Pie Crusts & Fillings"],
    deterministicAudience: {
      size: "84.3M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 77,
      averageAge: 25,
      genderDistribution: {
        male: 22,
        female: 38,
        nonSpecified: 40,
      },
    },
  },
  {
    id: "4d891de5",
    name: "Bright Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Grove is a trusted brand known for quality products in Pie Crusts & Fillings.",
    categories: ["Pie Crusts & Fillings"],
    deterministicAudience: {
      size: "106.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 59,
      averageAge: 30,
      genderDistribution: {
        male: 49,
        female: 21,
        nonSpecified: 30,
      },
    },
  },
  {
    id: "86b1f8e1",
    name: "Modern Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Grove is a trusted brand known for quality products in Sugars.",
    categories: ["Sugars"],
    deterministicAudience: {
      size: "294.8M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 68,
      averageAge: 39,
      genderDistribution: {
        male: 54,
        female: 51,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "e4f49a3f",
    name: "Green Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Roots is a trusted brand known for quality products in Sugars.",
    categories: ["Sugars"],
    deterministicAudience: {
      size: "55.8M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 53,
      averageAge: 42,
      genderDistribution: {
        male: 57,
        female: 57,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "cfe4214d",
    name: "Bright Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Forge is a trusted brand known for quality products in Yeast.",
    categories: ["Yeast"],
    deterministicAudience: {
      size: "167.7M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 62,
      genderDistribution: {
        male: 29,
        female: 29,
        nonSpecified: 42,
      },
    },
  },
  {
    id: "df534ec3",
    name: "Bright Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Roots is a trusted brand known for quality products in Yeast.",
    categories: ["Yeast"],
    deterministicAudience: {
      size: "282.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 37,
      averageAge: 65,
      genderDistribution: {
        male: 23,
        female: 57,
        nonSpecified: 20,
      },
    },
  },
  {
    id: "b96092ba",
    name: "Happy Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Grove is a trusted brand known for quality products in Yeast.",
    categories: ["Yeast"],
    deterministicAudience: {
      size: "348.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 45,
      averageAge: 21,
      genderDistribution: {
        male: 59,
        female: 58,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "8d93f940",
    name: "Silent Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Forge is a trusted brand known for quality products in Breakfast.",
    categories: ["Breakfast"],
    deterministicAudience: {
      size: "357.7M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 80,
      averageAge: 39,
      genderDistribution: {
        male: 20,
        female: 56,
        nonSpecified: 24,
      },
    },
  },
  {
    id: "d15a1d67",
    name: "Silent Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Nest is a trusted brand known for quality products in Breakfast.",
    categories: ["Breakfast"],
    deterministicAudience: {
      size: "422.8M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 46,
      averageAge: 25,
      genderDistribution: {
        male: 48,
        female: 32,
        nonSpecified: 20,
      },
    },
  },
  {
    id: "946180a4",
    name: "Urban Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Forge is a trusted brand known for quality products in Breakfast.",
    categories: ["Breakfast"],
    deterministicAudience: {
      size: "267.6M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 88,
      averageAge: 38,
      genderDistribution: {
        male: 35,
        female: 38,
        nonSpecified: 27,
      },
    },
  },
  {
    id: "cc6cad69",
    name: "Bright Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Stream is a trusted brand known for quality products in Breakfast Bars.",
    categories: ["Breakfast Bars"],
    deterministicAudience: {
      size: "10.6M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 74,
      averageAge: 34,
      genderDistribution: {
        male: 21,
        female: 47,
        nonSpecified: 32,
      },
    },
  },
  {
    id: "8faf4e09",
    name: "Green Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Grove is a trusted brand known for quality products in Breakfast Bars.",
    categories: ["Breakfast Bars"],
    deterministicAudience: {
      size: "82.7M",
      lookbackWindow: "All Time",
      propensityToPurchase: 57,
      averageAge: 31,
      genderDistribution: {
        male: 54,
        female: 32,
        nonSpecified: 14,
      },
    },
  },
  {
    id: "81fb9f53",
    name: "Modern Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Stream is a trusted brand known for quality products in Cereal & Granola.",
    categories: ["Cereal & Granola"],
    deterministicAudience: {
      size: "251.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 35,
      averageAge: 49,
      genderDistribution: {
        male: 52,
        female: 39,
        nonSpecified: 9,
      },
    },
  },
  {
    id: "e57bd7c4",
    name: "Fresh Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Forge is a trusted brand known for quality products in Cereal & Granola.",
    categories: ["Cereal & Granola"],
    deterministicAudience: {
      size: "7.6M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 67,
      averageAge: 27,
      genderDistribution: {
        male: 28,
        female: 49,
        nonSpecified: 23,
      },
    },
  },
  {
    id: "1e6f4529",
    name: "Modern Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Forge is a trusted brand known for quality products in Oatmeal & Grits.",
    categories: ["Oatmeal & Grits"],
    deterministicAudience: {
      size: "362.1M",
      lookbackWindow: "All Time",
      propensityToPurchase: 78,
      averageAge: 24,
      genderDistribution: {
        male: 57,
        female: 42,
        nonSpecified: 1,
      },
    },
  },
  {
    id: "39d5d37b",
    name: "Happy Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Forge is a trusted brand known for quality products in Oatmeal & Grits.",
    categories: ["Oatmeal & Grits"],
    deterministicAudience: {
      size: "52.6M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 72,
      averageAge: 63,
      genderDistribution: {
        male: 37,
        female: 44,
        nonSpecified: 19,
      },
    },
  },
  {
    id: "7edbc217",
    name: "Bright Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Forge is a trusted brand known for quality products in Toaster Pastries.",
    categories: ["Toaster Pastries"],
    deterministicAudience: {
      size: "72.6M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 41,
      averageAge: 50,
      genderDistribution: {
        male: 29,
        female: 50,
        nonSpecified: 21,
      },
    },
  },
  {
    id: "8112e428",
    name: "Lush Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Field is a trusted brand known for quality products in Toaster Pastries.",
    categories: ["Toaster Pastries"],
    deterministicAudience: {
      size: "322.3M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 98,
      averageAge: 36,
      genderDistribution: {
        male: 34,
        female: 34,
        nonSpecified: 32,
      },
    },
  },
  {
    id: "53fe3bfc",
    name: "Golden Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Lab is a trusted brand known for quality products in Toaster Pastries.",
    categories: ["Toaster Pastries"],
    deterministicAudience: {
      size: "15.4M",
      lookbackWindow: "All Time",
      propensityToPurchase: 60,
      averageAge: 36,
      genderDistribution: {
        male: 28,
        female: 48,
        nonSpecified: 24,
      },
    },
  },
  {
    id: "46da18d9",
    name: "Bright Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Grove is a trusted brand known for quality products in Candy.",
    categories: ["Candy"],
    deterministicAudience: {
      size: "455.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 69,
      averageAge: 24,
      genderDistribution: {
        male: 44,
        female: 29,
        nonSpecified: 27,
      },
    },
  },
  {
    id: "4139a053",
    name: "Happy Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Crate is a trusted brand known for quality products in Candy.",
    categories: ["Candy"],
    deterministicAudience: {
      size: "39.3M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 86,
      averageAge: 60,
      genderDistribution: {
        male: 38,
        female: 36,
        nonSpecified: 26,
      },
    },
  },
  {
    id: "99f1c4ba",
    name: "Green Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Harvest is a trusted brand known for quality products in Candy.",
    categories: ["Candy"],
    deterministicAudience: {
      size: "137.2M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 54,
      averageAge: 53,
      genderDistribution: {
        male: 22,
        female: 38,
        nonSpecified: 40,
      },
    },
  },
  {
    id: "df5cb4ae",
    name: "Bright Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Harvest is a trusted brand known for quality products in Caramel & Toffee.",
    categories: ["Caramel & Toffee"],
    deterministicAudience: {
      size: "293.0M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 69,
      averageAge: 56,
      genderDistribution: {
        male: 59,
        female: 52,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "abeb093c",
    name: "Silent Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Harvest is a trusted brand known for quality products in Caramel & Toffee.",
    categories: ["Caramel & Toffee"],
    deterministicAudience: {
      size: "266.8M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 74,
      averageAge: 25,
      genderDistribution: {
        male: 55,
        female: 20,
        nonSpecified: 25,
      },
    },
  },
  {
    id: "0202c712",
    name: "Fresh Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Forge is a trusted brand known for quality products in Caramel & Toffee.",
    categories: ["Caramel & Toffee"],
    deterministicAudience: {
      size: "119.8M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 35,
      averageAge: 26,
      genderDistribution: {
        male: 57,
        female: 40,
        nonSpecified: 3,
      },
    },
  },
  {
    id: "f5603dbc",
    name: "Lush Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Nest is a trusted brand known for quality products in Chocolate.",
    categories: ["Chocolate"],
    deterministicAudience: {
      size: "144.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 44,
      averageAge: 38,
      genderDistribution: {
        male: 27,
        female: 45,
        nonSpecified: 28,
      },
    },
  },
  {
    id: "3e54c8e6",
    name: "Bright Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Forge is a trusted brand known for quality products in Chocolate.",
    categories: ["Chocolate"],
    deterministicAudience: {
      size: "205.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 85,
      averageAge: 47,
      genderDistribution: {
        male: 33,
        female: 55,
        nonSpecified: 12,
      },
    },
  },
  {
    id: "63262de7",
    name: "Lush Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Forge is a trusted brand known for quality products in Fruit Flavored & Sour.",
    categories: ["Fruit Flavored & Sour"],
    deterministicAudience: {
      size: "380.3M",
      lookbackWindow: "All Time",
      propensityToPurchase: 44,
      averageAge: 60,
      genderDistribution: {
        male: 46,
        female: 31,
        nonSpecified: 23,
      },
    },
  },
  {
    id: "8ac0b996",
    name: "Golden Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Lab is a trusted brand known for quality products in Fruit Flavored & Sour.",
    categories: ["Fruit Flavored & Sour"],
    deterministicAudience: {
      size: "123.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 64,
      averageAge: 60,
      genderDistribution: {
        male: 36,
        female: 26,
        nonSpecified: 38,
      },
    },
  },
  {
    id: "f0d24033",
    name: "Green Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Wave is a trusted brand known for quality products in Gum.",
    categories: ["Gum"],
    deterministicAudience: {
      size: "442.1M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 40,
      averageAge: 42,
      genderDistribution: {
        male: 32,
        female: 39,
        nonSpecified: 29,
      },
    },
  },
  {
    id: "7c778ed2",
    name: "Fresh Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Stream is a trusted brand known for quality products in Gum.",
    categories: ["Gum"],
    deterministicAudience: {
      size: "255.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 87,
      averageAge: 24,
      genderDistribution: {
        male: 22,
        female: 60,
        nonSpecified: 18,
      },
    },
  },
  {
    id: "32a513e1",
    name: "Fresh Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Field is a trusted brand known for quality products in Gummy & Chewy.",
    categories: ["Gummy & Chewy"],
    deterministicAudience: {
      size: "33.4M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 64,
      averageAge: 22,
      genderDistribution: {
        male: 46,
        female: 41,
        nonSpecified: 13,
      },
    },
  },
  {
    id: "2a7489fe",
    name: "Silent Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Wave is a trusted brand known for quality products in Gummy & Chewy.",
    categories: ["Gummy & Chewy"],
    deterministicAudience: {
      size: "307.7M",
      lookbackWindow: "All Time",
      propensityToPurchase: 94,
      averageAge: 21,
      genderDistribution: {
        male: 40,
        female: 43,
        nonSpecified: 17,
      },
    },
  },
  {
    id: "c47aa932",
    name: "Urban Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Roots is a trusted brand known for quality products in Hard Candy & Lollipops.",
    categories: ["Hard Candy & Lollipops"],
    deterministicAudience: {
      size: "103.0M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 79,
      averageAge: 53,
      genderDistribution: {
        male: 40,
        female: 56,
        nonSpecified: 4,
      },
    },
  },
  {
    id: "e3ee04e8",
    name: "Lush Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Wave is a trusted brand known for quality products in Hard Candy & Lollipops.",
    categories: ["Hard Candy & Lollipops"],
    deterministicAudience: {
      size: "258.0M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 66,
      averageAge: 20,
      genderDistribution: {
        male: 44,
        female: 25,
        nonSpecified: 31,
      },
    },
  },
  {
    id: "2f432d45",
    name: "Urban Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Lab is a trusted brand known for quality products in Mints.",
    categories: ["Mints"],
    deterministicAudience: {
      size: "481.3M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 99,
      averageAge: 25,
      genderDistribution: {
        male: 44,
        female: 51,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "2c2b4fc0",
    name: "Fresh Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Lab is a trusted brand known for quality products in Mints.",
    categories: ["Mints"],
    deterministicAudience: {
      size: "52.0M",
      lookbackWindow: "All Time",
      propensityToPurchase: 83,
      averageAge: 33,
      genderDistribution: {
        male: 59,
        female: 47,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "56653c11",
    name: "Modern Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Lab is a trusted brand known for quality products in Condiments and Sauces.",
    categories: ["Condiments and Sauces"],
    deterministicAudience: {
      size: "156.9M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 54,
      averageAge: 32,
      genderDistribution: {
        male: 40,
        female: 53,
        nonSpecified: 7,
      },
    },
  },
  {
    id: "10a2ada2",
    name: "Modern Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Nest is a trusted brand known for quality products in Condiments and Sauces.",
    categories: ["Condiments and Sauces"],
    deterministicAudience: {
      size: "178.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 39,
      averageAge: 37,
      genderDistribution: {
        male: 46,
        female: 29,
        nonSpecified: 25,
      },
    },
  },
  {
    id: "5ca29d5d",
    name: "Urban Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Wave is a trusted brand known for quality products in Condiments and Sauces.",
    categories: ["Condiments and Sauces"],
    deterministicAudience: {
      size: "456.4M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 63,
      averageAge: 37,
      genderDistribution: {
        male: 28,
        female: 40,
        nonSpecified: 32,
      },
    },
  },
  {
    id: "dddc2044",
    name: "Modern Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Lab is a trusted brand known for quality products in Chutneys & Relish.",
    categories: ["Chutneys & Relish"],
    deterministicAudience: {
      size: "404.7M",
      lookbackWindow: "All Time",
      propensityToPurchase: 67,
      averageAge: 35,
      genderDistribution: {
        male: 32,
        female: 44,
        nonSpecified: 24,
      },
    },
  },
  {
    id: "6158a179",
    name: "Green Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Field is a trusted brand known for quality products in Chutneys & Relish.",
    categories: ["Chutneys & Relish"],
    deterministicAudience: {
      size: "394.2M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 40,
      averageAge: 51,
      genderDistribution: {
        male: 47,
        female: 39,
        nonSpecified: 14,
      },
    },
  },
  {
    id: "7f337dd4",
    name: "Golden Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Wave is a trusted brand known for quality products in Croutons & Salad Toppers.",
    categories: ["Croutons & Salad Toppers"],
    deterministicAudience: {
      size: "318.1M",
      lookbackWindow: "All Time",
      propensityToPurchase: 38,
      averageAge: 25,
      genderDistribution: {
        male: 43,
        female: 28,
        nonSpecified: 29,
      },
    },
  },
  {
    id: "54ccfc44",
    name: "Modern Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Crate is a trusted brand known for quality products in Croutons & Salad Toppers.",
    categories: ["Croutons & Salad Toppers"],
    deterministicAudience: {
      size: "316.3M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 59,
      averageAge: 46,
      genderDistribution: {
        male: 44,
        female: 22,
        nonSpecified: 34,
      },
    },
  },
  {
    id: "e8fec5d9",
    name: "Happy Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Nest is a trusted brand known for quality products in Croutons & Salad Toppers.",
    categories: ["Croutons & Salad Toppers"],
    deterministicAudience: {
      size: "247.5M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 30,
      averageAge: 37,
      genderDistribution: {
        male: 30,
        female: 46,
        nonSpecified: 24,
      },
    },
  },
  {
    id: "7107912b",
    name: "Fresh Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Lab is a trusted brand known for quality products in Jam, Jelly & Preserves.",
    categories: ["Jam, Jelly & Preserves"],
    deterministicAudience: {
      size: "11.2M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 83,
      averageAge: 29,
      genderDistribution: {
        male: 55,
        female: 33,
        nonSpecified: 12,
      },
    },
  },
  {
    id: "12c25813",
    name: "Green Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Forge is a trusted brand known for quality products in Jam, Jelly & Preserves.",
    categories: ["Jam, Jelly & Preserves"],
    deterministicAudience: {
      size: "14.4M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 30,
      averageAge: 31,
      genderDistribution: {
        male: 40,
        female: 32,
        nonSpecified: 28,
      },
    },
  },
  {
    id: "70c3bdf8",
    name: "Happy Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Field is a trusted brand known for quality products in Ketchup.",
    categories: ["Ketchup"],
    deterministicAudience: {
      size: "227.1M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 99,
      averageAge: 48,
      genderDistribution: {
        male: 56,
        female: 51,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "aa62b6d6",
    name: "Fresh Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Nest is a trusted brand known for quality products in Ketchup.",
    categories: ["Ketchup"],
    deterministicAudience: {
      size: "94.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 96,
      averageAge: 51,
      genderDistribution: {
        male: 27,
        female: 27,
        nonSpecified: 46,
      },
    },
  },
  {
    id: "44511f30",
    name: "Lush Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Lab is a trusted brand known for quality products in Marinated Fruit & Vegetables.",
    categories: ["Marinated Fruit & Vegetables"],
    deterministicAudience: {
      size: "390.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 96,
      averageAge: 23,
      genderDistribution: {
        male: 24,
        female: 48,
        nonSpecified: 28,
      },
    },
  },
  {
    id: "320c5f53",
    name: "Bright Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Grove is a trusted brand known for quality products in Marinated Fruit & Vegetables.",
    categories: ["Marinated Fruit & Vegetables"],
    deterministicAudience: {
      size: "239.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 71,
      averageAge: 27,
      genderDistribution: {
        male: 44,
        female: 29,
        nonSpecified: 27,
      },
    },
  },
  {
    id: "9b290acf",
    name: "Bright Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Lab is a trusted brand known for quality products in Mayonnaise & Sandwich Spread.",
    categories: ["Mayonnaise & Sandwich Spread"],
    deterministicAudience: {
      size: "12.3M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 80,
      averageAge: 48,
      genderDistribution: {
        male: 34,
        female: 28,
        nonSpecified: 38,
      },
    },
  },
  {
    id: "d53a0ed1",
    name: "Fresh Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Roots is a trusted brand known for quality products in Mayonnaise & Sandwich Spread.",
    categories: ["Mayonnaise & Sandwich Spread"],
    deterministicAudience: {
      size: "317.5M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 82,
      averageAge: 33,
      genderDistribution: {
        male: 25,
        female: 49,
        nonSpecified: 26,
      },
    },
  },
  {
    id: "bfb6dde0",
    name: "Peak Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Crate is a trusted brand known for quality products in Mustard.",
    categories: ["Mustard"],
    deterministicAudience: {
      size: "113.3M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 87,
      averageAge: 29,
      genderDistribution: {
        male: 54,
        female: 32,
        nonSpecified: 14,
      },
    },
  },
  {
    id: "58ba8b4e",
    name: "Modern Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Forge is a trusted brand known for quality products in Mustard.",
    categories: ["Mustard"],
    deterministicAudience: {
      size: "392.7M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 100,
      averageAge: 49,
      genderDistribution: {
        male: 60,
        female: 45,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "204ee5c6",
    name: "Bright Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Crate is a trusted brand known for quality products in Nut Butter & Spread.",
    categories: ["Nut Butter & Spread"],
    deterministicAudience: {
      size: "357.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 85,
      averageAge: 64,
      genderDistribution: {
        male: 21,
        female: 54,
        nonSpecified: 25,
      },
    },
  },
  {
    id: "c4699c02",
    name: "Peak Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Roots is a trusted brand known for quality products in Nut Butter & Spread.",
    categories: ["Nut Butter & Spread"],
    deterministicAudience: {
      size: "361.6M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 59,
      averageAge: 23,
      genderDistribution: {
        male: 39,
        female: 33,
        nonSpecified: 28,
      },
    },
  },
  {
    id: "e4d2b2ae",
    name: "Green Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Lab is a trusted brand known for quality products in Nut Butter & Spread.",
    categories: ["Nut Butter & Spread"],
    deterministicAudience: {
      size: "194.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 76,
      averageAge: 22,
      genderDistribution: {
        male: 24,
        female: 23,
        nonSpecified: 53,
      },
    },
  },
  {
    id: "16d74f89",
    name: "Bright Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Stream is a trusted brand known for quality products in Olives.",
    categories: ["Olives"],
    deterministicAudience: {
      size: "235.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 69,
      averageAge: 32,
      genderDistribution: {
        male: 47,
        female: 33,
        nonSpecified: 20,
      },
    },
  },
  {
    id: "1f1892f8",
    name: "Lush Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Wave is a trusted brand known for quality products in Olives.",
    categories: ["Olives"],
    deterministicAudience: {
      size: "339.7M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 96,
      averageAge: 59,
      genderDistribution: {
        male: 37,
        female: 48,
        nonSpecified: 15,
      },
    },
  },
  {
    id: "64d51b7d",
    name: "Fresh Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Grove is a trusted brand known for quality products in Pickles.",
    categories: ["Pickles"],
    deterministicAudience: {
      size: "433.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 99,
      averageAge: 64,
      genderDistribution: {
        male: 55,
        female: 31,
        nonSpecified: 14,
      },
    },
  },
  {
    id: "1ec3aa30",
    name: "Bright Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Nest is a trusted brand known for quality products in Pickles.",
    categories: ["Pickles"],
    deterministicAudience: {
      size: "494.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 44,
      averageAge: 27,
      genderDistribution: {
        male: 39,
        female: 56,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "84c30adb",
    name: "Lush Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Harvest is a trusted brand known for quality products in Salad Dressing.",
    categories: ["Salad Dressing"],
    deterministicAudience: {
      size: "349.4M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 63,
      genderDistribution: {
        male: 20,
        female: 52,
        nonSpecified: 28,
      },
    },
  },
  {
    id: "191418e4",
    name: "Golden Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Forge is a trusted brand known for quality products in Salad Dressing.",
    categories: ["Salad Dressing"],
    deterministicAudience: {
      size: "216.0M",
      lookbackWindow: "All Time",
      propensityToPurchase: 73,
      averageAge: 43,
      genderDistribution: {
        male: 54,
        female: 38,
        nonSpecified: 8,
      },
    },
  },
  {
    id: "9850e4ad",
    name: "Bright Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Grove is a trusted brand known for quality products in Salt, Spices & Seasoning.",
    categories: ["Salt, Spices & Seasoning"],
    deterministicAudience: {
      size: "60.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 86,
      averageAge: 52,
      genderDistribution: {
        male: 27,
        female: 52,
        nonSpecified: 21,
      },
    },
  },
  {
    id: "c054c536",
    name: "Lush Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Field is a trusted brand known for quality products in Salt, Spices & Seasoning.",
    categories: ["Salt, Spices & Seasoning"],
    deterministicAudience: {
      size: "17.0M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 41,
      averageAge: 64,
      genderDistribution: {
        male: 55,
        female: 50,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "292deb25",
    name: "Green Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Lab is a trusted brand known for quality products in Sauces.",
    categories: ["Sauces"],
    deterministicAudience: {
      size: "14.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 56,
      averageAge: 46,
      genderDistribution: {
        male: 52,
        female: 22,
        nonSpecified: 26,
      },
    },
  },
  {
    id: "b775c9e6",
    name: "Happy Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Nest is a trusted brand known for quality products in Sauces.",
    categories: ["Sauces"],
    deterministicAudience: {
      size: "191.0M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 99,
      averageAge: 20,
      genderDistribution: {
        male: 53,
        female: 38,
        nonSpecified: 9,
      },
    },
  },
  {
    id: "fe58a166",
    name: "Bright Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Harvest is a trusted brand known for quality products in Sauces.",
    categories: ["Sauces"],
    deterministicAudience: {
      size: "296.7M",
      lookbackWindow: "All Time",
      propensityToPurchase: 65,
      averageAge: 34,
      genderDistribution: {
        male: 57,
        female: 26,
        nonSpecified: 17,
      },
    },
  },
  {
    id: "be3c909d",
    name: "Happy Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Crate is a trusted brand known for quality products in Syrups & Sweeteners.",
    categories: ["Syrups & Sweeteners"],
    deterministicAudience: {
      size: "368.6M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 95,
      averageAge: 20,
      genderDistribution: {
        male: 41,
        female: 24,
        nonSpecified: 35,
      },
    },
  },
  {
    id: "2d800945",
    name: "Silent Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Lab is a trusted brand known for quality products in Syrups & Sweeteners.",
    categories: ["Syrups & Sweeteners"],
    deterministicAudience: {
      size: "245.1M",
      lookbackWindow: "All Time",
      propensityToPurchase: 91,
      averageAge: 31,
      genderDistribution: {
        male: 30,
        female: 51,
        nonSpecified: 19,
      },
    },
  },
  {
    id: "ce4b7be3",
    name: "Happy Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Nest is a trusted brand known for quality products in Vinegar & Cooking Wine.",
    categories: ["Vinegar & Cooking Wine"],
    deterministicAudience: {
      size: "146.2M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 75,
      averageAge: 55,
      genderDistribution: {
        male: 30,
        female: 22,
        nonSpecified: 48,
      },
    },
  },
  {
    id: "6025496e",
    name: "Fresh Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Forge is a trusted brand known for quality products in Vinegar & Cooking Wine.",
    categories: ["Vinegar & Cooking Wine"],
    deterministicAudience: {
      size: "276.3M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 39,
      averageAge: 19,
      genderDistribution: {
        male: 53,
        female: 23,
        nonSpecified: 24,
      },
    },
  },
  {
    id: "1b293d85",
    name: "Silent Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Crate is a trusted brand known for quality products in Cookies and Crackers.",
    categories: ["Cookies and Crackers"],
    deterministicAudience: {
      size: "102.0M",
      lookbackWindow: "All Time",
      propensityToPurchase: 33,
      averageAge: 27,
      genderDistribution: {
        male: 21,
        female: 38,
        nonSpecified: 41,
      },
    },
  },
  {
    id: "ce9ed55b",
    name: "Happy Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Lab is a trusted brand known for quality products in Cookies and Crackers.",
    categories: ["Cookies and Crackers"],
    deterministicAudience: {
      size: "219.6M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 80,
      averageAge: 26,
      genderDistribution: {
        male: 52,
        female: 52,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "d7f596c7",
    name: "Modern Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Field is a trusted brand known for quality products in Fruit.",
    categories: ["Fruit"],
    deterministicAudience: {
      size: "420.3M",
      lookbackWindow: "All Time",
      propensityToPurchase: 86,
      averageAge: 24,
      genderDistribution: {
        male: 55,
        female: 22,
        nonSpecified: 23,
      },
    },
  },
  {
    id: "f1cf1bae",
    name: "Modern Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Field is a trusted brand known for quality products in Fruit.",
    categories: ["Fruit"],
    deterministicAudience: {
      size: "497.5M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 62,
      averageAge: 36,
      genderDistribution: {
        male: 56,
        female: 49,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "a2a45c62",
    name: "Modern Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Roots is a trusted brand known for quality products in Meals.",
    categories: ["Meals"],
    deterministicAudience: {
      size: "443.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 79,
      averageAge: 65,
      genderDistribution: {
        male: 34,
        female: 49,
        nonSpecified: 17,
      },
    },
  },
  {
    id: "e90d719c",
    name: "Green Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Stream is a trusted brand known for quality products in Meals.",
    categories: ["Meals"],
    deterministicAudience: {
      size: "211.7M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 66,
      averageAge: 21,
      genderDistribution: {
        male: 59,
        female: 36,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "ec2ee918",
    name: "Peak Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Forge is a trusted brand known for quality products in Meals.",
    categories: ["Meals"],
    deterministicAudience: {
      size: "261.3M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 69,
      averageAge: 23,
      genderDistribution: {
        male: 43,
        female: 24,
        nonSpecified: 33,
      },
    },
  },
  {
    id: "7c63745b",
    name: "Happy Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Harvest is a trusted brand known for quality products in Snacks.",
    categories: ["Snacks"],
    deterministicAudience: {
      size: "182.6M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 51,
      averageAge: 18,
      genderDistribution: {
        male: 54,
        female: 27,
        nonSpecified: 19,
      },
    },
  },
  {
    id: "4cd3c296",
    name: "Green Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Harvest is a trusted brand known for quality products in Snacks.",
    categories: ["Snacks"],
    deterministicAudience: {
      size: "18.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 76,
      averageAge: 62,
      genderDistribution: {
        male: 43,
        female: 45,
        nonSpecified: 12,
      },
    },
  },
  {
    id: "d3b7c587",
    name: "Fresh Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Harvest is a trusted brand known for quality products in Snacks.",
    categories: ["Snacks"],
    deterministicAudience: {
      size: "65.4M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 95,
      averageAge: 64,
      genderDistribution: {
        male: 49,
        female: 21,
        nonSpecified: 30,
      },
    },
  },
  {
    id: "b5770955",
    name: "Green Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Grove is a trusted brand known for quality products in Fruit Snacks.",
    categories: ["Fruit Snacks"],
    deterministicAudience: {
      size: "279.8M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 38,
      averageAge: 39,
      genderDistribution: {
        male: 41,
        female: 40,
        nonSpecified: 19,
      },
    },
  },
  {
    id: "27cdd069",
    name: "Golden Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Nest is a trusted brand known for quality products in Fruit Snacks.",
    categories: ["Fruit Snacks"],
    deterministicAudience: {
      size: "99.8M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 35,
      averageAge: 39,
      genderDistribution: {
        male: 29,
        female: 56,
        nonSpecified: 15,
      },
    },
  },
  {
    id: "b0da0a48",
    name: "Peak Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Field is a trusted brand known for quality products in Fruit Snacks.",
    categories: ["Fruit Snacks"],
    deterministicAudience: {
      size: "484.0M",
      lookbackWindow: "All Time",
      propensityToPurchase: 95,
      averageAge: 49,
      genderDistribution: {
        male: 32,
        female: 40,
        nonSpecified: 28,
      },
    },
  },
  {
    id: "da8838d7",
    name: "Modern Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Wave is a trusted brand known for quality products in Nuts & Dried Fruit.",
    categories: ["Nuts & Dried Fruit"],
    deterministicAudience: {
      size: "380.3M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 32,
      averageAge: 41,
      genderDistribution: {
        male: 28,
        female: 59,
        nonSpecified: 13,
      },
    },
  },
  {
    id: "46660ef1",
    name: "Bright Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Forge is a trusted brand known for quality products in Nuts & Dried Fruit.",
    categories: ["Nuts & Dried Fruit"],
    deterministicAudience: {
      size: "333.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 73,
      averageAge: 24,
      genderDistribution: {
        male: 60,
        female: 51,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "60ade571",
    name: "Fresh Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Harvest is a trusted brand known for quality products in Pudding & Gelatin.",
    categories: ["Pudding & Gelatin"],
    deterministicAudience: {
      size: "112.0M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 65,
      averageAge: 18,
      genderDistribution: {
        male: 26,
        female: 58,
        nonSpecified: 16,
      },
    },
  },
  {
    id: "7ca78603",
    name: "Bright Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Harvest is a trusted brand known for quality products in Pudding & Gelatin.",
    categories: ["Pudding & Gelatin"],
    deterministicAudience: {
      size: "387.8M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 33,
      averageAge: 45,
      genderDistribution: {
        male: 32,
        female: 42,
        nonSpecified: 26,
      },
    },
  },
  {
    id: "0d85236e",
    name: "Green Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Crate is a trusted brand known for quality products in Pudding & Gelatin.",
    categories: ["Pudding & Gelatin"],
    deterministicAudience: {
      size: "213.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 55,
      averageAge: 45,
      genderDistribution: {
        male: 32,
        female: 49,
        nonSpecified: 19,
      },
    },
  },
  {
    id: "283ade9d",
    name: "Green Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Wave is a trusted brand known for quality products in Salsa & Dips.",
    categories: ["Salsa & Dips"],
    deterministicAudience: {
      size: "52.7M",
      lookbackWindow: "All Time",
      propensityToPurchase: 85,
      averageAge: 54,
      genderDistribution: {
        male: 30,
        female: 32,
        nonSpecified: 38,
      },
    },
  },
  {
    id: "d01101c4",
    name: "Fresh Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Crate is a trusted brand known for quality products in Salsa & Dips.",
    categories: ["Salsa & Dips"],
    deterministicAudience: {
      size: "290.8M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 84,
      averageAge: 31,
      genderDistribution: {
        male: 47,
        female: 46,
        nonSpecified: 7,
      },
    },
  },
  {
    id: "631374fc",
    name: "Green Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Grove is a trusted brand known for quality products in Salsa & Dips.",
    categories: ["Salsa & Dips"],
    deterministicAudience: {
      size: "101.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 51,
      averageAge: 65,
      genderDistribution: {
        male: 53,
        female: 23,
        nonSpecified: 24,
      },
    },
  },
  {
    id: "925b6287",
    name: "Urban Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Wave is a trusted brand known for quality products in Salty Snacks & Popcorn.",
    categories: ["Salty Snacks & Popcorn"],
    deterministicAudience: {
      size: "56.9M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 41,
      averageAge: 64,
      genderDistribution: {
        male: 35,
        female: 42,
        nonSpecified: 23,
      },
    },
  },
  {
    id: "60fe9f51",
    name: "Bright Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Forge is a trusted brand known for quality products in Salty Snacks & Popcorn.",
    categories: ["Salty Snacks & Popcorn"],
    deterministicAudience: {
      size: "74.6M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 70,
      averageAge: 43,
      genderDistribution: {
        male: 29,
        female: 60,
        nonSpecified: 11,
      },
    },
  },
  {
    id: "3941bcac",
    name: "Bright Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Field is a trusted brand known for quality products in Snack Bars.",
    categories: ["Snack Bars"],
    deterministicAudience: {
      size: "23.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 87,
      averageAge: 22,
      genderDistribution: {
        male: 26,
        female: 30,
        nonSpecified: 44,
      },
    },
  },
  {
    id: "e298af57",
    name: "Golden Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Forge is a trusted brand known for quality products in Snack Bars.",
    categories: ["Snack Bars"],
    deterministicAudience: {
      size: "80.2M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 84,
      averageAge: 64,
      genderDistribution: {
        male: 41,
        female: 56,
        nonSpecified: 3,
      },
    },
  },
  {
    id: "eb2e8ebe",
    name: "Golden Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Forge is a trusted brand known for quality products in Snack Bars.",
    categories: ["Snack Bars"],
    deterministicAudience: {
      size: "384.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 90,
      averageAge: 40,
      genderDistribution: {
        male: 53,
        female: 57,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "07de542b",
    name: "Bright Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Forge is a trusted brand known for quality products in Snack Meats & Jerky.",
    categories: ["Snack Meats & Jerky"],
    deterministicAudience: {
      size: "72.8M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 77,
      averageAge: 49,
      genderDistribution: {
        male: 49,
        female: 48,
        nonSpecified: 3,
      },
    },
  },
  {
    id: "d2569238",
    name: "Happy Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Roots is a trusted brand known for quality products in Snack Meats & Jerky.",
    categories: ["Snack Meats & Jerky"],
    deterministicAudience: {
      size: "491.4M",
      lookbackWindow: "All Time",
      propensityToPurchase: 50,
      averageAge: 23,
      genderDistribution: {
        male: 20,
        female: 54,
        nonSpecified: 26,
      },
    },
  },
  {
    id: "e5423e11",
    name: "Urban Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Roots is a trusted brand known for quality products in Vegetables.",
    categories: ["Vegetables"],
    deterministicAudience: {
      size: "443.0M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 88,
      averageAge: 25,
      genderDistribution: {
        male: 23,
        female: 36,
        nonSpecified: 41,
      },
    },
  },
  {
    id: "7738fd4c",
    name: "Lush Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Nest is a trusted brand known for quality products in Vegetables.",
    categories: ["Vegetables"],
    deterministicAudience: {
      size: "244.2M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 66,
      averageAge: 53,
      genderDistribution: {
        male: 20,
        female: 21,
        nonSpecified: 59,
      },
    },
  },
  {
    id: "02074493",
    name: "Fresh Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Roots is a trusted brand known for quality products in Vegetables.",
    categories: ["Vegetables"],
    deterministicAudience: {
      size: "303.3M",
      lookbackWindow: "All Time",
      propensityToPurchase: 87,
      averageAge: 44,
      genderDistribution: {
        male: 53,
        female: 34,
        nonSpecified: 13,
      },
    },
  },
  {
    id: "5b14fcdd",
    name: "Peak Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Harvest is a trusted brand known for quality products in General Merchandise.",
    categories: ["General Merchandise"],
    deterministicAudience: {
      size: "183.6M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 69,
      averageAge: 22,
      genderDistribution: {
        male: 35,
        female: 50,
        nonSpecified: 15,
      },
    },
  },
  {
    id: "f550b659",
    name: "Green Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Grove is a trusted brand known for quality products in General Merchandise.",
    categories: ["General Merchandise"],
    deterministicAudience: {
      size: "244.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 91,
      averageAge: 43,
      genderDistribution: {
        male: 42,
        female: 30,
        nonSpecified: 28,
      },
    },
  },
  {
    id: "65abff08",
    name: "Green Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Harvest is a trusted brand known for quality products in General Merchandise.",
    categories: ["General Merchandise"],
    deterministicAudience: {
      size: "455.3M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 62,
      averageAge: 26,
      genderDistribution: {
        male: 23,
        female: 40,
        nonSpecified: 37,
      },
    },
  },
  {
    id: "5ff4a28a",
    name: "Happy Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Crate is a trusted brand known for quality products in Grooming Supplies.",
    categories: ["Grooming Supplies"],
    deterministicAudience: {
      size: "10.4M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 79,
      averageAge: 23,
      genderDistribution: {
        male: 54,
        female: 36,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "f05b1f38",
    name: "Lush Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Lab is a trusted brand known for quality products in Grooming Supplies.",
    categories: ["Grooming Supplies"],
    deterministicAudience: {
      size: "135.3M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 42,
      averageAge: 36,
      genderDistribution: {
        male: 29,
        female: 37,
        nonSpecified: 34,
      },
    },
  },
  {
    id: "721a6cb9",
    name: "Silent Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Harvest is a trusted brand known for quality products in Grooming Supplies.",
    categories: ["Grooming Supplies"],
    deterministicAudience: {
      size: "480.0M",
      lookbackWindow: "All Time",
      propensityToPurchase: 53,
      averageAge: 58,
      genderDistribution: {
        male: 27,
        female: 25,
        nonSpecified: 48,
      },
    },
  },
  {
    id: "65e08473",
    name: "Golden Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Lab is a trusted brand known for quality products in Hair Care.",
    categories: ["Hair Care"],
    deterministicAudience: {
      size: "239.3M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 38,
      averageAge: 64,
      genderDistribution: {
        male: 45,
        female: 36,
        nonSpecified: 19,
      },
    },
  },
  {
    id: "b6e0304e",
    name: "Peak Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Forge is a trusted brand known for quality products in Hair Care.",
    categories: ["Hair Care"],
    deterministicAudience: {
      size: "138.0M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 84,
      averageAge: 58,
      genderDistribution: {
        male: 34,
        female: 51,
        nonSpecified: 15,
      },
    },
  },
  {
    id: "89619424",
    name: "Silent Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Nest is a trusted brand known for quality products in Hair Accessories.",
    categories: ["Hair Accessories"],
    deterministicAudience: {
      size: "350.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 70,
      averageAge: 19,
      genderDistribution: {
        male: 35,
        female: 26,
        nonSpecified: 39,
      },
    },
  },
  {
    id: "460744fb",
    name: "Golden Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Stream is a trusted brand known for quality products in Hair Accessories.",
    categories: ["Hair Accessories"],
    deterministicAudience: {
      size: "351.3M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 49,
      averageAge: 56,
      genderDistribution: {
        male: 54,
        female: 55,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "970653e7",
    name: "Modern Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Harvest is a trusted brand known for quality products in Hair Accessories.",
    categories: ["Hair Accessories"],
    deterministicAudience: {
      size: "333.4M",
      lookbackWindow: "All Time",
      propensityToPurchase: 47,
      averageAge: 49,
      genderDistribution: {
        male: 24,
        female: 37,
        nonSpecified: 39,
      },
    },
  },
  {
    id: "9eb30e33",
    name: "Urban Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Wave is a trusted brand known for quality products in Hair Coloring.",
    categories: ["Hair Coloring"],
    deterministicAudience: {
      size: "400.4M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 41,
      averageAge: 63,
      genderDistribution: {
        male: 38,
        female: 60,
        nonSpecified: 2,
      },
    },
  },
  {
    id: "1dd6bb80",
    name: "Peak Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Roots is a trusted brand known for quality products in Hair Coloring.",
    categories: ["Hair Coloring"],
    deterministicAudience: {
      size: "291.0M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 72,
      averageAge: 54,
      genderDistribution: {
        male: 58,
        female: 48,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "f04a34b5",
    name: "Fresh Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Crate is a trusted brand known for quality products in Hair Coloring.",
    categories: ["Hair Coloring"],
    deterministicAudience: {
      size: "61.6M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 49,
      averageAge: 46,
      genderDistribution: {
        male: 60,
        female: 53,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "9b7ebed3",
    name: "Bright Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Forge is a trusted brand known for quality products in Hair Conditioner.",
    categories: ["Hair Conditioner"],
    deterministicAudience: {
      size: "121.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 87,
      averageAge: 22,
      genderDistribution: {
        male: 23,
        female: 52,
        nonSpecified: 25,
      },
    },
  },
  {
    id: "f5cf9daa",
    name: "Fresh Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Forge is a trusted brand known for quality products in Hair Conditioner.",
    categories: ["Hair Conditioner"],
    deterministicAudience: {
      size: "193.0M",
      lookbackWindow: "All Time",
      propensityToPurchase: 35,
      averageAge: 31,
      genderDistribution: {
        male: 59,
        female: 55,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "bcbd4d38",
    name: "Golden Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Nest is a trusted brand known for quality products in Hair Growth Products.",
    categories: ["Hair Growth Products"],
    deterministicAudience: {
      size: "346.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 70,
      averageAge: 58,
      genderDistribution: {
        male: 41,
        female: 45,
        nonSpecified: 14,
      },
    },
  },
  {
    id: "e56055bd",
    name: "Modern Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Crate is a trusted brand known for quality products in Hair Growth Products.",
    categories: ["Hair Growth Products"],
    deterministicAudience: {
      size: "203.8M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 91,
      averageAge: 50,
      genderDistribution: {
        male: 29,
        female: 33,
        nonSpecified: 38,
      },
    },
  },
  {
    id: "4d6770f0",
    name: "Lush Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Field is a trusted brand known for quality products in Hair Growth Products.",
    categories: ["Hair Growth Products"],
    deterministicAudience: {
      size: "78.1M",
      lookbackWindow: "All Time",
      propensityToPurchase: 46,
      averageAge: 37,
      genderDistribution: {
        male: 28,
        female: 23,
        nonSpecified: 49,
      },
    },
  },
  {
    id: "a45c41a4",
    name: "Urban Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Stream is a trusted brand known for quality products in Hair Spray/Spritz.",
    categories: ["Hair Spray/Spritz"],
    deterministicAudience: {
      size: "14.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 68,
      averageAge: 53,
      genderDistribution: {
        male: 39,
        female: 24,
        nonSpecified: 37,
      },
    },
  },
  {
    id: "fb7085f4",
    name: "Bright Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Nest is a trusted brand known for quality products in Hair Spray/Spritz.",
    categories: ["Hair Spray/Spritz"],
    deterministicAudience: {
      size: "496.8M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 37,
      averageAge: 19,
      genderDistribution: {
        male: 50,
        female: 24,
        nonSpecified: 26,
      },
    },
  },
  {
    id: "4c83e912",
    name: "Modern Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Grove is a trusted brand known for quality products in Hair Styling Gel/Mousse.",
    categories: ["Hair Styling Gel/Mousse"],
    deterministicAudience: {
      size: "499.1M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 67,
      averageAge: 19,
      genderDistribution: {
        male: 43,
        female: 34,
        nonSpecified: 23,
      },
    },
  },
  {
    id: "60ba6f5c",
    name: "Modern Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Nest is a trusted brand known for quality products in Hair Styling Gel/Mousse.",
    categories: ["Hair Styling Gel/Mousse"],
    deterministicAudience: {
      size: "489.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 38,
      averageAge: 24,
      genderDistribution: {
        male: 58,
        female: 37,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "c5d99a59",
    name: "Green Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Wave is a trusted brand known for quality products in Home Permanent/Relaxer Kits.",
    categories: ["Home Permanent/Relaxer Kits"],
    deterministicAudience: {
      size: "351.2M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 57,
      averageAge: 24,
      genderDistribution: {
        male: 35,
        female: 21,
        nonSpecified: 44,
      },
    },
  },
  {
    id: "4444a9c6",
    name: "Silent Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Crate is a trusted brand known for quality products in Home Permanent/Relaxer Kits.",
    categories: ["Home Permanent/Relaxer Kits"],
    deterministicAudience: {
      size: "252.8M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 72,
      averageAge: 42,
      genderDistribution: {
        male: 32,
        female: 53,
        nonSpecified: 15,
      },
    },
  },
  {
    id: "ceac94c9",
    name: "Silent Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Stream is a trusted brand known for quality products in Home Permanent/Relaxer Kits.",
    categories: ["Home Permanent/Relaxer Kits"],
    deterministicAudience: {
      size: "345.7M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 92,
      averageAge: 59,
      genderDistribution: {
        male: 59,
        female: 60,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "ed33e3b1",
    name: "Fresh Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Forge is a trusted brand known for quality products in Shampoo.",
    categories: ["Shampoo"],
    deterministicAudience: {
      size: "62.2M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 78,
      averageAge: 58,
      genderDistribution: {
        male: 33,
        female: 33,
        nonSpecified: 34,
      },
    },
  },
  {
    id: "3528d68e",
    name: "Peak Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Nest is a trusted brand known for quality products in Shampoo.",
    categories: ["Shampoo"],
    deterministicAudience: {
      size: "253.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 62,
      averageAge: 44,
      genderDistribution: {
        male: 35,
        female: 20,
        nonSpecified: 45,
      },
    },
  },
  {
    id: "54da3573",
    name: "Peak Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Harvest is a trusted brand known for quality products in Shampoo.",
    categories: ["Shampoo"],
    deterministicAudience: {
      size: "476.2M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 36,
      averageAge: 38,
      genderDistribution: {
        male: 36,
        female: 26,
        nonSpecified: 38,
      },
    },
  },
  {
    id: "3fc978d7",
    name: "Peak Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Harvest is a trusted brand known for quality products in HFSS Products [High Fat, Sugar, Salt].",
    categories: ["HFSS Products [High Fat, Sugar, Salt]"],
    deterministicAudience: {
      size: "352.6M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 97,
      averageAge: 54,
      genderDistribution: {
        male: 55,
        female: 46,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "964d403c",
    name: "Lush Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Lab is a trusted brand known for quality products in HFSS Products [High Fat, Sugar, Salt].",
    categories: ["HFSS Products [High Fat, Sugar, Salt]"],
    deterministicAudience: {
      size: "58.1M",
      lookbackWindow: "All Time",
      propensityToPurchase: 90,
      averageAge: 63,
      genderDistribution: {
        male: 44,
        female: 42,
        nonSpecified: 14,
      },
    },
  },
  {
    id: "e48164b9",
    name: "Green Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Crate is a trusted brand known for quality products in Home Care.",
    categories: ["Home Care"],
    deterministicAudience: {
      size: "345.0M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 68,
      averageAge: 36,
      genderDistribution: {
        male: 38,
        female: 25,
        nonSpecified: 37,
      },
    },
  },
  {
    id: "9053e0b3",
    name: "Green Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Nest is a trusted brand known for quality products in Home Care.",
    categories: ["Home Care"],
    deterministicAudience: {
      size: "234.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 66,
      averageAge: 65,
      genderDistribution: {
        male: 39,
        female: 56,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "6b1dd26e",
    name: "Silent Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Lab is a trusted brand known for quality products in Home Care.",
    categories: ["Home Care"],
    deterministicAudience: {
      size: "86.9M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 39,
      averageAge: 36,
      genderDistribution: {
        male: 33,
        female: 59,
        nonSpecified: 8,
      },
    },
  },
  {
    id: "4d6aedac",
    name: "Fresh Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Forge is a trusted brand known for quality products in Household Cleaning.",
    categories: ["Household Cleaning"],
    deterministicAudience: {
      size: "39.1M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 33,
      averageAge: 39,
      genderDistribution: {
        male: 52,
        female: 40,
        nonSpecified: 8,
      },
    },
  },
  {
    id: "9b51334b",
    name: "Modern Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Crate is a trusted brand known for quality products in Household Cleaning.",
    categories: ["Household Cleaning"],
    deterministicAudience: {
      size: "38.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 55,
      averageAge: 48,
      genderDistribution: {
        male: 45,
        female: 58,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "e620bf7f",
    name: "Bright Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Lab is a trusted brand known for quality products in All-Purpose Cleaner.",
    categories: ["All-Purpose Cleaner"],
    deterministicAudience: {
      size: "149.3M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 49,
      averageAge: 47,
      genderDistribution: {
        male: 50,
        female: 49,
        nonSpecified: 1,
      },
    },
  },
  {
    id: "3c596c1c",
    name: "Silent Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Harvest is a trusted brand known for quality products in All-Purpose Cleaner.",
    categories: ["All-Purpose Cleaner"],
    deterministicAudience: {
      size: "45.7M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 68,
      averageAge: 53,
      genderDistribution: {
        male: 49,
        female: 56,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "beea3c67",
    name: "Green Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Stream is a trusted brand known for quality products in Appliance Cleaner.",
    categories: ["Appliance Cleaner"],
    deterministicAudience: {
      size: "141.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 59,
      averageAge: 20,
      genderDistribution: {
        male: 29,
        female: 46,
        nonSpecified: 25,
      },
    },
  },
  {
    id: "cd2d4650",
    name: "Urban Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Grove is a trusted brand known for quality products in Appliance Cleaner.",
    categories: ["Appliance Cleaner"],
    deterministicAudience: {
      size: "170.7M",
      lookbackWindow: "All Time",
      propensityToPurchase: 72,
      averageAge: 27,
      genderDistribution: {
        male: 20,
        female: 42,
        nonSpecified: 38,
      },
    },
  },
  {
    id: "a180f781",
    name: "Fresh Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Roots is a trusted brand known for quality products in Bathroom Cleaner.",
    categories: ["Bathroom Cleaner"],
    deterministicAudience: {
      size: "216.7M",
      lookbackWindow: "All Time",
      propensityToPurchase: 46,
      averageAge: 35,
      genderDistribution: {
        male: 30,
        female: 29,
        nonSpecified: 41,
      },
    },
  },
  {
    id: "dbbb3b3f",
    name: "Peak Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Roots is a trusted brand known for quality products in Bathroom Cleaner.",
    categories: ["Bathroom Cleaner"],
    deterministicAudience: {
      size: "276.6M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 68,
      averageAge: 28,
      genderDistribution: {
        male: 46,
        female: 21,
        nonSpecified: 33,
      },
    },
  },
  {
    id: "77dc1b09",
    name: "Silent Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Lab is a trusted brand known for quality products in Bathroom Cleaner.",
    categories: ["Bathroom Cleaner"],
    deterministicAudience: {
      size: "253.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 59,
      averageAge: 38,
      genderDistribution: {
        male: 22,
        female: 38,
        nonSpecified: 40,
      },
    },
  },
  {
    id: "8e1c905c",
    name: "Modern Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Roots is a trusted brand known for quality products in Carpet & Floor Cleaner.",
    categories: ["Carpet & Floor Cleaner"],
    deterministicAudience: {
      size: "452.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 88,
      averageAge: 45,
      genderDistribution: {
        male: 37,
        female: 26,
        nonSpecified: 37,
      },
    },
  },
  {
    id: "c9ed2775",
    name: "Green Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Nest is a trusted brand known for quality products in Carpet & Floor Cleaner.",
    categories: ["Carpet & Floor Cleaner"],
    deterministicAudience: {
      size: "262.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 36,
      averageAge: 32,
      genderDistribution: {
        male: 42,
        female: 34,
        nonSpecified: 24,
      },
    },
  },
  {
    id: "13b4595a",
    name: "Bright Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Roots is a trusted brand known for quality products in Carpet & Floor Cleaner.",
    categories: ["Carpet & Floor Cleaner"],
    deterministicAudience: {
      size: "276.7M",
      lookbackWindow: "All Time",
      propensityToPurchase: 83,
      averageAge: 26,
      genderDistribution: {
        male: 21,
        female: 57,
        nonSpecified: 22,
      },
    },
  },
  {
    id: "71853921",
    name: "Lush Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Wave is a trusted brand known for quality products in Cleaning Tools.",
    categories: ["Cleaning Tools"],
    deterministicAudience: {
      size: "284.4M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 94,
      averageAge: 47,
      genderDistribution: {
        male: 51,
        female: 20,
        nonSpecified: 29,
      },
    },
  },
  {
    id: "f21736d4",
    name: "Fresh Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Harvest is a trusted brand known for quality products in Cleaning Tools.",
    categories: ["Cleaning Tools"],
    deterministicAudience: {
      size: "82.3M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 81,
      averageAge: 41,
      genderDistribution: {
        male: 58,
        female: 31,
        nonSpecified: 11,
      },
    },
  },
  {
    id: "aa3a0be0",
    name: "Lush Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Wave is a trusted brand known for quality products in Dish Detergent & Soap.",
    categories: ["Dish Detergent & Soap"],
    deterministicAudience: {
      size: "288.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 92,
      averageAge: 23,
      genderDistribution: {
        male: 29,
        female: 37,
        nonSpecified: 34,
      },
    },
  },
  {
    id: "933782f6",
    name: "Fresh Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Forge is a trusted brand known for quality products in Dish Detergent & Soap.",
    categories: ["Dish Detergent & Soap"],
    deterministicAudience: {
      size: "263.1M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 94,
      averageAge: 55,
      genderDistribution: {
        male: 52,
        female: 29,
        nonSpecified: 19,
      },
    },
  },
  {
    id: "6624d397",
    name: "Green Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Field is a trusted brand known for quality products in Dish Detergent & Soap.",
    categories: ["Dish Detergent & Soap"],
    deterministicAudience: {
      size: "272.4M",
      lookbackWindow: "All Time",
      propensityToPurchase: 61,
      averageAge: 51,
      genderDistribution: {
        male: 52,
        female: 58,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "6b04dc3a",
    name: "Urban Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Grove is a trusted brand known for quality products in Drain & Septic Cleaner.",
    categories: ["Drain & Septic Cleaner"],
    deterministicAudience: {
      size: "129.3M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 54,
      averageAge: 36,
      genderDistribution: {
        male: 42,
        female: 51,
        nonSpecified: 7,
      },
    },
  },
  {
    id: "2c8d611f",
    name: "Golden Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Crate is a trusted brand known for quality products in Drain & Septic Cleaner.",
    categories: ["Drain & Septic Cleaner"],
    deterministicAudience: {
      size: "208.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 52,
      averageAge: 36,
      genderDistribution: {
        male: 49,
        female: 44,
        nonSpecified: 7,
      },
    },
  },
  {
    id: "a2b35b86",
    name: "Happy Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Harvest is a trusted brand known for quality products in Drain & Septic Cleaner.",
    categories: ["Drain & Septic Cleaner"],
    deterministicAudience: {
      size: "15.3M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 99,
      averageAge: 42,
      genderDistribution: {
        male: 51,
        female: 37,
        nonSpecified: 12,
      },
    },
  },
  {
    id: "ca25b180",
    name: "Happy Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Nest is a trusted brand known for quality products in Furniture & Wood Cleaner.",
    categories: ["Furniture & Wood Cleaner"],
    deterministicAudience: {
      size: "231.9M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 92,
      averageAge: 46,
      genderDistribution: {
        male: 23,
        female: 42,
        nonSpecified: 35,
      },
    },
  },
  {
    id: "f0b9dee4",
    name: "Bright Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Wave is a trusted brand known for quality products in Furniture & Wood Cleaner.",
    categories: ["Furniture & Wood Cleaner"],
    deterministicAudience: {
      size: "64.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 75,
      averageAge: 59,
      genderDistribution: {
        male: 37,
        female: 22,
        nonSpecified: 41,
      },
    },
  },
  {
    id: "6d5531e5",
    name: "Fresh Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Field is a trusted brand known for quality products in Glass Cleaner.",
    categories: ["Glass Cleaner"],
    deterministicAudience: {
      size: "481.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 90,
      averageAge: 47,
      genderDistribution: {
        male: 31,
        female: 59,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "a6519fce",
    name: "Happy Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Roots is a trusted brand known for quality products in Glass Cleaner.",
    categories: ["Glass Cleaner"],
    deterministicAudience: {
      size: "474.1M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 45,
      averageAge: 21,
      genderDistribution: {
        male: 20,
        female: 35,
        nonSpecified: 45,
      },
    },
  },
  {
    id: "654d9f9a",
    name: "Golden Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Grove is a trusted brand known for quality products in Kitchen Surface Cleaner.",
    categories: ["Kitchen Surface Cleaner"],
    deterministicAudience: {
      size: "5.0M",
      lookbackWindow: "All Time",
      propensityToPurchase: 49,
      averageAge: 25,
      genderDistribution: {
        male: 28,
        female: 28,
        nonSpecified: 44,
      },
    },
  },
  {
    id: "1c42b252",
    name: "Fresh Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Wave is a trusted brand known for quality products in Kitchen Surface Cleaner.",
    categories: ["Kitchen Surface Cleaner"],
    deterministicAudience: {
      size: "453.0M",
      lookbackWindow: "All Time",
      propensityToPurchase: 77,
      averageAge: 27,
      genderDistribution: {
        male: 45,
        female: 35,
        nonSpecified: 20,
      },
    },
  },
  {
    id: "2fccfd9b",
    name: "Green Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Stream is a trusted brand known for quality products in Laundry.",
    categories: ["Laundry"],
    deterministicAudience: {
      size: "192.2M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 31,
      averageAge: 30,
      genderDistribution: {
        male: 33,
        female: 27,
        nonSpecified: 40,
      },
    },
  },
  {
    id: "4921f4b3",
    name: "Silent Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Roots is a trusted brand known for quality products in Laundry.",
    categories: ["Laundry"],
    deterministicAudience: {
      size: "483.3M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 73,
      averageAge: 34,
      genderDistribution: {
        male: 44,
        female: 59,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "d784c854",
    name: "Green Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Crate is a trusted brand known for quality products in Bleach.",
    categories: ["Bleach"],
    deterministicAudience: {
      size: "246.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 71,
      averageAge: 50,
      genderDistribution: {
        male: 55,
        female: 48,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "3b6d9744",
    name: "Urban Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Harvest is a trusted brand known for quality products in Bleach.",
    categories: ["Bleach"],
    deterministicAudience: {
      size: "223.2M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 39,
      averageAge: 49,
      genderDistribution: {
        male: 56,
        female: 27,
        nonSpecified: 17,
      },
    },
  },
  {
    id: "902dcda5",
    name: "Silent Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Nest is a trusted brand known for quality products in Bleach.",
    categories: ["Bleach"],
    deterministicAudience: {
      size: "190.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 92,
      averageAge: 41,
      genderDistribution: {
        male: 46,
        female: 59,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "edac8e97",
    name: "Lush Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Grove is a trusted brand known for quality products in Laundry Detergent.",
    categories: ["Laundry Detergent"],
    deterministicAudience: {
      size: "364.3M",
      lookbackWindow: "All Time",
      propensityToPurchase: 97,
      averageAge: 18,
      genderDistribution: {
        male: 60,
        female: 50,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "e72845df",
    name: "Happy Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Roots is a trusted brand known for quality products in Laundry Detergent.",
    categories: ["Laundry Detergent"],
    deterministicAudience: {
      size: "15.0M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 66,
      averageAge: 51,
      genderDistribution: {
        male: 60,
        female: 24,
        nonSpecified: 16,
      },
    },
  },
  {
    id: "cb722c1d",
    name: "Urban Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Forge is a trusted brand known for quality products in Laundry Detergent.",
    categories: ["Laundry Detergent"],
    deterministicAudience: {
      size: "402.0M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 34,
      genderDistribution: {
        male: 26,
        female: 53,
        nonSpecified: 21,
      },
    },
  },
  {
    id: "6dfc5eeb",
    name: "Green Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Roots is a trusted brand known for quality products in Laundry Scent Boosters & Additives.",
    categories: ["Laundry Scent Boosters & Additives"],
    deterministicAudience: {
      size: "455.1M",
      lookbackWindow: "All Time",
      propensityToPurchase: 66,
      averageAge: 45,
      genderDistribution: {
        male: 60,
        female: 48,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "08a932df",
    name: "Silent Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Field is a trusted brand known for quality products in Laundry Scent Boosters & Additives.",
    categories: ["Laundry Scent Boosters & Additives"],
    deterministicAudience: {
      size: "466.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 69,
      averageAge: 34,
      genderDistribution: {
        male: 34,
        female: 43,
        nonSpecified: 23,
      },
    },
  },
  {
    id: "99e6af6e",
    name: "Urban Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Lab is a trusted brand known for quality products in Laundry Scent Boosters & Additives.",
    categories: ["Laundry Scent Boosters & Additives"],
    deterministicAudience: {
      size: "131.3M",
      lookbackWindow: "All Time",
      propensityToPurchase: 77,
      averageAge: 29,
      genderDistribution: {
        male: 46,
        female: 24,
        nonSpecified: 30,
      },
    },
  },
  {
    id: "fc98e882",
    name: "Modern Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Lab is a trusted brand known for quality products in Laundry Stain Removers.",
    categories: ["Laundry Stain Removers"],
    deterministicAudience: {
      size: "86.1M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 75,
      averageAge: 43,
      genderDistribution: {
        male: 33,
        female: 40,
        nonSpecified: 27,
      },
    },
  },
  {
    id: "0fedfe72",
    name: "Peak Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Crate is a trusted brand known for quality products in Laundry Stain Removers.",
    categories: ["Laundry Stain Removers"],
    deterministicAudience: {
      size: "75.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 38,
      averageAge: 59,
      genderDistribution: {
        male: 43,
        female: 60,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "14376003",
    name: "Modern Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Wave is a trusted brand known for quality products in Hosiery.",
    categories: ["Hosiery"],
    deterministicAudience: {
      size: "203.9M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 83,
      averageAge: 19,
      genderDistribution: {
        male: 58,
        female: 25,
        nonSpecified: 17,
      },
    },
  },
  {
    id: "bcdeb792",
    name: "Modern Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Lab is a trusted brand known for quality products in Hosiery.",
    categories: ["Hosiery"],
    deterministicAudience: {
      size: "472.5M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 49,
      averageAge: 35,
      genderDistribution: {
        male: 36,
        female: 57,
        nonSpecified: 7,
      },
    },
  },
  {
    id: "15ab833f",
    name: "Happy Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Grove is a trusted brand known for quality products in Hosiery.",
    categories: ["Hosiery"],
    deterministicAudience: {
      size: "23.3M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 34,
      averageAge: 24,
      genderDistribution: {
        male: 23,
        female: 28,
        nonSpecified: 49,
      },
    },
  },
  {
    id: "d069284d",
    name: "Golden Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Grove is a trusted brand known for quality products in Pantyhose/Nylons.",
    categories: ["Pantyhose/Nylons"],
    deterministicAudience: {
      size: "200.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 53,
      averageAge: 21,
      genderDistribution: {
        male: 43,
        female: 33,
        nonSpecified: 24,
      },
    },
  },
  {
    id: "3a59cc7a",
    name: "Urban Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Forge is a trusted brand known for quality products in Pantyhose/Nylons.",
    categories: ["Pantyhose/Nylons"],
    deterministicAudience: {
      size: "193.7M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 53,
      averageAge: 22,
      genderDistribution: {
        male: 49,
        female: 41,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "4f4f0518",
    name: "Golden Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Lab is a trusted brand known for quality products in Socks.",
    categories: ["Socks"],
    deterministicAudience: {
      size: "179.0M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 89,
      averageAge: 33,
      genderDistribution: {
        male: 20,
        female: 25,
        nonSpecified: 55,
      },
    },
  },
  {
    id: "5c61805f",
    name: "Lush Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Roots is a trusted brand known for quality products in Socks.",
    categories: ["Socks"],
    deterministicAudience: {
      size: "384.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 34,
      averageAge: 27,
      genderDistribution: {
        male: 33,
        female: 51,
        nonSpecified: 16,
      },
    },
  },
  {
    id: "5d8fc95b",
    name: "Happy Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Nest is a trusted brand known for quality products in Socks.",
    categories: ["Socks"],
    deterministicAudience: {
      size: "100.7M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 58,
      averageAge: 32,
      genderDistribution: {
        male: 21,
        female: 34,
        nonSpecified: 45,
      },
    },
  },
  {
    id: "970343bd",
    name: "Fresh Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Wave is a trusted brand known for quality products in Tights.",
    categories: ["Tights"],
    deterministicAudience: {
      size: "214.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 81,
      averageAge: 55,
      genderDistribution: {
        male: 34,
        female: 37,
        nonSpecified: 29,
      },
    },
  },
  {
    id: "792ff25a",
    name: "Peak Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Stream is a trusted brand known for quality products in Tights.",
    categories: ["Tights"],
    deterministicAudience: {
      size: "319.2M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 89,
      averageAge: 41,
      genderDistribution: {
        male: 23,
        female: 23,
        nonSpecified: 54,
      },
    },
  },
  {
    id: "95f78b25",
    name: "Happy Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Field is a trusted brand known for quality products in Tights.",
    categories: ["Tights"],
    deterministicAudience: {
      size: "105.1M",
      lookbackWindow: "All Time",
      propensityToPurchase: 50,
      averageAge: 57,
      genderDistribution: {
        male: 41,
        female: 23,
        nonSpecified: 36,
      },
    },
  },
  {
    id: "1c8474e0",
    name: "Fresh Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Roots is a trusted brand known for quality products in Household/Plastics/Storage.",
    categories: ["Household/Plastics/Storage"],
    deterministicAudience: {
      size: "26.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 67,
      averageAge: 47,
      genderDistribution: {
        male: 48,
        female: 31,
        nonSpecified: 21,
      },
    },
  },
  {
    id: "16256bf3",
    name: "Green Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Harvest is a trusted brand known for quality products in Household/Plastics/Storage.",
    categories: ["Household/Plastics/Storage"],
    deterministicAudience: {
      size: "497.1M",
      lookbackWindow: "All Time",
      propensityToPurchase: 33,
      averageAge: 58,
      genderDistribution: {
        male: 30,
        female: 25,
        nonSpecified: 45,
      },
    },
  },
  {
    id: "a56c2b54",
    name: "Golden Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Harvest is a trusted brand known for quality products in Household/Plastics/Storage.",
    categories: ["Household/Plastics/Storage"],
    deterministicAudience: {
      size: "431.4M",
      lookbackWindow: "All Time",
      propensityToPurchase: 62,
      averageAge: 36,
      genderDistribution: {
        male: 50,
        female: 21,
        nonSpecified: 29,
      },
    },
  },
  {
    id: "26a95072",
    name: "Bright Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Lab is a trusted brand known for quality products in Bottles.",
    categories: ["Bottles"],
    deterministicAudience: {
      size: "494.0M",
      lookbackWindow: "All Time",
      propensityToPurchase: 86,
      averageAge: 60,
      genderDistribution: {
        male: 33,
        female: 36,
        nonSpecified: 31,
      },
    },
  },
  {
    id: "326e4734",
    name: "Golden Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Harvest is a trusted brand known for quality products in Bottles.",
    categories: ["Bottles"],
    deterministicAudience: {
      size: "268.3M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 84,
      averageAge: 38,
      genderDistribution: {
        male: 28,
        female: 21,
        nonSpecified: 51,
      },
    },
  },
  {
    id: "7e8e101d",
    name: "Modern Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Field is a trusted brand known for quality products in Bottles.",
    categories: ["Bottles"],
    deterministicAudience: {
      size: "435.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 49,
      averageAge: 37,
      genderDistribution: {
        male: 53,
        female: 56,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "16b7eb13",
    name: "Fresh Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Grove is a trusted brand known for quality products in Drinkware.",
    categories: ["Drinkware"],
    deterministicAudience: {
      size: "57.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 68,
      averageAge: 47,
      genderDistribution: {
        male: 56,
        female: 32,
        nonSpecified: 12,
      },
    },
  },
  {
    id: "a1534407",
    name: "Modern Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Harvest is a trusted brand known for quality products in Drinkware.",
    categories: ["Drinkware"],
    deterministicAudience: {
      size: "286.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 42,
      averageAge: 24,
      genderDistribution: {
        male: 22,
        female: 48,
        nonSpecified: 30,
      },
    },
  },
  {
    id: "0225e24c",
    name: "Lush Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Crate is a trusted brand known for quality products in Household Plastics.",
    categories: ["Household Plastics"],
    deterministicAudience: {
      size: "248.6M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 86,
      averageAge: 60,
      genderDistribution: {
        male: 23,
        female: 44,
        nonSpecified: 33,
      },
    },
  },
  {
    id: "cdf731f9",
    name: "Green Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Harvest is a trusted brand known for quality products in Household Plastics.",
    categories: ["Household Plastics"],
    deterministicAudience: {
      size: "147.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 91,
      averageAge: 37,
      genderDistribution: {
        male: 36,
        female: 28,
        nonSpecified: 36,
      },
    },
  },
  {
    id: "bc1f114b",
    name: "Silent Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Field is a trusted brand known for quality products in Kitchen Storage.",
    categories: ["Kitchen Storage"],
    deterministicAudience: {
      size: "268.2M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 32,
      averageAge: 36,
      genderDistribution: {
        male: 50,
        female: 44,
        nonSpecified: 6,
      },
    },
  },
  {
    id: "ec76d771",
    name: "Urban Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Field is a trusted brand known for quality products in Kitchen Storage.",
    categories: ["Kitchen Storage"],
    deterministicAudience: {
      size: "180.0M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 52,
      averageAge: 19,
      genderDistribution: {
        male: 53,
        female: 21,
        nonSpecified: 26,
      },
    },
  },
  {
    id: "cf4af9a2",
    name: "Happy Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Forge is a trusted brand known for quality products in Meal Kits.",
    categories: ["Meal Kits"],
    deterministicAudience: {
      size: "258.6M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 49,
      averageAge: 19,
      genderDistribution: {
        male: 27,
        female: 45,
        nonSpecified: 28,
      },
    },
  },
  {
    id: "901fb3a3",
    name: "Bright Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Stream is a trusted brand known for quality products in Meal Kits.",
    categories: ["Meal Kits"],
    deterministicAudience: {
      size: "298.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 61,
      averageAge: 25,
      genderDistribution: {
        male: 30,
        female: 31,
        nonSpecified: 39,
      },
    },
  },
  {
    id: "a3616b59",
    name: "Green Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Nest is a trusted brand known for quality products in Miscellaneous General Merch.",
    categories: ["Miscellaneous General Merch"],
    deterministicAudience: {
      size: "3.6M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 52,
      averageAge: 29,
      genderDistribution: {
        male: 60,
        female: 28,
        nonSpecified: 12,
      },
    },
  },
  {
    id: "4ac645ef",
    name: "Silent Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Roots is a trusted brand known for quality products in Miscellaneous General Merch.",
    categories: ["Miscellaneous General Merch"],
    deterministicAudience: {
      size: "149.3M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 88,
      averageAge: 61,
      genderDistribution: {
        male: 52,
        female: 31,
        nonSpecified: 17,
      },
    },
  },
  {
    id: "c8a93638",
    name: "Lush Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Wave is a trusted brand known for quality products in Miscellaneous General Merch.",
    categories: ["Miscellaneous General Merch"],
    deterministicAudience: {
      size: "419.4M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 45,
      averageAge: 33,
      genderDistribution: {
        male: 49,
        female: 56,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "d0d6f2a9",
    name: "Green Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Harvest is a trusted brand known for quality products in Office/School Supplies.",
    categories: ["Office/School Supplies"],
    deterministicAudience: {
      size: "192.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 58,
      averageAge: 48,
      genderDistribution: {
        male: 54,
        female: 33,
        nonSpecified: 13,
      },
    },
  },
  {
    id: "0289b0cb",
    name: "Urban Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Lab is a trusted brand known for quality products in Office/School Supplies.",
    categories: ["Office/School Supplies"],
    deterministicAudience: {
      size: "312.3M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 61,
      averageAge: 18,
      genderDistribution: {
        male: 44,
        female: 40,
        nonSpecified: 16,
      },
    },
  },
  {
    id: "5edc2219",
    name: "Silent Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Roots is a trusted brand known for quality products in Children's Art Supplies.",
    categories: ["Children's Art Supplies"],
    deterministicAudience: {
      size: "322.3M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 38,
      averageAge: 38,
      genderDistribution: {
        male: 51,
        female: 26,
        nonSpecified: 23,
      },
    },
  },
  {
    id: "5c537b63",
    name: "Silent Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Field is a trusted brand known for quality products in Children's Art Supplies.",
    categories: ["Children's Art Supplies"],
    deterministicAudience: {
      size: "371.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 47,
      averageAge: 65,
      genderDistribution: {
        male: 37,
        female: 43,
        nonSpecified: 20,
      },
    },
  },
  {
    id: "c1f86c39",
    name: "Silent Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Harvest is a trusted brand known for quality products in Computer Disks Frmtd/UnFrmtd.",
    categories: ["Computer Disks Frmtd/UnFrmtd"],
    deterministicAudience: {
      size: "154.0M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 58,
      averageAge: 40,
      genderDistribution: {
        male: 26,
        female: 46,
        nonSpecified: 28,
      },
    },
  },
  {
    id: "42c81f24",
    name: "Urban Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Field is a trusted brand known for quality products in Computer Disks Frmtd/UnFrmtd.",
    categories: ["Computer Disks Frmtd/UnFrmtd"],
    deterministicAudience: {
      size: "118.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 63,
      averageAge: 37,
      genderDistribution: {
        male: 33,
        female: 57,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "89c4c98f",
    name: "Lush Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Stream is a trusted brand known for quality products in Computer Disks Frmtd/UnFrmtd.",
    categories: ["Computer Disks Frmtd/UnFrmtd"],
    deterministicAudience: {
      size: "354.5M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 60,
      averageAge: 59,
      genderDistribution: {
        male: 27,
        female: 34,
        nonSpecified: 39,
      },
    },
  },
  {
    id: "6f225d32",
    name: "Bright Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Nest is a trusted brand known for quality products in Office Products.",
    categories: ["Office Products"],
    deterministicAudience: {
      size: "85.4M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 82,
      averageAge: 55,
      genderDistribution: {
        male: 58,
        female: 40,
        nonSpecified: 2,
      },
    },
  },
  {
    id: "761cab1f",
    name: "Fresh Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Forge is a trusted brand known for quality products in Office Products.",
    categories: ["Office Products"],
    deterministicAudience: {
      size: "427.4M",
      lookbackWindow: "All Time",
      propensityToPurchase: 92,
      averageAge: 43,
      genderDistribution: {
        male: 32,
        female: 33,
        nonSpecified: 35,
      },
    },
  },
  {
    id: "718ff98a",
    name: "Urban Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Grove is a trusted brand known for quality products in Office Products.",
    categories: ["Office Products"],
    deterministicAudience: {
      size: "477.4M",
      lookbackWindow: "All Time",
      propensityToPurchase: 68,
      averageAge: 54,
      genderDistribution: {
        male: 40,
        female: 57,
        nonSpecified: 3,
      },
    },
  },
  {
    id: "882308be",
    name: "Silent Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Wave is a trusted brand known for quality products in Writing Instruments.",
    categories: ["Writing Instruments"],
    deterministicAudience: {
      size: "316.9M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 79,
      averageAge: 30,
      genderDistribution: {
        male: 37,
        female: 46,
        nonSpecified: 17,
      },
    },
  },
  {
    id: "da49cb9e",
    name: "Green Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Stream is a trusted brand known for quality products in Writing Instruments.",
    categories: ["Writing Instruments"],
    deterministicAudience: {
      size: "309.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 50,
      averageAge: 65,
      genderDistribution: {
        male: 33,
        female: 23,
        nonSpecified: 44,
      },
    },
  },
  {
    id: "765390e2",
    name: "Peak Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Nest is a trusted brand known for quality products in Writing Instruments.",
    categories: ["Writing Instruments"],
    deterministicAudience: {
      size: "411.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 82,
      averageAge: 61,
      genderDistribution: {
        male: 53,
        female: 54,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "427fcf66",
    name: "Peak Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Field is a trusted brand known for quality products in Over the Counter Medication.",
    categories: ["Over the Counter Medication"],
    deterministicAudience: {
      size: "480.0M",
      lookbackWindow: "All Time",
      propensityToPurchase: 48,
      averageAge: 41,
      genderDistribution: {
        male: 27,
        female: 55,
        nonSpecified: 18,
      },
    },
  },
  {
    id: "20b887c1",
    name: "Happy Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Roots is a trusted brand known for quality products in Over the Counter Medication.",
    categories: ["Over the Counter Medication"],
    deterministicAudience: {
      size: "481.1M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 90,
      averageAge: 35,
      genderDistribution: {
        male: 36,
        female: 21,
        nonSpecified: 43,
      },
    },
  },
  {
    id: "20d69be9",
    name: "Fresh Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Wave is a trusted brand known for quality products in Over the Counter Medication.",
    categories: ["Over the Counter Medication"],
    deterministicAudience: {
      size: "323.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 58,
      averageAge: 47,
      genderDistribution: {
        male: 55,
        female: 46,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "a7ae347f",
    name: "Urban Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Field is a trusted brand known for quality products in Allergy & Sinus.",
    categories: ["Allergy & Sinus"],
    deterministicAudience: {
      size: "198.0M",
      lookbackWindow: "All Time",
      propensityToPurchase: 73,
      averageAge: 48,
      genderDistribution: {
        male: 39,
        female: 30,
        nonSpecified: 31,
      },
    },
  },
  {
    id: "0bcee25d",
    name: "Silent Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Stream is a trusted brand known for quality products in Allergy & Sinus.",
    categories: ["Allergy & Sinus"],
    deterministicAudience: {
      size: "261.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 62,
      averageAge: 20,
      genderDistribution: {
        male: 20,
        female: 21,
        nonSpecified: 59,
      },
    },
  },
  {
    id: "03131b9c",
    name: "Golden Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Lab is a trusted brand known for quality products in Allergy & Sinus.",
    categories: ["Allergy & Sinus"],
    deterministicAudience: {
      size: "113.4M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 42,
      averageAge: 37,
      genderDistribution: {
        male: 37,
        female: 49,
        nonSpecified: 14,
      },
    },
  },
  {
    id: "48990b37",
    name: "Urban Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Crate is a trusted brand known for quality products in Cold, Cough & Flu.",
    categories: ["Cold, Cough & Flu"],
    deterministicAudience: {
      size: "195.1M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 34,
      averageAge: 49,
      genderDistribution: {
        male: 43,
        female: 45,
        nonSpecified: 12,
      },
    },
  },
  {
    id: "5352df73",
    name: "Golden Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Field is a trusted brand known for quality products in Cold, Cough & Flu.",
    categories: ["Cold, Cough & Flu"],
    deterministicAudience: {
      size: "257.0M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 94,
      averageAge: 39,
      genderDistribution: {
        male: 44,
        female: 24,
        nonSpecified: 32,
      },
    },
  },
  {
    id: "313168fb",
    name: "Bright Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Field is a trusted brand known for quality products in Cold, Cough & Flu.",
    categories: ["Cold, Cough & Flu"],
    deterministicAudience: {
      size: "156.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 30,
      averageAge: 47,
      genderDistribution: {
        male: 48,
        female: 55,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "88b504c4",
    name: "Golden Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Harvest is a trusted brand known for quality products in Digestive Health.",
    categories: ["Digestive Health"],
    deterministicAudience: {
      size: "310.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 71,
      averageAge: 64,
      genderDistribution: {
        male: 54,
        female: 46,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "46767e32",
    name: "Golden Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Wave is a trusted brand known for quality products in Digestive Health.",
    categories: ["Digestive Health"],
    deterministicAudience: {
      size: "17.3M",
      lookbackWindow: "All Time",
      propensityToPurchase: 40,
      averageAge: 49,
      genderDistribution: {
        male: 60,
        female: 26,
        nonSpecified: 14,
      },
    },
  },
  {
    id: "08fda68e",
    name: "Lush Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Harvest is a trusted brand known for quality products in Pain Reliever.",
    categories: ["Pain Reliever"],
    deterministicAudience: {
      size: "29.3M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 85,
      averageAge: 64,
      genderDistribution: {
        male: 42,
        female: 30,
        nonSpecified: 28,
      },
    },
  },
  {
    id: "1609cc56",
    name: "Peak Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Crate is a trusted brand known for quality products in Pain Reliever.",
    categories: ["Pain Reliever"],
    deterministicAudience: {
      size: "267.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 82,
      averageAge: 63,
      genderDistribution: {
        male: 28,
        female: 52,
        nonSpecified: 20,
      },
    },
  },
  {
    id: "f1d122c1",
    name: "Modern Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Wave is a trusted brand known for quality products in Pain Reliever.",
    categories: ["Pain Reliever"],
    deterministicAudience: {
      size: "460.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 48,
      averageAge: 32,
      genderDistribution: {
        male: 29,
        female: 41,
        nonSpecified: 30,
      },
    },
  },
  {
    id: "2ae70bde",
    name: "Lush Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Harvest is a trusted brand known for quality products in Paper Products.",
    categories: ["Paper Products"],
    deterministicAudience: {
      size: "466.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 33,
      averageAge: 25,
      genderDistribution: {
        male: 26,
        female: 54,
        nonSpecified: 20,
      },
    },
  },
  {
    id: "43e1fa7f",
    name: "Golden Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Wave is a trusted brand known for quality products in Paper Products.",
    categories: ["Paper Products"],
    deterministicAudience: {
      size: "366.8M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 71,
      averageAge: 60,
      genderDistribution: {
        male: 47,
        female: 57,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "0cf44d2e",
    name: "Bright Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Stream is a trusted brand known for quality products in Facial Tissue.",
    categories: ["Facial Tissue"],
    deterministicAudience: {
      size: "104.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 54,
      averageAge: 48,
      genderDistribution: {
        male: 57,
        female: 29,
        nonSpecified: 14,
      },
    },
  },
  {
    id: "4103bdb0",
    name: "Golden Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Harvest is a trusted brand known for quality products in Facial Tissue.",
    categories: ["Facial Tissue"],
    deterministicAudience: {
      size: "299.5M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 83,
      averageAge: 55,
      genderDistribution: {
        male: 26,
        female: 42,
        nonSpecified: 32,
      },
    },
  },
  {
    id: "df0a696c",
    name: "Happy Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Field is a trusted brand known for quality products in Facial Tissue.",
    categories: ["Facial Tissue"],
    deterministicAudience: {
      size: "255.1M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 69,
      averageAge: 45,
      genderDistribution: {
        male: 52,
        female: 54,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "f35cc4cf",
    name: "Fresh Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Stream is a trusted brand known for quality products in Paper Napkins.",
    categories: ["Paper Napkins"],
    deterministicAudience: {
      size: "487.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 74,
      averageAge: 21,
      genderDistribution: {
        male: 29,
        female: 60,
        nonSpecified: 11,
      },
    },
  },
  {
    id: "86c22cb2",
    name: "Urban Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Nest is a trusted brand known for quality products in Paper Napkins.",
    categories: ["Paper Napkins"],
    deterministicAudience: {
      size: "125.0M",
      lookbackWindow: "All Time",
      propensityToPurchase: 51,
      averageAge: 19,
      genderDistribution: {
        male: 37,
        female: 37,
        nonSpecified: 26,
      },
    },
  },
  {
    id: "22de71a9",
    name: "Modern Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Field is a trusted brand known for quality products in Paper Towels.",
    categories: ["Paper Towels"],
    deterministicAudience: {
      size: "464.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 59,
      averageAge: 64,
      genderDistribution: {
        male: 41,
        female: 50,
        nonSpecified: 9,
      },
    },
  },
  {
    id: "64a5aaf1",
    name: "Modern Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Stream is a trusted brand known for quality products in Paper Towels.",
    categories: ["Paper Towels"],
    deterministicAudience: {
      size: "32.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 65,
      averageAge: 54,
      genderDistribution: {
        male: 56,
        female: 26,
        nonSpecified: 18,
      },
    },
  },
  {
    id: "f7a434d5",
    name: "Modern Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Field is a trusted brand known for quality products in Toilet Tissue.",
    categories: ["Toilet Tissue"],
    deterministicAudience: {
      size: "72.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 87,
      averageAge: 20,
      genderDistribution: {
        male: 23,
        female: 27,
        nonSpecified: 50,
      },
    },
  },
  {
    id: "6fb71caa",
    name: "Silent Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Roots is a trusted brand known for quality products in Toilet Tissue.",
    categories: ["Toilet Tissue"],
    deterministicAudience: {
      size: "495.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 76,
      averageAge: 56,
      genderDistribution: {
        male: 30,
        female: 58,
        nonSpecified: 12,
      },
    },
  },
  {
    id: "360b49a0",
    name: "Green Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Harvest is a trusted brand known for quality products in Toilet Tissue.",
    categories: ["Toilet Tissue"],
    deterministicAudience: {
      size: "4.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 30,
      averageAge: 28,
      genderDistribution: {
        male: 35,
        female: 54,
        nonSpecified: 11,
      },
    },
  },
  {
    id: "993b9370",
    name: "Lush Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Wave is a trusted brand known for quality products in Personal Care.",
    categories: ["Personal Care"],
    deterministicAudience: {
      size: "165.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 67,
      averageAge: 57,
      genderDistribution: {
        male: 30,
        female: 58,
        nonSpecified: 12,
      },
    },
  },
  {
    id: "b1163f38",
    name: "Green Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Nest is a trusted brand known for quality products in Personal Care.",
    categories: ["Personal Care"],
    deterministicAudience: {
      size: "256.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 34,
      averageAge: 27,
      genderDistribution: {
        male: 23,
        female: 33,
        nonSpecified: 44,
      },
    },
  },
  {
    id: "ca663715",
    name: "Happy Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Field is a trusted brand known for quality products in Personal Care.",
    categories: ["Personal Care"],
    deterministicAudience: {
      size: "258.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 72,
      averageAge: 19,
      genderDistribution: {
        male: 55,
        female: 45,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "8891c593",
    name: "Urban Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Grove is a trusted brand known for quality products in Adult Incontinence.",
    categories: ["Adult Incontinence"],
    deterministicAudience: {
      size: "209.3M",
      lookbackWindow: "All Time",
      propensityToPurchase: 45,
      averageAge: 43,
      genderDistribution: {
        male: 53,
        female: 39,
        nonSpecified: 8,
      },
    },
  },
  {
    id: "9d1e4eb0",
    name: "Fresh Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Crate is a trusted brand known for quality products in Adult Incontinence.",
    categories: ["Adult Incontinence"],
    deterministicAudience: {
      size: "119.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 51,
      averageAge: 51,
      genderDistribution: {
        male: 32,
        female: 60,
        nonSpecified: 8,
      },
    },
  },
  {
    id: "0ffc853b",
    name: "Silent Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Forge is a trusted brand known for quality products in Cotton Balls & Swabs.",
    categories: ["Cotton Balls & Swabs"],
    deterministicAudience: {
      size: "88.1M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 42,
      averageAge: 55,
      genderDistribution: {
        male: 48,
        female: 28,
        nonSpecified: 24,
      },
    },
  },
  {
    id: "e4ae3ba2",
    name: "Fresh Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Stream is a trusted brand known for quality products in Cotton Balls & Swabs.",
    categories: ["Cotton Balls & Swabs"],
    deterministicAudience: {
      size: "50.3M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 37,
      averageAge: 25,
      genderDistribution: {
        male: 48,
        female: 36,
        nonSpecified: 16,
      },
    },
  },
  {
    id: "12fd46ac",
    name: "Green Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Harvest is a trusted brand known for quality products in Feminine Needs.",
    categories: ["Feminine Needs"],
    deterministicAudience: {
      size: "155.1M",
      lookbackWindow: "All Time",
      propensityToPurchase: 68,
      averageAge: 28,
      genderDistribution: {
        male: 49,
        female: 52,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "1ae1b151",
    name: "Lush Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Crate is a trusted brand known for quality products in Feminine Needs.",
    categories: ["Feminine Needs"],
    deterministicAudience: {
      size: "315.1M",
      lookbackWindow: "All Time",
      propensityToPurchase: 33,
      averageAge: 30,
      genderDistribution: {
        male: 26,
        female: 48,
        nonSpecified: 26,
      },
    },
  },
  {
    id: "c05442ba",
    name: "Modern Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Forge is a trusted brand known for quality products in Feminine Needs.",
    categories: ["Feminine Needs"],
    deterministicAudience: {
      size: "48.2M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 81,
      averageAge: 63,
      genderDistribution: {
        male: 56,
        female: 55,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "8f771c33",
    name: "Peak Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Crate is a trusted brand known for quality products in First Aid.",
    categories: ["First Aid"],
    deterministicAudience: {
      size: "387.4M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 34,
      averageAge: 34,
      genderDistribution: {
        male: 45,
        female: 22,
        nonSpecified: 33,
      },
    },
  },
  {
    id: "c6e0479b",
    name: "Silent Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Wave is a trusted brand known for quality products in First Aid.",
    categories: ["First Aid"],
    deterministicAudience: {
      size: "362.0M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 56,
      averageAge: 36,
      genderDistribution: {
        male: 49,
        female: 56,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "e43d6e92",
    name: "Urban Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Wave is a trusted brand known for quality products in First Aid.",
    categories: ["First Aid"],
    deterministicAudience: {
      size: "184.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 31,
      averageAge: 28,
      genderDistribution: {
        male: 47,
        female: 22,
        nonSpecified: 31,
      },
    },
  },
  {
    id: "0830104e",
    name: "Golden Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Roots is a trusted brand known for quality products in Foot Care.",
    categories: ["Foot Care"],
    deterministicAudience: {
      size: "317.5M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 39,
      averageAge: 36,
      genderDistribution: {
        male: 20,
        female: 49,
        nonSpecified: 31,
      },
    },
  },
  {
    id: "d78dd672",
    name: "Happy Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Stream is a trusted brand known for quality products in Foot Care.",
    categories: ["Foot Care"],
    deterministicAudience: {
      size: "77.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 48,
      averageAge: 57,
      genderDistribution: {
        male: 55,
        female: 57,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "e4d1c0bb",
    name: "Lush Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Harvest is a trusted brand known for quality products in Foot Care.",
    categories: ["Foot Care"],
    deterministicAudience: {
      size: "163.7M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 89,
      averageAge: 55,
      genderDistribution: {
        male: 46,
        female: 32,
        nonSpecified: 22,
      },
    },
  },
  {
    id: "13688a26",
    name: "Bright Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Stream is a trusted brand known for quality products in Health & Wellness Aids & Devices.",
    categories: ["Health & Wellness Aids & Devices"],
    deterministicAudience: {
      size: "322.8M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 71,
      averageAge: 59,
      genderDistribution: {
        male: 37,
        female: 49,
        nonSpecified: 14,
      },
    },
  },
  {
    id: "258c35ad",
    name: "Golden Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Nest is a trusted brand known for quality products in Health & Wellness Aids & Devices.",
    categories: ["Health & Wellness Aids & Devices"],
    deterministicAudience: {
      size: "178.6M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 44,
      averageAge: 42,
      genderDistribution: {
        male: 40,
        female: 51,
        nonSpecified: 9,
      },
    },
  },
  {
    id: "d1269189",
    name: "Golden Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Crate is a trusted brand known for quality products in Oral Care.",
    categories: ["Oral Care"],
    deterministicAudience: {
      size: "54.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 100,
      averageAge: 37,
      genderDistribution: {
        male: 44,
        female: 38,
        nonSpecified: 18,
      },
    },
  },
  {
    id: "2a9df39e",
    name: "Peak Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Forge is a trusted brand known for quality products in Oral Care.",
    categories: ["Oral Care"],
    deterministicAudience: {
      size: "207.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 65,
      averageAge: 65,
      genderDistribution: {
        male: 59,
        female: 35,
        nonSpecified: 6,
      },
    },
  },
  {
    id: "1cfaddae",
    name: "Urban Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Crate is a trusted brand known for quality products in Oral Care.",
    categories: ["Oral Care"],
    deterministicAudience: {
      size: "314.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 90,
      averageAge: 39,
      genderDistribution: {
        male: 52,
        female: 20,
        nonSpecified: 28,
      },
    },
  },
  {
    id: "d342e786",
    name: "Bright Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Grove is a trusted brand known for quality products in Denture Care.",
    categories: ["Denture Care"],
    deterministicAudience: {
      size: "157.3M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 31,
      averageAge: 65,
      genderDistribution: {
        male: 49,
        female: 20,
        nonSpecified: 31,
      },
    },
  },
  {
    id: "0fe4fafc",
    name: "Bright Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Stream is a trusted brand known for quality products in Denture Care.",
    categories: ["Denture Care"],
    deterministicAudience: {
      size: "37.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 96,
      averageAge: 39,
      genderDistribution: {
        male: 48,
        female: 55,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "4030e3cb",
    name: "Golden Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Forge is a trusted brand known for quality products in Denture Care.",
    categories: ["Denture Care"],
    deterministicAudience: {
      size: "94.1M",
      lookbackWindow: "All Time",
      propensityToPurchase: 83,
      averageAge: 64,
      genderDistribution: {
        male: 41,
        female: 27,
        nonSpecified: 32,
      },
    },
  },
  {
    id: "9f3d7bdb",
    name: "Silent Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Crate is a trusted brand known for quality products in Mouthwash & Dental Rinse.",
    categories: ["Mouthwash & Dental Rinse"],
    deterministicAudience: {
      size: "32.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 59,
      averageAge: 22,
      genderDistribution: {
        male: 26,
        female: 24,
        nonSpecified: 50,
      },
    },
  },
  {
    id: "0dac7262",
    name: "Urban Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Crate is a trusted brand known for quality products in Mouthwash & Dental Rinse.",
    categories: ["Mouthwash & Dental Rinse"],
    deterministicAudience: {
      size: "190.7M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 65,
      averageAge: 19,
      genderDistribution: {
        male: 45,
        female: 53,
        nonSpecified: 2,
      },
    },
  },
  {
    id: "13d564db",
    name: "Silent Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Harvest is a trusted brand known for quality products in Toothbrushes & Dental Accessories.",
    categories: ["Toothbrushes & Dental Accessories"],
    deterministicAudience: {
      size: "474.5M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 56,
      averageAge: 21,
      genderDistribution: {
        male: 32,
        female: 40,
        nonSpecified: 28,
      },
    },
  },
  {
    id: "32c6f3e6",
    name: "Golden Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Harvest is a trusted brand known for quality products in Toothbrushes & Dental Accessories.",
    categories: ["Toothbrushes & Dental Accessories"],
    deterministicAudience: {
      size: "468.1M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 74,
      averageAge: 19,
      genderDistribution: {
        male: 25,
        female: 48,
        nonSpecified: 27,
      },
    },
  },
  {
    id: "4c32ebad",
    name: "Lush Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Nest is a trusted brand known for quality products in Toothpaste.",
    categories: ["Toothpaste"],
    deterministicAudience: {
      size: "116.1M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 33,
      averageAge: 25,
      genderDistribution: {
        male: 39,
        female: 51,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "b6308b10",
    name: "Peak Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Forge is a trusted brand known for quality products in Toothpaste.",
    categories: ["Toothpaste"],
    deterministicAudience: {
      size: "343.8M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 45,
      averageAge: 27,
      genderDistribution: {
        male: 22,
        female: 39,
        nonSpecified: 39,
      },
    },
  },
  {
    id: "aca794e7",
    name: "Green Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Wave is a trusted brand known for quality products in Vision Care.",
    categories: ["Vision Care"],
    deterministicAudience: {
      size: "65.4M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 50,
      averageAge: 22,
      genderDistribution: {
        male: 54,
        female: 36,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "37af6f4d",
    name: "Bright Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Crate is a trusted brand known for quality products in Vision Care.",
    categories: ["Vision Care"],
    deterministicAudience: {
      size: "42.4M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 100,
      averageAge: 57,
      genderDistribution: {
        male: 33,
        female: 47,
        nonSpecified: 20,
      },
    },
  },
  {
    id: "77fb5388",
    name: "Modern Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Stream is a trusted brand known for quality products in Vision Care.",
    categories: ["Vision Care"],
    deterministicAudience: {
      size: "40.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 49,
      averageAge: 58,
      genderDistribution: {
        male: 21,
        female: 46,
        nonSpecified: 33,
      },
    },
  },
  {
    id: "6a0ea770",
    name: "Bright Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Lab is a trusted brand known for quality products in Personal Cleansing.",
    categories: ["Personal Cleansing"],
    deterministicAudience: {
      size: "318.3M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 30,
      averageAge: 44,
      genderDistribution: {
        male: 53,
        female: 24,
        nonSpecified: 23,
      },
    },
  },
  {
    id: "05fa7ea1",
    name: "Peak Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Stream is a trusted brand known for quality products in Personal Cleansing.",
    categories: ["Personal Cleansing"],
    deterministicAudience: {
      size: "109.0M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 46,
      averageAge: 40,
      genderDistribution: {
        male: 38,
        female: 60,
        nonSpecified: 2,
      },
    },
  },
  {
    id: "7d99b73a",
    name: "Modern Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Roots is a trusted brand known for quality products in Bath Products.",
    categories: ["Bath Products"],
    deterministicAudience: {
      size: "85.9M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 62,
      averageAge: 46,
      genderDistribution: {
        male: 27,
        female: 41,
        nonSpecified: 32,
      },
    },
  },
  {
    id: "63ca10f2",
    name: "Lush Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Wave is a trusted brand known for quality products in Bath Products.",
    categories: ["Bath Products"],
    deterministicAudience: {
      size: "309.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 78,
      averageAge: 20,
      genderDistribution: {
        male: 53,
        female: 31,
        nonSpecified: 16,
      },
    },
  },
  {
    id: "1a64a24d",
    name: "Urban Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Wave is a trusted brand known for quality products in Bath/Body Scrubbers/Massagers.",
    categories: ["Bath/Body Scrubbers/Massagers"],
    deterministicAudience: {
      size: "230.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 35,
      averageAge: 30,
      genderDistribution: {
        male: 20,
        female: 23,
        nonSpecified: 57,
      },
    },
  },
  {
    id: "9aa6c9a4",
    name: "Fresh Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Stream is a trusted brand known for quality products in Bath/Body Scrubbers/Massagers.",
    categories: ["Bath/Body Scrubbers/Massagers"],
    deterministicAudience: {
      size: "325.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 70,
      averageAge: 31,
      genderDistribution: {
        male: 49,
        female: 25,
        nonSpecified: 26,
      },
    },
  },
  {
    id: "dd1a38f9",
    name: "Silent Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Crate is a trusted brand known for quality products in Bath/Body Scrubbers/Massagers.",
    categories: ["Bath/Body Scrubbers/Massagers"],
    deterministicAudience: {
      size: "253.4M",
      lookbackWindow: "All Time",
      propensityToPurchase: 32,
      averageAge: 27,
      genderDistribution: {
        male: 20,
        female: 29,
        nonSpecified: 51,
      },
    },
  },
  {
    id: "c40d2887",
    name: "Green Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Forge is a trusted brand known for quality products in Deodorant.",
    categories: ["Deodorant"],
    deterministicAudience: {
      size: "253.7M",
      lookbackWindow: "All Time",
      propensityToPurchase: 75,
      averageAge: 49,
      genderDistribution: {
        male: 30,
        female: 50,
        nonSpecified: 20,
      },
    },
  },
  {
    id: "1899b2e4",
    name: "Fresh Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Lab is a trusted brand known for quality products in Deodorant.",
    categories: ["Deodorant"],
    deterministicAudience: {
      size: "219.6M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 56,
      averageAge: 45,
      genderDistribution: {
        male: 59,
        female: 43,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "cf3e7b33",
    name: "Urban Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Harvest is a trusted brand known for quality products in Deodorant.",
    categories: ["Deodorant"],
    deterministicAudience: {
      size: "233.0M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 64,
      averageAge: 51,
      genderDistribution: {
        male: 42,
        female: 54,
        nonSpecified: 4,
      },
    },
  },
  {
    id: "c0bf120c",
    name: "Lush Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Roots is a trusted brand known for quality products in Moist Towelettes.",
    categories: ["Moist Towelettes"],
    deterministicAudience: {
      size: "49.1M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 53,
      averageAge: 32,
      genderDistribution: {
        male: 33,
        female: 52,
        nonSpecified: 15,
      },
    },
  },
  {
    id: "b1bcf0f2",
    name: "Modern Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Nest is a trusted brand known for quality products in Moist Towelettes.",
    categories: ["Moist Towelettes"],
    deterministicAudience: {
      size: "379.7M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 54,
      averageAge: 51,
      genderDistribution: {
        male: 28,
        female: 57,
        nonSpecified: 15,
      },
    },
  },
  {
    id: "9072a482",
    name: "Bright Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Grove is a trusted brand known for quality products in Soap.",
    categories: ["Soap"],
    deterministicAudience: {
      size: "112.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 63,
      averageAge: 57,
      genderDistribution: {
        male: 38,
        female: 23,
        nonSpecified: 39,
      },
    },
  },
  {
    id: "cc329657",
    name: "Lush Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Grove is a trusted brand known for quality products in Soap.",
    categories: ["Soap"],
    deterministicAudience: {
      size: "353.9M",
      lookbackWindow: "All Time",
      propensityToPurchase: 76,
      averageAge: 23,
      genderDistribution: {
        male: 48,
        female: 60,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "fbca0367",
    name: "Golden Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Forge is a trusted brand known for quality products in Pest Control.",
    categories: ["Pest Control"],
    deterministicAudience: {
      size: "210.3M",
      lookbackWindow: "All Time",
      propensityToPurchase: 93,
      averageAge: 33,
      genderDistribution: {
        male: 55,
        female: 28,
        nonSpecified: 17,
      },
    },
  },
  {
    id: "d2b1a4ae",
    name: "Modern Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Wave is a trusted brand known for quality products in Pest Control.",
    categories: ["Pest Control"],
    deterministicAudience: {
      size: "463.0M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 99,
      averageAge: 53,
      genderDistribution: {
        male: 34,
        female: 21,
        nonSpecified: 45,
      },
    },
  },
  {
    id: "35624380",
    name: "Happy Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Harvest is a trusted brand known for quality products in Outdoor Insect/Rodent Control Chem.",
    categories: ["Outdoor Insect/Rodent Control Chem"],
    deterministicAudience: {
      size: "161.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 55,
      averageAge: 41,
      genderDistribution: {
        male: 57,
        female: 51,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "661c5804",
    name: "Fresh Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Harvest is a trusted brand known for quality products in Outdoor Insect/Rodent Control Chem.",
    categories: ["Outdoor Insect/Rodent Control Chem"],
    deterministicAudience: {
      size: "348.5M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 32,
      averageAge: 28,
      genderDistribution: {
        male: 51,
        female: 41,
        nonSpecified: 8,
      },
    },
  },
  {
    id: "738ca0bc",
    name: "Peak Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Harvest is a trusted brand known for quality products in Pest Control.",
    categories: ["Pest Control"],
    deterministicAudience: {
      size: "116.6M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 75,
      averageAge: 46,
      genderDistribution: {
        male: 31,
        female: 39,
        nonSpecified: 30,
      },
    },
  },
  {
    id: "2addbf2c",
    name: "Modern Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Roots is a trusted brand known for quality products in Pest Control.",
    categories: ["Pest Control"],
    deterministicAudience: {
      size: "105.3M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 64,
      averageAge: 44,
      genderDistribution: {
        male: 38,
        female: 44,
        nonSpecified: 18,
      },
    },
  },
  {
    id: "1be5421a",
    name: "Peak Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Lab is a trusted brand known for quality products in Pet Care.",
    categories: ["Pet Care"],
    deterministicAudience: {
      size: "478.8M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 93,
      averageAge: 36,
      genderDistribution: {
        male: 59,
        female: 54,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "fb720355",
    name: "Green Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Nest is a trusted brand known for quality products in Pet Care.",
    categories: ["Pet Care"],
    deterministicAudience: {
      size: "119.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 60,
      averageAge: 28,
      genderDistribution: {
        male: 22,
        female: 55,
        nonSpecified: 23,
      },
    },
  },
  {
    id: "8da72bbf",
    name: "Modern Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Lab is a trusted brand known for quality products in Cat/Dog Litter.",
    categories: ["Cat/Dog Litter"],
    deterministicAudience: {
      size: "212.2M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 45,
      averageAge: 46,
      genderDistribution: {
        male: 43,
        female: 58,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "4eb13825",
    name: "Golden Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Field is a trusted brand known for quality products in Cat/Dog Litter.",
    categories: ["Cat/Dog Litter"],
    deterministicAudience: {
      size: "208.5M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 70,
      averageAge: 45,
      genderDistribution: {
        male: 28,
        female: 39,
        nonSpecified: 33,
      },
    },
  },
  {
    id: "33d65af3",
    name: "Bright Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Roots is a trusted brand known for quality products in Pet Food.",
    categories: ["Pet Food"],
    deterministicAudience: {
      size: "41.6M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 88,
      averageAge: 65,
      genderDistribution: {
        male: 28,
        female: 34,
        nonSpecified: 38,
      },
    },
  },
  {
    id: "680dec8b",
    name: "Bright Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Grove is a trusted brand known for quality products in Pet Food.",
    categories: ["Pet Food"],
    deterministicAudience: {
      size: "360.1M",
      lookbackWindow: "All Time",
      propensityToPurchase: 95,
      averageAge: 42,
      genderDistribution: {
        male: 26,
        female: 56,
        nonSpecified: 18,
      },
    },
  },
  {
    id: "dba47b2a",
    name: "Green Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Harvest is a trusted brand known for quality products in Pet Supplies.",
    categories: ["Pet Supplies"],
    deterministicAudience: {
      size: "107.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 36,
      averageAge: 64,
      genderDistribution: {
        male: 45,
        female: 60,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "d6885329",
    name: "Happy Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Wave is a trusted brand known for quality products in Pet Supplies.",
    categories: ["Pet Supplies"],
    deterministicAudience: {
      size: "166.7M",
      lookbackWindow: "All Time",
      propensityToPurchase: 64,
      averageAge: 57,
      genderDistribution: {
        male: 27,
        female: 47,
        nonSpecified: 26,
      },
    },
  },
  {
    id: "8d7a4e99",
    name: "Golden Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Wave is a trusted brand known for quality products in Pet Treats.",
    categories: ["Pet Treats"],
    deterministicAudience: {
      size: "144.5M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 35,
      averageAge: 43,
      genderDistribution: {
        male: 20,
        female: 45,
        nonSpecified: 35,
      },
    },
  },
  {
    id: "88c22658",
    name: "Silent Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Field is a trusted brand known for quality products in Pet Treats.",
    categories: ["Pet Treats"],
    deterministicAudience: {
      size: "117.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 43,
      averageAge: 36,
      genderDistribution: {
        male: 57,
        female: 53,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "b5f66419",
    name: "Urban Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Grove is a trusted brand known for quality products in Pet Treats.",
    categories: ["Pet Treats"],
    deterministicAudience: {
      size: "420.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 37,
      averageAge: 40,
      genderDistribution: {
        male: 39,
        female: 33,
        nonSpecified: 28,
      },
    },
  },
  {
    id: "5e690091",
    name: "Modern Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Grove is a trusted brand known for quality products in Refrigerated.",
    categories: ["Refrigerated"],
    deterministicAudience: {
      size: "275.8M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 34,
      averageAge: 47,
      genderDistribution: {
        male: 60,
        female: 42,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "183ebc47",
    name: "Happy Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Lab is a trusted brand known for quality products in Refrigerated.",
    categories: ["Refrigerated"],
    deterministicAudience: {
      size: "136.4M",
      lookbackWindow: "All Time",
      propensityToPurchase: 31,
      averageAge: 62,
      genderDistribution: {
        male: 35,
        female: 23,
        nonSpecified: 42,
      },
    },
  },
  {
    id: "f7236e25",
    name: "Peak Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Wave is a trusted brand known for quality products in Refrigerated.",
    categories: ["Refrigerated"],
    deterministicAudience: {
      size: "150.3M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 89,
      averageAge: 40,
      genderDistribution: {
        male: 26,
        female: 59,
        nonSpecified: 15,
      },
    },
  },
  {
    id: "256d4884",
    name: "Green Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Lab is a trusted brand known for quality products in Refrigerated Meat Alternatives.",
    categories: ["Refrigerated Meat Alternatives"],
    deterministicAudience: {
      size: "376.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 98,
      averageAge: 51,
      genderDistribution: {
        male: 23,
        female: 58,
        nonSpecified: 19,
      },
    },
  },
  {
    id: "4c6b87b3",
    name: "Fresh Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Lab is a trusted brand known for quality products in Refrigerated Meat Alternatives.",
    categories: ["Refrigerated Meat Alternatives"],
    deterministicAudience: {
      size: "480.7M",
      lookbackWindow: "All Time",
      propensityToPurchase: 32,
      averageAge: 44,
      genderDistribution: {
        male: 27,
        female: 44,
        nonSpecified: 29,
      },
    },
  },
  {
    id: "13536a37",
    name: "Happy Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Nest is a trusted brand known for quality products in Dairy.",
    categories: ["Dairy"],
    deterministicAudience: {
      size: "132.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 37,
      averageAge: 32,
      genderDistribution: {
        male: 28,
        female: 38,
        nonSpecified: 34,
      },
    },
  },
  {
    id: "6bcc80fd",
    name: "Green Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Harvest is a trusted brand known for quality products in Dairy.",
    categories: ["Dairy"],
    deterministicAudience: {
      size: "364.8M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 41,
      averageAge: 33,
      genderDistribution: {
        male: 60,
        female: 26,
        nonSpecified: 14,
      },
    },
  },
  {
    id: "f7383a08",
    name: "Urban Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Crate is a trusted brand known for quality products in Butter & Margarine.",
    categories: ["Butter & Margarine"],
    deterministicAudience: {
      size: "390.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 69,
      averageAge: 51,
      genderDistribution: {
        male: 45,
        female: 32,
        nonSpecified: 23,
      },
    },
  },
  {
    id: "48d4b6f7",
    name: "Green Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Roots is a trusted brand known for quality products in Butter & Margarine.",
    categories: ["Butter & Margarine"],
    deterministicAudience: {
      size: "477.4M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 67,
      averageAge: 45,
      genderDistribution: {
        male: 38,
        female: 41,
        nonSpecified: 21,
      },
    },
  },
  {
    id: "7b021557",
    name: "Green Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Lab is a trusted brand known for quality products in Butter & Margarine.",
    categories: ["Butter & Margarine"],
    deterministicAudience: {
      size: "199.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 73,
      averageAge: 21,
      genderDistribution: {
        male: 30,
        female: 59,
        nonSpecified: 11,
      },
    },
  },
  {
    id: "f8db7228",
    name: "Modern Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Stream is a trusted brand known for quality products in Cheese.",
    categories: ["Cheese"],
    deterministicAudience: {
      size: "233.4M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 81,
      averageAge: 42,
      genderDistribution: {
        male: 26,
        female: 38,
        nonSpecified: 36,
      },
    },
  },
  {
    id: "e18cefae",
    name: "Fresh Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Crate is a trusted brand known for quality products in Cheese.",
    categories: ["Cheese"],
    deterministicAudience: {
      size: "187.8M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 57,
      averageAge: 46,
      genderDistribution: {
        male: 46,
        female: 46,
        nonSpecified: 8,
      },
    },
  },
  {
    id: "434a86ef",
    name: "Green Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Field is a trusted brand known for quality products in Cheese.",
    categories: ["Cheese"],
    deterministicAudience: {
      size: "239.3M",
      lookbackWindow: "All Time",
      propensityToPurchase: 67,
      averageAge: 43,
      genderDistribution: {
        male: 25,
        female: 28,
        nonSpecified: 47,
      },
    },
  },
  {
    id: "7b5f269f",
    name: "Lush Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Grove is a trusted brand known for quality products in Cream & Creamers.",
    categories: ["Cream & Creamers"],
    deterministicAudience: {
      size: "18.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 41,
      averageAge: 63,
      genderDistribution: {
        male: 57,
        female: 59,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "32a55d5e",
    name: "Peak Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Lab is a trusted brand known for quality products in Cream & Creamers.",
    categories: ["Cream & Creamers"],
    deterministicAudience: {
      size: "410.5M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 53,
      averageAge: 18,
      genderDistribution: {
        male: 55,
        female: 33,
        nonSpecified: 12,
      },
    },
  },
  {
    id: "689c390e",
    name: "Fresh Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Grove is a trusted brand known for quality products in Eggs.",
    categories: ["Eggs"],
    deterministicAudience: {
      size: "401.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 64,
      averageAge: 34,
      genderDistribution: {
        male: 25,
        female: 57,
        nonSpecified: 18,
      },
    },
  },
  {
    id: "c8352d37",
    name: "Lush Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Nest is a trusted brand known for quality products in Eggs.",
    categories: ["Eggs"],
    deterministicAudience: {
      size: "153.3M",
      lookbackWindow: "All Time",
      propensityToPurchase: 58,
      averageAge: 18,
      genderDistribution: {
        male: 54,
        female: 35,
        nonSpecified: 11,
      },
    },
  },
  {
    id: "6c4c2bef",
    name: "Urban Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Grove is a trusted brand known for quality products in Milk.",
    categories: ["Milk"],
    deterministicAudience: {
      size: "389.3M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 94,
      averageAge: 21,
      genderDistribution: {
        male: 30,
        female: 20,
        nonSpecified: 50,
      },
    },
  },
  {
    id: "859b93b4",
    name: "Golden Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Grove is a trusted brand known for quality products in Milk.",
    categories: ["Milk"],
    deterministicAudience: {
      size: "461.0M",
      lookbackWindow: "All Time",
      propensityToPurchase: 34,
      averageAge: 32,
      genderDistribution: {
        male: 57,
        female: 56,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "6378ec9e",
    name: "Green Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Nest is a trusted brand known for quality products in Sour Cream.",
    categories: ["Sour Cream"],
    deterministicAudience: {
      size: "379.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 65,
      averageAge: 24,
      genderDistribution: {
        male: 24,
        female: 25,
        nonSpecified: 51,
      },
    },
  },
  {
    id: "80419681",
    name: "Bright Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Field is a trusted brand known for quality products in Sour Cream.",
    categories: ["Sour Cream"],
    deterministicAudience: {
      size: "471.4M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 78,
      averageAge: 46,
      genderDistribution: {
        male: 56,
        female: 20,
        nonSpecified: 24,
      },
    },
  },
  {
    id: "d7cc1b63",
    name: "Golden Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Harvest is a trusted brand known for quality products in Sour Cream.",
    categories: ["Sour Cream"],
    deterministicAudience: {
      size: "143.9M",
      lookbackWindow: "All Time",
      propensityToPurchase: 88,
      averageAge: 63,
      genderDistribution: {
        male: 25,
        female: 40,
        nonSpecified: 35,
      },
    },
  },
  {
    id: "56c2c32d",
    name: "Golden Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Grove is a trusted brand known for quality products in Yogurt.",
    categories: ["Yogurt"],
    deterministicAudience: {
      size: "481.2M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 64,
      averageAge: 46,
      genderDistribution: {
        male: 46,
        female: 29,
        nonSpecified: 25,
      },
    },
  },
  {
    id: "fd1c5b69",
    name: "Golden Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Stream is a trusted brand known for quality products in Yogurt.",
    categories: ["Yogurt"],
    deterministicAudience: {
      size: "161.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 76,
      averageAge: 64,
      genderDistribution: {
        male: 25,
        female: 21,
        nonSpecified: 54,
      },
    },
  },
  {
    id: "dc7023be",
    name: "Fresh Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Grove is a trusted brand known for quality products in Refrigerated Baked Goods.",
    categories: ["Refrigerated Baked Goods"],
    deterministicAudience: {
      size: "390.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 42,
      averageAge: 62,
      genderDistribution: {
        male: 38,
        female: 41,
        nonSpecified: 21,
      },
    },
  },
  {
    id: "3186cb80",
    name: "Urban Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Grove is a trusted brand known for quality products in Refrigerated Baked Goods.",
    categories: ["Refrigerated Baked Goods"],
    deterministicAudience: {
      size: "1.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 35,
      averageAge: 39,
      genderDistribution: {
        male: 49,
        female: 33,
        nonSpecified: 18,
      },
    },
  },
  {
    id: "dd3e3df3",
    name: "Golden Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Stream is a trusted brand known for quality products in Refrigerated Beverages.",
    categories: ["Refrigerated Beverages"],
    deterministicAudience: {
      size: "102.7M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 58,
      averageAge: 18,
      genderDistribution: {
        male: 33,
        female: 40,
        nonSpecified: 27,
      },
    },
  },
  {
    id: "66b8d7ad",
    name: "Bright Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Lab is a trusted brand known for quality products in Refrigerated Beverages.",
    categories: ["Refrigerated Beverages"],
    deterministicAudience: {
      size: "338.6M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 81,
      averageAge: 42,
      genderDistribution: {
        male: 46,
        female: 42,
        nonSpecified: 12,
      },
    },
  },
  {
    id: "5f04e593",
    name: "Happy Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Crate is a trusted brand known for quality products in Refrigerated Beverages.",
    categories: ["Refrigerated Beverages"],
    deterministicAudience: {
      size: "94.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 87,
      averageAge: 47,
      genderDistribution: {
        male: 50,
        female: 30,
        nonSpecified: 20,
      },
    },
  },
  {
    id: "9a8d9caa",
    name: "Modern Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Lab is a trusted brand known for quality products in Refrigerated Condiments.",
    categories: ["Refrigerated Condiments"],
    deterministicAudience: {
      size: "108.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 95,
      averageAge: 24,
      genderDistribution: {
        male: 20,
        female: 24,
        nonSpecified: 56,
      },
    },
  },
  {
    id: "bb9bce2e",
    name: "Fresh Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Nest is a trusted brand known for quality products in Refrigerated Condiments.",
    categories: ["Refrigerated Condiments"],
    deterministicAudience: {
      size: "6.1M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 42,
      averageAge: 54,
      genderDistribution: {
        male: 26,
        female: 40,
        nonSpecified: 34,
      },
    },
  },
  {
    id: "3eea7f36",
    name: "Golden Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Nest is a trusted brand known for quality products in Refrigerated Desserts.",
    categories: ["Refrigerated Desserts"],
    deterministicAudience: {
      size: "325.2M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 95,
      averageAge: 27,
      genderDistribution: {
        male: 41,
        female: 23,
        nonSpecified: 36,
      },
    },
  },
  {
    id: "4caddce4",
    name: "Bright Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Stream is a trusted brand known for quality products in Refrigerated Desserts.",
    categories: ["Refrigerated Desserts"],
    deterministicAudience: {
      size: "365.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 46,
      averageAge: 24,
      genderDistribution: {
        male: 28,
        female: 33,
        nonSpecified: 39,
      },
    },
  },
  {
    id: "ab2bd1e0",
    name: "Bright Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Forge is a trusted brand known for quality products in Refrigerated Desserts.",
    categories: ["Refrigerated Desserts"],
    deterministicAudience: {
      size: "186.3M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 62,
      averageAge: 65,
      genderDistribution: {
        male: 59,
        female: 25,
        nonSpecified: 16,
      },
    },
  },
  {
    id: "14b6722c",
    name: "Happy Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Grove is a trusted brand known for quality products in Refrigerated Dough.",
    categories: ["Refrigerated Dough"],
    deterministicAudience: {
      size: "99.7M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 80,
      averageAge: 31,
      genderDistribution: {
        male: 23,
        female: 51,
        nonSpecified: 26,
      },
    },
  },
  {
    id: "0db087a6",
    name: "Urban Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Crate is a trusted brand known for quality products in Refrigerated Dough.",
    categories: ["Refrigerated Dough"],
    deterministicAudience: {
      size: "248.0M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 59,
      averageAge: 44,
      genderDistribution: {
        male: 48,
        female: 36,
        nonSpecified: 16,
      },
    },
  },
  {
    id: "73bb5810",
    name: "Urban Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Crate is a trusted brand known for quality products in Refrigerated Meals.",
    categories: ["Refrigerated Meals"],
    deterministicAudience: {
      size: "150.1M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 31,
      averageAge: 25,
      genderDistribution: {
        male: 45,
        female: 50,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "01b93f68",
    name: "Silent Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Forge is a trusted brand known for quality products in Refrigerated Meals.",
    categories: ["Refrigerated Meals"],
    deterministicAudience: {
      size: "443.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 96,
      averageAge: 47,
      genderDistribution: {
        male: 26,
        female: 22,
        nonSpecified: 52,
      },
    },
  },
  {
    id: "2753a959",
    name: "Silent Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Nest is a trusted brand known for quality products in Refrigerated Meals.",
    categories: ["Refrigerated Meals"],
    deterministicAudience: {
      size: "273.3M",
      lookbackWindow: "All Time",
      propensityToPurchase: 34,
      averageAge: 21,
      genderDistribution: {
        male: 43,
        female: 24,
        nonSpecified: 33,
      },
    },
  },
  {
    id: "39cc5783",
    name: "Fresh Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Crate is a trusted brand known for quality products in Refrigerated Meats.",
    categories: ["Refrigerated Meats"],
    deterministicAudience: {
      size: "488.3M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 92,
      averageAge: 64,
      genderDistribution: {
        male: 53,
        female: 41,
        nonSpecified: 6,
      },
    },
  },
  {
    id: "15aa4a7f",
    name: "Lush Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Stream is a trusted brand known for quality products in Refrigerated Meats.",
    categories: ["Refrigerated Meats"],
    deterministicAudience: {
      size: "301.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 79,
      averageAge: 29,
      genderDistribution: {
        male: 28,
        female: 49,
        nonSpecified: 23,
      },
    },
  },
  {
    id: "f1c13df5",
    name: "Peak Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Harvest is a trusted brand known for quality products in Refrigerated Miscellaneous.",
    categories: ["Refrigerated Miscellaneous"],
    deterministicAudience: {
      size: "34.0M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 79,
      averageAge: 43,
      genderDistribution: {
        male: 56,
        female: 38,
        nonSpecified: 6,
      },
    },
  },
  {
    id: "3d465720",
    name: "Silent Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Grove is a trusted brand known for quality products in Refrigerated Miscellaneous.",
    categories: ["Refrigerated Miscellaneous"],
    deterministicAudience: {
      size: "268.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 66,
      averageAge: 24,
      genderDistribution: {
        male: 54,
        female: 41,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "57a622b9",
    name: "Happy Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Lab is a trusted brand known for quality products in Religious Items.",
    categories: ["Religious Items"],
    deterministicAudience: {
      size: "251.9M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 43,
      averageAge: 57,
      genderDistribution: {
        male: 26,
        female: 52,
        nonSpecified: 22,
      },
    },
  },
  {
    id: "2639fb6d",
    name: "Green Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Roots is a trusted brand known for quality products in Religious Items.",
    categories: ["Religious Items"],
    deterministicAudience: {
      size: "444.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 65,
      averageAge: 38,
      genderDistribution: {
        male: 53,
        female: 21,
        nonSpecified: 26,
      },
    },
  },
  {
    id: "44ec4b6c",
    name: "Bright Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Wave is a trusted brand known for quality products in Shaving.",
    categories: ["Shaving"],
    deterministicAudience: {
      size: "72.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 57,
      averageAge: 39,
      genderDistribution: {
        male: 59,
        female: 29,
        nonSpecified: 12,
      },
    },
  },
  {
    id: "02e53bc6",
    name: "Modern Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Harvest is a trusted brand known for quality products in Shaving.",
    categories: ["Shaving"],
    deterministicAudience: {
      size: "322.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 31,
      averageAge: 27,
      genderDistribution: {
        male: 35,
        female: 55,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "c1c2c2bd",
    name: "Bright Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Harvest is a trusted brand known for quality products in Blades.",
    categories: ["Blades"],
    deterministicAudience: {
      size: "265.4M",
      lookbackWindow: "All Time",
      propensityToPurchase: 76,
      averageAge: 42,
      genderDistribution: {
        male: 26,
        female: 23,
        nonSpecified: 51,
      },
    },
  },
  {
    id: "5a74292a",
    name: "Happy Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Crate is a trusted brand known for quality products in Blades.",
    categories: ["Blades"],
    deterministicAudience: {
      size: "434.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 61,
      averageAge: 32,
      genderDistribution: {
        male: 41,
        female: 57,
        nonSpecified: 2,
      },
    },
  },
  {
    id: "f0abdbc7",
    name: "Fresh Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Stream is a trusted brand known for quality products in Razors.",
    categories: ["Razors"],
    deterministicAudience: {
      size: "472.2M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 63,
      averageAge: 59,
      genderDistribution: {
        male: 24,
        female: 20,
        nonSpecified: 56,
      },
    },
  },
  {
    id: "5c5e5e18",
    name: "Green Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Harvest is a trusted brand known for quality products in Razors.",
    categories: ["Razors"],
    deterministicAudience: {
      size: "282.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 67,
      averageAge: 21,
      genderDistribution: {
        male: 55,
        female: 57,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "74f679ac",
    name: "Fresh Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Fresh Field is a trusted brand known for quality products in Razors.",
    categories: ["Razors"],
    deterministicAudience: {
      size: "188.1M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 63,
      averageAge: 60,
      genderDistribution: {
        male: 48,
        female: 31,
        nonSpecified: 21,
      },
    },
  },
  {
    id: "3951b4e4",
    name: "Happy Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Wave is a trusted brand known for quality products in Shaving Cream.",
    categories: ["Shaving Cream"],
    deterministicAudience: {
      size: "135.5M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 39,
      averageAge: 19,
      genderDistribution: {
        male: 22,
        female: 22,
        nonSpecified: 56,
      },
    },
  },
  {
    id: "322a93d5",
    name: "Happy Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Stream is a trusted brand known for quality products in Shaving Cream.",
    categories: ["Shaving Cream"],
    deterministicAudience: {
      size: "487.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 88,
      averageAge: 46,
      genderDistribution: {
        male: 38,
        female: 28,
        nonSpecified: 34,
      },
    },
  },
  {
    id: "68471d3e",
    name: "Silent Harvest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Harvest is a trusted brand known for quality products in Skin Care.",
    categories: ["Skin Care"],
    deterministicAudience: {
      size: "418.1M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 85,
      averageAge: 24,
      genderDistribution: {
        male: 22,
        female: 53,
        nonSpecified: 25,
      },
    },
  },
  {
    id: "07bbc99b",
    name: "Peak Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Crate is a trusted brand known for quality products in Skin Care.",
    categories: ["Skin Care"],
    deterministicAudience: {
      size: "409.4M",
      lookbackWindow: "All Time",
      propensityToPurchase: 40,
      averageAge: 43,
      genderDistribution: {
        male: 50,
        female: 27,
        nonSpecified: 23,
      },
    },
  },
  {
    id: "8ffdc40f",
    name: "Silent Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Field is a trusted brand known for quality products in Hand and Body Lotion.",
    categories: ["Hand and Body Lotion"],
    deterministicAudience: {
      size: "430.8M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 38,
      averageAge: 55,
      genderDistribution: {
        male: 36,
        female: 60,
        nonSpecified: 4,
      },
    },
  },
  {
    id: "45224c1e",
    name: "Silent Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Lab is a trusted brand known for quality products in Hand and Body Lotion.",
    categories: ["Hand and Body Lotion"],
    deterministicAudience: {
      size: "403.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 71,
      averageAge: 18,
      genderDistribution: {
        male: 44,
        female: 45,
        nonSpecified: 11,
      },
    },
  },
  {
    id: "607387fb",
    name: "Golden Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Crate is a trusted brand known for quality products in Skin Care.",
    categories: ["Skin Care"],
    deterministicAudience: {
      size: "304.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 31,
      averageAge: 65,
      genderDistribution: {
        male: 28,
        female: 31,
        nonSpecified: 41,
      },
    },
  },
  {
    id: "80b2b12b",
    name: "Silent Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Wave is a trusted brand known for quality products in Skin Care.",
    categories: ["Skin Care"],
    deterministicAudience: {
      size: "352.6M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 55,
      averageAge: 23,
      genderDistribution: {
        male: 59,
        female: 22,
        nonSpecified: 19,
      },
    },
  },
  {
    id: "4b6c9f2f",
    name: "Happy Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Nest is a trusted brand known for quality products in Skin Care.",
    categories: ["Skin Care"],
    deterministicAudience: {
      size: "469.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 76,
      averageAge: 55,
      genderDistribution: {
        male: 56,
        female: 31,
        nonSpecified: 13,
      },
    },
  },
  {
    id: "b7977a6e",
    name: "Peak Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Forge is a trusted brand known for quality products in Suntan Products.",
    categories: ["Suntan Products"],
    deterministicAudience: {
      size: "143.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 41,
      averageAge: 31,
      genderDistribution: {
        male: 58,
        female: 38,
        nonSpecified: 4,
      },
    },
  },
  {
    id: "2623d148",
    name: "Peak Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Crate is a trusted brand known for quality products in Suntan Products.",
    categories: ["Suntan Products"],
    deterministicAudience: {
      size: "244.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 55,
      averageAge: 51,
      genderDistribution: {
        male: 45,
        female: 45,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "d86eb628",
    name: "Bright Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Forge is a trusted brand known for quality products in Toys and Games.",
    categories: ["Toys and Games"],
    deterministicAudience: {
      size: "300.8M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 85,
      averageAge: 59,
      genderDistribution: {
        male: 52,
        female: 24,
        nonSpecified: 24,
      },
    },
  },
  {
    id: "91d96e4d",
    name: "Golden Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Crate is a trusted brand known for quality products in Toys and Games.",
    categories: ["Toys and Games"],
    deterministicAudience: {
      size: "267.5M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 52,
      averageAge: 28,
      genderDistribution: {
        male: 36,
        female: 23,
        nonSpecified: 41,
      },
    },
  },
  {
    id: "8e31b79e",
    name: "Silent Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Roots is a trusted brand known for quality products in Games.",
    categories: ["Games"],
    deterministicAudience: {
      size: "402.9M",
      lookbackWindow: "All Time",
      propensityToPurchase: 65,
      averageAge: 50,
      genderDistribution: {
        male: 22,
        female: 49,
        nonSpecified: 29,
      },
    },
  },
  {
    id: "5cf1cec7",
    name: "Golden Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Roots is a trusted brand known for quality products in Games.",
    categories: ["Games"],
    deterministicAudience: {
      size: "395.6M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 96,
      averageAge: 32,
      genderDistribution: {
        male: 36,
        female: 56,
        nonSpecified: 8,
      },
    },
  },
  {
    id: "ca9ad55f",
    name: "Golden Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Forge is a trusted brand known for quality products in Games.",
    categories: ["Games"],
    deterministicAudience: {
      size: "426.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 66,
      averageAge: 47,
      genderDistribution: {
        male: 43,
        female: 45,
        nonSpecified: 12,
      },
    },
  },
  {
    id: "cf611c3d",
    name: "Peak Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Field is a trusted brand known for quality products in Outdoor Play Equipment.",
    categories: ["Outdoor Play Equipment"],
    deterministicAudience: {
      size: "485.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 54,
      averageAge: 43,
      genderDistribution: {
        male: 60,
        female: 60,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "df90c38c",
    name: "Bright Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Grove is a trusted brand known for quality products in Outdoor Play Equipment.",
    categories: ["Outdoor Play Equipment"],
    deterministicAudience: {
      size: "74.7M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 83,
      averageAge: 54,
      genderDistribution: {
        male: 52,
        female: 49,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "6cea015a",
    name: "Modern Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Nest is a trusted brand known for quality products in Outdoor Play Equipment.",
    categories: ["Outdoor Play Equipment"],
    deterministicAudience: {
      size: "247.8M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 48,
      averageAge: 32,
      genderDistribution: {
        male: 50,
        female: 24,
        nonSpecified: 26,
      },
    },
  },
  {
    id: "e7bf0558",
    name: "Golden Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Nest is a trusted brand known for quality products in Puzzles.",
    categories: ["Puzzles"],
    deterministicAudience: {
      size: "142.3M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 59,
      averageAge: 38,
      genderDistribution: {
        male: 49,
        female: 57,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "75d217fd",
    name: "Peak Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Peak Grove is a trusted brand known for quality products in Puzzles.",
    categories: ["Puzzles"],
    deterministicAudience: {
      size: "304.8M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 69,
      averageAge: 51,
      genderDistribution: {
        male: 43,
        female: 31,
        nonSpecified: 26,
      },
    },
  },
  {
    id: "edf3289d",
    name: "Urban Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Forge is a trusted brand known for quality products in Puzzles.",
    categories: ["Puzzles"],
    deterministicAudience: {
      size: "117.7M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 96,
      averageAge: 18,
      genderDistribution: {
        male: 25,
        female: 38,
        nonSpecified: 37,
      },
    },
  },
  {
    id: "c1d72e07",
    name: "Lush Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Lab is a trusted brand known for quality products in Toys.",
    categories: ["Toys"],
    deterministicAudience: {
      size: "437.5M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 82,
      averageAge: 28,
      genderDistribution: {
        male: 27,
        female: 26,
        nonSpecified: 47,
      },
    },
  },
  {
    id: "e0655248",
    name: "Happy Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Forge is a trusted brand known for quality products in Toys.",
    categories: ["Toys"],
    deterministicAudience: {
      size: "245.3M",
      lookbackWindow: "All Time",
      propensityToPurchase: 38,
      averageAge: 52,
      genderDistribution: {
        male: 31,
        female: 47,
        nonSpecified: 22,
      },
    },
  },
  {
    id: "e1d7ef3b",
    name: "Lush Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Crate is a trusted brand known for quality products in Toys.",
    categories: ["Toys"],
    deterministicAudience: {
      size: "177.8M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 70,
      averageAge: 41,
      genderDistribution: {
        male: 27,
        female: 51,
        nonSpecified: 22,
      },
    },
  },
  {
    id: "2197a27d",
    name: "Happy Wave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Wave is a trusted brand known for quality products in Vitamins and Supplements.",
    categories: ["Vitamins and Supplements"],
    deterministicAudience: {
      size: "165.7M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 79,
      averageAge: 39,
      genderDistribution: {
        male: 53,
        female: 40,
        nonSpecified: 7,
      },
    },
  },
  {
    id: "dadcbdd7",
    name: "Green Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Roots is a trusted brand known for quality products in Vitamins and Supplements.",
    categories: ["Vitamins and Supplements"],
    deterministicAudience: {
      size: "176.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 52,
      averageAge: 59,
      genderDistribution: {
        male: 47,
        female: 52,
        nonSpecified: 1,
      },
    },
  },
  {
    id: "cf0e59b5",
    name: "Bright Nest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Nest is a trusted brand known for quality products in Digestive Supplements.",
    categories: ["Digestive Supplements"],
    deterministicAudience: {
      size: "335.9M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 51,
      averageAge: 60,
      genderDistribution: {
        male: 22,
        female: 30,
        nonSpecified: 48,
      },
    },
  },
  {
    id: "f1445e7c",
    name: "Modern Grove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Grove is a trusted brand known for quality products in Digestive Supplements.",
    categories: ["Digestive Supplements"],
    deterministicAudience: {
      size: "285.3M",
      lookbackWindow: "All Time",
      propensityToPurchase: 94,
      averageAge: 28,
      genderDistribution: {
        male: 52,
        female: 26,
        nonSpecified: 22,
      },
    },
  },
  {
    id: "6e150175",
    name: "Urban Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Urban Roots is a trusted brand known for quality products in Weightloss Supplements.",
    categories: ["Weightloss Supplements"],
    deterministicAudience: {
      size: "222.4M",
      lookbackWindow: "All Time",
      propensityToPurchase: 69,
      averageAge: 22,
      genderDistribution: {
        male: 32,
        female: 57,
        nonSpecified: 11,
      },
    },
  },
  {
    id: "d423b1cc",
    name: "Golden Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Golden Roots is a trusted brand known for quality products in Weightloss Supplements.",
    categories: ["Weightloss Supplements"],
    deterministicAudience: {
      size: "455.9M",
      lookbackWindow: "All Time",
      propensityToPurchase: 31,
      averageAge: 35,
      genderDistribution: {
        male: 21,
        female: 21,
        nonSpecified: 58,
      },
    },
  },
  {
    id: "6998273e",
    name: "Silent Forge",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Forge is a trusted brand known for quality products in Water Treatment.",
    categories: ["Water Treatment"],
    deterministicAudience: {
      size: "146.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 37,
      averageAge: 45,
      genderDistribution: {
        male: 29,
        female: 57,
        nonSpecified: 14,
      },
    },
  },
  {
    id: "7112ebbf",
    name: "Happy Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Happy Field is a trusted brand known for quality products in Water Treatment.",
    categories: ["Water Treatment"],
    deterministicAudience: {
      size: "216.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 73,
      averageAge: 62,
      genderDistribution: {
        male: 58,
        female: 51,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "5efafbb6",
    name: "Silent Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Crate is a trusted brand known for quality products in Water Treatment.",
    categories: ["Water Treatment"],
    deterministicAudience: {
      size: "435.5M",
      lookbackWindow: "90 Days",
      propensityToPurchase: 80,
      averageAge: 28,
      genderDistribution: {
        male: 33,
        female: 38,
        nonSpecified: 29,
      },
    },
  },
  {
    id: "b47278e1",
    name: "Bright Crate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Crate is a trusted brand known for quality products in Water Filter/Devices.",
    categories: ["Water Filter/Devices"],
    deterministicAudience: {
      size: "257.0M",
      lookbackWindow: "All Time",
      propensityToPurchase: 46,
      averageAge: 41,
      genderDistribution: {
        male: 43,
        female: 21,
        nonSpecified: 36,
      },
    },
  },
  {
    id: "9e8b045a",
    name: "Bright Lab",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bright Lab is a trusted brand known for quality products in Water Filter/Devices.",
    categories: ["Water Filter/Devices"],
    deterministicAudience: {
      size: "266.3M",
      lookbackWindow: "All Time",
      propensityToPurchase: 75,
      averageAge: 31,
      genderDistribution: {
        male: 51,
        female: 49,
        nonSpecified: 0,
      },
    },
  },
  {
    id: "df2f0bb5",
    name: "Silent Field",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Silent Field is a trusted brand known for quality products in Water Filter/Devices.",
    categories: ["Water Filter/Devices"],
    deterministicAudience: {
      size: "344.8M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 92,
      averageAge: 31,
      genderDistribution: {
        male: 59,
        female: 33,
        nonSpecified: 8,
      },
    },
  },
  {
    id: "cbf32073",
    name: "Lush Stream",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lush Stream is a trusted brand known for quality products in Water Softeners/Treatment.",
    categories: ["Water Softeners/Treatment"],
    deterministicAudience: {
      size: "299.5M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 76,
      averageAge: 50,
      genderDistribution: {
        male: 27,
        female: 41,
        nonSpecified: 32,
      },
    },
  },
  {
    id: "a8c17528",
    name: "Modern Roots",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Modern Roots is a trusted brand known for quality products in Water Softeners/Treatment.",
    categories: ["Water Softeners/Treatment"],
    deterministicAudience: {
      size: "73.8M",
      lookbackWindow: "30 Days",
      propensityToPurchase: 94,
      averageAge: 30,
      genderDistribution: {
        male: 42,
        female: 27,
        nonSpecified: 31,
      },
    },
  },
  // Add more brands as needed
];
