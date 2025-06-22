import { GoogleGenAI } from "@google/genai";
import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { NextResponse } from "next/server";
import fetch from "node-fetch";
import { promises as fs } from "node:fs";
import path from "node:path";
import { z } from "zod";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const jwt = new JWT({
	email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
	key: process.env.GOOGLE_PRIVATE_KEY,
	scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const snacksDoc = new GoogleSpreadsheet("1FiuQA2rPXRgtK4nHIB4Mygtw1w1Ij_aLuMjX2ZDkz0Y", jwt);

const beveragesDoc = new GoogleSpreadsheet("1W-bmeakVeichFMWa_ldogla9NzfV0pXmRY9QYMZfDHI", jwt);

export async function GET() {
	await snacksDoc.loadInfo();
	await beveragesDoc.loadInfo();

	const categories: string[] = [];

	for (const sheet of [...snacksDoc.sheetsByIndex, ...beveragesDoc.sheetsByIndex]) {
		const rows = await sheet.getRows();
		for (const row of rows) {
			try {
				// @ts-ignore
				const fullPathStr = row._rawData[1];
				if (fullPathStr) {
					const fullPath = fullPathStr.split(" > ");
					if (fullPath[0] === "Shopping & Retail" && fullPath[1] === "Groceries & Essentials") {
						const allCategories = fullPath.slice(2);
						categories.push(allCategories[allCategories.length - 1]);
					}
				}
			} catch {}
		}
	}

	const logoSchema = z.object({
		icon: z.string(),
		brandId: z.string(),
		name: z.string(),
		domain: z.string(),
	});

	const logos: Record<string, { url: string; brandId: string; name: string; domain: string }> = {};
	for (const category of categories) {
		try {
			const response = await fetch(`https://api.brandfetch.io/v2/search/${category}?c=1idfH0HpLGlB61LhKgT`);
			const data = await response.json();

			const brands = z.array(logoSchema).parse(data);
			if (brands.length > 0) {
				logos[category] = brands[0];
				console.log(`Logo found for ${category}`);
			} else {
				throw new Error("No logo found");
			}
		} catch {
			console.log(`No logo found for ${category}`);
		}
	}

	await fs.writeFile(path.join(process.cwd(), "src/app/api/import-data/logos.json"), JSON.stringify(logos, null, 2));

	return NextResponse.json({
		categories,
		// snacks: snacksDoc.sheetsByIndex[0],
		// beverages: beveragesDoc.sheetsByIndex,
	});
}
