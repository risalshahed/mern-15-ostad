const ProductSearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search products..."
        className="w-full rounded-lg px-4 py-2 outline-0 focus:ring-2 focus:ring-black"
      />
    </div>
  )
}

export default ProductSearch;