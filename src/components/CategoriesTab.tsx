import { categories } from "@/data/categories";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useDiscoverTab } from "@/context/DiscoverTabContext";

export default function CategoriesTab() {
  const router = useRouter();
  const { setTab } = useDiscoverTab();

  const handleCategoryClick = (name: string) => {
    setTab("brands");
    router.push(`/discover?category=${encodeURIComponent(name)}`);
  };

  return (
    <div className="space-y-10">
      {categories.map((cat) => (
        <div key={cat.name}>
          <Button
            variant="link"
            className="text-xl font-bold flex items-center gap-2 mb-4 p-0 h-auto hover:underline"
            onClick={() => handleCategoryClick(cat.name)}
          >
            {cat.name}
          </Button>
          {/* Tier 2 and 3 */}
          <div className="flex flex-wrap gap-2">
            {cat.children?.map((sub) =>
              sub.children && sub.children.length > 0 ? (
                <div key={sub.name} className="w-full mb-2">
                  <div className="font-semibold text-lg mb-2">{sub.name}</div>
                  <div className="flex flex-wrap gap-2 mb-4 ml-2">
                    {sub.children.map((leaf) => (
                      <Button
                        key={leaf.name}
                        className="rounded-full bg-neutral-200 text-black text-base font-medium px-4 py-1 shadow-none hover:bg-neutral-300"
                        variant="secondary"
                        onClick={() => handleCategoryClick(leaf.name)}
                      >
                        {leaf.name}
                      </Button>
                    ))}
                  </div>
                </div>
              ) : (
                <Button
                  key={sub.name}
                  className="rounded-full bg-neutral-200 text-black text-base font-medium px-4 py-1 shadow-none hover:bg-neutral-300"
                  variant="secondary"
                  onClick={() => handleCategoryClick(sub.name)}
                >
                  {sub.name}
                </Button>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
