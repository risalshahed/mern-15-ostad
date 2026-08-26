import { useFetch } from "../../hooks/useFetch.js";

function Brands() {
  const {
    data,
    loading,
    error,
  } = useFetch(
    "https://dummyjson.com/products?limit=0"
  );

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="h-8 w-40 animate-pulse rounded bg-gray-200" />
      </section>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  const brands = [
    ...new Set(
      data?.products
        .map((product) => product.brand)
        .filter(Boolean)
    ),
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="mb-6 text-3xl font-bold">
        Popular Brands
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {brands.slice(0, 12).map((brand) => (
          <div
            key={brand}
            className="rounded-lg border p-4 text-center font-medium"
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;