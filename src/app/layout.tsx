import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from './providers'
import Header from "@/componentList/Header/Header";
import Footer from "@/componentList/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Site",
  description: "Low price, authentic & fresh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* bg-gradient-to-tr from-slate-500 via-green-600 to-gray-500  */}
      <body className={`${inter.className}  bg-white text-black w-full`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
