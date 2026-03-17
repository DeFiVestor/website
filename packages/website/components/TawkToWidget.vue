<script setup lang="ts">
import { get } from '@vueuse/core';

// Extend window interface for Tawk.to
declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

// Tawk.to widget component - client-side only
const { shouldLoadWidget, isActivePage } = useTawkToWidget();
const route = useRoute();

onMounted(() => {
  console.warn('[TawkToWidget] Component mounted');
  console.warn('[TawkToWidget] Current route:', route.path);
  console.warn('[TawkToWidget] Is active page:', get(isActivePage));
  console.warn('[TawkToWidget] Should load widget:', get(shouldLoadWidget));

  if (!get(shouldLoadWidget)) {
    console.warn('[TawkToWidget] Not loading widget - conditions not met');
    return;
  }

  console.warn('[TawkToWidget] Loading Tawk.to widget...');

  // Check if Tawk.to is already loaded
  if (window.Tawk_API) {
    console.warn('[TawkToWidget] Tawk.to already loaded');
    return;
  }

  // Initialize Tawk_API
  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();

  // Create and inject the script
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://embed.tawk.to/69b82d5d5404a11c372321ac/1jjrn2g50';
  script.charset = 'UTF-8';
  script.setAttribute('crossorigin', '*');

  script.onload = () => {
    console.warn('[TawkToWidget] Tawk.to script loaded successfully');
  };

  script.onerror = (error) => {
    console.error('[TawkToWidget] Failed to load Tawk.to script:', error);
  };

  const firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode?.insertBefore(script, firstScript);
  console.warn('[TawkToWidget] Tawk.to script injected');
});
</script>

<template>
  <div>
    <!-- Tawk.to widget component - renders nothing, just handles script injection -->
  </div>
</template>
