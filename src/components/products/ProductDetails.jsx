import ProductReviewList from "./ProductReviewList";

function ProductDetails({ product }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Product Image */}
        <div className="rounded-lg border p-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-96 w-full object-contain"
          />
        </div>

        {/* Product Information */}
        <div>
          <p className="text-sm uppercase text-gray-500">
            {product.brand}
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            {product.title}
          </h1>

          <p className="mt-4 text-gray-500">
            Category: {product.category}
          </p>

          <p className="mt-3">
            ⭐ {product.rating}
          </p>

          <h2 className="mt-6 text-3xl font-bold">
            ${product.price}
          </h2>

          <p className="mt-6 leading-7 text-gray-600">
            {product.description}
          </p>

          <p className="mt-6">
            Stock: {product.stock}
          </p>

          <button className="mt-8 rounded bg-black px-6 py-3 text-white">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews */}
      <ProductReviewList
        reviews={product.reviews || []}
      />
    </section>
  );
}

export default ProductDetails;