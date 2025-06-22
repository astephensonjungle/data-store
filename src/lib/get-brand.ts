import z from "zod";

const brandSchema = z.object({
	icon: z.string().nullish(),
	brandId: z.string().nullish(),
	name: z.string().nullish(),
	domain: z.string().nullish(),
});

export async function getBrand(brandName: string) {
	try {
		const response = await fetch(`https://api.brandfetch.io/v2/search/${brandName}?c=1idfH0HpLGlB61LhKgT`);
		const data = await response.json();

		const brands = await z.array(brandSchema).parseAsync(data);

		return brands[0] ?? null;
	} catch (error) {
		console.error(error);
		return null;
	}
}
