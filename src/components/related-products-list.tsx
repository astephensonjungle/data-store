import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import type { RouterOutputs } from "@/trpc/react";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
const ProductDetailSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
	<div className="flex flex-col gap-2">
		<h3 className="font-medium">{title}</h3>
		<div className="flex flex-wrap gap-2">{children}</div>
	</div>
);

const ProductDetailBadge = ({ children }: { children: React.ReactNode }) => (
	<div className="rounded-ful rounded-md bg-secondary px-3 py-1 font-medium text-foreground text-sm">{children}</div>
);

export async function RelatedProductsList({
	products,
}: { products: NonNullable<RouterOutputs["audience"]["relatedProducts"]> }) {
	return (
		<div className="flex w-full gap-2 overflow-x-auto">
			{products.map((product) => (
				<Sheet key={product.id}>
					<SheetTrigger asChild>
						<button
							type="button"
							className="flex w-[200px] flex-none flex-col gap-2 rounded-lg border border-border p-3 text-left"
						>
							<div className="flex aspect-square items-center justify-center rounded-lg bg-white p-2">
								{product.imageUrl && (
									<Image
										src={product.imageUrl}
										alt={product.title}
										width={100}
										height={100}
										className="aspect-square w-full object-cover"
									/>
								)}
								{!product.imageUrl && (
									<div className="flex aspect-square flex-1 flex-col items-center justify-center rounded-lg bg-white p-2">
										<ImageIcon className="mb-2 h-10 w-10 text-muted-foreground" />
										<div className="text-muted-foreground">No image</div>
									</div>
								)}
							</div>
							<div className="mt-2 line-clamp-2 font-medium text-sm">{product.title}</div>
							<div className="w-fit rounded-full bg-secondary px-2 py-1 font-medium text-foreground text-xs">
								{product.upc}
							</div>
							<div className="line-clamp-3 text-left text-muted-foreground text-sm">{product.description}</div>
						</button>
					</SheetTrigger>
					<SheetContent className="flex flex-col gap-0 overflow-y-auto bg-background p-0 text-sm sm:max-w-lg">
						<div className="flex items-center justify-center bg-white p-8">
							{product.imageUrl && (
								<Image
									src={product.imageUrl}
									alt={product.title}
									width={200}
									height={200}
									className="aspect-video w-full object-contain"
								/>
							)}
							{!product.imageUrl && (
								<div className="flex aspect-square flex-col items-center justify-center p-2">
									<ImageIcon className="mb-2 h-10 w-10 text-muted-foreground" />
									<div className="text-muted-foreground">No image</div>
								</div>
							)}
						</div>

						<div className="flex flex-col gap-4 p-8">
							<SheetHeader className="p-0">
								<SheetTitle className="text-3xl">{product.title}</SheetTitle>
							</SheetHeader>
							<div className="w-fit rounded-full bg-secondary px-2 py-1 font-medium text-foreground text-sm">
								GTIN: {product.upc}
							</div>
							<p className="text-muted-foreground">{product.description}</p>

							<div className="flex flex-col gap-4">
								<ProductDetailSection title="Product Sizes">
									<ProductDetailBadge>{product.size}</ProductDetailBadge>
								</ProductDetailSection>

								{/* <ProductDetailSection title="Claims">
									<ProductDetailBadge>Low Calorie</ProductDetailBadge>
									<ProductDetailBadge>No Added Sugar</ProductDetailBadge>
									<ProductDetailBadge>Electrolyte Enhanced</ProductDetailBadge>
									<ProductDetailBadge>Vegan Friendly</ProductDetailBadge>
								</ProductDetailSection> */}

								{product.dimensions && (
									<ProductDetailSection title="Dimensions">
										<ProductDetailBadge>{product.dimensions}</ProductDetailBadge>
									</ProductDetailSection>
								)}

								{product.sourceName && (
									<ProductDetailSection title="Source Name">
										<ProductDetailBadge>{product.sourceName}</ProductDetailBadge>
									</ProductDetailSection>
								)}

								{product.sourceIdentifier && (
									<ProductDetailSection title="Source Identifier">
										<ProductDetailBadge>{product.sourceIdentifier}</ProductDetailBadge>
									</ProductDetailSection>
								)}

								{product.count && (
									<ProductDetailSection title="Count">
										<ProductDetailBadge>{product.count}</ProductDetailBadge>
									</ProductDetailSection>
								)}

								{product.container && (
									<ProductDetailSection title="Containers">
										<ProductDetailBadge>{product.container}</ProductDetailBadge>
									</ProductDetailSection>
								)}

								{/* <ProductDetailSection title="Packaging">
									<ProductDetailBadge>Plastic Bottle</ProductDetailBadge>
									<ProductDetailBadge>Aluminum Can</ProductDetailBadge>
									<ProductDetailBadge>Tetra Pak</ProductDetailBadge>
									<ProductDetailBadge>Glass Jar</ProductDetailBadge>
								</ProductDetailSection> */}

								{/* <ProductDetailSection title="Price">
									<ProductDetailBadge>${product.}</ProductDetailBadge>
								</ProductDetailSection> */}

								{/* <ProductDetailSection title="Properties">
									<ProductDetailBadge>Lorem ipsum</ProductDetailBadge>
									<ProductDetailBadge>Lorem ipsum</ProductDetailBadge>
									<ProductDetailBadge>Lorem ipsum</ProductDetailBadge>
									<ProductDetailBadge>Lorem ipsum</ProductDetailBadge>
									<ProductDetailBadge>Lorem ipsum</ProductDetailBadge>
									<ProductDetailBadge>Lorem ipsum</ProductDetailBadge>
								</ProductDetailSection> */}
							</div>
						</div>
					</SheetContent>
				</Sheet>
			))}
		</div>
	);
}
