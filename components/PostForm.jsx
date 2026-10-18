// 29.14
"use client";

import { useActionState } from "react";

export default function PostForm({ action, post, buttonText }) {
  const [state, formAction, pending] = useActionState(action, null);

  return (
    <form action={formAction} className="space-y-4 bg-white p-6 rounded-lg shadow">
      <input
        name="title"
        defaultValue={post?.title}
        placeholder="Post title"
        className="w-full border rounded px-3 py-2"
      />
      <textarea
        name="content"
        defaultValue={post?.content}
        rows={8}
        placeholder="Write your post..."
        className="w-full border rounded px-3 py-2"
      />

      {state?.error && <p className="text-red-600 text-sm">{state.error}</p>}

      <button
        disabled={pending}
        className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {pending ? "Saving..." : buttonText}
      </button>
    </form>
  );
}