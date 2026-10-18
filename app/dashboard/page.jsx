// 29.12.2
import Link from "next/link";
import { getSession } from "@/lib/session";
import { getPostsByUser } from "@/lib/posts";
import { deletePostAction } from "@/actions/post";

export default async function DashboardPage() {
  const session = await getSession();
  const posts = await getPostsByUser(session.userId);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Posts ({posts.length})</h1>
        <Link href="/dashboard/new" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-500">You have no posts yet. Create your first one!</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-5 rounded-lg shadow flex justify-between items-center">
              <div>
                <h2 className="font-semibold capitalize">{post.title}</h2>
                <p className="text-xs text-gray-400">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Link href={`/dashboard/edit/${post.id}`} className="text-blue-600 hover:underline">
                  Edit
                </Link>
                <form action={deletePostAction.bind(null, post.id)}>
                  <button className="text-red-500 hover:underline">Delete</button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}