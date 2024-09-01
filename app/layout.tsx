import type { Metadata } from "next";
import "./globals.css";
import { carattere } from "./fonts";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://savory-heladeria.vercel.app"),
  title: "Sávory",
  description: "Heladeria & Cafeteria",
  keywords: ["heladeria", "cafeteria", "Sávory", "postres", "café"],
  alternates: {
    canonical: "/",
  },
  creator: "Julian Sanz",
  publisher: 'Julian Sanz',
  authors: { name: 'Julian', url: 'https://www.linkedin.com/in/julian-sanz-ba4270240/' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`custom-scroll min-h-screen w-full overflow-x-hidden relative ${carattere.className}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

{
  /* <motion.div
        className="box"
        initial={{ offsetDistance: "0%", scale: 2.5 }}
        animate={{ offsetDistance: "100%", scale: 1 }}
        transition={transition}
      /> */
}
