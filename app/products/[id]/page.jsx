"use client";

import dynamic from "next/dynamic";

const ReviewSection = dynamic(
  () => import("../../../components/ReviewSection")
);

export default function ProductPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        MacBook Pro
      </h1>

      <p className="mt-4">
        This is our MacBook Pro product page.
      </p>

      <ReviewSection />
    </main>
  );
}