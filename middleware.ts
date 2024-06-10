
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Define routes that require authentication
  const protectedRoutes = ['/protected'];

  // Check if the requested URL is in the protected routes
  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    // If no token is found, redirect to the sign-in page
    if (!token) {
      const signInUrl = new URL('/sign-in', req.url);
      signInUrl.searchParams.set('callbackUrl', req.nextUrl.pathname);
      return NextResponse.redirect(signInUrl);
    }
  }

  // Allow the request to continue if it matches no protected route or if the user is authenticated
  return NextResponse.next();
}

// Specify the paths to include middleware for
export const config = {
  matcher: ['/protected/:path*'],
};
