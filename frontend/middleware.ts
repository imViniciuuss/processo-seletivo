import { NextRequest, NextResponse } from 'next/server'
import { getUrl } from '@/lib/get-url'


export function middleware(request: NextRequest) {
  const token = request.cookies.get('authjs.session-token')
  const pathname = request.nextUrl.pathname

  if (!token && pathname !== '/auth/login') {
    return NextResponse.redirect(new URL(getUrl('/auth/login')))
  }

    if (token && pathname === '/auth/login') {
    return NextResponse.redirect(new URL(getUrl('/')))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}