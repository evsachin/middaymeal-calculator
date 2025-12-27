export default function Card({title,children}:any){
    return (
        <div className="bg-white shadow-md rounded-2xl p-4 border border-gray-200">
            <h2 className="font-bold text-lg text-blue-700 mb-2">{title}</h2>
            {children}
        </div>
    )
}