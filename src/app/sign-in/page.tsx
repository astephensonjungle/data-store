import { SignInForm } from "@/components/sign-in-form";
import { auth } from "@/server/auth";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: "Sign in",
};

export default async function LoginPage() {
	const session = await auth.api.getSession({ headers: await headers() });

	if (session) {
		return redirect("/discover/all");
	}

	return (
		<div className="flex h-screen">
			<div
				className="flex flex-1 flex-col justify-between bg-[#242323] bg-cover p-8"
				style={{ backgroundImage: "url('/nodes_purple.svg')" }}
			>
				<div className="flex flex-col gap-3">
					<img src="/logo_white.svg" alt="Logo" className="w-44" />
					<div className="text-[#FBFBFB] text-lg">Formerly Scanbuy Data</div>
				</div>

				<div className="text-[#FBFBFB]">
					<div className="mb-12 text-balance text-5xl leading-snug">Powering Next Generation Audience Intelligence</div>
					<div className="flex flex-col">
						<div className="flex flex-row items-center">
							<div className="flex w-8 flex-col items-center">
								<div className="h-12 w-px bg-transparent" />
								<div className="h-3 w-3 rounded-full bg-[#FBFBFB]" />
								<div className="h-12 w-px bg-[#FBFBFB]" />
							</div>
							<div className="text-2xl">Deterministic Purchasers</div>
						</div>

						<div className="flex w-full flex-row">
							<div className="mr-6 flex w-8 justify-center">
								<div className="w-px bg-[#FBFBFB]" />
							</div>

							<div className="flex flex-1 flex-col gap-6">
								<div className="flex flex-row items-center">
									<div className="h-3 w-3 rounded-full bg-[#FBFBFB]" />
									<div className="h-px flex-1 bg-[#FBFBFB]" />
									<div className="flex-none rounded-full border border-[#FBFBFB] px-6 py-4 text-lg">
										All deterministic consumers opted-in & anonymized
									</div>
								</div>

								<div className="flex flex-row items-center">
									<div className="h-3 w-3 rounded-full bg-[#FBFBFB]" />
									<div className="h-px flex-1 bg-[#FBFBFB]" />
									<div className="flex-none rounded-full border border-[#FBFBFB] px-6 py-4 text-lg">
										ML algorithm expands audience to scale
									</div>
								</div>

								<div className="flex flex-row items-center">
									<div className="h-3 w-3 rounded-full bg-[#FBFBFB]" />
									<div className="h-px flex-1 bg-[#FBFBFB]" />
									<div className="flex-none rounded-full border border-[#FBFBFB] px-6 py-4 text-lg">
										All lookalikes opted-in & anonymized
									</div>
								</div>

								<div className="flex flex-row items-center">
									<div className="h-3 w-3 rounded-full bg-[#FBFBFB]" />
									<div className="h-px flex-1 bg-[#FBFBFB]" />
									<div className="flex-none rounded-full border border-[#FBFBFB] px-6 py-4 text-lg">
										Runtime digital audit generated for marketer
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-row items-center">
							<div className="flex w-8 flex-col items-center">
								<div className="h-12 w-px bg-[#FBFBFB]" />
								<div className="h-3 w-3 rounded-full bg-[#FBFBFB]" />
								<div className="h-12 w-px bg-transparent" />
							</div>
							<div className="text-2xl">Lookalike Purchasers</div>
						</div>
					</div>
				</div>
			</div>
			<div className="relative flex flex-1 flex-col items-center justify-center p-6">
				<div className="flex w-full max-w-md flex-col gap-4">
					<h2 className="text-center font-medium text-2xl text-foreground">Sign in</h2>
					<p className="text-center font-light text-base text-muted-foreground">
						Enter your email below to login to your account.
					</p>
					<SignInForm />
					<p className="text-balance text-center font-light text-muted-foreground">
						By clicking continue, you agree to our Terms of Service and Privacy Policy
					</p>
				</div>
			</div>
		</div>
	);
}
