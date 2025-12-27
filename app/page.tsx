import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center gap-6 py-6">
      <h1 className="text-2xl font-bold text-blue-700">
        प्रधानमंत्री पोषण शक्ती निर्माण योजना
      </h1>

      <p className="text-gray-600 max-w-md">
        विद्यार्थ्यांप्रमाणे आवश्यक धान्य, तेल, मसाले व इतर वस्तूंच्या
        प्रमाणाचा अचूक हिशोब काढण्यासाठी ही अॅप मदत करते.
      </p>

      <div className="grid gap-4 w-full max-w-sm mt-4">
        <Link
          href="/table"
          className="block bg-white border shadow-sm hover:shadow-md transition rounded-xl p-4 text-blue-700 font-semibold"
        >
          📄 मालाचा तपशील पहा
        </Link>

        <Link
          href="/calculator"
          className="block bg-blue-600 hover:bg-blue-700 transition text-white p-4 rounded-xl font-semibold"
        >
          🧮 हिशोब काढा
        </Link>
      </div>

      <p className="text-xs text-gray-500 mt-6">
        2025 – 2026 | Midday Meal Quantity Calculator
      </p>
    </main>
  );
}
