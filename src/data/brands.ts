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
    id: "gatorade",
    name: "Gatorade",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Gatorade is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Grooming Supplies", "Chutneys & Relish"],
    deterministicAudience: {
      size: "1.3M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 49,
      genderDistribution: {
        male: 45,
        female: 45,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "chobani",
    name: "Chobani",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Chobani is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Baby Travel Equipment", "General Food"],
    deterministicAudience: {
      size: "2.9M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 29,
      genderDistribution: {
        male: 60,
        female: 35,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "tide",
    name: "Tide",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Tide is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Fruit", "Frozen Meat Alternatives"],
    deterministicAudience: {
      size: "2.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 42,
      genderDistribution: {
        male: 30,
        female: 60,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "oreo",
    name: "Oreo",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Oreo is a trusted consumer brand known for its high-quality products in its category.",
    categories: [
      "Hand and Body Lotion",
      "Salty Snacks & Popcorn",
      "Pest Control",
    ],
    deterministicAudience: {
      size: "4.2M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 34,
      genderDistribution: {
        male: 30,
        female: 60,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "lays",
    name: "Lays",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Lays is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Tortillas, Pitas & Wraps"],
    deterministicAudience: {
      size: "3.3M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 53,
      genderDistribution: {
        male: 30,
        female: 60,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "ben-&-jerry's",
    name: "Ben & Jerry's",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Ben & Jerry's is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Laundry", "Drink Mixes"],
    deterministicAudience: {
      size: "3.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 53,
      genderDistribution: {
        male: 50,
        female: 45,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "heinz",
    name: "Heinz",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Heinz is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Drain & Septic Cleaner", "Butter & Margarine"],
    deterministicAudience: {
      size: "4.1M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 50,
      genderDistribution: {
        male: 45,
        female: 45,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "dove",
    name: "Dove",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Dove is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Home Care", "Frozen", "Caramel & Toffee"],
    deterministicAudience: {
      size: "3.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 36,
      genderDistribution: {
        male: 60,
        female: 35,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "bounty",
    name: "Bounty",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bounty is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["All-Purpose Cleaner", "Pie Crusts & Fillings"],
    deterministicAudience: {
      size: "1.6M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 37,
      genderDistribution: {
        male: 30,
        female: 60,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "old-el-paso",
    name: "Old El Paso",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Old El Paso is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Carbonated Soft Drinks"],
    deterministicAudience: {
      size: "2.3M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 25,
      genderDistribution: {
        male: 45,
        female: 45,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "garnier",
    name: "Garnier",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Garnier is a trusted consumer brand known for its high-quality products in its category.",
    categories: [
      "Toothbrushes & Dental Accessories",
      "Digestive Supplements",
      "Mustard",
    ],
    deterministicAudience: {
      size: "1.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 29,
      genderDistribution: {
        male: 50,
        female: 45,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "huggies",
    name: "Huggies",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Huggies is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Ketchup", "Pantyhose/Nylons", "First Aid"],
    deterministicAudience: {
      size: "3.4M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 51,
      genderDistribution: {
        male: 60,
        female: 35,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "pantene",
    name: "Pantene",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Pantene is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Pet Food", "Oral Care", "Refrigerated Condiments"],
    deterministicAudience: {
      size: "2.1M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 28,
      genderDistribution: {
        male: 30,
        female: 60,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "febreze",
    name: "Febreze",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Febreze is a trusted consumer brand known for its high-quality products in its category.",
    categories: [
      "Baking Nuts & Seeds",
      "Cosmetics Accessories",
      "Carbonated Soft Drinks",
    ],
    deterministicAudience: {
      size: "1.6M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 42,
      genderDistribution: {
        male: 45,
        female: 45,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "colgate",
    name: "Colgate",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Colgate is a trusted consumer brand known for its high-quality products in its category.",
    categories: [
      "Shaving Lotion/Men's Fragrance",
      "Foils, Wraps, and Bags",
      "Bleach",
    ],
    deterministicAudience: {
      size: "4.0M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 49,
      genderDistribution: {
        male: 60,
        female: 35,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "barilla",
    name: "Barilla",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Barilla is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Bath/Body Scrubbers/Massagers", "Hand and Body Lotion"],
    deterministicAudience: {
      size: "4.0M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 50,
      genderDistribution: {
        male: 45,
        female: 45,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "campbell's",
    name: "Campbell's",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Campbell's is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Pickles", "Baking Mixes"],
    deterministicAudience: {
      size: "2.1M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 39,
      genderDistribution: {
        male: 45,
        female: 45,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "nature-valley",
    name: "Nature Valley",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Nature Valley is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Gummy & Chewy", "Sparkling Water, Seltzers & Tonics", "Milk"],
    deterministicAudience: {
      size: "3.5M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 42,
      genderDistribution: {
        male: 50,
        female: 45,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "clorox",
    name: "Clorox",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Clorox is a trusted consumer brand known for its high-quality products in its category.",
    categories: [
      "Other Frozen",
      "Pie Crusts & Fillings",
      "Refrigerated Condiments",
    ],
    deterministicAudience: {
      size: "2.9M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 46,
      genderDistribution: {
        male: 45,
        female: 45,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "crest",
    name: "Crest",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Crest is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Frozen Snacks"],
    deterministicAudience: {
      size: "3.7M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 41,
      genderDistribution: {
        male: 30,
        female: 60,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "quaker",
    name: "Quaker",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Quaker is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Bread"],
    deterministicAudience: {
      size: "2.4M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 54,
      genderDistribution: {
        male: 30,
        female: 60,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "häagen-dazs",
    name: "Häagen-Dazs",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Häagen-Dazs is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Breakfast"],
    deterministicAudience: {
      size: "0.9M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 39,
      genderDistribution: {
        male: 60,
        female: 35,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "palmolive",
    name: "Palmolive",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Palmolive is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Mouthwash & Dental Rinse"],
    deterministicAudience: {
      size: "4.9M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 25,
      genderDistribution: {
        male: 40,
        female: 55,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "smucker's",
    name: "Smucker's",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Smucker's is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Cotton Balls & Swabs"],
    deterministicAudience: {
      size: "1.0M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 28,
      genderDistribution: {
        male: 50,
        female: 45,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "blue-buffalo",
    name: "Blue Buffalo",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Blue Buffalo is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Fragrances - Women's", "Socks"],
    deterministicAudience: {
      size: "3.5M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 29,
      genderDistribution: {
        male: 50,
        female: 45,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "pedigree",
    name: "Pedigree",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Pedigree is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Candy", "Dish Detergent & Soap"],
    deterministicAudience: {
      size: "3.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 47,
      genderDistribution: {
        male: 60,
        female: 35,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "aveeno",
    name: "Aveeno",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Aveeno is a trusted consumer brand known for its high-quality products in its category.",
    categories: [
      "Health & Wellness Aids & Devices",
      "General Merchandise",
      "Games",
    ],
    deterministicAudience: {
      size: "0.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 53,
      genderDistribution: {
        male: 50,
        female: 45,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "ajax",
    name: "Ajax",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Ajax is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Breakfast Bars"],
    deterministicAudience: {
      size: "2.7M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 45,
      genderDistribution: {
        male: 30,
        female: 60,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "vicks",
    name: "Vicks",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Vicks is a trusted consumer brand known for its high-quality products in its category.",
    categories: [
      "Appliance Cleaner",
      "Baby Furniture, Bedding & Decor",
      "Drain & Septic Cleaner",
    ],
    deterministicAudience: {
      size: "3.4M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 55,
      genderDistribution: {
        male: 30,
        female: 60,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "gillette",
    name: "Gillette",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Gillette is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Water Softeners/Treatment", "Refrigerated Dough"],
    deterministicAudience: {
      size: "4.2M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 45,
      genderDistribution: {
        male: 45,
        female: 45,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "kleenex",
    name: "Kleenex",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Kleenex is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Snacks"],
    deterministicAudience: {
      size: "4.2M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 42,
      genderDistribution: {
        male: 50,
        female: 45,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "charmin",
    name: "Charmin",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Charmin is a trusted consumer brand known for its high-quality products in its category.",
    categories: [
      "HFSS Products [High Fat, Sugar, Salt]",
      "Nursing and Feeding Products",
      "Pantyhose/Nylons",
    ],
    deterministicAudience: {
      size: "4.2M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 44,
      genderDistribution: {
        male: 50,
        female: 45,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "cheerios",
    name: "Cheerios",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Cheerios is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Fruit Snacks", "Flours & Meals"],
    deterministicAudience: {
      size: "4.1M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 27,
      genderDistribution: {
        male: 60,
        female: 35,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "rice-krispies",
    name: "Rice Krispies",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Rice Krispies is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Chocolate"],
    deterministicAudience: {
      size: "4.8M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 35,
      genderDistribution: {
        male: 30,
        female: 60,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "froot-loops",
    name: "Froot Loops",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Froot Loops is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Meal Kits", "Yeast"],
    deterministicAudience: {
      size: "3.9M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 25,
      genderDistribution: {
        male: 40,
        female: 55,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "reese's",
    name: "Reese's",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Reese's is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Breakfast", "Office/School Supplies", "Breakfast Bars"],
    deterministicAudience: {
      size: "4.9M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 41,
      genderDistribution: {
        male: 40,
        female: 55,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "planters",
    name: "Planters",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Planters is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Frozen Meat/Poultry/Seafood", "Yeast"],
    deterministicAudience: {
      size: "3.5M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 55,
      genderDistribution: {
        male: 30,
        female: 60,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "hidden-valley",
    name: "Hidden Valley",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Hidden Valley is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Hair Spray/Spritz", "Frozen Fruits and Vegetables"],
    deterministicAudience: {
      size: "4.6M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 51,
      genderDistribution: {
        male: 60,
        female: 35,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "green-giant",
    name: "Green Giant",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Green Giant is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Fragrance", "Stock & Broths", "Digestive Health"],
    deterministicAudience: {
      size: "3.9M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 55,
      genderDistribution: {
        male: 30,
        female: 60,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "swiffer",
    name: "Swiffer",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Swiffer is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Allergy & Sinus", "Carbonated Soft Drinks", "Cosmetics-Nail"],
    deterministicAudience: {
      size: "3.1M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 29,
      genderDistribution: {
        male: 50,
        female: 45,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "suave",
    name: "Suave",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Suave is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Fruit Snacks", "Glass Cleaner"],
    deterministicAudience: {
      size: "0.6M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 40,
      genderDistribution: {
        male: 45,
        female: 45,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "caress",
    name: "Caress",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Caress is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Water Treatment"],
    deterministicAudience: {
      size: "4.8M",
      lookbackWindow: "All Time",
      propensityToPurchase: 100,
      averageAge: 47,
      genderDistribution: {
        male: 60,
        female: 35,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "tresemmé",
    name: "Tresemmé",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Tresemmé is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Laundry Stain Removers"],
    deterministicAudience: {
      size: "2.6M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 43,
      genderDistribution: {
        male: 30,
        female: 60,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "bertolli",
    name: "Bertolli",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Bertolli is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Diapers", "Laundry Scent Boosters & Additives"],
    deterministicAudience: {
      size: "2.1M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 27,
      genderDistribution: {
        male: 45,
        female: 45,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "skippy",
    name: "Skippy",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Skippy is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["All-Purpose Cleaner", "Water Softeners/Treatment"],
    deterministicAudience: {
      size: "1.9M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 53,
      genderDistribution: {
        male: 45,
        female: 45,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "knorr",
    name: "Knorr",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Knorr is a trusted consumer brand known for its high-quality products in its category.",
    categories: [
      "Salsa & Dips",
      "Adult Incontinence",
      "Household/Plastics/Storage",
    ],
    deterministicAudience: {
      size: "4.9M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 40,
      genderDistribution: {
        male: 40,
        female: 55,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "ragu",
    name: "Ragu",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Ragu is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Writing Instruments"],
    deterministicAudience: {
      size: "2.8M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 55,
      genderDistribution: {
        male: 40,
        female: 55,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "velveeta",
    name: "Velveeta",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Velveeta is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Toothpaste", "Olives"],
    deterministicAudience: {
      size: "0.6M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 55,
      genderDistribution: {
        male: 45,
        female: 45,
        nonSpecified: 10,
      },
    },
  },
  {
    id: "hellmann's",
    name: "Hellmann's",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Hellmann's is a trusted consumer brand known for its high-quality products in its category.",
    categories: [
      "Personal Care",
      "Baking Syrup",
      "Sparkling Water, Seltzers & Tonics",
    ],
    deterministicAudience: {
      size: "1.7M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 28,
      genderDistribution: {
        male: 60,
        female: 35,
        nonSpecified: 5,
      },
    },
  },
  {
    id: "purex",
    name: "Purex",
    mainImage: "/assets/gradient.png",
    brandImage: "/assets/gradient.png",
    description:
      "Purex is a trusted consumer brand known for its high-quality products in its category.",
    categories: ["Weightloss Supplements"],
    deterministicAudience: {
      size: "2.0M",
      lookbackWindow: "90 days",
      propensityToPurchase: 100,
      averageAge: 32,
      genderDistribution: {
        male: 45,
        female: 45,
        nonSpecified: 10,
      },
    },
  },
  // Add more brands as needed
];
