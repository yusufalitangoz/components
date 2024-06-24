<script setup lang="ts">
const linkGroups = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help", href: "/help" },
      { name: "FAQ", href: "/faq" },
    ],
  },
];
const socials = [
  {
    icon: "prime:twitter",
    href: "https://www.twitter.com",
  },
  {
    icon: "bi:instagram",
    href: "https://www.instagram.com",
  },
  {
    icon: "bi:linkedin",
    href: "https://www.linkedin.com",
  },
];
</script>

<template>
  <footer class="bg-zinc-100 dark:bg-black border-t-[1px] w-full">
    <section class="container p-10 grid md:grid-cols-2 gap-10">
      <section class="flex flex-col gap-2 place-items-start">
        <ExamplesLogo />
        <p class="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, in
          exercitationem.
        </p>
        <section class="flex flex-wrap gap-2">
          <NuxtLink
            v-for="{ icon, href } in socials"
            target="_blank"
            :key="icon"
            :to="href"
          >
            <Icon :name="icon" size="17" />
          </NuxtLink>
        </section>
      </section>
      <section class="flex flex-wrap gap-10 md:justify-end">
        <ul v-for="{ title, links } in linkGroups" :key="title">
          <h1 class="font-semibold mb-2">{{ title }}</h1>
          <li v-for="{ name, href } in links" :key="name" class="text-sm">
            <NuxtLink :to="href">{{ name }}</NuxtLink>
          </li>
        </ul>
      </section>
    </section>
  </footer>
</template>
