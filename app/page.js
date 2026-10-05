import Image from "next/image";

import laptop from './images/laptop.png'

// 1 Performance Optimization

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        Next.js Performance
      </h1>

      <p className="mt-4">
        Welcome to our optimized Next.js application.
      </p>

      <p className="mt-4">
        Optimized Images
        +
        Less JavaScript
        +
        Lazy Loading
        +
        Caching
        +
        Server Components
                ↓
        Better Performance
      </p>

      {/* 2 Image Otimization */}
      <h1 className="text-3xl font-bold">
        Image Optimization
      </h1>

      <Image
        src={laptop}
        alt="Laptop"
        width={600}
        height={400}
        className="mt-6 rounded-lg"
      />

      {/* Image from Cloud */}
      <Image
        src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
        alt="Laptop"
        width={600}
        height={400}
      />
      
    </main>
  );
}