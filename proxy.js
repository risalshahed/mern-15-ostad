import { NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'

export function proxy(request) {
  // Get JWT from Cookie
  const token = request.cookies.get('token')?.value;

  // Verify JWT
  const user = token ? verifyToken(token) : null;

  // Dashboard -> Requires Login
  if(
    request.nextUrl.pathname.startsWith('/dashboard')
    &&
    !user
  ) {
    return NextResponse.redirect(
      new URL('/login', request.url)
    )
  }

  // Admin -> Requres Admin Role
  if(
    request.nextUrl.pathname.startsWith('/admin')
    &&
    (!user || user.role !== 'admin')
  ) {
    return NextResponse.redirect(
      new URL('/dashboard', request.url)
    )
  }

  return NextResponse.next();
}

// Only Protect these routes
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*'
  ]
}