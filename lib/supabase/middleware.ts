import { type NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const authRoutes = ["/auth"];
  const secureRoutes = ["/admin"];

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && authRoutes.some((e) => request.nextUrl.pathname.startsWith(e)))
    return supabaseResponse;

  if (user && authRoutes.some((e) => request.nextUrl.pathname.startsWith(e)))
    return NextResponse.redirect(new URL("/community", request.url));

  if (
    !user &&
    secureRoutes.some((e) => request.nextUrl.pathname.startsWith(e))
  ) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return supabaseResponse;
}
