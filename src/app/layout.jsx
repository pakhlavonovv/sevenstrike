"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="YdsWb5b6kdswkM6qurKloRy1uYGyCs4P5aHj1Ah4-pk" />
        <meta name="author" content="SevenStrike" />
        <meta
          name="description"
          content="SevenStrike Online CS2 Tournament - Compete against top players, showcase your skills, and win amazing prizes!"
        />
        <meta
          name="keywords"
          content="CS2 tournament, sevenstrike, online gaming, esports competition, Counter-Strike 2, pro gaming, competitive play"
        />
        <meta property="og:title" content="SevenStrike Online CS2 Tournament" />
        <meta
          property="og:description"
          content="Join the ultimate Counter-Strike 2 esports event! Compete, win, and prove your dominance in the SevenStrike Online CS2 Tournament."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sevenstrike.online/" />
        <meta property="og:site_name" content="SevenStrike" />
        <link rel="icon" href="favicon.ico?v=2" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>SevenStrike Online CS2 Tournament - Compete & Win!</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} style={{ fontFamily: "'Orbitron', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
