<script setup lang="ts">
import { commonAttrs, getMetadata } from '~/utils/metadata';

const title = 'DeFiVestor Products - Advanced DeFi Investment Tools';
const description = 'Explore DeFiVestor\'s comprehensive suite of DeFi investment products including portfolio analytics, yield farming tools, risk assessment, and automated investment strategies.';

useHead({
  title,
  meta: getMetadata(title, description, '/products/'),
  ...commonAttrs(),
});

definePageMeta({
  layout: 'landing',
});
</script>

<template>
  <ProductsHeading />
  <ProductsBlocks />
  <ProductsLimits />
  <ProductsUnlockNudge />
  <ProductsAnalytics />
  <ProductsTimeframe />
  <ProductsMoneriumAndSync />
  <ProductsFooter />
</template>
