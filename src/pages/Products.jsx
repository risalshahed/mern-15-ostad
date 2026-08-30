import { useContext, useState } from "react";
import ProductList from "../components/products/ProductList.jsx";
import { useFetch } from "../hooks/useFetch.js";
import { AppContext } from "../context/index.js";
import ProductSearch from "../components/products/ProductSearch.jsx";
import LoadingSkeleton from "../components/common/LoadingSkeleton.jsx";
import ProductFilters from "../components/products/ProductFilters.jsx";
import PriceFilter from "../components/products/PriceFilter.jsx";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const {
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand
  } = useContext(AppContext);

  const {
    data,
    loading,
    error
  } = useFetch('https://dummyjson.com/products?limit=0'); // limit=0 -> GET ALL Products (See API Doc https://dummyjson.com/docs/products for Details)

  const products = data?.products || [];

  // Get Unique Categories
  const categories = [
    ...new Set(
      products.map(product => product.category)
      .filter(Boolean)
    )
  ]

  // Get Unique Brands
  const brands = [
    ...new Set(
      products.map(product => product.brand)
      .filter(Boolean)
    )
  ]

  // Search Filter
  let filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Category Filter
  if(selectedCategory) {
    filteredProducts = filteredProducts.filter(product =>
      product.category === selectedCategory
    )
  }

  // Brand Filter
  if(selectedBrand) {
    filteredProducts = filteredProducts.filter(product =>
      product.brand === selectedBrand
    )
  }

  // Minimum price filter
  if (minPrice) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= Number(minPrice)
    );
  }

  // Maximum price filter
  if (maxPrice) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price <= Number(maxPrice)
    );
  }

  if(loading) {
    return <LoadingSkeleton />
  }

  if(error) {
    <p className="text-red-600 py-10 text-center">
      { error }
    </p>
  }
  // else
  return (
    <section className="max-w-7xl mx-auto px-4 py-3">
      <h1 className="mb-8 text-4xl font-bold">
        Products
      </h1>

      <div className="mb-10 rounded-lg border p-5">
        {/* Product Search */}
        <ProductSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        {/* Product Filters */}
        <ProductFilters
          categories={categories}
          brands={brands}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
        />
        {/* Price Filter */}
        <PriceFilter
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
      </div>

      <p className="mb-6 text-gray-500">
        {filteredProducts.length} products found
      </p>
      
      {/* Product List */}
      {/* <ProductList products={products} /> */}
      <ProductList products={filteredProducts} />
    </section>
  )
}

export default Products;