import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Header from '../components/Header'
import Footer from '../components/Footer'

function CartPage() {
  return <div className="p-4 text-center">Carrinho vazio por enquanto :)</div>
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
