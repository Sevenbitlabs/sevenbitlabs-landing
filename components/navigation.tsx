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

        {/* Social Media Links & CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* X (Twitter) Link */}
          <Link
            href="https://x.com/sevenbitlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-500 transition"
            aria-label="X (Twitter)"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>

          {/* LinkedIn Link */}
          <Link
            href="https://www.linkedin.com/company/110274039/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-500 transition"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="px-6 py-2 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition"
          >
            Get in Touch
          </Link>
        </div>

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

          {/* Social Media Links */}
          <div className="flex items-center gap-6 pt-2">
            <Link
              href="https://x.com/sevenbitlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-500 transition"
              aria-label="X (Twitter)"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>

            <Link
              href="https://www.linkedin.com/company/110274039/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-500 transition"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>

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
