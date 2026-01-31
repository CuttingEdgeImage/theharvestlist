import type { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "The Harvest List",
  description: "A nationwide farmers market directory.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="border-b border-zinc-200 bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-semibold tracking-tight text-zinc-900">
              The Harvest List
            </Link>

            <nav className="flex items-center gap-6 text-sm font-medium text-zinc-700">
              <Link href="/markets" className="hover:text-zinc-900">
                Markets
              </Link>
              <Link href="/submit" className="hover:text-zinc-900">
                Suggest a market
              </Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-zinc-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-zinc-500">
            © {new Date().getFullYear()} The Harvest List
          </div>
        </footer>
      </body>
    </html>
  );
}
