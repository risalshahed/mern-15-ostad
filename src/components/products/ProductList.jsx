import ProductCard from "./ProductCard.jsx";

const ProductList = ({ products }) => {
  if(products?.length === 0) {
    return (
      <p className="py-10 text-center text-gray-300">
        No Product Found
      </p>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {
        products?.map(product =>
          <ProductCard
            key={product.id}
            product={product}
          />
        )
      }
    </div>
  )
}

export default ProductList;