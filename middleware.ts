export { default } from 'next-auth/middleware'

export const config = {
    matcher: ['/search', '/teacher', '/teacher/courses', '/teacher/courses/:path*']
}