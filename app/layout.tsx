import type { Metadata } from "next";
import "./globals.css";
import NextAdsScript from "@/components/NextAdsScript";

export const metadata: Metadata = {
  title: "ShopVault — Electronics, Fashion & Home Essentials",
  description: "Discover top deals on electronics, clothing, home goods and sports gear. Fast shipping, great prices, daily offers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <NextAdsScript />
      </body>
    </html>
  );
}
