"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="SEVENBITLABS"
            width={240}
            height={67}
            className="h-26 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#services"
            className="text-gray-300 hover:text-green-500 transition"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-gray-300 hover:text-green-500 transition"
          >
            About
          </Link>
          <Link
            href="#innovation"
            className="text-gray-300 hover:text-green-500 transition"
          >
            Innovation
          </Link>
          <Link
            href="#contact"
            className="text-gray-300 hover:text-green-500 transition"
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="hidden md:block px-6 py-2 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition"
        >
          Get in Touch
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-green-500/20 px-6 py-4 space-y-4">
          <Link
            href="#services"
            className="block text-gray-300 hover:text-green-500"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="block text-gray-300 hover:text-green-500"
          >
            About
          </Link>
          <Link
            href="#innovation"
            className="block text-gray-300 hover:text-green-500"
          >
            Innovation
          </Link>
          <Link
            href="#contact"
            className="block text-gray-300 hover:text-green-500"
          >
            Contact
          </Link>
          <Link
            href="#contact"
            className="block w-full px-6 py-2 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 text-center"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}
