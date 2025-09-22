<script setup lang="ts">
const { items } = useNavigationMenu();
</script>

<template>
  <div class="flex min-h-svh flex-col">
    <header class="relative z-40 border-b">
      <UContainer
        class="flex flex-col items-start justify-between gap-4 py-3 md:flex-row md:items-center"
      >
        <!-- mx-[...]: logical property; sets left and right margins in horizontal writing modes to auto -->
        <div
          class="header-content mx-auto flex w-full max-w-7xl flex-row items-start justify-between py-3 pr-4 md:items-center"
        >
          <NuxtLink
            to="/"
            class="logo rounded-lg px-2 text-2xl font-semibold focus:ring focus:outline-none sm:px-4"
          >
            AccessLab
          </NuxtLink>
          <div class="flex flex-col gap-4 sm:flex-row">
            <ColorModeToggle />
          </div>
        </div>
      </UContainer>
    </header>

    <main id="content" class="flex-1">
      <UContainer class="py-8">
        <div class="grid gap-8 md:grid-cols-[16rem_minmax(0,1fr)]">
          <aside class="self-start md:sticky md:top-24">
            <UNavigationMenu
              orientation="vertical"
              :items="items"
              class="xs:w-64 w-full"
              :ui="{
                link: 'theme-colors-transition',
                childLink: 'theme-colors-transition',
                content: 'theme-colors-transition',
                // keep your existing overrides:
                linkLeadingIcon: 'size-5',
                linkLabel: 'text-lg',
                viewportWrapper:
                  'absolute inset-x-0 top-full pointer-events-none',
                viewport: 'pointer-events-auto',
              }"
            />
          </aside>
          <section class="min-w-0">
            <NuxtPage />
          </section>
        </div>
      </UContainer>
    </main>

    <footer class="mt-auto border-t">
      <UContainer class="text-md flex items-center justify-between py-6">
        <p>
          AccessLab
          {{ new Date().getFullYear() }}
        </p>
      </UContainer>
    </footer>
  </div>
</template>
