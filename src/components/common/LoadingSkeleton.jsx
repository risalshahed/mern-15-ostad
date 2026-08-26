function LoadingSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-lg border p-4"
        >
          <div className="mb-4 h-48 rounded bg-gray-200" />

          <div className="mb-3 h-4 w-3/4 rounded bg-gray-200" />

          <div className="h-4 w-1/3 rounded bg-gray-200" />
        </div>
      ))}
    </div>
  );
}

export default LoadingSkeleton;