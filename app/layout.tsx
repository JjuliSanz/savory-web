import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Carattere } from "next/font/google";

const carattere = Carattere({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sávory",
  description: "Heladeria & Cafeteria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`custom-scroll min-h-screen w-full overflow-x-hidden relative ${carattere.className}`}>
        {children}
      </body>
    </html>
  );
}
