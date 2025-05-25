import sharp from "sharp";
import path from "path";
import fs from "fs";

const gradients = [
  { name: "blue-purple", from: "#3B82F6", to: "#9333EA" },
  { name: "pink-orange", from: "#EC4899", to: "#FB923C" },
  { name: "green-emerald", from: "#4ADE80", to: "#10B981" },
  { name: "yellow-orange", from: "#FACC15", to: "#FB923C" },
  { name: "purple-pink", from: "#A855F7", to: "#EC4899" },
  { name: "indigo-blue", from: "#6366F1", to: "#3B82F6" },
  { name: "red-pink", from: "#EF4444", to: "#EC4899" },
  { name: "teal-cyan", from: "#2DD4BF", to: "#06B6D4" },
];

const sizes = {
  main: { width: 400, height: 400 },
  logo: { width: 48, height: 48 },
};

async function generateGradient(name: string, from: string, to: string) {
  const outputDir = path.join(process.cwd(), "public", "gradients");

  // Ensure the output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Generate main gradient
  await sharp({
    create: {
      width: sizes.main.width,
      height: sizes.main.height,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      {
        input: Buffer.from(
          `<svg><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${from}"/>
          <stop offset="100%" style="stop-color:${to}"/>
        </linearGradient></defs>
        <rect width="100%" height="100%" fill="url(#grad)"/></svg>`
        ),
        blend: "over",
      },
    ])
    .toFile(path.join(outputDir, `${name}.jpg`));

  // Generate logo gradient
  await sharp({
    create: {
      width: sizes.logo.width,
      height: sizes.logo.height,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      {
        input: Buffer.from(
          `<svg><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${from}"/>
          <stop offset="100%" style="stop-color:${to}"/>
        </linearGradient></defs>
        <rect width="100%" height="100%" fill="url(#grad)"/></svg>`
        ),
        blend: "over",
      },
    ])
    .toFile(path.join(outputDir, `${name}-logo.jpg`));
}

async function generateAllGradients() {
  for (const gradient of gradients) {
    await generateGradient(gradient.name, gradient.from, gradient.to);
  }
}

generateAllGradients().catch(console.error);
