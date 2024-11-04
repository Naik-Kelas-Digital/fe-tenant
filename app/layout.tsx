
import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css";
import { Roboto } from "next/font/google";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScroolTop from "@/components/Helper/ScroolTop";

const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Real estate Project",
  description: "Real estate project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* Navbar */}
        <ResponsiveNav />
        {children}
        {/* Footer */}
        <Footer />
        {/*  */}
        <ScroolTop />
      </body>
    </html>
  );
}
