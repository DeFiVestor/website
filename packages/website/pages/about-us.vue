<script lang="ts" setup>
import { commonAttrs, getMetadata } from '~/utils/metadata';

useHead({
  title: 'About Us',
  meta: getMetadata('rotki', 'About rotki - Our mission and values', '/about-us'),
  ...commonAttrs(),
});

definePageMeta({
  layout: 'landing',
});
</script>

<template>
  <div>
    <ValueHeading />
    <ValueBody />
    <ValueVision />
    <div>
      <div class="container">
        <div class="border-t border-rui-grey-200" />
      </div>
    </div>
    <ValueContact />
    <ProductsFooter />
  </div>
</template>
