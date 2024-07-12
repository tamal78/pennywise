import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: req =>
    !req.url.startsWith('/dashboard') &&
    !req.url.startsWith('/api') &&
    !req.url.startsWith('/wizard')
});
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
};
