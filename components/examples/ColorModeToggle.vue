<script setup lang="ts">
const colorMode = useColorMode();

const icon = new Map([
  ["system", "eva:monitor-outline"],
  ["dark", "akar-icons:moon"],
  ["light", "ph:sun"],
]);
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button size="icon" variant="outline">
        <ClientOnly>
          <Icon :name="icon.get(colorMode.preference)!" size="18" />
        </ClientOnly>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem @click="colorMode.preference = 'light'">
        Light
      </DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'dark'">
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'system'">
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
