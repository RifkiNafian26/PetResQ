"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openAuthModal } = useAuth();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-[#FEFAE0]/95 border-b border-[#5F6F52]/10 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold text-[#5F6F52] tracking-wide">
                PetResQ
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/adopt"
              className={`text-xl font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
                isActive("/adopt")
                  ? "bg-[#5F6F52] text-[#FEFAE0]"
                  : "text-[#5F6F52] hover:text-[#FEFAE0] hover:bg-[#5F6F52]"
              }`}
            >
              Adopt
            </Link>
            <Link
              href="/rehome"
              className={`text-xl font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
                isActive("/rehome")
                  ? "bg-[#5F6F52] text-[#FEFAE0]"
                  : "text-[#5F6F52] hover:text-[#FEFAE0] hover:bg-[#5F6F52]"
              }`}
            >
              Rehome
            </Link>
            <Link
              href="/care-guides"
              className={`text-xl font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
                isActive("/care-guides")
                  ? "bg-[#5F6F52] text-[#FEFAE0]"
                  : "text-[#5F6F52] hover:text-[#FEFAE0] hover:bg-[#5F6F52]"
              }`}
            >
              Care Guides
            </Link>
            <Link
              href="/about"
              className={`text-xl font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
                isActive("/about")
                  ? "bg-[#5F6F52] text-[#FEFAE0]"
                  : "text-[#5F6F52] hover:text-[#FEFAE0] hover:bg-[#5F6F52]"
              }`}
            >
              About Us
            </Link>
          </div>

          {/* Login Button & User Icon */}
          <div className="hidden md:flex items-center space-x-2">
            <button className="w-9 h-9 bg-[#5F6F52] rounded-full flex items-center justify-center hover:bg-[#4a5a43] transition-colors duration-200">
              <svg
                className="w-5 h-5 text-[#FEFAE0]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              className="bg-[#5F6F52] text-[#FEFAE0] px-4 py-2 rounded-full text-base font-medium hover:bg-[#4a5a43] transition-colors duration-200 flex items-center space-x-2"
              onClick={openAuthModal}
            >
              <svg
                className="w-4 h-4 text-[#FEFAE0]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <span>LOGIN</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#5F6F52] hover:text-[#3d4a36] focus:outline-none"
            >
              <svg
                className="h-5 w-5"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-[#5F6F52]/10">
            <div className="px-6 py-3 space-y-3">
              <Link
                href="/adopt"
                className={`block text-base font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
                  isActive("/adopt")
                    ? "bg-[#5F6F52] text-[#FEFAE0]"
                    : "text-[#5F6F52] hover:text-[#FEFAE0] hover:bg-[#5F6F52]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Adopt
              </Link>
              <Link
                href="/rehome"
                className={`block text-base font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
                  isActive("/rehome")
                    ? "bg-[#5F6F52] text-[#FEFAE0]"
                    : "text-[#5F6F52] hover:text-[#FEFAE0] hover:bg-[#5F6F52]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Rehome
              </Link>
              <Link
                href="/care-guides"
                className={`block text-base font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
                  isActive("/care-guides")
                    ? "bg-[#5F6F52] text-[#FEFAE0]"
                    : "text-[#5F6F52] hover:text-[#FEFAE0] hover:bg-[#5F6F52]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Care Guides
              </Link>
              <Link
                href="/about"
                className={`block text-base font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
                  isActive("/about")
                    ? "bg-[#5F6F52] text-[#FEFAE0]"
                    : "text-[#5F6F52] hover:text-[#FEFAE0] hover:bg-[#5F6F52]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <div className="flex items-center space-x-2 pt-3 border-t border-[#5F6F52]/10">
                <button className="w-8 h-8 bg-[#5F6F52] rounded-full flex items-center justify-center hover:bg-[#4a5a43] transition-colors duration-200">
                  <svg
                    className="w-4 h-4 text-[#FEFAE0]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  className="bg-[#5F6F52] text-[#FEFAE0] px-3 py-1.5 rounded-full text-base font-medium hover:bg-[#4a5a43] transition-colors duration-200 flex items-center space-x-2"
                  onClick={() => {
                    openAuthModal();
                    setIsOpen(false);
                  }}
                >
                  <svg
                    className="w-4 h-4 text-[#FEFAE0]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>LOGIN</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
