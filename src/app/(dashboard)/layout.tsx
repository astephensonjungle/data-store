import { Header } from "@/components/header";
import { auth } from "@/server/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
	const session = await auth.api.getSession({ headers: await headers() });

	if (!session) {
		return redirect("/sign-in");
	}

	return (
		<div className="flex h-screen flex-col overflow-hidden">
			<Header />
			<div>{children}</div>
		</div>
	);
}
