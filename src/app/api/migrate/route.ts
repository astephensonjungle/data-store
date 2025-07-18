import { importAudiences } from "@/lib/import-audiences";
import { importProducts } from "@/lib/import-products";
import { db } from "@/server/db";
import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { NextResponse } from "next/server";

export async function GET() {
	if (process.env.NODE_ENV !== "development") {
		return NextResponse.json({
			success: false,
			message: "This is only for development",
		});
	}

	// await db.audience.updateMany({
	// 	where: {
	// 		slug: "lays",
	// 	},
	// 	data: {
	// 		associatedGtins: [
	// 			"00815871017824",
	// 			"00815871017732",
	// 			"00815871017701",
	// 			"00815871016773",
	// 			"00028400770200",
	// 			"00028400770187",
	// 			"00028400768764",
	// 			"00028400768672",
	// 			"00028400765480",
	// 			"00028400762489",
	// 			"00028400761918",
	// 			"00028400756495",
	// 			"00028400753593",
	// 			"00028400752022",
	// 			"00028400751469",
	// 			"00028400743884",
	// 		],
	// 	},
	// });

	const serviceAccountAuth = new JWT({
		email: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
		key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
		scopes: ["https://www.googleapis.com/auth/spreadsheets"],
	});

	const doc = new GoogleSpreadsheet("1BOA6j3dWIxDczS3sxhruJ-xSYEibEM1Fq9_lRkPADcs", serviceAccountAuth);

	await doc.loadInfo();

	await importAudiences(doc);
	await importProducts(doc);

	// const products = await db.product.findMany({
	// 	where: {
	// 		imageUrl: { startsWith: "/assets/products" },
	// 	},
	// });

	// let index = 0;
	// for (const product of products) {
	// 	console.log("updating product", product.title, index, "of", products.length);
	// 	index++;
	// 	if (!product.imageUrl) continue;

	// 	const { url, blurDataURL } = await processImage({
	// 		imageUrl: product.imageUrl,
	// 		slug: product.upc,
	// 		type: "product",
	// 	});

	// 	await db.product.update({
	// 		where: { id: product.id },
	// 		data: {
	// 			imageUrl: url,
	// 			imageBlurhash: blurDataURL,
	// 		},
	// 	});
	// }

	const retailers = await db.retailer.findMany();
	for (const retailer of retailers) {
		const formattedRetailerName = retailer.name
			.replaceAll("_", " ")
			.replace(/(^\w{1})|(\s+\w{1})/g, (letter: string) => letter.toUpperCase());
		await db.retailer.update({
			where: { id: retailer.id },
			data: {
				name: formattedRetailerName,
			},
		});
	}

	return NextResponse.json({
		success: true,
	});
}
