<template>
  <section
    class="h-[38rem] flex flex-col items-center justify-center text-center"
  >
    <h1 class="text-5xl font-extrabold">A collection of Vue components</h1>
    <p class="text-2xl max-w-4xl mb-10 mt-5">
      This is a collection of Vue components that I have created to help me
      build applications faster. I hope you find them useful too! I using
      <NuxtLink to="https://nuxt.com" target="_blank" class="underline"
        >Nuxt</NuxtLink
      >
      and
      <NuxtLink
        to="https://www.shadcn-vue.com"
        class="underline"
        target="_blank"
        >Shadcn UI</NuxtLink
      >
      to build this project and components.
    </p>
    <TooltipProvider :delay-duration="0">
      <Tooltip>
        <TooltipTrigger as-child>
          <Button size="lg" as-child>
            <NuxtLink
              to="https://github.com/yusufalitangoz/components"
              target="_blank"
            >
              <Icon name="mdi:github" size="25" class="mr-2" />
              Source Code
            </NuxtLink>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Don't forget to star the repository!</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </section>
</template>
