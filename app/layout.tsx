import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RestaurantPro Supply Hub — Your Amazon Restaurant Supply Partner",
  description:
    "Find the best restaurant smallwares, equipment, uniforms, and cleaning supplies. Curated picks from 30+ years of fine dining expertise.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
