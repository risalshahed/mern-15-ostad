"use client";

export default function Error({ error, reset }) {
  return (
    <div className="text-center py-24">
      <h1 className="text-2xl font-bold mb-3">Something went wrong</h1>
      <p className="text-gray-600 mb-6">{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
      >
        Try again
      </button>
    </div>
  );
}