import { useFetch } from "../../hooks/useFetch.js";
import LoadingSkeleton from "../common/LoadingSkeleton.jsx"
import ProductCard from "./ProductCard.jsx"

const Products = () => {
  const {
    data,
    loading,
    error
  } = useFetch('https://dummyjson.com/products?limit=12');

  // console.log(data);
  // console.log(loading)
  // console.log(error)
  
  const products = data?.products;
  // console.log(products);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="mb-6 text-3xl font-bold">
        Latest Products
      </h2>
      {/* Loading State */}
      { loading && <LoadingSkeleton /> }

      {/* Error State */}
      { error && (
        <p className="text-red-600">
          { error }
        </p>
      ) }

      {/* Success State */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          products?.map(product =>
            <ProductCard
              key={product.id}
              product={product}
            />
          )
        }
      </div>
    </section>
  )
}

export default Products;