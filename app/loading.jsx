const Loading = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {
        [
          ...Array(9)
        ].map((_, i) => (
          <div key={i} className="h-40 bg-gray-200 rounded-lg animate-pulse">

          </div>
        )
      )}
    </div>
  )
}

export default Loading;