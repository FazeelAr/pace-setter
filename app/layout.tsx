import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const title = "Pace Setter International | Global Education & Study Abroad Consultancy";
const description = "Pace Setter International guides students through international education, visa processing, and career planning with expert support.";

export const metadata: Metadata = {
  applicationName: "Pace Setter International",
  title,
  description,
  icons: {
    icon: "/pacesetter_tab_icon_rounded.png",
    shortcut: "/pacesetter_tab_icon_rounded.png",
    apple: "/pacesetter_tab_icon_rounded.png",
  },
  openGraph: {
    title,
    description,
    siteName: "Pace Setter International",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
