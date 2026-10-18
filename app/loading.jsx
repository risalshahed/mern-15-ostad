export default function Loading() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="h-40 bg-gray-200 rounded-lg animate-pulse" />
      ))}
    </div>
  );
}