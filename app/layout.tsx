import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CrispChat } from "@/components/CrispChat";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Freelance Portfolio | Modern Web Developer",
  description: "Portafolio profesional de desarrollo web freelance con Next.js, Tailwind CSS y Framer Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-primary/30 selection:text-primary`}
      >
        <CrispChat />
        {children}
      </body>
    </html>
  );
}
