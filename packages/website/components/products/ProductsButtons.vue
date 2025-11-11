<script setup lang="ts">
import type { ContextColorsType } from '@rotki/ui-library';

withDefaults(
  defineProps<{
    color?: ContextColorsType;
    onlyPremium?: boolean;
  }>(),
  {
    onlyPremium: false,
  },
);

const { t } = useI18n({ useScope: 'global' });
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <ButtonLink
      v-if="!onlyPremium"
      variant="outlined"
      to="https://app.defivestor.com/login"
      size="lg"
      :color="color"
      :class="{ '!outline-white !text-rui-dark-text': !color }"
      external
    >
      {{ t('actions.get_started_for_free') }}
    </ButtonLink>

    <ButtonLink
      to="https://app.defivestor.com/register"
      size="lg"
      variant="filled"
      :color="color"
      external
    >
      {{ t('actions.get_premium') }}
    </ButtonLink>
  </div>
</template>
