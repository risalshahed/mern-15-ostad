// 29.12.1
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function proxy(request) {
  const token = request.cookies.get("session")?.value;

  let isValid = false;
  if (token) {
    try {
      await jwtVerify(token, secret);
      isValid = true;
    } catch {}
  }

  if (!isValid) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // shudhu ei route gulo protect
};