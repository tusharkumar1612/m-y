import type { Metadata } from "next";
import { Inter, Bebas_Neue, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Winter Gym Offer | M&Y Fitness Club Jaipur",
  description:
    "Join Jaipur's best gym — 1 day free pass + 30% winter discount. Personal training, top facilities, group classes. Best Gym for Personal Training & Group Fitness in Jaipur.",
  keywords: [
    "gym jaipur",
    "fitness club jaipur",
    "personal training jaipur",
    "winter gym offer",
    "M&Y Fitness Club",
    "Vaishali Nagar gym",
    "zumba classes jaipur",
    "crossfit jaipur",
    "best gym jaipur",
  ],
  authors: [{ name: "M&Y Fitness Club" }],
  openGraph: {
    title: "Winter Gym Offer | M&Y Fitness Club Jaipur",
    description:
      "Join Jaipur's best gym — 1 day free pass + 30% winter discount. Personal training, top facilities, group classes.",
    type: "website",
    locale: "en_IN",
    siteName: "M&Y Fitness Club",
  },
  twitter: {
    card: "summary_large_image",
    title: "Winter Gym Offer | M&Y Fitness Club Jaipur",
    description:
      "Join Jaipur's best gym — 1 day free pass + 30% winter discount.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} ${bebasNeue.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
