<script setup lang="ts">
const linkGroups = [
  {
    title: "Navigation",
    links: [
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
      { name: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy", url: "/privacy" },
      { name: "Terms", url: "/terms" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help", url: "/help" },
      { name: "FAQ", url: "/faq" },
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
            v-for="social in socials"
            :key="social.icon"
            :to="social.href"
            target="_blank"
          >
            <Icon :name="social.icon" size="17" />
          </NuxtLink>
        </section>
      </section>
      <section class="flex flex-wrap gap-10 md:justify-end">
        <ul v-for="group in linkGroups" :key="group.title">
          <h1 class="font-semibold mb-2">{{ group.title }}</h1>
          <li v-for="link in group.links" :key="link.name" class="text-sm">
            <NuxtLink :to="link.url">{{ link.name }}</NuxtLink>
          </li>
        </ul>
      </section>
    </section>
  </footer>
</template>
