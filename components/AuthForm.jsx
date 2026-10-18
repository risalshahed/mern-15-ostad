// 29.8
"use client";

import { useActionState } from "react";
import Link from "next/link";

export default function AuthForm({ action, isRegister = false }) {
  const [state, formAction, pending] = useActionState(action, null);

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <form action={formAction} className="bg-white p-6 rounded-lg shadow space-y-4">
        <h1 className="text-2xl font-bold">{isRegister ? "Create Account" : "Welcome Back"}</h1>

        {isRegister && (
          <input name="name" placeholder="Your name" className="w-full border rounded px-3 py-2" />
        )}
        <input name="email" type="email" placeholder="Email" className="w-full border rounded px-3 py-2" />
        <input name="password" type="password" placeholder="Password" className="w-full border rounded px-3 py-2" />

        {state?.error && <p className="text-red-600 text-sm">{state.error}</p>}

        <button
          disabled={pending}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {pending ? "Please wait..." : isRegister ? "Register" : "Login"}
        </button>

        <p className="text-sm text-gray-500 text-center">
          {isRegister ? "Already have an account? " : "No account? "}
          <Link href={isRegister ? "/login" : "/register"} className="text-blue-600 hover:underline">
            {isRegister ? "Login" : "Register"}
          </Link>
        </p>
      </form>
    </div>
  );
}