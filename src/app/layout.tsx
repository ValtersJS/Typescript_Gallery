import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ArtProvider } from "./context/ArtProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gallery",
  description: "Discover art",
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
        {/* Unnecessary context provider */}
        <ArtProvider>
          <h1 className="text-4xl mb-8 text-center pt-4 font-serif">
            Rijksmuseum Shuffle
          </h1>
          {children}
        </ArtProvider>
      </body>
    </html>
  );
}
