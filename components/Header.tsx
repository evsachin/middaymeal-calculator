"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      {/* Full Gradient Background */}
      <div className="bg-linear-to-r from-blue-700 via-blue-500 to-sky-400 text-white">
        <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">

          {/* Title */}
          <h1 className="text-xl font-extrabold tracking-wide drop-shadow">
            PM Poshan – Yojna
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 text-sm font-semibold">
            <Link href="/" className="hover:text-yellow-200 transition">
              Home
            </Link>
            <Link href="/table" className="hover:text-yellow-200 transition">
              मालाचा तपशील
            </Link>
            <Link href="/calculator" className="hover:text-yellow-200 transition">
              हिशोब काढा
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl font-bold text-white"
          >
            {open ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden bg-white text-blue-700 border-t shadow-xl animate-slideDown">
            <nav className="flex flex-col text-center font-medium">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="py-3 border-b hover:bg-blue-50"
              >
                Home
              </Link>

              <Link
                href="/table"
                onClick={() => setOpen(false)}
                className="py-3 border-b hover:bg-blue-50"
              >
                मालाचा तपशील
              </Link>

              <Link
                href="/calculator"
                onClick={() => setOpen(false)}
                className="py-3 hover:bg-blue-50"
              >
                हिशोब काढा
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
