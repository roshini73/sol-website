import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "sol - always in touch",
  description:
    "sol helps friends stay meaningfully connected throughout all phases of life.",
  openGraph: {
    title: "sol - always in touch",
    description:
      "sol helps friends stay meaningfully connected throughout all phases of life.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-syne">{children}</body>
    </html>
  );
}
