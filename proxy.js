import { NextResponse } from "next/server.js";

// Middleware
export function proxy(request) {  // "proxy" naam ta e dte hobe STRICTLY
  const token = request.cookies.get('token');

  if(!token) {
    return NextResponse.redirect(
      new URL('/login', request.url)
    )
  }
  // else
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*'
  ]
}