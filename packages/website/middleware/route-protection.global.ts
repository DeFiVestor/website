export default defineNuxtRouteMiddleware((to) => {
  // List of allowed routes for DeFiVestor landing page
  const allowedRoutes = [
    '/',
    '/products',
    '/services',
    '/about-us',
    '/integrations',
    '/jobs',
    '/jobs/backend',
    '/jobs/frontend',
    '/jobs/ui-ux',
    '/privacy-policy',
    '/tos',
  ];

  // Check if the current route is in the allowed list
  if (!allowedRoutes.includes(to.path)) {
    // Return 404 for disallowed routes
    throw createError({
      statusCode: 404,
      statusMessage: 'Page not found',
    });
  }
});
