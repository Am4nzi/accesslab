<script setup lang="ts">
const colorMode = useColorMode();

function setMode(mode: "light" | "dark") {
  colorMode.preference = mode;
}
</script>

<template>
  <div class="flex gap-4" role="group" aria-label="Color mode">
    <ClientOnly>
      <UButton
        :variant="colorMode.value === 'light' ? 'solid' : 'outline'"
        size="lg"
        class="cursor-pointer min-w-[180px] min-h-[48px] justify-center rounded-full group"
        :aria-pressed="colorMode.value === 'light'"
        aria-label="Activate light mode"
        icon="i-lucide-sun"
        :ui="{
          leadingIcon:
            colorMode.value === 'light'
              ? 'size-7'
              : 'size-6 group-hover:size-7 transition-all duration-140',
        }"
        @click="setMode('light')"
      >
        <span
          class="text-xl transition-all duration-200 group-hover:font-bold"
          :class="colorMode.value === 'light' ? 'font-bold' : 'font-normal'"
        >
          Light mode
        </span>
      </UButton>

      <UButton
        :variant="colorMode.value === 'dark' ? 'solid' : 'outline'"
        size="lg"
        class="cursor-pointer min-w-[180px] min-h-[48px] justify-center rounded-full group"
        :aria-pressed="colorMode.value === 'dark'"
        aria-label="Activate dark mode"
        icon="i-lucide-moon"
        :ui="{
          leadingIcon:
            colorMode.value === 'dark'
              ? 'size-7'
              : 'size-6 group-hover:size-7 transition-all duration-140',
        }"
        @click="setMode('dark')"
      >
        <span
          class="text-xl transition-all duration-200 group-hover:font-bold"
          :class="colorMode.value === 'dark' ? 'font-bold' : 'font-normal'"
          >Dark mode</span
        >
      </UButton></ClientOnly
    >
  </div>
</template>
