import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart()

  const total = cart.reduce((acc, item) => acc + parseFloat(item.price.replace(',', '.')), 0).toFixed(2)

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Seu Carrinho</h1>
      {cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li key={index} className="flex items-center justify-between border-b pb-2">
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <span className="text-gray-600">R$ {item.price}</span>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-right">
            <div className="font-bold text-lg">Total: R$ {total}</div>
            <button
              onClick={clearCart}
              className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Limpar Carrinho
            </button>
          </div>
        </>
      )}
    </div>
  )
}
