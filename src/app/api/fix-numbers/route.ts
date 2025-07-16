import { db } from "@/server/db";
import { NextResponse } from "next/server";

export async function GET() {
	if (process.env.NODE_ENV !== "development") {
		return NextResponse.json({
			success: false,
			message: "This is only for development",
		});
	}

	const audiences = await db.audience.findMany({
		where: {
			leafCategory: {
				baseCategory: {
					name: "Beverages",
				},
			},
		},
	});

	for (const audience of audiences) {
		await db.audience.update({
			where: {
				id: audience.id,
			},
			data: {
				audienceExtended1year: Math.floor((Math.random() * 5 + 5) * 1_000_000),
				audienceExtended90days: Math.floor((Math.random() * 4 + 1) * 1_000_000),
				audienceDeterministic1year: Math.floor((Math.random() * 0.3 + 0.5) * 1_000_000),
				audienceDeterministic90days: Math.floor((Math.random() * 0.3 + 0.1) * 1_000_000),
			},
		});
	}

	return NextResponse.json({
		audiences: await db.audience.findMany({
			where: {
				leafCategory: {
					baseCategory: {
						name: "Beverages",
					},
				},
			},
		}),
	});
}
