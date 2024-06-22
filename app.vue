<template>
  <main class="container">
    <Header />
    <HeroHeader />
    <section class="grid gap-10 mb-10">
      <Example
        v-for="component in ['ColorModeToggle', 'Logo', 'Header']"
        :component="component"
        :key="component"
      />
    </section>
  </main>
</template>
