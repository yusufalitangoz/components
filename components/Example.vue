<script setup lang="ts">
const { name, customPreview } = defineProps<{
  name: string;
  customPreview?: string;
}>();

const copyIcon = ref("icon-park-outline:copy");

function onCopy() {
  navigator.clipboard.writeText(code);
  copyIcon.value = "icon-park-outline:check";
  setTimeout(() => {
    copyIcon.value = "icon-park-outline:copy";
  }, 1500);
}

const code = await import(`@/components/examples/${name}.vue?raw`).then(
  (x) => x.default
);

const preview = await import(
  `@/components/examples/${customPreview || name}.vue`
).then((x) => x.default);
</script>

<template>
  <Tabs default-value="preview">
    <section class="flex gap-2 items-end">
      <h1 class="text-sm font-bold mr-auto">
        {{ name }}
      </h1>
      <TabsList>
        <TabsTrigger value="preview">
          <Icon name="icon-park-outline:preview-open" class="mr-2" size="20" />
          Preview
        </TabsTrigger>
        <TabsTrigger value="code">
          <Icon name="ph:code-bold" class="mr-2" size="20" />
          Code
        </TabsTrigger>
      </TabsList>
      <Button size="icon" variant="secondary" @click="onCopy">
        <Icon :name="copyIcon" size="16" />
      </Button>
    </section>
    <section class="border border-input rounded-lg mt-2 px-2 pb-2">
      <TabsContent value="preview">
        <section class="p-10 flex justify-center [&>*]:relative">
          <component :is="preview" />
        </section>
      </TabsContent>
      <TabsContent value="code">
        <Shiki :code="code" class="bg-[#0d1117] p-5 rounded-lg" />
      </TabsContent>
    </section>
  </Tabs>
</template>
