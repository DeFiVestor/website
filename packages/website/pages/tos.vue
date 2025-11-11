<script setup lang="ts">
import { commonAttrs, getMetadata } from '~/utils/metadata';

useHead({
  title: 'Terms of Service - DeFiVestor',
  meta: getMetadata('Terms of Service - DeFiVestor', 'DeFiVestor\'s terms of service outline the rules and guidelines for using our DeFi investment platform, including user responsibilities and service limitations.', '/tos'),
  ...commonAttrs(),
});

definePageMeta({
  layout: 'landing',
});
</script>

<template>
  <MarkdownContent path="/documents/terms-of-service" />
</template>
