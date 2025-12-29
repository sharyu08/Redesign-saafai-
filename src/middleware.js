import { NextResponse } from 'next/server';

export function middleware(request) {
  // Check if the user is authenticated
  const isAuthenticated = request.cookies.get('auth-token');
  const isAuthPage = request.nextUrl.pathname.startsWith('/auth');

  // If user is not authenticated and trying to access dashboard, redirect to sign-in
  if (!isAuthenticated && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/auth/sign-in', request.url));
  }

  // If user is authenticated and trying to access auth pages, redirect to dashboard
  if (isAuthenticated && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/auth/:path*',
  ],
};
