import Blogcard from "@/components/Blogcard.jsx";
import { getFeaturedPosts } from "@/lib/api.js";

export default async function Home() {
  // Delay 2s here (NEVER WRITE THIS LINE IN PRODUCTION APP / LIVE WEB APP)
  await new Promise(response => setTimeout(response, 2000));

  // Fetch the Featured Posts
  const posts = await getFeaturedPosts();

  return (
    <section className="max-w-5xl mx-auto p-4">

      {/* Cache Test */}
      <p className="text-center text-sm mb-6 text-gray-500">
        Page rendered at: {new Date().toLocaleTimeString()}
      </p>

      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">
          Welcom to my Blog Site
        </h1>
        <p className="text-gray-600">
          Learn Web Development, one post at a time
        </p>
      </div>

      {/* Blog List */}
      <h2 className="text-2xl font-semibold mb-6">
        Latest Blogs
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          posts.map(post =>
            <Blogcard
              key={post.id}
              post={post}
            />
          )
        }
      </div>
    </section>
  );
}
