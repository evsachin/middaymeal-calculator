import { ITEMS } from "@/data/items";

export default function Page(){
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4 text-blue-700">अ.नं. मालाचा तपशील</h2>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th>सामग्री</th>
            <th>1ली–5वी</th>
            <th>6वी–8वी</th>
          </tr>
        </thead>

        <tbody>
          {ITEMS.map(i => (
            <tr key={i.name} className="border text-center">
              <td>{i.name}</td>
              <td>{i.p1}</td>
              <td>{i.p2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
