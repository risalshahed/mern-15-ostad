import LoadingSkeleton from "../components/common/LoadingSkeleton.jsx";
import Brands from "../components/home/Brands.jsx";
import Categories from "../components/home/Categories.jsx";
import Features from "../components/home/Features.jsx";
import HeroSlider from "../components/home/Slider.jsx";
import ProductCard from "../components/products/ProductCard.jsx";
import { useFetch } from "../hooks/useFetch.js";

const Home = () => {
  const {
    data,
    loading,
    error
  } = useFetch('https://dummyjson.com/products?limit=12');

  const products = data?.products || [];

  if(loading) {
    return <LoadingSkeleton />
  }

  if(error) {
    return (
      <p className="text-red-600">
        { error }
      </p>
    )
  }

  return (
    <>
      <HeroSlider />
      <Features />
      <Categories />
      <Brands />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="mb-6 text-3xl font-bold">
          Latest Products
        </h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
    </>
  ) 
}

export default Home;