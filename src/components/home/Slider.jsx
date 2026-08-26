import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Summer Collection",
    subtitle: "Discover our latest products",
    image:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Explore products made for you",
    image:
      "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-m3/1.webp",
  },
  {
    id: 3,
    title: "Best Deals",
    subtitle: "Grab your favorite products today",
    image:
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-13/1.webp",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(
      (current) => (current + 1) % slides.length
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (current) =>
        (current - 1 + slides.length) % slides.length
    );
  };

  // Automatically move to the next slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handlePointerDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX);
    setDragOffset(0);

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!isDragging) return;

    const difference = event.clientX - startX;

    setDragOffset(difference);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;

    const threshold = 80;

    if (dragOffset > threshold) {
      prevSlide();
    }

    if (dragOffset < -threshold) {
      nextSlide();
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  return (
    <section className="overflow-hidden bg-gray-100">
      <div
        className="relative mx-auto max-w-7xl touch-pan-y select-none overflow-hidden"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* Slides */}
        <div
          className={`flex ${
            isDragging
              ? ""
              : "transition-transform duration-500 ease-in-out"
          }`}
          style={{
            transform: `translateX(calc(-${
              currentSlide * 100
            }% + ${dragOffset}px))`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex min-w-full items-center justify-between gap-8 px-12 py-16"
            >
              <div>
                <p className="mb-3 text-sm uppercase tracking-widest">
                  Shop Now
                </p>

                <h2 className="text-4xl font-bold">
                  {slide.title}
                </h2>

                <p className="mt-4 text-gray-600">
                  {slide.subtitle}
                </p>

                <button
                  type="button"
                  className="mt-6 rounded bg-black px-6 py-3 text-white transition hover:bg-gray-800"
                  onPointerDown={(event) => {
                    event.stopPropagation();
                  }}
                >
                  Shop Now
                </button>
              </div>

              <img
                src={slide.image}
                alt={slide.title}
                draggable="false"
                className="hidden h-64 w-64 object-contain md:block"
              />
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl shadow-md transition hover:scale-105"
        >
          ←
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl shadow-md transition hover:scale-105"
        >
          →
        </button>

        {/* Indicators */}
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => {
                setCurrentSlide(index);
                setDragOffset(0);
              }}
              className={`h-2.5 rounded-full transition-all ${
                currentSlide === index
                  ? "w-7 bg-black"
                  : "w-2.5 bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;