<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

withDefaults(defineProps<{
  text?: boolean;
  customText?: string;
}>(), {
  text: false,
  customText: 'DeFiVestor',
});
</script>

<template>
  <ClientOnly>
    <!-- Icon + Custom text when text prop is true -->
    <div
      v-if="text"
      class="flex items-center gap-2"
      v-bind="$attrs"
    >
      <img
        src="/img/logo-small.svg"
        alt="DeFiVestor Logo"
        class="h-8 w-auto"
      />
      <div class="font-bold text-xl text-rui-text">
        {{ customText }}
      </div>
    </div>
    <!-- Icon only when text prop is false -->
    <img
      v-else
      src="/img/logo-small.svg"
      alt="DeFiVestor Logo"
      class="h-8 w-auto"
      v-bind="$attrs"
    />
    <template #fallback>
      <img
        src="/img/logo-small.svg"
        alt="DeFiVestor Logo"
        class="h-8 w-auto opacity-0 invisible transition delay-1000"
        v-bind="$attrs"
      />
    </template>
  </ClientOnly>
</template>
