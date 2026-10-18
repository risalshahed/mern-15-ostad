// 29.15
import PostForm from "@/components/PostForm";
import { createPostAction } from "@/actions/post";

export default function NewPostPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Create New Post</h1>
      <PostForm action={createPostAction} buttonText="Publish" />
    </div>
  );
}