import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "GrowthKAR",
  description:
    "GrowthKAR is a startup accelerator that helps startups grow and scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roslindaleVariable.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
