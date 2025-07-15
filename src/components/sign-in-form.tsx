"use client";

import { useForm } from "@tanstack/react-form";
import { useRouter } from "next/navigation";
import { z } from "zod";

import { FormErrorMessage } from "@/components/form-error-message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

const signInSchema = z.object({
	email: z.string().email("Please enter a valid email."),
	password: z.string().min(1, "Password is required."),
});

export function SignInForm() {
	const router = useRouter();

	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		onSubmit: async ({ value }) => {
			const { error } = await authClient.signIn.email({
				email: value.email,
				password: value.password,
			});

			if (error) {
				toast.error(error.message);
				return;
			}

			router.push("/discover/all");
		},
		validators: {
			onSubmit: signInSchema,
		},
	});

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				void form.handleSubmit();
			}}
			className="grid gap-4"
		>
			<form.Field
				name="email"
				validators={{
					onChange: signInSchema.shape.email,
				}}
			>
				{(field) => (
					<div className="grid gap-1">
						<Input
							id={field.name}
							name={field.name}
							type="email"
							placeholder="m@example.com"
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
						/>
						<FormErrorMessage errors={field.state.meta.errors} />
					</div>
				)}
			</form.Field>

			<form.Field
				name="password"
				validators={{
					onChange: signInSchema.shape.password,
				}}
			>
				{(field) => (
					<div className="grid gap-1">
						<Input
							id={field.name}
							name={field.name}
							type="password"
							placeholder="Password"
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
						/>
						<FormErrorMessage errors={field.state.meta.errors} />
					</div>
				)}
			</form.Field>

			<Button type="submit" className="w-full" disabled={form.state.isSubmitting}>
				{form.state.isSubmitting ? "Signing In..." : "Sign In"}
			</Button>
		</form>
	);
}
