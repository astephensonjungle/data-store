import { categories } from "@/data/categories";
import { brands } from "@/data/brands";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useDiscoverTab } from "@/context/DiscoverTabContext";

// Helper to parse '1.3M' to 1.3
function parseSize(size: string) {
  if (typeof size !== "string") return 0;
  const match = size.match(/([\d.]+)M/);
  return match ? parseFloat(match[1]) : 0;
}

// Helper to get all subcategory names for a given category
function getAllSubcategoryNames(categoryName: string): string[] {
  const category = categories.find((cat) => cat.name === categoryName);
  if (!category) return [categoryName];

  const subcategories: string[] = [categoryName];

  if (category.children) {
    category.children.forEach((sub) => {
      subcategories.push(sub.name);
      if (sub.children) {
        sub.children.forEach((leaf) => {
          subcategories.push(leaf.name);
        });
      }
    });
  }

  return subcategories;
}

// Helper to sum audience sizes for a category
function getCategoryAudienceSum(categoryName: string) {
  const allCategories = getAllSubcategoryNames(categoryName);
  return brands
    .filter((b) => b.categories.some((cat) => allCategories.includes(cat)))
    .reduce((sum, b) => sum + parseSize(b.deterministicAudience.size), 0);
}

export default function CategoriesTab() {
  const router = useRouter();
  const { setTab } = useDiscoverTab();

  const handleCategoryClick = (name: string) => {
    setTab("brands");
    router.push(`/discover?category=${encodeURIComponent(name)}`);
  };

  return (
    <div className="space-y-10">
      {categories.map((cat) => {
        const catSum = getCategoryAudienceSum(cat.name);
        return (
          <div key={cat.name}>
            <Button
              variant="ghost"
              className="text-xl font-normal flex items-center gap-2 mb-4 p-0 h-auto text-black hover:text-[#b3a47a] hover:bg-transparent cursor-pointer"
              onClick={() => handleCategoryClick(cat.name)}
            >
              {cat.name}
              <span className="text-[#b3a47a] font-normal text-xl ml-1 align-middle">
                {catSum
                  ? `${catSum.toLocaleString(undefined, {
                      maximumFractionDigits: 1,
                    })}M`
                  : "0M"}
              </span>
            </Button>
            {/* Tier 2 and 3 */}
            <div className="flex flex-wrap gap-2">
              {cat.children?.map((sub) => {
                const subSum = getCategoryAudienceSum(sub.name);
                return sub.children && sub.children.length > 0 ? (
                  <div key={sub.name} className="w-full mb-2">
                    <div className="font-medium text-lg mb-2 flex items-center gap-2">
                      {sub.name}
                      <span className="text-[#b3a47a] font-normal text-lg ml-1 align-middle">
                        {subSum
                          ? `${subSum.toLocaleString(undefined, {
                              maximumFractionDigits: 1,
                            })}M`
                          : "0M"}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4 ml-2">
                      {sub.children.map((leaf) => {
                        const leafSum = getCategoryAudienceSum(leaf.name);
                        return (
                          <Button
                            key={leaf.name}
                            className="rounded-full bg-transparent text-black text-sm font-normal px-4 py-1 border border-[#DCD2BF] hover:bg-[#E9E3D4] transition-all cursor-pointer flex items-center gap-2 shadow-none"
                            variant="secondary"
                            onClick={() => handleCategoryClick(leaf.name)}
                          >
                            {leaf.name}
                            <span className="text-[#b3a47a] font-normal ml-1 align-middle">
                              {leafSum
                                ? `${leafSum.toLocaleString(undefined, {
                                    maximumFractionDigits: 1,
                                  })}M`
                                : "0M"}
                            </span>
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <Button
                    key={sub.name}
                    className="rounded-full bg-transparent text-black text-base font-medium px-4 py-1 border border-[#DCD2BF] hover:bg-[#E9E3D4] transition-all cursor-pointer flex items-center gap-2 shadow-none"
                    variant="secondary"
                    onClick={() => handleCategoryClick(sub.name)}
                  >
                    {sub.name}
                    <span className="text-[#b3a47a] font-normal ml-1 align-middle">
                      {subSum
                        ? `${subSum.toLocaleString(undefined, {
                            maximumFractionDigits: 1,
                          })}M`
                        : "0M"}
                    </span>
                  </Button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
