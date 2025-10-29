"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header2() {
  const pathname = usePathname(); // detects current route

  return (
    <header className="w-full bg-gray-100 shadow-md py-4 px-12 flex items-center justify-between">
      {/* Logo + Navigation */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <div>
          <Image src="/Logo.png" alt="Logo" width={40} height={40} />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
            Home
          </Link>
          <Link href="/courses" className="text-gray-700 hover:text-gray-900 font-medium">
            Courses
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
            About Us
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-gray-900 font-medium">
            Pricing
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">
            Contact
          </Link>
        </nav>
      </div>

      {/* ✅ Show Search Bar only on Home Page */}
      {pathname === "/" && (
        <div className="hidden md:flex flex-1 justify-center px-6">
          <input
            type="text"
            placeholder="Search for courses..."
            className="w-full max-w-md border border-gray-300 rounded-xl px-4 py-2 focus:outline-none  shadow-[0_1px_0_#F8FFAE,1px_0_0_#43C6AC,-1px_0_0_#43C6AC]"
          />
        </div>
      )}

      {/* Right Buttons */}
      <div className="flex items-center space-x-4">
        <Link
          href="/signup"
          className="text-gray-700 font-medium hover:text-gray-900"
        >
          Sign Up
        </Link>
        <Link
          href="/login"
          className="px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-[#43C6AC] to-[#F8FFAE] hover:opacity-90 transition-opacity"
        >
          Login
        </Link>
      </div>
    </header>
  );
}

export default Header2;
