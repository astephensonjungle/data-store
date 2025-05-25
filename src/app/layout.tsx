import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import { DiscoverTabProvider } from "@/context/DiscoverTabContext";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f6f3ee] min-h-screen">
        <DiscoverTabProvider>
          <div className="flex flex-col min-h-screen">
            <TopBar />
            <div className="flex flex-1">
              <div className="w-[20%]">
                <Sidebar />
              </div>
              <main className="flex-1 w-[80%] pr-8 pt-6 pb-8">{children}</main>
            </div>
          </div>
          <Toaster position="bottom-right" richColors />
        </DiscoverTabProvider>
      </body>
    </html>
  );
}
