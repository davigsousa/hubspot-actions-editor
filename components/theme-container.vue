<script lang="ts" setup>
const theme = useTheme();
</script>

<template>
  <div :class="theme">
    <slot />
  </div>
</template>
