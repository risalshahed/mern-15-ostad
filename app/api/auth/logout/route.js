import { NextResponse } from 'next/server'

export async function POST() {
  const response = NextResponse.json({
    message: 'Logout Successful'
  })

  // Delete JWT Cookie
  response.cookies.delete('token');

  return response;
}