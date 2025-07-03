import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutMain from "./Page/MainLayout/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Porfolio By Benjain Marroquin",
  description: "A portfolio project built with Next.js and Shadcn, demonstrating techniques from coursework and independent learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-radial-[at_25%_25%] from-gray-950 to-slate-900 to-55%`}
      >
      
        <LayoutMain/>
        
        {children} 
        
      </body>
    </html>
  );
}
