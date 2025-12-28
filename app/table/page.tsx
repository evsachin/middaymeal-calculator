import { ITEMS } from "@/data/items";

export default function Page(){
  return (
    <div className="pt-5">
      <h2 className="text-xl font-bold mb-4 text-blue-700">अ.नं. मालाचा तपशील</h2>

      <div className="overflow-hidden border-2 rounded-xl">

     
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">सामग्री</th>
            <th className="border p-2">1ली–5वी साठी प्रमाण कि.ग्रॅ.</th>
            <th className="border p-2">6वी–8वी साठी प्रमाण कि.ग्रॅ.</th>
          </tr>
        </thead>

        <tbody>
          {ITEMS.map(i => (
            <tr key={i.name} className="border text-center" >
              <td className="border p-2">{i.name}</td>
              <td className="border p-2">{i.p1}</td>
              <td className="border p-2">{i.p2}</td>
            </tr>
          ))}
        </tbody>
      </table>
       </div>
    </div>
  );
}
