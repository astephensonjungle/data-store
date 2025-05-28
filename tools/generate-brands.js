const fs = require("fs");
const { categories } = require("../src/data/categories.ts");

// Flatten all category names (Tier 1, 2, 3)
function flattenCategories(nodes) {
  let names = [];
  for (const node of nodes) {
    names.push(node.name);
    if (node.children) {
      names = names.concat(flattenCategories(node.children));
    }
  }
  return names;
}
const allCategories = flattenCategories(categories);

// Some sample brand names and images (replace with real or more varied data as needed)
const sampleBrands = [
  "Gatorade", "Chobani", "Tide", "Coca-Cola", "Kellogg's", "Pepsi", "Nestle", "Oreo", "Sprite", "Red Bull",
  "Doritos", "Lays", "Heinz", "Quaker", "Ben & Jerry's", "Hershey's", "Pringles", "Cheerios", "Fanta", "Monster",
  "Lipton", "Yoplait", "Barilla", "Ritz", "Trident", "Planters", "Nature Valley", "Twix", "Snickers", "Milka",
  "Activia", "Danone", "Philadelphia", "Hellmann's", "Knorr", "Maggi", "Nescafe", "KitKat", "M&M's", "Skittles",
  "Sprite", "Mountain Dew", "7UP", "Dr Pepper", "Sunkist", "Minute Maid", "Capri Sun", "Goldfish", "SunChips", "Smartfood"
];

function getRandomCategories() {
  // Pick 1-3 random categories
  const count = Math.floor(Math.random() * 3) + 1;
  const shuffled = allCategories.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let brandId = 1;
const brands = [];

const brandsPerCategory = 4;
for (const cat of allCategories) {
  for (let i = 0; i < brandsPerCategory; i++) {
    const name = `${randomFrom(adjectives)} ${randomFrom(nouns)} ${brandId}`;
    brands.push({
      name,
      mainImage: '/assets/gradient.png',
      brandImage: '/assets/gradient.png',
      description: `${name} is a trusted consumer brand known for its high-quality products in its category.`,
      categories: [cat],
      deterministicAudience: {
        size: randomAudienceSize(),
        lookbackWindow: Math.random() > 0.5 ? "90 days" : "All Time",
        propensityToPurchase: `${randomInt(60, 100)}%`,
        averageAge: randomInt(18, 65),
        genderDistribution: randomGenderDist(),
      },
    });
    brandId++;
  }
}

const output = `import type { CategoryNode } from "./categories";

export type Brand = {
  name: string;
  mainImage: string;
  brandImage: string;
  description: string;
  categories: string[];
  deterministicAudience: {
    size: string;
    lookbackWindow: string;
    propensityToPurchase: string;
    averageAge: number;
    genderDistribution: {
      male: number;
      female: number;
      nonSpecified: number;
    };
  };
};

export const brands: Brand[] = ${JSON.stringify(brands, null, 2)};
`;

fs.writeFileSync("src/data/brands.ts", output);
console.log("Generated 50 brands in src/data/brands.ts");
