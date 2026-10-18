import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) throw new Error("MONGODB_URI not found in .env.local");

// Model gulo ekhane inline likhlam, karon eta standalone script
const User = mongoose.model(
  "User",
  new mongoose.Schema(
    { name: String, email: String, password: String },
    { timestamps: true }
  )
);

const Post = mongoose.model(
  "Post",
  new mongoose.Schema(
    {
      title: String,
      content: String,
      author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
    { timestamps: true }
  )
);

const posts = [
  {
    title: "Getting Started with Next.js",
    content:
      "Next.js is a React framework that gives you routing, server rendering, and API support out of the box. In this post we set up our first project and explore the app folder.",
  },
  {
    title: "Understanding Server Components",
    content:
      "By default every component in the App Router is a Server Component. That means data fetching happens on the server and the browser receives ready-made HTML.",
  },
  {
    title: "Tailwind CSS in 10 Minutes",
    content:
      "Tailwind lets you style elements directly with utility classes like flex, p-4 and text-center. No separate CSS file is needed for most layouts.",
  },
  {
    title: "MongoDB for Beginners",
    content:
      "MongoDB stores data as flexible JSON-like documents. Collections are like tables, and documents are like rows. Mongoose helps us define schemas on top of it.",
  },
  {
    title: "How JWT Authentication Works",
    content:
      "After login the server signs a token that contains the user id. The browser sends it back on every request, and the server verifies the signature to know who you are.",
  },
  {
    title: "Deploying Your App to Vercel",
    content:
      "Push your code to GitHub, import the repository in Vercel, add your environment variables, and click deploy. Your app gets a live URL in about a minute.",
  },
];

async function seed() {
  await mongoose.connect(MONGODB_URI);
  console.log("✅ Connected to:", mongoose.connection.name);

  // Demo user (login korar jonno)
  const email = "demo@devblog.com";
  await User.deleteOne({ email });
  const user = await User.create({
    name: "Demo User",
    email,
    password: await bcrypt.hash("123456", 10),
  });

  // Purano demo post muche notun gulo add
  await Post.deleteMany({ author: user._id });
  await Post.insertMany(posts.map((p) => ({ ...p, author: user._id })));

  console.log(`🌱 Seeded ${posts.length} posts`);
  console.log("🔑 Login: demo@devblog.com / 123456");

  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err.message);
  process.exit(1);
});