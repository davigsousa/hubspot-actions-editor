<script lang="ts" setup>
const theme = useTheme();
</script>

<template>
  <div :class="theme">
    <div class="text-black dark:text-white">
      <slot />
    </div>
  </div>
</template>
