import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Indra Anggara Putra | Software Engineering Student & Web Developer",
    template: "%s | Indra Anggara Putra",
  },
  description:
    "Explore the portfolio of Indra Anggara Putra, a Software Engineering student in Pasuruan, Indonesia, building thoughtful web experiences.",
  keywords: [
    "Indra Anggara Putra",
    "web developer",
    "software engineering student",
    "portfolio",
    "Next.js",
    "Pasuruan",
    "Indonesia",
  ],
  authors: [{ name: "Indra Anggara Putra" }],
  creator: "Indra Anggara Putra",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Indra Anggara Putra Portfolio",
    title: "Indra Anggara Putra | Software Engineering Student & Web Developer",
    description:
      "Explore selected projects and skills from Indra Anggara Putra, a Software Engineering student building thoughtful web experiences.",
  },
  twitter: {
    card: "summary",
    title: "Indra Anggara Putra | Software Engineering Student & Web Developer",
    description:
      "Explore selected projects and skills from Indra Anggara Putra, a Software Engineering student building thoughtful web experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
