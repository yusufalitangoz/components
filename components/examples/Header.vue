<script setup lang="ts">
const links = [
  { name: "Home", href: "/" },
  { name: "Examples", href: "/examples" },
  { name: "About", href: "/about" },
];
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full py-3 bg-zinc-100 dark:bg-black border-b-[1px] z-50"
  >
    <nav class="container flex justify-between">
      <section class="flex items-center gap-5">
        <ExamplesLogo />
        <ul class="hidden md:flex gap-5">
          <li v-for="{ name, href } in links" :key="name">
            <NuxtLink :to="href">
              {{ name }}
            </NuxtLink>
          </li>
        </ul>
      </section>
      <section class="flex items-center gap-3">
        <ExamplesColorModeToggle />
        <Sheet>
          <SheetTrigger class="block md:hidden">
            <Button variant="outline" size="icon">
              <Icon name="ic:round-menu" size="20" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <ul class="grid gap-5 mt-10">
                  <li v-for="{ name, href } in links" :key="name">
                    <NuxtLink :to="href">
                      {{ name }}
                    </NuxtLink>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </section>
    </nav>
  </header>
</template>
