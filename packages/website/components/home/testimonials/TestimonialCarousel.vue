<script setup lang="ts">
import type { Swiper, SwiperOptions } from 'swiper/types';
import { get, set } from '@vueuse/core';
import { SwiperSlide } from 'swiper/vue';

const props = defineProps<{
  testimonials: any[];
}>();

const swiper = ref<Swiper>();
const pages = ref(get(swiper)?.snapGrid.length ?? 1);
const activeIndex = ref((get(swiper)?.activeIndex ?? 0) + 1);

// Initially show only first 6 testimonials for faster loading
const visibleTestimonials = ref(props.testimonials.slice(0, 6));

// Load remaining testimonials after carousel is ready
onMounted(() => {
  nextTick(() => {
    if (props.testimonials.length > 6) {
      // Load remaining testimonials with a small delay to prioritize initial render
      setTimeout(() => {
        visibleTestimonials.value = props.testimonials;
      }, 100);
    }
  });
});

const breakpoints: Record<number, SwiperOptions> = {
  // when window width is >= 320px
  320: {
    slidesPerView: 1.1,
    spaceBetween: 11,
  },
  425: {
    slidesPerView: 1.2,
    spaceBetween: 13,
  },
  640: {
    slidesPerView: 1.3,
    spaceBetween: 16,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 24,
  },
};

function onSwiperUpdate(s: Swiper) {
  set(swiper, s);
  set(activeIndex, s.activeIndex + 1);
  set(pages, s.snapGrid.length);
}
</script>

<template>
  <div :class="$style.content">
    <Carousel
      :autoplay="{
        delay: 10000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      :breakpoints="breakpoints"
      :class="$style.slider"
      auto-height
      @swiper="onSwiperUpdate($event)"
      @slide-change="onSwiperUpdate($event)"
    >
      <SwiperSlide
        v-for="(testimonial, i) in visibleTestimonials"
        :key="i"
      >
        <Testimonial
          :avatar="testimonial.avatar"
          :body="testimonial.body"
          :url="testimonial.url"
          :username="testimonial.username"
        />
      </SwiperSlide>
    </Carousel>
    <CarouselControls
      v-if="swiper"
      v-model:swiper="swiper"
      :class="$style.stepper"
      :active-index="activeIndex"
      :pages="pages"
    />
  </div>
</template>

<style lang="scss" module>
.content {
  @apply flex flex-col gap-4;

  .slider {
    @apply mb-12;
  }

  .stepper {
    @apply max-w-[17.5rem];
  }
}
</style>
