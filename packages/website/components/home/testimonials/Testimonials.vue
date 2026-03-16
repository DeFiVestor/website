<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'global' });

// Use server: true to pre-render testimonials at build time
// This fetches data at build time, not on each request, dramatically improving Vercel performance
const { data: testimonials } = await useAsyncData(
  'testimonials',
  () => queryCollection('testimonialsLocal').all().then(items => items?.filter((item: any) => item.visible !== false) || []),
  { server: true },
);
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
