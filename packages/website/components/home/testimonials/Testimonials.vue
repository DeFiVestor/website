<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'global' });

// Build-time rendering: Use only local collection with visible filter
const { data: testimonials } = await useAsyncData('testimonials', () =>
  queryCollection('testimonialsLocal').all().then((items) =>
    // Filter to only visible testimonials at build time
    items?.filter((item: any) => item.visible !== false) || []
  )
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