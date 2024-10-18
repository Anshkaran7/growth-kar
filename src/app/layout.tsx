import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Load custom fonts
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

const roslindaleVariable = localFont({
  src: "./fonts/RoslindaleVariable-VF[Display]-Testing.woff",
  variable: "--font-roslindale",
  weight: "300 700",
});

// Enhanced Metadata for SEO and Social Sharing
export const metadata: Metadata = {
  title: "GrowthKAR",
  description:
    "GrowthKAR is a startup accelerator that helps startups grow, scale, and succeed globally.",
  keywords: [
    "GrowthKAR",
    "startup accelerator",
    "scale startups",
    "startup growth",
    "accelerator programs",
    "business growth",
    "startup mentorship",
    "Growth KAR",
    "Growth Kar Shivang",
    "Growth"
  ],
  openGraph: {
    title: "GrowthKAR - Startup Accelerator for Growth",
    description:
      "Join GrowthKAR to scale your startup with mentorship, funding, and resources to succeed.",
    url: "https://growthkar.com",
    siteName: "GrowthKAR",
    images: [
      {
        url: "https://growthkar.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GrowthKAR - Helping Startups Scale",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@growthkar",
    title: "GrowthKAR - Accelerating Startups for Success",
    description:
      "Mentorship, funding, and resources to help startups grow and scale globally.",
    images: ["https://growthkar.com/images/og-image.jpg"],
  },
};

// Root Layout Component
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roslindaleVariable.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
