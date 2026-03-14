<script setup lang="ts">
const menus: { title: string; showText: boolean; href: string; icon: string }[] = [];
</script>

<template>
  <div class="flex flex-wrap items-center space-x-4">
    <div
      v-for="menu in menus"
      :key="menu.title"
    >
      <ButtonLink
        size="lg"
        :to="menu.href"
        :title="menu.title"
        external
      >
        <span class="flex space-x-2 items-center">
          <span v-if="menu.showText">{{ menu.title }}</span>
          <RuiIcon :name="menu.icon" />
        </span>
      </ButtonLink>
    </div>
  </div>
</template>
