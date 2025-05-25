import { redirect } from "next/navigation";

export default function Home() {
  redirect("/discover");
  return null;
}
