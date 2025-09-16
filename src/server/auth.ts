import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "./db";

export const auth = betterAuth({
	database: prismaAdapter(db, {
		provider: "postgresql",
	}),
	trustedOrigins: ["http://localhost:3000", "https://www.cpgdatastore.com"],
	emailAndPassword: {
		enabled: true,
	},
});
