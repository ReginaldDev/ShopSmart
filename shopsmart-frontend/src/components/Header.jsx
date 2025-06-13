import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">ShopSmart</Link>
      <nav className="flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/cart" className="hover:underline">Carrinho</Link>
      </nav>
    </header>
  )
}
