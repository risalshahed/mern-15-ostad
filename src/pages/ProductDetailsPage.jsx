import { useParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";


import LoadingSkeleton from "../components/common/LoadingSkeleton.jsx";
import ProductDetails from "../components/products/ProductDetails.jsx";

// 16
function ProductDetailsPage() {
  const { id } = useParams();

  const {
    data: product,
    loading,
    error,
  } = useFetch(
    `https://dummyjson.com/products/${id}`
  );

  if (loading) {
    return (
      <p className="py-20 text-center">
        <LoadingSkeleton />
      </p>
    );
  }

  if (error) {
    return (
      <p className="py-20 text-center text-red-500">
        {error}
      </p>
    );
  }

  return (
    <ProductDetails product={product} />
  );
}

export default ProductDetailsPage;