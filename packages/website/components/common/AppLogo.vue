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

const branch = useRuntimeConfig().public.testing ? 'develop' : 'main';
</script>

<template>
  <ClientOnly>
    <!-- Icon + Custom text when text prop is true -->
    <div
      v-if="text"
      class="flex items-center gap-2"
      v-bind="$attrs"
    >
      <RuiLogo
        :branch="branch"
        logo="website"
      />
      <div class="font-bold text-xl text-rui-text">
        {{ customText }}
      </div>
    </div>
    <!-- Icon only when text prop is false -->
    <RuiLogo
      v-else
      :branch="branch"
      logo="website"
      v-bind="$attrs"
    />
    <template #fallback>
      <RuiLogo
        class="opacity-0 invisible transition delay-1000"
        v-bind="$attrs"
      />
    </template>
  </ClientOnly>
</template>
