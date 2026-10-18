// 29.7
"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import connectDB from "@/lib/db";
import User from "@/models/User";
import { createSession, deleteSession } from "@/lib/session";

export async function registerAction(prevState, formData) {
  const name = formData.get("name")?.trim();
  const email = formData.get("email")?.trim().toLowerCase();
  const password = formData.get("password");

  if (!name || !email || !password) {
    return { error: "All fields are required" };
  }
  if (password.length < 6) {
    return { error: "Password must be at least 6 characters" };
  }

  await connectDB();

  const exists = await User.findOne({ email });
  if (exists) {
    return { error: "Email already registered" };
  }

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed });

  await createSession(user._id.toString());
  redirect("/dashboard");
}

export async function loginAction(prevState, formData) {
  const email = formData.get("email")?.trim().toLowerCase();
  const password = formData.get("password");

  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  await connectDB();

  const user = await User.findOne({ email });
  const isValid = user && (await bcrypt.compare(password, user.password));

  if (!isValid) {
    // Kon ta bhul seta bolbo na, security er jonno
    return { error: "Invalid email or password" };
  }

  await createSession(user._id.toString());
  redirect("/dashboard");
}

export async function logoutAction() {
  await deleteSession();
  redirect("/");
}