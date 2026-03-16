<script setup lang="ts">
import { useDynamicMessages } from '~/composables/dynamic-message';
import { commonAttrs, getMetadata } from '~/utils/metadata';

const description
  = 'DeFiVestor is a comprehensive DeFi investment platform that helps you discover, analyze, and invest in decentralized finance opportunities with confidence.';

const keywords = `defi,defi-investing,decentralized-finance,cryptocurrency,blockchain,investment,portfolio,ethereum,polygon,arbitrum,
yield-farming,liquidity-mining,staking,decentralized-exchange,dex,smart-contracts,crypto-investment,defi-analytics`;

useHead({
  title: 'DeFiVestor - Smart DeFi Investment Platform',
  meta: [
    {
      name: 'keywords',
      content: keywords,
    },
    ...getMetadata('DeFiVestor - Smart DeFi Investment Platform', description, ''),
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'DeFiVestor',
        'url': 'https://defivestor.com',
        'logo': 'https://defivestor.com/android-chrome-192x192.png',
        description,
        'sameAs': [
          'https://twitter.com/defivestors',
          'https://t.me/defivestors',
          'https://discord.defivestor.com',
        ],
        'contactPoint': {
          '@type': 'ContactPoint',
          'email': 'info@defivestor.com',
          'contactType': 'customer service',
        },
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': 'DeFiVestor',
        'url': 'https://defivestor.com',
        description,
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://defivestor.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      }),
    },
  ],
  ...commonAttrs(),
});

const { fetchMessages, activeDashboardMessages } = useDynamicMessages();

onBeforeMount(() => {
  fetchMessages();
});

definePageMeta({
  layout: 'landing',
});
</script>

<template>
  <DynamicMessageDisplay
    v-if="activeDashboardMessages.length > 0"
    :messages="activeDashboardMessages"
  />
  <HomeBanner />
  <FeatureList />
  <Testimonials />
  <PremiumFeatures />
  <AvailablePlans />
  <ProductsFooter />
</template>
