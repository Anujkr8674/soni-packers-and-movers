"use client";

import { usePathname } from "next/navigation";

import FloatingContactButtons from "./FloatingContactButtons";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <FloatingContactButtons />
      <Footer />
    </>
  );
}
