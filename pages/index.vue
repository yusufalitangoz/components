<script setup lang="ts">
const components = [
  {
    name: "ColorModeToggle",
  },
  {
    name: "Logo",
  },
  {
    name: "Header",
  },
  {
    name: "Footer",
  },
  {
    name: "Error",
    customPreview: "ErrorButton",
  },
];
</script>
<template>
  <main class="container">
    <Header />
    <HeroHeader />
    <section class="grid gap-10 mb-10">
      <Example
        v-for="{ name, customPreview } in components"
        :customPreview="customPreview"
        :name="name"
        :key="name"
      />
    </section>
  </main>
</template>
