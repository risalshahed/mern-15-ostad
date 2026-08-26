const features = [
  {
    title: "Free Shipping",
    description: "Free shipping on selected orders",
  },
  {
    title: "Secure Payment",
    description: "100% secure payment system",
  },
  {
    title: "Easy Return",
    description: "Simple and easy return policy",
  },
  {
    title: "24/7 Support",
    description: "We are always here to help",
  },
];

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid gap-6 md:grid-cols-4">
        {
          features.map(feature =>
            <div
              key={crypto.randomUUID()}
              className="rounded-lg border p-6"
            >
              <h3 className="font-bold">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default Features;