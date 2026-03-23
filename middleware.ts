import { NextRequest, NextResponse } from 'next/server'

const protectedPrefixes = ['/management', '/manager', '/employee', '/admin']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isProtected = protectedPrefixes.some((prefix) => pathname.startsWith(prefix))
  const hasUser = request.cookies.has('hycast_user')

  if (isProtected && !hasUser) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/management/:path*', '/manager/:path*', '/employee/:path*', '/admin/:path*'],
}
