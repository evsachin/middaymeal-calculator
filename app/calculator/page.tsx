"use client";
import useLocalStore from "@/hooks/useLocalStore";
import { ITEMS } from "@/data/items";
import { generateMealPDF } from "@/utils/pdf-table";

export default function Page() {
  const [p1, setP1] = useLocalStore("primary", 0);
  const [p2, setP2] = useLocalStore("secondary", 0);

  const safeP1 = Number(p1) || 0;
  const safeP2 = Number(p2) || 0;

  const rows = ITEMS.map((i) => ({
    ...i,
    primary: (i.p1 * safeP1).toFixed(3),
    secondary: (i.p2 * safeP2).toFixed(3),
    total: (i.p1 * safeP1 + i.p2 * safeP2).toFixed(3),
  }));

  return (
    <div className="p-2 bg-linear-to-br from-blue-50 via-white to-blue-100 rounded-2xl">

      <h2 className="text-2xl font-extrabold text-blue-700 mb-2">
        विद्यार्थ्यांप्रमाणे मालाचा हिशोब
      </h2>

      <p className="text-gray-600 mb-4 leading-relaxed">
        खाली विद्यार्थ्यांची संख्या भरा. त्यानुसार आवश्यक अन्नसामग्रीचे प्रमाण
        स्वयंचलित पद्धतीने गणना केले जाईल.
      </p>

      {/* Input Section */}
      <div className="grid gap-4 max-w-md">

        <div>
          <label className="block font-semibold text-gray-800 mb-1">
            1ली ते 5वी विद्यार्थ्यांची संख्या
          </label>

          <input
            type="number"
            min={0}
            value={safeP1}
            onChange={(e) => setP1(Math.max(0, +e.target.value))}
            placeholder="उदा. 120"
            className="border border-blue-300 focus:border-blue-600 focus:ring-2
                       focus:ring-blue-200 outline-none p-2 rounded-xl w-full
                       transition shadow-sm bg-white"
          />

          <small className="text-gray-500">
            प्राथमिक विद्यार्थ्यांची एकूण संख्या प्रविष्ट करा.
          </small>
        </div>

        <div>
          <label className="block font-semibold text-gray-800 mb-1">
            6वी ते 8वी विद्यार्थ्यांची संख्या
          </label>

          <input
            type="number"
            min={0}
            value={safeP2}
            onChange={(e) => setP2(Math.max(0, +e.target.value))}
            placeholder="उदा. 85"
            className="border border-blue-300 focus:border-blue-600 focus:ring-2
                       focus:ring-blue-200 outline-none p-2 rounded-xl w-full
                       transition shadow-sm bg-white"
          />

          <small className="text-gray-500">
            माध्यमिक विद्यार्थ्यांची एकूण संख्या प्रविष्ट करा.
          </small>
        </div>
      </div>

      {/* Result Section */}
      <div
        id="pdfArea"
        className="mt-6 bg-white p-4 shadow-xl rounded-2xl border border-blue-200"
      >
        <h3 className="font-semibold text-blue-700 mb-3 text-lg">
          गणना केलेला मालाचा तपशील
        </h3>

        <div className="overflow-hidden rounded-2xl">
          <table className="w-full">
            <thead className="bg-linear-to-r from-blue-600 via-blue-500 to-sky-400 text-white text-center font-semibold">
              <tr>
                <th className=" p-2">अन्न सामग्री</th>
                <th className=" p-2">1–5 वी (एकूण)</th>
                <th className=" p-2">6–8 वी (एकूण)</th>
                <th className="borderight p-2">एकूण प्रमाण</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((r) => (
                <tr className="border text-center hover:bg-blue-50 transition" key={r.name}>
                  <td className="border p-2 font-medium">{r.name}</td>
                  <td className="border p-2">{r.primary} kg</td>
                  <td className="border p-2">{r.secondary} kg</td>
                  <td className="border p-2 font-bold text-blue-700">
                    {r.total} kg
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* PDF Button */}
      <div className="flex justify-center mt-6 mb-6">
        <button
          onClick={() => generateMealPDF(rows, safeP1, safeP2)}
          disabled={safeP1 === 0 && safeP2 === 0}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 
                     disabled:cursor-not-allowed text-white px-7 py-3 
                     rounded-xl shadow-lg font-semibold transition hover:-translate-y-0.5"
        >
          📥 PDF डाउनलोड करा
        </button>
      </div>
    </div>
  );
}
