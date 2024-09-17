export { auth as middleware } from "@/auth"
const protectedRoutes = ['/dashboard']
const publicRoutes = ['/login', '/signup', '/']
 

export const config = {
  matcher: "/dashboard",
}