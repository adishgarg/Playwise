import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { IconUser } from "@tabler/icons-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Playwise",
  description: "Built By The Stoked Devs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex flex-col md:flex-row justify-between items-center p-4 w-[95%] mx-auto bg-purple-600 text-white rounded-full mt-2">
          <h1 className="text-2xl font-bold">PLAYWISE</h1>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 mt-4 md:mt-0">
            <li>
              <a href="/" className="hover:text-purple-300 transition-colors duration-300">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-purple-300 transition-colors duration-300">About</a>
            </li>
            <li>
              <a href="/about" className="hover:text-purple-300 transition-colors duration-300">Contact Us</a>
            </li>
          </ul>
          <IconUser className="mt-4 md:mt-0 hover:text-purple-300 transition-colors duration-300"/>
        </nav>
        {children}
      </body>
    </html>
  );
}
