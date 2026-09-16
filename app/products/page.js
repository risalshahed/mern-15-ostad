const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Laptop',
      price: 800
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 500
    },
    {
      id: 3,
      name: 'Headphone',
      price: 100
    },
  ]

  return (
    <main classname='mx-auto max-w-6xl px-6 py-16 my-20'>
      <h1 className="text-4xl font-bold">
        Products Page
      </h1>

      <div className="my-8 gri gap-6 md:grid-cols-3">
        {
          products.map(product =>
            <div
              key={product.id}
              className="rounded-lg border p-6"
            >
              <h2 className="text-xl font-semibold">
                {product.name}
              </h2>

              <p className="mt-2 text-gray-600">
                ${product.price}
              </p>
            </div>
          )
        }
      </div>
    </main>
  )
}

export default Products;