import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";
import CursorGlow from "@/components/CursorGlow";
import AnimationProvider from "@/components/AnimationProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emiliano Saucedo Goldschmied",
  description: "Portfolio of Emiliano Saucedo Goldschmied — Data Scientist, Analyst and Software Engineer based in Dallas, TX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col">
          <CursorGlow />
          <Navbar />
          <SocialLinks />
          <AnimationProvider>
            {children}
          </AnimationProvider>
        </body>
    </html>
  );
}
