import type { Metadata } from "next";
import "./globals.css";
import Navabr from "./components/Navabr";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX App for Campaign",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navabr />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
