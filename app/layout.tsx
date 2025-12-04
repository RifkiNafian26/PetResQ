import type { Metadata } from "next";
import { Kreon } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import { AuthProvider } from "./context/AuthContext";

const kreon = Kreon({
  variable: "--font-kreon",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PetResQ - Pet Adoption & Rescue",
  description:
    "Find your perfect companion or help pets find their forever homes through PetResQ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kreon.variable} antialiased`}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
          <AuthModal />
        </AuthProvider>
      </body>
    </html>
  );
}
