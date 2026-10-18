// 29.17
import { notFound } from "next/navigation";
import { getPostById } from "@/lib/posts";

export default async function BlogDetailsPage({ params }) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) notFound();

  return (
    <article className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold capitalize mb-2">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-8">
        By {post.author} · {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{post.content}</p>
    </article>
  );
}