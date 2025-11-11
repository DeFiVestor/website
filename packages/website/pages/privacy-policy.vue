<script setup lang="ts">
import { commonAttrs, getMetadata } from '~/utils/metadata';

useHead({
  title: 'Privacy Policy - DeFiVestor',
  meta: getMetadata('Privacy Policy - DeFiVestor', 'DeFiVestor\'s privacy policy explains how we collect, use, and protect your personal information when you use our DeFi investment platform and services.', '/privacy-policy'),
  ...commonAttrs(),
});

definePageMeta({
  layout: 'landing',
});
</script>

<template>
  <MarkdownContent path="/documents/privacy-policy" />
</template>
