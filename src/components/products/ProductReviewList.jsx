function ProductReviewList({ reviews }) {
  return (
    <section className="mt-16">
      <h2 className="mb-6 text-3xl font-bold">
        Customer Reviews
      </h2>

      {reviews.length === 0 ? (
        <p className="text-gray-500">
          No reviews available.
        </p>
      ) : (
        <div className="space-y-4">
          {reviews.map(review =>
            <article
              key={crypto.randomUUID()}
              className="rounded-lg border p-5"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">
                  {review.reviewerName}
                </h3>

                <span>
                  ⭐ {review.rating}
                </span>
              </div>

              <p className="mt-3 text-gray-600">
                {review.comment}
              </p>

              <p className="mt-4 text-sm text-gray-400">
                {new Date(
                  review.date
                ).toLocaleDateString()}
              </p>
            </article>
          )}
        </div>
      )}
    </section>
  );
}

export default ProductReviewList;