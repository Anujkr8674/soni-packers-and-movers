import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import SiteChrome from "./components/SiteChrome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: false,
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sony Packers and Movers | Trusted Relocation in Ranchi",
  description:
    "Professional household, office, vehicle, and local shifting services in Ranchi. Visit Sony Packers and Movers at Ratu Road, R.R Tower.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <SiteChrome>{children}</SiteChrome>
        <Toaster richColors position="top-right" closeButton />
      </body>
    </html>
  );
}
