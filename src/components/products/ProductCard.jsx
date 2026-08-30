import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
  const { id, thumbnail, title, brand, category, price, rating } = product;

  return (
    <section className="overflow-hidden rounded-lg border bg-white p-4 transition hover:shadow-lg">
      <Link to={`/products/${id}`}>
        <img
          src={thumbnail}
          alt={title}
          className="h-40 w-full object-contain"
        />
        <p className="mt-4 text-sm text-gray-500">
          {brand}
        </p>
        <h3 className="mt-1 font-semibold">
          {title}
        </h3>
        <p className="mt-4 text-sm text-gray-500">
          {category}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold">
            ${price}
          </span>
          <span className="text-sm">
            * {rating}
          </span>
        </div>
      </Link>

    </section>
  )
}

export default ProductCard;