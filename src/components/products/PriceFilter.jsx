const PriceFilter = ({
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice
}) => {
  return (
    <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <input
        type="number"
        value={minPrice}
        onChange={e => {
          console.log('Check / Find the Bug Here')
          setMinPrice(e.target.value)
        }}
        placeholder="Minimum Price"
        className="rounded-lg border px-4 py-3"
      />

      <input
        type="number"
        value={maxPrice}
        onChange={e => setMaxPrice(e.target.value)}
        placeholder="Maximum Price"
        className="rounded-lg border px-4 py-3"
      />
    </div>
  )
}

export default PriceFilter;