const ProductCard = ({ product }) => {
  const { thumbnail, title, brand, price, rating } = product;

  return (
    <article className="rounded-lg border p-4">
      <img
        className="mb-4 h-48 w-full object-contain"
        src={thumbnail}
        alt={title}
      />

      <p className="text-sm text-gray-500">
        { brand }
      </p>

      <h3 className="mt-1 font-semibold">
        { title }
      </h3>
    </article>
  )
}

export default ProductCard;