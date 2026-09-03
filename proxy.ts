import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function hasSessionCookie(request: NextRequest) {
  return Boolean(
    request.cookies.get("authjs.session-token") ||
      request.cookies.get("__Secure-authjs.session-token") ||
      request.cookies.get("next-auth.session-token") ||
      request.cookies.get("__Secure-next-auth.session-token")
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const loggedIn = hasSessionCookie(request);

  if (pathname.startsWith("/dashboard") && !loggedIn) {
    const login = new URL("/login", request.url);
    login.searchParams.set("from", pathname);
    return NextResponse.redirect(login);
  }

  if ((pathname === "/login" || pathname === "/register") && loggedIn) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};
