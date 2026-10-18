import BlogCard from "@/components/Blogcard.jsx";
import { getPosts } from "@/lib/posts.js";

export const dynamic = "force-dynamic"; // DB data, tai protibar fresh

export default async function Home() {
  // Fetch the posts from MongoDB
  const posts = await getPosts();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Welcome to DevBlog</h1>
        <p className="text-gray-600">Learn web development, one post at a time.</p>
      </section>

      {/* Blog List */}
      <h2 className="text-2xl font-semibold mb-6">Latest Posts</h2>

      {posts.length === 0 ? (
        <p className="text-gray-500">No posts yet. Be the first to write one!</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}