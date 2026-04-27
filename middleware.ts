import { NextResponse, type NextRequest } from 'next/server';

const CANONICAL_HOST = 'newarkqualityroofing.com';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.toLowerCase();

  if (host === `www.${CANONICAL_HOST}`) {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
