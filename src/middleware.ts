import { type NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get('accessToken')?.value;

  // 1. If trying to access dashboard without a token, redirect to login (root)
  if (pathname.startsWith('/dashboard') && !accessToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 2. If trying to access login (root) or register while already logged in, redirect to dashboard
  if ((pathname === '/login' || pathname === '/register') && accessToken) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/login', '/register', '/dashboard/:path*'],
};
