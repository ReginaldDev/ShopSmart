import ProductCard from '../components/ProductCard'

const products = [
  {
    id: 1,
    name: 'Produto 1',
    description: 'Descrição curta do produto 1.',
    price: '99,90',
    image: 'https://via.placeholder.com/300x200.png?text=Produto+1'
  },
  {
    id: 2,
    name: 'Produto 2',
    description: 'Descrição curta do produto 2.',
    price: '149,90',
    image: 'https://via.placeholder.com/300x200.png?text=Produto+2'
  },
  {
    id: 3,
    name: 'Produto 3',
    description: 'Descrição curta do produto 3.',
    price: '79,90',
    image: 'https://via.placeholder.com/300x200.png?text=Produto+3'
  }
]

export default function HomePage() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Produtos em destaque</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}
