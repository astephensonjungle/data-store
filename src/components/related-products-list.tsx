import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const products = [
	{
		name: "Gatorade Blue",
		image: "/assets/products/1.png",
	},
	{
		name: "Gatorade Red",
		image: "/assets/products/2.png",
	},
	{
		name: "Gatorade Yellow",
		image: "/assets/products/3.png",
	},
	{
		name: "Gatorade Purple",
		image: "/assets/products/4.png",
	},
	{
		name: "Gatorade Orange",
		image: "/assets/products/5.png",
	},
];

const ProductDetailSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
	<div className="flex flex-col gap-2">
		<h3 className="font-medium">{title}</h3>
		<div className="flex flex-wrap gap-2">{children}</div>
	</div>
);

const ProductDetailBadge = ({ children }: { children: React.ReactNode }) => (
	<div className="rounded-ful rounded-md bg-secondary px-3 py-1 font-medium text-foreground text-sm">{children}</div>
);

export function RelatedProductsList() {
	return (
		<div className="grid w-full grid-cols-2 gap-2 lg:grid-cols-5">
			{products.map((product) => (
				<Sheet key={product.name}>
					<SheetTrigger asChild>
						<button type="button" className="flex flex-col gap-2 rounded-lg border border-border p-3 text-left">
							<div className="flex flex-1 items-center justify-center rounded-lg bg-white p-2">
								<Image
									src={product.image}
									alt={product.name}
									width={100}
									height={100}
									className="h-full w-auto object-contain"
								/>
							</div>
							<div className="mt-2 font-medium text-sm">{product.name}</div>
							<div className="w-fit rounded-full bg-secondary px-2 py-1 font-medium text-foreground text-sm">GTIN</div>
							<div className="text-left text-muted-foreground text-sm">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut libero pariatur sit nulla, necessitatibus
								consequatur.
							</div>
						</button>
					</SheetTrigger>
					<SheetContent className="flex flex-col gap-0 bg-background p-0 sm:max-w-lg">
						<div className="flex h-1/3 items-center justify-center bg-white p-8">
							<Image
								src={product.image}
								alt={product.name}
								width={200}
								height={200}
								className="h-full w-auto object-contain"
							/>
						</div>

						<div className="flex flex-col gap-4 overflow-y-auto p-8">
							<SheetHeader className="p-0">
								<SheetTitle className="text-3xl">{product.name}</SheetTitle>
							</SheetHeader>
							<div className="w-fit rounded-full bg-secondary px-2 py-1 font-medium text-foreground text-sm">GTIN</div>
							<p className="text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur. Tellus et platea in massa nunc est enim cursus ipsum.
							</p>

							<div className="flex flex-col gap-4">
								<ProductDetailSection title="Product Sizes">
									<ProductDetailBadge>12 oz</ProductDetailBadge>
									<ProductDetailBadge>16 oz</ProductDetailBadge>
									<ProductDetailBadge>24 oz</ProductDetailBadge>
									<ProductDetailBadge>32 oz</ProductDetailBadge>
								</ProductDetailSection>

								<ProductDetailSection title="Claims">
									<ProductDetailBadge>Low Calorie</ProductDetailBadge>
									<ProductDetailBadge>No Added Sugar</ProductDetailBadge>
									<ProductDetailBadge>Electrolyte Enhanced</ProductDetailBadge>
									<ProductDetailBadge>Vegan Friendly</ProductDetailBadge>
								</ProductDetailSection>

								<ProductDetailSection title="Containers">
									<ProductDetailBadge>Canister</ProductDetailBadge>
									<ProductDetailBadge>Plastic Bottle</ProductDetailBadge>
									<ProductDetailBadge>Aluminum Can</ProductDetailBadge>
									<ProductDetailBadge>Tetra Pak</ProductDetailBadge>
								</ProductDetailSection>

								<ProductDetailSection title="Packaging">
									<ProductDetailBadge>Plastic Bottle</ProductDetailBadge>
									<ProductDetailBadge>Aluminum Can</ProductDetailBadge>
									<ProductDetailBadge>Tetra Pak</ProductDetailBadge>
									<ProductDetailBadge>Glass Jar</ProductDetailBadge>
								</ProductDetailSection>

								<ProductDetailSection title="Price">
									<ProductDetailBadge>$</ProductDetailBadge>
									<ProductDetailBadge>$$</ProductDetailBadge>
									<ProductDetailBadge>$$$</ProductDetailBadge>
								</ProductDetailSection>

								<ProductDetailSection title="Properties">
									<ProductDetailBadge>Lorem ipsum</ProductDetailBadge>
									<ProductDetailBadge>Lorem ipsum</ProductDetailBadge>
									<ProductDetailBadge>Lorem ipsum</ProductDetailBadge>
									<ProductDetailBadge>Lorem ipsum</ProductDetailBadge>
									<ProductDetailBadge>Lorem ipsum</ProductDetailBadge>
									<ProductDetailBadge>Lorem ipsum</ProductDetailBadge>
								</ProductDetailSection>
							</div>
						</div>
					</SheetContent>
				</Sheet>
			))}
		</div>
	);
}
