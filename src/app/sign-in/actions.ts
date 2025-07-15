"use server";

import { auth } from "@/server/auth";
import { z } from "zod";

const signInSchema = z.object({
	email: z.string().email(),
	password: z.string().min(1),
});

type State = {
	error?: string;
	success?: boolean;
};

export async function signIn(values: z.infer<typeof signInSchema>): Promise<State> {
	const validatedFields = signInSchema.safeParse(values);
	if (!validatedFields.success) {
		return { error: "Invalid email or password." };
	}

	const { email, password } = validatedFields.data;

	try {
		await auth.api.signInEmail({
			body: {
				email,
				password,
			},
		});
	} catch (error) {
		return { error: "Invalid email or password." };
	}

	return { success: true };
}
