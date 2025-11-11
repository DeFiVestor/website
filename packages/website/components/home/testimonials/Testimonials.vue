<script setup lang="ts">
const { fallbackToLocalOnError } = useRemoteOrLocal();

// Check localStorage cache first (24 hour expiry)
const cacheKey = 'testimonials-cache';
const cached = process.client ? localStorage.getItem(cacheKey) : null;
let cachedData = null;

if (cached) {
  try {
    const { data, timestamp } = JSON.parse(cached);
    const isExpired = Date.now() - timestamp > 24 * 60 * 60 * 1000; // 24 hours

    if (!isExpired && data && data.length > 0) {
      cachedData = data;
    }
  }
  catch {
    // Invalid cache, ignore
  }
}

// Use cached data immediately if available, otherwise fetch
const { data: testimonials } = await useAsyncData('testimonials', () => {
  if (cachedData) {
    // Return cached data wrapped in promise
    return Promise.resolve(cachedData);
  }

  return fallbackToLocalOnError(
    async () => await queryCollection('testimonialsRemote').all(),
    async () => await queryCollection('testimonialsLocal').all(),
  );
});

// Cache the result on client side
if (process.client && testimonials.value && testimonials.value.length > 0 && !cachedData) {
  localStorage.setItem(cacheKey, JSON.stringify({
    data: testimonials.value,
    timestamp: Date.now(),
  }));
}

const { t } = useI18n({ useScope: 'global' });
</script>

<template>
  <div :class="$style.testimonials">
    <div class="container">
      <div :class="$style.title">
        {{ t('home.testimonials.title') }}
      </div>
      <div :class="$style.detail">
        {{ t('home.testimonials.detail') }}
      </div>
      <TestimonialCarousel
        v-if="testimonials"
        :testimonials="testimonials"
      />
    </div>
  </div>
</template>

<style lang="scss" module>
.testimonials {
  @apply py-20 w-full overflow-x-hidden bg-rui-primary-lighter/[0.04];
}

.title {
  @apply text-rui-text font-bold text-h4 mb-4;
}

.detail {
  @apply text-rui-text-secondary mb-16;
}
</style>
