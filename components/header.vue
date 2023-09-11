<script lang="ts" setup>
const theme = useTheme();

const toggleTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
};
</script>

<template>
  <header>
    <button @click="toggleTheme">Toggle theme</button>
  </header>
</template>
