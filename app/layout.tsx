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
      <body>{children}</body>
    </html>
  );
}
