<script setup lang="ts">
const components = useState("components", () => []);
</script>

<template>
  <main class="container">
    <Header />
    <HeroHeader />
    <section class="grid gap-10 mb-10">
      <Example
        v-for="component in components"
        :component="component"
        :key="component"
      />
    </section>
  </main>
</template>
