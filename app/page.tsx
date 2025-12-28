"use client"
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center gap-6 py-8 max-sm:p-4
      rounded-2xl border shadow-xl
      bg-linear-to-br from-blue-50 via-white to-blue-100">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 leading-snug">
        प्रधानमंत्री पोषण शक्ती निर्माण योजना
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 max-w-lg leading-relaxed">
        विद्यार्थ्यांनुसार आवश्यक धान्य, तेल, मसाले व इतर साहित्याचे 
        अचूक प्रमाण मोजण्यासाठी हे अॅप उपयोगी ठरते.
      </p>

      {/* Actions */}
      <div className="grid gap-4 w-full max-w-sm mt-4">

        <Link
          href="/table"
          className="block bg-white border border-blue-300 
          shadow-sm hover:shadow-xl hover:border-blue-500
          hover:-translate-y-0.5
          transition rounded-xl p-5 text-blue-700 font-semibold"
        >
          📄 मालाचा तपशील पहा
        </Link>

        <Link
          href="/calculator"
          className="block bg-blue-600 hover:bg-blue-700 
          transition shadow-xl hover:-translate-y-0.5
          text-white p-5 rounded-xl font-semibold"
        >
          🧮 हिशोब काढा
        </Link>

      </div>

      {/* Footer text */}
      <p className="text-xs text-gray-500 mt-6">
        2025 – 2026 | Midday Meal Quantity Calculator
      </p>
    </main>
  );
}
