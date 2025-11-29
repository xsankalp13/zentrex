import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zentrex | Premium Ergonomic Seating",
  description: "Experience the synergy of aesthetic minimalism and ergonomic science with Zentrex.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Navbar />
        <div className="mx-auto w-11/12">

          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}