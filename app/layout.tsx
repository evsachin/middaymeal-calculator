import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const marathiFont = Noto_Sans_Devanagari({
  variable: "--font-marathi",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Midday Meal Calculator",
  description:
    "Smart calculator to automatically calculate Midday Meal quantity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />

        {/* iOS Support */}
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${marathiFont.variable} antialiased 
          bg-linear-to-br from-blue-50 via-white to-blue-100
          min-h-screen text-gray-800`}
      >
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b shadow-sm">
          <Header />
        </header>

        {/* Main App Container */}
        <main className="max-w-4xl mx-auto px-4 py-6">
          <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-4 md:p-6">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center text-gray-600 py-4 text-sm">
          © {new Date().getFullYear()} Evisio-Tech. All Rights Reserved. |
          <span className="font-semibold text-blue-700">
            {" "}
            Midday Meal Calculator
          </span>
        </footer>
      </body>
    </html>
  );
}
