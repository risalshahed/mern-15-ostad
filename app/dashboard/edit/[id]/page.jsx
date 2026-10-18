// 29.16
import { notFound } from "next/navigation";
import PostForm from "@/components/PostForm";
import { getPostById } from "@/lib/posts";
import { getSession } from "@/lib/session";
import { updatePostAction } from "@/actions/post";

export default async function EditPostPage({ params }) {
  const { id } = await params;
  const session = await getSession();
  const post = await getPostById(id);

  if (!post || post.authorId !== session.userId) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Edit Post</h1>
      <PostForm action={updatePostAction.bind(null, id)} post={post} buttonText="Update Post" />
    </div>
  );
}