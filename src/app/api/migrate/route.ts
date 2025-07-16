import { db } from "@/server/db";
import { NextResponse } from "next/server";

export async function GET() {
	if (process.env.NODE_ENV !== "development") {
		return NextResponse.json({
			success: false,
			message: "This is only for development",
		});
	}

	await db.audience.updateMany({
		where: {
			slug: "lays",
		},
		data: {
			associatedGtins: [
				"00815871017824",
				"00815871017732",
				"00815871017701",
				"00815871016773",
				"00028400770200",
				"00028400770187",
				"00028400768764",
				"00028400768672",
				"00028400765480",
				"00028400762489",
				"00028400761918",
				"00028400756495",
				"00028400753593",
				"00028400752022",
				"00028400751469",
				"00028400743884",
			],
		},
	});

	return NextResponse.json({
		success: true,
	});
}
