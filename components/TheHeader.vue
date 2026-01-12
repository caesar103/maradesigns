<script setup lang="ts">
const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About', to: '/about' }
]
</script>

<template>
  <header class="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <NuxtLink to="/public" class="flex items-center gap-2 text-primary hover:text-opacity-80 transition-opacity">
        <Icon name="ph:paint-brush-broad-duotone" class="w-8 h-8" />
        <span class="text-xl font-bold font-luxury">MaRa Designs</span>
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-6">
        <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="text-gray-700 hover:text-primary font-medium transition-colors"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <NuxtLink
          to="/contact"
          class="bg-secondary hover:bg-opacity-90 text-white font-bold py-2 px-5 rounded-full transition-colors"
      >
        Get a Quote
      </NuxtLink>
    </div>
  </header>
</template>