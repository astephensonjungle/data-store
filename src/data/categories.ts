export type CategoryNode = {
  name: string;
  children?: CategoryNode[];
};

export const categories: CategoryNode[] = [
  {
    name: "Baby and Toddler Products",
    children: [
      {
        name: "Baby Bath & Potty",
      },
      {
        name: "Baby Furniture, Bedding & Decor",
      },
      {
        name: "Baby Health & Safety",
      },
      {
        name: "Baby Travel Equipment",
      },
      {
        name: "Diapers",
      },
      {
        name: "Nursing and Feeding Products",
      },
    ],
  },
  {
    name: "Back to School Supplies",
  },
  {
    name: "Barbeque",
    children: [
      {
        name: "Charcoal",
      },
      {
        name: "Charcoal Lighter Fluids",
      },
    ],
  },
  {
    name: "Beverages",
    children: [
      {
        name: "Shakes & Smoothies",
      },
      {
        name: "Sparkling Water, Seltzers & Tonics",
      },
      {
        name: "Carbonated Soft Drinks",
      },
      {
        name: "Coffee and Tea",
      },
      {
        name: "Drink Mixes",
      },
      {
        name: "Juices",
      },
      {
        name: "Sports/Energy Drinks",
      },
      {
        name: "Water",
      },
    ],
  },
  {
    name: "Cosmetics",
    children: [
      {
        name: "Cosmetics Accessories",
      },
      {
        name: "Cosmetics-Nail",
      },
      {
        name: "Eye",
      },
      {
        name: "Facial",
      },
      {
        name: "Lip",
      },
      {
        name: "Storage",
      },
    ],
  },
  {
    name: "Disposable Tableware",
    children: [
      {
        name: "Cups and Plates",
      },
      {
        name: "Disposable Tableware",
      },
    ],
  },
  {
    name: "Foils, Wraps, and Bags",
    children: [
      {
        name: "Foil Pans",
      },
      {
        name: "Foils and Wraps",
      },
      {
        name: "Food and Trash Bags",
      },
    ],
  },
  {
    name: "Fragrance",
    children: [
      {
        name: "Fragrances - Women's",
      },
      {
        name: "Shaving Lotion/Men's Fragrance",
      },
    ],
  },
  {
    name: "Frozen",
    children: [
      {
        name: "Frozen Pizza",
      },
      {
        name: "Ice",
      },
      {
        name: "Frozen Meat Alternatives",
      },
      {
        name: "Frozen Baked Goods",
      },
      {
        name: "Frozen Beverages",
      },
      {
        name: "Frozen Desserts",
      },
      {
        name: "Frozen Fruits and Vegetables",
      },
      {
        name: "Frozen Juices",
      },
      {
        name: "Frozen Meals",
      },
      {
        name: "Frozen Meat/Poultry/Seafood",
      },
      {
        name: "Frozen Snacks",
      },
      {
        name: "Other Frozen",
      },
    ],
  },
  {
    name: "Canned & Packaged",
    children: [
      { name: "Beans" },
      { name: "Canned Meat" },
      { name: "Dried Beans & Vegetables" },
      { name: "Fruit" },
      { name: "Soup" },
      { name: "Stock & Broths" },
      { name: "Vegetables" },
    ],
  },
  { name: "Pasta, Rice & Grains" },
  { name: "Baby Food" },
  {
    name: "Bakery",
    children: [
      { name: "Bagels" },
      { name: "Bread" },
      { name: "Cupcakes & Muffins" },
      { name: "English Muffins" },
      { name: "Pastries & Doughnuts" },
      { name: "Pies & Cakes" },
      { name: "Pizza Crust" },
      { name: "Tortillas, Pitas & Wraps" },
    ],
  },
  {
    name: "Baking",
    children: [
      { name: "Baking Chips & Chocolate" },
      { name: "Baking Mixes" },
      { name: "Baking Nuts & Seeds" },
      { name: "Baking Powder & Soda" },
      { name: "Baking Syrup" },
      { name: "Breadcrumbs & Batters" },
      { name: "Condensed & Powdered Milk" },
      { name: "Flours & Meals" },
      { name: "Frosting, Decorations & Toppings" },
      { name: "Marshmallows" },
      { name: "Oil & Shortening" },
      { name: "Pie Crusts & Fillings" },
      { name: "Sugars" },
      { name: "Yeast" },
    ],
  },
  {
    name: "Breakfast",
    children: [
      { name: "Breakfast Bars" },
      { name: "Cereal & Granola" },
      { name: "Oatmeal & Grits" },
      { name: "Toaster Pastries" },
    ],
  },
  {
    name: "Candy",
    children: [
      { name: "Caramel & Toffee" },
      { name: "Chocolate" },
      { name: "Fruit Flavored & Sour" },
      { name: "Gum" },
      { name: "Gummy & Chewy" },
      { name: "Hard Candy & Lollipops" },
      { name: "Mints" },
    ],
  },
  {
    name: "Condiments and Sauces",
    children: [
      { name: "Chutneys & Relish" },
      { name: "Croutons & Salad Toppers" },
      { name: "Jam, Jelly & Preserves" },
      { name: "Ketchup" },
      { name: "Marinated Fruit & Vegetables" },
      { name: "Mayonnaise & Sandwich Spread" },
      { name: "Mustard" },
      { name: "Nut Butter & Spread" },
      { name: "Olives" },
      { name: "Pickles" },
      { name: "Salad Dressing" },
      { name: "Salt, Spices & Seasoning" },
      { name: "Sauces" },
      { name: "Syrups & Sweeteners" },
      { name: "Vinegar & Cooking Wine" },
    ],
  },
  { name: "Cookies and Crackers" },
  { name: "Fruit" },
  { name: "Meals" },
  {
    name: "Snacks",
    children: [
      { name: "Fruit Snacks" },
      { name: "Nuts & Dried Fruit" },
      { name: "Pudding & Gelatin" },
      { name: "Salsa & Dips" },
      { name: "Salty Snacks & Popcorn" },
      { name: "Snack Bars" },
      { name: "Snack Meats & Jerky" },
    ],
  },
  { name: "Vegetables" },
  {
    name: "General Merchandise",
  },
  {
    name: "Grooming Supplies",
  },
  {
    name: "Hair Care",
    children: [
      {
        name: "Hair Accessories",
      },
      {
        name: "Hair Coloring",
      },
      {
        name: "Hair Conditioner",
      },
      {
        name: "Hair Growth Products",
      },
      {
        name: "Hair Spray/Spritz",
      },
      {
        name: "Hair Styling Gel/Mousse",
      },
      {
        name: "Home Permanent/Relaxer Kits",
      },
      {
        name: "Shampoo",
      },
    ],
  },
  {
    name: "HFSS Products [High Fat, Sugar, Salt]",
  },
  {
    name: "Home Care",
    children: [
      {
        name: "Household Cleaning",
        children: [
          {
            name: "All-Purpose Cleaner",
          },
          {
            name: "Appliance Cleaner",
          },
          {
            name: "Bathroom Cleaner",
          },
          {
            name: "Carpet & Floor Cleaner",
          },
          {
            name: "Cleaning Tools",
          },
          {
            name: "Dish Detergent & Soap",
          },
          {
            name: "Drain & Septic Cleaner",
          },
          {
            name: "Furniture & Wood Cleaner",
          },
          {
            name: "Glass Cleaner",
          },
          {
            name: "Kitchen Surface Cleaner",
          },
        ],
      },
      {
        name: "Laundry",
        children: [
          {
            name: "Bleach",
          },
          {
            name: "Laundry Detergent",
          },
          {
            name: "Laundry Scent Boosters & Additives",
          },
          {
            name: "Laundry Stain Removers",
          },
        ],
      },
    ],
  },
  {
    name: "Hosiery",
    children: [
      {
        name: "Pantyhose/Nylons",
      },
      {
        name: "Socks",
      },
      {
        name: "Tights",
      },
    ],
  },
  {
    name: "Household/Plastics/Storage",
    children: [
      {
        name: "Bottles",
      },
      {
        name: "Drinkware",
      },
      {
        name: "Household Plastics",
      },
      {
        name: "Kitchen Storage",
      },
    ],
  },
  {
    name: "Meal Kits",
  },
  {
    name: "Miscellaneous General Merch",
  },
  {
    name: "Office/School Supplies",
    children: [
      {
        name: "Children's Art Supplies",
      },
      {
        name: "Computer Disks Frmtd/UnFrmtd",
      },
      {
        name: "Office Products",
      },
      {
        name: "Writing Instruments",
      },
    ],
  },
  {
    name: "Over the Counter Medication",
    children: [
      {
        name: "Allergy & Sinus",
      },
      {
        name: "Cold, Cough & Flu",
      },
      {
        name: "Digestive Health",
      },
      {
        name: "Pain Reliever",
      },
    ],
  },
  {
    name: "Paper Products",
    children: [
      {
        name: "Facial Tissue",
      },
      {
        name: "Paper Napkins",
      },
      {
        name: "Paper Towels",
      },
      {
        name: "Toilet Tissue",
      },
    ],
  },
  {
    name: "Personal Care",
    children: [
      {
        name: "Adult Incontinence",
      },
      {
        name: "Cotton Balls & Swabs",
      },
      {
        name: "Feminine Needs",
      },
      {
        name: "First Aid",
      },
      {
        name: "Foot Care",
      },
      {
        name: "Health & Wellness Aids & Devices",
      },
      {
        name: "Oral Care",
        children: [
          {
            name: "Denture Care",
          },
          {
            name: "Mouthwash & Dental Rinse",
          },
          {
            name: "Toothbrushes & Dental Accessories",
          },
          {
            name: "Toothpaste",
          },
        ],
      },
      {
        name: "Vision Care",
      },
    ],
  },
  {
    name: "Personal Cleansing",
    children: [
      {
        name: "Bath Products",
      },
      {
        name: "Bath/Body Scrubbers/Massagers",
      },
      {
        name: "Deodorant",
      },
      {
        name: "Moist Towelettes",
      },
      {
        name: "Soap",
      },
    ],
  },
  {
    name: "Pest Control",
    children: [
      {
        name: "Outdoor Insect/Rodent Control Chem",
      },
      {
        name: "Pest Control",
      },
    ],
  },
  {
    name: "Pet Care",
    children: [
      {
        name: "Cat/Dog Litter",
      },
      {
        name: "Pet Food",
      },
      {
        name: "Pet Supplies",
      },
      {
        name: "Pet Treats",
      },
    ],
  },
  {
    name: "Refrigerated",
    children: [
      {
        name: "Refrigerated Meat Alternatives",
      },
      {
        name: "Dairy",
        children: [
          {
            name: "Butter & Margarine",
          },
          {
            name: "Cheese",
          },
          {
            name: "Cream & Creamers",
          },
          {
            name: "Eggs",
          },
          {
            name: "Milk",
          },
          {
            name: "Sour Cream",
          },
          {
            name: "Yogurt",
          },
        ],
      },
      {
        name: "Refrigerated Baked Goods",
      },
      {
        name: "Refrigerated Beverages",
      },
      {
        name: "Refrigerated Condiments",
      },
      {
        name: "Refrigerated Desserts",
      },
      {
        name: "Refrigerated Dough",
      },
      {
        name: "Refrigerated Meals",
      },
      {
        name: "Refrigerated Meats",
      },
      {
        name: "Refrigerated Miscellaneous",
      },
    ],
  },
  {
    name: "Religious Items",
  },
  {
    name: "Shaving",
    children: [
      {
        name: "Blades",
      },
      {
        name: "Razors",
      },
      {
        name: "Shaving Cream",
      },
    ],
  },
  {
    name: "Skin Care",
    children: [
      {
        name: "Hand and Body Lotion",
      },
      {
        name: "Skin Care",
      },
      {
        name: "Suntan Products",
      },
    ],
  },
  {
    name: "Toys and Games",
    children: [
      {
        name: "Games",
      },
      {
        name: "Outdoor Play Equipment",
      },
      {
        name: "Puzzles",
      },
      {
        name: "Toys",
      },
    ],
  },
  {
    name: "Vitamins and Supplements",
    children: [
      {
        name: "Digestive Supplements",
      },
      {
        name: "Weightloss Supplements",
      },
    ],
  },
  {
    name: "Water Treatment",
    children: [
      {
        name: "Water Filter/Devices",
      },
      {
        name: "Water Softeners/Treatment",
      },
    ],
  },
];
