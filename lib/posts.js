// 29.5
import mongoose from "mongoose";
import connectDB from "./db";
import Post from "@/models/Post";

// Mongoose object ke simple object e convert (Client Component e send korte lagbe)
function format(p) {
  return {
    id: p._id.toString(),
    title: p.title,
    content: p.content,
    author: p.author?.name ?? "Unknown",
    authorId: p.author?._id?.toString() ?? null,
    createdAt: p.createdAt.toISOString(),
  };
}

export async function getPosts() {
  await connectDB();
  const posts = await Post.find()
    .sort({ createdAt: -1 })
    .populate("author", "name")
    .lean();
  return posts.map(format);
}

export async function getPostById(id) {
  if (!mongoose.isValidObjectId(id)) return null;
  await connectDB();
  const post = await Post.findById(id).populate("author", "name").lean();
  return post ? format(post) : null;
}

export async function getPostsByUser(userId) {
  await connectDB();
  const posts = await Post.find({ author: userId })
    .sort({ createdAt: -1 })
    .populate("author", "name")
    .lean();
  return posts.map(format);
}