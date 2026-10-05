"use client";

import { useState } from "react";

export default function ReviewSection() {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <section className="mt-8 border p-5 rounded-lg">
      <h2 className="text-2xl font-bold">
        Customer Reviews
      </h2>

      <button
        onClick={() => setShowReviews(!showReviews)}
        className="mt-4 bg-black text-white px-4 py-2 rounded"
      >
        {showReviews ? "Hide Reviews" : "Show Reviews"}
      </button>

      {showReviews && (
        <div className="mt-4">
          <p>Great product!</p>
          <p>Very good quality!</p>
          <p>Highly recommended!</p>
        </div>
      )}
    </section>
  );
}