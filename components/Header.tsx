"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* App Title */}
        <h1 className="text-lg font-bold text-blue-700">
          PM Poshan – Yojna
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-sm font-semibold">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <Link href="/table" className="hover:text-blue-700">Table</Link>
          <Link href="/calculator" className="hover:text-blue-700">Calculator</Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t shadow">
          <nav className="flex flex-col text-center">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="py-3 border-b hover:bg-gray-100"
            >
              Home
            </Link>
            <Link
              href="/table"
              onClick={() => setOpen(false)}
              className="py-3 border-b hover:bg-gray-100"
            >
              मालाचा तपशील
            </Link>
            <Link
              href="/calculator"
              onClick={() => setOpen(false)}
              className="py-3 hover:bg-gray-100"
            >
              हिशोब काढा
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
