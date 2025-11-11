import { get, isClient } from '@vueuse/core';

/**
 * Composable for Tawk.to widget integration
 * Handles conditional loading based on active pages from .clinerules
 */

const activeRoutes = [
  '/',
  '/products',
  '/services',
  '/about-us',
  '/integrations',
  '/jobs',
  '/privacy-policy',
  '/tos',
] as const;

export function useTawkToWidget() {
  const route = useRoute();

  const isActivePage = computed<boolean>(() =>
    activeRoutes.some(activeRoute =>
      route.path === activeRoute || route.path.startsWith(`${activeRoute}/`),
    )
  );

  const shouldLoadWidget = computed<boolean>(() => {
    // Only load on client-side and for active pages
    if (!isClient) {
      return false;
    }
    return get(isActivePage);
  });

  return {
    isActivePage,
    shouldLoadWidget,
  };
}
