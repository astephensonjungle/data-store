const fs = require("fs");

// Paste your JSON data here:
const flat = require("./categories-flat.json"); // Save your JSON as tools/categories-flat.json

function buildTree(data) {
  const tier1Map = new Map();

  for (const row of data) {
    const t1 = row["Tier 1"];
    const t2 = row["Tier 2"];
    const t3 = row["Tier 3"];

    if (!tier1Map.has(t1)) {
      tier1Map.set(t1, { name: t1, children: [] });
    }
    const t1Node = tier1Map.get(t1);

    if (t2) {
      let t2Node = t1Node.children.find((c) => c.name === t2);
      if (!t2Node) {
        t2Node = { name: t2, children: [] };
        t1Node.children.push(t2Node);
      }
      if (t3) {
        t2Node.children.push({ name: t3 });
      }
    }
  }

  // Remove empty children arrays
  function clean(node) {
    if (node.children && node.children.length === 0) {
      delete node.children;
    } else if (node.children) {
      node.children = node.children.map(clean);
    }
    return node;
  }

  return Array.from(tier1Map.values()).map(clean);
}

const nested = buildTree(flat);

// Write to src/data/categories.ts
const output = `export type CategoryNode = {
  name: string;
  children?: CategoryNode[];
};

export const categories: CategoryNode[] = ${JSON.stringify(nested, null, 2)};
`;

fs.writeFileSync("src/data/categories.ts", output);
console.log("Nested categories written to src/data/categories.ts");
