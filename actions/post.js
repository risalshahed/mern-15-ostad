// 29.13
"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import connectDB from "@/lib/db";
import Post from "@/models/Post";
import { getSession } from "@/lib/session";

export async function createPostAction(prevState, formData) {
  const session = await getSession();
  if (!session) redirect("/login"); // Very Important Logic

  const title = formData.get("title")?.trim();
  const content = formData.get("content")?.trim();

  if (!title || !content) {
    return { error: "Title and content are required" };
  }

  try {
    await connectDB();
    await Post.create({ title, content, author: session.userId });
  } catch (err) {
    return { error: "Could not create post. Please try again." };
  }

  revalidatePath("/");
  revalidatePath("/dashboard");
  redirect("/dashboard"); // redirect try/catch er baire rakhte hobe
}

export async function updatePostAction(id, prevState, formData) {
  const session = await getSession();
  if (!session) redirect("/login");

  const title = formData.get("title")?.trim();
  const content = formData.get("content")?.trim();

  if (!title || !content) {
    return { error: "Title and content are required" };
  }

  try {
    await connectDB();
    // _id + author dui-ta match korle tobei update, onner post edit kora jabe na
    const post = await Post.findOneAndUpdate(
      { _id: id, author: session.userId },
      { title, content }
    );
    if (!post) return { error: "Post not found or not allowed" };
  } catch (err) {
    return { error: "Could not update post. Please try again." };
  }

  revalidatePath("/");
  revalidatePath("/dashboard");
  revalidatePath(`/blog/${id}`);
  redirect("/dashboard");
}

export async function deletePostAction(id) {
  const session = await getSession();
  if (!session) redirect("/login");

  await connectDB();
  await Post.findOneAndDelete({ _id: id, author: session.userId });

  revalidatePath("/");
  revalidatePath("/dashboard");
}