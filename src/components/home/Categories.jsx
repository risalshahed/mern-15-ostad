import { useContext } from "react";
import { useFetch } from "../../hooks/useFetch.js";
import { AppContext } from "../../context/index.js";
import LoadingSkeleton from "../common/LoadingSkeleton.jsx";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const {
    data,
    loading,
    error
  } = useFetch('https://dummyjson.com/products/categories');

  console.log('In categories', data);

  const {
    selectedCategory,
    setSelectedCategory
  } = useContext(AppContext);

  if(loading) {
    return <LoadingSkeleton />
  }

  if(error) {
    <p className="text-red-600">
      { error }
    </p>
  }

  // else
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="mb-6 text-3xl font-bold">
        Shop by Category
      </h2>
      <div className="flex flex-wrap gap-3">
        {
          data?.slice(0, 8).map(category =>
            <button
              key={crypto.randomUUID()}
              onClick={() => {
                setSelectedCategory(category.slug)
                navigate('/products')
              }}
              className={`rounded-full border px-4 py-2 ${
              selectedCategory === category.slug
                ? "bg-black text-white"
                : ""
            }`}
            >
              {category.name}
            </button>
          )
        }
      </div>
    </section>
  )
}

export default Categories;