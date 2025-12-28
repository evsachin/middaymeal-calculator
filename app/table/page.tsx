"use client"
import { ITEMS } from "@/data/items";

export default function Page() {
  return (
    <div className="pt-3 lg:pt-5">
      <h2 className="text-2xl font-bold mb-2 text-blue-700">
        अ.नं. मालाचा तपशील
      </h2>

      <p className="text-gray-600 mb-4">
        विद्यार्थ्यांच्या इयत्तेनुसार देण्यात येणाऱ्या अन्नसामग्रीचे प्रमाण.
      </p>

      <div className="overflow-hidden rounded-2xl border border-blue-200 shadow-xl">

        <table className="w-full">
          <thead className="bg-linear-to-r from-blue-600 via-blue-500 to-sky-400 text-white text-center">
            <tr>
              <th className="border border-blue-300 p-3">अन्न सामग्री</th>
              <th className="border border-blue-300 p-3">
                1ली – 5वी साठी (कि.ग्रॅ.)
              </th>
              <th className="border border-blue-300 p-3">
                6वी – 8वी साठी (कि.ग्रॅ.)
              </th>
            </tr>
          </thead>

          <tbody>
            {ITEMS.map((i, index) => (
              <tr
                key={i.name}
                className={`text-center transition ${
                  index % 2 === 0
                    ? "bg-blue-50"
                    : "bg-white"
                } hover:bg-blue-100`}
              >
                <td className="border p-3 font-medium">{i.name}</td>
                <td className="border p-3">{i.p1}</td>
                <td className="border p-3">{i.p2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-gray-500 text-sm mt-3">
        वरील प्रमाण शासन नियमानुसार आहे.
      </p>
    </div>
  );
}
