import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { MobileHeader } from "@/components/mobile-header";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exploracy",
  description: "Social activities for the curious mind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}>
        <MobileHeader />
        <Sidebar className="hidden lg:flex"/>
        <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
          <div className="max-w-[1056px] mx-auto pt-6 sticky top-0 z-50 bg-bg-100 h-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
