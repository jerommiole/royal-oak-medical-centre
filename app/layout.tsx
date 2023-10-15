import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Royal Oak Medical Centre",
  description:
    "Discover Royal Oak Medical Centre: Your Trusted Health Partner. Our dedicated team of compassionate doctors, nurses, and staff is committed to delivering top-tier medical care to our community. Explore our comprehensive healthcare services and experience the difference in quality healthcare at Royal Oak Medical Centre.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
