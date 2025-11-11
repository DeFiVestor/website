<script lang="ts" setup>
import { commonAttrs, getMetadata } from '~/utils/metadata';

useHead({
  title: 'About DeFiVestor - Leading DeFi Investment Platform',
  meta: getMetadata('About DeFiVestor - Leading DeFi Investment Platform', 'Learn about DeFiVestor\'s mission to democratize DeFi investing through innovative tools, comprehensive analytics, and expert guidance for both individual and institutional investors.', '/about-us'),
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
