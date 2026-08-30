const ProductFilters = ({
  categories,
  brands,
  selectedCategory,
  setSelectedCategory,
  selectedBrand,
  setSelectedBrand
}) => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {/* Category Filter */}
      <select
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
        className="rounded-lg border px-4 y-3"
      >
        <option value="">
          All Categories
        </option>

        {
          categories.map(category =>
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          )
        }
      </select>
      {/* Brand Filter */}
      <select
        value={selectedBrand}
        onChange={e => setSelectedBrand(e.target.value)}
        className="rounded-lg border px-4 y-3"
      >
        <option value="">
          All Brands
        </option>

        {
          brands.map(brand =>
            <option
              key={brand}
              value={brand}
            >
              {brand}
            </option>
          )
        }
      </select>
    </div>
  )
}

export default ProductFilters;