import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import ToasterWrapper from "@/components/ToasterWrapper";

// Primary font for headings and accents
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
  weight: ["400"]
})

// Secondary font for body text and UI elements
const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Saad Hussain's Portfolio",
  description: "Full Stack Developer crafting high-performance web apps with React, Next.js, Node.js, MongoDB, Nest.js, Javascript, TypeScript and PostgreSQL. Available for freelance or collaborations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} antialiased`}
      >
        {children}
        <ToasterWrapper />
      </body>
    </html>
  );
}
