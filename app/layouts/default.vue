<script setup lang="ts">
interface NavLink {
  label: string;
  to: string;
}

const navLinks: NavLink[] = [{ label: "Home", to: "/" }];
</script>

<template>
  <div class="min-h-svh flex flex-col">
    <header class="border-b">
      <!-- mx-[...]: logical property; sets left and right margins in horizontal writing modes to auto -->
      <div
        class="mx-auto w-full max-w-7xl px-4 py-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <NuxtLink
          to="/"
          class="font-semibold text-2xl px-8 py-6 rounded-lg focus:outline-none focus:ring"
        >
          AccessLab
        </NuxtLink>

        <nav aria-label="Primary navigation" class="w-full sm:w-auto">
          <ul class="flex flex-wrap items-center gap-4 sm:gap-6">
            <li v-for="link in navLinks" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="inline-flex items-center px-8 py-6 text-2xl rounded-lg"
                :aria-current="$route.path === link.to ? 'page' : undefined"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <ColorModeToggle class="mt-2 sm:mt-0" />
      </div>
    </header>

    <!-- Main (skip-link target) -->
    <main id="content" tabindex="-1" class="flex-1">
      <div class="mx-auto w-full max-w-7xl px-4 py-8">
        <slot></slot>
      </div>
    </main>

    <!-- Footer -->
    <footer class="mt-auto border-t">
      <div
        class="mx-auto w-full max-w-7xl px-4 py-6 text-sm flex items-center justify-between"
      >
        <p>AccessLab {{ new Date().getFullYear() }}</p>
      </div>
    </footer>
  </div>
</template>
