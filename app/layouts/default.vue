<script setup lang="ts"></script>

<template>
  <div class="min-h-svh flex flex-col">
    <header class="border-b">
      <!-- mx-[...]: logical property; sets left and right margins in horizontal writing modes to auto -->
      <div
        class="mx-auto w-full max-w-7xl px-4 py-3 flex flex-row items-start md:items-center justify-between"
      >
        <NuxtLink
          to="/"
          class="font-semibold text-2xl px-8 py-6 rounded-lg focus:outline-none focus:ring"
        >
          AccessLab
        </NuxtLink>

        <div class="flex flex-col sm:flex-row gap-4">
          <ColorModeToggle />
        </div>
      </div>
    </header>

    <main id="content" tabindex="-1" class="flex-1">
      <div class="mx-auto w-full max-w-7xl px-4 py-8">
        <slot></slot>
      </div>
    </main>

    <footer class="mt-auto border-t">
      <div
        class="mx-auto w-full max-w-7xl px-4 py-6 text-sm flex items-center justify-between"
      >
        <p>AccessLab {{ new Date().getFullYear() }}</p>
      </div>
    </footer>
  </div>
</template>
