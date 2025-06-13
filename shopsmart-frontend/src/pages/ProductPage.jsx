import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <span className="font-bold text-blue-600 mb-2">R$ {product.price}</span>
      <Link
        to={`/product/${product.id}`}
        className="bg-blue-600 text-white rounded px-4 py-2 text-center hover:bg-blue-700"
      >
        Ver Detalhes
      </Link>
    </div>
  )
}