import { NextResponse } from "next/server";

export function middleware(request) {
  const emptyCart = request.cookies.get("emptyCart");
  if (emptyCart === "true" && request.nextUrl.pathname.startsWith("/order"))
    return NextResponse.redirect(new URL("/", request.url));
  else return NextResponse.next();
}
